import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { howItWorksSteps } from '../../data/howItWorks';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      heading="How It Works"
      subheading="From choosing a service to your pet receiving personalized care — six simple steps."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={staggerChildren}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
      >
        {howItWorksSteps.map(({ icon, title, description }, index) => {
          const Icon = Icons[icon];
          const stepNumber = String(index + 1).padStart(2, '0');

          return (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#232730] bg-[#14171E] p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#383F4D] hover:shadow-2xl"
            >
              {/* Subtle Ambient Radial Backlight on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-amber-500/10"
              />

              {/* Top Row: Icon Well + Step Tag */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-400/40 group-hover:bg-amber-500/15">
                    {Icon ? <Icon size={22} strokeWidth={1.9} /> : null}
                  </div>

                  <span className="font-heading text-xs font-bold tracking-widest text-[#6B7280] transition-colors group-hover:text-amber-400">
                    STEP {stepNumber}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[#F9FAFB] transition-colors group-hover:text-amber-300">
                  {title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#9CA3AF]">
                  {description}
                </p>
              </div>

              {/* Bottom Subtle Progress Indicator */}
              <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-[#1C2028]">
                <div className="h-1 w-full rounded-full bg-[#101217] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                    style={{ width: `${((index + 1) / howItWorksSteps.length) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-[10px] font-semibold text-[#4B5563]">
                  {index + 1}/{howItWorksSteps.length}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}