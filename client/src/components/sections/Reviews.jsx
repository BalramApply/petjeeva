import { Star, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import Section from '../layout/Section';
import ReviewCard from './ReviewCard';
import { reviews } from '../../data/reviews';

export default function Reviews() {
  return (
    <Section
      id="reviews"
      heading="Loved by 5,000+ Pets & Parents"
      subheading="Real experiences from families using PetJeeva for at-home training, calm grooming, daily exercise walks, and stress-free vaccinations."
    >
      {/* Vetting & Quality Guarantee Banner */}
      <div className="mb-8 rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-[#232730] dark:bg-[#14171E]/70 dark:shadow-none sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-semibold text-amber-600 dark:text-amber-400">
            <Sparkles size={16} />
            <div className="flex items-center gap-1.5">
              <span className="flex items-center text-amber-500">
                <Star size={14} className="fill-amber-400 text-amber-400 mr-1" />
                4.9/5 Rating
              </span>
              <span className="text-stone-400 dark:text-stone-600">•</span>
              <span>100% Genuine Pet Parent Reviews</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-600 dark:text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              Fear-Free &amp; Zero-Sedation Handlers
            </span>
            {/* <span className="flex items-center gap-1.5">
              <HeartHandshake size={14} className="text-amber-600 dark:text-amber-400" />
              GPS &amp; Live Digital Health Records
            </span> */}
          </div>
        </div>
      </div>

      {/* Responsive Reviews Grid */}
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Section>
  );
}