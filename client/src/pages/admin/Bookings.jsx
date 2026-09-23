import { useEffect, useState } from 'react';
import { Loader2, Search } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { services } from '../../data/services';
import { locations } from '../../data/priceEstimatorOptions';
import api from '../../services/api';

const STATUS_OPTIONS = ['PENDING', 'CONFIRMED', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

const STATUS_BADGE = {
  PENDING: 'amber',
  CONFIRMED: 'mint',
  ASSIGNED: 'mint',
  IN_PROGRESS: 'amber',
  COMPLETED: 'mint',
  CANCELLED: 'neutral',
};

export default function AdminBookings() {
  const [filters, setFilters] = useState({ q: '', status: '', service: '', location: '' });
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    setStatus('loading');
    const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));

    api
      .get('/admin/bookings', { params })
      .then((res) => {
        setBookings(res.data.bookings);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [filters]);

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await api.patch(`/admin/bookings/${id}`, { status: newStatus });
      setBookings((prev) => prev.map((b) => (b._id === id ? res.data.booking : b)));
    } catch {
      // leave the row as-is; a toast system can surface this later
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-h2 font-heading">Bookings</h1>
      <p className="mt-1 text-text-secondary">Search, filter and manage every service request.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            className="field-input pl-9"
            placeholder="Search owner, pet or phone"
            value={filters.q}
            onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
          />
        </div>
        <select
          className="field-input w-auto"
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
        >
          <option value="">All statuses</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          className="field-input w-auto"
          value={filters.service}
          onChange={(e) => setFilters((f) => ({ ...f, service: e.target.value }))}
        >
          <option value="">All services</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <select
          className="field-input w-auto"
          value={filters.location}
          onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
        >
          <option value="">All areas</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      {status === 'loading' && (
        <p className="mt-8 flex items-center gap-2 text-text-secondary">
          <Loader2 size={18} className="animate-spin" /> Loading bookings…
        </p>
      )}
      {status === 'error' && (
        <p className="mt-8 text-red-600">Couldn't load bookings. Check the server connection.</p>
      )}
      {status === 'ready' && bookings.length === 0 && (
        <p className="mt-8 text-text-secondary">No bookings match these filters.</p>
      )}

      {status === 'ready' && bookings.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-text-secondary border-b border-border">
                <th className="py-2 pr-4">Date &amp; time</th>
                <th className="py-2 pr-4">Owner</th>
                <th className="py-2 pr-4">Pet</th>
                <th className="py-2 pr-4">Service</th>
                <th className="py-2 pr-4">Area</th>
                <th className="py-2 pr-4">Professional</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => {
                const service = services.find((s) => s.id === b.service);
                const location = locations.find((l) => l.id === b.location);
                return (
                  <tr key={b._id} className="border-b border-border/60 align-top">
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {new Date(b.preferredDate).toLocaleDateString()} · {b.preferredTime}
                    </td>
                    <td className="py-3 pr-4">
                      <p className="font-medium text-text-primary">{b.ownerName}</p>
                      <p className="text-text-secondary">{b.phone}</p>
                    </td>
                    <td className="py-3 pr-4">
                      {b.petName} <span className="text-text-secondary">({b.petType})</span>
                    </td>
                    <td className="py-3 pr-4">{service?.name || b.service}</td>
                    <td className="py-3 pr-4">{location?.label || b.location}</td>
                    <td className="py-3 pr-4">
                      <span
                        title="Available once Professional profiles are added (Phase 13)"
                        className="text-text-secondary italic"
                      >
                        Unassigned
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <select
                        className="field-input !py-1.5 !px-2 text-sm w-auto"
                        value={b.status}
                        disabled={updatingId === b._id}
                        onChange={(e) => updateStatus(b._id, e.target.value)}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="mt-1">
                        <Badge variant={STATUS_BADGE[b.status]}>{b.status}</Badge>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
