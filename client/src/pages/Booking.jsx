import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
  User,
  Phone,
  Dog,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import { locations } from '../data/priceEstimatorOptions';
import { getWhatsAppLink } from '../data/businessInfo';
import { buildBookingMessage } from '../utils/buildBookingMessage';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [status, setStatus] = useState('idle');
  const [submittedData, setSubmittedData] = useState(null);

  const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('submitting');

    const formData = new FormData(e.target);

    const data = {
      ownerName: formData.get('ownerName'),
      phone: formData.get('phone'),
      petType: formData.get('petType'),
      service: formData.get('service'),
      location: formData.get('location'),
    };

    console.log('🚀 [Booking] Submitting data:', data);

    try {
      if (!googleSheetUrl) {
        throw new Error('Google Sheet URL is not configured.');
      }

      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...data,
          createdAt: new Date().toISOString(),
          status: 'pending',
        }),
      });

      console.log('✅ [Google Sheet] Data submitted successfully');

      setSubmittedData(data);
      setStatus('success');
    } catch (error) {
      console.error('❌ [Google Sheet] Submission failed:', error);
      setStatus('error');
    }
  };

  // Success screen
  if (status === 'success' && submittedData) {
    const svc = services.find(
      (s) => s.id === submittedData.service
    );

    const loc = locations.find(
      (l) => l.id === submittedData.location
    );

    const message = buildBookingMessage({
      ownerName: submittedData.ownerName,
      petType: submittedData.petType,
      serviceName: svc?.name || submittedData.service,
      locationLabel: loc?.label || submittedData.location,
    });

    return (
      <Section className="relative overflow-hidden py-16 sm:py-24">
        {/* Subtle Ambient Radial Backlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-xl rounded-3xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-8 text-center shadow-xl shadow-stone-200/50 sm:p-10 dark:border-[#232730] dark:bg-gradient-to-b dark:from-[#171B22] dark:to-[#12141A] dark:shadow-2xl dark:shadow-black/60">
          {/* Success Status Badge */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-inner dark:text-emerald-400">
            <CheckCircle2 size={36} strokeWidth={2.2} />
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:text-emerald-300">
            <Sparkles size={12} /> Request Successfully Logged
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-stone-900 sm:text-3xl dark:text-[#F9FAFB]">
            Your service request has been received.
          </h1>

          <p className="mx-auto mt-2.5 max-w-md text-xs leading-relaxed text-stone-600 sm:text-sm dark:text-[#9CA3AF]">
            Thank you, <strong className="font-semibold text-stone-900 dark:text-[#F3F4F6]">{submittedData.ownerName}</strong>! Our care concierge desk is reviewing your companion&apos;s details and will reach out shortly to confirm the scheduled visit.
          </p>

          {/* Booking Summary Pill Matrix */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 rounded-2xl border border-stone-200 bg-white p-4 text-left text-xs shadow-xs dark:border-[#232730] dark:bg-[#0F1115] dark:shadow-none">
            <div>
              <span className="text-[11px] font-medium text-stone-500 dark:text-[#6B7280]">Service</span>
              <p className="mt-0.5 truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                {svc?.name || submittedData.service}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium text-stone-500 dark:text-[#6B7280]">Location</span>
              <p className="mt-0.5 truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                {loc?.label || submittedData.location}
              </p>
            </div>
            <div className="border-t border-stone-100 pt-2 dark:border-[#1C2028]">
              <span className="text-[11px] font-medium text-stone-500 dark:text-[#6B7280]">Companion</span>
              <p className="mt-0.5 font-semibold capitalize text-stone-800 dark:text-[#E5E7EB]">
                {submittedData.petType}
              </p>
            </div>
            <div className="border-t border-stone-100 pt-2 dark:border-[#1C2028]">
              <span className="text-[11px] font-medium text-stone-500 dark:text-[#6B7280]">Contact</span>
              <p className="mt-0.5 font-semibold text-stone-800 dark:text-[#E5E7EB]">
                {submittedData.phone}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="primary"
              href={getWhatsAppLink(message)}
              icon={MessageCircle}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-bold shadow-lg shadow-emerald-500/20"
            >
              Confirm on WhatsApp
            </Button>
            <Button
              variant="outline"
              href="/"
              className="w-full sm:w-auto border-stone-200 bg-white text-stone-700 shadow-xs hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-[#272B33] dark:bg-[#14171E] dark:text-[#D1D5DB] dark:shadow-none dark:hover:border-[#383E4C] dark:hover:text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section
      heading="Book a Pet Care Service"
      subheading="Tell us about you and your companion — our care coordinators will match your dedicated certified specialist and reach out to confirm."
    >
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/50 sm:p-8 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-2xl dark:shadow-black/50"
          >
            {/* Owner Details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-[#D1D5DB]">
                  <User size={13} className="text-amber-600 dark:text-amber-400" />
                  <span>Owner Name *</span>
                </label>
                <input
                  name="ownerName"
                  type="text"
                  placeholder="e.g., Ananya Verma"
                  required
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-amber-500/80 focus:outline-none sm:text-sm dark:border-[#262A34] dark:bg-[#0F1115] dark:text-[#F3F4F6] dark:placeholder-[#4B5563]"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-[#D1D5DB]">
                  <Phone size={13} className="text-amber-600 dark:text-amber-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  required
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-amber-500/80 focus:outline-none sm:text-sm dark:border-[#262A34] dark:bg-[#0F1115] dark:text-[#F3F4F6] dark:placeholder-[#4B5563]"
                />
              </div>
            </div>

            {/* Pet Type */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-[#D1D5DB]">
                <Dog size={13} className="text-amber-600 dark:text-amber-400" />
                <span>Companion Type *</span>
              </label>
              <div className="relative">
                <select
                  name="petType"
                  defaultValue="dog"
                  required
                  className="w-full cursor-pointer appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs text-stone-900 transition-colors focus:border-amber-500/80 focus:outline-none sm:text-sm dark:border-[#262A34] dark:bg-[#0F1115] dark:text-[#F3F4F6]"
                >
                  <option value="dog" className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]">Dog</option>
                  <option value="cat" className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]">Cat</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 dark:text-[#6B7280]">
                  ▼
                </span>
              </div>
            </div>

            {/* Service + Location */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-[#D1D5DB]">
                  <Sparkles size={13} className="text-amber-600 dark:text-amber-400" />
                  <span>Service of Choice *</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    defaultValue={preselectedService}
                    required
                    className="w-full cursor-pointer appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs text-stone-900 transition-colors focus:border-amber-500/80 focus:outline-none sm:text-sm dark:border-[#262A34] dark:bg-[#0F1115] dark:text-[#F3F4F6]"
                  >
                    <option value="" className="bg-white text-stone-400 dark:bg-[#14171E] dark:text-[#6B7280]">
                      Select a service
                    </option>
                    {services
                      .filter((s) => s.active)
                      .map((s) => (
                        <option
                          key={s.id}
                          value={s.id}
                          className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]"
                        >
                          {s.name}
                        </option>
                      ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 dark:text-[#6B7280]">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-[#D1D5DB]">
                  <MapPin size={13} className="text-amber-600 dark:text-amber-400" />
                  <span>Your Area *</span>
                </label>
                <div className="relative">
                  <select
                    name="location"
                    defaultValue=""
                    required
                    className="w-full cursor-pointer appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs text-stone-900 transition-colors focus:border-amber-500/80 focus:outline-none sm:text-sm dark:border-[#262A34] dark:bg-[#0F1115] dark:text-[#F3F4F6]"
                  >
                    <option value="" className="bg-white text-stone-400 dark:bg-[#14171E] dark:text-[#6B7280]">
                      Select your neighborhood
                    </option>
                    {locations.map((l) => (
                      <option
                        key={l.id}
                        value={l.id}
                        className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]"
                      >
                        {l.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 dark:text-[#6B7280]">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs sm:text-sm text-rose-700 dark:text-rose-300">
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-600 dark:text-rose-400" />
                <p className="leading-relaxed">
                  Something went wrong dispatching your request. Please try again or connect directly with our care desk on WhatsApp.
                </p>
              </div>
            )}

            {/* Submit CTA */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 font-bold text-stone-950 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-orange-400 active:scale-[0.99]"
              >
                {status === 'submitting' && (
                  <Loader2 size={18} className="animate-spin text-stone-950" />
                )}
                <span>
                  {status === 'submitting' ? 'Dispatching Request…' : 'Request In-Home Booking'}
                </span>
              </Button>

              <p className="mt-2.5 text-center text-[11px] text-stone-500 dark:text-[#6B7280]">
                🔒 100% Zero-Spam Guarantee. Your details are solely used to coordinate verified pet care.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Trust & Protocol Sidebar */}
        <div className="space-y-4 lg:col-span-5">
          <div className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-xl dark:shadow-black/40">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/20 dark:text-amber-300">
              <ShieldCheck size={13} className="text-amber-600 dark:text-amber-400" />
              The PetJeeva Promise
            </span>

            <h3 className="font-heading text-lg font-bold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
              What happens after you submit?
            </h3>

            <div className="space-y-3.5 text-xs text-stone-600 dark:text-[#9CA3AF]">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[11px] font-bold text-amber-700 dark:border-amber-500/20 dark:text-amber-400">
                  1
                </div>
                <p className="leading-relaxed">
                  <strong className="block font-semibold text-stone-900 dark:text-[#F3F4F6]">Specialist Matching:</strong> We pair your pet with a dedicated certified handler based on temperament and location.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[11px] font-bold text-amber-700 dark:border-amber-500/20 dark:text-amber-400">
                  2
                </div>
                <p className="leading-relaxed">
                  <strong className="block font-semibold text-stone-900 dark:text-[#F3F4F6]">Schedule Verification:</strong> A care coordinator calls or messages on WhatsApp within ~15 minutes to confirm timing.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-[11px] font-bold text-amber-700 dark:border-amber-500/20 dark:text-amber-400">
                  3
                </div>
                <p className="leading-relaxed">
                  <strong className="block font-semibold text-stone-900 dark:text-[#F3F4F6]">Doorstep Care &amp; Tracking:</strong> Your verified specialist arrives equipped with sanitized instruments and live telemetry.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-stone-100 pt-4 text-xs text-stone-500 dark:border-[#1F232C] dark:text-[#6B7280]">
              <Clock size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>Average response time: under 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}