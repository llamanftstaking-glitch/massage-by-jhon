# Massage by Jhon — project memory

Bilingual (ES/EN) one-page marketing/booking site for Jhon Rivas Aiken,
massage therapist and personal trainer in New York City.

## Stack
- Next.js (App Router, static export: `output: "export"`), Tailwind CSS v4, pnpm.
- Single page: `app/page.tsx` renders `components/Site.tsx` (all sections live there).
- ALL user-facing text lives in `lib/i18n.ts` as `{ es, en }` pairs — always add
  both languages when adding copy. Icons are hand-rolled SVGs in `components/Icons.tsx`.
- Deployed on GitHub Pages at the apex custom domain `johnmassage.com` (served
  from the repo root, so base path is EMPTY). `public/CNAME` holds `johnmassage.com`.
  Image paths still go through the `BP` constant in `Site.tsx` (`NEXT_PUBLIC_BASE_PATH`),
  which is empty in production — do NOT set it when building for the custom domain.
- Live URL: https://johnmassage.com/ (also the `SITE_URL` constant in
  `app/layout.tsx` and `lib/i18n.ts` — update both if the domain changes again).
- Deploy = build with `node node_modules/next/dist/bin/next build` (NO
  `NEXT_PUBLIC_BASE_PATH` — empty base path = root), then push `out/` contents
  (+ `.nojekyll` + `CNAME`) to the `gh-pages` branch.
- Fonts: Playfair Display (headings) + Plus Jakarta Sans (body) via next/font.
- SEO: JSON-LD LocalBusiness schema in `layout.tsx`; `public/robots.txt` and
  `public/sitemap.xml`. Owner runs ads; keep metadata/og-image intact.
- Keep `html, body { overflow-x: clip }` (globals.css) — prevents mobile side-scroll.

## Business facts (source of truth)
- WhatsApp booking number: +1 (646) 905-7287 (`WHATSAPP_NUMBER = "16469057287"` in `lib/i18n.ts`).
  All CTAs open a DIRECT wa.me chat — there is no WhatsApp group.
- Instagram: @johns_aiken (`INSTAGRAM` / `INSTAGRAM_HANDLE` in `lib/i18n.ts`).
  A new IG account may replace it later — change those two constants only.
- Referral program (decision 2026-07): refer 2 friends who complete a paid massage
  → client gets a free 30-minute massage. Lives in the `#referidos` section; the
  "Share with a friend" button uses a wa.me contact-picker link (`buildWaShareLink`).
- Pricing is NOT shown on the site (owner's decision 2026-07: Jhon quotes each
  client individually over WhatsApp). Do not re-add prices without asking.
- 24/7 availability. Packages of 10, 15 or 20 sessions (drainage/reductive treatments).
- 15+ years in the service. Values: dedication, respect, seriousness.
- Licensed in Esthetics, NY Dept. of State, Lic. AEE-22-04669 (through 2026).
- Serves Washington Heights and all of NYC, home service with table included.
- Tips are welcome, never required.

## Sections (in order)
Nav → Hero → Services (7 cards incl. Lymphatic Drainage) → Home Service
→ Credentials → About (portrait + 4-photo gallery) → Testimonials → Referrals
(`#referidos`) → Booking wizard (3 steps → prefilled WhatsApp message) → Footer
→ floating WhatsApp button.

## Decisions / conventions
- Client testimonials are published as TEXT ONLY — never publish clients'
  personal photos from chats without their written consent.
- Jhon's own photos live in `public/images/jhon-*.jpg` (resized ≤1200px, jpeg q80).
- Owner communicates casually, often in Spanish; deliverables are pushed to a
  feature branch, then merged to `main` when they say "push live".
