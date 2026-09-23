import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MobileCTA from '../components/layout/MobileCTA';

// Wraps every public-facing page in the site chrome. Admin routes
// deliberately do NOT use this — they get their own layout (Phase 10).
export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
