// Creates default Availability docs for the three demo service zones
// used across the frontend (zone-a/b/c). Run with: npm run seed:availability
import 'dotenv/config';
import mongoose from 'mongoose';
import Availability from '../models/Availability.js';

const LOCATIONS = ['zone-a', 'zone-b', 'zone-c'];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);

  for (const location of LOCATIONS) {
    await Availability.findOneAndUpdate(
      { location },
      { location },
      { upsert: true, setDefaultsOnInsert: true, new: true }
    );
    console.log(`Availability ready for ${location}`);
  }

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seeding failed:', err.message);
  process.exit(1);
});
