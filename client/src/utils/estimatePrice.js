export function estimatePrice({ size, coat, service, location }) {
  if (!size || !coat || !service || !location) return null;

  const rawPrice = service.basePrice * size.multiplier * coat.multiplier * location.multiplier;
  const price = Math.round(rawPrice / 10) * 10;
  const duration = service.baseDuration + coat.durationAdd;

  return { price, duration };
}
