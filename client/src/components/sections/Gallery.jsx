import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Search, 
  Filter, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  UploadCloud, 
  Share2, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Tag, 
  Camera, 
  ArrowUpDown,
  Maximize2,
  ShieldCheck,
  Dog,
  Cat,
  Scissors
} from 'lucide-react';

// Design Tokens strictly following the specified pet care theme:
// Deep Forest: #12372A | Dark Evergreen: #0B2119 | Warm Amber: #F4A261
// Soft Mint: #A8D5BA | Background: #F8F7F2 | Surface: #FFFFFF
// Text Primary: #17211B | Text Secondary: #66736B | Border: #DDE5DF

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
    aspect: "tall", // for bento layout
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
    <section id="gallery" className="bg-white rounded-3xl p-6 md:p-10 border border-[#DDE5DF] shadow-sm mb-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left copy */}
        <div className="lg:w-5/12 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A8D5BA]/20 border border-[#A8D5BA] text-[#12372A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="text-[#12372A]" />
            Real Care Transformation
          </div>
          <h3 className="text-3xl font-extrabold text-[#12372A] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            From Muddy Trail to Velvety Fluff
          </h3>
          <p className="text-[#66736B] leading-relaxed text-sm md:text-base">
            Slide horizontally to reveal the before and after of Archie’s full de-shedding bath, 
            ear sanitization, and warm lavender paw moisture treatment.
          </p>
          
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-medium text-[#17211B]">
            <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#DDE5DF]">
              <span className="text-[#66736B] block text-[11px]">PET GUEST</span>
              <strong className="text-[#12372A] text-sm">Archie (Cockapoo)</strong>
            </div>
            <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#DDE5DF]">
              <span className="text-[#66736B] block text-[11px]">CARE PACKAGE</span>
              <strong className="text-[#12372A] text-sm">Signature Spa & Trim</strong>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#66736B] pt-1">
            <ShieldCheck size={16} className="text-[#A8D5BA]" />
            <span>Performed using 100% organic, tear-free botanicals.</span>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="lg:w-7/12 w-full">
          <div 
            className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#DDE5DF] shadow-inner"
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
            <div className="absolute top-4 right-4 bg-[#12372A]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow">
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
              <div className="absolute top-4 left-4 bg-[#0B2119]/80 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow">
                Before Arrival 🐾
              </div>
            </div>

            {/* Splitter Line and Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 -ml-3.5 bg-[#F4A261] border-2 border-white rounded-full flex items-center justify-center text-white shadow-md">
                <ChevronLeft size={14} className="-mr-1" />
                <ChevronRight size={14} className="-ml-1" />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#66736B] mt-2">
            ← Drag or slide across the image to see Archie's glow up →
          </p>
        </div>
      </div>
    </section>
  );
}

function LightboxModal({ item, onClose, onLike, isLiked }) {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2119]/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#DDE5DF] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-[#F8F7F2] text-[#12372A] rounded-full flex items-center justify-center shadow-md transition-all"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Media Preview */}
        <div className="md:w-7/12 bg-black relative flex items-center justify-center overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-72 md:h-full object-cover max-h-[580px]"
          />
          <div className="absolute bottom-3 left-3 bg-[#0B2119]/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {item.badge}
          </div>
        </div>

        {/* Details Panel */}
        <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
          <div className="space-y-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-[#12372A] mt-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-[#17211B] mt-1">
                Guest: <span className="text-[#12372A]">{item.petName}</span>
              </p>
            </div>

            <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#DDE5DF] space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#66736B]">
                <Award size={14} className="text-[#A8D5BA]" />
                <span className="font-semibold text-[#12372A]">{item.service}</span>
              </div>
              <p className="text-xs text-[#66736B] leading-relaxed italic">
                "{item.careNote}"
              </p>
              <div className="pt-1 text-[11px] text-[#66736B] flex items-center gap-1.5 border-t border-[#DDE5DF]">
                <CheckCircle2 size={13} className="text-[#A8D5BA]" />
                Caregiver: {item.caregiver}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#66736B] mb-2">Care Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-[#A8D5BA]/20 text-[#12372A] font-medium border border-[#A8D5BA]/40">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#DDE5DF] mt-6 flex items-center justify-between">
            <button 
              onClick={() => onLike(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                isLiked 
                  ? 'bg-[#12372A] text-white' 
                  : 'bg-[#F8F7F2] hover:bg-[#DDE5DF]/60 text-[#17211B]'
              }`}
            >
              <Heart size={16} className={isLiked ? "fill-[#F4A261] text-[#F4A261]" : "text-[#66736B]"} />
              <span>{item.likes + (isLiked ? 1 : 0)} Loves</span>
            </button>

            <button 
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="flex items-center gap-1.5 text-xs text-[#66736B] hover:text-[#12372A] transition-colors p-2"
              title="Copy share link"
            >
              <Share2 size={16} />
              <span>Share</span>
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
  const [sortBy, setSortBy] = useState("popular"); // popular | newest
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedItems, setLikedItems] = useState({});
  const [uploadNotice, setUploadNotice] = useState(false);

  // Toggle like
  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter and sort items
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
    <div className="min-h-screen bg-[#F8F7F2] text-[#17211B] flex flex-col font-sans selection:bg-[#A8D5BA]/30 selection:text-[#12372A]">

      {/* Hero Section of Gallery */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A] text-white text-xs font-semibold tracking-wide">
            <ShieldCheck size={14} className="text-[#A8D5BA]" />
            Verified Paws, Certified Smiles
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#12372A] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Moments of Joy & Royal Care
          </h1>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Peek inside our serene play runs, clinical suites, and botanical spa rooms. Every tail wag and purr captured with love by our certified caregivers.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 flex-1">
        {/* Interactive Transformation Slider Section */}
        <TransformationSection />

        {/* Filter Controls Bar */}
        <div className="sticky top-20 z-30 bg-[#F8F7F2]/95 backdrop-blur-sm py-4 mb-6 border-b border-[#DDE5DF]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#12372A] text-white shadow-sm' 
                        : 'bg-white text-[#66736B] hover:text-[#12372A] hover:bg-white/80 border border-[#DDE5DF]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search & Sort dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#66736B]" />
                <input 
                  type="text"
                  placeholder="Search pet, tag or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white text-xs sm:text-sm rounded-full border border-[#DDE5DF] focus:outline-none focus:border-[#12372A] text-[#17211B] placeholder-[#66736B]/70 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#66736B] hover:text-[#12372A]"
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
                  className="appearance-none bg-white text-xs sm:text-sm font-medium text-[#17211B] pl-3.5 pr-8 py-2 rounded-full border border-[#DDE5DF] focus:outline-none focus:border-[#12372A] cursor-pointer"
                >
                  <option value="popular">Most Loved</option>
                  <option value="newest">Recent Captures</option>
                </select>
                <ArrowUpDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#66736B]" />
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid with Responsive Bento / Masonry feel */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#DDE5DF] p-8">
            <div className="w-14 h-14 bg-[#F8F7F2] rounded-full flex items-center justify-center mx-auto text-[#66736B] mb-3">
              <Camera size={24} />
            </div>
            <h4 className="text-lg font-bold text-[#12372A]">No pet memories found</h4>
            <p className="text-sm text-[#66736B] max-w-sm mx-auto mt-1">
              Try adjusting your search query or selecting "All" categories to view other lovely moments.
            </p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 bg-[#12372A] text-white text-xs font-semibold rounded-full hover:bg-[#0B2119] transition-colors"
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
                  className="group relative bg-white rounded-3xl overflow-hidden border border-[#DDE5DF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                >
                  {/* Image Container with Smooth Zoom */}
                  <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-[#0B2119]/5">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/70 via-transparent to-black/10 opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#12372A] backdrop-blur-md shadow-sm">
                        {item.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/80 text-[#12372A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Maximize2 size={14} />
                      </span>
                    </div>

                    {/* Overlay Content Bottom */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-[#A8D5BA] font-semibold mb-1">
                        <Tag size={12} />
                        <span>{item.service}</span>
                      </div>
                      <h4 className="text-lg font-bold tracking-tight text-white drop-shadow-sm line-clamp-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#F8F7F2]/90 mt-0.5">
                        Guest: <strong className="text-[#F4A261]">{item.petName}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="p-4 bg-white flex items-center justify-between border-t border-[#DDE5DF]">
                    <div className="flex items-center gap-1 text-xs text-[#66736B]">
                      <Calendar size={13} className="text-[#A8D5BA]" />
                      <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F8F7F2] hover:bg-[#DDE5DF]/60 transition-colors text-[#17211B]"
                    >
                      <Heart 
                        size={14} 
                        className={isLiked ? "fill-[#F4A261] text-[#F4A261]" : "text-[#66736B]"} 
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