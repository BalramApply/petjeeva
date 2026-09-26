import { Navigate, Outlet } from 'react-router-dom';
import { Loader2, ShieldCheck, PawPrint } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0F1115] px-4 selection:bg-amber-500/20 selection:text-amber-300">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-72 w-72 rounded-full bg-amber-500/5 blur-3xl"
        />

        {/* Brand Authentication Loading Card */}
        <div className="relative flex flex-col items-center rounded-2xl border border-[#232730] bg-[#14171E]/90 p-8 shadow-2xl shadow-black/50 backdrop-blur-md">
          {/* Centered PetJeeva Badge with Spinner Ring */}
          <div className="relative mb-5 flex h-16 w-16 items-center justify-center">
            {/* Smooth Outer Rotating Ring */}
            <Loader2
              size={64}
              strokeWidth={1.5}
              className="absolute inset-0 animate-spin text-amber-500/40"
            />
            
            {/* Inner Brand Icon Box */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent text-amber-400 shadow-inner">
              <PawPrint size={20} />
            </div>
          </div>

          {/* Status Label */}
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#F3F4F6]">
            <span>Authenticating Admin</span>
          </div>

          {/* Subtext */}
          <p className="mt-1 text-xs text-[#9CA3AF]">
            Verifying secure session credentials...
          </p>

          {/* Security Pill */}
          <div className="mt-6 flex items-center gap-1.5 rounded-full border border-[#262B34] bg-[#101217] px-3 py-1 text-[11px] font-medium text-[#6B7280]">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>Encrypted PetJeeva Portal</span>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}