import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  Layers
} from 'lucide-react';

const COMPARISON_DATA = [
  {
    id: 'at-home-training',
    feature: 'At home training',
    shortDesc: 'Sessions conducted directly in your dog’s familiar daily surroundings.',
    petjeeva: 'check',
    localTrainers: 'sometimes',
    petjeevaNote: '100% door-step personalized 1-on-1 coaching.',
    localTrainersNote: 'Often require you to travel to their facility or park.'
  },
  {
    id: 'scientific-reward-training',
    feature: 'Scientific reward training',
    shortDesc: 'Positive reinforcement, fear-free operant conditioning.',
    petjeeva: 'check',
    localTrainers: 'rare',
    petjeevaNote: 'Strictly humane, zero-intimidation, certified reward protocols.',
    localTrainersNote: 'Frequently rely on outdated alpha/correction collars.'
  },
  {
    id: 'structured-training-program',
    feature: 'Structured training program',
    shortDesc: 'Documented milestones, weekly goals, and progressive roadmaps.',
    petjeeva: 'check',
    localTrainers: 'cross',
    petjeevaNote: 'Transparent step-by-step syllabus tracked every session.',
    localTrainersNote: 'Ad-hoc and unstructured drills with variable focus.'
  },
  {
    id: 'international-training-curriculum',
    feature: 'International curriculum',
    shortDesc: 'Benchmarked against global CCPDT and Fear Free certifications.',
    petjeeva: 'check',
    localTrainers: 'cross',
    petjeevaNote: 'Modern global standards refined for Indian household contexts.',
    localTrainersNote: 'Informal generational techniques without formal standards.'
  },
  {
    id: 'behaviour-assessment',
    feature: 'Behaviour assessment',
    shortDesc: 'Deep-dive behavioral profiling before any training commences.',
    petjeeva: 'check',
    localTrainers: 'limited',
    petjeevaNote: 'Comprehensive 45-point temperament & environmental evaluation.',
    localTrainersNote: 'Surface-level verbal check without diagnostic logging.'
  },
  {
    id: 'results-guarantee',
    feature: 'Results guarantee',
    shortDesc: 'Guaranteed milestone attainment with remediation support.',
    petjeeva: 'check',
    localTrainers: 'cross',
    petjeevaNote: 'Committed habit transformation with milestone warranty.',
    localTrainersNote: 'No refund or retraining obligation if habits persist.'
  },
  {
    id: 'trainer-feedback-system',
    feature: 'Trainer feedback system',
    shortDesc: 'Continuous digital reports after each session for pet parents.',
    petjeeva: 'check',
    localTrainers: 'cross',
    petjeevaNote: 'Digital homework logs and video review between visits.',
    localTrainersNote: 'Verbal recap only, prone to forgotten practice cues.'
  },
  {
    id: 'personalized-guidance',
    feature: 'Personalized guidance',
    shortDesc: 'Custom training routine mapped to your dog’s specific breed & age.',
    petjeeva: 'check',
    localTrainers: 'limited',
    petjeevaNote: 'Bespoke playbook suited to puppyhood, adult, or senior dogs.',
    localTrainersNote: 'One-size-fits-all generic command drilling.'
  },
  {
    id: 'suitable-for-behaviour-issues',
    feature: 'Fixes severe behavior issues',
    shortDesc: 'Specialized intervention for leash reactivity, separation anxiety & aggression.',
    petjeeva: 'check',
    localTrainers: 'sometimes',
    petjeevaNote: 'Certified canine behaviorist intervention plans.',
    localTrainersNote: 'Mainly handles basic obedience; struggles with deep anxiety.'
  },
];

