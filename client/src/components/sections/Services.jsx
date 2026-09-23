import Section from '../layout/Section';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  const activeServices = services.filter((s) => s.active);

  return (
    <Section
      id="services"
      dark
      heading="Our services"
      subheading="Only services the business has switched on appear here — everything is admin-configurable."
    >
      <div className="grid sm:grid-cols-2 gap-8">
        {activeServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}