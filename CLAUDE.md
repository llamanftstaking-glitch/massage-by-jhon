# Massage by Jhon — project memory

Bilingual (ES/EN) one-page marketing/booking site for Jhon Rivas Aiken,
massage therapist and personal trainer in New York City.

## Stack
- Next.js (App Router, static export: `output: "export"`), Tailwind CSS v4, pnpm.
- Single page: `app/page.tsx` renders `components/Site.tsx` (all sections live there).
- ALL user-facing text lives in `lib/i18n.ts` as `{ es, en }` pairs — always add
  both languages when adding copy. Icons are hand-rolled SVGs in `components/Icons.tsx`.
- Deployed on GitHub Pages under `/massage-by-jhon` — image paths must be prefixed
  with `NEXT_PUBLIC_BASE_PATH` (see the `BP` constant in `Site.tsx`).
- Live URL: https://llamanftstaking-glitch.github.io/massage-by-jhon/ (also the
  `SITE_URL` constant in `app/layout.tsx` — update it if a custom domain is added).
- Deploy = build with `NEXT_PUBLIC_BASE_PATH=/massage-by-jhon pnpm build`, then
  push `out/` contents (+ `.nojekyll`) to the `gh-pages` branch.
- Fonts: Playfair Display (headings) + Plus Jakarta Sans (body) via next/font.
- SEO: JSON-LD LocalBusiness schema in `layout.tsx`; `public/robots.txt` and
  `public/sitemap.xml`. Owner runs ads; keep metadata/og-image intact.
- Keep `html, body { overflow-x: clip }` (globals.css) — prevents mobile side-scroll.

## Business facts (source of truth)
- WhatsApp booking number: +1 (646) 905-7287 (`WHATSAPP_NUMBER = "16469057287"` in `lib/i18n.ts`).
  All CTAs open a DIRECT wa.me chat — there is no WhatsApp group.
- Instagram: @johns_aiken.
- Price: $100 per one-hour session, same price at any location, 24/7 availability.
- Packages of 10, 15 or 20 sessions (drainage/reductive treatments).
- 15+ years in the service. Values: dedication, respect, seriousness.
- Licensed in Esthetics, NY Dept. of State, Lic. AEE-22-04669 (through 2026).
- Serves Washington Heights and all of NYC, home service with table included.
- Tips are welcome, never required.

## Sections (in order)
Nav → Hero → Services (7 cards incl. Lymphatic Drainage) → Pricing → Home Service
→ Credentials → About (portrait + 4-photo gallery) → Testimonials → Booking wizard
(3 steps → prefilled WhatsApp message) → Footer → floating WhatsApp button.

## Decisions / conventions
- Client testimonials are published as TEXT ONLY — never publish clients'
  personal photos from chats without their written consent.
- Jhon's own photos live in `public/images/jhon-*.jpg` (resized ≤1200px, jpeg q80).
- Owner communicates casually, often in Spanish; deliverables are pushed to a
  feature branch, then merged to `main` when they say "push live".
