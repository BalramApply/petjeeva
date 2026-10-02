import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Sparkles, 
  Award, 
  FileText, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  HeartHandshake
} from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";

const PACKAGES = [
  {
    id: "starter",
    tier: "STARTER",
    name: "Puppy Foundations",
    sessions: "12 Sessions",
    duration: "1 Month",
    tagline: "A gentle first step for new pups",
    originalPrice: "8,999",
    discountedPrice: "7,499",
    savings: "1,500",
    goal: "Set up a daily routine, win your pup's attention and build first-level control.",
    featured: false,
    hasCertificate: false,
    curriculum: [
      {
        num: 1,
        title: "Potty Routine",
        desc: "Timed trips after sleep, meals and play. Rewarding the right spot. Calm handling of accidents."
      },
      {
        num: 2,
        title: "Name & Yes-Marker",
        desc: "Responds to own name. 'YES' marker signal. Eye contact & focus."
      },
      {
        num: 3,
        title: "Play-Biting",
        desc: "Swap to a chew toy. Softer mouth. Calm-down breaks."
      },
      {
        num: 4,
        title: "First Commands",
        desc: "Sit • Come"
      }
    ]
  },
  {
    id: "essential",
    tier: "ESSENTIAL",
    name: "Good Manners Program",
    sessions: "24 Sessions",
    duration: "2 Months",
    tagline: "Turn chaos at home into calm habits",
    originalPrice: "15,999",
    discountedPrice: "14,499",
    savings: "1,500",
    goal: "Make life at home easier with better manners, fewer accidents and dependable basics.",
    featured: false,
    hasCertificate: false,
    curriculum: [
      {
        num: 1,
        title: "Potty Consistency",
        desc: "Steady schedule. Fewer accidents. Longer holding time."
      },
      {
        num: 2,
        title: "Attention & Marker",
        desc: "Quicker responses. Sharper engagement."
      },
      {
        num: 3,
        title: "Mouth Control",
        desc: "Gentler mouth. Less unwanted mouthing."
      },
      {
        num: 4,
        title: "Core Commands",
        desc: "Sit • Come • Down • Stay • Go"
      },
      {
        num: 5,
        title: "Do-Not Cues",
        desc: "No • Don't Jump • Don't Eat"
      },
      {
        num: 6,
        title: "Settle on a Spot",
        desc: "Introduce the mat / bed. Learning to relax."
      },
      {
        num: 7,
        title: "Leash Basics",
        desc: "Comfortable with the leash. Short walks beside the handler."
      }
    ]
  },
  {
    id: "pro-companion",
    tier: "PRO",
    name: "Everyday Companion",
    sessions: "36 Sessions",
    duration: "3 Months",
    tagline: "Real-life obedience, on walks and at home",
    originalPrice: "24,499",
    discountedPrice: "21,999",
    savings: "2,500",
    goal: "Get reliable control in everyday situations: on the street, at the door and around guests.",
    featured: true,
    badgeText: "Most Popular",
    hasCertificate: false,
    curriculum: [
      {
        num: 1,
        title: "Structured Walks",
        desc: "Stop-and-go. Direction changes. Loose-leash walking. Practice on real walks."
      },
      {
        num: 2,
        title: "Command Toolkit",
        desc: "Sit • Come • Down • Stay • Go • Hi5 • Handshake"
      },
      {
        num: 3,
        title: "Behavior Control",
        desc: "No • Don't Jump • Don't Eat • Don't Bark • Don't Pull"
      },
      {
        num: 4,
        title: "Home Etiquette",
        desc: "Guest entry • Door manners • House boundaries"
      },
      {
        num: 5,
        title: "Calm & Place",
        desc: "Longer stay on the mat. Calm before greeting."
      },
      {
        num: 6,
        title: "Reliable Potty",
        desc: "Dependable routine. Longer holding. Prefers the outdoors."
      },
      {
        num: 7,
        title: "Response & Cues",
        desc: "Instant name response. Clearer cues."
      },
      {
        num: 8,
        title: "Mouth Control",
        desc: "Steady control. No relapse when excited."
      },
      {
        num: 9,
        title: "Fun Tricks",
        desc: "Crawl • Rollover"
      }
    ]
  },
  {
    id: "pro-confident",
    tier: "PRO",
    name: "Confident Canine",
    sessions: "48 Sessions",
    duration: "4 Months",
    tagline: "Sharper focus, calmer everyday behavior",
    originalPrice: "28,800",
    discountedPrice: "26,500",
    savings: "2,300",
    goal: "Boost responsiveness and engagement while keeping behavior controlled in daily life.",
    featured: false,
    hasCertificate: true,
    curriculum: [
      {
        num: 1,
        title: "Commands",
        desc: "Sit • Come • Down • Stay • Go • Hi5 • Handshake • Go to Bed • Fetch • Drop"
      },
      {
        num: 2,
        title: "Behavior Control",
        desc: "No • Don't Jump • Don't Eat • Don't Bark • Don't Pull"
      },
      {
        num: 3,
        title: "Social Skills",
        desc: "Polite greetings. Good behavior in different places."
      },
      {
        num: 4,
        title: "Outdoor Walks",
        desc: "Longer structured walks. Focus outdoors."
      },
      {
        num: 5,
        title: "Independent Calm",
        desc: "Longer hold on the mat. Relaxing without prompts."
      },
      {
        num: 6,
        title: "Focus & Marker",
        desc: "Faster, cleaner response. Better concentration."
      },
      {
        num: 7,
        title: "Potty Upkeep",
        desc: "Maintain routine. Stable on a normal schedule."
      },
      {
        num: 8,
        title: "Mouth Manners",
        desc: "Stable non-biting behavior."
      },
      {
        num: 9,
        title: "Show Tricks",
        desc: "Crawl • Rollover • Spin"
      }
    ]
  },
  {
    id: "elite",
    tier: "ELITE",
    name: "Elite Obedience",
    sessions: "72 Sessions",
    duration: "6 Months",
    tagline: "Reliable obedience with controlled freedom",
    originalPrice: "44,499",
    discountedPrice: "40,499",
    savings: "4,000",
    goal: "Build rock-solid reliability and obedience, then earn freedom with control.",
    featured: false,
    hasCertificate: true,
    curriculum: [
      {
        num: 1,
        title: "Off-Leash Start",
        desc: "Recall in a safe area. Short-distance response. Return to handler."
      },
      {
        num: 2,
        title: "Full Command Set",
        desc: "Sit • Come • Down • Stay • Go • Hi5 • Handshake • Go to Bed • Fetch • Drop • Speak • Quiet"
      },
      {
        num: 3,
        title: "Behavior Control",
        desc: "No • Don't Jump • Don't Eat • Don't Bark • Don't Pull"
      },
      {
        num: 4,
        title: "Leash Discipline",
        desc: "Stronger leash manners. Sharper turns. Better stop-start."
      },
      {
        num: 5,
        title: "Patience & Place",
        desc: "Longer place duration. Waiting for release. Impulse control."
      },
      {
        num: 6,
        title: "Home & Guests",
        desc: "Guest control. Boundary control."
      },
      {
        num: 7,
        title: "Cue Accuracy",
        desc: "Strong name response. Precise on known cues."
      },
      {
        num: 8,
        title: "Potty & Mouth",
        desc: "Stable toilet routine even when routines change. Steady mouth control."
      },
      {
        num: 9,
        title: "Skills",
        desc: "Crawl • Rollover • Spin • Controlled Fetch & Drop • Agility introduction"
      }
    ]
  },
  {
    id: "champion",
    tier: "CHAMPION",
    name: "Champion Academy",
    sessions: "144 Sessions",
    duration: "12 Months",
    tagline: "Our complete year-long mastery program",
    originalPrice: "97,600",
    discountedPrice: "87,000",
    savings: "10,600",
    goal: "Master reliability, obedience and controlled freedom with a full year of guided training.",
    featured: true,
    badgeText: "Year-Long Mastery",
    hasCertificate: true,
    curriculum: [
      {
        num: 1,
        title: "Full Command Set",
        desc: "Sit • Come • Down • Stay • Counting • Go • Hi5 • Handshake • Go to Bed • Fetch • Drop • Speak • Quiet"
      },
      {
        num: 2,
        title: "Behavior Control",
        desc: "No • Don't Jump • Don't Eat • Don't Bark • Don't Pull"
      },
      {
        num: 3,
        title: "Off-Leash Control",
        desc: "Recall in safe areas. Distance control. Return to handler."
      },
      {
        num: 4,
        title: "Public Walks",
        desc: "Strong leash reliability. Good behavior in public."
      },
      {
        num: 5,
        title: "Deep Calm",
        desc: "Long-duration calmness. Self-control under stimulation."
      },
      {
        num: 6,
        title: "Social Life",
        desc: "House boundaries • Guest manners • Door manners • Active environments"
      },
      {
        num: 7,
        title: "Response & Focus",
        desc: "Very fast name response. Clear cues. High focus."
      },
      {
        num: 8,
        title: "Control Cues",
        desc: "Bark on command • Stop on command"
      },
      {
        num: 9,
        title: "Advanced Skills",
        desc: "Crawl • Rollover • Spin • Middle • Agility basics • Controlled Fetch & Drop"
      },
      {
        num: 10,
        title: "Potty & Mouth",
        desc: "Fully established routine. Ongoing maintenance. Stable non-biting."
      }
    ]
  }
];

