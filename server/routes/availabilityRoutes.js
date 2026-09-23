import { Router } from 'express';
import { getAvailableSlots } from '../controllers/availabilityController.js';

const router = Router();

router.get('/slots', getAvailableSlots);

export default router;
