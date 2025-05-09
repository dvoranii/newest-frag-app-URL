// /src/services/scraper.service.ts
import * as Puppeteer from "puppeteer";

interface FragranceData {
    name: string;
    brand: string;
    image: string;
    gender?: string;
    rating?: {
        value: number;
        count: number;
    };
    accords?: {
        name: string;
        width: string;
        background: string;
        color: string;
    }[];
    brandLogo?: string;
    notes?: {
        top: { name: string; image: string }[];
        middle: { name: string; image: string }[];
        base: { name: string; image: string }[];
    };
    perfumers?: { name: string; image: string }[];
}

class ScraperService {
    private browser: Puppeteer.Browser | null = null;
    private page: Puppeteer.Page | null = null;

    async initialize() {
        this.browser = await Puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1280, height: 800 });
        await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    }

    async scrapeFragrancePage(url: string): Promise<FragranceData> {
        if (!this.page) throw new Error('Page not initialized');

        try {
            await this.page.goto(url, { waitUntil: 'domcontentloaded' });
            await this.page.waitForSelector('h1[itemprop="name"]', { timeout: 5000 });

            return await this.page.evaluate(() => {
                // Extract name and gender (which is inside the h1 small tag)
                const nameElement = document.querySelector('h1[itemprop="name"]');
                const name = nameElement?.textContent?.replace(/for (men|women)$/i, '').trim() || '';
                const gender = nameElement?.querySelector('small')?.textContent?.trim() || '';

                // Extract brand
                const brandElement = document.querySelector('[itemprop="brand"] [itemprop="name"]');
                const brand = brandElement?.textContent?.trim() || '';

                // Extract image
                const imageElement = document.querySelector('[itemprop="image"]');
                const image = imageElement?.getAttribute('src') || '';

                 // Rating data
                const ratingElement = document.querySelector('[itemprop="aggregateRating"]');
                const ratingValue = parseFloat(ratingElement?.querySelector('[itemprop="ratingValue"]')?.textContent || '0');
                const ratingCount = parseInt(ratingElement?.querySelector('[itemprop="ratingCount"]')?.textContent?.replace(/,/g, '') || '0');

                // Accords
                const accordElements = Array.from(document.querySelectorAll('.accord-box .accord-bar'));
                const accords = accordElements.map(el => ({
                    name: el.textContent?.trim() || '',
                    width: el.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1] || '0%',
                    background: el.getAttribute('style')?.match(/background:\s*([^;]+)/)?.[1] || '',
                    color: el.getAttribute('style')?.match(/color:\s*([^;]+)/)?.[1] || ''
                }));

                // Brand logo
                const brandLogo = document.querySelector('[itemprop="brand"] [itemprop="logo"]')?.getAttribute('src') || '';

                // Notes
                const getNotes = (type: string) => {
                    const section = Array.from(document.querySelectorAll('h4')).find(h4 => 
                        h4.textContent?.toLowerCase().includes(type.toLowerCase())
                    );
                    if (!section) return [];
                    
                    const notesContainer = section.nextElementSibling?.querySelector('div[style*="flex"]');
                    if (!notesContainer) return [];
                    
                    return Array.from(notesContainer.querySelectorAll('div[style*="flex-direction: column"]')).map(note => ({
                        name: note.textContent?.trim() || '',
                        image: note.querySelector('img')?.getAttribute('src') || ''
                    }));
                };

                // Perfumers
                const perfumerSection = Array.from(document.querySelectorAll('.strike-title')).find(el => 
                    el.textContent?.toLowerCase().includes('perfumer')
                );
                const perfumers = perfumerSection 
                    ? Array.from(perfumerSection.parentElement?.querySelectorAll('.cell') || []).map(el => ({
                        name: el.textContent?.trim() || '',
                        image: el.querySelector('img')?.getAttribute('src') || ''
                    }))
                    : [];
                 return {
                    name,
                    brand,
                    image,
                    gender: gender.toLowerCase(),
                    rating: {
                        value: ratingValue,
                        count: ratingCount
                    },
                    accords,
                    brandLogo,
                    notes: {
                        top: getNotes('top'),
                        middle: getNotes('middle'),
                        base: getNotes('base')
                    },
                    perfumers
                };
            });

        } catch (error) {
            console.error('Scraping error:', error);
            throw error;
        }
    }

    async close() {
        if (this.page) await this.page.close();
        if (this.browser) await this.browser.close();
    }
}

export const scraperService = new ScraperService();