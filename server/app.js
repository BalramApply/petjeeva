import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import bookingRoutes from './routes/bookingRoutes.js';
import availabilityRoutes from './routes/availabilityRoutes.js';
import adminAuthRoutes from './routes/adminAuthRoutes.js';
import adminStatsRoutes from './routes/adminStatsRoutes.js';
import adminBookingRoutes from './routes/adminBookingRoutes.js';
import adminLeadRoutes from './routes/adminLeadRoutes.js';

const app = express();

// Security & parsing middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Basic rate limiting (tighter per-route limits added where needed, e.g. booking)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
  })
);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'pet-care-api' });
});

app.use('/api/bookings', bookingRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/admin/stats', adminStatsRoutes);
app.use('/api/admin/bookings', adminBookingRoutes);
app.use('/api/admin/leads', adminLeadRoutes);

// Further admin routes mount here in later phases, e.g.:
// app.use('/api/admin/services', adminServiceRoutes);

export default app;
