/**
 * Single source of truth for business details and page content.
 *
 * Every phone number, address, price, review and FAQ answer lives here so a
 * change only has to be made once instead of hunting through JSX.
 */

/** Production origin. Never point this at a preview deployment. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://washworld-website.vercel.app";

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
  streetAddress: "150 Kenwood Ave.",
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
 * Reviews transcribed from the live Google Business Profile.
 * Only add reviews that actually exist on the profile.
 */
export const GOOGLE_REVIEWS = [
  {
    name: "sonia silva",
    time: "8 months ago",
    rating: 5,
    text: "Definitely the best laundromat in the area. Very clean, great variety of washing machines and always friendly service. Really feels like a community.",
  },
  {
    name: "Farhad Jalali",
    time: "8 months ago",
    rating: 5,
    text: "Their wash and fold service is a life saver, and the few times I've used their dry cleaning it has been great. Good people, good services.",
  },
  {
    name: "C",
    time: "11 months ago",
    rating: 5,
    text: "Coin machine, lots of washers and dryers, laundry carts, wifi while you wait, and this place has a wholesome community vibe to it.",
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
    sub: "Bills to quarters",
    price: "Free",
    cycle: "On site",
    best: "Any time",
  },
] as const;

export const WASH_FOLD_PRICES = [
  { label: "Clothes", sub: "Standard wash", price: "$1.65 / lb" },
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
 * owner's instruction. The change machine is not on the old site but three
 * separate Google reviewers mention it, so it is listed pending confirmation.
 */
export const AMENITIES = [
  { title: "Free high-speed Wi-Fi", desc: "Fast enough to actually work on", icon: "wifi" },
  { title: "Air conditioned", desc: "Comfortable through the summer", icon: "air" },
  { title: "Snack & drink vending", desc: "Machines on site while you wait", icon: "vending" },
  { title: "Free customer parking", desc: "At the door, 2.5 hour limit", icon: "parking" },
  { title: "Detergent at the counter", desc: "Single use and full size, plus softener", icon: "detergent" },
  { title: "Change machine on site", desc: "Turn bills into quarters any time", icon: "coin" },
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

export const GALLERY = [
  {
    src: "/images/facility/facility-4.jpg",
    alt: "Row of numbered washers beneath framed artwork at Washworld Toronto",
    span: "feature",
  },
  {
    src: "/images/facility/facility-1.jpg",
    alt: "Stainless washers beside framed floral paintings",
    span: null,
  },
  {
    src: "/images/facility/facility-2.jpg",
    alt: "Gallery wall of framed prints above the machines",
    span: null,
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
    a: "Self-serve washers run from $2.25 for a standard load up to $8.00 for the largest machines, and dryers are $0.25 per cycle block. Wash, dry and fold is $1.65 per pound.",
  },
  {
    q: "What payment methods do the machines accept?",
    a: "Cash, coin and Interac e-Transfer. There is a change machine on site that turns bills into quarters, so you never get stuck mid-load.",
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

/** Self-serve page rules, also used as that page's FAQ block. */
export const SELF_SERVE_RULES = [
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
