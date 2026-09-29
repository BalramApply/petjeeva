import trainerImg from './trainer.png';
import walkerImg from './wallker.png';
import vaccinationImg from './vaccinations.png';
import groomerImg from './groomer.png';

export const reviews = [
  {
    id: 'rev-training',
    service: 'Training',
    serviceCategory: 'Behavior & Obedience',
    serviceIcon: 'GraduationCap', // used for icon rendering or tag
    rating: 5,
    author: {
      name: 'Ajay Sharma',
      petName: 'Bruno',
      petBreed: 'Golden Retriever (8 mos)',
      avatarUrl: trainerImg,
    },
    title: 'Transformed our leash reactive puppy in 3 sessions!',
    comment:
      'Bruno used to lunge and bark excitedly at every passing dog during walks. PetJeeva’s certified positive-reinforcement trainer came directly to our home and worked miracles with patience and zero harsh corrections.',
    date: '2 days ago',
    verifiedBooking: true,
    highlight: 'Zero-Force Training',
  },
  {
    id: 'rev-grooming',
    service: 'Grooming',
    serviceCategory: 'Full Spa & Coat Care',
    serviceIcon: 'Scissors',
    rating: 5,
    author: {
      name: 'Rohan Mehra',
      petName: 'Milo',
      petBreed: 'Persian Cat',
      avatarUrl: groomerImg,
    },
    title: 'Stress-free grooming for my anxious Persian cat',
    comment:
      'Milo gets terrified at salon visits. The PetJeeva mobile groomer arrived with calm, sanitized equipment, took plenty of cuddle breaks, and gave him the fluffiest, de-shedded coat without any sedation.',
    date: '1 week ago',
    verifiedBooking: true,
    highlight: 'Sedation-Free Spa',
  },
  // {
  //   id: 'rev-walking',
  //   service: 'Walking',
  //   serviceCategory: 'Daily Exercise & GPS Track',
  //   serviceIcon: 'Footprints',
  //   rating: 5,
  //   author: {
  //     name: 'Ravi Verma',
  //     petName: 'Bella & Simba',
  //     petBreed: 'Indie & Beagle duo',
  //     avatarUrl: walkerImg,
  //   },
  //   title: 'Live GPS route updates & happy tired doggos',
  //   comment:
  //     'With 10-hour office days, PetJeeva daily walks have been an absolute lifesaver. The walker sends GPS walk tracks, pee/poop updates, and the cutest water break photos after every 45-minute stroll.',
  //   date: '3 days ago',
  //   verifiedBooking: true,
  //   highlight: 'GPS Live Route Tracking',
  // },
  {
    id: 'rev-vaccination',
    service: 'Vaccination',
    serviceCategory: 'At-Home Preventive Vet Care',
    serviceIcon: 'Syringe',
    rating: 5,
    author: {
      name: 'Dr. Kabir Sen',
      petName: 'Leo',
      petBreed: 'Labrador Retriever (2 yrs)',
      avatarUrl: vaccinationImg,
    },
    title: 'Annual DHPPiL booster done at home with zero trauma',
    comment:
      'No clinic waiting room anxiety or risk of catching infections. The PetJeeva vet carried temperature-controlled cold-chain vaccines, digital records were instantly updated on our app profile, and Leo even got treats!',
    date: '2 weeks ago',
    verifiedBooking: true,
    highlight: 'Cold-Chain Certified',
  },
];