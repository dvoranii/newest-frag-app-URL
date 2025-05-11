import { Router } from 'express';
import { scrapeFragrance, generateFragranceSummary } from '../controllers/fragrance.controller';
import { validateFragranticaUrl } from '../middlewares/validateFragranticaUrl';

const router = Router();

router.post('/fragrance', validateFragranticaUrl, scrapeFragrance);
router.post('/fragrance/summary', generateFragranceSummary);
router.get('/', (req, res) => {
  res.status(200).json({ status: 'working' });
});

export default router;