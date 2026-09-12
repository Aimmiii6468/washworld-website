/**
 * Single source of truth for business details and page content.
 *
 * Every phone number, address, price, review and FAQ answer lives here so a
 * change only has to be made once instead of hunting through JSX.
 */

// Type-only import: erased at build time, so this stays a data module with no
// runtime dependency on the component layer.
import type { IconName } from "@/components/ui/Icon";

/**
 * Production origin. Never point this at a preview deployment.
 *
 * The default is the real domain, not the vercel.app alias, because everything
 * that decides which URL Google indexes derives from this one value: every
 * canonical tag, every schema @id, the sitemap and the Host line in robots.txt.
 * When it pointed at the vercel.app alias, the live .ca site was telling Google
 * that the canonical copy of every page lived somewhere else, which is the one
 * mistake that stops a new domain ranking at all.
 *
 * Keep the www. The site answers on www and the apex redirects to it, so a
 * canonical without www would point at a URL that redirects.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.washworldcoinlaundry.ca";

/**
 * True only for the real production deployment.
 *
 * Vercel sets VERCEL_ENV to "production" | "preview" | "development". Preview
 * builds use this to stay out of the index, so a client review link can never
 * compete with the live site in search results.
 */
export const IS_PRODUCTION = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const BUSINESS = {
  name: "Washworld Coin Laundry",
  streetAddress: "150 Kenwood Ave",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M6C 2S3",
  addressCountry: "CA",
  latitude: 43.6874107,
  longitude: -79.4245557,

  neighbourhood: "Wychwood-Humewood",
  nearby: "St. Clair West",

  phoneDisplay: "(416) 652-9274",
  phoneE164: "+1-416-652-9274",
  phoneHref: "tel:+14166529274",

  email: "order@curbsidelaundry.ca",
  emailHref: "mailto:order@curbsidelaundry.ca",

  /** Canonical Google Maps directions link. Used by every "Get Directions" CTA. */
  mapsUrl: "https://maps.app.goo.gl/wVfdXe871tYHFVLF6",

  /** Google Business Profile reviews tab. */
  reviewsUrl:
    "https://www.google.com/maps/place/Washworld+Coin+Laundry/@43.6874107,-79.4245557,17z/data=!4m8!3m7!1s0x882b3378ea43f451:0x43c0d61cce03d1fa!9m1!1b1",

  mapEmbedUrl:
    "https://maps.google.com/maps?q=Washworld+Coin+Laundry,+150+Kenwood+Ave,+Toronto&t=&z=15&ie=UTF8&iwloc=&output=embed",

  /** Sister brand that handles pickup and delivery. */
  curbsideUrl: "https://www.curbsidelaundry.ca",

  hoursDisplay: "8:00 AM - 10:00 PM",
  lastWashDisplay: "9:00 PM",

  /**
   * Decade the shop opened. The previous site said "since the 1980s" and
   * "43 years in business". The decade is used instead of a year count so the
   * copy does not go stale every January.
   */
  sinceDisplay: "the 1980s",

  /**
   * Directory listings that already carry the correct name, address and phone
   * number. These go into sameAs so the site is tied to the same local entity
   * Google is already cross-checking. Every one was confirmed to show
   * "Washworld Coin Laundry, 150 Kenwood Ave" and (416) 652-9274.
   *
   * Only add a listing after checking the NAP on it matches this file exactly.
   * A citation with a stale phone number does more harm than no citation.
   */
  citations: [
    "https://www.yellowpages.ca/bus/Ontario/York/Washworld-Coin-Laundry/1690016.html",
    "https://www.canpages.ca/page/ON/york/washworld-coin-laundry/1690016",
    "https://www.cylex-canada.ca/company/washworld-coin-laundry-12180309.html",
    "https://find-open.ca/york-toronto/washworld-coin-laundry-39293",
  ],
} as const;

