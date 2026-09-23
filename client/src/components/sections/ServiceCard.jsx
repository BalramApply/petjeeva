import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const TINTS = ['bg-mint/25', 'bg-amber/20', 'bg-forest/10', 'bg-mint/20'];

export default function ServiceCard({ service, index = 0 }) {
  const imageUrl = service.image || (service.icon?.startsWith('http') ? service.icon : null);
  const Icon = !imageUrl ? Icons[service.icon] : null;
  const tint = TINTS[index % TINTS.length];

  return (
    <div className="card flex flex-col overflow-hidden">
      {/* Visual header: Renders the image if available, else falls back to tint + icon */}
      <div className={`aspect-[16/9] w-full flex items-center justify-center overflow-hidden ${!imageUrl ? tint : 'bg-neutral-100'}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={service.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          Icon && <Icon size={48} className="text-forest-dark/70" strokeWidth={1.3} />
        )}
      </div>

      <div className="card-body flex flex-1 flex-col">
        <h3 className="text-h3 font-heading">{service.name}</h3>
        <p className="mt-2 text-sm text-text-secondary">{service.shortDescription}</p>

        <ul className="mt-4 space-y-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-text-primary">
              <Check size={16} className="mt-0.5 shrink-0 text-forest" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-forest">From ₹{service.startingPrice}</p>
            <Badge variant="neutral">Per session</Badge>
          </div>
          <Button variant="outline" href={`/services/${service.id}`}>
            View Service
          </Button>
        </div>
      </div>
    </div>
  );
}