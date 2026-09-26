import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';

export default function OptionCard({ label, icon, selected, onClick }) {
  const Icon = icon ? Icons[icon] : null;

  return (
    <button
      type="button"
      onClick={onClick}
      role="radio"
      aria-checked={selected}
      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 active:scale-[0.98] select-none ${
        selected
          ? 'border-amber-500/80 bg-gradient-to-b from-[#1E232B] to-[#171B22] text-[#F9FAFB] shadow-lg shadow-amber-500/10'
          : 'border-[#262A33] bg-[#14171E] text-[#9CA3AF] hover:border-[#383F4D] hover:bg-[#181C24] hover:text-[#E5E7EB]'
      }`}
    >
      {/* Selection Pill Indicator (Top-Right) */}
      <div
        aria-hidden="true"
        className={`absolute top-2.5 right-2.5 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-200 ${
          selected
            ? 'border-amber-500 bg-amber-500 text-stone-950 scale-100 opacity-100'
            : 'border-[#333945] bg-[#101217] scale-75 opacity-0 group-hover:opacity-60'
        }`}
      >
        <Check size={10} strokeWidth={3} />
      </div>

      {/* Dynamic Icon Well */}
      {Icon && (
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-200 ${
            selected
              ? 'border-amber-500/30 bg-amber-500/10 text-amber-400 scale-105'
              : 'border-[#262B34] bg-[#101217] text-[#6B7280] group-hover:border-[#353C49] group-hover:text-amber-400/80'
          }`}
        >
          <Icon size={22} strokeWidth={selected ? 2.2 : 1.8} />
        </div>
      )}

      {/* Option Label */}
      <span
        className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
          selected ? 'text-[#F9FAFB]' : 'text-[#9CA3AF] group-hover:text-[#F3F4F6]'
        }`}
      >
        {label}
      </span>
    </button>
  );
}