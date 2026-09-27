import * as Icons from 'lucide-react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { whyChooseUsPoints } from '../../data/whyChooseUs';
import { fadeUp, staggerChildren, inViewOnce } from '../../utils/animations';
import heroImg from './hero.png';

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="relative overflow-hidden bg-white text-stone-900 transition-colors duration-200 dark:bg-[#0F1115] dark:text-[#F9FAFB]">
      {/* Subtle Ambient Radial Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Value Points */}
        <div>
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-800 backdrop-blur-sm dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
            <HeartHandshake size={13} className="text-amber-600 dark:text-amber-400" />
            <span>The PetJeeva Advantage</span>
          </div>

          {/* Heading with brand accent */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight dark:text-[#F9FAFB]">
            Why pet parents{' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-amber-200">
              choose us
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-stone-600 max-w-lg leading-relaxed dark:text-[#9CA3AF]">
            Every handler is background-verified, behavior-tested, and dedicated to positive-reinforcement handling.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={staggerChildren}
            className="mt-8 space-y-3.5 sm:space-y-4"
          >
            {whyChooseUsPoints.map(({ icon, title, description }) => {
              const Icon = Icons[icon];
              return (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 sm:p-5 shadow-sm shadow-stone-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/30 hover:shadow-md dark:border-[#232730] dark:bg-[#14171E] dark:shadow-lg dark:shadow-black/30 dark:hover:border-[#383F4D]"
                >
                  {/* Subtle Ambient Hover Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-xl transition-opacity duration-300 group-hover:bg-amber-500/10"
                  />

                  {/* Icon Container Well */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 shadow-inner transition-transform duration-200 group-hover:scale-105 dark:border-amber-500/25 dark:text-amber-400">
                    {Icon ? <Icon size={20} strokeWidth={2} /> : <Sparkles size={20} />}
                  </div>

                  {/* Copy */}
                  <div className="flex-1">
                    <p className="font-heading text-sm sm:text-base font-bold tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 dark:text-[#F9FAFB] dark:group-hover:text-amber-300">
                      {title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Outer Specular Container */}
          <div className="relative aspect-square w-full rounded-[2.5rem] border border-stone-200/80 bg-gradient-to-b from-stone-100 to-white p-2.5 shadow-2xl shadow-stone-200/60 dark:border-[#272B33]/80 dark:bg-gradient-to-b dark:from-[#181B22] dark:to-[#12141A] dark:shadow-black/60">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-[#14171E]">
              {/* Subtle Backlight */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.12),transparent_65%)] pointer-events-none"
              />

              {/* Watermark Sparkles */}
              <Sparkles
                size={110}
                strokeWidth={1.2}
                className="absolute -top-4 -right-4 text-stone-900/[0.04] pointer-events-none select-none dark:text-white/[0.03]"
              />

              {/* Real Imported Image */}
              <img
                src={heroImg}
                alt="Happy well-groomed pets"
                className="relative z-10 h-full w-full object-cover select-none"
              />

              {/* Bottom Vignette for Smooth Dark Blending */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-100 via-stone-100/50 to-transparent pointer-events-none z-10 dark:from-[#12141A] dark:via-[#12141A]/50"
              />
            </div>
          </div>

          {/* Floating Consistency Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute -top-4 -right-2 sm:-top-5 sm:right-4 max-w-[14.5rem] rounded-2xl border border-stone-200 bg-white/95 p-3.5 shadow-xl shadow-stone-300/40 backdrop-blur-md z-20 flex items-start gap-3 dark:border-[#2B303B] dark:bg-[#171A21]/95 dark:shadow-black/50"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-900 leading-snug dark:text-[#F9FAFB]">
                Same trusted team, every time you book
              </p>
              <p className="text-[10px] text-stone-500 mt-0.5 dark:text-[#9CA3AF]">
                Zero stranger anxiety
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}