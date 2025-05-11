
import * as Puppeteer from "puppeteer";
import { FragranceData } from "../types/fragrance";

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
                
                const nameElement = document.querySelector('h1[itemprop="name"]');
                const fullName = nameElement?.textContent?.trim() || '';    
                
                const brandElement = document.querySelector('[itemprop="brand"] [itemprop="name"]');
                const brand = brandElement?.textContent?.trim() || '';

                let cleanName = fullName
                    .replace(/\s*for (men|women|men and women|women and men)\s*$/i, '')
                    .replace(new RegExp(`\\s*${brand}\\s*`, 'i'), '')
                    .replace(/\s{2,}/g, ' ') 
                    .trim();
                
                const genderText = nameElement?.querySelector('small')?.textContent?.trim().toLowerCase() || '';
                let gender: 'men' | 'women' | 'unisex' | null = null;
                if (genderText.includes('men') && genderText.includes('women')) {
                    gender = 'unisex';
                } else if (genderText.includes('men')) {
                    gender = 'men';
                } else if (genderText.includes('women')) {
                    gender = 'women';
                }

                const imageElement = document.querySelector('[itemprop="image"]');
                const image = imageElement?.getAttribute('src') || '';

                const ratingElement = document.querySelector('[itemprop="aggregateRating"]');
                const ratingValue = parseFloat(ratingElement?.querySelector('[itemprop="ratingValue"]')?.textContent || '0');
                const ratingCount = parseInt(ratingElement?.querySelector('[itemprop="ratingCount"]')?.textContent?.replace(/,/g, '') || '0');

                const accordElements = Array.from(document.querySelectorAll('.accord-box .accord-bar'));
                const accords = accordElements.map(el => ({
                    name: el.textContent?.trim() || '',
                    width: el.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1] || '0%',
                    background: el.getAttribute('style')?.match(/background:\s*([^;]+)/)?.[1] || '',
                    color: el.getAttribute('style')?.match(/color:\s*([^;]+)/)?.[1] || ''
                }));

                const brandLogo = document.querySelector('[itemprop="brand"] [itemprop="logo"]')?.getAttribute('src') || '';

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
                    name: cleanName,
                    brand,
                    image,
                    gender,
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