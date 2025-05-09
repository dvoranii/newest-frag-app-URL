import { Router } from 'express';
import { scrapeFragrance } from '../controllers/fragrance.controller';
import { validateFragranticaUrl } from '../middlewares/validateFragranticaUrl';

const router = Router();

// router.get('/', )
router.post('/fragrance', validateFragranticaUrl, scrapeFragrance);
router.get('/', (req, res) => {
  res.status(200).json({ status: 'working' });
});

export default router;