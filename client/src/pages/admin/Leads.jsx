import { useEffect, useState } from 'react';
import { Loader2, Search, Plus } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';
import api from '../../services/api';

const STATUS_OPTIONS = ['NEW', 'CONTACTED', 'CONVERTED', 'LOST'];
const SOURCE_OPTIONS = ['website', 'phone', 'whatsapp', 'walk-in', 'other'];

const STATUS_BADGE = {
  NEW: 'amber',
  CONTACTED: 'mint',
  CONVERTED: 'mint',
  LOST: 'neutral',
};

const emptyForm = { name: '', phone: '', email: '', service: '', source: 'phone', message: '' };

export default function AdminLeads() {
  const [filters, setFilters] = useState({ q: '', status: '' });
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | error

  const fetchLeads = () => {
    setStatus('loading');
    const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
    api
      .get('/admin/leads', { params })
      .then((res) => {
        setLeads(res.data.leads);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  };

  useEffect(fetchLeads, [filters]);

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await api.patch(`/admin/leads/${id}`, { status: newStatus });
      setLeads((prev) => prev.map((l) => (l._id === id ? res.data.lead : l)));
    } catch {
      // leave the row as-is; a toast system can surface this later
    }
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await api.post('/admin/leads', form);
      setLeads((prev) => [res.data.lead, ...prev]);
      setForm(emptyForm);
      setShowForm(false);
      setFormStatus('idle');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-h2 font-heading">Leads</h1>
          <p className="mt-1 text-text-secondary">
            No public inquiry form exists yet — log calls, WhatsApp messages or walk-ins here.
          </p>
        </div>
        <Button variant="primary" icon={Plus} onClick={() => setShowForm((v) => !v)}>
          Add Lead
        </Button>
      </div>

      {showForm && (
        <form onSubmit={submitLead} className="mt-6 card p-6 grid sm:grid-cols-2 gap-4 max-w-2xl">
          <div>
            <label className="field-label">Name</label>
            <input
              className="field-input"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="field-label">Phone</label>
            <input
              className="field-input"
              required
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="field-label">Email (optional)</label>
            <input
              className="field-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="field-label">Interested in</label>
            <select
              className="field-input"
              value={form.service}
              onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
            >
              <option value="">Not specified</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label">Source</label>
            <select
              className="field-input"
              value={form.source}
              onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
            >
              {SOURCE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="field-label">Notes (optional)</label>
            <textarea
              className="field-input"
              rows={2}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            />
          </div>

          {formStatus === 'error' && (
            <p className="field-error sm:col-span-2">Couldn't save this lead. Please try again.</p>
          )}

          <div className="sm:col-span-2 flex gap-3">
            <Button type="submit" variant="primary" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' && <Loader2 size={16} className="animate-spin" />}
              Save Lead
            </Button>
            <button type="button" className="btn-ghost" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            className="field-input pl-9"
            placeholder="Search name, phone or email"
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
      </div>

      {status === 'loading' && (
        <p className="mt-8 flex items-center gap-2 text-text-secondary">
          <Loader2 size={18} className="animate-spin" /> Loading leads…
        </p>
      )}
      {status === 'error' && <p className="mt-8 text-red-600">Couldn't load leads.</p>}
      {status === 'ready' && leads.length === 0 && (
        <p className="mt-8 text-text-secondary">No leads yet — add one above to get started.</p>
      )}

      {status === 'ready' && leads.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-text-secondary border-b border-border">
                <th className="py-2 pr-4">Received</th>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Contact</th>
                <th className="py-2 pr-4">Interested in</th>
                <th className="py-2 pr-4">Source</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => {
                const service = services.find((s) => s.id === l.service);
                return (
                  <tr key={l._id} className="border-b border-border/60 align-top">
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {new Date(l.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 pr-4 font-medium text-text-primary">{l.name}</td>
                    <td className="py-3 pr-4">
                      <p>{l.phone}</p>
                      {l.email && <p className="text-text-secondary">{l.email}</p>}
                    </td>
                    <td className="py-3 pr-4">{service?.name || '—'}</td>
                    <td className="py-3 pr-4 capitalize">{l.source}</td>
                    <td className="py-3 pr-4">
                      <select
                        className="field-input !py-1.5 !px-2 text-sm w-auto"
                        value={l.status}
                        onChange={(e) => updateStatus(l._id, e.target.value)}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="mt-1">
                        <Badge variant={STATUS_BADGE[l.status]}>{l.status}</Badge>
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
