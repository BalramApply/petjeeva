import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function ServiceCard({ service }) {
  const imageUrl =
    service.image ||
    (service.icon?.startsWith('http') ? service.icon : null);

  const Icon = !imageUrl ? Icons[service.icon] : null;

  // Check if this card represents pet registration
  const isPetRegistration =
    service.id === 'pet-registration' ||
    service.slug === 'pet-registration' ||
    service.name?.toLowerCase().includes('pet registration');

  const targetHref = isPetRegistration
    ? '/services/pet-registration'
    : `/services/${service.id}`;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 dark:border-[#232730] bg-white dark:bg-[#14171E] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 dark:hover:border-[#383F4D] shadow-sm hover:shadow-md dark:shadow-none">
      {/* Clickable card overlay so clicking anywhere redirects */}
      <a href={targetHref} className="absolute inset-0 z-10" aria-label={service.name} />

      {/* Image / Icon */}
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-stone-100 dark:bg-[#0F1115]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 dark:from-[#1A1D24] dark:to-[#101217]">
            {Icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Icon size={26} strokeWidth={1.8} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-bold tracking-tight text-stone-900 dark:text-[#F9FAFB] transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-300">
          {service.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
          {service.shortDescription}
        </p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-4">
          <div className="shrink-0">
            <span className="block text-[10px] text-stone-500 dark:text-[#6B7280]">
              Starting at
            </span>

            <span className="text-lg font-extrabold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
              {!isNaN(Number(service.startingPrice)) && '₹'}
              {service.startingPrice}
            </span>
          </div>

          <Button
            variant="outline"
            href={targetHref}
            className="relative z-20 shrink-0 h-9 rounded-lg border border-stone-200 dark:border-[#343A46] bg-stone-50 dark:bg-[#191C23] px-3 text-xs font-semibold text-stone-700 dark:text-[#E5E7EB] transition-all duration-200 hover:border-amber-500/50 hover:bg-stone-100 dark:hover:bg-[#20242D] hover:text-stone-950 dark:hover:text-white"
          >
            <span className="inline-flex flex-row items-center gap-1.5 whitespace-nowrap">
              <span>More Details</span>
              <ArrowRight size={14} className="shrink-0" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}