# SEO

What is built into the site, why, and what still has to happen outside the
codebase. Read this before changing a title, a heading or a schema block.

## Keyword map

One primary keyword per page. Nothing is targeted twice, because two pages
chasing the same phrase split their own signal and Google picks the weaker one.

Volumes are Canadian monthly searches from Semrush, checked 2026-09-08. KD is
Semrush keyword difficulty out of 100.

| Page | Primary keyword | Vol | KD | Supporting |
|---|---|---|---|---|
| `/` | coin laundry toronto | 880 | 14 | laundromat toronto (1000, KD 19), coin laundry near me (6600), laundry near me (18100) |
| `/services/self-serve` | self-serve coin laundry toronto | low | — | how to use a laundromat machine, laundromat with large washers, wash a comforter at a laundromat |
| `/services/wash-and-fold` | wash and fold toronto | 140 | 26 | wash and fold near me (880), what is wash and fold service, does wash and fold include ironing, is wash and fold worth it |
| `/services/dry-cleaning` | dry cleaning toronto | 260 | 41 | how does dry cleaning work (1000, KD 32), how much does dry cleaning cost (320, KD 5), how long does dry cleaning take (320, KD 16) |
| `/prices` | laundromat prices toronto | 20 | — | how much does it cost at a laundromat (110, KD 14), how much is wash and fold |
| `/commercial` | commercial laundry service toronto | 30 | — | bulk laundry toronto |
| `/faq` | laundromat questions | — | — | can you get bed bugs from a laundromat (50), are laundromats clean (30) |
| `/about` | best laundromat toronto | 20 | — | laundromat wychwood, laundromat forest hill (20) |
| `/contact` | laundromat 150 kenwood ave | — | — | laundromat near st clair west |
| `/policies` | laundromat rules | — | — | — |

Two things about these numbers. First, the head terms are unusually soft: KD 14
for "coin laundry toronto" is low for a city term, and page one is currently
small single-location sites with thin copy plus a Reddit thread. Second, the
enormous numbers next to "coin laundry near me" and "laundry near me" are not
page targets. Nobody ranks a page for "near me"; Google answers those from the
local pack, which is won on the Google Business Profile, proximity and reviews,
not on-page copy. They are in the table because they are the reason the local
work below matters more than anything in this repo.

## What is on the site

**Titles and descriptions.** Every page has a unique title and description,
keyword first, brand last. Descriptions are 140 to 155 characters so Google
does not truncate them. The root layout appends `| Washworld Coin Laundry` via
a title template, so page titles must not repeat the brand.

**Headings.** One `h1` per page, containing the primary keyword. Section
headings are real `h2`s in document order, not styled divs.

**Structured data** — all of it in `src/lib/schema.ts`, one builder per node:

- `LaundryStore` with a stable `@id`, rendered once in the root layout. Carries
  address, geo, hours, payment methods, amenities, `makesOffer` with the three
  headline prices, and `sameAs` pointing at directory citations.
- `WebSite`, so Google has a site name to show instead of the bare domain.
- `BreadcrumbList` on every page below the homepage, matching the visible
  breadcrumb exactly. Google swaps the URL in a result for this trail.
- `FAQPage` on the homepage and every page with an FAQ block.
- `Service` on each service page, with a real `hasOfferCatalog` and a
  `provider` reference back to the business `@id` rather than a second copy of
  the business.

**Deliberately not emitted: `Review` and `aggregateRating`.** Google treats
review markup a business writes about its own site as a structured data
violation, and the penalty is losing rich results site-wide. The 4.4 rating is
shown in the UI and sourced from the live Google profile, where anyone can
verify it. Do not add it because a competitor has it.

**Crawl control.** `robots.ts` returns a blanket disallow on any non-production
deployment, so client preview links can never be indexed or compete with the
live site. `sitemap.ts` carries real per-route `lastModified` dates; bump a
route's date in the same commit that changes its copy. It used to send
`new Date()` on every request, which tells Google every page changed on every
crawl and gets the whole sitemap discounted.

