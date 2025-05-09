import { Request, Response } from 'express';
import { scraperService } from '../services/scraper.service';

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
