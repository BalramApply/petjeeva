import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import Section from '../layout/Section';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  const activeServices = services.filter((s) => s.active);

  return (
    <Section
      id="services"
      dark
      heading="Comprehensive In-Home Care Services"
      subheading="Tailored care routines designed around your companion's specific temperaments, breed specifications, and daily health requirements."
    >
      {/* Quality Standards & Trust Banner */}
      <div className="mb-10 rounded-2xl border border-[#232730] bg-[#14171E]/60 p-4 sm:p-5 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-semibold tracking-wide">
            <Sparkles size={15} />
            <span>The PetJeeva Clinical &amp; Ethical Guarantee</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              100% Fear-Free Handling
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake size={14} className="text-amber-400" />
              Transparent Pricing &amp; Certified Caregivers
            </span>
          </div>
        </div>
      </div>

      {/* Services Grid or Clean Empty State */}
      {activeServices.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {activeServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-[#232730] bg-[#14171E] p-10 text-center shadow-xl">
          <p className="text-sm text-[#9CA3AF]">
            Services are currently being updated. Please check back shortly or reach out via WhatsApp concierge.
          </p>
        </div>
      )}
    </Section>
  );
}