/**
 * Google Search Console verification token.
 *
 * Committed rather than left to an environment variable. The token is not a
 * secret: it is a public meta tag whose whole purpose is to be readable by
 * anyone who views the page source. Keeping it in the repo means verification
 * survives a Vercel project being recreated or an env var being dropped, which
 * is exactly when a missing token goes unnoticed for weeks.
 *
 * GOOGLE_SITE_VERIFICATION still overrides it, so a second property can be
 * verified from a different deployment without a code change.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "IzTkIpGKaXTLzxRjnGDqBQkdUMhUw6qli51Rzrgn8ro";

/**
 * Share card image, used for Open Graph and Twitter on every page.
 *
 * Next's opengraph-image file convention only applies to pages that do not
 * declare an openGraph object of their own. Every page here declares one for
 * its own title and description, which silently replaced the parent and left
 * the whole site with no og:image at all: every WhatsApp, Facebook and
 * LinkedIn share was a bare grey box. So the image is spread into each page's
 * openGraph explicitly.
 */
export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Washworld Coin Laundry, 150 Kenwood Ave, Toronto",
} as const;

/**
 * Google rating shown on the site.
 * Pulled manually from the Google Business Profile on 2026-09-08.
 * Update both numbers together whenever the profile is re-checked.
 */
export const GOOGLE_RATING = {
  score: 4.4,
  count: 128,
  lastChecked: "2026-09-08",
} as const;

/**
 * Reviews transcribed from the live Google Business Profile, newest first.
 * Checked 2026-09-08 with the profile sorted by Newest.
 *
 * Only reviews that actually carry written text are listed. Several recent
 * five-star ratings (Kyle C, Rohan Patel, Ray Victor Reynes) were left with no
 * comment, so there is nothing to quote. Only add reviews that exist on the
 * profile.
 */
/**
 * Show the "8 months ago" line under each review card.
 *
 * Off by default: the profile has plenty of five-star ratings but the written
 * ones are mostly older, and a row of cards all dated a year back reads as
 * stale even though the reviews are real. The Google mark and the "read all
 * reviews" link still let anyone verify them at source. The dates are kept in
 * the data either way, for our own tracking.
 */
export const SHOW_REVIEW_DATES = false;

export const GOOGLE_REVIEWS = [
  {
    name: "kevin",
    time: "3 months ago",
    rating: 5,
    text: "Customer service is always excellent and friendly.",
  },
  {
    name: "Rodrigo Miziara Yunes",
    time: "5 months ago",
    rating: 5,
    text: "I left my clothes and they delivered them to my hotel door the same day. I recommend them 100%.",
  },
  {
    name: "Farhad Jalali",
    time: "8 months ago",
    rating: 5,
    text: "The new management has changed up the feel of the place. Their wash and fold service is a life saver and the few times I've used their dry cleaning services it has been great. Good people, good services.",
  },
  {
    name: "mina h",
    time: "8 months ago",
    rating: 5,
    text: "Clean, well-equipped laundromat with a very friendly atmosphere. The store manager is really friendly and welcoming, also the machines are easy to use.",
  },
  {
    name: "sonia silva",
    time: "8 months ago",
    rating: 5,
    text: "Definitely the best laundromat in the area. Very clean, great variety of washing machines and always friendly service. Really feels like a community. We recently started using the wash and fold service and we are extremely happy.",
  },
  {
    name: "C",
    time: "11 months ago",
    rating: 5,
    text: "The manager is friendly and the customers are also very nice. There are all the laundry amenities you need, coin machine, lots of washers and dryers, laundry carts, wifi while you wait, and this place has a wholesome community vibe to it.",
  },
  {
    name: "Aleksandra Rutkowska",
    time: "1 year ago",
    rating: 5,
    text: "Very clean space with mid and large size washing machines and drying machines. Changing machine available. You can also buy detergent or softener. People are really helpful if any problem occurred. Highly recommend.",
  },
  {
    name: "Espe Rubio",
    time: "3 years ago",
    rating: 5,
    text: "Nice and clean place to do your laundry. The staff is very friendly and helpful. They have 3 different sizes of machines and many dryers. My clothes are actually clean after I come here. Highly recommended.",
  },
] as const;

