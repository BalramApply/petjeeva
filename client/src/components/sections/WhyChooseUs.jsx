import * as Icons from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { whyChooseUsPoints } from '../../data/whyChooseUs';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="section-heading-accent" />
          <h2 className="text-h2">Why pet parents choose us</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={staggerChildren}
            className="mt-8 space-y-6"
          >
            {whyChooseUsPoints.map(({ icon, title, description }) => {
              const Icon = Icons[icon];
              return (
                <motion.div key={title} variants={fadeUp} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    {Icon && <Icon size={18} />}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text-primary">{title}</p>
                    <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-square w-full rounded-[3rem] bg-gradient-to-br from-amber/25 via-amber/10 to-mint/15 flex items-center justify-center">
            <Sparkles size={110} strokeWidth={1.2} className="text-forest/15" />
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80" alt="Happy well-groomed dog" class="w-full h-full object-cover opacity-90" />
          </div>
          <div className="absolute -top-5 right-4 sm:right-8 rounded-xl bg-surface border border-border shadow-card p-4 max-w-[13rem]">
            <p className="text-sm font-medium text-text-primary">
              Same trusted team, every time you book
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
