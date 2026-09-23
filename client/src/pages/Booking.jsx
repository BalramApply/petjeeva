import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import OptionCard from '../components/sections/estimator/OptionCard';
import { bookingSchema } from '../validators/bookingSchema';
import { services } from '../data/services';
import { locations } from '../data/priceEstimatorOptions';
import { getWhatsAppLink } from '../data/businessInfo';
import { buildBookingMessage } from '../utils/buildBookingMessage';
import api from '../services/api';

const today = new Date().toISOString().split('T')[0];

// Static slot schedule (no backend required)
const STATIC_TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
  '07:30 PM',
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { petType: 'dog', service: preselectedService, preferredTime: '' },
  });

  const preferredDate = watch('preferredDate');
  const preferredTime = watch('preferredTime');

  // Client-side smart filtering: Hide slots that have already passed if today's date is selected
  const availableSlots = STATIC_TIME_SLOTS.filter((slot) => {
    if (preferredDate !== today) return true;

    const [timeStr, modifier] = slot.split(' ');
    let [hours, minutes] = timeStr.split(':').map(Number);
    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    const slotDateTime = new Date();
    slotDateTime.setHours(hours, minutes, 0, 0);

    // Keep only slots at least 30 minutes in the future
    return slotDateTime > new Date(Date.now() + 30 * 60 * 1000);
  });

  // Runs when validation passes
  const onSubmit = async (data) => {
    setStatus('submitting');
    console.log('🚀 [Booking] Submitting data:', data);

    const googleSheetUrl =
      import.meta.env.VITE_GOOGLE_SHEET_URL ||
      'https://script.google.com/macros/s/AKfycbzuhyZYwJMhLveMI_gZK3HX3pIA7nO5xgM-sQmGoOZavjagP4Dh9BzwDqo1KHLcibR03g/exec';

    try {
      // 1. Send data to Google Sheet
      const sheetPromise = fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script redirects
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...data,
          createdAt: new Date().toISOString(),
        }),
      })
        .then(() => console.log('✅ [Google Sheet] Data dispatched successfully'))
        .catch((err) => console.error('❌ [Google Sheet] Dispatch failed:', err));

      // 2. Save data to backend database if present (fails gracefully without blocking)
      const apiPromise = api
        .post('/bookings', data)
        .then((res) => console.log('✅ [Backend DB] Saved successfully:', res.data))
        .catch((err) => console.warn('⚠️ [Backend DB] Skipped or unreachable:', err.message));

      // Wait for submissions
      await Promise.allSettled([sheetPromise, apiPromise]);

      setSubmittedData(data);
      setStatus('success');
    } catch (err) {
      console.error('❌ [Submit Error]:', err);
      setStatus('error');
    }
  };

  const onInvalid = (validationErrors) => {
    console.warn('⚠️ [Validation Failed] Please check required fields:', validationErrors);
  };

  if (status === 'success' && submittedData) {
    const svc = services.find((s) => s.id === submittedData.service);
    const loc = locations.find((l) => l.id === submittedData.location);
    const message = buildBookingMessage({
      ownerName: submittedData.ownerName,
      petName: submittedData.petName,
      serviceName: svc?.name || submittedData.service,
      preferredDate: submittedData.preferredDate,
      preferredTime: submittedData.preferredTime,
      locationLabel: loc?.label || submittedData.location,
    });

    return (
      <Section className="text-center max-w-lg mx-auto">
        <CheckCircle2 size={48} className="mx-auto text-forest" />
        <h1 className="mt-4 text-h2">Your service request has been received.</h1>
        <p className="mt-2 text-text-secondary">
          We'll confirm your booking shortly. Need faster assistance?
        </p>
        <div className="mt-6">
          <Button variant="primary" href={getWhatsAppLink(message)} icon={MessageCircle}>
            Chat on WhatsApp
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section heading="Book a service" subheading="Tell us about you and your pet — we'll confirm availability shortly.">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="max-w-xl space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label">Owner name</label>
            <input className="field-input" {...register('ownerName')} />
            {errors.ownerName && <p className="field-error">{errors.ownerName.message}</p>}
          </div>
          <div>
            <label className="field-label">Phone</label>
            <input className="field-input" {...register('phone')} placeholder="10-digit number" />
            {errors.phone && <p className="field-error">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="field-label">Email (optional)</label>
          <input className="field-input" type="email" {...register('email')} />
          {errors.email && <p className="field-error">{errors.email.message}</p>}
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="field-label">Pet name</label>
            <input className="field-input" {...register('petName')} />
            {errors.petName && <p className="field-error">{errors.petName.message}</p>}
          </div>
          <div>
            <label className="field-label">Pet type</label>
            <select className="field-input" {...register('petType')}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div>
            <label className="field-label">Pet age (optional)</label>
            <input className="field-input" {...register('petAge')} />
          </div>
        </div>

        <div>
          <label className="field-label">Breed (optional)</label>
          <input className="field-input" {...register('breed')} />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label">Service</label>
            <select className="field-input" {...register('service')}>
              <option value="">Select a service</option>
              {services
                .filter((s) => s.active)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
            </select>
            {errors.service && <p className="field-error">{errors.service.message}</p>}
          </div>
          <div>
            <label className="field-label">Location</label>
            <select className="field-input" {...register('location')}>
              <option value="">Select your area</option>
              {locations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
            {errors.location && <p className="field-error">{errors.location.message}</p>}
          </div>
        </div>

        <div>
          <label className="field-label">Preferred date</label>
          <input
            className="field-input"
            type="date"
            min={today}
            {...register('preferredDate', {
              onChange: () => setValue('preferredTime', '', { shouldValidate: true }),
            })}
          />
          {errors.preferredDate && <p className="field-error">{errors.preferredDate.message}</p>}
        </div>

        <div>
          <label className="field-label">Preferred time</label>

          {!preferredDate ? (
            <p className="text-sm text-text-secondary">
              Pick a date above to view available time slots.
            </p>
          ) : availableSlots.length === 0 ? (
            <p className="text-sm text-text-secondary">
              No further slots available for today. Please pick another date.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {availableSlots.map((slot) => (
                <OptionCard
                  key={slot}
                  label={slot}
                  selected={preferredTime === slot}
                  onClick={() => setValue('preferredTime', slot, { shouldValidate: true })}
                />
              ))}
            </div>
          )}

          {errors.preferredTime && <p className="field-error">{errors.preferredTime.message}</p>}
        </div>

        <div>
          <label className="field-label">Additional notes (optional)</label>
          <textarea className="field-input" rows={3} {...register('notes')} />
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p>
              Something went wrong sending your request. Please try again, or reach us directly on WhatsApp.
            </p>
          </div>
        )}

        <Button type="submit" variant="primary" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' && <Loader2 size={18} className="animate-spin" />}
          {status === 'submitting' ? 'Sending request…' : 'Request Booking'}
        </Button>
      </form>
    </Section>
  );
}