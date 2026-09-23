import Booking from '../models/Booking.js';
import Lead from '../models/Lead.js';

// Real, database-backed numbers only. Offers/etc. aren't modeled yet
// (Phase 17), so the frontend shows those as "not tracked yet" rather
// than a fake 0 that would imply they're being counted.
export async function getOverviewStats(req, res) {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const [todayBookings, pendingRequests, confirmedBookings, statusBreakdown, bookingsByDay, newLeads] =
      await Promise.all([
        Booking.countDocuments({ preferredDate: { $gte: startOfDay, $lte: endOfDay } }),
        Booking.countDocuments({ status: 'PENDING' }),
        Booking.countDocuments({ status: 'CONFIRMED' }),
        Booking.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
        Booking.aggregate([
          {
            $group: {
              _id: { $dateToString: { format: '%Y-%m-%d', date: '$preferredDate' } },
              count: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
          { $limit: 30 },
        ]),
        Lead.countDocuments({ status: 'NEW' }),
      ]);

    res.json({
      todayBookings,
      pendingRequests,
      confirmedBookings,
      newLeads,
      bookingsByStatus: statusBreakdown.map((s) => ({ status: s._id, count: s.count })),
      bookingsOverTime: bookingsByDay.map((d) => ({ date: d._id, count: d.count })),
    });
  } catch (err) {
    console.error('Failed to load admin stats:', err.message);
    res.status(500).json({ error: 'Could not load dashboard stats.' });
  }
}
