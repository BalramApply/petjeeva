// Demo services matching the four core categories from the brief.
// Shape mirrors the future Service model so swapping this for a
// GET /api/services call in Phase 12 is a drop-in change.
// startingPrice is placeholder/demo — real pricing is admin-configured
// via PriceRule, never hardcoded once that's wired up.
export const services = [
  {
    id: 'training',
    name: 'Dog & Cat Training',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Behavior, obedience and puppy training tailored to your pet.',
    whoItsFor: 'Puppies learning the basics, or adult pets working on behavior, recall or socialization.',
    benefits: ['Structured sessions', 'One-on-one attention', 'Ongoing behavior support'],
    process: ['Initial behavior assessment', 'Personalized training plan', 'Regular sessions with progress check-ins'],
    professionalRoles: ['trainer'],
    startingPrice: 799,
    active: true,
  },
  {
    id: 'walking',
    name: 'Dog Walking',
    category: 'Walking',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Daily or scheduled walks with a consistent, trusted walker.',
    whoItsFor: 'Busy pet parents who want their dog walked reliably, rain or shine.',
    benefits: ['Flexible durations', 'Same walker each time', 'Visit updates'],
    process: ['Pick a schedule that fits your day', 'Walker arrives at your door', 'Get an update after each walk'],
    professionalRoles: ['walker'],
    startingPrice: 249,
    active: true,
  },
  {
    id: 'grooming',
    name: 'Pet Grooming',
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Bathing, haircuts, nail trims and breed-specific coat care.',
    whoItsFor: 'Any pet due for a bath, trim, or extra coat care between visits.',
    benefits: ['Breed-specific care', 'Gentle handling', 'At-home or in-studio'],
    process: ['Coat & skin check-in', 'Bath, trim and styling', 'Final brush-out and pickup'],
    professionalRoles: ['groomer'],
    startingPrice: 599,
    active: true,
  },
  {
    id: 'wellness',
    name: 'Vaccination & Wellness',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Routine checkups, vaccinations and preventive care.',
    whoItsFor: 'Pets due for a routine checkup, vaccination, or general wellness review.',
    benefits: ['Trained care team', 'Digital health records', 'Timely reminders'],
    process: ['Share your pet\'s health history', 'In-person checkup or vaccination', 'Digital record and reminder set'],
    professionalRoles: ['vet'],
    startingPrice: 449,
    active: true,
  },
];