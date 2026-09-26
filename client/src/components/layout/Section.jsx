import Container from './Container';

/**
 * Consistent vertical rhythm + optional heading for PetJeeva.
 * Uses a warm brand accent indicator next to the heading
 * to signal section hierarchy with modern typography and dark surfaces.
 */
export default function Section({
  id,
  dark = false,
  heading,
  subheading,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 transition-colors duration-200 selection:bg-amber-500/20 selection:text-amber-300 ${
        dark
          ? 'bg-[#0A0C0F] border-y border-[#1D212A]'
          : 'bg-[#0F1115]'
      } ${className}`}
    >
      <Container>
        {heading && (
          <div className="mb-10 sm:mb-14 max-w-2xl">
            {/* Brand Accent Indicator */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/50" />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">
              {heading}
            </h2>

            {/* Subheading / Description */}
            {subheading && (
              <p
                className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
                  dark ? 'text-[#9CA3AF]' : 'text-[#8A92A0]'
                }`}
              >
                {subheading}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}