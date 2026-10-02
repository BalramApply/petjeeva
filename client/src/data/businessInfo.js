// Placeholder business details for local development only.
// This will be replaced by a live call to GET /api/business-info
// (BusinessInfo model, admin-editable) in Phase 17 — nothing here
// should stay hardcoded once that endpoint exists.
export const businessInfo = {
  name: 'Pet Jeeva', // DEMO — replace with real registered brand name
  phone: '+91 73038 00789', // DEMO
  whatsappNumber: '7303800789', // DEMO — digits only, for wa.me links
  email: 'petjeeva24x7@gmail.com', // DEMO
};

export function getWhatsAppLink(message = 'Hello, I would like to book a pet-care service.') {
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
