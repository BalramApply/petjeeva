import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Section from '../layout/Section';
import ProfessionalCard from './ProfessionalCard';
import { professionals } from '../../data/professionals';

export default function Professionals() {
  return (
    <Section
      id="professionals"
      heading="Meet Our Certified Caregivers"
      subheading="Demo profiles shown for now — verified credentials, veterinary endorsements, and experience records are managed live in PetJeeva Admin."
    >
      {/* Vetting & Quality Guarantee Banner */}
      <div className="mb-8 rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5 dark:border-[#232730] dark:bg-[#14171E]/70 dark:shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-600 font-semibold dark:text-amber-400">
            <Sparkles size={15} />
            <span>The Top 2% Pet Care Specialists Standard</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-600 dark:text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              100% Identity &amp; Background Cleared
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-amber-600 dark:text-amber-400" />
              Canine &amp; Feline CPR Certified
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Professionals Grid */}
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>
    </Section>
  );
}