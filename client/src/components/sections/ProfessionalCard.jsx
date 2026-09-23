import Badge from '../ui/Badge';

export default function ProfessionalCard({ professional }) {
  return (
    <div className="card text-center overflow-hidden">
      <div className="card-body flex flex-col items-center">
        {/* Profile Image with subtle ring and background fallback */}
        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-forest/10 bg-forest/5">
          <img
            src={professional.imageUrl}
            alt={professional.role}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <Badge variant="neutral" className="mt-4">
          Demo profile
        </Badge>

        <h3 className="mt-2 font-heading font-semibold text-text-primary">
          {professional.role}
        </h3>

        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {professional.bio}
        </p>
      </div>
    </div>
  );
}