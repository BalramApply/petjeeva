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

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Golden Hour Playtime",
    petName: "Milo & Rusty",
    category: "Dogs",
    service: "Daycare & Play",
    caregiver: "Sarah Jenkins (Certified Trainer)",
    careNote: "Milo enjoyed obstacle courses today and made friends with Rusty during the 2 PM lawn run!",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
    likes: 142,
    date: "2024-05-18",
    badge: "Daycare Fun",
    tags: ["Dog Park", "Social Play", "Golden Retriever"]
  },
  {
    id: 2,
    title: "Botanical Spa & De-Shedding",
    petName: "Luna",
    category: "Grooming & Spa",
    service: "Luxury Oatmeal Bath & Trim",
    caregiver: "Marcus Reed (Master Groomer)",
    careNote: "Luna was relaxed during her aromatherapy paw balm treatment. Coat is silk soft and brush-ready.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide",
    likes: 218,
    date: "2024-05-20",
    badge: "Spa Transformation",
    tags: ["Aromatherapy", "Hypoallergenic", "Persian"]
  },
  {
    id: 3,
    title: "Sunbeam Afternoon Nap",
    petName: "Oliver",
    category: "Cats",
    service: "Private Cattery Suite",
    caregiver: "Elena Brooks (Feline Specialist)",
    careNote: "Curled up after having salmon treats and interactive feather teaser playtime.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
    likes: 95,
    date: "2024-05-22",
    badge: "Cozy Suite",
    tags: ["Cattery", "Naptime", "Relaxed"]
  },
  {
    id: 4,
    title: "Routine Wellness & Heart Check",
    petName: "Barnaby",
    category: "Health & Wellness",
    service: "Comprehensive Physical & Dental",
    caregiver: "Dr. Alistair Finch (DVM)",
    careNote: "Vitals are prime, weight steady at 28kg, coat healthy and teeth polished with enzymatic gel.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
    likes: 184,
    date: "2024-05-15",
    badge: "Clean Bill of Health",
    tags: ["Vet Certified", "Preventative Care", "Senior Pet"]
  },
  {
    id: 5,
    title: "Puppy Agility First Steps",
    petName: "Pip & Koko",
    category: "Happy Moments",
    service: "Puppy Social Club",
    caregiver: "Chloe Davenport (Behaviorist)",
    careNote: "First time conquering the gentle incline tunnel without hesitation! Such joyful tail wags.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide",
    likes: 312,
    date: "2024-05-21",
    badge: "Milestone",
    tags: ["Puppy Club", "Agility", "Playgroup"]
  },
  {
    id: 6,
    title: "Teddy Bear Trim & Blueberry Facial",
    petName: "Bella",
    category: "Grooming & Spa",
    service: "Full Styling & Sanitizing",
    caregiver: "Marcus Reed",
    careNote: "Poodle blend scissor finish with rounded ears and hygienic tidy. Look at that proud smile!",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
    likes: 167,
    date: "2024-05-19",
    badge: "Top Styling",
    tags: ["Breed Cut", "Blueberry Facial", "Poodle Mix"]
  },
  {
    id: 7,
    title: "Curious Window Perch Watch",
    petName: "Cleo",
    category: "Cats",
    service: "Cat Lounge Enrichment",
    caregiver: "Elena Brooks",
    careNote: "Bird-watching session with custom vertical cat trees and organic cat grass enrichment.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
    likes: 129,
    date: "2024-05-17",
    badge: "Enrichment",
    tags: ["Cat Lounge", "Play Therapy"]
  },
  {
    id: 8,
    title: "Splash Zone Splashdown",
    petName: "Cooper",
    category: "Daycare & Play",
    service: "Aqua Therapy & Water Fun",
    caregiver: "Sam Walker (Hydro Specialist)",
    careNote: "Cooling off in the shallow filtered splash pad on warm sunny afternoons.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
    likes: 276,
    date: "2024-05-23",
    badge: "Aqua Play",
    tags: ["Splash Pad", "Summer Care", "Hydrotherapy"]
  }
];