const PetjeevaLogo = ({ compact = false }) => (
  <div className="inline-flex items-center gap-1 sm:gap-1.5 select-none tracking-tight">
    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-xs flex-shrink-0">
      <span className="text-stone-950 font-black text-xs sm:text-sm leading-none">PJ</span>
    </div>
    <span className={`font-extrabold tracking-tight font-sans leading-none text-stone-100 ${compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
      Pet<span className="text-amber-400">Jeeva</span>
    </span>
  </div>
);

const CheckCircleBadge = ({ isCompact = false }) => (
  <div 
    className={`inline-flex items-center justify-center rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 shadow-sm transition-transform duration-200 hover:scale-110 ${
      isCompact ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
    }`}
    aria-label="Included"
  >
    <Check className={isCompact ? "w-3.5 h-3.5 stroke-[3]" : "w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.8]"} />
  </div>
);

const CrossCircleBadge = ({ isCompact = false }) => (
  <div 
    className={`inline-flex items-center justify-center rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400/90 shadow-sm transition-transform duration-200 hover:scale-110 ${
      isCompact ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
    }`}
    aria-label="Not Included"
  >
    <X className={isCompact ? "w-3 h-3 stroke-[2.5]" : "w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]"} />
  </div>
);

const TextPillBadge = ({ text, isCompact = false }) => {
  const getStyle = () => {
    switch (text ? text.toLowerCase() : '') {
      case 'sometimes':
        return 'text-amber-300/90 border-amber-500/30 bg-amber-950/40';
      case 'limited':
        return 'text-stone-300 border-stone-700 bg-stone-900/90';
      case 'rare':
        return 'text-rose-300/80 border-rose-500/30 bg-rose-950/30';
      default:
        return 'text-stone-400 border-stone-800 bg-stone-900';
    }
  };

  return (
    <span 
      className={`inline-flex items-center justify-center font-medium capitalize rounded-full border shadow-2xs whitespace-nowrap ${getStyle()} ${
        isCompact 
          ? 'px-2 py-0.5 text-[10px] min-w-[54px] leading-tight' 
          : 'px-2.5 sm:px-3 py-0.5 text-xs min-w-[68px]'
      }`}
    >
      {text}
    </span>
  );
};

const StatusRenderer = ({ value, isCompact = false }) => {
  switch (value) {
    case 'check':
      return <CheckCircleBadge isCompact={isCompact} />;
    case 'cross':
      return <CrossCircleBadge isCompact={isCompact} />;
    case 'sometimes':
      return <TextPillBadge text="Sometimes" isCompact={isCompact} />;
    case 'rare':
      return <TextPillBadge text="Rare" isCompact={isCompact} />;
    case 'limited':
      return <TextPillBadge text="Limited" isCompact={isCompact} />;
    default:
      return null;
  }
};

export function PetjeevaFeatureComparison({ isMobileSimulated = false }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="w-full mx-auto select-none">
      {/* Outer Table Frame */}
      <div className="relative rounded-2xl bg-stone-900/90 border border-stone-800 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-md">
        
        {/* Decorative Top Accent Glow Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-stone-800 via-amber-500 to-stone-800 opacity-80" />

        {/* Single Frame Table with strict percentages and zero horizontal scroll */}
        <div className="w-full overflow-hidden">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[46%] sm:w-[44%]" />
              <col className="w-[27%] sm:w-[28%]" />
              <col className="w-[27%] sm:w-[28%]" />
            </colgroup>

            {/* Header */}
            <thead>
              <tr className="border-b border-stone-800 bg-stone-900/95">
                <th className="py-3 sm:py-4 px-2.5 sm:px-5 text-left align-middle">
                  <div className="flex flex-col">
                    <span className="text-[12px] sm:text-base font-semibold text-stone-200 tracking-tight leading-tight">
                      Capabilities
                    </span>
                    <span className="text-[9px] sm:text-xs text-stone-500 mt-0.5 hidden xs:block">
                      Core criteria
                    </span>
                  </div>
                </th>

                <th className="py-2.5 sm:py-4 px-1 sm:px-3 text-center align-middle bg-amber-500/[0.05] border-x border-amber-500/15 relative">
                  <div className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full mb-1 border border-amber-500/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Best</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <PetjeevaLogo compact={true} />
                    <span className="text-[9px] sm:text-[11px] font-semibold text-amber-400/90 tracking-wide mt-0.5">
                      Standard
                    </span>
                  </div>
                </th>

                <th className="py-2.5 sm:py-4 px-1 sm:px-3 text-center align-middle bg-stone-900/60">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[11px] sm:text-sm font-semibold text-stone-300 leading-tight">
                      Traditional
                    </span>
                    <span className="text-[9px] sm:text-xs text-stone-400 leading-tight">
                      Trainers
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-stone-800/60">
              {COMPARISON_DATA.map((row, idx) => {
                const isEven = idx % 2 === 1;
                const isSelected = selectedFeature?.id === row.id;

                return (
                  <tr 
                    key={row.id}
                    onClick={() => setSelectedFeature(isSelected ? null : row)}
                    className={`transition-colors duration-150 cursor-pointer group ${
                      isSelected 
                        ? 'bg-amber-500/[0.08]' 
                        : isEven ? 'bg-stone-950/35 hover:bg-stone-800/40' : 'bg-transparent hover:bg-stone-800/40'
                    }`}
                  >
                    <td className="py-3 px-2 sm:px-4 align-middle">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col pr-1">
                          <span className="text-[12px] sm:text-sm font-medium text-stone-200 group-hover:text-amber-300 leading-tight transition-colors">
                            {row.feature}
                          </span>
                          <span className="text-[10px] text-stone-400 font-normal leading-tight mt-0.5 line-clamp-1 sm:line-clamp-none hidden sm:block">
                            {row.shortDesc}
                          </span>
                        </div>
                        <HelpCircle className="w-3 h-3 text-stone-400 group-hover:text-amber-400 flex-shrink-0 transition-colors hidden xs:block" />
                      </div>
                    </td>

                    <td className="py-2.5 px-1 sm:px-3 text-center align-middle bg-amber-500/[0.04] border-x border-amber-500/15">
                      <div className="flex items-center justify-center">
                        <StatusRenderer value={row.petjeeva} isCompact={true} />
                      </div>
                    </td>

                    <td className="py-2.5 px-1 sm:px-3 text-center align-middle">
                      <div className="flex items-center justify-center">
                        <StatusRenderer value={row.localTrainers} isCompact={true} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [deviceMode, setDeviceMode] = useState('desktop');

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-start p-3 sm:p-6 lg:p-10 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
    
      {/* Hero Section */}
      <section className="text-center max-w-xl mx-auto mb-6 sm:mb-8 px-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[11px] sm:text-xs font-semibold mb-3 tracking-wide">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>No-Scroll Compact Comparison</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-extrabold text-stone-100 tracking-tight leading-snug">
          The Smarter Way to Train Your Dog
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
          Structured in-home dog training with verified milestones vs traditional random methods.
        </p>
      </section>

      {/* Main Comparison Area with Simulated Framing */}
      <main className="w-full flex justify-center items-start">
        {deviceMode === 'mobile' ? (
          <div className="w-full max-w-[375px] transition-all duration-300">
            <div className="rounded-3xl border border-stone-800 bg-stone-900/40 p-2 shadow-2xl">
              
              <PetjeevaFeatureComparison isMobileSimulated={true} />
            </div>
            
          </div>
        ) : (
          <div className="w-full max-w-4xl transition-all duration-300">
            <PetjeevaFeatureComparison isMobileSimulated={false} />
          </div>
        )}
      </main>

      {/* Feature Value Props Highlights */}
      <section className="w-full max-w-4xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 border-t border-stone-800/80">
        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/90 hover:border-amber-500/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-semibold text-xs sm:text-sm text-stone-200">100% In-Home Coaching</h3>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">
            Directly corrects real triggers in your living room, balcony, elevator, and walking route.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/90 hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-semibold text-xs sm:text-sm text-stone-200">Milestone Guarantee</h3>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">
            Concrete behavioral metrics and digital progress logs after every visit.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/90 hover:border-amber-500/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-semibold text-xs sm:text-sm text-stone-200">Force-Free & Humane</h3>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">
            Zero punishment, choke chains, or fear tactics. Scientifically proven positive encouragement.
          </p>
        </div>
      </section>
    </div>
  );
}