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
  PhoneCall
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
  wellness: Stethoscope
};

export default function About() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];
  const ActiveIcon = SERVICE_ICONS[activeService.id] || Sparkles;

  return (
    <div id='about' className="w-full bg-[#F8F7F2] text-[#17211B] font-sans antialiased selection:bg-[#A8D5BA]/30 selection:text-[#12372A]">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A8D5BA]/25 border border-[#A8D5BA]/50 text-[#12372A] text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles size={16} className="text-[#12372A]" />
            <span>The Petjeeva Standard of Care</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12372A] tracking-tight leading-[1.15]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Where Every Companion Lives <br className="hidden sm:inline" />
            <span className="text-[#F4A261]">Their Healthiest Life.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#66736B] leading-relaxed">
            Founded on empathy and certified precision, <strong className="text-[#12372A] font-semibold">Petjeeva</strong> brings ethical training, reliable walking, gentle salon grooming, and preventative wellness right to your door.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#12372A]">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DDE5DF] shadow-sm">
              <CheckCircle2 size={16} className="text-[#A8D5BA]" />
              <span>Certified Care Specialists</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DDE5DF] shadow-sm">
              <ShieldCheck size={16} className="text-[#A8D5BA]" />
              <span>100% Background-Vetted</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DDE5DF] shadow-sm">
              <Award size={16} className="text-[#F4A261]" />
              <span>Zero-Force Ethical Handling</span>
            </div>
          </div>
        </div>

        {/* Live Impact Stats Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-3xl p-6 border border-[#DDE5DF] shadow-sm text-center transform transition duration-300 hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#12372A] block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              15,000+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#66736B] mt-1 block">
              Companions Nurtured
            </span>
            <span className="text-[11px] text-[#A8D5BA] font-bold block mt-2">
              Dogs & Cats Across India
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#DDE5DF] shadow-sm text-center transform transition duration-300 hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#12372A] block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              99.4%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#66736B] mt-1 block">
              Safety Verification Score
            </span>
            <span className="text-[11px] text-[#F4A261] font-bold block mt-2">
              Real-Time GPS Monitored
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#DDE5DF] shadow-sm text-center transform transition duration-300 hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#12372A] block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              4.9 / 5
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#66736B] mt-1 block">
              Parent Satisfaction
            </span>
            <span className="text-[11px] text-[#12372A] font-bold block mt-2 flex items-center justify-center gap-1">
              <Star size={12} className="fill-[#F4A261] text-[#F4A261]" /> Verified Community
            </span>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#DDE5DF] shadow-sm text-center transform transition duration-300 hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#12372A] block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Top 2%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#66736B] mt-1 block">
              Specialist Acceptance Rate
            </span>
            <span className="text-[11px] text-[#F4A261] font-bold block mt-2">
              Rigorous Onboarding
            </span>
          </div>
        </div>
      </section>

      {/* Story & Origin Section */}
      <section className="py-16 bg-white border-y border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12372A] text-white text-xs font-semibold uppercase tracking-wider">
                <Compass size={13} className="text-[#A8D5BA]" />
                Why Petjeeva Was Born
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12372A] tracking-tight leading-snug" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Because Pet Care Deserved Uncompromised Trust.
              </h2>

              <p className="text-[#66736B] leading-relaxed text-sm sm:text-base">
                For years, pet parents were forced to navigate fragmented services—unvetted dog walkers with zero accountability, groomers relying on harsh restraints or unannounced sedation, and clinics with confusing billing.
              </p>

              <p className="text-[#66736B] leading-relaxed text-sm sm:text-base">
                <strong className="text-[#12372A]">Petjeeva ('Jeeva' meaning life and soul)</strong> was created to restore absolute integrity to modern pet parenting. We believe our animals are not mere animals; they are family members entitled to certified, gentle, and transparent professionals every single day.
              </p>

              <div className="p-5 rounded-2xl bg-[#F8F7F2] border border-[#DDE5DF] space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#12372A] text-[#A8D5BA] flex items-center justify-center flex-shrink-0 font-bold">
                    <Heart size={20} className="text-[#F4A261]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#12372A]">The Zero Sedation & Humane Touch Promise</h3>
                    <p className="text-xs text-[#66736B] mt-0.5">Every training lesson, wash, walk, and vaccination is executed with compassionate, positive-reinforcement techniques.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DDE5DF]">
                <img 
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=80" 
                  alt="Petjeeva caregiver with happy dog"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#A8D5BA]/25 backdrop-blur-md text-[#A8D5BA] text-xs font-semibold mb-2">
                    Verified Guardian Network
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-white/95">
                    "We measure success not in booked appointments, but in calm heartbeats, relaxed tail wags, and peace of mind."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Core Pillars Section (Using exact services array) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8D5BA]/25 text-[#12372A] text-xs font-semibold uppercase tracking-wider">
            <Award size={14} className="text-[#12372A]" />
            Interactive Service Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12372A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            The Four Foundations of Petjeeva
          </h2>
          <p className="text-sm sm:text-base text-[#66736B]">
            Explore each specialized division to see who it's for, the step-by-step process, and our verified professional roles.
          </p>
        </div>

        {/* Category Tab Selectors */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {services.map((svc) => {
            const isSelected = activeServiceId === svc.id;
            const TabIcon = SERVICE_ICONS[svc.id] || Sparkles;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#12372A] text-white shadow-md ring-2 ring-[#12372A]/20'
                    : 'bg-white text-[#66736B] hover:text-[#12372A] border border-[#DDE5DF] hover:bg-[#F8F7F2]'
                }`}
              >
                <TabIcon size={16} className={isSelected ? 'text-[#F4A261]' : 'text-[#66736B]'} />
                <span>{svc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#DDE5DF] shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#A8D5BA]/25 text-[#12372A] border border-[#A8D5BA]/40">
                  {activeService.category} Pillar
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4A261]/20 text-[#0B2119] border border-[#F4A261]/40">
                  Starts at ₹{activeService.startingPrice}
                </span>
                {activeService.professionalRoles.map((role) => (
                  <span key={role} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F8F7F2] text-[#66736B] border border-[#DDE5DF] uppercase tracking-wider">
                    Role: {role}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12372A] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {activeService.name}
                </h3>
                <p className="text-sm sm:text-base text-[#66736B] mt-2 leading-relaxed">
                  {activeService.shortDescription}
                </p>
              </div>

              {/* Who it's for */}
              <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DDE5DF] space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#12372A]">Who It's Specially For:</span>
                <p className="text-xs sm:text-sm text-[#66736B] leading-relaxed">
                  {activeService.whoItsFor}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#12372A] uppercase tracking-wider block">Key Benefits:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DDE5DF] text-xs font-medium text-[#17211B]">
                      <CheckCircle2 size={15} className="text-[#A8D5BA] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-[#12372A] uppercase tracking-wider block">The 3-Step Process:</span>
                <div className="space-y-2">
                  {activeService.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#66736B]">
                      <span className="w-6 h-6 rounded-full bg-[#12372A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
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
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md border border-[#DDE5DF] group">
                <img 
                  src={activeService.image} 
                  alt={activeService.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#12372A] shadow">
                    <ActiveIcon size={22} className="text-[#12372A]" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#DDE5DF] shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#66736B] block">Guaranteed Quality</span>
                    <span className="text-xs font-bold text-[#12372A]">Petjeeva Certified Specialist</span>
                  </div>
                  <span className="text-xs font-bold text-[#F4A261] bg-[#0B2119] px-3 py-1.5 rounded-full">
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