export const SELF_SERVE_PRICES = [
  {
    label: "Standard washer",
    sub: "Everyday loads",
    price: "$2.25",
    cycle: "~28 min",
    best: "Weekly clothes",
  },
  {
    label: "Large washer",
    sub: "Bedding and towels",
    price: "$5.00",
    cycle: "~32 min",
    best: "Sheets and towels",
  },
  {
    label: "Extra large washer",
    sub: "Duvets and comforters",
    price: "$8.00",
    cycle: "~38 min",
    best: "King duvets",
  },
  {
    label: "Dryers",
    sub: "Per 3 or 4 minutes",
    price: "$0.25",
    cycle: "Gas, high heat",
    best: "Everything",
  },
  {
    label: "Change machine",
    sub: "Change your bill to coins",
    price: "Free",
    cycle: "On site",
    best: "Any time",
  },
] as const;

export const WASH_FOLD_PRICES = [
  { label: "Clothes", sub: "Standard wash", price: "$1.40 / lb" },
  { label: "Pillows", sub: null, price: "$5 - $9" },
  { label: "Blankets", sub: "Twin to California king", price: "$20 - $40" },
  { label: "Mattress topper", sub: null, price: "$30 - $50" },
  { label: "Sleeping bags", sub: null, price: "$25 - $30" },
  { label: "Bags", sub: "School and duffle", price: "$5 - $15" },
] as const;

export const DRY_CLEAN_PRICES = [
  { label: "Shirts", sub: "Wash and press", price: "$4" },
  { label: "Blouses", sub: null, price: "$8" },
  { label: "Pants", sub: null, price: "$9" },
  { label: "Blazers & suits", sub: null, price: "$12 - $18" },
  { label: "Dresses", sub: "Short and long", price: "$19 - $24" },
  { label: "Winter jackets", sub: "Light and parka", price: "$30 - $55" },
] as const;

/**
 * Amenities the shop actually offers.
 *
 * Verified against the previous site copy. "Flat screen TVs" was removed on the
 * owner's instruction. The change machine was confirmed by the owner on
 * 2026-09-10; it was never on the old site, only in Google reviews.
 */
export const AMENITIES = [
  { title: "Free high-speed Wi-Fi", desc: "Fast enough to actually work on", icon: "wifi" },
  { title: "Air conditioned", desc: "Comfortable through the summer", icon: "air" },
  { title: "Snack & drink vending", desc: "Machines on site while you wait", icon: "vending" },
  { title: "Free customer parking", desc: "At the door, 2.5 hour limit", icon: "parking" },
  { title: "Detergent at the counter", desc: "Single use and full size, plus softener", icon: "detergent" },
  { title: "Change machine on site", desc: "Change your bill to coins any time", icon: "coin" },
] as const;

/** Short clips shown in the video tour. */
export const VIDEOS = [
  { id: "STKxtJVh450", title: "Facility tour", span: "tall" },
  { id: "49O-fVRTqMQ", title: "Walkthrough", span: "tall" },
  { id: "t5evX43MyrA", title: "Our washers", span: "wide" },
  { id: "YQuj_B09Kg0", title: "Our dryers", span: "wide" },
  { id: "WWVlMvxkn2k", title: "Inside the shop", span: "wide" },
  { id: "mLi74tWtvv0", title: "Folding area", span: "wide" },
] as const;

/**
 * Photo gallery, ordered so the mosaic fills exactly.
 *
 * The grid is four columns by three rows, which is twelve cells. The feature
 * photo takes a 2x2 block (four cells) and the other four are half-width
 * (two cells each), so 4 + 2 + 2 + 2 + 2 lands on twelve with nothing left
 * over. The earlier mix of full-size and half-size tiles left a hole in the
 * bottom right corner, so keep this arithmetic in mind before adding a photo:
 * six photos want a different shape, not one more tile bolted on.
 */
