import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Send,
  Calendar,
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
  ArrowRight
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Dog & Cat Training',
  'Dog Walking',
  'Pet Grooming',
  'Vaccination & Wellness',
  'General / Emergency Inquiry'
];

const CONTACT_CHANNELS = [
  {
    id: 'whatsapp',
    title: 'Instant WhatsApp Concierge',
    desc: 'Chat directly with our care coordinators for swift answers and walk booking.',
    value: '+91 98765 43210',
    display: '+91 98765 43210',
    type: 'whatsapp',
    badge: 'Response in ~5 mins',
    badgeColor: 'bg-[#A8D5BA]/25 text-[#12372A]',
    actionText: 'Message on WhatsApp'
  },
  {
    id: 'hotline',
    title: 'Care & Booking Hotline',
    desc: 'Speak with our admissions specialists for customized multi-pet plans.',
    value: '+91 1800 572 8222',
    display: '1800-572-8222 (Toll Free)',
    type: 'tel',
    badge: '9:00 AM – 8:30 PM',
    badgeColor: 'bg-[#F4A261]/20 text-[#0B2119]',
    actionText: 'Call Care Desk'
  },
  {
    id: 'emergency',
    title: '24/7 Pet Emergency Hotline',
    desc: 'Dedicated tele-triage line for urgent vet routing and home assistance.',
    value: '+91 91100 24700',
    display: '+91 91100 24700',
    type: 'tel',
    badge: '24/7 Priority Emergency',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    actionText: 'Call Emergency Line'
  },
  {
    id: 'email',
    title: 'Care Concierge Email',
    desc: 'Detailed behavior records, vet report histories, or corporate inquiries.',
    value: 'care@petjeeva.com',
    display: 'care@petjeeva.com',
    type: 'email',
    badge: 'Same-day Reply',
    badgeColor: 'bg-[#A8D5BA]/20 text-[#12372A]',
    actionText: 'Send Email'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How fast will Petjeeva respond to my request?',
    answer: 'WhatsApp and telephone inquiries are acknowledged within 5 to 15 minutes during regular hours (8:00 AM - 9:00 PM). Detailed form inquiries and personalized behavior consultations receive a dedicated specialist review within 2 to 4 business hours.'
  },
  {
    question: 'Can I schedule a complimentary in-home meet & greet before booking?',
    answer: 'Absolutely! For both daily dog walking and behavior training, we insist on an initial zero-obligation meet & greet. This allows your pet to sniff, get comfortable with their dedicated caregiver, and test compatibility in a low-stress environment.'
  },
  {
    question: 'What happens in case of a medical emergency during a session?',
    answer: 'Every Petjeeva specialist is certified in canine & feline CPR and first aid. Our staff is connected directly to our 24/7 On-Call Veterinary Triage Network, with pre-approved hospital access and GPS route emergency protocols ready at a moment\'s notice.'
  },
  {
    question: 'Are Petjeeva groomers and walkers background-verified?',
    answer: 'Yes. Only 2% of applicants clear our four-tier vetting filter: government identity check, criminal record validation, in-person temperament testing, and supervised humane handling certifications.'
  }
];

// Sample active serviceable hubs in major metros
const ACTIVE_PINCODES = [
  '110001', '110021', '110048', '110070', '122001', '122002', '122018',
  '400050', '400053', '400067', '400001', '560001', '560034', '560038',
  '560066', '500034', '500081', '600028', '700019'
];

