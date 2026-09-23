import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from '../ui/Button';
import { businessInfo } from '../../data/businessInfo';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Professionals', href: '/#professionals' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-all duration-300 ${
        scrolled ? 'py-2 shadow-nav' : 'py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="/" className="font-heading text-xl font-bold text-forest">
          {businessInfo.name}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-primary hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" href="/book">
            Book Demo
          </Button>
        </div>

        <button
          className="lg:hidden text-forest"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <Container className="lg:hidden pt-4 pb-2 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 text-text-primary font-medium border-b border-border last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href="/book" className="mt-4 w-full">
            Book a Service
          </Button>
        </Container>
      )}
    </header>
  );
}
