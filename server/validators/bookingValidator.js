import { z } from 'zod';

export const bookingInputSchema = z.object({
  ownerName: z.string().min(2, 'Enter your name'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone number')
    .max(15, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  petName: z.string().min(1, "Enter your pet's name"),
  petType: z.enum(['dog', 'cat']),
  breed: z.string().optional(),
  petAge: z.string().optional(),
  service: z.string().min(1, 'Select a service'),
  location: z.string().min(1, 'Select a location'),
  preferredDate: z.string().min(1, 'Select a date'),
  preferredTime: z.string().min(1, 'Select a time'),
  notes: z.string().optional(),
});

export function validateBooking(req, res, next) {
  const result = bookingInputSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors,
    });
  }

  req.validatedBody = result.data;
  next();
}
