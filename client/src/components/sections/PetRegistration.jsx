import React from 'react';
import {
  PawPrint,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  ArrowRight,
  Home,
  Scale,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export default function PetRegistration() {
  const handleBookingRedirect = () => {
    window.location.href = '/book';
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#0F1115] text-stone-800 dark:text-[#F9FAFB] transition-colors duration-300 font-sans">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-white to-stone-50 dark:from-[#14171E] dark:via-[#0F1115] dark:to-[#0F1115] border-b border-stone-200/80 dark:border-[#232730] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase border border-amber-500/20">
            <PawPrint size={14} /> Official Pet Licensing Assistance
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-[#F9FAFB] leading-tight">
            Protect Your Pet With Seamless <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Municipal Pet Registration
            </span>
          </h1>
          
          <p className="text-stone-600 dark:text-[#9CA3AF] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ensure your furry companion is legally protected, compliant with municipal authorities, and welcomed across your residential community without the hassle of paperwork.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleBookingRedirect}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Pet Registration Assistance</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Why Pet Registration is Important */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#F9FAFB]">
              Why Pet Registration Matters
            </h2>
            <p className="text-sm text-stone-600 dark:text-[#9CA3AF]">
              Registering your pet provides legal identity, neighbor peace of mind, and civic safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#14171E] rounded-2xl p-6 border border-stone-200/90 dark:border-[#232730] shadow-sm hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-[#F9FAFB] mb-2">
                Legal Protection & Proof
              </h3>
              <p className="text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Establishes your indisputable legal ownership with municipal authorities and protects you in property or custody challenges.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] rounded-2xl p-6 border border-stone-200/90 dark:border-[#232730] shadow-sm hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                <Home size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-[#F9FAFB] mb-2">
                Hassle-Free Society Living
              </h3>
              <p className="text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Comply with RWA rules and apartment bylaws, avoiding common-area bans, resident notices, or unnecessary conflicts.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] rounded-2xl p-6 border border-stone-200/90 dark:border-[#232730] shadow-sm hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <PawPrint size={24} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-[#F9FAFB] mb-2">
                Quick Identification If Lost
              </h3>
              <p className="text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                An active municipal token and registration record ensures city personnel and shelters can identify and reunite you swiftly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Happens If You Don't Register */}
        <section className="bg-rose-500/5 dark:bg-rose-500/10 rounded-3xl p-6 sm:p-8 border border-rose-500/20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-500 text-white rounded-xl">
              <AlertTriangle size={22} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#F9FAFB]">
                What Happens If You Don't Register?
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF]">
                Municipal pet registration is a mandatory statutory civic requirement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-rose-500/20 space-y-2">
              <div className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 text-sm">
                <Scale size={16} /> Legal Fines & Penalties
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Local corporations issue show-cause warnings and compounding fines for keeping an unregistered pet.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-rose-500/20 space-y-2">
              <div className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 text-sm">
                <Home size={16} /> RWA Restrictions
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Residential committees can bar unregistered dogs from society elevators, parks, and grounds.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-rose-500/20 space-y-2">
              <div className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 text-sm">
                <AlertTriangle size={16} /> Dispute Vulnerability
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Without government-registered ownership records, proving legal guardianship during public disputes is difficult.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How PetJeeva Makes It Easy */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Sparkles size={14} /> Stress-Free Facilitation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#F9FAFB]">
              How PetJeeva Makes It Effortless
            </h2>
            <p className="text-sm text-stone-600 dark:text-[#9CA3AF]">
              Skip municipal lines, confusing forms, and administrative delays. We handle every step for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-stone-200/90 dark:border-[#232730] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-stone-900 dark:text-[#F9FAFB] text-base">Request Assistance</h4>
              <p className="text-xs text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Click book assistance to get connected directly with our dedicated pet concierge.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-stone-200/90 dark:border-[#232730] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-stone-900 dark:text-[#F9FAFB] text-base">Effortless Hand-Off</h4>
              <p className="text-xs text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Simply share your pet’s basic profile details securely with our team.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-stone-200/90 dark:border-[#232730] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-stone-900 dark:text-[#F9FAFB] text-base">Civic Formalities</h4>
              <p className="text-xs text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                We coordinate with municipal portals and counters on your behalf.
              </p>
            </div>

            <div className="bg-white dark:bg-[#14171E] p-5 rounded-2xl border border-stone-200/90 dark:border-[#232730] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="font-bold text-stone-900 dark:text-[#F9FAFB] text-base">Certificate Delivered</h4>
              <p className="text-xs text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                Receive your official government registration certificate and token directly.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#14171E] to-[#1E222A] text-white border border-[#232730] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-[#F9FAFB]">
              Ready to Register Your Pet Without Any Stress?
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Let PetJeeva take care of the entire civic registration so you can focus on quality time with your furry friend.
            </p>
          </div>
          
          <button
            type="button"
            onClick={handleBookingRedirect}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
          >
            <span>Pet Registration Assistance</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </main>
    </div>
  );
}