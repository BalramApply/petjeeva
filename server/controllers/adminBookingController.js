import axios from 'axios';
import Booking, { BOOKING_STATUS_VALUES } from '../models/Booking.js';

// Background sync helper: forwards the booking to the Google Apps Script Web App
async function syncToGoogleSheet(bookingData) {
  const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

  if (!sheetUrl) {
    console.warn('⚠️ [Google Sheets] GOOGLE_SHEET_WEBAPP_URL is not configured in .env');
    return;
  }

  console.log('🔄 [Google Sheets] Forwarding payload to Apps Script...');

  try {
    const response = await axios.post(sheetUrl, bookingData, {
      headers: { 'Content-Type': 'application/json' },
      maxRedirects: 5, // Follows the 302 redirect Google Apps Script returns
    });

    console.log('✅ [Google Sheets] Successfully synced! Status:', response.status);
    console.log('📄 [Google Sheets] Script response:', response.data);
  } catch (err) {
    console.error('❌ [Google Sheets] Sync failed:', err.response?.data || err.message);
  }
}

// POST /api/bookings - Called when user clicks "Request Booking"
export async function createBooking(req, res) {
  console.log('\n📥 ================= NEW BOOKING REQUEST =================');
  console.log('📦 Request Body Received:', JSON.stringify(req.body, null, 2));

  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();

    console.log('💾 [MongoDB] Booking saved successfully with ID:', savedBooking._id);

    // Fire-and-forget sync to Google Sheets
    syncToGoogleSheet(savedBooking.toObject());

    console.log('📤 Sending 201 response back to client...\n');

    res.status(201).json({
      success: true,
      booking: savedBooking,
    });
  } catch (err) {
    console.error('❌ [Booking Error] Failed to create booking:', err.message);
    res.status(400).json({ error: err.message || 'Could not create booking.' });
  }
}

export async function listBookings(req, res) {
  try {
    const { status, service, location, petType, date, q } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (service) filter.service = service;
    if (location) filter.location = location;
    if (petType) filter.petType = petType;

    if (date) {
      const dayStart = new Date(date);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(date);
      dayEnd.setHours(23, 59, 59, 999);
      filter.preferredDate = { $gte: dayStart, $lte: dayEnd };
    }

    if (q) {
      const regex = new RegExp(q, 'i');
      filter.$or = [{ ownerName: regex }, { petName: regex }, { phone: regex }];
    }

    const bookings = await Booking.find(filter).sort({ preferredDate: 1, preferredTime: 1 });
    res.json({ bookings });
  } catch (err) {
    console.error('Failed to list bookings:', err.message);
    res.status(500).json({ error: 'Could not load bookings.' });
  }
}

export async function getBooking(req, res) {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ booking });
  } catch (err) {
    res.status(500).json({ error: 'Could not load booking.' });
  }
}

export async function updateBooking(req, res) {
  try {
    const allowedFields = ['status', 'preferredDate', 'preferredTime', 'notes'];
    const updates = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    }

    if (updates.status && !BOOKING_STATUS_VALUES.includes(updates.status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    if (updates.preferredDate) updates.preferredDate = new Date(updates.preferredDate);

    const booking = await Booking.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    res.json({ booking });
  } catch (err) {
    console.error('Failed to update booking:', err.message);
    res.status(500).json({ error: 'Could not update booking.' });
  }
}