export default function Contact() {
  // Form State
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

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Pin code serviceability checker state
  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null); // 'available' | 'waitlist' | null

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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
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
    // Simulate API network latency
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

    if (ACTIVE_PINCODES.includes(cleaned) || cleaned.startsWith('110') || cleaned.startsWith('122') || cleaned.startsWith('560') || cleaned.startsWith('400')) {
      setPincodeStatus('available');
    } else {
      setPincodeStatus('waitlist');
    }
  };

  return (
    <div id='contact' className="w-full bg-[#F8F7F2] text-[#17211B] font-sans antialiased selection:bg-[#A8D5BA]/30 selection:text-[#12372A]">
      
      {/* SECTION 1: Emergency & Hero Header */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Hero Title & Subheader */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A8D5BA]/25 border border-[#A8D5BA]/50 text-[#12372A] text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles size={16} className="text-[#12372A]" />
            <span>Petjeeva Care Concierge Desk</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12372A] tracking-tight leading-[1.15]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            We Are Here For You <br className="hidden sm:inline" />
            <span className="text-[#F4A261]">And Your Cherished Companion.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Have questions about customized training routines, daily walk scheduling, zero-sedation grooming, or home wellness visits? Our certified animal care coordinators are just a touch away.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#12372A]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#DDE5DF] shadow-sm">
              <Clock size={14} className="text-[#A8D5BA]" />
              Average WhatsApp reply: &lt; 8 mins
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#DDE5DF] shadow-sm">
              <ShieldCheck size={14} className="text-[#A8D5BA]" />
              Zero-obligation consultations
            </span>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_CHANNELS.map((ch) => {
            const isCopied = copiedChannel === ch.id;
            return (
              <div 
                key={ch.id}
                className="bg-white rounded-3xl p-6 border border-[#DDE5DF] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#12372A]/30"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${ch.badgeColor}`}>
                      {ch.badge}
                    </span>
                    <button 
                      onClick={() => handleCopy(ch.value, ch.id)}
                      className="text-[#66736B] hover:text-[#12372A] p-1.5 rounded-lg hover:bg-[#F8F7F2] transition-colors"
                      title="Copy detail"
                      type="button"
                    >
                      {isCopied ? <Check size={14} className="text-[#12372A]" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-[#12372A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {ch.title}
                  </h3>

                  <p className="text-xs text-[#66736B] leading-relaxed">
                    {ch.desc}
                  </p>

                  <div className="pt-2 text-sm font-extrabold text-[#12372A] tracking-tight">
                    {ch.display}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#DDE5DF]">
                  {ch.type === 'whatsapp' ? (
                    <a 
                      href={`https://wa.me/${ch.value.replace(/[^0-9]/g, '')}?text=Hello%20Petjeeva,%20I%20would%20like%20to%20inquire%20about%20care%20for%20my%20pet.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#12372A] hover:bg-[#0B2119] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle size={14} className="text-[#A8D5BA]" />
                      <span>{ch.actionText}</span>
                    </a>
                  ) : ch.type === 'email' ? (
                    <a 
                      href={`mailto:${ch.value}?subject=Petjeeva%20Inquiry`}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F8F7F2] hover:bg-[#DDE5DF]/60 text-[#12372A] text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-[#DDE5DF]"
                    >
                      <Mail size={14} />
                      <span>{ch.actionText}</span>
                    </a>
                  ) : (
                    <a 
                      href={`tel:${ch.value.replace(/[^0-9+]/g, '')}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F8F7F2] hover:bg-[#DDE5DF]/60 text-[#12372A] text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-[#DDE5DF]"
                    >
                      <PhoneForwarded size={14} />
                      <span>{ch.actionText}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Intake Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#DDE5DF] shadow-sm">
            
            {isSuccess ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#A8D5BA]/25 text-[#12372A] flex items-center justify-center mx-auto border border-[#A8D5BA]/50">
                  <CheckCircle2 size={36} className="text-[#12372A]" />
                </div>
                
                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs font-bold text-[#F4A261] uppercase tracking-wider">Inquiry Received</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12372A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    We'll Reach Out to You & {formData.petName || 'Your Pet'} Shortly!
                  </h3>
                  <p className="text-sm text-[#66736B] leading-relaxed">
                    Thank you, <strong className="text-[#12372A]">{formData.parentName}</strong>. A dedicated Petjeeva care coordinator has logged your companion's file and will get in touch via 
                    <strong className="text-[#12372A]"> {formData.contactMethod.toUpperCase()}</strong> during your preferred slot ({formData.timeSlot}).
                  </p>
                </div>

                <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#DDE5DF] max-w-md mx-auto text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#66736B]">Service Category:</span>
                    <span className="font-bold text-[#12372A]">{formData.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#66736B]">Assigned Priority:</span>
                    <span className="font-bold text-[#12372A]">Care Coordinator Queue (Normal)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#66736B]">Target Response:</span>
                    <span className="font-bold text-[#12372A]">Within 15 minutes</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
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
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#12372A] text-white text-xs font-bold hover:bg-[#0B2119] transition-colors"
                  type="button"
                >
                  Send Another Pet Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8D5BA]/20 text-[#12372A] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Heart size={12} className="text-[#F4A261]" />
                    Companion Consultation
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12372A] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Personalized Pet Intake & Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#66736B] mt-1">
                    Fill out the essential details below so our certified team can tailor an initial plan and match the right specialist to your home.
                  </p>
                </div>

                {/* Section A: Parent Information */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-[#12372A] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#12372A] text-white flex items-center justify-center text-[10px]">1</span>
                    Pet Parent Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Your Full Name *</label>
                      <input 
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g., Ananya Verma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none transition-colors ${
                          formErrors.parentName ? 'border-rose-500 focus:border-rose-500' : 'border-[#DDE5DF] focus:border-[#12372A]'
                        }`}
                      />
                      {formErrors.parentName && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.parentName}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Phone Number *</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-[#DDE5DF] focus:border-[#12372A]'
                        }`}
                      />
                      {formErrors.phone && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ananya@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none transition-colors ${
                          formErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-[#DDE5DF] focus:border-[#12372A]'
                        }`}
                      />
                      {formErrors.email && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.email}</span>}
                    </div>
                  </div>
                </div>

                {/* Section B: Pet Companion Details */}
                <div className="space-y-3 pt-3 border-t border-[#DDE5DF]">
                  <h4 className="text-xs font-bold text-[#12372A] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#12372A] text-white flex items-center justify-center text-[10px]">2</span>
                    Companion Specifics
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Pet Type</label>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, petType: 'dog' }))}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition-all ${
                            formData.petType === 'dog' 
                              ? 'bg-[#12372A] text-white border-[#12372A]' 
                              : 'bg-[#F8F7F2] text-[#66736B] border-[#DDE5DF]'
                          }`}
                        >
                          <Dog size={14} />
                          Dog
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, petType: 'cat' }))}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition-all ${
                            formData.petType === 'cat' 
                              ? 'bg-[#12372A] text-white border-[#12372A]' 
                              : 'bg-[#F8F7F2] text-[#66736B] border-[#DDE5DF]'
                          }`}
                        >
                          <Cat size={14} />
                          Cat
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Pet's Name *</label>
                      <input 
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        placeholder="e.g., Bailey"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none transition-colors ${
                          formErrors.petName ? 'border-rose-500 focus:border-rose-500' : 'border-[#DDE5DF] focus:border-[#12372A]'
                        }`}
                      />
                      {formErrors.petName && <span className="text-[11px] text-rose-500 mt-1 block">{formErrors.petName}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Breed</label>
                      <input 
                        type="text"
                        name="breed"
                        value={formData.breed}
                        onChange={handleInputChange}
                        placeholder="e.g., Golden Retriever"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:border-[#12372A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Age / Stage</label>
                      <input 
                        type="text"
                        name="petAge"
                        value={formData.petAge}
                        onChange={handleInputChange}
                        placeholder="e.g., 4 mos / 2 yrs"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:border-[#12372A] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Service Interest & Scheduling Preference */}
                <div className="space-y-3 pt-3 border-t border-[#DDE5DF]">
                  <h4 className="text-xs font-bold text-[#12372A] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#12372A] text-white flex items-center justify-center text-[10px]">3</span>
                    Service & Consultation Preferences
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Service of Primary Interest</label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:border-[#12372A] transition-colors cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((srv, idx) => (
                          <option key={idx} value={srv}>{srv}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17211B] mb-1">Preferred Time to Call</label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:border-[#12372A] transition-colors cursor-pointer"
                      >
                        <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                        <option value="Anytime (ASAP)">Anytime (Earliest Specialist Available)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17211B] mb-1.5">Preferred Contact Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                        { id: 'phone', label: 'Direct Call', icon: PhoneCall },
                        { id: 'email', label: 'Email', icon: Mail }
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.contactMethod === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, contactMethod: item.id }))}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                              isSelected 
                                ? 'bg-[#12372A] text-white border-[#12372A] shadow-sm' 
                                : 'bg-[#F8F7F2] text-[#66736B] border-[#DDE5DF] hover:bg-white'
                            }`}
                          >
                            <Icon size={14} className={isSelected ? 'text-[#F4A261]' : ''} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17211B] mb-1">
                      Behavior Notes, Allergies or Special Instructions (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g., Sensitive to loud clippers, timid around other male dogs, needs leash pull training..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:border-[#12372A] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F4A261] hover:bg-[#e89452] disabled:opacity-75 text-[#0B2119] font-extrabold py-3.5 rounded-full text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0B2119] border-t-transparent rounded-full animate-spin"></span>
                        <span>Routing to Specialist...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Request Tailored Consultation</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#66736B] mt-2">
                    🔒 Zero spam guarantee. Your details are solely used to coordinate verified animal care.
                  </p>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Studio Hours, Pin Code Checker & Simulated Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Pin Code Eligibility Checker */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DDE5DF] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12372A]">
                <MapPin size={15} className="text-[#F4A261]" />
                Coverage Area Checker
              </div>

              <h3 className="text-xl font-bold text-[#12372A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Does Petjeeva Serve Your Neighborhood?
              </h3>

              <p className="text-xs text-[#66736B] leading-relaxed">
                Enter your 6-digit postal PIN code to verify if our mobile grooming vans, certified walkers, and home vets are active in your sector.
              </p>

              <form onSubmit={checkPincode} className="flex items-center gap-2">
                <input 
                  type="text"
                  maxLength={6}
                  value={pincodeInput}
                  onChange={(e) => {
                    setPincodeInput(e.target.value.replace(/[^0-9]/g, ''));
                    setPincodeStatus(null);
                  }}
                  placeholder="Enter 6-digit PIN code"
                  className="flex-1 px-4 py-2.5 bg-[#F8F7F2] rounded-xl border border-[#DDE5DF] text-xs sm:text-sm focus:outline-none focus:border-[#12372A] text-[#17211B]"
                />
                <button
                  type="submit"
                  className="bg-[#12372A] hover:bg-[#0B2119] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 flex-shrink-0"
                >
                  <Search size={14} />
                  <span>Check</span>
                </button>
              </form>

              {pincodeStatus === 'available' && (
                <div className="p-3 bg-[#A8D5BA]/25 rounded-2xl border border-[#A8D5BA]/50 text-xs text-[#12372A] flex items-start gap-2 animate-fadeIn">
                  <CheckCircle2 size={16} className="text-[#12372A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Great news! High Service Availability</strong>
                    <span>Daily walking slots, in-home salon visits, and certified trainers are fully operational in your area.</span>
                  </div>
                </div>
              )}

              {pincodeStatus === 'waitlist' && (
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 animate-fadeIn">
                  <Info size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Expanding Soon to Your Sector!</strong>
                    <span>We are currently onboarding certified caregivers for your PIN code. Leave an inquiry above to reserve early priority access.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Studio & Clinic Center Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DDE5DF] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                  Flagship Experience Studio
                </span>
                <span className="text-[11px] font-semibold text-[#12372A] bg-[#A8D5BA]/20 px-2.5 py-0.5 rounded-full">
                  Valet Pet Parking
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#12372A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Petjeeva Sanctuary & Wellness Hub
              </h3>

              <div className="space-y-3 text-xs text-[#66736B]">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#12372A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12372A] block text-xs">Sector 43, Golf Course Road</strong>
                    <span>DLF Phase 5, Gurugram, NCR — 122002</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#12372A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#12372A] block text-xs">Studio Visiting Hours</strong>
                    <span>Monday – Sunday: 8:00 AM – 8:30 PM (No sedation zone)</span>
                  </div>
                </div>
              </div>

              {/* Simulated Stylized Map Card */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#DDE5DF] bg-[#12372A]/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                  alt="City Map Preview" 
                  className="w-full h-full object-cover filter saturate-50 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0B2119]/30" />
                
                {/* Floating Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-[#12372A] text-white p-2 rounded-full shadow-lg border-2 border-white animate-bounce">
                    <Dog size={16} className="text-[#F4A261]" />
                  </div>
                  <span className="bg-white/95 backdrop-blur-md text-[#12372A] px-2.5 py-0.5 rounded-full text-[10px] font-bold mt-1 shadow-md">
                    Petjeeva Studio
                  </span>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 bg-white/90 hover:bg-white text-[#12372A] px-3 py-1 rounded-full text-[11px] font-bold shadow flex items-center gap-1 transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-3 bg-[#F8F7F2] rounded-xl text-[11px] text-[#66736B] border border-[#DDE5DF] flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#A8D5BA] flex-shrink-0" />
                <span>Zero-force grooming visits are strictly scheduled by prior appointment.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="bg-white border-t border-[#DDE5DF] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8D5BA]/20 text-[#12372A] text-xs font-semibold uppercase tracking-wider">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12372A] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Everything You Need to Know
            </h2>
            <p className="text-sm text-[#66736B]">
              Quick clarity before booking your first consultation with our team.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-[#DDE5DF] overflow-hidden transition-all bg-[#F8F7F2]"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#12372A] hover:text-[#0B2119]"
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#66736B] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#12372A]' : ''
                      }`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#66736B] leading-relaxed border-t border-[#DDE5DF]/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}