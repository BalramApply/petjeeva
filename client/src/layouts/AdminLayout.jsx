import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Menu, X, LogOut } from 'lucide-react';
import { adminNavItems } from '../data/adminNav';
import { useAdminAuth } from '../context/AdminAuthContext';
import { businessInfo } from '../data/businessInfo';

export default function AdminLayout() {
  const { admin, logout } = useAdminAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navList = (
    <nav className="flex flex-col gap-1">
      {adminNavItems.map(({ label, path, icon }) => {
        const Icon = Icons[icon];
        return (
          <NavLink
            key={path}
            to={path}
            end={path === '/admin'}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber/15 text-forest-dark'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            {Icon && <Icon size={18} />}
            {label}
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-forest-dark px-4 py-6 shrink-0">
        <p className="px-3 font-heading text-lg font-bold text-white">{businessInfo.name}</p>
        <p className="px-3 mt-0.5 text-xs text-white/50">Admin</p>
        <div className="mt-6 flex-1 overflow-y-auto">{navList}</div>
        <button
          onClick={logout}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
        >
          <LogOut size={18} />
          Log out
        </button>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (mobile menu trigger + admin identity) */}
        <header className="lg:hidden flex items-center justify-between border-b border-border bg-surface px-4 py-3">
          <p className="font-heading font-bold text-forest">{businessInfo.name} Admin</p>
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="text-forest">
            <Menu size={22} />
          </button>
        </header>

        <header className="hidden lg:flex items-center justify-between border-b border-border bg-surface px-8 py-3">
          <a href="/" className="text-sm text-forest hover:underline">
            ← View site
          </a>
          <p className="text-sm text-text-secondary">{admin?.name} · {admin?.email}</p>
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-72 bg-forest-dark px-4 py-6 flex flex-col">
            <div className="flex items-center justify-between px-3">
              <p className="font-heading text-lg font-bold text-white">{businessInfo.name}</p>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white">
                <X size={22} />
              </button>
            </div>
            <div className="mt-6 flex-1 overflow-y-auto">{navList}</div>
            <button
              onClick={logout}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              <LogOut size={18} />
              Log out
            </button>
          </div>
          <div className="flex-1 bg-black/40" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </div>
  );
}
