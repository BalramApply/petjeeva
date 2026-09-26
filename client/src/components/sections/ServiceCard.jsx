import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function ServiceCard({ service }) {
  const imageUrl =
    service.image ||
    (service.icon?.startsWith('http') ? service.icon : null);

  const Icon = !imageUrl ? Icons[service.icon] : null;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#232730] bg-[#14171E] transition-all duration-300 hover:-translate-y-1 hover:border-[#383F4D]">
      {/* Image / Icon */}
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#0F1115]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1A1D24] to-[#101217]">
            {Icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Icon size={26} strokeWidth={1.8} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-bold tracking-tight text-[#F9FAFB] transition-colors group-hover:text-amber-300">
          {service.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#9CA3AF]">
          {service.shortDescription}
        </p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-4">
          <div>
            <span className="block text-[10px] text-[#6B7280]">
              Starting at
            </span>

            <span className="text-lg font-extrabold tracking-tight text-[#F9FAFB]">
              ₹{service.startingPrice}
            </span>
          </div>

<Button
  variant="outline"
  href={`/services/${service.id}`}
  className="inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#343A46] bg-[#191C23] px-3 text-xs font-semibold text-[#E5E7EB] transition-all duration-200 hover:border-amber-500/50 hover:bg-[#20242D] hover:text-white"
>
  <span>More Details</span>
</Button>

        </div>
      </div>
    </div>
  );
}