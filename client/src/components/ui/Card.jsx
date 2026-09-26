export default function Card({ image, imageAlt = '', children, className = '' }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[#232730] bg-[#14171E] shadow-xl shadow-black/40 transition-all duration-300 hover:border-[#383F4D] hover:shadow-2xl ${className}`}
    >
      {/* Subtle ambient light on card header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-amber-500/5 blur-3xl transition-opacity duration-300 group-hover:bg-amber-500/10"
      />

      {/* Optional Card Image Banner */}
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0F1115]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle bottom vignette to blend image into the dark card surface */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#14171E] via-[#14171E]/40 to-transparent pointer-events-none"
          />
        </div>
      )}

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 text-[#9CA3AF]">
        {children}
      </div>
    </div>
  );
}