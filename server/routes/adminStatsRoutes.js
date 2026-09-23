import { Router } from 'express';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';
import { getOverviewStats } from '../controllers/adminStatsController.js';

const router = Router();

router.get('/overview', requireAdminAuth, getOverviewStats);

export default router;
