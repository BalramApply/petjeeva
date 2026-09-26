import { forwardRef } from 'react';

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

const VARIANTS = {
  // Primary brand warm CTA: Amber-to-orange gradient with soft glow
  primary:
    'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 px-5 py-2.5 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-amber-400',

  // Secondary elevated dark button: Calm secondary actions
  secondary:
    'bg-[#1C202A] text-[#F3F4F6] border border-[#2B303C] px-5 py-2.5 hover:bg-[#242936] hover:border-[#383E4C] hover:text-white active:scale-[0.98] focus-visible:ring-amber-500/60',

  // Outline dark button: Elevated translucent surface with specular border
  outline:
    'border border-[#272B33] bg-[#14171E]/80 text-[#E5E7EB] px-5 py-2.5 hover:border-[#383F4D] hover:bg-[#1A1E27] hover:text-[#F9FAFB] active:scale-[0.98] focus-visible:ring-amber-500/60',

  // Ghost minimal button: Low emphasis / text links with soft background hover
  ghost:
    'text-[#9CA3AF] px-3.5 py-2 hover:bg-[#1A1D24] hover:text-[#F3F4F6] active:scale-[0.98] focus-visible:ring-amber-500/50',
};

/**
 * Shared button for PetJeeva.
 * Renders a <button> by default, or an <a> when `href` is passed
 * (e.g. for WhatsApp / tel: / routing links) with identical dark-mode styling.
 */
const Button = forwardRef(function Button(
  { variant = 'primary', href, icon: Icon, children, className = '', ...props },
  ref
) {
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const classes = `${BASE_STYLES} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {Icon && <Icon size={17} className="shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button ref={ref} type={props.type || 'button'} className={classes} {...props}>
      {Icon && <Icon size={17} className="shrink-0" />}
      <span>{children}</span>
    </button>
  );
});

export default Button;