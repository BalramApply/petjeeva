import { MessageCircle, Phone } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../../data/businessInfo';

/**
 * Fixed bottom action bar, mobile only. Kept out of the way on
 * desktop where the navbar CTA already covers this job.
 */
export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border px-4 py-3 flex items-center gap-2 shadow-nav">
      <a
        href={`tel:${businessInfo.phone}`}
        aria-label="Call now"
        className="btn-outline !px-3 !py-2.5"
      >
        <Phone size={18} />
      </a>
      <a
        href={getWhatsAppLink()}
        aria-label="Chat on WhatsApp"
        className="btn-outline !px-3 !py-2.5"
      >
        <MessageCircle size={18} />
      </a>
      <a href="/book" className="btn-primary flex-1">
        Book a Service
      </a>
    </div>
  );
}
