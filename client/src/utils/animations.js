// Shared Framer Motion variants.
// Use sparingly: one orchestrated sequence on the hero, and a single
// fade-up the first time a section enters view — not on every card.

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// Pass to <motion.div> as: initial="hidden" whileInView="visible" viewport={inViewOnce}
export const inViewOnce = { once: true, amount: 0.3 };
