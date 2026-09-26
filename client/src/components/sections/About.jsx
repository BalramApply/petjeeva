import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
  Users,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Compass,
  FileCheck2,
  BadgeAlert,
  Clock,
  MapPin,
  Smile,
  GraduationCap,
  Footprints,
  Scissors,
  Stethoscope,
  Activity,
  Check,
  Star,
  Lock,
  PhoneCall,
  FileText
} from 'lucide-react';

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
  {
    id: 'pet-registration',
    name: 'Pet Registration',
    category: 'Administrative & Legal',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Official pet registration, license acquisition, and legal identification.',
    whoItsFor: 'New pet parents and pet owners needing municipal licensing or official ownership records.',
    benefits: [
      'Official government registration certificate',
      'Legal ownership proof and identity tags',
      'Hassle-free document verification and renewal alerts'
    ],
    process: [
      'Upload pet details, owner ID, and vaccination records',
      'Document verification and municipal authority processing',
      'Receive digital certificate and registration ID'
    ],
    professionalRoles: ['pet_legal_advisor', 'registration_specialist'],
    startingPrice: 449,
    active: true,
  },
];

const VETTING_STEPS = [
  {
    icon: FileCheck2,
    step: 'Step 01',
    title: 'Multi-Tier Background Checks',
    description: 'Every applicant undergoes strict government identity verification, residential validation, and zero-tolerance background audits.'
  },
  {
    icon: GraduationCap,
    step: 'Step 02',
    title: 'Certified Behavioral Assessment',
    description: 'Practical evaluations assessing pet body language recognition, fear-free redirection, and gentle humane handling techniques.'
  },
  {
    icon: Stethoscope,
    step: 'Step 03',
    title: 'Emergency Medical & CPR Drills',
    description: 'Mandatory canine and feline first-aid readiness, heatstroke mitigation protocols, and real-time vet coordination mastery.'
  },
  {
    icon: Lock,
    step: 'Step 04',
    title: 'GPS-Monitored Accountability',
    description: 'Every walk, home visit, and consultation is logged with route telemetry, timestamped photo milestones, and guardian reports.'
  }
];

const SAFETY_PILLARS = [
  {
    title: 'Zero Sedation Policy',
    highlight: '100% Gentle Handling',
    desc: 'We never use pharmacological sedation or aggressive force during grooming or styling. Stress reduction is achieved through positive reinforcement and patience.'
  },
  {
    title: 'Live Walk Route Telemetry',
    highlight: 'GPS Verified',
    desc: 'Follow your companion’s walk in real-time, receiving pee/poop markers, route maps, and hydration checkpoints the moment the session wraps.'
  },
  {
    title: 'Hospital-Grade Sanitization',
    highlight: 'Sterilized Instruments',
    desc: 'All grooming shears, blades, and exam kits are autoclaved and sanitized with pet-safe enzymatic solutions between each individual pet visit.'
  },
  {
    title: 'Digital Health Passports',
    highlight: 'Instant Cloud Records',
    desc: 'Vaccination records, vet notations, weight trends, and dietary allergies stored in one accessible portal with automated immunity booster alerts.'
  }
];

const SERVICE_ICONS = {
  training: GraduationCap,
  walking: Footprints,
  grooming: Scissors,
  wellness: Stethoscope,
  'pet-registration': FileText
};

