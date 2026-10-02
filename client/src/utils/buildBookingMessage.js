export function buildBookingMessage({
  ownerName,
  phone,
  petType,
  serviceName,
  locationLabel
}) {
  return [
    'Hello, I would like to book Free Demo pet-care service.',
    '',
    `Owner: ${ownerName || 'N/A'}`,
    `Phone: ${phone || 'N/A'}`,
    `Pet Type: ${petType || 'N/A'}`,
    `Service: ${serviceName || 'N/A'}`,
    `Location: ${locationLabel || 'N/A'}`,
  ].join('\n');
}