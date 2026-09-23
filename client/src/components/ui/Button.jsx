import { forwardRef } from 'react';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

/**
 * Shared button. Renders a <button> by default, or an <a> when `href` is passed
 * (e.g. for WhatsApp / tel: links) so styling stays identical either way.
 */
const Button = forwardRef(function Button(
  { variant = 'primary', href, icon: Icon, children, className = '', ...props },
  ref
) {
  const classes = `${VARIANTS[variant] || VARIANTS.primary} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {Icon && <Icon size={18} />}
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
});

export default Button;
