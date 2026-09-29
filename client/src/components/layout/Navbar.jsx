import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, Sun, Moon } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import { businessInfo } from "../../data/businessInfo";
import logo from "./image.png";
import logoWhite from "./whiteLogo.png";

const SERVICE_ITEMS = [
  { label: "Training", href: "/services/training" },
  { label: "Walking", href: "/services/walking" },
  { label: "Grooming", href: "/services/grooming" },
  { label: "Vaccination", href: "/services/wellness" },
  { label: "Pet-registration", href: "/services/pet-registration" },
];

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Parents Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Close dropdown whenever route changes
  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  // Default to 'light' mode unless explicitly saved as 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`relative z-50 bg-white/90 dark:bg-[#0F1115] border-b border-stone-200/80 dark:border-transparent transition-all duration-300 backdrop-blur-md ${
        scrolled ? "py-3 shadow-sm dark:shadow-none" : "py-4 sm:py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo & Identifier + Theme Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <img
              src={theme === "dark" ? logo : logoWhite}
              alt={`${businessInfo.name} Logo`}
              className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-stone-900 dark:text-[#F9FAFB]">
              {businessInfo.name}
            </span>
          </Link>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900 active:scale-95 dark:border-[#232730] dark:bg-[#14171E] dark:text-[#9CA3AF] dark:hover:bg-[#1E222A] dark:hover:text-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-stone-700" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 rounded-full border border-stone-200/80 bg-stone-100/80 dark:border-[#232730] dark:bg-[#14171E]/70 px-4 py-1.5 backdrop-blur-md">
          {LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setServicesOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${
                        isActive
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold"
                          : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 dark:text-[#9CA3AF] dark:hover:text-[#F9FAFB] dark:hover:bg-[#1E222A]"
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 opacity-70 ${
                        servicesOpen ? "rotate-180 opacity-100" : ""
                      }`}
                    />
                  </NavLink>

                  {/* Dropdown Menu */}
                  <div
                    className={`transition-all duration-200 transform absolute left-1/2 -translate-x-1/2 pt-2 top-full min-w-[170px] z-50 ${
                      servicesOpen
                        ? "visible opacity-100 translate-y-0 pointer-events-auto"
                        : "invisible opacity-0 translate-y-1.5 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-stone-200/90 bg-white/95 dark:border-[#232730] dark:bg-[#14171E]/95 shadow-xl shadow-stone-900/5 dark:shadow-black/40 backdrop-blur-lg p-1.5 flex flex-col gap-0.5">
                      {SERVICE_ITEMS.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="rounded-xl px-3.5 py-2 text-xs xl:text-sm font-medium text-stone-700 hover:text-amber-600 hover:bg-amber-500/10 dark:text-[#D1D5DB] dark:hover:text-amber-400 dark:hover:bg-[#1E222A] transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${
                    isActive
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 dark:text-[#9CA3AF] dark:hover:text-[#F9FAFB] dark:hover:bg-[#1E222A]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            href="/book"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold shadow-md shadow-amber-500/20 text-xs xl:text-sm px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Book Free Demo
          </Button>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-stone-100 text-stone-700 hover:text-black hover:border-stone-300 dark:border-[#232730] dark:bg-[#15181F] dark:text-[#D1D5DB] dark:hover:text-white dark:hover:border-[#383E4A] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu Flyout Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] h-[calc(100vh-65px)] bg-white/95 dark:bg-[#0F1115]/95 backdrop-blur-xl border-b border-stone-200 dark:border-[#232730] overflow-y-auto">
          <Container className="pt-6 pb-12 flex flex-col gap-2">
            <div className="flex flex-col space-y-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium border transition-all ${
                      isActive
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                        : "text-stone-700 hover:text-amber-600 hover:bg-stone-100 border-transparent hover:border-stone-200 dark:text-[#D1D5DB] dark:hover:text-amber-400 dark:hover:bg-[#171A21] dark:hover:border-[#262A34]"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-stone-400 dark:text-[#4B5563]" />
                </NavLink>
              ))}
            </div>

            <div className="mt-6 border-t border-stone-200 dark:border-[#232730] pt-6 flex flex-col gap-3">
              <Button
                variant="primary"
                href="/book"
                className="w-full justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold py-3 shadow-lg shadow-amber-500/20"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Demo
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}