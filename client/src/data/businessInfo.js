// Placeholder business details for local development only.
// This will be replaced by a live call to GET /api/business-info
// (BusinessInfo model, admin-editable) in Phase 17 — nothing here
// should stay hardcoded once that endpoint exists.
export const businessInfo = {
  name: 'Pet Jeeva', // DEMO — replace with real registered brand name
  phone: '+91 96918 06834', // DEMO
  whatsappNumber: '9696806834', // DEMO — digits only, for wa.me links
  email: 'balramapply123@gmail.com', // DEMO
};

export function getWhatsAppLink(message = 'Hello, I would like to book a pet-care service.') {
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
