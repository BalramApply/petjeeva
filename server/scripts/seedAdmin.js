// Creates the first admin account from env vars. There's no public
// registration endpoint by design — only one business owner logs in.
// Run with: npm run seed:admin
import 'dotenv/config';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

async function seed() {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD, MONGODB_URI } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in your .env before seeding.');
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);

  const email = ADMIN_EMAIL.toLowerCase();
  const existing = await Admin.findOne({ email });

  if (existing) {
    console.log('Admin already exists for', email);
  } else {
    const passwordHash = await Admin.hashPassword(ADMIN_PASSWORD);
    await Admin.create({ name: ADMIN_NAME || 'Admin', email, passwordHash });
    console.log('Admin account created for', email);
  }

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seeding failed:', err.message);
  process.exit(1);
});
