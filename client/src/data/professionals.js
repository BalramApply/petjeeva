// Demo profiles only — never invent names, experience years or
// certifications for real people. Real professional profiles are
// added by the business through Admin > Professionals (Phase 13).
import trainerImg from './trainer.png';
import wallkerImg from './wallker.png';
import vaccinationImg from './vaccinations.png';
import grommerImg from './groomer.png';
export const professionals = [
  {
    id: 'trainer',
    role: 'Trainer',
    imageUrl: trainerImg,
    bio: 'Works with pets on obedience, socialization and behavior support.',
  },
  {
    id: 'walker',
    role: 'Walker',
    imageUrl: wallkerImg,
    bio: "Provides scheduled walks tailored to your pet's routine.",
  },
  {
    id: 'groomer',
    role: 'Groomer',
    imageUrl: grommerImg,
    bio: 'Handles bathing, haircuts and breed-specific coat care.',
  },
  {
    id: 'vet',
    role: 'Veterinarian',
    imageUrl: vaccinationImg,
    bio: 'Supports preventive checkups and vaccination care.',
  },
];