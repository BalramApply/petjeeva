import * as Icons from 'lucide-react';

export default function OptionCard({ label, icon, selected, onClick }) {
  const Icon = icon ? Icons[icon] : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-5 text-sm font-medium transition-colors ${
        selected
          ? 'border-amber bg-amber/10 text-forest-dark'
          : 'border-border bg-surface text-text-primary hover:border-forest/40'
      }`}
    >
      {Icon && <Icon size={22} />}
      {label}
    </button>
  );
}
