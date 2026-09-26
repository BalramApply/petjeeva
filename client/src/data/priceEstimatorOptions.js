// Demo pricing engine inputs. Multipliers/base prices are placeholders —
// Phase 12 replaces this with real PriceRule documents managed by the
// admin; estimatePrice() below is the single seam that swap happens at.

export const petTypes = [
  { id: 'dog', label: 'Dog', icon: 'Dog' },
  { id: 'cat', label: 'Cat', icon: 'Cat' },
];

export const sizes = [
  { id: 'toy', label: 'Toy', multiplier: 0.8 },
  { id: 'small', label: 'Small', multiplier: 0.9 },
  { id: 'medium', label: 'Medium', multiplier: 1 },
  { id: 'large', label: 'Large', multiplier: 1.2 },
  { id: 'giant', label: 'Giant', multiplier: 1.4 },
];

export const coatConditions = [
  { id: 'normal', label: 'Normal', multiplier: 1, durationAdd: 0 },
  { id: 'long', label: 'Long Coat', multiplier: 1.15, durationAdd: 15 },
  { id: 'heavy', label: 'Heavy Coat', multiplier: 1.3, durationAdd: 30 },
  { id: 'matted', label: 'Matted / Special Care', multiplier: 1.6, durationAdd: 45 },
];

export const estimatorServices = [
  { id: 'grooming', label: 'Grooming', basePrice: 599, baseDuration: 60 },
  { id: 'training', label: 'Training', basePrice: 799, baseDuration: 45 },
  { id: 'walking', label: 'Walking', basePrice: 249, baseDuration: 30 },
  { id: 'wellness', label: 'Vaccination & Wellness', basePrice: 449, baseDuration: 30 },
];

// Generic placeholder zones — never fabricate real neighborhood names
// before the business confirms actual service areas (Admin > Service Areas).
export const locations = [
  { id: 'Gurugram', label: 'Gurugram', multiplier: 1 },
  { id: 'Noida', label: 'Noida', multiplier: 1.1 },
  { id: 'Delhi NCR', label: 'Delhi NCR', multiplier: 1.2 },
];