export default function TrainingPackages() {
  const [selectedPlan, setSelectedPlan] = useState("all");

  const filteredPackages =
    selectedPlan === "all"
      ? PACKAGES
      : PACKAGES.filter((p) => p.tier.toLowerCase() === selectedPlan.toLowerCase());

  return (
    <div className="bg-stone-50 dark:bg-[#0B0D11] text-stone-900 dark:text-[#F3F4F6] min-h-screen py-12 md:py-20 transition-colors duration-300">
      <Container>
        {/* Header Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs md:text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-sm">
            <Sparkles size={15} />
            <span>Pet Care • Training • Wellness</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-stone-900 dark:text-[#F9FAFB] leading-tight">
            Step-by-Step, Reward-Based <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Training Packages
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-stone-600 dark:text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            At PetJeeva Pet Care Services, we believe every pet deserves a happy, healthy, and well-behaved life. Our programs build discipline, confidence, and a lasting bond.
          </p>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 pt-4">
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-stone-800 dark:text-[#D1D5DB]">
                Reward-based, pet-friendly methods
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-stone-800 dark:text-[#D1D5DB]">
                Personalised plans for every pet
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-stone-800 dark:text-[#D1D5DB]">
                Regular progress check-ins with you
              </span>
            </div>
          </div>
        </div>

        {/* Global Value-Add Announcement Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30 p-5 md:p-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <FileText size={26} />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-md bg-amber-500 text-stone-950">
                    FREE BONUS
                  </span>
                  <h2 className="text-base md:text-lg font-bold text-stone-900 dark:text-[#F9FAFB]">
                    Diet Chart + Socialization Chart
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-stone-600 dark:text-[#9CA3AF] mt-0.5">
                  Included with every training package at no extra charge.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/5 px-4 py-2 rounded-xl border border-amber-500/20">
              <TrendingUp size={16} />
              <span>Includes progress review with the trainer after 25% of the program</span>
            </div>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#14171E] border ${
                pkg.featured
                  ? "border-amber-500/60 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/30"
                  : "border-stone-200/90 dark:border-[#232730] shadow-md shadow-stone-900/5"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badgeText}
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="p-6 md:p-7 border-b border-stone-100 dark:border-[#1E222A]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-[#1C2029] text-stone-600 dark:text-amber-400 uppercase">
                    {pkg.tier}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-[#9CA3AF]">
                    <Calendar size={13} className="text-amber-500" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-[#9CA3AF] mt-1 italic">
                  {pkg.tagline}
                </p>

                {/* Pricing Block */}
                <div className="mt-5 pt-4 border-t border-dashed border-stone-200 dark:border-[#232730]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-stone-950 dark:text-white">
                      ₹{pkg.discountedPrice}
                    </span>
                    <span className="text-sm line-through text-stone-400 dark:text-[#6B7280]">
                      ₹{pkg.originalPrice}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                      You Save ₹{pkg.savings}
                    </span>
                    <span className="text-xs font-medium text-stone-600 dark:text-[#9CA3AF] bg-stone-100 dark:bg-[#1A1D24] px-2 py-0.5 rounded-md">
                      {pkg.sessions}
                    </span>
                  </div>
                </div>

                {/* Program Goal */}
                <div className="mt-4 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/15">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-0.5">
                    Program Goal
                  </p>
                  <p className="text-xs text-stone-700 dark:text-[#D1D5DB] leading-relaxed">
                    {pkg.goal}
                  </p>
                </div>
              </div>

              {/* Curriculum List */}
              <div className="p-6 md:p-7 flex-1 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-[#6B7280]">
                  Syllabus Breakdown ({pkg.curriculum.length} Modules)
                </p>
                <div className="space-y-3.5">
                  {pkg.curriculum.map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-[11px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                        {item.num}
                      </span>
                      <div className="text-left">
                        <h4 className="text-xs md:text-sm font-semibold text-stone-900 dark:text-[#E5E7EB]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] md:text-xs text-stone-500 dark:text-[#9CA3AF] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Perks & Call to Action */}
              <div className="p-6 md:p-7 pt-0 mt-auto border-t border-stone-100 dark:border-[#1E222A]">
                <div className="py-4 space-y-2">
                  {pkg.hasCertificate && (
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                      <Award size={15} />
                      <span>Completion Certificate Provided</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-[#9CA3AF]">
                    <ShieldCheck size={15} className="text-emerald-500" />
                    <span>Free Diet & Socialization Charts</span>
                  </div>
                </div>

                <Button
  variant="primary"
  href="/book"
  className="w-full !flex !flex-row !items-center !justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold py-2.5 text-xs md:text-sm shadow-md shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
>
  <span className="inline-flex flex-row items-center justify-center gap-1.5 whitespace-nowrap">
    <span>Book Free Demo</span>
    <ArrowRight size={14} className="shrink-0 inline-block" />
  </span>
</Button>
              </div>
            </div>
          ))}
        </div>

        {/* 25% Parent & Trainer Review Deep Dive Section */}
        <div className="mt-16 md:mt-24 rounded-3xl border border-stone-200/90 dark:border-[#232730] bg-white dark:bg-[#14171E] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-4">
              <Clock size={14} />
              <span>Milestone Guarantee</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-stone-900 dark:text-[#F9FAFB] tracking-tight">
              Parent & Trainer Check-In
            </h2>
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-1 uppercase tracking-wider">
              After 25% of training is complete
            </p>
            <p className="mt-4 text-stone-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Once a quarter of your program is done, your trainer sits down with you for an honest feedback and progress discussion. We share what your pet has learned, what to practise at home, and adjust the plan together, so you always know exactly where you stand.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-stone-700 dark:text-[#D1D5DB]">
                <HeartHandshake className="text-amber-500" size={18} />
                <span>1-on-1 Feedback Session</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-stone-700 dark:text-[#D1D5DB]">
                <CheckCircle2 className="text-amber-500" size={18} />
                <span>Custom Home Practice Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}