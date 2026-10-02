import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import PublicLayout from './layouts/PublicLayout';

// Public Pages
import Home from './pages/Home';
import ServicesPage from './components/sections/Services'
import HowItWorksPage from './components/sections/HowItWorks'
import ReviewsPage from './components/sections/Reviews';
import GalleryPage from './components/sections/Gallery';
import AboutPage from './components/sections/About';
import ContactPage from './components/sections/Contact';
import ServiceDetail from './pages/ServiceDetail';
import PetRegistration from './components/sections/PetRegistration';
import Booking from './pages/Booking';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Public site — Separate routes for each navbar page */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/services/pet-registration" element={<PetRegistration />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/book" element={<Booking />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}