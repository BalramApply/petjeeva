import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Volume2, 
  VolumeX, 
  Heart, 
  Share2, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import video1 from './video1.mp4'
import video2 from './video2.mp4'
import video3 from './video3.mp4'
import video4 from './video4.mp4'
import image1 from './video1.png'
import image2 from './video2.png'
import image3 from './video3.png'
import image4 from './video4.png'

const TESTIMONIAL_STORIES = [
  {
  id: 'kuro',
  petName: 'Kuro',
  detail: '10 seconds',
  tag: 'Dog Training',
  duration: '0:10',
  thumbnail: image1,
  videoUrl: video1,
  owner: 'PetJeeva',
  breed: 'Dog',
  location: 'Gurugram, Haryana',
  quote: 'Kuro’s training journey with PetJeeva — building better behavior through positive and caring training.',
  likes: 342,
  commentsCount: 18,
},
  {
  id: 'pet-registration',
  petName: 'All Pets',
  detail: '10 seconds',
  tag: 'Pet Registration',
  duration: '0:10',
  thumbnail: image2,
  videoUrl: video2,
  owner: 'PetJeeva',
  breed: 'All Pets',
  location: 'Gurugram, Haryana',
  quote: 'Easy and reliable pet registration services in Gurugram, helping pet parents keep their pets safely registered and documented.',
  likes: 342,
  commentsCount: 18,
},
  {
  id: 'pet-care-india',
  petName: 'All Pets',
  detail: '20 seconds',
  tag: 'Pet Care Services',
  duration: '0:20',
  thumbnail: image3,
  videoUrl: video3,
  owner: 'PetJeeva',
  breed: 'All Pets',
  location: 'Gurugram, Haryana',
  quote: 'Trusted pet care services for pets and pet parents across India, with care, comfort, and convenience at every step.',
  likes: 342,
  commentsCount: 18,
},
  {
  id: 'pet-registration2',
  petName: 'All Pets',
  detail: '10 seconds',
  tag: 'Pet Registration',
  duration: '0:10',
  thumbnail: image4,
  videoUrl: video4,
  owner: 'PetJeeva',
  breed: 'All Pets',
  location: 'Gurugram, Haryana',
  quote: 'Easy and reliable pet registration services in Gurugram, helping pet parents keep their pets safely registered and documented.',
  likes: 342,
  commentsCount: 18,
},
  {
    id: 'laila',
    petName: 'Laila',
    detail: 'Advance Training pack',
    tag: 'Advanced Off-Leash',
    duration: '0:58',
    thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    owner: 'Ananya Verma',
    breed: 'Indie Dog (Desi)',
    location: 'Hyderabad, Jubilee Hills',
    quote: 'Indies are super smart but need the right psychological channel! Laila mastered hand signals, stay, and instant recall in crowded spaces.',
    likes: 890,
    commentsCount: 54,
  },
  {
    id: 'bella',
    petName: 'Bella',
    detail: '6 months',
    tag: 'Potty & Crate Habits',
    duration: '0:22',
    thumbnail: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    owner: 'Dev & Natasha',
    breed: 'Corgi',
    location: 'Chennai, Besant Nagar',
    quote: 'Zero indoor accidents within 10 days of starting the feeding and doorbell schedule. Truly transformed our daily routine!',
    likes: 312,
    commentsCount: 15,
  }
];

