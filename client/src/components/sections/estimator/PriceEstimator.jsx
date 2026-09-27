import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Clock, Sparkles, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Section from '../../layout/Section';
import Button from '../../ui/Button';
import OptionCard from './OptionCard';
import {
  petTypes,
  sizes,
  coatConditions,
  estimatorServices,
  locations,
} from '../../../data/priceEstimatorOptions';
import { estimatePrice } from '../../../utils/estimatePrice';

const TOTAL_STEPS = 5;

const initialSelections = {
  petType: null,
  size: null,
  coat: null,
  service: null,
  location: null,
};

export default function PriceEstimator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState(initialSelections);

  const select = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    setStep((s) => Math.min(s + 1, TOTAL_STEPS + 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const reset = () => {
    setSelections(initialSelections);
    setStep(1);
  };

  const result =
    step > TOTAL_STEPS
      ? estimatePrice({
          size: selections.size,
          coat: selections.coat,
          service: selections.service,
          location: selections.location,
        })
      : null;

  return (
    <Section
      id="estimator"
      heading="Instant Price Estimator"
      subheading="Answer a few quick questions about your pet for an immediate, transparent estimate — finalized during on-site health evaluation."
    >
      {/* Kept wrapper compact (max-w-xl) so cards don't overstretch */}
      <div className="mx-auto w-full max-w-xl">
        {/* Progress Bar & Counter Header */}
        {step <= TOTAL_STEPS && (
          <div className="mb-4 rounded-2xl border border-stone-200 bg-white/80 p-2.5 shadow-sm backdrop-blur-sm dark:border-[#232730] dark:bg-[#14171E]/80 dark:shadow-none">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-stone-600 dark:text-[#9CA3AF]">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <Sparkles size={13} />
                <span>Customizing Care Plan</span>
              </span>
              <span>
                Step <strong className="text-stone-900 dark:text-[#F9FAFB]">{step}</strong> of {TOTAL_STEPS}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100 dark:bg-[#1C2029]"
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      i < step
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm shadow-amber-500/30'
                        : 'bg-transparent'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Pet Type (Compact 2 cols on mobile, 4 cols on desktop) */}
          {step === 1 && (
            <motion.div key="step1" {...stepMotion}>
              <StepTitle text="What kind of pet do you have?" stepNumber={1} />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                {petTypes.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    selected={selections.petType?.id === opt.id}
                    onClick={() => select('petType', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Approximate Size (Compact 3 cols on mobile, 5 cols on desktop) */}
          {step === 2 && (
            <motion.div key="step2" {...stepMotion}>
              <StepTitle text="What is your pet's approximate size?" stepNumber={2} onBack={goBack} />
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-2.5">
                {sizes.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    selected={selections.size?.id === opt.id}
                    onClick={() => select('size', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Coat Condition - Single Column */}
{step === 3 && (
  <motion.div key="step3" {...stepMotion}>
    <StepTitle
      text="What is their current coat condition?"
      stepNumber={3}
      onBack={goBack}
    />
    {/* Use grid-cols-1 or max-w-sm to keep it neatly aligned */}
    <div className="grid grid-cols-1 gap-2.5 max-w-sm mx-auto">
      {coatConditions.map((opt) => (
        <OptionCard
          key={opt.id}
          label={opt.label}
          icon={opt.icon}
          selected={selections.coat?.id === opt.id}
          onClick={() => select('coat', opt)}
        />
      ))}
    </div>
  </motion.div>
)}

          {/* Step 4: Primary Service - Single Column */}
{step === 4 && (
  <motion.div key="step4" {...stepMotion}>
    <StepTitle
      text="Which primary service are you looking for?"
      stepNumber={4}
      onBack={goBack}
    />
    <div className="mx-auto grid max-w-sm grid-cols-1 gap-2.5">
      {estimatorServices.map((opt) => (
        <OptionCard
          key={opt.id}
          label={opt.label}
          icon={opt.icon}
          selected={selections.service?.id === opt.id}
          onClick={() => select('service', opt)}
        />
      ))}
    </div>
  </motion.div>
)}

          {/* Step 5: Neighborhood (Compact 2 cols on mobile, 3 cols on desktop) */}
          {step === 5 && (
            <motion.div key="step5" {...stepMotion}>
              <StepTitle text="Select your neighborhood in Gurugram" stepNumber={5} onBack={goBack} />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {locations.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    selected={selections.location?.id === opt.id}
                    onClick={() => select('location', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Result Card */}
          {step > TOTAL_STEPS && result && (
            <motion.div
              key="result"
              {...stepMotion}
              className="relative mx-auto w-full overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-3 shadow-lg sm:p-4 dark:border-[#272B33] dark:from-[#171B22] dark:to-[#12141A]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl"
              />

              <div className="flex flex-col gap-1 border-b border-stone-200 pb-4 sm:flex-row sm:items-start sm:justify-between dark:border-[#232730]">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:border-emerald-500/20 dark:text-emerald-400">
                    <CheckCircle2 size={12} />
                    Estimate Generated
                  </span>

                  <p className="mt-1 text-xs font-medium text-stone-600 dark:text-[#9CA3AF]">
                    Recommended Care Package
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
                      ₹{result.price}
                    </span>

                    <span className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-[#9CA3AF]">
                      (Taxes Included)
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-[11px] text-stone-700 shadow-sm dark:border-[#272B33] dark:bg-[#14171E] dark:text-[#D1D5DB] dark:shadow-none">
                  <Clock size={13} className="text-amber-600 dark:text-amber-400" />
                  <span>~{result.duration} mins on-site care</span>
                </div>
              </div>

              {/* Selections Summary Mini-Grid */}
              <div className="mt-3 grid grid-cols-2 gap-1.5 text-xs sm:grid-cols-4">
                <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-xs dark:border-[#232730] dark:bg-[#111318] dark:shadow-none">
                  <span className="block text-[11px] text-stone-500 dark:text-[#6B7280]">Pet Type</span>
                  <span className="mt-0.5 block truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                    {selections.petType?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-xs dark:border-[#232730] dark:bg-[#111318] dark:shadow-none">
                  <span className="block text-[11px] text-stone-500 dark:text-[#6B7280]">Size</span>
                  <span className="mt-0.5 block truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                    {selections.size?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-xs dark:border-[#232730] dark:bg-[#111318] dark:shadow-none">
                  <span className="block text-[11px] text-stone-500 dark:text-[#6B7280]">Service</span>
                  <span className="mt-0.5 block truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                    {selections.service?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-xs dark:border-[#232730] dark:bg-[#111318] dark:shadow-none">
                  <span className="block text-[11px] text-stone-500 dark:text-[#6B7280]">Area</span>
                  <span className="mt-0.5 block truncate font-semibold text-stone-800 dark:text-[#E5E7EB]">
                    {selections.location?.label || '—'}
                  </span>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-stone-200 bg-stone-100/70 p-3 text-xs text-stone-600 dark:border-[#292D36] dark:bg-[#13151C] dark:text-[#9CA3AF]">
                <ShieldAlert size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
                <p className="leading-relaxed">
                  Estimated based on standard breed specifications. Our certified handler will evaluate coat matting and skin temperament prior to treatment to ensure ultimate safety.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  href="/book"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
                >
                  Book This Service
                </Button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-xs font-medium text-stone-600 shadow-sm transition-all hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 sm:text-sm dark:border-[#272B33] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-[#383F4D] dark:hover:bg-[#1A1E27] dark:hover:text-[#F3F4F6]"
                >
                  <RotateCcw size={15} />
                  <span>Start over</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function StepTitle({ text, stepNumber, onBack }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back to previous step"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-sm transition-all hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 active:scale-95 dark:border-[#272B33] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-[#3A404F] dark:hover:bg-[#1A1D25] dark:hover:text-white"
          >
            <ArrowLeft size={15} />
          </button>
        )}
        <h3 className="font-heading text-base font-bold tracking-tight text-stone-900 sm:text-lg dark:text-[#F9FAFB]">
          {text}
        </h3>
      </div>

      {stepNumber && (
        <span className="hidden rounded-md border border-stone-200 bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600 sm:inline-block dark:border-[#232730] dark:bg-[#101217] dark:text-[#6B7280]">
          Q{stepNumber}
        </span>
      )}
    </div>
  );
}

const stepMotion = {
  initial: { opacity: 0, x: 12 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
  transition: { duration: 0.22, ease: 'easeOut' },
};