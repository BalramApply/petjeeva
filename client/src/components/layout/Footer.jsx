import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import Container from './Container';
import { businessInfo } from '../../data/businessInfo';

const SERVICE_LINKS = ['Training', 'Dog Walking', 'Grooming', 'Vaccination & Wellness'];
const QUICK_LINKS = ['Home', 'Services', 'Professionals', 'Gallery', 'About', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/90">
      <Container className="py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-lg font-bold text-white">{businessInfo.name}</p>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Professional pet care designed around your pet's comfort, safety and everyday
            routine.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-mint">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-mint">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/70">
            {QUICK_LINKS.map((label) => (
              <li key={label}>
                <a href="/" className="hover:text-mint">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Services</p>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICE_LINKS.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={16} /> {businessInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> {businessInfo.email}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p>Demo content shown where real business details are not yet configured.</p>
        </Container>
      </div>
    </footer>
  );
}