const CATEGORIES = [
  "All",
  "Dogs",
  "Cats",
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
    <section id="gallery" className="relative bg-[#14171E] rounded-3xl p-6 md:p-10 border border-[#232730] shadow-2xl shadow-black/50 mb-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl"
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left copy */}
        <div className="lg:w-5/12 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wide">
            <Sparkles size={14} className="text-amber-400" />
            <span>Real Care Transformation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight leading-snug">
            From Muddy Trail to <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Velvety Fluff</span>
          </h3>
          <p className="text-[#9CA3AF] leading-relaxed text-sm md:text-base">
            Slide horizontally to reveal the before and after of Archie&apos;s full de-shedding bath, 
            ear sanitization, and warm lavender paw moisture treatment.
          </p>
          
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-medium">
            <div className="p-3 rounded-2xl bg-[#0F1115] border border-[#232730]">
              <span className="text-[#6B7280] block text-[11px] uppercase tracking-wider font-semibold">Pet Guest</span>
              <strong className="text-[#F3F4F6] text-sm mt-0.5 block">Archie (Cockapoo)</strong>
            </div>
            <div className="p-3 rounded-2xl bg-[#0F1115] border border-[#232730]">
              <span className="text-[#6B7280] block text-[11px] uppercase tracking-wider font-semibold">Care Package</span>
              <strong className="text-[#F3F4F6] text-sm mt-0.5 block">Signature Spa &amp; Trim</strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#9CA3AF] pt-1">
            <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
            <span>Performed using 100% organic, tear-free botanicals.</span>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="lg:w-7/12 w-full">
          <div 
            className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#272B33] shadow-inner bg-[#0B0D11]"
            onMouseMove={(e) => {
              if (e.buttons === 1 || isDragging) handleMouseMove(e);
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Base) */}
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80" 
              alt="Archie After Care Grooming" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-[#0F1115]/90 border border-white/10 text-[#F9FAFB] backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              After Grooming ✨
            </div>

            {/* Before Image (Clipped via slider pos) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden" 
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80" 
                alt="Archie Before Care Grooming" 
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 bg-[#0F1115]/90 border border-white/10 text-[#D1D5DB] backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Before Arrival 🐾
              </div>
            </div>

            {/* Splitter Line and Handle */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.4)] cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 -ml-4 bg-gradient-to-r from-amber-500 to-orange-500 border border-white/70 rounded-full flex items-center justify-center text-stone-950 shadow-lg shadow-black/60">
                <ChevronLeft size={13} className="-mr-0.5" strokeWidth={2.5} />
                <ChevronRight size={13} className="-ml-0.5" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#6B7280] mt-3">
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#14171E] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#272B33] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#1F232C]/80 hover:bg-[#282E3B] text-[#D1D5DB] hover:text-white rounded-full flex items-center justify-center shadow-lg border border-[#2C313C] transition-all"
          aria-label="Close modal"
        >
          <X size={17} />
        </button>

        {/* Media Preview */}
        <div className="md:w-7/12 bg-[#0A0C0F] relative flex items-center justify-center overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-72 md:h-full object-cover max-h-[580px]"
          />
          <div className="absolute bottom-3.5 left-3.5 bg-[#0F1115]/85 border border-[#272B33] backdrop-blur-md text-[#E5E7EB] px-3 py-1 rounded-full text-xs font-medium">
            {item.badge}
          </div>
        </div>

        {/* Details Panel */}
        <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-[#14171E]">
          <div className="space-y-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400">
                {item.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mt-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-[#9CA3AF] mt-1">
                Guest: <span className="text-[#F3F4F6] font-semibold">{item.petName}</span>
              </p>
            </div>

            <div className="p-4 bg-[#0F1115] rounded-2xl border border-[#232730] space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                <Award size={14} className="text-amber-400 shrink-0" />
                <span className="font-semibold text-[#E5E7EB]">{item.service}</span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed italic">
                &ldquo;{item.careNote}&rdquo;
              </p>
              <div className="pt-2 text-[11px] text-[#6B7280] flex items-center gap-1.5 border-t border-[#1C2028]">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>Caregiver: {item.caregiver}</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Care Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-[#181C24] text-amber-300 font-medium border border-[#262B34]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#232730] mt-6 flex items-center justify-between">
            <button 
              onClick={() => onLike(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs sm:text-sm border transition-all active:scale-95 ${
                isLiked 
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' 
                  : 'bg-[#181C24] hover:bg-[#1F232D] border-[#262A34] text-[#D1D5DB]'
              }`}
            >
              <Heart size={15} className={isLiked ? "fill-amber-400 text-amber-400" : "text-[#6B7280]"} />
              <span>{item.likes + (isLiked ? 1 : 0)} Loves</span>
            </button>

            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors p-2"
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
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
    <div className="min-h-screen bg-[#0F1115] text-[#9CA3AF] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-20 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium tracking-wide backdrop-blur-sm">
            <ShieldCheck size={14} className="text-amber-400" />
            <span>Verified Paws, Certified Smiles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.12]">
            Moments of Joy &amp;{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Royal Care
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
            Peek inside our serene play runs, clinical suites, and botanical spa rooms. Every tail wag and purr captured with love by our certified caregivers.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 flex-1">
        {/* Interactive Transformation Slider Section */}
        <TransformationSection />

        {/* Filter Controls Bar */}
        <div className="sticky top-20 z-30 bg-[#0F1115]/90 backdrop-blur-md py-4 mb-8 border-b border-[#232730]">
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
                        : 'bg-[#14171E] text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#1A1E27] border border-[#232730]'
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
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input 
                  type="text"
                  placeholder="Search pet, tag or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-[#14171E] text-xs sm:text-sm rounded-full border border-[#262A34] focus:outline-none focus:border-amber-500/80 text-[#F3F4F6] placeholder-[#4B5563] transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#F3F4F6]"
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
                  className="appearance-none bg-[#14171E] text-xs sm:text-sm font-medium text-[#D1D5DB] pl-3.5 pr-8 py-2 rounded-full border border-[#262A34] focus:outline-none focus:border-amber-500/80 cursor-pointer"
                >
                  <option value="popular" className="bg-[#14171E] text-[#F3F4F6]">Most Loved</option>
                  <option value="newest" className="bg-[#14171E] text-[#F3F4F6]">Recent Captures</option>
                </select>
                <ArrowUpDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]" />
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#14171E] rounded-3xl border border-[#232730] p-8">
            <div className="w-14 h-14 bg-[#0F1115] rounded-2xl border border-[#262A34] flex items-center justify-center mx-auto text-[#6B7280] mb-3">
              <Camera size={22} className="text-amber-400" />
            </div>
            <h4 className="text-lg font-bold text-[#F9FAFB] tracking-tight">No pet memories found</h4>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-sm mx-auto mt-1 leading-relaxed">
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
                  className="group relative bg-[#14171E] rounded-3xl overflow-hidden border border-[#232730] shadow-xl shadow-black/40 hover:shadow-2xl hover:border-[#383F4E] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                >
                  {/* Image Container with Smooth Zoom */}
                  <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-[#0F1115]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/30 to-black/20 opacity-90 group-hover:opacity-95 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#14171E]/90 border border-white/10 text-[#F3F4F6] backdrop-blur-md shadow-sm">
                        {item.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#14171E]/90 border border-white/10 text-[#F3F4F6] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                        <Maximize2 size={13} />
                      </span>
                    </div>

                    {/* Overlay Content Bottom */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                        <Tag size={12} />
                        <span>{item.service}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F9FAFB] line-clamp-1 drop-shadow-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">
                        Guest: <strong className="text-[#F3F4F6] font-semibold">{item.petName}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="p-4 bg-[#14171E] flex items-center justify-between border-t border-[#20242D]">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                      <Calendar size={13} className="text-amber-400" />
                      <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                        isLiked
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                          : 'bg-[#181C24] hover:bg-[#1F232D] border-[#262A34] text-[#D1D5DB]'
                      }`}
                    >
                      <Heart 
                        size={13} 
                        className={isLiked ? "fill-amber-400 text-amber-400" : "text-[#6B7280]"} 
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