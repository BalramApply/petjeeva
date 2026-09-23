import Admin from '../models/Admin.js';
import { signAdminToken } from '../utils/jwt.js';

const COOKIE_NAME = 'adminToken';
const isProd = process.env.NODE_ENV === 'production';

const cookieOptions = {
  httpOnly: true,
  secure: isProd, // requires HTTPS in production
  sameSite: isProd ? 'none' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const valid = await admin.comparePassword(password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = signAdminToken(admin);
    res.cookie(COOKIE_NAME, token, cookieOptions);

    res.json({ admin: { id: admin._id, name: admin.name, email: admin.email } });
  } catch (err) {
    console.error('Admin login failed:', err.message);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
}

export function logout(req, res) {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, secure: isProd, sameSite: isProd ? 'none' : 'lax' });
  res.json({ success: true });
}

export async function me(req, res) {
  try {
    const admin = await Admin.findById(req.admin.id).select('name email');
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.json({ admin });
  } catch (err) {
    res.status(500).json({ error: 'Could not load admin session.' });
  }
}
