import Booking from '../models/Booking.js';
import Availability from '../models/Availability.js';
import { countBookingsAtSlot } from '../services/availabilityService.js';

export async function createBooking(req, res) {
  try {
    const data = req.validatedBody;
    const preferredDate = new Date(data.preferredDate);

    // Slot-capacity-aware guard, using the same counting logic the
    // availability listing endpoint uses — so "shown as available" and
    // "actually allowed" never drift apart. Falls back to capacity 1
    // if this location has no Availability doc configured yet.
    const availability = await Availability.findOne({ location: data.location });
    const slotCapacity = availability?.slotCapacity ?? 1;

    const existingCount = await countBookingsAtSlot({
      location: data.location,
      date: preferredDate,
      time: data.preferredTime,
    });

    if (existingCount >= slotCapacity) {
      return res.status(409).json({
        error: 'That slot was just taken. Please choose a different time.',
      });
    }

    const booking = await Booking.create({ ...data, preferredDate });

    res.status(201).json({ booking });
  } catch (err) {
    console.error('Booking creation failed:', err.message);
    res.status(500).json({ error: 'Could not create booking. Please try again.' });
  }
}
