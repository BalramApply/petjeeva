import Section from '../layout/Section';
import ProfessionalCard from './ProfessionalCard';
import { professionals } from '../../data/professionals';

export default function Professionals() {
  return (
    <Section
      id="professionals"
      heading="Meet the team"
      subheading="Demo profiles shown for now — real names, experience and certifications are added by the business in Admin › Professionals."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>
    </Section>
  );
}