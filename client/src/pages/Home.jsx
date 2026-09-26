import Hero from '../components/sections/Hero';
import TrustHighlights from '../components/sections/TrustHighlights';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FuturesPage from '../components/sections/Futures';
import TestimonialsPage from '../components/sections/Testimonials';
import PriceEstimator from '../components/sections/estimator/PriceEstimator';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustHighlights /> 
      <WhyChooseUs />
      <PriceEstimator />
      <FuturesPage />
      <TestimonialsPage />
    </>
  );
}