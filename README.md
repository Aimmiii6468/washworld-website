# Washworld Coin Laundry

Marketing website for Washworld Coin Laundry, 150 Kenwood Ave, Toronto.

Live: https://washworld-website.vercel.app

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (theme lives in `src/app/globals.css`) |
| Animation | framer-motion |
| Icons | lucide-react |
| Fonts | Poppins (headings) + Inter (body) via `next/font/google` |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

Node 20 or newer is required.

> The build needs internet access because `next/font/google` downloads and
> self-hosts the Poppins and Inter files at build time.

## Environment variables

Copy `.env.example` to `.env.local` for local work, and add the same keys in
Vercel under **Project Settings -> Environment Variables**.

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical origin used for metadata, Open Graph and JSON-LD. Set it to the custom domain once one is pointed at the site. |
| `RESEND_API_KEY` | for the contact form | API key from https://resend.com/api-keys. Without it `/api/contact` returns a clear "not connected yet" message instead of silently dropping enquiries. |
| `CONTACT_TO_EMAIL` | optional | Inbox that receives contact form enquiries. Defaults to `order@curbsidelaundry.ca`. |
| `CONTACT_FROM` | optional | Verified sender. Defaults to Resend's shared `onboarding@resend.dev`, which is fine for testing but should be swapped for a verified domain sender before launch. |

## Project structure

```
src/
  app/
    layout.tsx              root layout, metadata, LocalBusiness JSON-LD
    globals.css             Tailwind v4 theme tokens and utilities
    page.tsx                homepage
    about/ contact/ faq/ policies/
    services/self-serve/ services/wash-and-fold/ services/dry-cleaning/
    api/contact/route.ts    contact form handler (Resend)
    icon.png                browser + PWA icon
    apple-icon.png          iOS home screen icon
    favicon.ico             multi-resolution ICO
    opengraph-image.png     1200x630 social share card
  components/
    Navbar.tsx  Footer.tsx  ContactForm.tsx  LiteYouTube.tsx
  lib/
    site.ts                 single source of truth for business details
public/
  logo.webp
  images/facility/          facility photography
  images/services/          service photography
```

## Editing content

Business details (address, phone, email, hours, Google Maps links, the Google
rating shown on the homepage) all live in **`src/lib/site.ts`**. Change them
there once instead of editing individual pages.

Prices are still inline in the service pages and the homepage pricing section.
Search for the dollar amount to find them.

### Reviews

The homepage reviews carousel uses real reviews transcribed from the Google
Business Profile. They live in the `GOOGLE_REVIEWS` array at the top of
`src/app/page.tsx`, and the star rating and review count are in `GOOGLE_RATING`
in `src/lib/site.ts`.

Only add reviews that actually exist on the Google profile, and update
`GOOGLE_RATING.lastChecked` when you refresh them.

### Videos

`components/LiteYouTube.tsx` paints the YouTube poster frame first, then mounts
the real iframe only while the tile is on screen. Starts are staggered by the
`index` prop, and the iframe is unmounted once the tile scrolls away, which caps
the number of live players to whatever fits in the viewport.

Do not change it back to mounting every embed at page load: the homepage shows
seven clips and each YouTube embed pulls roughly a megabyte of player code.

Visitors on `prefers-reduced-motion` or Data Saver keep the thumbnail plus a
play button. Pass `autoplay={false}` to force that behaviour on any tile.

## Deployment

Pushing to `main` deploys to production on Vercel. Pull requests get their own
preview URL.

Before a production launch:

1. Point the custom domain at the Vercel project and set `NEXT_PUBLIC_SITE_URL`
   to match.
2. Add `RESEND_API_KEY` and verify a sending domain so contact form mail lands
   in the inbox rather than in spam.
3. Re-check the Google rating and review count in `src/lib/site.ts`.

## Known follow-ups

- No `sitemap.ts` or `robots.ts` yet.
- Home, About, FAQ and the three service pages do not export their own
  `metadata`, so they inherit the root title. Each needs splitting into a
  server page plus a client component to fix this.
- No custom `not-found.tsx`.
- The logo artwork reads "COIN LAUINDRY". The typo is in the source image, not
  in the code.
