import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 text-left shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-[#232730] dark:bg-[#14171E] dark:shadow-xl dark:shadow-black/40 dark:hover:border-amber-500/40 dark:hover:shadow-2xl sm:p-7">
      {/* Ambient background hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 -z-10 h-44 w-44 rounded-full bg-amber-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-amber-500/10"
      />

      <div>
        {/* Top Header: Service Tag & Star Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-amber-700 dark:border-amber-500/20 dark:text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {review.service} • {review.highlight}
          </span>

          {/* 5-star rating */}
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>

        {/* Review Title with Quote icon */}
        <div className="mt-4 flex items-start gap-2">
          <Quote
            size={18}
            className="mt-1 shrink-0 rotate-180 text-amber-500/50 dark:text-amber-400/40"
          />
          <h4 className="font-heading text-base font-bold leading-snug tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 dark:text-[#F9FAFB] dark:group-hover:text-amber-300">
            &ldquo;{review.title}&rdquo;
          </h4>
        </div>

        {/* Testimonial text */}
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
          {review.comment}
        </p>
      </div>

      {/* User Info & Pet Parent Footer */}
      <div className="mt-6 border-t border-stone-100 pt-4 dark:border-[#1F232C]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* User or pet caregiver avatar */}
            <div className="relative">
              <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-amber-500/40 bg-stone-100 p-0.5 shadow-sm dark:border-amber-500/30 dark:bg-[#0F1115]">
                <img
                  src={review.author.avatarUrl}
                  alt={review.author.name}
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover select-none"
                />
              </div>
              {review.verifiedBooking && (
                <div
                  title="Verified Pet Parent Booking"
                  className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-emerald-500 text-white dark:border-[#14171E] dark:text-stone-950"
                >
                  <ShieldCheck size={10} strokeWidth={3} />
                </div>
              )}
            </div>

            {/* Author and pet details */}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-900 dark:text-white">
                  {review.author.name}
                </span>
                <span className="text-[10px] text-stone-400 dark:text-stone-500">
                  • {review.date}
                </span>
              </div>
              <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400/90">
                Parent to {review.author.petName}{' '}
                <span className="text-stone-500 dark:text-stone-400 font-normal">
                  ({review.author.petBreed})
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Verification Guarantee badge */}
        <div className="mt-3 flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 size={12} className="shrink-0" />
          <span>Verified PetJeeva In-Home Service</span>
        </div>
      </div>
    </div>
  );
}