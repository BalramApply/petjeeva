import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Search, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Share2, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Tag, 
  Camera, 
  ArrowUpDown,
  Maximize2,
  ShieldCheck,
  Check
} from 'lucide-react';
import beforeImg from "../../assets/Before_Grooming.png";
import afterImg from "../../assets/after_Grooming.png";
import asset1 from '../../assets/Asset1.jpg'
import asset2 from '../../assets/Asset2.jpg'
import asset3 from '../../assets/Asset3.jpg'
import asset4 from '../../assets/Asset4.jpg'
import asset5 from '../../assets/Asset5.jpg'
import asset6 from '../../assets/Asset6.jpg'
import asset7 from '../../assets/Asset7.jpg'
import asset8 from '../../assets/Asset8.jpg'
import asset9 from '../../assets/Asset9.jpg'
import asset10 from '../../assets/asset10.jpg'
import asset11 from '../../assets/asset11.jpg'
import asset12 from '../../assets/asset12.jpg'
import asset13 from '../../assets/asset13.jpg'
import asset14 from '../../assets/asset14.jpg'
import asset15 from '../../assets/asset15.jpg'
import asset16 from '../../assets/asset16.jpg'
import asset17 from '../../assets/asset17.jpg'
import asset18 from '../../assets/asset18.jpg'
import asset19 from '../../assets/asset19.jpg'
import asset20 from '../../assets/asset20.png'
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Parkside Paw Training",
    petName: "Coco",
    category: "Dogs",
    service: "Training & Pet Care",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Coco nailed the paw-shake training in the park today! Rewarded with treats for great focus and friendly behavior during the morning session.",
    image: asset1,
    aspect: "wide",
    likes: 142,
    date: "2024-05-18",
    badge: "Training Time",
    tags: ["Shih Tzu", "Obedience Training", "PetJeeva"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 2,
    title: "Focused Leash Training",
    petName: "Bruno",
    category: "Dogs",
    service: "Walking & Obedience",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Bruno had a great focused session in the park today! Working on leash manners and calm sitting - such a smart and energetic boy.",
    image: asset2,
    aspect: "wide",
    likes: 168,
    date: "2024-05-18",
    badge: "Training Walk",
    tags: ["German Shepherd", "Leash Training", "PetJeeva"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 3,
    title: "Service Dog Training",
    petName: "Simba",
    category: "Dogs",
    service: "Service Training & Care",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Simba is doing excellent in his service training! Focused on positive reinforcement and treat-based obedience during today's park session.",
    image: asset3,
    aspect: "wide",
    likes: 215,
    date: "2024-05-18",
    badge: "Service Training",
    tags: ["Labrador", "Service Dog", "In Training"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 4,
    title: "Therapy Dog Bonding",
    petName: "Goldie",
    category: "Happy Moments",
    service: "Therapy & Companionship Care",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie brought so much joy today! Gentle bonding session in the park, practicing calm companionship and therapy manners.",
    image: asset4,
    aspect: "wide",
    likes: 231,
    date: "2024-05-18",
    badge: "Therapy Care",
    tags: ["Golden Retriever", "Therapy Dog", "Bonding Session"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 5,
    title: "Focused Obedience Training",
    petName: "Oreo",
    category: "Dogs",
    service: "Obedience & Behavior Training",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Oreo was super attentive today! Practiced hand signals and focus commands in the park - such an intelligent and quick learner.",
    image: asset5,
    aspect: "wide",
    likes: 189,
    date: "2024-05-18",
    badge: "Obedience Training",
    tags: ["Border Collie", "Smart Breed", "Command Training"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 6,
    title: "Gentle Bonding Time",
    petName: "Buddy",
    category: "Daycare & Play",
    service: "Daycare & Companionship",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Buddy enjoyed a calm and affectionate session today! Lots of cuddles and positive reassurance during his park visit.",
    image: asset6,
    aspect: "wide",
    likes: 203,
    date: "2024-05-18",
    badge: "Bonding Time",
    tags: ["Labrador", "Companionship", "Gentle Care"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 7,
    title: "Confidence & Leash Control",
    petName: "Rex",
    category: "Dogs",
    service: "Behavioral Training & Walks",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Rex showed amazing confidence today! Practiced alert focus and calm leash handling during his park training walk.",
    image: asset7,
    aspect: "wide",
    likes: 192,
    date: "2024-05-18",
    badge: "Behavior Training",
    tags: ["German Shepherd", "Leash Manners", "Alert Training"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 8,
    title: "Agility Jump Training",
    petName: "Oreo",
    category: "Daycare & Play",
    service: "Agility & Active Play",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Oreo crushed the agility course today! High-energy jump training with perfect focus and enthusiasm on the hurdles.",
    image: asset8,
    aspect: "wide",
    likes: 257,
    date: "2024-05-18",
    badge: "Agility Fun",
    tags: ["Border Collie", "Agility Training", "Obstacle Course"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 9,
    title: "SAR Training Session",
    petName: "Max",
    category: "Dogs",
    service: "SAR & Working Dog Training",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Max was on high alert during today's search and rescue prep! Working on scent tracking and harness training in the forest trail.",
    image: asset9,
    aspect: "wide",
    likes: 278,
    date: "2024-05-18",
    badge: "Working Dog",
    tags: ["German Shepherd", "SAR", "Working Dog"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 10,
    title: "Spa Day Bath Time",
    petName: "Goldie",
    category: "Grooming & Spa",
    service: "Grooming & Spa",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie enjoyed a relaxing spa bath today! Full wash and rinse with gentle shampoo for a shiny, fresh coat.",
    image: asset10,
    aspect: "wide",
    likes: 242,
    date: "2024-05-18",
    badge: "Grooming Care",
    tags: ["Golden Retriever", "Bath Time", "Spa Day"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 11,
    title: "Sniff and Explore Walk",
    petName: "Bella",
    category: "Daycare & Play",
    service: "Enrichment Walk & Care",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Bella loved her enrichment walk today! Lots of sniffing and exploring in the park while practicing loose-leash walking.",
    image: asset11,
    aspect: "wide",
    likes: 176,
    date: "2024-05-18",
    badge: "Enrichment Walk",
    tags: ["Labrador", "Sniff Walk", "Enrichment"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 12,
    title: "Retrieve & Carry Training",
    petName: "Leo",
    category: "Dogs",
    service: "Obedience & Retrieve Training",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Leo aced his retrieve training today! Practiced soft-mouth carrying and hold commands in the open field.",
    image: asset12,
    aspect: "wide",
    likes: 221,
    date: "2024-05-18",
    badge: "Retrieve Training",
    tags: ["Labrador", "Retrieve", "Field Training"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 13,
    title: "Focus & Engagement Session",
    petName: "Oreo",
    category: "Dogs",
    service: "Obedience & Focus Training",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Oreo's focus was incredible today! Worked on hand signals and engagement exercises in the park with lots of positive reinforcement.",
    image: asset13,
    aspect: "wide",
    likes: 205,
    date: "2024-05-18",
    badge: "Focus Training",
    tags: ["Border Collie", "Focus Work", "Hand Signals"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 14,
    title: "Paw Shake & Tricks",
    petName: "Coco",
    category: "Happy Moments",
    service: "Trick Training & Bonding",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Coco nailed the paw shake today! Fun trick training session with treats and lots of praise in the park.",
    image: asset14,
    aspect: "wide",
    likes: 264,
    date: "2024-05-18",
    badge: "Trick Training",
    tags: ["Shih Tzu", "Tricks", "Paw Shake"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 15,
    title: "Happy Park Walk",
    petName: "Goldie",
    category: "Happy Moments",
    service: "Daily Walks & Exercise",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie had a wonderful walk today! Enjoyed a relaxed stroll with perfect loose-leash manners and lots of tail wags.",
    image: asset15,
    aspect: "wide",
    likes: 198,
    date: "2024-05-18",
    badge: "Daily Walk",
    tags: ["Golden Retriever", "Daily Walk", "Loose Leash"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 16,
    title: "Active Run Session",
    petName: "Goldie",
    category: "Daycare & Play",
    service: "Running & Fitness Exercise",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie crushed his fitness run today! High-energy jog with great pace matching and leash control throughout the park.",
    image: asset16,
    aspect: "wide",
    likes: 235,
    date: "2024-05-18",
    badge: "Fitness Run",
    tags: ["Golden Retriever", "Running", "Exercise"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 17,
    title: "Leisure Park Stroll",
    petName: "Goldie",
    category: "Happy Moments",
    service: "Daily Walks & Exercise",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie enjoyed a peaceful stroll today! Calm and happy walk with excellent leash manners on the paved park path.",
    image: asset17,
    aspect: "wide",
    likes: 188,
    date: "2024-05-18",
    badge: "Daily Walk",
    tags: ["Golden Retriever", "Park Walk", "Leash Training"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 18,
    title: "Dental Brushing Session",
    petName: "Goldie",
    category: "Grooming & Spa",
    service: "Dental Care & Grooming",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie had a gentle dental cleaning today! Thorough tooth brushing with pet-safe toothpaste for fresh breath and healthy gums.",
    image: asset18,
    aspect: "wide",
    likes: 212,
    date: "2024-05-18",
    badge: "Dental Care",
    tags: ["Golden Retriever", "Dental Care", "Hygiene"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 19,
    title: "Vaccination Visit",
    petName: "Goldie",
    category: "Health & Wellness",
    service: "Vaccination & Health Check",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Goldie was super brave during vaccination today! Smooth and calm preventive care session for rabies protection and wellness.",
    image: asset19,
    aspect: "wide",
    likes: 267,
    date: "2024-05-18",
    badge: "Vaccination Care",
    tags: ["Golden Retriever", "Vaccination", "Rabies Prevention"],
    brand: "PetJeeva Complete Pet Care"
  },
  {
    id: 20,
    title: "Puppy Vaccination Visit",
    petName: "Goldie",
    category: "Health & Wellness",
    service: "Puppy Vaccination & Health Check",
    caregiver: "PetJeeva Care Specialist",
    careNote: "Little Goldie was so brave for her first distemper vaccine! Gentle nasal vaccination with lots of cuddles and care afterwards.",
    image: asset20,
    aspect: "wide",
    likes: 289,
    date: "2024-05-18",
    badge: "Puppy Care",
    tags: ["Golden Retriever", "Puppy Vaccine", "Distemper Prevention"],
    brand: "PetJeeva Complete Pet Care"
  }
];

const CATEGORIES = [
  "All",
  "Dogs",
  // "Cats",
  "Grooming & Spa",
  "Daycare & Play",
  "Health & Wellness",
  "Happy Moments"
];
function TransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section id="gallery" className="relative bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-xl shadow-stone-200/50 mb-16 overflow-hidden transition-colors duration-200 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-2xl dark:shadow-black/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl"
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left copy */}
        <div className="lg:w-5/12 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-semibold tracking-wide dark:border-amber-500/20 dark:text-amber-300">
            <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
            <span>Real Care Transformation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug dark:text-[#F9FAFB]">
            From Muddy Trail to <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400">Velvety Fluff</span>
          </h3>
          <p className="text-stone-600 leading-relaxed text-sm md:text-base dark:text-[#9CA3AF]">
            Slide horizontally to reveal the before and after of Archie&apos;s full de-shedding bath, 
            ear sanitization, and warm lavender paw moisture treatment.
          </p>
          
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-medium">
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 dark:bg-[#0F1115] dark:border-[#232730]">
              <span className="text-stone-500 block text-[11px] uppercase tracking-wider font-semibold dark:text-[#6B7280]">Pet Guest</span>
              <strong className="text-stone-900 text-sm mt-0.5 block dark:text-[#F3F4F6]">Archie (Cockapoo)</strong>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 dark:bg-[#0F1115] dark:border-[#232730]">
              <span className="text-stone-500 block text-[11px] uppercase tracking-wider font-semibold dark:text-[#6B7280]">Care Package</span>
              <strong className="text-stone-900 text-sm mt-0.5 block dark:text-[#F3F4F6]">Signature Spa &amp; Trim</strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 pt-1 dark:text-[#9CA3AF]">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0 dark:text-emerald-400" />
            <span>Performed using 100% organic, tear-free botanicals.</span>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
<div className="lg:w-7/12 w-full">
  <div 
    className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-stone-200 shadow-inner bg-stone-100 dark:border-[#272B33] dark:bg-[#0B0D11]"
    onMouseMove={(e) => {
      if (e.buttons === 1 || isDragging) handleMouseMove(e);
    }}
    onMouseDown={() => setIsDragging(true)}
    onMouseUp={() => setIsDragging(false)}
    onTouchMove={handleTouchMove}
  >
    {/* After Image (Base) */}
    <img 
      src={afterImg} 
      alt="Archie After Care Grooming" 
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
    <div className="absolute top-4 right-4 bg-white/90 border border-stone-200 text-stone-900 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-lg dark:bg-[#0F1115]/90 dark:border-white/10 dark:text-[#F9FAFB]">
      After Grooming ✨
    </div>

    {/* Before Image (Clipped via slider pos) */}
    <div 
      className="absolute inset-y-0 left-0 overflow-hidden" 
      style={{ width: `${sliderPos}%` }}
    >
      <div className="relative w-full h-80 sm:h-96">
        <img 
          src={beforeImg} 
          alt="Archie Before Care Grooming" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div className="absolute top-4 left-4 bg-white/90 border border-stone-200 text-stone-700 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-lg dark:bg-[#0F1115]/90 dark:border-white/10 dark:text-[#D1D5DB]">
        Before Arrival 🐾
      </div>
    </div>

    {/* Splitter Line and Handle */}
    <div 
      className="absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.4)] cursor-ew-resize flex items-center justify-center pointer-events-none"
      style={{ left: `${sliderPos}%` }}
    >
      <div className="w-8 h-8 -ml-4 bg-gradient-to-r from-amber-500 to-orange-500 border border-white/70 rounded-full flex items-center justify-center text-stone-950 shadow-lg shadow-black/40">
        <ChevronLeft size={13} className="-mr-0.5" strokeWidth={2.5} />
        <ChevronRight size={13} className="-ml-0.5" strokeWidth={2.5} />
      </div>
    </div>
  </div>
  <p className="text-center text-xs text-stone-500 mt-3 dark:text-[#6B7280]">
    ← Drag or slide across the image to see Archie&apos;s transformation →
  </p>
</div>
      </div>
    </section>
  );
}

function LightboxModal({ item, onClose, onLike, isLiked }) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300 dark:bg-black/80"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col md:flex-row dark:bg-[#14171E] dark:border-[#272B33]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-stone-100 text-stone-700 hover:text-stone-900 rounded-full flex items-center justify-center shadow-lg border border-stone-200 transition-all dark:bg-[#1F232C]/80 dark:hover:bg-[#282E3B] dark:text-[#D1D5DB] dark:hover:text-white dark:border-[#2C313C]"
          aria-label="Close modal"
        >
          <X size={17} />
        </button>

        {/* Media Preview */}
        <div className="md:w-7/12 bg-stone-100 relative flex items-center justify-center overflow-hidden dark:bg-[#0A0C0F]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-72 md:h-full object-cover max-h-[580px]"
          />
          <div className="absolute bottom-3.5 left-3.5 bg-white/90 border border-stone-200 backdrop-blur-md text-stone-800 px-3 py-1 rounded-full text-xs font-medium dark:bg-[#0F1115]/85 dark:border-[#272B33] dark:text-[#E5E7EB]">
            {item.badge}
          </div>
        </div>

        {/* Details Panel */}
        <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-white dark:bg-[#14171E]">
          <div className="space-y-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {item.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 tracking-tight dark:text-[#F9FAFB]">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-stone-600 mt-1 dark:text-[#9CA3AF]">
                Guest: <span className="text-stone-900 font-semibold dark:text-[#F3F4F6]">{item.petName}</span>
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2.5 dark:bg-[#0F1115] dark:border-[#232730]">
              <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-[#9CA3AF]">
                <Award size={14} className="text-amber-600 shrink-0 dark:text-amber-400" />
                <span className="font-semibold text-stone-800 dark:text-[#E5E7EB]">{item.service}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed italic dark:text-[#9CA3AF]">
                &ldquo;{item.careNote}&rdquo;
              </p>
              <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-1.5 border-t border-stone-200 dark:text-[#6B7280] dark:border-[#1C2028]">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0 dark:text-emerald-400" />
                <span>Caregiver: {item.caregiver}</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 dark:text-[#6B7280]">Care Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-medium border border-amber-200 dark:bg-[#181C24] dark:text-amber-300 dark:border-[#262B34]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between dark:border-[#232730]">
            <button 
              onClick={() => onLike(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs sm:text-sm border transition-all active:scale-95 ${
                isLiked 
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300' 
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 dark:bg-[#181C24] dark:hover:bg-[#1F232D] dark:border-[#262A34] dark:text-[#D1D5DB]'
              }`}
            >
              <Heart size={15} className={isLiked ? "fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" : "text-stone-400 dark:text-[#6B7280]"} />
              <span>{item.likes + (isLiked ? 1 : 0)} Loves</span>
            </button>

            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 transition-colors p-2 dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]"
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Share2 size={15} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCategory = activeCategory === "All" || item.category === activeCategory;
      const matchSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.service.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        const likesA = a.likes + (likedItems[a.id] ? 1 : 0);
        const likesB = b.likes + (likedItems[b.id] ? 1 : 0);
        return likesB - likesA;
      }
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy, likedItems]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-600 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-800 transition-colors duration-200 dark:bg-[#0F1115] dark:text-[#9CA3AF] dark:selection:text-amber-300">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-20 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <div className="text-center max-w-3xl mx-auto space-y-4">
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-medium tracking-wide backdrop-blur-sm dark:border-amber-500/20 dark:text-amber-300">
    <ShieldCheck size={14} className="text-amber-600 dark:text-amber-400" />
    <span>Trusted Care, Happy Pets</span>
  </div>
  <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.12] dark:text-[#F9FAFB]">
    Happy Pets &amp;{' '}
    <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-amber-200">
      Loving Care
    </span>
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto dark:text-[#9CA3AF]">
    Take a look at our clean play areas, quiet resting spots, and pet spa. See how our trained team keeps every dog and cat safe, happy, and loved.
  </p>
</div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 flex-1">
        {/* Interactive Transformation Slider Section */}
        <TransformationSection />

        {/* Filter Controls Bar */}
        <div className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md py-4 mb-8 border-b border-stone-200 dark:bg-[#0F1115]/90 dark:border-[#232730]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                      isActive 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 shadow-md shadow-amber-500/20' 
                        : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 dark:bg-[#14171E] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6] dark:hover:bg-[#1A1E27] dark:border-[#232730]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search & Sort Dropdown */}
            <div className="flex items-center gap-2.5 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 dark:text-[#6B7280]" />
                <input 
                  type="text"
                  placeholder="Search pet, tag or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-white text-xs sm:text-sm rounded-full border border-stone-200 focus:outline-none focus:border-amber-500/80 text-stone-900 placeholder-stone-400 transition-colors shadow-xs dark:bg-[#14171E] dark:border-[#262A34] dark:text-[#F3F4F6] dark:placeholder-[#4B5563] dark:shadow-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 dark:text-[#6B7280] dark:hover:text-[#F3F4F6]"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white text-xs sm:text-sm font-medium text-stone-700 pl-3.5 pr-8 py-2 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500/80 cursor-pointer shadow-xs dark:bg-[#14171E] dark:text-[#D1D5DB] dark:border-[#262A34] dark:shadow-none"
                >
                  <option value="popular" className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]">Most Loved</option>
                  <option value="newest" className="bg-white text-stone-900 dark:bg-[#14171E] dark:text-[#F3F4F6]">Recent Captures</option>
                </select>
                <ArrowUpDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 dark:text-[#6B7280]" />
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm dark:bg-[#14171E] dark:border-[#232730] dark:shadow-none">
            <div className="w-14 h-14 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center mx-auto text-stone-400 mb-3 dark:bg-[#0F1115] dark:border-[#262A34] dark:text-[#6B7280]">
              <Camera size={22} className="text-amber-600 dark:text-amber-400" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 tracking-tight dark:text-[#F9FAFB]">No pet memories found</h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mt-1 leading-relaxed dark:text-[#9CA3AF]">
              Try adjusting your search query or selecting &ldquo;All&rdquo; categories to view other lovely moments.
            </p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-5 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-xs font-semibold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isLiked = !!likedItems[item.id];
              return (
                <article 
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm shadow-stone-200/50 hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:shadow-2xl dark:hover:border-[#383F4E]"
                >
                  {/* Image Container with Smooth Zoom */}
                  <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-stone-100 dark:bg-[#0F1115]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-black/20 opacity-90 group-hover:opacity-95 transition-opacity dark:from-[#0B0D11] dark:via-[#0B0D11]/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 border border-white/20 text-stone-900 backdrop-blur-md shadow-sm dark:bg-[#14171E]/90 dark:border-white/10 dark:text-[#F3F4F6]">
                        {item.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/90 border border-white/20 text-stone-900 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md dark:bg-[#14171E]/90 dark:border-white/10 dark:text-[#F3F4F6]">
                        <Maximize2 size={13} />
                      </span>
                    </div>

                    {/* Overlay Content Bottom */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1 dark:text-amber-400">
                        <Tag size={12} />
                        <span>{item.service}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold tracking-tight text-white line-clamp-1 drop-shadow-sm dark:text-[#F9FAFB]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-200 mt-0.5 dark:text-[#9CA3AF]">
                        Guest: <strong className="text-white font-semibold dark:text-[#F3F4F6]">{item.petName}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="p-4 bg-white flex items-center justify-between border-t border-stone-200 dark:bg-[#14171E] dark:border-[#20242D]">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-[#6B7280]">
                      <Calendar size={13} className="text-amber-600 dark:text-amber-400" />
                      <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                        isLiked
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300'
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 dark:bg-[#181C24] dark:hover:bg-[#1F232D] dark:border-[#262A34] dark:text-[#D1D5DB]'
                      }`}
                    >
                      <Heart 
                        size={13} 
                        className={isLiked ? "fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" : "text-stone-400 dark:text-[#6B7280]"} 
                      />
                      <span>{item.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <LightboxModal 
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onLike={toggleLike}
        isLiked={selectedItem ? !!likedItems[selectedItem.id] : false}
      />
    </div>
  );
}