function DesktopInPlaceCard({ story, isPlaying, onSelect, onStop }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
      setIsPaused(false);
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div 
      onClick={() => {
        if (!isPlaying) onSelect();
      }}
      className={`group relative w-[176px] sm:w-[200px] md:w-[224px] lg:w-[240px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer bg-[#18191D] border transition-all duration-300 flex-shrink-0 select-none ${
        isPlaying 
          ? 'border-[#FF7A59] ring-2 ring-[#FF7A59]/40 ring-offset-2 ring-offset-[#0F1013] shadow-2xl shadow-[#FF7A59]/10' 
          : 'border-white/[0.08] hover:border-white/20 hover:-translate-y-1.5 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60'
      }`}
    >
      {isPlaying ? (
        <div className="relative w-full h-full bg-[#0F1013]">
          <video
            ref={videoRef}
            src={story.videoUrl}
            playsInline
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlayPause}
            className="w-full h-full object-cover"
          />

          {/* Top Progress bar indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
            <div 
              className="h-full bg-gradient-to-r from-[#FF7A59] to-[#FFA770] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Active Overlay Header */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-auto">
            <span className="bg-[#121316]/80 backdrop-blur-md text-[#FFC4B3] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] animate-pulse" />
              Playing
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                className="w-7 h-7 rounded-full bg-[#121316]/80 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStop();
                }}
                className="w-7 h-7 rounded-full bg-[#121316]/80 backdrop-blur-md flex items-center justify-center text-stone-300 hover:text-white hover:bg-red-500/80 transition-colors border border-white/10"
                title="Stop & Reset Card"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pause overlay button */}
          {isPaused && (
            <div 
              onClick={togglePlayPause}
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center z-10"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF7A59] text-stone-950 flex items-center justify-center shadow-lg shadow-[#FF7A59]/30">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Playing Card Bottom Details */}
          <div 
            onClick={togglePlayPause}
            className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-[#0F1013] via-[#0F1013]/85 to-transparent text-left z-20 pointer-events-auto"
          >
            <h3 className="text-stone-100 font-bold text-sm sm:text-base leading-tight tracking-tight">
              {story.petName}
            </h3>
            <p className="text-stone-400 font-medium text-xs leading-tight mt-0.5">
              {story.detail}
            </p>
          </div>
        </div>
      ) : (
        <>
          <img 
            src={story.thumbnail} 
            alt={`${story.petName}'s story`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark Overlay with gentle PetJeeva gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0F1013]/90 transition-opacity group-hover:opacity-95" />

          {/* Duration Pill */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-[#121316]/70 backdrop-blur-md text-stone-200 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10 tracking-wide">
              {story.duration}
            </div>
          </div>

          {/* Tag Pill */}
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-black/60 backdrop-blur-md text-[#FFB199] text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10">
              {story.tag}
            </div>
          </div>

          {/* Center Play Trigger Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#FF7A59]/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm" />
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FF7A59] group-hover:bg-[#FF8B6D] text-stone-950 flex items-center justify-center shadow-xl shadow-black/60 transition-transform duration-300 group-hover:scale-110">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* Bottom Card Title Info */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-left z-10">
            <h3 className="text-white font-bold text-base sm:text-lg leading-tight tracking-tight drop-shadow-sm group-hover:text-[#FFB199] transition-colors">
              {story.petName}
            </h3>
            <p className="text-stone-300 font-medium text-xs sm:text-[13px] leading-tight mt-0.5">
              {story.detail} • <span className="text-stone-400">{story.breed}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function MobileReelsViewer({ stories, initialIndex, onClose }) {
  const extendedStories = [stories[stories.length - 1], ...stories, stories[0]];
  const totalExtended = extendedStories.length;
  const originalLength = stories.length;

  const [internalIndex, setInternalIndex] = useState(initialIndex + 1);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedMap, setLikedMap] = useState({});
  const [progress, setProgress] = useState(0);

  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const isResettingRef = useRef(false);

  useEffect(() => {
    if (containerRef.current) {
      const targetY = (initialIndex + 1) * containerRef.current.clientHeight;
      containerRef.current.scrollTo({ top: targetY, behavior: 'instant' });
    }
  }, [initialIndex]);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === internalIndex) {
        vid.currentTime = 0;
        vid.play().catch(() => {
          vid.muted = true;
          setIsMuted(true);
          vid.play();
        });
        setIsPlaying(true);
      } else {
        vid.pause();
      }
    });
    setProgress(0);
  }, [internalIndex]);

  const handleScroll = () => {
    if (!containerRef.current || isResettingRef.current) return;

    const { scrollTop, clientHeight } = containerRef.current;
    if (clientHeight === 0) return;

    const newIdx = Math.round(scrollTop / clientHeight);

    if (newIdx !== internalIndex && newIdx >= 0 && newIdx < totalExtended) {
      setInternalIndex(newIdx);

      if (newIdx === totalExtended - 1) {
        isResettingRef.current = true;
        setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.scrollTo({ top: 1 * clientHeight, behavior: 'instant' });
          setInternalIndex(1);
          isResettingRef.current = false;
        }, 320);
      }

      if (newIdx === 0) {
        isResettingRef.current = true;
        setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.scrollTo({ top: originalLength * clientHeight, behavior: 'instant' });
          setInternalIndex(originalLength);
          isResettingRef.current = false;
        }, 320);
      }
    }
  };

  const togglePlay = () => {
    const activeVideo = videoRefs.current[internalIndex];
    if (!activeVideo) return;
    if (activeVideo.paused) {
      activeVideo.play();
      setIsPlaying(true);
    } else {
      activeVideo.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = (e) => {
    const vid = e.target;
    if (vid) {
      const p = (vid.currentTime / (vid.duration || 1)) * 100;
      setProgress(p);
    }
  };

  const goNextReel = (e) => {
    e?.stopPropagation();
    if (!containerRef.current) return;
    const nextIdx = internalIndex + 1;
    containerRef.current.scrollTo({
      top: nextIdx * containerRef.current.clientHeight,
      behavior: 'smooth'
    });
  };

  const goPrevReel = (e) => {
    e?.stopPropagation();
    if (!containerRef.current) return;
    const prevIdx = internalIndex - 1;
    containerRef.current.scrollTo({
      top: prevIdx * containerRef.current.clientHeight,
      behavior: 'smooth'
    });
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const normalizedIndex = (internalIndex - 1 + originalLength) % originalLength;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0A0B0D] flex items-center justify-center select-none"
    >
      {/* Top Floating Controls Bar */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0F1013]/90 via-[#0F1013]/50 to-transparent z-40 px-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm tracking-tight">PetJeeva Stories</span>
          <span className="text-[11px] bg-[#FF7A59]/20 text-[#FF9E7D] border border-[#FF7A59]/30 px-2 py-0.5 rounded-full font-semibold">
            Reel
          </span>
          <span className="text-stone-400 text-xs font-mono ml-1">
            {normalizedIndex + 1}/{originalLength}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-9 h-9 rounded-full bg-[#18191D]/80 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white border border-white/10 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#18191D]/80 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white hover:bg-stone-800 transition-colors border border-white/10"
            aria-label="Close reels"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vertical Snap Scroll Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {extendedStories.map((story, idx) => (
          <div
            key={`${story.id}-${idx}`}
            className="w-full h-full snap-start relative flex items-center justify-center bg-[#0F1013] overflow-hidden"
          >
            <video
              ref={(el) => (videoRefs.current[idx] = el)}
              src={story.videoUrl}
              poster={story.thumbnail}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={idx === internalIndex ? handleTimeUpdate : undefined}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Play/Pause Overlay indicator */}
            {!isPlaying && idx === internalIndex && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-20 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF7A59] text-stone-950 flex items-center justify-center shadow-2xl shadow-[#FF7A59]/30">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Social Actions */}
            <div className="absolute right-3.5 bottom-24 flex flex-col items-center gap-4 z-30 pointer-events-auto">
              <button
                onClick={(e) => toggleLike(story.id, e)}
                className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors border ${
                  likedMap[story.id]
                    ? 'bg-[#FF7A59] text-stone-950 border-[#FF7A59]'
                    : 'bg-[#18191D]/70 text-stone-200 border-white/10 group-hover:bg-[#18191D]'
                }`}>
                  <Heart className={`w-5 h-5 ${likedMap[story.id] ? 'fill-current' : ''}`} />
                </div>
                <span className="text-[11px] font-semibold text-stone-200">
                  {likedMap[story.id] ? story.likes + 1 : story.likes}
                </span>
              </button>

              <div className="flex flex-col items-center gap-1 text-stone-200">
                <div className="w-11 h-11 rounded-full bg-[#18191D]/70 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-stone-300">{story.commentsCount}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (navigator.share) {
                    navigator.share({
                      title: `${story.petName}'s Transformation - PetJeeva`,
                      url: window.location.href,
                    });
                  }
                }}
                className="flex flex-col items-center gap-1 text-stone-200 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#18191D]/70 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#18191D] transition-colors">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-stone-300">Share</span>
              </button>
            </div>

            {/* Caption & Metadata */}
            <div className="absolute inset-x-0 bottom-0 pt-20 pb-7 px-4 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/85 to-transparent text-white z-20 pointer-events-auto text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FF7A59]/20 text-[#FF9E7D] border border-[#FF7A59]/30">
                  {story.tag}
                </span>
                <span className="text-xs text-stone-300 font-medium">
                  {story.breed} • {story.location}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1.5">
                <h2 className="text-lg font-bold text-white tracking-tight">{story.petName}</h2>
                <span className="text-xs text-stone-400">({story.detail})</span>
              </div>

              <p className="text-xs text-stone-300 line-clamp-3 mb-2.5 font-light leading-relaxed">
                "{story.quote}"
              </p>

              <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-white/[0.08]">
                <span>
                  Parent: <strong className="text-stone-200 font-medium">{story.owner}</strong>
                </span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Pet Parent
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-30">
              <div
                className="h-full bg-gradient-to-r from-[#FF7A59] to-[#FFA770] transition-all duration-75 ease-linear"
                style={{ width: idx === internalIndex ? `${progress}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons for tablet / desktop viewport preview */}
      <div className="hidden sm:flex flex-col gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={goPrevReel}
          className="w-10 h-10 rounded-full bg-[#18191D]/80 border border-white/10 backdrop-blur-md hover:bg-white/20 text-stone-200 hover:text-white flex items-center justify-center transition-all"
          title="Previous Reel"
        >
          ▲
        </button>
        <button
          onClick={goNextReel}
          className="w-10 h-10 rounded-full bg-[#18191D]/80 border border-white/10 backdrop-blur-md hover:bg-white/20 text-stone-200 hover:text-white flex items-center justify-center transition-all"
          title="Next Reel"
        >
          ▼
        </button>
      </div>
    </motion.div>
  );
}

export function Testimonials({ forceMobileMode = false }) {
  const [playingCardId, setPlayingCardId] = useState(null);
  const [mobileReelIndex, setMobileReelIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, [checkScrollState]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollState, 350);
    }
  };

  const handleCardClick = (story, index) => {
    const isMobile = forceMobileMode || (typeof window !== 'undefined' && window.innerWidth < 768);
    if (isMobile) {
      setPlayingCardId(null);
      setMobileReelIndex(index);
    } else {
      setPlayingCardId(story.id);
    }
  };

  return (
    <section className="w-full bg-[#0D0E11] py-14 sm:py-20 lg:py-28 relative overflow-hidden select-none border-t border-b border-white/[0.04]">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF7A59]/[0.035] blur-[120px] pointer-events-none rounded-full" />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A59]/10 border border-[#FF7A59]/20 text-[#FF9E7D] text-xs font-semibold mb-3 tracking-wide"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Transformations</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight leading-tight"
        >
          Stories of Love, Trust &amp; <span className="bg-gradient-to-r from-[#FF7A59] to-[#FFA770] bg-clip-text text-transparent">Growth</span>
        </motion.h2>

        <p className="mt-3 text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Watch firsthand how PetJeeva's certified, positive-reinforcement routines bring out the best behavior in your companions.
        </p>
      </div>

      {/* Reel Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#18191D]/90 backdrop-blur-md text-stone-200 shadow-xl border border-white/10 flex items-center justify-center transition-all duration-200 ${
            canScrollLeft 
              ? 'opacity-100 hover:scale-105 hover:bg-[#202227] hover:text-white active:scale-95 cursor-pointer' 
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
        </button>

        {/* Story Reel Cards Horizontal Track */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScrollState}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIAL_STORIES.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex-shrink-0"
            >
              <DesktopInPlaceCard
                story={story}
                isPlaying={playingCardId === story.id}
                onSelect={() => handleCardClick(story, idx)}
                onStop={() => setPlayingCardId(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#18191D]/90 backdrop-blur-md text-stone-200 shadow-xl border border-white/10 flex items-center justify-center transition-all duration-200 ${
            canScrollRight 
              ? 'opacity-100 hover:scale-105 hover:bg-[#202227] hover:text-white active:scale-95 cursor-pointer' 
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
        </button>
      </div>

      {/* Trust Counters */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-white/[0.08] text-stone-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#FF7A59]" />
            <div>
              <span className="font-extrabold text-stone-100 text-base sm:text-lg">4,500+</span>
              <span className="text-stone-400 font-normal ml-1.5">Dogs Trained</span>
            </div>
          </div>

          <div className="w-1.5 h-1.5 rounded-full bg-stone-700 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#FF7A59]" />
            <div>
              <span className="font-extrabold text-stone-100 text-base sm:text-lg">4.9/5</span>
              <span className="text-stone-400 font-normal ml-1.5">Verified Google Rating</span>
            </div>
          </div>

          <div className="w-1.5 h-1.5 rounded-full bg-stone-700 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="font-extrabold text-stone-100 text-base sm:text-lg">100%</span>
              <span className="text-stone-400 font-normal ml-1.5">Force-Free Positive Reinforcement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Reels Full-Screen Modal */}
      <AnimatePresence>
        {mobileReelIndex !== null && (
          <MobileReelsViewer
            stories={TESTIMONIAL_STORIES}
            initialIndex={mobileReelIndex}
            onClose={() => setMobileReelIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default function App() {
  const [devicePreview, setDevicePreview] = useState('desktop');

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-stone-100 font-sans flex flex-col items-center">
      

      {/* Canvas Display */}
      <div className="w-full flex justify-center py-0">
        {devicePreview === 'mobile' ? (
          <div className="w-full max-w-[400px] border-8 border-stone-800 rounded-[44px] overflow-hidden shadow-2xl bg-[#0A0B0D]">
            <Testimonials forceMobileMode={true} />
          </div>
        ) : (
          <div className="w-full">
            <Testimonials forceMobileMode={false} />
          </div>
        )}
      </div>
    </div>
  );
}