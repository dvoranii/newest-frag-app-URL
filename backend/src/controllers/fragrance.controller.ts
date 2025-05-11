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

        const prompt = `Please provide a nice summary of how "${name}" by ${brand} smells and the best occasions (time of year and time of day - i.e winter day or summer night, etc, situational context - i.e bar, club, office, etc). The summary should be no longer than 100 words. Also please avoid any formatting like using double asterisks for bolding text. It comes out as "**" literally and we do not want that. Just provide normal text.`;
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
