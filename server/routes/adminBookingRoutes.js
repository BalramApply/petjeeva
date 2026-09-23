import { Router } from 'express';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';
import { listBookings, getBooking, updateBooking } from '../controllers/adminBookingController.js';

const router = Router();

router.use(requireAdminAuth);
router.get('/', listBookings);
router.get('/:id', getBooking);
router.patch('/:id', updateBooking);

export default router;
