import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { validateBooking } from '../validators/bookingValidator.js';
import { createBooking } from '../controllers/bookingController.js';

const router = Router();

// Tighter than the app-wide limiter — this is a public write endpoint.
const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Too many booking requests. Please try again later.' },
});

router.post('/', bookingLimiter, validateBooking, createBooking);

export default router;
