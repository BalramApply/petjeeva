import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Check,
  Heart,
  Droplets,
  Scissors,
  Bug,
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  PlusCircle,
  Clock,
  Award,
  ChevronDown
} from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";

// Exact packages from PDF Page 1
const GROOMING_PACKAGES = [
  {
    id: "bath-brush-lite",
    name: "Bath & Brush Lite",
    subtitle: "A Quick Refresh",
    originalPrice: "1,898",
    discountedPrice: "899",
    savings: "999",
    featured: false,
    badgeText: null,
    features: [
      "Gentle Organic Bath",
      "Deep Scrubbing & Cleaning",
      "Premium Nourishing Shampoo",
      "Professional Blow Dry"
    ]
  },
  {
    id: "bath-brush-tick",
    name: "Bath & Brush (With Tick Treatment)",
    subtitle: "Extra Care for Pet",
    originalPrice: "2,898",
    discountedPrice: "1,399",
    savings: "1,499",
    featured: false,
    badgeText: "Specialized Care",
    features: [
      "Complete Tick Check & Manual Removal",
      "Anti-Tick Medicinal Bath",
      "Medicated Anti-Tick Shampoo",
      "Blow Dry & Tick Prevention Coat Spray"
    ]
  },
  {
    id: "full-signature-spa",
    name: "Full Signature Grooming Spa",
    subtitle: "Complete Head-to-Tail Luxury",
    originalPrice: "3,898",
    discountedPrice: "1,899",
    savings: "1,999",
    featured: true,
    badgeText: "Most Popular",
    features: [
      "Refreshing Bath & Scrubbing",
      "Premium Shampoo & Coat Conditioner",
      "Professional Blow Dry & Thorough Brushing",
      "Hygiene Area Trim & Paw Massage",
      "Gentle Ear & Eye Cleaning",
      "Precise Nail Trimming & Filing"
    ]
  }
];

// Exact Add-Ons from PDF Page 2
const ADD_ONS = [
  {
    name: "Teeth Cleaning & Mouth Spray",
    desc: "Enzyme brushing to reduce plaque and eliminate bad breath",
    price: "299",
    tag: "Oral Care"
  },
  {
    name: "Paw Butter Deep Moisturizing",
    desc: "Soothes and repairs dry, cracked paw pads with natural butter",
    price: "199",
    tag: "Skin Therapy"
  },
  {
    name: "De-Shedding & Undercoat Fur Removal",
    desc: "Specialized furminator treatment reducing shedding up to 90%",
    price: "499",
    tag: "Coat Care"
  },
  {
    name: "Anti-Flea & Tick Spot-On Treatment",
    desc: "Long-lasting monthly protective application against ticks & fleas",
    price: "399",
    tag: "Parasite Shield"
  },
  {
    name: "Aromatherapy De-Stress Massage",
    desc: "Calming essential oil massage session for anxious or senior pets",
    price: "349",
    tag: "Wellness"
  }
];

// Exact FAQs from PDF Page 2
const FAQS = [
  {
    question: "How long does a standard grooming session take?",
    answer:
      "Most bath and grooming packages take between 60 to 90 minutes depending on your pet's coat length and breed size."
  },
  {
    question: "What if my pet gets anxious during grooming?",
    answer:
      "Our groomers use positive reinforcement and gentle stress-free techniques. We never rush or force any pet."
  }
];

