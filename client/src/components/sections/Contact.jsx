import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Send,
  Heart,
  ChevronDown,
  Dog,
  Cat,
  HelpCircle,
  Copy,
  Check,
  Search,
  ExternalLink,
  Info,
  PhoneForwarded,
  Phone
} from 'lucide-react';

const CONTACT_CHANNELS = [
  {
    id: 'whatsapp',
    title: 'Instant WhatsApp Concierge',
    desc: 'Chat directly with care coordinators for swift answers and walk scheduling.',
    value: '+91 73038 00789',
    display: '+91 73038 00789',
    type: 'whatsapp',
    badge: 'Response in ~5 mins',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400 dark:border-emerald-500/20',
    actionText: 'Message on WhatsApp'
  },
  {
    id: 'email',
    title: 'Care Concierge Email',
    desc: 'Detailed behavior records, vet report histories, or corporate inquiries.',
    value: 'petjeeva24x7@gmail.com',
    display: 'petjeeva24x7@gmail.com',
    type: 'email',
    badge: 'Same-day Reply',
    badgeClass: 'bg-orange-500/10 text-orange-700 border-orange-500/30 dark:text-orange-300 dark:border-orange-500/20',
    actionText: 'Send Email'
  }
];


// Sample active serviceable hubs in major metros
const ACTIVE_PINCODES = [
  '110001', '110021', '110048', '110070', '122001', '122002', '122018',
  '400050', '400053', '400067', '400001', '560001', '560034', '560038',
  '560066', '500034', '500081', '600028', '700019'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'dog',
    breed: '',
    petAge: '',
    serviceInterest: 'Dog & Cat Training',
    contactMethod: 'whatsapp',
    timeSlot: 'Morning (9:00 AM – 12:00 PM)',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState(null);

  const [expandedFaq, setExpandedFaq] = useState(0);

  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid contact phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.petName.trim()) {
      errors.petName = 'Pet companion name is required';
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopy = (text, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedChannel(id);
      setTimeout(() => setCopiedChannel(null), 2000);
    }
  };

  const checkPincode = (e) => {
    e.preventDefault();
    const cleaned = pincodeInput.trim();
    if (!cleaned) return;

    if (
      ACTIVE_PINCODES.includes(cleaned) ||
      cleaned.startsWith('110') ||
      cleaned.startsWith('122') ||
      cleaned.startsWith('560') ||
      cleaned.startsWith('400')
    ) {
      setPincodeStatus('available');
    } else {
      setPincodeStatus('waitlist');
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-white text-stone-600 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-800 transition-colors duration-200 dark:bg-[#0F1115] dark:text-[#9CA3AF] dark:selection:text-amber-300"
    >
      {/* SECTION 1: Hero Header */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-3xl"
        />

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm dark:border-amber-500/20 dark:text-amber-300">
  <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
  <span>Here to Help You and Your Pet</span>
</div>

<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] dark:text-[#F9FAFB]">
  We Are Here For You <br className="hidden sm:inline" />
  <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-amber-200">
    And Your Pet.
  </span>
</h1>

<p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto dark:text-[#9CA3AF]">
  Have questions about training, booking a dog walk, gentle grooming, or home vet visits? Our friendly team is always ready to help.
</p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-medium text-stone-700 dark:text-[#D1D5DB]">
            <span className="flex items-center gap-1.5 bg-stone-50 px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm dark:bg-[#14171E] dark:border-[#232730]">
              <Clock size={14} className="text-emerald-600 dark:text-emerald-400" />
              Average WhatsApp reply: &lt; 8 mins
            </span>
            <span className="flex items-center gap-1.5 bg-stone-50 px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm dark:bg-[#14171E] dark:border-[#232730]">
              <ShieldCheck size={14} className="text-amber-600 dark:text-amber-400" />
              Zero-obligation consultations
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Contact Channels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CONTACT_CHANNELS.map((ch) => {
            const isCopied = copiedChannel === ch.id;
            return (
              <div
                key={ch.id}
                className="bg-stone-50 rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between group transition-all duration-200 hover:border-stone-300 hover:-translate-y-0.5 dark:bg-[#14171E] dark:border-[#232730] dark:shadow-xl dark:shadow-black/40 dark:hover:border-[#383E4C]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${ch.badgeClass}`}>
                      {ch.badge}
                    </span>
                    <button
                      onClick={() => handleCopy(ch.value, ch.id)}
                      className="text-stone-400 hover:text-stone-900 p-1.5 rounded-lg hover:bg-stone-200/60 transition-colors dark:text-[#6B7280] dark:hover:text-[#F3F4F6] dark:hover:bg-[#1A1E27]"
                      title="Copy detail"
                      type="button"
                    >
                      {isCopied ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 tracking-tight dark:text-[#F9FAFB]">
                    {ch.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed dark:text-[#9CA3AF]">
                    {ch.desc}
                  </p>

                  <div className="pt-1 text-sm font-extrabold text-stone-900 tracking-tight dark:text-[#F3F4F6]">
                    {ch.display}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-200 dark:border-[#232730]">
                  {ch.type === 'whatsapp' ? (
                    <a
                      href={`https://wa.me/${ch.value.replace(/[^0-9]/g, '')}?text=Hello%20PetJeeva,%20I%20would%20like%20to%20inquire%20about%20care%20for%20my%20pet.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10 active:scale-[0.98]"
                    >
                      <MessageCircle size={15} />
                      <span>{ch.actionText}</span>
                    </a>
                  ) : ch.type === 'email' ? (
                    <a
                      href={`mailto:${ch.value}?subject=PetJeeva%20Inquiry`}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-stone-100 hover:border-stone-300 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-stone-200 shadow-xs active:scale-[0.98] dark:bg-[#181C24] dark:hover:bg-[#1E232E] dark:hover:border-[#383F4E] dark:text-[#E5E7EB] dark:border-[#262A34] dark:shadow-none"
                    >
                      <Mail size={15} className="text-amber-600 dark:text-amber-400" />
                      <span>{ch.actionText}</span>
                    </a>
                  ) : (
                    <a
                      href={`tel:${ch.value.replace(/[^0-9+]/g, '')}`}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border active:scale-[0.98] ${
                        ch.id === 'emergency'
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 hover:bg-rose-500/20 hover:border-rose-500/50 dark:text-rose-300'
                          : 'bg-white hover:bg-stone-100 hover:border-stone-300 text-stone-800 border-stone-200 shadow-xs dark:bg-[#181C24] dark:hover:bg-[#1E232E] dark:hover:border-[#383F4E] dark:text-[#E5E7EB] dark:border-[#262A34] dark:shadow-none'
                      }`}
                    >
                      <PhoneForwarded size={15} className={ch.id === 'emergency' ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'} />
                      <span>{ch.actionText}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}