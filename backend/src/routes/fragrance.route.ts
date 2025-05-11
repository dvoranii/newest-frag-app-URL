import { Router } from 'express';
import { scrapeFragrance, generateFragranceSummary, summarizeFragranceReviews } from '../controllers/fragrance.controller';
import { validateFragranticaUrl } from '../middlewares/validateFragranticaUrl';

const router = Router();

router.post('/fragrance', validateFragranticaUrl, scrapeFragrance);
router.post('/fragrance/summary', generateFragranceSummary);
router.post('/fragrance/reviews', validateFragranticaUrl, summarizeFragranceReviews);
router.get('/', (req, res) => {
  res.status(200).json({ status: 'working' });
});

export default router;