**Internal linking.** Each service page links to the other two and to the price
list, so a crawler arriving on one can reach the rest without going back to the
homepage. Curbside Laundry is linked from the header menu, the footer and a
band on nine pages.

## What has to happen outside this repo

The code is the smaller half. For a single-location laundromat, the local
signals below decide the ranking.

### Before launch

1. **Point `NEXT_PUBLIC_SITE_URL` at the real domain.** Everything canonical,
   every schema `@id`, the sitemap and robots all derive from it. Until it is
   set, the whole site canonicalises to the vercel.app preview host.
2. **Set `RESEND_API_KEY`** or the contact form silently fails.
3. **Decide the domain.** The business has directory listings but no website of
   its own indexed anywhere, so there is no history to preserve and no
   redirects to write. That is unusual and it is good news: a clean start.

### Week one

4. **Google Business Profile.** This is the single highest-leverage item and
   none of it is code. Confirm the categories (primary: Laundromat; secondary:
   Dry cleaner, Laundry service), add the website URL, load the facility photos,
   fill in the attributes the site already claims — free Wi-Fi, free parking,
   air conditioning, on-site change machine — and set the hours to match
   8:00 AM to 10:00 PM daily.
5. **Search Console.** Add the property, set `GOOGLE_SITE_VERIFICATION` in
   Vercel (the meta tag only renders when that variable is set), submit
   `/sitemap.xml`, and request indexing for the homepage and the three service
   pages.
6. **Bing Webmaster Tools.** Import from Search Console, it takes a minute and
   Bing still reads the sitemap priorities.
7. **Check the citations in `BUSINESS.citations`.** Yellow Pages, Canpages,
   Cylex and FindOpen all list the business. Confirm each shows the current
   name, address and phone, and add the website URL where the listing allows
   it. A citation with a stale phone number is worse than no citation.

### Ongoing

8. **Reviews are the ranking factor here.** The profile is at 4.4 from 128, but
   the written reviews are mostly eight months and older, which is why the dates
   are hidden on the site right now. Ask at the counter. Three or four fresh
   written reviews a month moves the local pack more than anything else on this
   list, and it lets us turn `SHOW_REVIEW_DATES` back on.
9. **Two reviews need the owner's attention.** Brandi Nunez left one star about
   staff manner, and Mark E left four after coming in on the old site's false
   card-payment claim and finding it untrue. Both deserve a reply from the
   owner.
10. **Re-check the rating quarterly** and update `GOOGLE_RATING` in
    `src/lib/site.ts`, both numbers together.

## Open questions for the owner

- **Is there a change machine?** It is listed in amenities and in the price
  table on the strength of three Google reviews. It was never on the old site.
- **Which trades does he want to take on?** Still open. What he has confirmed
  is narrower: the shop does laundry and nothing else, there is no fixed weekly
  collection, and there is no separate commercial rate. A business pays the
  published price. `/commercial` is written as an enquiry page on that basis and
  must not imply an account, a contract or a negotiated rate. Curbside Laundry
  is the same owner's business, so linking it for pickup and delivery is
  accurate. Once he says which trades he wants, the page can be sharpened to
  sell to them by name.
- **The logo artwork reads "COIN LAUINDRY".** The typo is in the source image,
  not the code.

## Next content, in priority order

1. A `/services` hub page targeting "laundry service toronto" (880, KD 38). The
   only head term the site does not currently own a page for. It would also
   restore the middle breadcrumb crumb, which was dropped because there was no
   real page to point it at.
2. A neighbourhood page for St. Clair West or Wychwood-Humewood, but only with
   something real to say about it. A thin page per postcode is a penalty, not a
   strategy.
3. A short guide answering "how to wash a duvet or comforter". Real volume,
   nobody in Toronto owns it, and the extra large washers are the reason people
   travel to this shop.