export default function About() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];
  const ActiveIcon = SERVICE_ICONS[activeService.id] || Sparkles;

  return (
    <div id="about" className="w-full bg-[#0F1115] text-[#9CA3AF] font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle Ambient Radial Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm">
            <Sparkles size={14} className="text-amber-400" />
            <span>The PetJeeva Standard of Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.12]">
            Where Every Companion Lives <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Their Healthiest Life.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
            Founded on empathy and certified precision, <strong className="text-[#F3F4F6] font-semibold">PetJeeva</strong> brings ethical training, reliable walking, gentle salon grooming, and preventative wellness right to your door.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-medium text-[#D1D5DB]">
            <div className="flex items-center gap-2 bg-[#15181F] px-4 py-2 rounded-full border border-[#232730] shadow-sm">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>Certified Care Specialists</span>
            </div>
            <div className="flex items-center gap-2 bg-[#15181F] px-4 py-2 rounded-full border border-[#232730] shadow-sm">
              <ShieldCheck size={15} className="text-amber-400" />
              <span>100% Background-Vetted</span>
            </div>
            <div className="flex items-center gap-2 bg-[#15181F] px-4 py-2 rounded-full border border-[#232730] shadow-sm">
              <Award size={15} className="text-orange-400" />
              <span>Zero-Force Ethical Handling</span>
            </div>
          </div>
        </div>

        {/* Live Impact Stats Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
          <div className="bg-[#14171E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#232730] shadow-xl shadow-black/40 text-center transition-all duration-200 hover:border-[#333945] hover:-translate-y-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] block tracking-tight">
              5,000+
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] mt-1.5 block">
              Companions Nurtured
            </span>
            <span className="text-[11px] text-amber-400/90 font-semibold block mt-2">
              Dogs & Cats Across India
            </span>
          </div>

          <div className="bg-[#14171E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#232730] shadow-xl shadow-black/40 text-center transition-all duration-200 hover:border-[#333945] hover:-translate-y-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] block tracking-tight">
              99.4%
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] mt-1.5 block">
              Safety Verification Score
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold block mt-2">
              Real-Time GPS Monitored
            </span>
          </div>

          <div className="bg-[#14171E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#232730] shadow-xl shadow-black/40 text-center transition-all duration-200 hover:border-[#333945] hover:-translate-y-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] block tracking-tight">
              4.9 / 5
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] mt-1.5 block">
              Parent Satisfaction
            </span>
            <span className="text-[11px] text-[#F3F4F6] font-semibold block mt-2 flex items-center justify-center gap-1">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              Verified Community
            </span>
          </div>

          <div className="bg-[#14171E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#232730] shadow-xl shadow-black/40 text-center transition-all duration-200 hover:border-[#333945] hover:-translate-y-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] block tracking-tight">
              Top 2%
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] mt-1.5 block">
              Specialist Acceptance
            </span>
            <span className="text-[11px] text-orange-400 font-semibold block mt-2">
              Rigorous Onboarding
            </span>
          </div>
        </div>
      </section>

      {/* Story & Origin Section */}
      <section className="py-16 sm:py-20 bg-[#0A0C0F] border-y border-[#1E222A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171B22] border border-[#272B33] text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Compass size={13} className="text-amber-400" />
                Why PetJeeva Was Born
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
                Because Pet Care Deserved Uncompromised Trust.
              </h2>

              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                For years, pet parents were forced to navigate fragmented services—unvetted dog walkers with zero accountability, groomers relying on harsh restraints or unannounced sedation, and clinics with confusing billing.
              </p>

              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                <strong className="text-[#F3F4F6] font-semibold">PetJeeva (&apos;Jeeva&apos; meaning life and soul)</strong> was created to restore absolute integrity to modern pet parenting. We believe our animals are not mere animals; they are family members entitled to certified, gentle, and transparent professionals every single day.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#13161C] border border-[#232730] space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Heart size={20} className="fill-amber-400/20" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F3F4F6]">The Zero Sedation & Humane Touch Promise</h3>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      Every training lesson, wash, walk, and vaccination is executed with compassionate, positive-reinforcement techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-[#272B33]">
                <img 
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=80" 
                  alt="PetJeeva caregiver with happy dog" 
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold mb-2">
                    Verified Guardian Network
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#E5E7EB] leading-relaxed">
                    &ldquo;We measure success not in booked appointments, but in calm heartbeats, relaxed tail wags, and peace of mind.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Core Pillars Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A21] border border-[#262A34] text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Award size={13} className="text-amber-400" />
            Interactive Service Pillars
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
            The Foundations of PetJeeva
          </h2>
          <p className="text-xs sm:text-base text-[#9CA3AF]">
            Explore each specialized division to see who it&apos;s for, the step-by-step process, and our verified professional roles.
          </p>
        </div>

        {/* Category Tab Selectors */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-8 sm:mb-10">
          {services.map((svc) => {
            const isSelected = activeServiceId === svc.id;
            const TabIcon = SERVICE_ICONS[svc.id] || Sparkles;
            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => setActiveServiceId(svc.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98] select-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#14171E] text-[#9CA3AF] hover:text-[#F3F4F6] border border-[#232730] hover:border-[#383F4D] hover:bg-[#181C24]'
                }`}
              >
                <TabIcon size={16} className={isSelected ? 'text-stone-950' : 'text-[#6B7280]'} />
                <span>{svc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Card */}
        <div className="bg-[#14171E] rounded-3xl p-5 sm:p-8 md:p-10 border border-[#232730] shadow-2xl shadow-black/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {activeService.category} Pillar
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1B1E26] text-[#F3F4F6] border border-[#2B303B]">
                  Starts at ₹{activeService.startingPrice}
                </span>
                {activeService.professionalRoles.map((role) => (
                  <span key={role} className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#101217] text-[#9CA3AF] border border-[#232730] uppercase tracking-wider">
                    Role: {role.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F9FAFB] tracking-tight">
                  {activeService.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1.5 leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>

              {/* Who it's for */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1115] border border-[#232730] space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Who It&apos;s Specially For:</span>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {activeService.whoItsFor}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider block">Key Benefits:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0F1115] border border-[#232730] text-xs font-medium text-[#E5E7EB]">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider block">The 3-Step Process:</span>
                <div className="space-y-2">
                  {activeService.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#9CA3AF]">
                      <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#262A34] group">
                <img 
                  src={activeService.image} 
                  alt={activeService.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/30 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1115]/90 border border-[#2B303B] backdrop-blur-md flex items-center justify-center text-amber-400 shadow">
                    <ActiveIcon size={20} />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#14171E]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#272B33] shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Guaranteed Quality</span>
                    <span className="text-xs font-semibold text-[#F3F4F6]">PetJeeva Certified Specialist</span>
                  </div>
                  <span className="text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full">
                    Active Pillar
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}