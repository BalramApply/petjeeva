import { motion } from 'framer-motion';
import { MessageCircle, PawPrint, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import { getWhatsAppLink } from '../../data/businessInfo';
import { fadeUp, staggerChildren } from '../../utils/animations';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32">
      <Container className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.h1 variants={fadeUp} className="text-display">
            Expert care.
            <br />
            Happier pets.
            <br />
            Right at your door.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-md text-base text-text-secondary">
            Professional pet care designed around your pet's comfort, safety and
            everyday routine.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary" href="/book">
              Book Demo
            </Button>
            <Button variant="outline" href="#estimator">
              Get Price Estimate
            </Button>
            <Button variant="ghost" href={getWhatsAppLink()} icon={MessageCircle}>
              Chat on WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] w-full rounded-[3rem] bg-gradient-to-br from-mint/50 via-mint/20 to-amber/10 flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80" alt="Happy well-groomed dog" class="w-full h-full object-cover opacity-90" />
            <PawPrint size={140} strokeWidth={1.2} className="text-forest/15" />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:w-64 rounded-xl bg-surface border border-border shadow-card p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/30 text-forest-dark">
              <ShieldCheck size={20} />
            </div>
            <p className="text-sm font-medium text-text-primary">Pet-first care, every visit</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
