// Full intended admin IA (Section 32 of the brief). Only Overview has
// a real page right now — everything else routes to a "coming soon"
// placeholder until its phase (noted below) builds the real thing.
export const adminNavItems = [
  { label: 'Overview', path: '/admin', icon: 'LayoutDashboard', builtInPhase: 10 },
  { label: 'Bookings', path: '/admin/bookings', icon: 'CalendarCheck', builtInPhase: 11 },
  { label: 'Leads', path: '/admin/leads', icon: 'Users', builtInPhase: 11 },
  { label: 'Support Requests', path: '/admin/support', icon: 'LifeBuoy', builtInPhase: 18 },
  { label: 'Price Estimator', path: '/admin/price-estimator', icon: 'Calculator', builtInPhase: 12 },
  { label: 'Availability', path: '/admin/availability', icon: 'Clock', builtInPhase: 12 },
  { label: 'Service Areas', path: '/admin/service-areas', icon: 'MapPin', builtInPhase: 12 },
  { label: 'Services', path: '/admin/services', icon: 'ClipboardList', builtInPhase: 12 },
  { label: 'Packages', path: '/admin/packages', icon: 'Package', builtInPhase: 12 },
  { label: 'Professionals', path: '/admin/professionals', icon: 'UserCog', builtInPhase: 13 },
  { label: 'Gallery', path: '/admin/gallery', icon: 'Image', builtInPhase: 15 },
  { label: 'Transformations', path: '/admin/transformations', icon: 'RefreshCcw', builtInPhase: 15 },
  { label: 'Testimonials', path: '/admin/testimonials', icon: 'MessageSquareQuote', builtInPhase: 16 },
  { label: 'FAQs', path: '/admin/faqs', icon: 'HelpCircle', builtInPhase: 16 },
  { label: 'Offers', path: '/admin/offers', icon: 'Tag', builtInPhase: 17 },
  { label: 'Business Information', path: '/admin/business-info', icon: 'Building2', builtInPhase: 17 },
  { label: 'Settings', path: '/admin/settings', icon: 'Settings', builtInPhase: 20 },
];