export default function GroomingPackage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-stone-50 dark:bg-[#0B0D11] text-stone-900 dark:text-[#F3F4F6] min-h-screen py-12 md:py-20 transition-colors duration-300">
      <Container>
        {/* Header Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs md:text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-sm">
            <Sparkles size={15} />
            <span>PREMIUM PET CARE SERVICES AT YOUR DOORSTEP</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-stone-900 dark:text-[#F9FAFB] leading-tight">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Grooming Packages
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-stone-600 dark:text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Professional, hygienic & loving care for your beloved furry companions, delivered directly to the comfort of your home.
          </p>

          {/* Core Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-8 pt-4">
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <Droplets size={18} className="text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-bold text-stone-900 dark:text-[#F9FAFB]">100% Natural</p>
                <p className="text-[11px] text-stone-500 dark:text-[#9CA3AF]">Organic & chemical-free products</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <Award size={18} className="text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-bold text-stone-900 dark:text-[#F9FAFB]">Certified Stylists</p>
                <p className="text-[11px] text-stone-500 dark:text-[#9CA3AF]">Handled with extreme patience</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#14171E] border border-stone-200 dark:border-[#232730] shadow-sm">
              <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-bold text-stone-900 dark:text-[#F9FAFB]">Strict Hygiene</p>
                <p className="text-[11px] text-stone-500 dark:text-[#9CA3AF]">Sanitized kits for every pet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Grooming Packages Cards Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Doorstep Pampering
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight mt-1">
                Popular Grooming Packages
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {GROOMING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#14171E] border ${
                  pkg.featured
                    ? "border-amber-500/60 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/40"
                    : "border-stone-200/90 dark:border-[#232730] shadow-md shadow-stone-900/5 hover:border-stone-300 dark:hover:border-[#383F4D]"
                }`}
              >
                {/* Badge */}
                {pkg.badgeText && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                      {pkg.badgeText}
                    </span>
                  </div>
                )}

                {/* Package Head */}
                <div className="p-6 md:p-7 border-b border-stone-100 dark:border-[#1E222A]">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-[#9CA3AF] mt-1 font-medium italic">
                    {pkg.subtitle}
                  </p>

                  {/* Pricing Box */}
                  <div className="mt-5 pt-4 border-t border-dashed border-stone-200 dark:border-[#232730]">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white">
                        ₹{pkg.discountedPrice}
                      </span>
                      <span className="text-sm line-through text-stone-400 dark:text-[#6B7280]">
                        ₹{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                      <span>SAVE ₹{pkg.savings}</span>
                    </div>
                  </div>
                </div>

                {/* Included Features */}
                <div className="p-6 md:p-7 flex-1 space-y-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-[#6B7280]">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700 dark:text-[#D1D5DB]">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Action */}
                <div className="p-6 md:p-7 pt-0 mt-auto">
                  <Button
  variant="primary"
  href="/book"
  className="w-full !flex !flex-row !items-center !justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-semibold py-2.5 text-xs md:text-sm shadow-md shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
>
  <span className="inline-flex flex-row items-center justify-center gap-1.5 whitespace-nowrap">
    <span>Book Free Demo</span>
    <ArrowRight size={14} className="shrink-0 inline-block" />
  </span>
</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safe & Secure Grooming Process */}
        <div className="mb-20 rounded-3xl border border-stone-200 dark:border-[#232730] bg-white dark:bg-[#14171E] p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Care Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight mt-1">
              Our Safe & Secure Grooming Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 rounded-2xl bg-stone-50 dark:bg-[#181C25] border border-stone-200/70 dark:border-[#232730]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-extrabold text-lg shadow-sm">
                1
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-[#F9FAFB]">
                  Pre-Grooming Consultation
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                  Certified professionals discuss your specific requirements tailored to your pet&apos;s breed, coat type, and temperament.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-stone-50 dark:bg-[#181C25] border border-stone-200/70 dark:border-[#232730]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-extrabold text-lg shadow-sm">
                2
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-[#F9FAFB]">
                  Pet-Safe Techniques & Products
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed">
                  100% toxin-free, allergy-resistant products paired with stress-free, gentle handling techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Add-On Care Services */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <PlusCircle size={14} />
              <span>A La Carte Upgrades</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight mt-1">
              Popular Add-On Care Services
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] mt-2">
              Enhance any grooming package with our targeted wellness and hygiene treatments.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 dark:border-[#232730] bg-white dark:bg-[#14171E] shadow-sm">
            <div className="divide-y divide-stone-100 dark:divide-[#1E222A]">
              {ADD_ONS.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-stone-50/70 dark:hover:bg-[#171B24] transition-colors gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 dark:bg-[#1E222A] text-stone-600 dark:text-[#9CA3AF]">
                        {addon.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-[#F9FAFB]">
                        {addon.name}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-[#9CA3AF] mt-1 leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-stone-100 dark:border-[#1E222A]">
                    <span className="text-lg font-extrabold text-stone-900 dark:text-[#F9FAFB]">
                      ₹{addon.price}
                    </span>
                    <Button
                      variant="outline"
                      href="/book"
                      className="text-xs px-3 py-1.5 h-8 border-stone-200 dark:border-[#2E3543] bg-stone-50 dark:bg-[#181B22] text-stone-800 dark:text-[#D1D5DB] hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400"
                    >
                      Book Session
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Happiness Guarantee & FAQs */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          {/* PetJeeva 100% Comfort & Happiness Guarantee */}
          <div className="h-full rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 mb-4">
                <Heart size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight">
                PetJeeva 100% Comfort &amp; Happiness Guarantee
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-stone-700 dark:text-[#D1D5DB] leading-relaxed">
                If you or your furry companion are not completely delighted with our grooming service, let us know immediately and we will make it right!
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 dark:text-[#9CA3AF]">
                  Direct Concierge Support
                </p>
                <p className="text-sm font-bold text-stone-900 dark:text-[#F9FAFB]">
                  +91 7303800789
                </p>
              </div>
              <a
                href="https://wa.me/917303800789?text=Hi%20PetJeeva,%20I%20want%20to%20book%20a%20grooming%20session!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 shadow-sm transition-all"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="rounded-3xl border border-stone-200 dark:border-[#232730] bg-white dark:bg-[#14171E] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              <HelpCircle size={14} />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900 dark:text-[#F9FAFB] tracking-tight mb-5">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-stone-200/80 dark:border-[#232730] bg-stone-50 dark:bg-[#181C25] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-stone-900 dark:text-[#F9FAFB] focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-stone-400 transition-transform duration-200 shrink-0 ml-2 ${
                        openFaq === idx ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 dark:text-[#9CA3AF] leading-relaxed border-t border-stone-100 dark:border-[#232730]/60 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 sm:p-10 text-stone-950 text-center shadow-xl shadow-amber-500/20">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight">
            Book Your Pet&apos;s Pampering Session Today!
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-medium text-stone-900 max-w-lg mx-auto">
            PetJeeva Pet Care Services • Premium Care Delivered With Love
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              href="/book?service=grooming"
              className="bg-stone-950 text-white hover:bg-stone-900 font-bold px-6 py-2.5 text-xs sm:text-sm shadow-md"
            >
              Book Grooming Now
            </Button>
            <a
              href="tel:+917303800789"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 transition-colors"
            >
              <Phone size={15} />
              <span>Call +91 7303800789</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}