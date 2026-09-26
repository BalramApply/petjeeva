import { Instagram, Facebook, Mail, Phone, PawPrint, Heart, ShieldCheck } from 'lucide-react';
import Container from './Container';
import { businessInfo } from '../../data/businessInfo';

const SERVICE_LINKS = [
  { label: 'Pet Training', href: '/#services' },
  { label: 'Pet Walking', href: '/#services' },
  { label: 'Pet Grooming', href: '/#services' },
  { label: 'Preventive Healthcare', href: '/#services' },
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Professionals', href: '/#professionals' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#232730] bg-[#0A0C0F] text-[#9CA3AF] selection:bg-amber-500/20 selection:text-amber-300 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[40rem] rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
      />

      <Container className="py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <a
              href="/"
              className="group inline-flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 text-amber-400 group-hover:scale-105 group-hover:border-amber-400/50 transition-all duration-200">
                <PawPrint size={19} className="transition-transform group-hover:rotate-12" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#F9FAFB]">
                {businessInfo.name}
                <span className="text-amber-400">.</span>
              </span>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF] max-w-sm">
              Professional pet care designed around your pet&apos;s comfort, safety, and everyday routine. Certified grooming, active walking, and preventive wellness.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#232730] bg-[#14171E] text-[#9CA3AF] hover:text-amber-400 hover:border-amber-500/40 hover:bg-[#1A1E27] transition-all duration-200"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#232730] bg-[#14171E] text-[#9CA3AF] hover:text-amber-400 hover:border-amber-500/40 hover:bg-[#1A1E27] transition-all duration-200"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Trust Badge Micro-Card */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#232730] bg-[#12151B] px-3.5 py-2 text-xs text-[#9CA3AF] max-w-fit">
            <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
            <span>Certified & Verified Pet Specialists</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F3F4F6]">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:translate-x-0.5 inline-block transition-all duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F3F4F6]">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:translate-x-0.5 inline-block transition-all duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F3F4F6]">Direct Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-3 rounded-xl border border-[#232730] bg-[#13161C] p-3 text-[#D1D5DB] hover:border-amber-500/40 hover:bg-[#181B23] hover:text-[#F9FAFB] transition-all group"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <Phone size={15} />
              </div>
              <span className="truncate">{businessInfo.phone}</span>
            </a>

            <a
              href={`mailto:${businessInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-[#232730] bg-[#13161C] p-3 text-[#D1D5DB] hover:border-amber-500/40 hover:bg-[#181B23] hover:text-[#F9FAFB] transition-all group"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <Mail size={15} />
              </div>
              <span className="truncate">{businessInfo.email}</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Sub-Footer Bottom Bar */}
      <div className="border-t border-[#1C2028] bg-[#08090C] py-5">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {businessInfo.name}. Crafted with
            <Heart size={12} className="text-amber-500 fill-amber-500" /> for happier pets.
          </p>
          <p className="text-center sm:text-right text-[#4B5563]">
            Demo content shown where real business details are not yet configured.
          </p>
        </Container>
      </div>
    </footer>
  );
}