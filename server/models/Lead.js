import mongoose from 'mongoose';

export const LEAD_STATUS_VALUES = ['NEW', 'CONTACTED', 'CONVERTED', 'LOST'];
export const LEAD_SOURCE_VALUES = ['website', 'phone', 'whatsapp', 'walk-in', 'other'];

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    service: { type: String, trim: true }, // optional service-of-interest slug
    message: { type: String, trim: true },
    source: { type: String, enum: LEAD_SOURCE_VALUES, default: 'other' },
    status: { type: String, enum: LEAD_STATUS_VALUES, default: 'NEW' },
  },
  { timestamps: true }
);

export default mongoose.model('Lead', leadSchema);
