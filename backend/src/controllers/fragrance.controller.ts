import { Request, Response } from 'express';
import { scraperService } from '../services/scraper.service';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const scrapeFragrance = async (req: Request, res: Response): Promise<void> => {
  try {
    const { url } = req.body;

    await scraperService.initialize();
    const fragranceData = await scraperService.scrapeFragrancePage(url);
    await scraperService.close();

    res.json(fragranceData);
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ 
      error: 'Failed to scrape fragrance data',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const generateFragranceSummary = async (req: Request, res: Response): Promise<void> => {

    try {

        const {brand, name} = req.body;

        if (!brand || !name) {
            res.status(400).json({error: 'Brand and name are required to generate a summary'});
            return;
        }
        if (!process.env.GEMINI_API_KEY) {
            console.warn("GEMINI_API_KEY not found in .env");
            res.status(500).json({error: 'AI summary service is unavailable.'});
            return;
        }

        const prompt = `Please provide a nice summary of how "${name}" by ${brand} smells and the best occasions (time of year and time of day - i.e winter day or summer night, etc, situational context - i.e bar, club, office, etc). I would also like you to explain how certain notes in the fragrance compliment each other and how. The summary should be no longer than 150 words. Also please avoid any formatting like using double asterisks for bolding text. It comes out as "**" literally and we do not want that. Just provide normal text.`;
        const result = await model.generateContent({
            contents: [{role: "user", parts: [{text: prompt}]}],
        });
        const response = result.response;
        const aiSummary = response.candidates?.[0]?.content?.parts?.[0]?.text || null;

        if (aiSummary) {
            res.json({summary: aiSummary})
        } else {
            res.status(500).json({error: 'Failed to generate fragrance summary.'});
        }
    } catch(error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: 'Failed to generate fragrance summary.', details: error instanceof Error ? error.message : 'Unknown error' });
    }
}

export const summarizeFragranceReviews = async (req: Request, res: Response): Promise<void> => {
    try {
        const { url } = req.body;

        if (!url) {
            res.status(400).json({ error: 'URL is required' });
            return;
        }

        await scraperService.initialize();
        const reviews = await scraperService.scrapeFragranceReviews(url);
        await scraperService.close();

        const prompt = `Here are 10 recent reviews for this fragrance:
        
        ${reviews.map((r, i) => `Review ${i+1} (Rating: ${r.rating}/5): ${r.text}`).join('\n\n')}
        
        Please analyze these reviews and provide:
        1. The overall sentiment breakdown (how many positive, negative, neutral)
        2. Common themes mentioned
        3. A concise summary of the general consensus
        4. Any notable contrasting opinions
        
        Keep the summary under 200 words and avoid any markdown formatting. Also make sure to
        understand when a fragrance is an original, and when it is a clone of another no matter 
        how the reviews are phrased (i.e Creed Aventus is the original and club de nuit intense man by armaf is a clone)
        `;

        const result = await model.generateContent({
            contents: [{role: "user", parts: [{text: prompt}]}],
        });
        const response = result.response;
        const summary = response.candidates?.[0]?.content?.parts?.[0]?.text || null;

        if (summary) {
            res.json({ reviews, summary });
        } else {
            res.status(500).json({ error: 'Failed to generate review summary' });
        }

    } catch (error) {
        console.error('Review summary error:', error);
        res.status(500).json({ 
            error: 'Failed to summarize reviews',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
