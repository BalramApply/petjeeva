import { Routes, Route } from 'react-router-dom';
import { AdminAuthProvider } from './context/AdminAuthContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import AdminLogin from './pages/admin/Login';
import AdminOverview from './pages/admin/Overview';
import AdminBookings from './pages/admin/Bookings';
import AdminLeads from './pages/admin/Leads';
import AdminComingSoon from './pages/admin/ComingSoon';

export default function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        {/* Public site — Navbar/Footer/MobileCTA via PublicLayout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
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
  );
}
