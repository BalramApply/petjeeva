import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { howItWorksSteps } from '../../data/howItWorks';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      heading="How it works"
      subheading="From choosing a service to your pet getting personalized care — six simple steps."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={staggerChildren}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {howItWorksSteps.map(({ icon, title, description }, index) => {
          const Icon = Icons[icon];
          return (
            <motion.div key={title} variants={fadeUp} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white font-heading font-semibold">
                  {index + 1}
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <span className="hidden lg:block w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-2 text-forest-dark mb-1">
                  {Icon && <Icon size={16} />}
                  <p className="font-heading font-semibold text-text-primary">{title}</p>
                </div>
                <p className="text-sm text-text-secondary">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
