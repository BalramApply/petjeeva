import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, RotateCcw } from 'lucide-react';
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
      heading="Get a price estimate"
      subheading="Answer a few quick questions for an instant estimate — final price is confirmed after professional assessment."
    >
      {step <= TOTAL_STEPS && (
        <div className="mb-8 flex items-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < step ? 'bg-amber' : 'bg-border'
              }`}
            />
          ))}
        </div>
      )}

      <div className="max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...stepMotion}>
              <StepTitle text="What kind of pet do you have?" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
              <StepTitle text="What's their size?" onBack={goBack} />
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {sizes.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    selected={selections.size?.id === opt.id}
                    onClick={() => select('size', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...stepMotion}>
              <StepTitle text="Coat condition?" onBack={goBack} />
              <div className="grid grid-cols-2 gap-4">
                {coatConditions.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    selected={selections.coat?.id === opt.id}
                    onClick={() => select('coat', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...stepMotion}>
              <StepTitle text="Which service?" onBack={goBack} />
              <div className="grid grid-cols-2 gap-4">
                {estimatorServices.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    selected={selections.service?.id === opt.id}
                    onClick={() => select('service', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" {...stepMotion}>
              <StepTitle text="Your neighborhood?" onBack={goBack} />
              <div className="grid grid-cols-3 gap-4">
                {locations.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    selected={selections.location?.id === opt.id}
                    onClick={() => select('location', opt)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step > TOTAL_STEPS && result && (
            <motion.div key="result" {...stepMotion} className="rounded-2xl border border-border bg-surface p-8">
              <p className="text-sm font-medium text-text-secondary">Estimated service</p>
              <p className="mt-1 font-heading text-3xl font-semibold text-forest">
                ₹{result.price}
              </p>
              <p className="mt-1 text-sm text-text-secondary">~{result.duration} minutes</p>

              <p className="mt-4 text-xs text-text-secondary">
                Estimated price — final price may vary after professional assessment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" href="/book">
                  Book This Service
                </Button>
                <button
                  type="button"
                  onClick={reset}
                  className="btn-ghost"
                >
                  <RotateCcw size={16} />
                  Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function StepTitle({ text, onBack }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="text-text-secondary hover:text-forest"
        >
          <ArrowLeft size={18} />
        </button>
      )}
      <p className="font-heading font-semibold text-text-primary">{text}</p>
    </div>
  );
}

const stepMotion = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.25, ease: 'easeOut' },
};
