import Container from './Container';

/**
 * Consistent vertical rhythm + optional heading.
 * Uses a short accent bar next to the heading instead of an
 * all-caps eyebrow label — signals "new section" without
 * implying the content is a numbered sequence.
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
    <section id={id} className={`section ${dark ? 'section-dark' : ''} ${className}`}>
      <Container>
        {heading && (
          <div className="mb-10 max-w-2xl">
            <span className="section-heading-accent" />
            <h2 className="text-h2">{heading}</h2>
            {subheading && (
              <p className={`mt-3 text-base ${dark ? 'text-white/80' : 'text-text-secondary'}`}>
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
