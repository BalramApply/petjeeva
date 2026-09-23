import { z } from 'zod';
import { LEAD_SOURCE_VALUES } from '../models/Lead.js';

export const leadInputSchema = z.object({
  name: z.string().min(2, 'Enter a name'),
  phone: z.string().min(7, 'Enter a valid phone number').max(15, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(LEAD_SOURCE_VALUES).optional(),
});

export function validateLead(req, res, next) {
  const result = leadInputSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    });
  }

  req.validatedBody = result.data;
  next();
}
