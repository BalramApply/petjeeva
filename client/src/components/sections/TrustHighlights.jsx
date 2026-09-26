import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { trustHighlights } from '../../data/trustHighlights';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function TrustHighlights() {
  return (
    <Section className="!py-12 sm:!py-14 md:!py-16 border-y border-[#1E222A] bg-[#0A0C0F]">
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
              className="group relative flex items-start gap-4 rounded-2xl border border-[#232730] bg-[#14171E] p-4 sm:p-5 shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#383F4D]"
            >
              {/* Subtle Ambient Backlight on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-xl transition-opacity duration-300 group-hover:bg-amber-500/10"
              />

              {/* Icon Container Well */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400 shadow-inner transition-transform duration-200 group-hover:scale-105">
                {Icon && <Icon size={20} strokeWidth={2} />}
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <p className="font-heading text-sm sm:text-base font-bold tracking-tight text-[#F9FAFB] transition-colors group-hover:text-amber-300">
                  {title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">
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