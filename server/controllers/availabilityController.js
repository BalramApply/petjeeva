import Availability from '../models/Availability.js';
import Booking from '../models/Booking.js';
import { generateSlots, isDateBlocked } from '../services/availabilityService.js';

// Demo duration lookup until the real Service model (Phase 12) supplies this.
const SERVICE_DURATIONS = {
  training: 45,
  walking: 30,
  grooming: 60,
  wellness: 30,
};

export async function getAvailableSlots(req, res) {
  try {
    const { date, location, service } = req.query;

    if (!date || !location || !service) {
      return res.status(400).json({ error: 'date, location and service are required' });
    }

    const availability = await Availability.findOne({ location });
    if (!availability) {
      return res.status(404).json({ error: 'No availability configured for this location yet' });
    }

    if (isDateBlocked(date, availability.blockedDates)) {
      return res.json({ slots: [] });
    }

    const dayOfWeek = new Date(date).getDay();
    const daySchedule = availability.workingHours.find((wh) => wh.dayOfWeek === dayOfWeek);

    if (!daySchedule || !daySchedule.isOpen) {
      return res.json({ slots: [] });
    }

    const serviceDuration = SERVICE_DURATIONS[service] || 60;

    const candidateSlots = generateSlots({
      startTime: daySchedule.startTime,
      endTime: daySchedule.endTime,
      slotIntervalMinutes: availability.slotIntervalMinutes,
      serviceDuration,
      bufferMinutes: availability.bufferMinutes,
    });

    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999);

    const existingBookings = await Booking.find({
      location,
      preferredDate: { $gte: dayStart, $lte: dayEnd },
      status: { $ne: 'CANCELLED' },
    }).select('preferredTime');

    const bookedCounts = existingBookings.reduce((acc, b) => {
      acc[b.preferredTime] = (acc[b.preferredTime] || 0) + 1;
      return acc;
    }, {});

    const availableSlots = candidateSlots.filter(
      (slot) => (bookedCounts[slot] || 0) < availability.slotCapacity
    );

    res.json({ slots: availableSlots });
  } catch (err) {
    console.error('Failed to fetch availability:', err.message);
    res.status(500).json({ error: 'Could not fetch availability. Please try again.' });
  }
}
