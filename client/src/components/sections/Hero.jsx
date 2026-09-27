import { motion } from 'framer-motion';
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import Button from '../ui/Button';
import Container from '../layout/Container';
import { getWhatsAppLink } from '../../data/businessInfo';
import { fadeUp, staggerChildren } from '../../utils/animations';

import heroImg from './hero.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-24 text-stone-900 transition-colors duration-200 selection:bg-amber-500/20 selection:text-amber-800 md:pt-20 md:pb-32 dark:bg-[#0F1115] dark:text-[#F9FAFB] dark:selection:text-amber-300">

      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl dark:from-amber-500/10 dark:via-orange-500/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col justify-center"
        >
          {/* Trust / Category Tag */}
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium tracking-wide text-amber-800 backdrop-blur-sm dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
              <Sparkles size={13} className="text-amber-600 dark:text-amber-400" />
              Certified In-Home Pet Care & Health
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-[#F9FAFB]"
          >
            Expert care.{' '}
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-amber-200">
              Happier pets.
            </span>
            Right at your door.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-stone-600 sm:text-lg dark:text-[#9CA3AF]"
          >
            Professional pet care designed around your pet&apos;s comfort,
            safety, and daily rhythm — certified grooming, active walking,
            and preventive wellness.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Button
              variant="primary"
              href="/book"
              className="bg-gradient-to-r from-amber-500 to-orange-500 font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
            >
              Book Free Demo
            </Button>

            <Button
              variant="outline"
              href="#estimator"
              className="border-stone-200 bg-stone-50/80 text-stone-700 shadow-sm transition-all duration-200 hover:border-stone-300 hover:bg-stone-100 dark:border-[#272B33] dark:bg-[#16181D]/80 dark:text-[#E5E7EB] dark:shadow-none dark:hover:border-[#383E4A] dark:hover:bg-[#1E222A]"
            >
              Get Price Estimate
            </Button>

            <Button
              variant="ghost"
              href={getWhatsAppLink()}
              icon={MessageCircle}
              className="text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-[#9CA3AF] dark:hover:bg-[#1A1D24] dark:hover:text-[#F3F4F6]"
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Quick Micro-Metrics */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 border-t border-stone-200 pt-6 dark:border-[#232730]"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500 dark:text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    stroke="none"
                  />
                ))}
              </div>

              <span className="text-xs font-semibold text-stone-900 dark:text-[#F3F4F6]">
                4.9/5
              </span>

              <span className="text-xs text-stone-500 dark:text-[#6B7280]">
                (1,200+ visits)
              </span>
            </div>

            <div className="h-3 w-px bg-stone-200 dark:bg-[#262A33]" />

            <span className="flex items-center gap-1 text-xs text-stone-600 dark:text-[#9CA3AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              100% Verified Sitters & Handlers
            </span>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="relative mx-auto hidden w-full max-w-sm lg:block lg:max-w-md"
        >
          {/* Outer Specular Container */}
          <div className="relative aspect-square w-full rounded-[2.5rem] border border-stone-200/80 bg-gradient-to-b from-stone-100 to-white p-2.5 shadow-2xl shadow-stone-200/60 dark:border-[#272B33]/80 dark:bg-gradient-to-b dark:from-[#181B22] dark:to-[#12141A] dark:shadow-black/60">

            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-[#14171E]">

              {/* Subtle Backlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.12),transparent_65%)]"
              />

              {/* Watermark Sparkles */}
              <Sparkles
                size={110}
                strokeWidth={1.2}
                className="pointer-events-none absolute -right-4 -top-4 select-none text-stone-900/[0.04] dark:text-white/[0.03]"
              />

              {/* Hero Image */}
              <img
                src={heroImg}
                alt="Happy well-groomed pets"
                className="relative z-10 h-full w-full select-none object-cover"
              />

              {/* Bottom Vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-stone-100 via-stone-100/50 to-transparent dark:from-[#12141A] dark:via-[#12141A]/50"
              />
            </div>
          </div>

          {/* Floating Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.4,
            }}
            className="absolute -right-2 -top-4 z-20 flex max-w-[14.5rem] items-start gap-3 rounded-2xl border border-stone-200 bg-white/95 p-3.5 shadow-xl shadow-stone-300/40 backdrop-blur-md sm:-right-5 sm:-top-5 dark:border-[#2B303B] dark:bg-[#171A21]/95 dark:shadow-black/50"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ShieldCheck size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold leading-snug text-stone-900 dark:text-[#F9FAFB]">
                Same trusted team, every time you book
              </p>

              <p className="mt-0.5 text-[10px] text-stone-500 dark:text-[#9CA3AF]">
                Zero stranger anxiety
              </p>
            </div>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}