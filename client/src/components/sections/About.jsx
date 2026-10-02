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
import asset1 from '../../assets/asset1.jpg'
import asset2 from '../../assets/asset16.jpg'
import asset3 from '../../assets/asset10.jpg'
import asset4 from '../../assets/asset20.png'
import asset6 from '../../assets/asset9.jpg'
import asset7 from '../../assets/Pet_Registeration.png'

export const services = [
  {
    id: 'training',
    name: 'Dog & Cat Training',
    category: 'Training',
    image: asset1,
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
    image: asset2,
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
    image: asset3,
    shortDescription: 'Bathing, haircuts, nail trims and breed-specific coat care.',
    whoItsFor: 'Any pet due for a bath, trim, or extra coat care between visits.',
    benefits: ['Breed-specific care', 'Gentle handling', 'At-home or in-studio'],
    process: ['Coat & skin check-in', 'Bath, trim and styling', 'Final brush-out and pickup'],
    professionalRoles: ['groomer'],
    startingPrice: 999,
    active: true,
  },
  {
    id: 'wellness',
    name: 'Vaccination & Wellness',
    category: 'Healthcare',
    image: asset4,
    shortDescription: 'Routine checkups, vaccinations and preventive care.',
    whoItsFor: 'Pets due for a routine checkup, vaccination, or general wellness review.',
    benefits: ['Trained care team', 'Digital health records', 'Timely reminders'],
    process: ['Share your pet\'s health history', 'In-person checkup or vaccination', 'Digital record and reminder set'],
    professionalRoles: ['vet'],
    startingPrice: 'Based on Age',
    active: true,
  },
  {
    id: 'pet-registration',
    name: 'Pet Registration',
    category: 'Administrative & Legal',
    image: asset7,
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
    active: true,
  },
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

  const handleBookingRedirect = () => {
    window.location.href = '/book';
  };

  return (
    <div id="about" className="w-full bg-white text-stone-600 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-800 transition-colors duration-200 dark:bg-[#0F1115] dark:text-[#9CA3AF] dark:selection:text-amber-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm dark:border-amber-500/20 dark:text-amber-300">
            <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
            <span>The PetJeeva Standard of Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] dark:text-[#F9FAFB]">
            Helping Every Pet Live <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-amber-200">
              A Happy, Healthy Life.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto dark:text-[#9CA3AF]">
            Built on love and expert care, <strong className="text-stone-900 font-semibold dark:text-[#F3F4F6]">PetJeeva</strong> brings kind dog training, daily walking, gentle grooming, and checkups right to your door.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-medium text-stone-700 dark:text-[#D1D5DB]">
            <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200 shadow-sm dark:bg-[#15181F] dark:border-[#232730]">
              <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
              <span>Certified Care Specialists</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200 shadow-sm dark:bg-[#15181F] dark:border-[#232730]">
              <ShieldCheck size={15} className="text-amber-600 dark:text-amber-400" />
              <span>100% Background-Vetted</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200 shadow-sm dark:bg-[#15181F] dark:border-[#232730]">
              <Award size={15} className="text-orange-600 dark:text-orange-400" />
              <span>Zero-Force Ethical Handling</span>
            </div>
          </div>
        </div>

        {/* Live Impact Stats Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
          <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm transition-all duration-200 hover:border-stone-300 hover:-translate-y-0.5 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#333945]">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 block tracking-tight dark:text-[#F9FAFB]">
              5,000+
            </span>
            <span className="text-xs sm:text-sm font-medium text-stone-600 mt-1.5 block dark:text-[#9CA3AF]">
              Companions Nurtured
            </span>
            <span className="text-[11px] text-amber-700 font-semibold block mt-2 dark:text-amber-400/90">
              Dogs & Cats Across India
            </span>
          </div>

          <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm transition-all duration-200 hover:border-stone-300 hover:-translate-y-0.5 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#333945]">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 block tracking-tight dark:text-[#F9FAFB]">
              99.4%
            </span>
            <span className="text-xs sm:text-sm font-medium text-stone-600 mt-1.5 block dark:text-[#9CA3AF]">
              Safety Verification Score
            </span>
            <span className="text-[11px] text-emerald-600 font-semibold block mt-2 dark:text-emerald-400">
              Real-Time GPS Monitored
            </span>
          </div>

          <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm transition-all duration-200 hover:border-stone-300 hover:-translate-y-0.5 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#333945]">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 block tracking-tight dark:text-[#F9FAFB]">
              4.4 / 5
            </span>
            <span className="text-xs sm:text-sm font-medium text-stone-600 mt-1.5 block dark:text-[#9CA3AF]">
              Parent Satisfaction
            </span>
            <span className="text-[11px] text-stone-900 font-semibold mt-2 flex items-center justify-center gap-1 dark:text-[#F3F4F6]">
              <Star size={12} className="fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
              Verified Community
            </span>
          </div>

          <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm transition-all duration-200 hover:border-stone-300 hover:-translate-y-0.5 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#333945]">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 block tracking-tight dark:text-[#F9FAFB]">
              Top 2%
            </span>
            <span className="text-xs sm:text-sm font-medium text-stone-600 mt-1.5 block dark:text-[#9CA3AF]">
              Specialist Acceptance
            </span>
            <span className="text-[11px] text-orange-600 font-semibold block mt-2 dark:text-orange-400">
              Rigorous Onboarding
            </span>
          </div>
        </div>
      </section>

      {/* Story & Origin Section */}
      <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200 dark:bg-[#0A0C0F] dark:border-[#1E222A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-amber-800 text-xs font-semibold uppercase tracking-wider dark:bg-[#171B22] dark:border-[#272B33] dark:text-amber-300">
                <Compass size={13} className="text-amber-600 dark:text-amber-400" />
                Why PetJeeva Was Born
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight dark:text-[#F9FAFB]">
                Because Pet Care Deserved Uncompromised Trust.
              </h2>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base dark:text-[#9CA3AF]">
                <strong className="text-stone-900 font-semibold dark:text-[#F3F4F6]">PetJeeva (&apos;Jeeva&apos; meaning life and soul)</strong> was created to restore absolute integrity to modern pet parenting. We believe our animals are not mere animals; they are family members entitled to certified, gentle, and transparent professionals every single day.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3 dark:bg-[#13161C] dark:border-[#232730] dark:shadow-none">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0 dark:border-amber-500/20 dark:text-amber-400">
                    <Heart size={20} className="fill-amber-500/20 dark:fill-amber-400/20" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-[#F3F4F6]">The Zero Sedation & Humane Touch Promise</h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed dark:text-[#9CA3AF]">
                      Every training lesson, wash, walk, and vaccination is executed with compassionate, positive-reinforcement techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/60 border border-stone-200 dark:border-[#272B33] dark:shadow-black/60">
                <img 
                  src={asset6} 
                  alt="PetJeeva caregiver with happy dog" 
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none dark:from-[#0B0D11] dark:via-[#0B0D11]/40" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-amber-300 text-xs font-semibold mb-2">
                    Verified Guardian Network
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-stone-100 leading-relaxed dark:text-[#E5E7EB]">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-amber-800 text-xs font-semibold uppercase tracking-wider dark:bg-[#171A21] dark:border-[#262A34] dark:text-amber-300">
            <Award size={13} className="text-amber-600 dark:text-amber-400" />
            Interactive Service Pillars
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight dark:text-[#F9FAFB]">
            The Foundations of PetJeeva
          </h2>
          <p className="text-xs sm:text-base text-stone-600 dark:text-[#9CA3AF]">
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
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300 hover:bg-stone-200/60 dark:bg-[#14171E] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6] dark:border-[#232730] dark:hover:border-[#383F4D] dark:hover:bg-[#181C24]'
                }`}
              >
                <TabIcon size={16} className={isSelected ? 'text-stone-950' : 'text-stone-400 dark:text-[#6B7280]'} />
                <span>{svc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Card */}
        <div className="bg-stone-50 rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-200 shadow-xl shadow-stone-200/50 transition-all duration-300 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-2xl dark:shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-800 border border-amber-500/30 dark:border-amber-500/20 dark:text-amber-300">
                  {activeService.category} Pillar
                </span>
                
                {/* Price Tag (renders 'Based on Age', starts at ₹..., or hidden if no startingPrice) */}
                {activeService.startingPrice && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-stone-900 border border-stone-200 dark:bg-[#1B1E26] dark:text-[#F3F4F6] dark:border-[#2B303B]">
                    {typeof activeService.startingPrice === 'number'
                      ? `Starts at ₹${activeService.startingPrice}`
                      : activeService.startingPrice}
                  </span>
                )}

                {activeService.professionalRoles.map((role) => (
                  <span key={role} className="px-3 py-1 rounded-full text-[11px] font-medium bg-stone-100 text-stone-600 border border-stone-200 uppercase tracking-wider dark:bg-[#101217] dark:text-[#9CA3AF] dark:border-[#232730]">
                    Role: {role.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight dark:text-[#F9FAFB]">
                  {activeService.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed dark:text-[#9CA3AF]">
                  {activeService.shortDescription}
                </p>
              </div>

              {/* Who it's for */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1 dark:bg-[#0F1115] dark:border-[#232730] dark:shadow-none">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Who It&apos;s Specially For:</span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed dark:text-[#D1D5DB]">
                  {activeService.whoItsFor}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block dark:text-[#F3F4F6]">Key Benefits:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 shadow-sm text-xs font-medium text-stone-800 dark:bg-[#0F1115] dark:border-[#232730] dark:text-[#E5E7EB] dark:shadow-none">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 dark:text-emerald-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Process or Pet Registration Button */}
              {activeService.id === 'pet-registration' ? (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleBookingRedirect}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
                  >
                    <span>Pet Registration Assistance</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block dark:text-[#F3F4F6]">The 3-Step Process:</span>
                  <div className="space-y-2">
                    {activeService.process.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF]">
                        <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 dark:border-amber-500/20 dark:text-amber-400">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200 group dark:border-[#262A34]">
                <img 
                  src={activeService.image} 
                  alt={activeService.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none dark:from-[#0B0D11] dark:via-[#0B0D11]/30" />
                
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-stone-200 backdrop-blur-md flex items-center justify-center text-amber-600 shadow dark:bg-[#0F1115]/90 dark:border-[#2B303B] dark:text-amber-400">
                    <ActiveIcon size={20} />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-stone-200 shadow-lg flex items-center justify-between dark:bg-[#14171E]/95 dark:border-[#272B33]">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block dark:text-[#6B7280]">Guaranteed Quality</span>
                    <span className="text-xs font-semibold text-stone-900 dark:text-[#F3F4F6]">PetJeeva Certified Specialist</span>
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