export const GALLERY = [
  {
    src: "/images/facility/facility-4.jpg",
    alt: "Row of numbered washers beneath framed artwork at Washworld Toronto",
    span: "feature",
  },
  {
    src: "/images/facility/facility-1.jpg",
    alt: "Stainless washers beside framed floral paintings",
    span: "wide",
  },
  {
    src: "/images/facility/facility-2.jpg",
    alt: "Gallery wall of framed prints above the machines",
    span: "wide",
  },
  {
    src: "/images/facility/facility-3.jpg",
    alt: "Large capacity washers along the tiled main aisle",
    span: "wide",
  },
  {
    src: "/images/facility/facility-5.jpg",
    alt: "Wall of stacked dryers at Washworld",
    span: "wide",
  },
] as const;

/** One question and answer, used by every FAQ block on the site. */
export type FaqItem = { q: string; a: string };

/** Homepage FAQ. Also rendered as FAQPage structured data. */
export const HOME_FAQ = [
  {
    q: "Where is the nearest coin laundry to St. Clair West?",
    a: "Washworld Coin Laundry is at 150 Kenwood Ave in Wychwood-Humewood, a short walk from St. Clair West, with free customer parking at the door.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open every day from 8:00 AM to 10:00 PM. The last wash goes in at 9:00 PM so everyone has time to finish before closing.",
  },
  {
    q: "How much does it cost to do laundry here?",
    a: "Self-serve washers run from $2.25 for a standard load up to $8.00 for the largest machines, and dryers are $0.25 per cycle block. Wash, dry and fold is $1.40 per pound.",
  },
  {
    q: "What payment methods do the machines accept?",
    a: "Cash, coin and Interac e-Transfer. There is a change machine on site so you can change your bill to coins, and never get stuck mid-load.",
  },
  {
    q: "Do you have machines big enough for a duvet or comforter?",
    a: "Yes. Our largest washers take king-size duvets, comforters and sleeping bags, and spin fast enough to cut your drying time roughly in half.",
  },
  {
    q: "Do you offer laundry pickup and delivery in Toronto?",
    a: "Yes, through Curbside Laundry, which we own and operate. Book a pickup window online and we collect, clean and deliver your laundry folded to your door.",
  },
] as const;

/**
 * Self-serve page FAQ.
 *
 * The first two answer searches ("how to use a laundromat machine", "wash a
 * comforter at a laundromat"), the rest are the house rules. Both belong on
 * this page: someone who has never used a laundromat is exactly the person
 * who needs the rules spelled out too.
 */
export const SELF_SERVE_RULES = [
  {
    q: "How do you use a laundromat machine?",
    a: "Pick a washer by load size, open it and check the drum is empty and clean, load your clothes without packing them tight, add detergent to the drawer, then select a cycle and pay at the machine with coin, cash or Interac e-Transfer. Note your machine number and come back when the cycle ends. Dryers work the same way: load, set the heat, and feed quarters for time.",
  },
  {
    q: "Can I wash a duvet or comforter here?",
    a: "Yes, and this is the main reason people come. A home washer cannot take a king duvet without straining the drum. Our extra large washers are built for them at $8.00 a load, and they spin fast enough to cut the drying time roughly in half. Sleeping bags, mattress toppers and heavy blankets are fine too.",
  },
  {
    q: "Check the machine before you load",
    a: "Give the washer or dryer a quick look first. We are not liable for damage caused by pens, crayons or bleach left behind by a previous customer, so please check your own pockets too.",
  },
  {
    q: "Be there when your cycle ends",
    a: "Laundry left more than five minutes after a cycle may be moved to a basket by staff or a waiting customer. Anything left over 24 hours is treated as abandoned and may be donated to local charities.",
  },
  {
    q: "What cannot go in the machines",
    a: "Items contaminated with bodily fluids or bed bugs are not permitted, for everyone's safety. Dyeing or tinting clothes in our machines is prohibited. Please shake heavy pet hair out before washing.",
  },
  {
    q: "Parking, hours and closing time",
    a: "Free customer parking with a 2.5 hour limit while you are using the laundromat. Last wash is 9:00 PM and the shop closes at 10:00 PM.",
  },
] as const;

