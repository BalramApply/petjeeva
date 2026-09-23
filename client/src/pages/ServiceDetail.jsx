import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProfessionalCard from '../components/sections/ProfessionalCard';
import { services } from '../data/services';
import { professionals } from '../data/professionals';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId && s.active);

  if (!service) {
    return (
      <Section>
        <p className="text-text-secondary">
          That service isn't available right now.{' '}
          <Link to="/" className="text-forest underline">
            Back to home
          </Link>
        </p>
      </Section>
    );
  }

  const Icon = Icons[service.icon];
  const teamForService = professionals.filter((p) =>
    service.professionalRoles?.includes(p.id)
  );

  return (
    <>
      {/* Service Hero */}
      <section className="bg-forest-dark text-white">
        <Container className="py-16 md:py-20">
          <Badge variant="mint">{service.category}</Badge>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-white flex items-center gap-3">
            {Icon && <Icon size={32} />}
            {service.name}
          </h1>
          <p className="mt-4 max-w-lg text-white/80">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" href={`/book?service=${service.id}`}>
              Book This Service
            </Button>
            <Button variant="outline" href="/#estimator" className="!border-white !text-white hover:!bg-white hover:!text-forest-dark">
              Get Price Estimate
            </Button>
          </div>
        </Container>
      </section>

      {/* Who It's For + What We Provide */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-h3 font-heading mb-3">Who it's for</h2>
            <p className="text-text-secondary">{service.whoItsFor}</p>
          </div>
          <div>
            <h2 className="text-h3 font-heading mb-3">What we provide</h2>
            <ul className="space-y-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-text-primary">
                  <Check size={18} className="mt-0.5 shrink-0 text-forest" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section dark heading="How this service works">
        <div className="grid sm:grid-cols-3 gap-8">
          {service.process.map((step, i) => (
            <div key={step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-heading font-semibold text-white">
                {i + 1}
              </div>
              <p className="text-white/90">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team for this service */}
      {teamForService.length > 0 && (
        <Section
          heading="Who you'll meet"
          subheading="Demo profiles — real names, experience and certifications are added by the business in Admin › Professionals."
        >
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
            {teamForService.map((p) => (
              <ProfessionalCard key={p.id} professional={p} />
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section className="text-center">
        <h2 className="text-h2">
          Ready to book {service.name.toLowerCase()}?
        </h2>
        <p className="mt-3 text-text-secondary">
          From <span className="font-semibold text-forest">₹{service.startingPrice}</span>{' '}
          <Badge variant="neutral">Demo pricing</Badge>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="primary" href={`/book?service=${service.id}`}>
            Book This Service
          </Button>
        </div>
      </Section>
    </>
  );
}
