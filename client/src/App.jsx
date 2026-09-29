import { Routes, Route } from 'react-router-dom';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { ThemeProvider } from './context/ThemeContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

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

// Admin Pages
import AdminLogin from './pages/admin/Login';
import AdminOverview from './pages/admin/Overview';
import AdminBookings from './pages/admin/Bookings';
import AdminLeads from './pages/admin/Leads';
import AdminComingSoon from './pages/admin/ComingSoon';

export default function App() {
  return (
    <ThemeProvider>
    <AdminAuthProvider>
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

        {/* Admin — separate layout, protected */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminOverview />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/admin/:section" element={<AdminComingSoon />} />
          </Route>
        </Route>
      </Routes>
    </AdminAuthProvider>
    </ThemeProvider>
  );
}