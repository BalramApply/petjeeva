import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { trustHighlights } from '../../data/trustHighlights';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function TrustHighlights() {
  return (
    <Section className="!py-12 sm:!py-14 md:!py-16 border-y border-stone-200 bg-stone-50 transition-colors duration-200 dark:border-[#1E222A] dark:bg-[#0A0C0F]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={staggerChildren}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {trustHighlights.map(({ icon, title, description }) => {
          const Icon = Icons[icon];
          return (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 sm:p-5 shadow-sm shadow-stone-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/30 hover:shadow-md dark:border-[#232730] dark:bg-[#14171E] dark:shadow-lg dark:shadow-black/30 dark:hover:border-[#383F4D]"
            >
              {/* Subtle Ambient Backlight on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-xl transition-opacity duration-300 group-hover:bg-amber-500/10"
              />

              {/* Icon Container Well */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 shadow-inner transition-transform duration-200 group-hover:scale-105 dark:border-amber-500/25 dark:text-amber-400">
                {Icon && <Icon size={20} strokeWidth={2} />}
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <p className="font-heading text-sm sm:text-base font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 dark:text-[#F9FAFB] dark:group-hover:text-amber-300">
                  {title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}