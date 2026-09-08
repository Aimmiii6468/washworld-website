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

/** Wash, dry and fold service page FAQ. */
export const WASH_FOLD_FAQ = [
  {
    q: "How much does wash and fold cost in Toronto?",
    a: "Clothes are $1.65 per pound with no minimum order. Bulky items are priced individually: pillows $5 to $9, blankets $20 to $40, mattress toppers $30 to $50, sleeping bags $25 to $30 and bags $5 to $15.",
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

/** Dry cleaning service page FAQ. */
export const DRY_CLEAN_FAQ = [
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
    a: "Self-serve is cheaper per load. Wash and fold at $1.65 per pound costs more but you drop the bag and leave, which is why most people use it for the weeks they cannot spare an hour.",
  },
  {
    q: "Do you charge a minimum for wash and fold?",
    a: "No. There is no minimum order and no membership fee.",
  },
  {
    q: "What payment do you take?",
    a: "Cash, coin and Interac e-Transfer. A change machine on site turns bills into quarters.",
  },
  {
    q: "Are the prices on this page final?",
    a: "Machine prices vary slightly with load size and cycle selection, so the display on the machine is always the final word. Wash and fold and dry cleaning prices are fixed as listed.",
  },
] as const;

/** Commercial page FAQ, aimed at "commercial laundry service". */
export const COMMERCIAL_FAQ = [
  {
    q: "Do you offer commercial laundry service in Toronto?",
    a: "Yes. We handle towels, linen and uniforms for small businesses around Wychwood-Humewood and Central Toronto, with pickup and delivery available through Curbside Laundry.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Hair and beauty salons, gyms and studios, short-term rental hosts, restaurants and cafes, and small clinics. If you go through towels or linen every week, we can take it off your hands.",
  },
  {
    q: "How is commercial laundry priced?",
    a: "Regular commercial work is quoted per account based on volume and frequency, which usually works out cheaper than the standard $1.65 per pound. Get in touch and we will put a number together.",
  },
  {
    q: "Can you collect and deliver?",
    a: "Yes, through Curbside Laundry, which we own and operate. We can set up a fixed weekly collection so you never have to think about it.",
  },
] as const;

/** FAQ page, grouped by topic. */
export const FAQ_CATEGORIES: readonly {
  id: string;
  title: string;
  items: readonly FaqItem[];
}[] = [
  {
    id: "general",
    title: "General information",
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
        a: "Cash, coin and Interac e-Transfer. There is a change machine on site so you can turn bills into quarters.",
      },
    ],
  },
  {
    id: "machines",
    title: "Using the machines",
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
    items: [
      {
        q: "What items are prohibited for health reasons?",
        a: "Items contaminated with feces, bodily fluids, or bed bugs and similar infestations are strictly prohibited.",
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
