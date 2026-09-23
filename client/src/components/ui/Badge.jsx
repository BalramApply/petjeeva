const VARIANTS = {
  mint: 'badge-mint',
  amber: 'badge-amber',
  neutral: 'badge-neutral',
};

export default function Badge({ variant = 'neutral', icon: Icon, children, className = '' }) {
  return (
    <span className={`${VARIANTS[variant] || VARIANTS.neutral} ${className}`}>
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}
