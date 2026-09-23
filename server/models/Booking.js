import mongoose from 'mongoose';

export const BOOKING_STATUS_VALUES = [
  'PENDING',
  'CONFIRMED',
  'ASSIGNED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
];

const bookingSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    petName: { type: String, required: true, trim: true },
    petType: { type: String, enum: ['dog', 'cat'], required: true },
    breed: { type: String, trim: true },
    petAge: { type: String, trim: true },

    // Service slug for now (matches the frontend's demo data ids).
    // Becomes a Service ref once the Service model lands in Phase 12.
    service: { type: String, required: true },

    // Not chosen by the customer — assigned later by the admin
    // (Booking Management, Phase 11), so it's optional here.
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', default: null },

    location: { type: String, required: true }, // service-area slug
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true }, // e.g. "14:30"

    // Populated from the Price Estimator when available; otherwise
    // left for the admin to fill in during confirmation.
    duration: { type: Number, default: null },
    estimatedPrice: { type: Number, default: null },

    notes: { type: String, trim: true },
    status: { type: String, enum: BOOKING_STATUS_VALUES, default: 'PENDING' },
  },
  { timestamps: true }
);

bookingSchema.index({ preferredDate: 1, preferredTime: 1, location: 1 });

export default mongoose.model('Booking', bookingSchema);
