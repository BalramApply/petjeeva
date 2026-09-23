import Booking from '../models/Booking.js';

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function toHHMM(totalMinutes) {
  const h = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  const m = (totalMinutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

/**
 * Generates candidate slot start times for one working-hours window.
 * Does not know about bookings — pure scheduling math only.
 */
export function generateSlots({ startTime, endTime, slotIntervalMinutes, serviceDuration, bufferMinutes }) {
  const slots = [];
  const start = toMinutes(startTime);
  const end = toMinutes(endTime);
  const step = slotIntervalMinutes || 60;
  const needed = (serviceDuration || 0) + (bufferMinutes || 0);

  for (let t = start; t + needed <= end; t += step) {
    slots.push(toHHMM(t));
  }
  return slots;
}

export function isDateBlocked(date, blockedDates = []) {
  const target = new Date(date).toDateString();
  return blockedDates.some((d) => new Date(d).toDateString() === target);
}

/**
 * Shared by both the slot-listing endpoint and booking creation, so
 * "what's shown as available" and "what's actually allowed" never drift apart.
 */
export async function countBookingsAtSlot({ location, date, time, excludeStatus = 'CANCELLED' }) {
  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(date);
  dayEnd.setHours(23, 59, 59, 999);

  return Booking.countDocuments({
    location,
    preferredTime: time,
    preferredDate: { $gte: dayStart, $lte: dayEnd },
    status: { $ne: excludeStatus },
  });
}
