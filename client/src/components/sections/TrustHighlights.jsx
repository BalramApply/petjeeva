import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { trustHighlights } from '../../data/trustHighlights';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function TrustHighlights() {
  return (
    <Section className="!py-14 md:!py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={staggerChildren}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {trustHighlights.map(({ icon, title, description }) => {
          const Icon = Icons[icon];
          return (
            <motion.div key={title} variants={fadeUp} className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint/25 text-forest-dark">
                {Icon && <Icon size={20} />}
              </div>
              <div>
                <p className="font-heading font-semibold text-text-primary">{title}</p>
                <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
