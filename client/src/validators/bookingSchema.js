import { z } from 'zod';

export const bookingSchema = z.object({
  ownerName: z.string().min(2, 'Enter your name'),
  phone: z
    .string()
    .min(1, 'Enter a phone number')
    .regex(/^[0-9+\-\s]{7,15}$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  petName: z.string().min(1, "Enter your pet's name"),
  petType: z.enum(['dog', 'cat'], { errorMap: () => ({ message: 'Select a pet type' }) }),
  breed: z.string().optional(),
  petAge: z.string().optional(),
  service: z.string().min(1, 'Select a service'),
  location: z.string().min(1, 'Select your area'),
  preferredDate: z.string().min(1, 'Select a date'),
  preferredTime: z.string().min(1, 'Select a time'),
  notes: z.string().optional(),
});
