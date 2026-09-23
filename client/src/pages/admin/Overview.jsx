import { useEffect, useState } from 'react';
import { CalendarCheck, Clock, CheckCircle2, Users, Tag, ClipboardList, Loader2 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Badge from '../../components/ui/Badge';
import { services } from '../../data/services';
import api from '../../services/api';

export default function AdminOverview() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    api
      .get('/admin/stats/overview')
      .then((res) => {
        setStats(res.data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const activeServicesCount = services.filter((s) => s.active).length;

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-h2 font-heading">Overview</h1>
      <p className="mt-1 text-text-secondary">A quick snapshot of what's happening today.</p>

      {status === 'loading' && (
        <p className="mt-8 flex items-center gap-2 text-text-secondary">
          <Loader2 size={18} className="animate-spin" /> Loading dashboard…
        </p>
      )}

      {status === 'error' && (
        <p className="mt-8 text-red-600">
          Couldn't load dashboard stats. Check that the server and database are running.
        </p>
      )}

      {status === 'ready' && stats && (
        <>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard icon={CalendarCheck} label="Today's Bookings" value={stats.todayBookings} />
            <StatCard icon={Clock} label="Pending Requests" value={stats.pendingRequests} />
            <StatCard icon={CheckCircle2} label="Confirmed Bookings" value={stats.confirmedBookings} />
            <StatCard icon={ClipboardList} label="Active Services" value={activeServicesCount} demo />
            <StatCard icon={Users} label="New Leads" value={stats.newLeads} />
            <StatCard icon={Tag} label="Active Offers" comingSoonPhase={17} />
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h2 className="font-heading font-semibold mb-4">Bookings over time</h2>
              {stats.bookingsOverTime.length === 0 ? (
                <p className="text-sm text-text-secondary">No bookings yet.</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={stats.bookingsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DDE5DF" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#12372A" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="card p-6">
              <h2 className="font-heading font-semibold mb-4">Bookings by status</h2>
              {stats.bookingsByStatus.length === 0 ? (
                <p className="text-sm text-text-secondary">No bookings yet.</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={stats.bookingsByStatus}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DDE5DF" />
                    <XAxis dataKey="status" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#F4A261" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, demo, comingSoonPhase }) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 text-forest">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10">
          <Icon size={18} />
        </div>
        <p className="text-sm font-medium text-text-secondary">{label}</p>
      </div>
      {comingSoonPhase ? (
        <p className="mt-3 text-sm text-text-secondary">Not tracked yet — Phase {comingSoonPhase}</p>
      ) : (
        <div className="mt-3 flex items-center gap-2">
          <p className="font-heading text-3xl font-semibold text-forest">{value}</p>
          {demo && <Badge variant="neutral">Demo data</Badge>}
        </div>
      )}
    </div>
  );
}
