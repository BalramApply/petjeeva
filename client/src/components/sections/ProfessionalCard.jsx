import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Badge from '../ui/Badge';

export default function ProfessionalCard({ professional }) {
  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-[#232730] bg-[#14171E] p-6 sm:p-7 text-center shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#383F4D] hover:shadow-2xl">
      {/* Ambient background hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-amber-500/10"
      />

      {/* Profile Image with dual-layer border & verification badge */}
      <div className="relative">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-amber-500/30 bg-[#0F1115] p-1 shadow-lg shadow-black/60 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400/60">
          <img
            src={professional.imageUrl}
            alt={professional.name || professional.role}
            loading="lazy"
            className="h-full w-full rounded-full object-cover select-none"
          />
        </div>

        {/* Verified Specialist Pill Icon */}
        <div
          title="100% Background-Vetted Specialist"
          className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#14171E] bg-emerald-500 text-stone-950 shadow-md"
        >
          <ShieldCheck size={14} strokeWidth={2.5} />
        </div>
      </div>

      {/* Role / Demo Badge */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
          <Sparkles size={11} className="text-amber-400" />
          Certified
        </span>
      </div>

      {/* Professional Title / Role */}
      <h3 className="mt-3 font-heading text-lg font-bold tracking-tight text-[#F9FAFB] transition-colors group-hover:text-amber-300">
        {professional.role}
      </h3>

      {/* Bio / Experience Description */}
      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#9CA3AF]">
        {professional.bio}
      </p>

      {/* Trust Mini-Footer */}
      <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-[#1F232C] pt-4 text-[11px] font-medium text-[#6B7280]">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
        <span>Fear-Free &amp; Zero-Sedation Certified</span>
      </div>
    </div>
  );
}