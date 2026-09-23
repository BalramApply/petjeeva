import { verifyToken } from '../utils/jwt.js';

export function requireAdminAuth(req, res, next) {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const payload = verifyToken(token);
    req.admin = { id: payload.sub, email: payload.email };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Session expired. Please log in again.' });
  }
}