/**
 * Wash, dry and fold service page FAQ.
 *
 * The first three questions are phrased to match real searches rather than to
 * sound tidy: "what is wash and fold service", "does wash and fold include
 * ironing" and "is wash and fold worth it" are all queries people actually
 * type. Answering them in the exact words they were asked is what earns the
 * FAQ rich result and, increasingly, the AI summary citation.
 */
export const WASH_FOLD_FAQ = [
  {
    q: "What is wash and fold service?",
    a: "You hand over a bag of laundry and get it back clean and folded. Our staff sort it by colour and fabric, wash it, dry it at the right heat for each load, then fold and stack it. There is no appointment and nothing to book, you just walk in with the bag.",
  },
  {
    q: "How does wash and fold work at Washworld?",
    a: "Drop the bag at the counter in any bag or basket, we weigh it and give you a pickup time, and we text you when it is ready. Most orders dropped in the morning are done the same day.",
  },
  {
    q: "Does wash and fold include ironing?",
    a: "No. Wash and fold is washed, dried and folded flat. If you want something pressed, our dry cleaning service handles shirts, blouses and suits, and you can drop both at the same counter on the same visit.",
  },
  {
    q: "Is wash and fold worth it?",
    a: "Self-serve is cheaper per load, so it comes down to your hour. At $1.40 per pound a normal week of clothes for one person lands around $15 to $25, which is what most people decide their evening is worth. Bulky items like duvets are often worth it either way, because our machines take them and a home washer does not.",
  },
  {
    q: "How much does wash and fold cost in Toronto?",
    a: "Clothes are $1.40 per pound with no minimum order. Bulky items are priced individually: pillows $5 to $9, blankets $20 to $40, mattress toppers $30 to $50, sleeping bags $25 to $30 and bags $5 to $15.",
  },
  {
    q: "How long does wash and fold take?",
    a: "Most orders are ready the same day if they are dropped off in the morning. We will let you know a pickup time when you drop the bag at the counter.",
  },
  {
    q: "Do I need to sort my laundry first?",
    a: "No. Bring it in any bag or basket and our staff will sort it by colour and fabric before washing.",
  },
  {
    q: "What detergent do you use?",
    a: "Commercial-grade detergents and softeners. If you have sensitive skin, ask for a free and clear option at the counter and we will use it for your order.",
  },
  {
    q: "Can you wash a duvet or comforter?",
    a: "Yes. Our largest washers handle king-size duvets, comforters and sleeping bags. These are priced per item rather than by weight.",
  },
] as const;

/**
 * Dry cleaning service page FAQ.
 *
 * "How does dry cleaning work", "how much does dry cleaning cost" and "how
 * long does dry cleaning take" are the three highest-volume dry cleaning
 * questions in Canada and none of them are hard to rank for. Answering them
 * properly on a service page is worth more than another paragraph of copy.
 */
export const DRY_CLEAN_FAQ = [
  {
    q: "How does dry cleaning work?",
    a: "Despite the name it is not dry. Garments go into a machine with a liquid solvent instead of water, which lifts oil and grease without soaking the fibres, so wool, silk and structured tailoring keep their shape and do not shrink. Stains are treated by hand first, then everything is steamed and pressed before it goes back on the hanger.",
  },
  {
    q: "How much is dry cleaning in Toronto?",
    a: "Shirts are $4 for wash and press, blouses $8, pants $9, blazers and suits $12 to $18, dresses $19 to $24 and winter jackets $30 to $55. Every item is priced on its own with nothing added at the counter.",
  },
  {
    q: "How long does dry cleaning take?",
    a: "Standard turnaround is a few business days. Drop your items at the counter and we will confirm the collection day before you leave.",
  },
  {
    q: "Can you remove stains?",
    a: "Shirts with stain removal are $7 instead of $4. Point out the stain when you drop the item off and tell us what caused it, as that makes a real difference to the result.",
  },
  {
    q: "Do you clean winter parkas and down jackets?",
    a: "Yes. Light jackets start at $30 and full parkas go up to $55 depending on size and filling.",
  },
] as const;

