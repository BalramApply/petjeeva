// Builds the pre-filled WhatsApp message shown after a successful
// booking request, per the brief's WhatsApp Booking Flow template.
export function buildBookingMessage({ ownerName, petName, serviceName, preferredDate, preferredTime, locationLabel }) {
  return [
    'Hello, I would like to book a pet-care service.',
    '',
    `Owner: ${ownerName}`,
    `Pet: ${petName}`,
    `Service: ${serviceName}`,
    `Date: ${preferredDate}`,
    `Preferred Time: ${preferredTime}`,
    `Location: ${locationLabel}`,
  ].join('\n');
}
