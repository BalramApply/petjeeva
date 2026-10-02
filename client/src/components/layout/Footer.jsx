import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  Heart,
  ShieldCheck,
  Sun,
  Moon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { businessInfo } from "../../data/businessInfo";
import logoBlack from "../../assets/Blacklogo.png";
import logoWhite from "../../assets/whiteLogo.png";

// Clean inline SVGs for brand icons not present in standard Lucide sets
function YoutubeIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function RedditIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .868.182 1.17.476 1.162-.825 2.766-1.372 4.54-1.472l.9-4.22 3.125.656a1.256 1.256 0 0 1 1.493-.942zm-8.033 6.953c-.63 0-1.14.51-1.14 1.14s.51 1.14 1.14 1.14 1.14-.51 1.14-1.14c0-.63-.51-1.14-1.14-1.14zm6.046 0c-.63 0-1.14.51-1.14 1.14s.51 1.14 1.14 1.14 1.14-.51 1.14-1.14c0-.63-.51-1.14-1.14-1.14zm-4.743 3.65c-.09 0-.18.033-.244.098-.135.135-.135.354 0 .489.84.84 2.21.84 3.05 0 .135-.135.135-.354 0-.489a.345.345 0 0 0-.488 0c-.57.57-1.503.57-2.073 0a.344.344 0 0 0-.245-.098z" />
    </svg>
  );
}

const SERVICE_LINKS = [
  { label: 'Pet Training', href: '/services' },
  { label: 'Pet Walking', href: '/services' },
  { label: 'Pet Grooming', href: '/services' },
  { label: 'Vaccination', href: '/services' },
  { label: 'Pet Registration', href: '/services/pet-registration' },
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Professionals', href: '/professionals' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <footer className="relative border-t border-stone-200 bg-stone-50 text-stone-600 selection:bg-amber-500/20 selection:text-amber-800 transition-colors duration-200 overflow-hidden dark:border-[#232730] dark:bg-[#0A0C0F] dark:text-[#9CA3AF] dark:selection:text-amber-300">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[40rem] rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
      />

      <Container className="py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col justify-between min-w-0">
          <div>
            {/* Brand Logo + Theme Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="group inline-flex min-w-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <img
                  src={theme === "dark" ? logoBlack : logoWhite}
                  alt={`${businessInfo.name} Logo`}
                  className="h-9 w-9 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
                />

                <span className="truncate font-heading text-xl font-bold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
                  {businessInfo.name}
                </span>
              </Link>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-100 text-stone-600 transition-all hover:bg-stone-200 hover:text-stone-900 active:scale-95 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:hover:bg-[#1E222A] dark:hover:text-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {theme === "dark" ? (
                  <Sun size={17} className="text-amber-400" />
                ) : (
                  <Moon size={17} className="text-stone-700" />
                )}
              </button>
            </div>

            {/* Brand Description */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600 dark:text-[#9CA3AF]">
              Professional pet care designed around your pet&apos;s comfort,
              safety, and everyday routine. Certified grooming, active walking,
              and preventive wellness.
            </p>

            {/* Social Icons (Instagram, Facebook, YouTube, Reddit) */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/petjeeva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition-all duration-200 hover:border-amber-500/40 hover:bg-stone-50 hover:text-amber-600 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#1A1E27] dark:hover:text-amber-400"
              >
                <Instagram size={17} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition-all duration-200 hover:border-amber-500/40 hover:bg-stone-50 hover:text-amber-600 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#1A1E27] dark:hover:text-amber-400"
              >
                <Facebook size={17} />
              </a>

              <a
                href="www.youtube.com/@petJeeva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition-all duration-200 hover:border-amber-500/40 hover:bg-stone-50 hover:text-amber-600 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#1A1E27] dark:hover:text-amber-400"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>

              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-xs transition-all duration-200 hover:border-amber-500/40 hover:bg-stone-50 hover:text-amber-600 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#1A1E27] dark:hover:text-amber-400"
              >
                <RedditIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 inline-flex max-w-fit items-center gap-2 rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs text-stone-700 shadow-xs dark:border-[#232730] dark:bg-[#12151B] dark:text-[#9CA3AF] dark:shadow-none">
            <ShieldCheck
              size={16}
              className="shrink-0 text-emerald-600 dark:text-emerald-400"
            />
            <span>Certified & Verified Pet Specialists</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-[#F3F4F6]">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 hover:translate-x-0.5 inline-block transition-all duration-150 dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-[#F3F4F6]">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 hover:translate-x-0.5 inline-block transition-all duration-150 dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-[#F3F4F6]">Direct Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3 text-stone-700 shadow-xs hover:border-amber-500/40 hover:bg-stone-50 hover:text-stone-900 transition-all group dark:border-[#232730] dark:bg-[#13161C] dark:text-[#D1D5DB] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#181B23] dark:hover:text-[#F9FAFB]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 group-hover:bg-amber-500/20 transition-colors dark:text-amber-400">
                <Phone size={15} />
              </div>
              <span className="truncate">{businessInfo.phone}</span>
            </a>

            <a
              href={`mailto:${businessInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3 text-stone-700 shadow-xs hover:border-amber-500/40 hover:bg-stone-50 hover:text-stone-900 transition-all group dark:border-[#232730] dark:bg-[#13161C] dark:text-[#D1D5DB] dark:shadow-none dark:hover:border-amber-500/40 dark:hover:bg-[#181B23] dark:hover:text-[#F9FAFB]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 group-hover:bg-amber-500/20 transition-colors dark:text-amber-400">
                <Mail size={15} />
              </div>
              <span className="truncate">{businessInfo.email}</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Sub-Footer Bottom Bar */}
      <div className="border-t border-stone-200 bg-stone-100 py-5 dark:border-[#1C2028] dark:bg-[#08090C]">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 dark:text-[#6B7280]">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {businessInfo.name}. Crafted with
            <Heart size={12} className="text-amber-500 fill-amber-500" /> for happier pets.
          </p>
          <p className="text-center sm:text-right text-stone-400 dark:text-[#4B5563]">
            Demo content shown where real business details are not yet configured.
          </p>
        </Container>
      </div>
    </footer>
  );
}