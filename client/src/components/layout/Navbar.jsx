import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import { businessInfo } from "../../data/businessInfo";
import logo from "./image.png";

// Updated from /#section to separate standard URLs
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Professionals", href: "/professionals" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
  className={`relative z-50 bg-[#0F1115] transition-all duration-300 ${
    scrolled ? "py-3" : "py-4 sm:py-5"
  }`}
>
      <Container className="flex items-center justify-between">
        {/* Brand Logo & Identifier */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
        >
          <img
            src={logo}
            alt={`${businessInfo.name} Logo`}
            className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-heading text-xl font-bold tracking-tight text-[#F9FAFB]">
            {businessInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 rounded-full border border-[#232730] bg-[#14171E]/70 px-4 py-1.5 backdrop-blur-md">
          {LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${
                  isActive
                    ? "bg-amber-500/10 text-amber-400 font-semibold"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1E222A]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
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
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[#232730] bg-[#15181F] text-[#D1D5DB] hover:text-white hover:border-[#383E4A] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu Flyout Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] h-[calc(100vh-65px)] bg-[#0F1115]/95 backdrop-blur-xl border-b border-[#232730] overflow-y-auto">
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
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        : "text-[#D1D5DB] hover:text-amber-400 hover:bg-[#171A21] border-transparent hover:border-[#262A34]"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-[#4B5563]" />
                </NavLink>
              ))}
            </div>

            <div className="mt-6 border-t border-[#232730] pt-6 flex flex-col gap-3">
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