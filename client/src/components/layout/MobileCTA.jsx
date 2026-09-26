import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../../data/businessInfo';

/**
 * Fixed bottom action bar, mobile only. Kept out of the way on
 * desktop where the navbar CTA already covers this job.
 */
export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#232730] bg-[#0F1115]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        {/* Call Quick Action */}
        <a
          href={`tel:${businessInfo.phone}`}
          aria-label="Call PetJeeva now"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#262A34] bg-[#15181F] text-[#D1D5DB] transition-all duration-150 hover:border-amber-500/40 hover:bg-[#1A1E27] hover:text-amber-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Phone size={18} />
        </a>

        {/* WhatsApp Quick Action */}
        <a
          href={getWhatsAppLink()}
          aria-label="Chat with PetJeeva on WhatsApp"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#262A34] bg-[#15181F] text-[#D1D5DB] transition-all duration-150 hover:border-emerald-500/40 hover:bg-[#15231F] hover:text-emerald-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <MessageCircle size={18} />
        </a>

        {/* Primary Booking CTA */}
        <a
          href="/book"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 text-sm font-semibold tracking-wide text-stone-950 shadow-lg shadow-amber-500/20 transition-all duration-150 hover:from-amber-400 hover:to-orange-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <CalendarCheck size={16} />
          <span>Book a Service</span>
        </a>
      </div>
    </div>
  );
}