/** Pricing page FAQ, aimed at "laundromat prices" and "coin laundry prices". */
export const PRICES_FAQ = [
  {
    q: "How much does it cost to do a load of laundry at a laundromat?",
    a: "At Washworld a standard self-serve wash is $2.25 and dryers are $0.25 per cycle block, so a typical load costs about $3.50 to $4.50 all in. Larger machines for bedding are $5.00 and $8.00.",
  },
  {
    q: "Is wash and fold cheaper than doing it yourself?",
    a: "Self-serve is cheaper per load. Wash and fold at $1.40 per pound costs more but you drop the bag and leave, which is why most people use it for the weeks they cannot spare an hour.",
  },
  {
    q: "Do you charge a minimum for wash and fold?",
    a: "No. There is no minimum order and no membership fee.",
  },
  {
    q: "What payment do you take?",
    a: "Cash, coin and Interac e-Transfer. A change machine on site lets you change your bill to coins.",
  },
  {
    q: "Are the prices on this page final?",
    a: "Machine prices vary slightly with load size and cycle selection, so the display on the machine is always the final word. Wash and fold and dry cleaning prices are fixed as listed.",
  },
] as const;

/**
 * Commercial page FAQ.
 *
 * Sourced from the owner, 2026-09-10. What he confirmed, in his words:
 * commercial customers are charged a lot more per pound, there is a minimum,
 * the stains are harder, delivery costs more, and the right move is to invite
 * a custom quote. Condominium guest suites are the most profitable segment:
 * buildings where residents own their units and the corporation keeps
 * hotel-style suites for visiting family.
 *
 * So: no published commercial rate, ever. The walk-in $1.40 is the walk-in
 * rate and must never be presented as what a business pays. Naming trades is
 * fine here, because the question these answer is who the service is FOR, not
 * who is already a client.
 */
export const COMMERCIAL_FAQ = [
  {
    q: "Do you offer commercial laundry service in Toronto?",
    a: "Yes. We handle towels, bed linen, uniforms and guest suite bedding for businesses across Central Toronto, either dropped at the counter or collected from your door. Commercial work is quoted per account rather than charged at the walk-in rate.",
  },
  {
    q: "How much does commercial laundry cost?",
    a: "It is quoted per account, and it costs more per pound than our walk-in wash and fold. Business laundry is not a household load: the soiling is heavier, the stains are harder to lift, the volume is larger and pickup and delivery adds to it. Tell us roughly what you go through in a week and we will come back with a firm number.",
  },
  {
    q: "Is there a minimum order?",
    a: "Yes, commercial accounts carry a minimum, which is the main way they differ from walk-in wash and fold. The exact minimum depends on your volume and how often we collect, so it is set when we quote you.",
  },
  {
    q: "Do you do laundry for condominium guest suites?",
    a: "Yes, and it is the work we are best set up for. A guest suite turns over like a hotel room: sheets, duvet covers, pillowcases and towels have to come back clean, pressed and fast, often before the next booking that week. We can hold a stock rotation so the suite is never waiting on a wash.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Anywhere that goes through linen, towels or uniforms. Condominium guest suites, short-term rental hosts, salons and spas, gyms and studios, restaurants and cafes, clinics and offices. If your trade is not on that list it is still worth asking, because the answer is usually yes.",
  },
  {
    q: "Can you collect and deliver?",
    a: "Yes. We run Curbside Laundry ourselves, so collection and delivery is our own service rather than a third party. For a commercial account it is quoted along with the laundry, since a regular collection route costs more than a one-off pickup.",
  },
] as const;

