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

        <div className="relative mx-auto max-w-xl rounded-3xl border border-[#232730] bg-gradient-to-b from-[#171B22] to-[#12141A] p-8 sm:p-10 text-center shadow-2xl shadow-black/60">
          {/* Success Status Badge */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-inner">
            <CheckCircle2 size={36} strokeWidth={2.2} />
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles size={12} /> Request Successfully Logged
          </span>

          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F9FAFB] leading-snug">
            Your service request has been received.
          </h1>

          <p className="mt-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-[#F3F4F6] font-semibold">{submittedData.ownerName}</strong>! Our care concierge desk is reviewing your companion&apos;s details and will reach out shortly to confirm the scheduled visit.
          </p>

          {/* Booking Summary Pill Matrix */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 rounded-2xl border border-[#232730] bg-[#0F1115] p-4 text-left text-xs">
            <div>
              <span className="text-[11px] font-medium text-[#6B7280]">Service</span>
              <p className="mt-0.5 font-semibold text-[#E5E7EB] truncate">
                {svc?.name || submittedData.service}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium text-[#6B7280]">Location</span>
              <p className="mt-0.5 font-semibold text-[#E5E7EB] truncate">
                {loc?.label || submittedData.location}
              </p>
            </div>
            <div className="border-t border-[#1C2028] pt-2">
              <span className="text-[11px] font-medium text-[#6B7280]">Companion</span>
              <p className="mt-0.5 font-semibold text-[#E5E7EB] capitalize">
                {submittedData.petType}
              </p>
            </div>
            <div className="border-t border-[#1C2028] pt-2">
              <span className="text-[11px] font-medium text-[#6B7280]">Contact</span>
              <p className="mt-0.5 font-semibold text-[#E5E7EB]">
                {submittedData.phone}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
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
              className="w-full sm:w-auto border-[#272B33] bg-[#14171E] text-[#D1D5DB] hover:text-white hover:border-[#383E4C]"
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
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#232730] bg-[#14171E] p-6 sm:p-8 shadow-2xl shadow-black/50 space-y-5"
          >
            {/* Owner Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5 flex items-center gap-1.5">
                  <User size={13} className="text-amber-400" />
                  <span>Owner Name *</span>
                </label>
                <input
                  name="ownerName"
                  type="text"
                  placeholder="e.g., Ananya Verma"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[#262A34] bg-[#0F1115] text-xs sm:text-sm text-[#F3F4F6] placeholder-[#4B5563] focus:outline-none focus:border-amber-500/80 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5 flex items-center gap-1.5">
                  <Phone size={13} className="text-amber-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[#262A34] bg-[#0F1115] text-xs sm:text-sm text-[#F3F4F6] placeholder-[#4B5563] focus:outline-none focus:border-amber-500/80 transition-colors"
                />
              </div>
            </div>

            {/* Pet Type */}
            <div>
              <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5 flex items-center gap-1.5">
                <Dog size={13} className="text-amber-400" />
                <span>Companion Type *</span>
              </label>
              <div className="relative">
                <select
                  name="petType"
                  defaultValue="dog"
                  required
                  className="w-full appearance-none px-4 py-2.5 rounded-xl border border-[#262A34] bg-[#0F1115] text-xs sm:text-sm text-[#F3F4F6] focus:outline-none focus:border-amber-500/80 transition-colors cursor-pointer"
                >
                  <option value="dog" className="bg-[#14171E] text-[#F3F4F6]">Dog</option>
                  <option value="cat" className="bg-[#14171E] text-[#F3F4F6]">Cat</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">
                  ▼
                </span>
              </div>
            </div>

            {/* Service + Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>Service of Choice *</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    defaultValue={preselectedService}
                    required
                    className="w-full appearance-none px-4 py-2.5 rounded-xl border border-[#262A34] bg-[#0F1115] text-xs sm:text-sm text-[#F3F4F6] focus:outline-none focus:border-amber-500/80 transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#14171E] text-[#6B7280]">
                      Select a service
                    </option>
                    {services
                      .filter((s) => s.active)
                      .map((s) => (
                        <option
                          key={s.id}
                          value={s.id}
                          className="bg-[#14171E] text-[#F3F4F6]"
                        >
                          {s.name}
                        </option>
                      ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5 flex items-center gap-1.5">
                  <MapPin size={13} className="text-amber-400" />
                  <span>Your Area *</span>
                </label>
                <div className="relative">
                  <select
                    name="location"
                    defaultValue=""
                    required
                    className="w-full appearance-none px-4 py-2.5 rounded-xl border border-[#262A34] bg-[#0F1115] text-xs sm:text-sm text-[#F3F4F6] focus:outline-none focus:border-amber-500/80 transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#14171E] text-[#6B7280]">
                      Select your neighborhood
                    </option>
                    {locations.map((l) => (
                      <option
                        key={l.id}
                        value={l.id}
                        className="bg-[#14171E] text-[#F3F4F6]"
                      >
                        {l.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs sm:text-sm text-rose-300">
                <AlertCircle size={18} className="shrink-0 text-rose-400 mt-0.5" />
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
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold py-3.5 shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all"
              >
                {status === 'submitting' && (
                  <Loader2 size={18} className="animate-spin text-stone-950" />
                )}
                <span>
                  {status === 'submitting' ? 'Dispatching Request…' : 'Request In-Home Booking'}
                </span>
              </Button>

              <p className="mt-2.5 text-center text-[11px] text-[#6B7280]">
                🔒 100% Zero-Spam Guarantee. Your details are solely used to coordinate verified pet care.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Trust & Protocol Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl border border-[#232730] bg-[#14171E] p-6 shadow-xl shadow-black/40 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
              <ShieldCheck size={13} className="text-amber-400" />
              The PetJeeva Promise
            </span>

            <h3 className="font-heading text-lg font-bold text-[#F9FAFB] tracking-tight">
              What happens after you submit?
            </h3>

            <div className="space-y-3.5 text-xs text-[#9CA3AF]">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/20">
                  1
                </div>
                <p className="leading-relaxed">
                  <strong className="text-[#F3F4F6] block font-semibold">Specialist Matching:</strong> We pair your pet with a dedicated certified handler based on temperament and location.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/20">
                  2
                </div>
                <p className="leading-relaxed">
                  <strong className="text-[#F3F4F6] block font-semibold">Schedule Verification:</strong> A care coordinator calls or messages on WhatsApp within ~15 minutes to confirm timing.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/20">
                  3
                </div>
                <p className="leading-relaxed">
                  <strong className="text-[#F3F4F6] block font-semibold">Doorstep Care &amp; Tracking:</strong> Your verified specialist arrives equipped with sanitized instruments and live telemetry.
                </p>
              </div>
            </div>

            <div className="border-t border-[#1F232C] pt-4 flex items-center gap-2 text-xs text-[#6B7280]">
              <Clock size={14} className="text-emerald-400 shrink-0" />
              <span>Average response time: under 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}