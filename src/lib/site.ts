/**
 * Single source of truth for business details used across the site.
 *
 * Every phone number, address, map link and opening hour lives here so a
 * change only has to be made once instead of hunting through JSX.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://washworld-website.vercel.app";

export const BUSINESS = {
  name: "Washworld Coin Laundry",
  streetAddress: "150 Kenwood Ave.",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M6C 2S3",
  addressCountry: "CA",
  latitude: 43.6874107,
  longitude: -79.4245557,

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

  /** Embedded map iframe source. */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Washworld+Coin+Laundry,+150+Kenwood+Ave,+Toronto&t=&z=15&ie=UTF8&iwloc=&output=embed",

  /** Sister brand that handles pickup and delivery. */
  curbsideUrl: "https://www.curbsidelaundry.ca",

  hoursLabel: "Everyday",
  hoursDisplay: "8:00 AM - 10:00 PM",
  lastWashDisplay: "9:00 PM",
} as const;

/**
 * Google rating shown in the reviews section.
 *
 * Pulled manually from the Google Business Profile on 2026-09-08.
 * Update both numbers together whenever the profile is re-checked.
 */
export const GOOGLE_RATING = {
  score: 4.4,
  count: 128,
  lastChecked: "2026-09-08",
} as const;
