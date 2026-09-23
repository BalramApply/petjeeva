import mongoose from 'mongoose';

const workingHourSchema = new mongoose.Schema(
  {
    dayOfWeek: { type: Number, min: 0, max: 6, required: true }, // 0 = Sunday
    isOpen: { type: Boolean, default: true },
    startTime: { type: String, default: '09:00' }, // "HH:MM"
    endTime: { type: String, default: '18:00' },
  },
  { _id: false }
);

const availabilitySchema = new mongoose.Schema(
  {
    // Service-area slug for now (matches the frontend's demo zone-a/b/c
    // ids) — becomes a ServiceArea ref once that model exists (Phase 12).
    location: { type: String, required: true, unique: true },

    // Optional future staff-specific override once Professional exists (Phase 13).
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', default: null },

    workingHours: {
      type: [workingHourSchema],
      default: () =>
        [0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => ({
          dayOfWeek,
          isOpen: dayOfWeek !== 0, // closed Sundays by default
          startTime: '09:00',
          endTime: '18:00',
        })),
    },

    slotIntervalMinutes: { type: Number, default: 60 },
    bufferMinutes: { type: Number, default: 0 },
    slotCapacity: { type: Number, default: 1 },

    // Specific closed dates — holidays, staff leave, etc.
    blockedDates: [{ type: Date }],
  },
  { timestamps: true }
);

export default mongoose.model('Availability', availabilitySchema);
