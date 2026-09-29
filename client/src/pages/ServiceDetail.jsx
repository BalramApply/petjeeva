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
import ReviewCard from '../components/sections/ReviewCard';
import { services } from '../data/services';
import { reviews } from '../data/reviews';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId && s.active);

  if (!service) {
    return (
      <Section className="py-24 text-center">
        <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-xl shadow-stone-200/50 sm:p-10 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-2xl dark:shadow-black/50">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-500/20 dark:text-amber-400">
            <AlertCircle size={28} />
          </div>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
            Service Unavailable
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm dark:text-[#9CA3AF]">
            That service isn&apos;t available right now or has been temporarily paused for routine schedule updates.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-800 transition-colors hover:bg-amber-500/20 dark:text-amber-300"
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
  const teamForService = reviews.filter((p) =>
    service.professionalRoles?.includes(p.id)
  );

  return (
    <>
      {/* Service Hero Banner */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-stone-50 pt-14 pb-16 transition-colors duration-200 md:pt-20 md:pb-24 dark:border-[#232730] dark:bg-[#0A0C0F]">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <Container className="relative">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 dark:text-[#6B7280]">
            <Link to="/" className="transition-colors hover:text-stone-900 dark:hover:text-[#F3F4F6]">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/#services" className="transition-colors hover:text-stone-900 dark:hover:text-[#F3F4F6]">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="font-medium text-amber-600 dark:text-amber-400">{service.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="amber">{service.category}</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:text-emerald-300">
              <ShieldCheck size={12} /> Fear-Free Certified
            </span>
          </div>

          <h1 className="mt-4 flex items-center gap-3.5 text-3xl font-extrabold leading-[1.12] tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-[#F9FAFB]">
            {Icon && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-600 shadow-inner sm:h-14 sm:w-14 dark:text-amber-400">
                <Icon size={28} />
              </div>
            )}
            <span>{service.name}</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base md:text-lg dark:text-[#9CA3AF]">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              href={`/book?service=${service.id}`}
              className="bg-gradient-to-r from-amber-500 to-orange-500 font-bold text-stone-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
            >
              Book Free Demo
            </Button>
            <Button
              variant="outline"
              href="/#estimator"
              className="border-stone-200 bg-white text-stone-700 shadow-xs hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-[#272B33] dark:bg-[#14171E] dark:text-[#D1D5DB] dark:shadow-none dark:hover:border-[#383F4D] dark:hover:bg-[#1A1E27] dark:hover:text-white"
            >
              Get Price Estimate
            </Button>
          </div>
        </Container>
      </section>

      {/* Who It's For + What We Provide */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Who It's For Card */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 sm:p-8 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-xl dark:shadow-black/40">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Sparkles size={14} />
              <span>Target Companion Profile</span>
            </div>
            <h2 className="mb-3 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl dark:text-[#F9FAFB]">
              Who it&apos;s for
            </h2>
            <p className="text-xs leading-relaxed text-stone-600 sm:text-sm dark:text-[#9CA3AF]">
              {service.whoItsFor}
            </p>
          </div>

          {/* What We Provide Card */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 sm:p-8 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-xl dark:shadow-black/40">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck size={14} />
              <span>Care Standards &amp; Deliverables</span>
            </div>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl dark:text-[#F9FAFB]">
              What we provide
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-xs text-stone-700 sm:text-sm dark:text-[#D1D5DB]">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {service.process.map((step, i) => (
            <div
              key={step}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/30 hover:shadow-md dark:border-[#232730] dark:bg-[#14171E] dark:shadow-lg dark:shadow-black/30 dark:hover:border-[#383F4D]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-sm font-bold text-amber-600 shadow-inner dark:border-amber-500/25 dark:text-amber-400">
                    {i + 1}
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 dark:text-[#6B7280]">
                    STEP 0{i + 1}
                  </span>
                </div>
                <p className="text-xs font-medium leading-relaxed text-stone-700 transition-colors group-hover:text-stone-900 sm:text-sm dark:text-[#D1D5DB] dark:group-hover:text-[#F9FAFB]">
                  {step}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-stone-100 pt-3 text-[11px] text-stone-500 dark:border-[#1F232C] dark:text-[#6B7280]">
                <Clock size={12} className="text-amber-600 dark:text-amber-400/80" />
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
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {teamForService.map((p) => (
              <ReviewCard key={p.id} professional={p} />
            ))}
          </div>
        </Section>
      )}

      {/* Final Call to Action */}
      <Section className="relative overflow-hidden py-16 text-center sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 shadow-xl shadow-stone-200/50 sm:p-12 dark:border-[#232730] dark:bg-[#14171E] dark:shadow-2xl dark:shadow-black/50">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/20 dark:text-amber-300">
            <HeartHandshake size={13} className="text-amber-600 dark:text-amber-400" />
            <span>Ready for personalized pet care?</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl dark:text-[#F9FAFB]">
            Ready to book {service.name.toLowerCase()}?
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-stone-500 dark:text-[#9CA3AF]">Starting at</span>
            <span className="text-2xl font-extrabold text-stone-900 sm:text-3xl dark:text-[#F9FAFB]">
              ₹{service.startingPrice}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              variant="primary"
              href={`/book?service=${service.id}`}
              className="bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3 font-bold text-stone-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
            >
              Book Free Demo
            </Button>
            <Button
              variant="outline"
              href="/#estimator"
              className="border-stone-200 bg-white text-stone-700 shadow-xs hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900 dark:border-[#272B33] dark:bg-[#0F1115] dark:text-[#D1D5DB] dark:shadow-none dark:hover:border-[#383F4D] dark:hover:text-white"
            >
              Estimate Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}