import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import {
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  HeartHandshake,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
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
      <Section className="py-24 text-center">
        <div className="mx-auto max-w-md rounded-3xl border border-[#232730] bg-[#14171E] p-8 sm:p-10 shadow-2xl shadow-black/50">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
            <AlertCircle size={28} />
          </div>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-[#F9FAFB]">
            Service Unavailable
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            That service isn&apos;t available right now or has been temporarily paused for routine schedule updates.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <span>Return to Home</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  const Icon = Icons[service.icon];
  const teamForService = professionals.filter((p) =>
    service.professionalRoles?.includes(p.id)
  );

  return (
    <>
      {/* Service Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#232730] bg-[#0A0C0F] pt-14 pb-16 md:pt-20 md:pb-24">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <Container className="relative">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#6B7280]">
            <Link to="/" className="hover:text-[#F3F4F6] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/#services" className="hover:text-[#F3F4F6] transition-colors">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-amber-400 font-medium">{service.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="amber">{service.category}</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              <ShieldCheck size={12} /> Fear-Free Certified
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F9FAFB] leading-[1.12] flex items-center gap-3.5">
            {Icon && (
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-inner">
                <Icon size={28} />
              </div>
            )}
            <span>{service.name}</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              href={`/book?service=${service.id}`}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book Free Demo
            </Button>
            <Button
              variant="outline"
              href="/#estimator"
              className="border-[#272B33] bg-[#14171E] text-[#D1D5DB] hover:border-[#383F4D] hover:text-white hover:bg-[#1A1E27]"
            >
              Get Price Estimate
            </Button>
          </div>
        </Container>
      </section>

      {/* Who It's For + What We Provide */}
      <Section className="py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Who It's For Card */}
          <div className="rounded-3xl border border-[#232730] bg-[#14171E] p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles size={14} />
              <span>Target Companion Profile</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F9FAFB] mb-3">
              Who it&apos;s for
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              {service.whoItsFor}
            </p>
          </div>

          {/* What We Provide Card */}
          <div className="rounded-3xl border border-[#232730] bg-[#14171E] p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <ShieldCheck size={14} />
              <span>Care Standards &amp; Deliverables</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F9FAFB] mb-4">
              What we provide
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-xs sm:text-sm text-[#D1D5DB]">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Step-by-Step Process */}
      <Section dark heading="How this service works" subheading="Transparent, stress-free care from scheduled arrival to visit wrap-up.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {service.process.map((step, i) => (
            <div
              key={step}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#232730] bg-[#14171E] p-6 shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#383F4D]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400 font-bold text-sm shadow-inner">
                    {i + 1}
                  </div>
                  <span className="text-[11px] font-semibold text-[#6B7280]">
                    STEP 0{i + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#D1D5DB] group-hover:text-[#F9FAFB] transition-colors">
                  {step}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1F232C] flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                <Clock size={12} className="text-amber-400/80" />
                <span>Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team for this service */}
      {teamForService.length > 0 && (
        <Section
          heading="Who you'll meet"
          subheading="Certified handlers with veterinary-grade vetting, CPR training, and positive handling certifications."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamForService.map((p) => (
              <ProfessionalCard key={p.id} professional={p} />
            ))}
          </div>
        </Section>
      )}

      {/* Final Call to Action */}
      <Section className="relative overflow-hidden py-16 sm:py-24 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-2xl rounded-3xl border border-[#232730] bg-[#14171E] p-8 sm:p-12 shadow-2xl shadow-black/50">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
            <HeartHandshake size={13} className="text-amber-400" />
            <span>Ready for personalized pet care?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F9FAFB]">
            Ready to book {service.name.toLowerCase()}?
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-[#9CA3AF]">Starting at</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB]">
              ₹{service.startingPrice}
            </span>
            <Badge variant="neutral" className="text-[10px]">
              Per session
            </Badge>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              variant="primary"
              href={`/book?service=${service.id}`}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold px-7 py-3 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book This Service
            </Button>
            <Button
              variant="outline"
              href="/#estimator"
              className="border-[#272B33] bg-[#0F1115] text-[#D1D5DB] hover:border-[#383F4D] hover:text-white"
            >
              Estimate Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}