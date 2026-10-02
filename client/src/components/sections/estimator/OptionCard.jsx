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
      className={`group relative flex w-full items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 active:scale-[0.98] ${
        selected
          ? 'border-amber-500 bg-amber-50/50 text-stone-900 shadow-md shadow-amber-500/10 dark:border-amber-500/80 dark:bg-gradient-to-r dark:from-[#1E232B] dark:to-[#171B22] dark:text-[#F9FAFB]'
          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-[#262A33] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:hover:border-[#383F4D] dark:hover:bg-[#181C24] dark:hover:text-[#E5E7EB]'
      }`}
    >
      {/* Dynamic Icon Well */}
      {Icon && (
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
            selected
              ? 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:border-amber-500/30 dark:text-amber-400'
              : 'border-stone-200 bg-stone-100/70 text-stone-500 group-hover:border-stone-300 group-hover:text-amber-600 dark:border-[#262B34] dark:bg-[#101217] dark:text-[#6B7280] dark:group-hover:border-[#353C49] dark:group-hover:text-amber-400/80'
          }`}
        >
          <Icon size={15} strokeWidth={selected ? 2.2 : 1.8} />
        </div>
      )}

      {/* Option Label */}
      <span
        className={`truncate text-xs font-semibold tracking-tight transition-colors ${
          selected
            ? 'text-stone-900 dark:text-[#F9FAFB]'
            : 'text-stone-600 group-hover:text-stone-900 dark:text-[#9CA3AF] dark:group-hover:text-[#F3F4F6]'
        }`}
      >
        {label}
      </span>

      {/* Selection Pill Indicator (Pushed to Far Right) */}
      <div
        aria-hidden="true"
        className={`ml-auto flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
          selected
            ? 'scale-100 border-amber-500 bg-amber-500 text-stone-950 opacity-100'
            : 'scale-75 border-stone-300 bg-stone-100 text-transparent opacity-0 group-hover:opacity-60 dark:border-[#333945] dark:bg-[#101217]'
        }`}
      >
        <Check size={9} strokeWidth={3} />
      </div>
    </button>
  );
}
