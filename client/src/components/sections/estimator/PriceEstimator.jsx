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
      <div className="max-w-3xl">
        {/* Progress Bar & Counter Header */}
        {step <= TOTAL_STEPS && (
          <div className="mb-8 rounded-2xl border border-[#232730] bg-[#14171E]/80 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-medium text-[#9CA3AF] mb-3">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Sparkles size={13} />
                <span>Customizing Care Plan</span>
              </span>
              <span>
                Step <strong className="text-[#F9FAFB]">{step}</strong> of {TOTAL_STEPS}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full bg-[#1C2029] overflow-hidden"
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
          {step === 1 && (
            <motion.div key="step1" {...stepMotion}>
              <StepTitle
                text="What kind of pet do you have?"
                stepNumber={1}
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
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

          {step === 2 && (
            <motion.div key="step2" {...stepMotion}>
              <StepTitle
                text="What is your pet's approximate size?"
                stepNumber={2}
                onBack={goBack}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5">
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

          {step === 3 && (
            <motion.div key="step3" {...stepMotion}>
              <StepTitle
                text="What is their current coat condition?"
                stepNumber={3}
                onBack={goBack}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
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

          {step === 4 && (
            <motion.div key="step4" {...stepMotion}>
              <StepTitle
                text="Which primary service are you looking for?"
                stepNumber={4}
                onBack={goBack}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
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

          {step === 5 && (
            <motion.div key="step5" {...stepMotion}>
              <StepTitle
                text="Select your neighborhood in Gurugram"
                stepNumber={5}
                onBack={goBack}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
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

          {step > TOTAL_STEPS && result && (
            <motion.div
              key="result"
              {...stepMotion}
              className="relative overflow-hidden rounded-3xl border border-[#272B33] bg-gradient-to-b from-[#171B22] to-[#12141A] p-6 sm:p-9 shadow-2xl shadow-black/60"
            >
              {/* Ambient radial badge light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl"
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-[#232730] pb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 size={13} />
                    Estimate Generated
                  </span>
                  <p className="mt-3 text-sm font-medium text-[#9CA3AF]">
                    Recommended Care Package
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F9FAFB]">
                      ₹{result.price}
                    </span>
                    <span className="text-xs text-[#9CA3AF] uppercase tracking-wider">
                      (Taxes Included)
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-xl border border-[#272B33] bg-[#14171E] px-3.5 py-2 text-xs text-[#D1D5DB]">
                  <Clock size={15} className="text-amber-400" />
                  <span>~{result.duration} mins on-site care</span>
                </div>
              </div>

              {/* Selections Summary Mini-Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
                <div className="rounded-xl border border-[#232730] bg-[#111318] p-3">
                  <span className="text-[#6B7280] block text-[11px]">Pet Type</span>
                  <span className="font-semibold text-[#E5E7EB] mt-0.5 truncate block">
                    {selections.petType?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-[#232730] bg-[#111318] p-3">
                  <span className="text-[#6B7280] block text-[11px]">Size</span>
                  <span className="font-semibold text-[#E5E7EB] mt-0.5 truncate block">
                    {selections.size?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-[#232730] bg-[#111318] p-3">
                  <span className="text-[#6B7280] block text-[11px]">Service</span>
                  <span className="font-semibold text-[#E5E7EB] mt-0.5 truncate block">
                    {selections.service?.label || '—'}
                  </span>
                </div>
                <div className="rounded-xl border border-[#232730] bg-[#111318] p-3">
                  <span className="text-[#6B7280] block text-[11px]">Area</span>
                  <span className="font-semibold text-[#E5E7EB] mt-0.5 truncate block">
                    {selections.location?.label || '—'}
                  </span>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#292D36] bg-[#13151C] p-3.5 text-xs text-[#9CA3AF]">
                <ShieldAlert size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Estimated based on standard breed specifications. Our certified handler will evaluate coat matting and skin temperament prior to treatment to ensure ultimate safety.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  href="/book"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold shadow-lg shadow-amber-500/20 px-6 py-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book This Service
                </Button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#272B33] bg-[#14171E] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#9CA3AF] hover:border-[#383F4D] hover:bg-[#1A1E27] hover:text-[#F3F4F6] transition-all"
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
    <div className="mb-6 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back to previous step"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#272B33] bg-[#14171E] text-[#9CA3AF] hover:border-[#3A404F] hover:bg-[#1A1D25] hover:text-white transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
          </button>
        )}
        <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#F9FAFB]">
          {text}
        </h3>
      </div>

      {stepNumber && (
        <span className="hidden sm:inline-block rounded-md border border-[#232730] bg-[#101217] px-2.5 py-1 text-[11px] font-semibold text-[#6B7280]">
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