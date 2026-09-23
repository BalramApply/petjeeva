import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import TrustHighlights from '../components/sections/TrustHighlights';
import Services from '../components/sections/Services';
import PriceEstimator from '../components/sections/estimator/PriceEstimator';
import HowItWorks from '../components/sections/HowItWorks';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Professionals from '../components/sections/Professionals';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

// Order follows the brief's homepage structure: Hero, Trust, Services,
// Price Estimator, How It Works, Why Choose Us, Professionals, and so on.
export default function Home() {
  const { hash } = useLocation();

  // Supports links like /#estimator from other pages (e.g. Service Detail).
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      <Hero />
      <TrustHighlights />
      <Services />
      <PriceEstimator />
      <HowItWorks />
      <WhyChooseUs />
      <Professionals />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
