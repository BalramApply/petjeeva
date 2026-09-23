import Lead, { LEAD_STATUS_VALUES } from '../models/Lead.js';

export async function listLeads(req, res) {
  try {
    const { status, q } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (q) {
      const regex = new RegExp(q, 'i');
      filter.$or = [{ name: regex }, { phone: regex }, { email: regex }];
    }

    const leads = await Lead.find(filter).sort({ createdAt: -1 });
    res.json({ leads });
  } catch (err) {
    console.error('Failed to list leads:', err.message);
    res.status(500).json({ error: 'Could not load leads.' });
  }
}

// No public lead-capture form exists yet, so leads are logged manually
// by the admin (a phone call, WhatsApp inquiry, walk-in, etc.).
export async function createLead(req, res) {
  try {
    const data = req.validatedBody;
    const lead = await Lead.create({ ...data, source: data.source || 'other' });
    res.status(201).json({ lead });
  } catch (err) {
    console.error('Failed to create lead:', err.message);
    res.status(500).json({ error: 'Could not create lead.' });
  }
}

export async function updateLead(req, res) {
  try {
    const { status } = req.body;
    if (status && !LEAD_STATUS_VALUES.includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const lead = await Lead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ error: 'Lead not found' });

    res.json({ lead });
  } catch (err) {
    console.error('Failed to update lead:', err.message);
    res.status(500).json({ error: 'Could not update lead.' });
  }
}
