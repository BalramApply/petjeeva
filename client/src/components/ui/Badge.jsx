const VARIANTS = {
  // Fresh/Healthcare accent (mint/emerald)
  mint: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300',
  // Primary warm PetJeeva accent (amber/orange)
  amber: 'border-amber-500/25 bg-amber-500/10 text-amber-300',
  // Standard elevated dark neutral surface
  neutral: 'border-[#262A34] bg-[#14171E] text-[#9CA3AF]',
  // Subtle glowing brand highlight
  brand: 'border-amber-500/40 bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-200',
};

export default function Badge({
  variant = 'neutral',
  icon: Icon,
  children,
  className = '',
}) {
  const variantStyles = VARIANTS[variant] || VARIANTS.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide backdrop-blur-sm transition-colors select-none ${variantStyles} ${className}`}
    >
      {Icon && <Icon size={13} className="shrink-0" strokeWidth={2} />}
      <span>{children}</span>
    </span>
  );
}