/** FAQ page, grouped by topic. */
export const FAQ_CATEGORIES: readonly {
  id: string;
  title: string;
  icon: IconName;
  items: readonly FaqItem[];
}[] = [
  {
    id: "general",
    title: "General information",
    icon: "info",
    items: [
      {
        q: "What are your hours of operation?",
        a: "We are open daily from 8:00 AM to 10:00 PM. The last wash is at 9:00 PM so everyone has time to finish, and all machines must be empty by 10:00 PM.",
      },
      {
        q: "Where can I park?",
        a: "We offer complimentary customer-only parking right at 150 Kenwood Ave. There is a strictly enforced 2.5-hour limit while you are actively using the laundromat. Unauthorized vehicles or those exceeding the limit may be tagged or towed at the owner's expense.",
      },
      {
        q: "Do you have WiFi?",
        a: "Yes. We offer complimentary high-speed WiFi so you can stay productive or entertained while you wait.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Cash, coin and Interac e-Transfer. There is a change machine on site so you can change your bill to coins.",
      },
      {
        q: "Do you pick up and deliver laundry?",
        a: "Yes, through Curbside Laundry, which we own and operate. Book a pickup window online and we collect your laundry, wash it and bring it back folded to your door anywhere in Toronto.",
      },
    ],
  },
  {
    id: "machines",
    title: "Using the machines",
    icon: "machine",
    items: [
      {
        q: "What should I do before starting a load?",
        a: "Perform a quick pre-use inspection of the washer or dryer. We are not liable for damage caused by items left behind by previous users, like pens, crayons or bleach. Check your own pockets too.",
      },
      {
        q: "Can I bring my own detergent?",
        a: "Absolutely. We just ask that you use detergent and bleach responsibly. Dyeing or tinting clothes in our machines is strictly prohibited.",
      },
      {
        q: "Do you sell detergents and other supplies?",
        a: "Yes, we offer a variety of detergents, softeners and stain removers in both single-use and larger sizes.",
      },
      {
        q: "Can I use the dryers if I washed my clothes at home?",
        a: "Our dryers are reserved for customers who wash their laundry on-site. Management reserves the right to check items to verify they were washed here.",
      },
      {
        q: "What is the 5-minute rule?",
        a: "Please be present when your cycle ends. Laundry left for more than 5 minutes after a cycle may be moved to a basket by staff or waiting customers.",
      },
    ],
  },
  {
    id: "health",
    title: "Health, safety and hygiene",
    icon: "shield",
    items: [
      {
        q: "What items are prohibited for health reasons?",
        a: "Items contaminated with feces, bodily fluids, or bed bugs and similar infestations are strictly prohibited.",
      },
      {
        q: "Can you get bed bugs from a laundromat?",
        a: "It is the question people ask most and the honest answer is that the risk is small and it is on us to keep it that way. Bed bugs do not survive a hot wash or a hot dryer cycle, so the machines themselves are not the problem. We ban infested items outright, clean throughout the day rather than once at closing, and ask that laundry is carried in a sealed bag rather than tipped onto a folding table. If you are treating an infestation at home, bag everything and dry it on high heat first.",
      },
      {
        q: "Is the laundromat clean?",
        a: "We clean the floor and the folding tables through the day, not just at close. Machines are wiped between the busy stretches and taken out of service the moment something is wrong with one rather than left running. If you find a machine that has been left dirty by the previous customer, tell the person at the counter and it gets dealt with straight away.",
      },
      {
        q: "Are pets allowed?",
        a: "For health and safety reasons pets are not permitted inside. Certified service animals are the only exception. If you have items with excessive pet hair, please shake them out thoroughly before washing to prevent drainage clogs.",
      },
      {
        q: "Are children allowed?",
        a: "Yes, we are a family-friendly space. Children must be supervised at all times for their safety, and should not play on or inside the machines.",
      },
    ],
  },
  {
    id: "policies",
    title: "Policies and liability",
    icon: "doc",
    items: [
      {
        q: "What happens if I forget my laundry?",
        a: "Items left for more than 24 hours are considered abandoned and may be donated to local charities. Please double-check your machines before you leave.",
      },
      {
        q: "What if a machine malfunctions?",
        a: "Notify staff immediately. Please do not attempt to fix the equipment yourself.",
      },
      {
        q: "What is your liability policy for damaged items?",
        a: "Use of the facility is at your own risk. In the event of proven equipment failure, our liability is limited to a maximum of $25.00 per item and a total of $45.00 per customer. We are not responsible for damage caused by incorrect heat settings or pre-existing garment conditions.",
      },
      {
        q: "Is smoking or vaping allowed?",
        a: "No. Washworld is a 100% smoke-free and vape-free facility. There is a designated smoking area approximately 25 feet from the main entrance with seating and a smoker's receptacle.",
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    icon: "users",
    items: [
      {
        q: "What areas do you serve?",
        a: "Most of our customers come from Wychwood-Humewood, but people travel in from Rosedale, Forest Hill and across Central Toronto.",
      },
      {
        q: "What is the artwork in the store?",
        a: "We have a wide selection of paintings and drawings, including watercolours, oils, acrylics and lithographs. We think laundry day should be a bit more inspiring than a blank wall.",
      },
    ],
  },
];

/** Store policies, grouped. */
export const POLICY_SECTIONS: readonly {
  title: string;
  items: readonly (readonly [string, string])[];
}[] = [
  {
    title: "Hygiene and machine use",
    items: [
      ["Pre-use inspection", "Customers are responsible for inspecting the inside of washers and dryers before use. We are not liable for damage caused by items such as pens, crayons or bleach left behind by a previous user."],
      ["Biohazards and infestations", "For the health and safety of all patrons, items contaminated with feces, bodily fluids or bed bugs and similar infestations are strictly prohibited."],
      ["No pets allowed", "Pets are not permitted inside the facility. Service animals specifically trained to aid individuals with disabilities are the only exception."],
      ["Pet hair", "Please shake off and remove excessive animal hair from items before washing. This prevents drainage clogs and protects other customers' laundry."],
      ["Dryer use", "Our dryers are reserved for customers who have washed their laundry on-site. Staff reserve the right to check items to verify they were washed here."],
      ["Machine loading", "Do not overload machines. Overloading prevents proper cleaning and can cause mechanical failure."],
      ["Chemicals and dyeing", "Use detergent and bleach responsibly. Dyeing or tinting clothes in our machines is strictly prohibited."],
    ],
  },
  {
    title: "Hours and conduct",
    items: [
      ["Last wash and closing", "The last wash is at 9:00 PM. All machines must be empty and customers must exit the premises by 10:00 PM."],
      ["Professional conduct", "We maintain a respectful environment. Disruptive, rude or discriminatory behaviour toward staff or other patrons will result in a permanent ban."],
      ["Supervision", "Children must be supervised at all times and should not play on or inside the machines."],
      ["Environment", "Washworld is a 100% smoke-free and vape-free facility. A designated smoking area with seating and a receptacle sits about 25 feet from the main entrance. Please dispose of lint and empty bottles in the bins provided."],
    ],
  },
  {
    title: "Parking and premises",
    items: [
      ["Customer parking only", "We provide complimentary customer-only parking at 150 Kenwood Ave while you are actively using the laundromat."],
      ["Time limit", "There is a strictly enforced 2.5-hour parking limit."],
      ["Enforcement", "Unauthorized vehicles, or those exceeding the time limit, will be tagged or towed at the owner's expense."],
    ],
  },
  {
    title: "Unattended and lost items",
    items: [
      ["The five-minute rule", "Please be present when your cycle ends. Laundry left for more than five minutes after a cycle may be moved to a basket by staff or waiting customers."],
      ["Abandoned laundry", "Items left for more than 24 hours are considered abandoned and may be donated to local charities."],
      ["Pockets", "We are not responsible for damage caused by items left in pockets such as pens, coins and markers. Please check all pockets before loading."],
    ],
  },
  {
    title: "Liability and claims",
    items: [
      ["Limitation of liability", "In the event of proven loss or damage to garments caused by equipment failure, our liability is limited to a maximum of $25.00 per item and a total maximum of $45.00 per customer or order."],
      ["Use at your own risk", "We are not responsible for damage caused by incorrect heat settings, cycle choices or pre-existing garment conditions."],
      ["Machine malfunction", "If a machine malfunctions, notify staff immediately. Do not attempt to fix the machine yourself."],
    ],
  },
];
