import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { howItWorksSteps } from '../../data/howItWorks';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';
import asset1 from '../../assets/Asset4.jpg'; //completed
import asset2 from '../../assets/asset16.jpg';

export default function HowItWorks() {
  const [step1, step2, step3] = howItWorksSteps;

  return (
    <Section
      id="how-it-works"
      heading="How It Works"
      subheading="From choosing a service to personalized care — three simple steps."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={staggerChildren}
        className="relative mx-auto max-w-6xl"
      >
        {/* ===================== DESKTOP / LARGE DISPLAY ===================== */}
        <div className="hidden lg:grid grid-cols-5 items-center gap-4">
          
          {/* STEP 1 */}
          <motion.div variants={fadeUp} className="col-span-1 self-center">
            <StepCard step={step1} />
          </motion.div>

          {/* CONNECTOR 1 -> 2 (Image UP) */}
          <motion.div variants={fadeUp} className="col-span-1 flex flex-col items-center justify-center -translate-y-6">
            <div className="group relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-lg shadow-amber-500/10 transition-transform duration-300 hover:scale-105">
              <img
                src={asset1}
                alt="Choose service demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Connecting Curving Arrow Path */}
            <div className="w-full flex items-center justify-center text-amber-500/60 mt-3">
              <svg className="w-full h-8" viewBox="0 0 160 32" fill="none">
                <path
                  d="M10 2 C 70 30, 90 30, 145 16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <polygon points="150,16 142,12 144,20" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div variants={fadeUp} className="col-span-1 self-center">
            <StepCard step={step2} />
          </motion.div>

          {/* CONNECTOR 2 -> 3 (Image DOWN) */}
          <motion.div variants={fadeUp} className="col-span-1 flex flex-col items-center justify-center translate-y-6">
            {/* Connecting Curving Arrow Path */}
            <div className="w-full flex items-center justify-center text-amber-500/60 mb-3">
              <svg className="w-full h-8" viewBox="0 0 160 32" fill="none">
                <path
                  d="M10 16 C 65 2, 90 2, 145 28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <polygon points="150,28 144,20 142,28" fill="currentColor" />
              </svg>
            </div>

            <div className="group relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-lg shadow-amber-500/10 transition-transform duration-300 hover:scale-105">
              <img
                src={asset2}
                alt="Personalized pet care demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div variants={fadeUp} className="col-span-1 self-center">
            <StepCard step={step3} />
          </motion.div>
        </div>

        {/* ===================== MOBILE / TABLET DISPLAY ===================== */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <StepCard step={step1} className="w-full max-w-md" />

          {/* Connected Image 1 */}
          <div className="flex flex-col items-center gap-2">
            <Icons.ArrowDown className="text-amber-500 animate-bounce" size={24} />
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md">
              <img
                src={asset1}
                alt="Choose service demo"
                className="w-full h-full object-cover"
              />
            </div>
            <Icons.ArrowDown className="text-amber-500" size={24} />
          </div>

          <StepCard step={step2} className="w-full max-w-md" />

          {/* Connected Image 2 */}
          <div className="flex flex-col items-center gap-2">
            <Icons.ArrowDown className="text-amber-500 animate-bounce" size={24} />
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md">
              <img
                src={asset2}
                alt="Personalized pet care demo"
                className="w-full h-full object-cover"
              />
            </div>
            <Icons.ArrowDown className="text-amber-500" size={24} />
          </div>

          <StepCard step={step3} className="w-full max-w-md" />
        </div>
      </motion.div>
    </Section>
  );
}

function StepCard({ step, className = '' }) {
  const Icon = Icons[step.icon];

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-xl hover:shadow-stone-200/80 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#383F4D] dark:hover:shadow-2xl ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-amber-500/10"
      />

      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-600 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-500/50 group-hover:bg-amber-500/15 dark:border-amber-500/20 dark:text-amber-400 dark:group-hover:border-amber-400/40">
            {Icon ? <Icon size={22} strokeWidth={1.9} /> : null}
          </div>

          <span className="font-heading text-xs font-bold tracking-widest text-stone-600 transition-colors group-hover:text-amber-600 dark:text-[#6B7280] dark:group-hover:text-amber-400">
            STEP {step.stepNumber}
          </span>
        </div>

        <h3 className="mt-5 text-base font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 dark:text-[#F9FAFB] dark:group-hover:text-amber-300">
          {step.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
          {step.description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1.5 pt-3 border-t border-stone-200 dark:border-[#1C2028]">
        <div className="h-1 w-full rounded-full bg-stone-100 overflow-hidden dark:bg-[#101217]">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
            style={{ width: `${(parseInt(step.stepNumber, 10) / 3) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-[10px] font-semibold text-stone-600 dark:text-[#4B5563]">
          {parseInt(step.stepNumber, 10)}/3
        </span>
      </div>
    </div>
  );
}