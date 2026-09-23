# Pet Care Platform

Premium pet-care services website + booking/admin management system.

## Stack
- Client: React + Vite + Tailwind CSS + Framer Motion
- Server: Node.js + Express + MongoDB (Mongoose)
- Media: Cloudinary
- Auth: JWT (admin only, HTTP-only cookie)

## Structure
- `client/` — public website + admin dashboard (React SPA)
- `server/` — REST API

## Local setup
1. `cd server && npm install && cp .env.example .env` (fill in values)
2. `cd client && npm install && cp .env.example .env`
3. Run server: `npm run dev` (in `server/`)
4. Run client: `npm run dev` (in `client/`)

## Deployment
- Client → Vercel
- Server → Render
- Database → MongoDB Atlas
- Media → Cloudinary
