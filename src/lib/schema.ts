/**
 * Structured data builders.
 *
 * Every JSON-LD block on the site is built here so the entity graph stays
 * consistent: one LaundryStore node with a stable @id, and everything else
 * pointing back at it rather than redeclaring the business. Google merges
 * nodes by @id, so a second, slightly different copy of the business on a
 * service page is worse than no copy at all.
 *
 * Deliberately NOT emitted anywhere: Review and aggregateRating. Google treats
 * review markup a business writes about itself as a structured data violation,
 * and the penalty is losing rich results across the whole site. The rating is
 * shown in the page UI and sourced from the live Google Business Profile.
 */

import { SITE_URL, BUSINESS, FaqItem } from "@/lib/site";

/** Stable node id for the business. Everything else references this. */
export const BUSINESS_ID = `${SITE_URL}/#laundrystore`;

/** Serialise for dangerouslySetInnerHTML, escaping the one sequence that can break out of a script tag. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function faqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Breadcrumb trail. Google shows this in place of the raw URL in results, so
 * every page below the homepage gets one, and the visible breadcrumb component
 * renders the same trail so the markup matches what a visitor sees.
 */
export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === "/" ? "" : crumb.path}`,
      }),
    ),
  };
}

/**
 * One service, offered by the business.
 *
 * offers carries real published prices. Where a price is a range or "from",
 * that is expressed with a PriceSpecification rather than pretending there is
 * a single number, because a price in markup that does not match the page is
 * the fastest way to lose rich results.
 */
export function serviceSchema({
  name,
  description,
  path,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  offers: readonly { name: string; price: string; note?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} prices`,
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: offer.name },
        priceCurrency: "CAD",
        price: offer.price,
        ...(offer.note ? { description: offer.note } : {}),
      })),
    },
  };
}

/** Neighbourhoods the shop actually draws from, per the old site and Google reviews. */
export const AREA_SERVED = [
  { "@type": "Place", name: "Wychwood-Humewood, Toronto" },
  { "@type": "Place", name: "St. Clair West, Toronto" },
  { "@type": "Place", name: "Forest Hill, Toronto" },
  { "@type": "Place", name: "Rosedale, Toronto" },
  { "@type": "Place", name: "Central Toronto" },
];

/**
 * The business itself. Rendered once, in the root layout.
 *
 * sameAs lists directory pages that already carry the correct name, address
 * and phone number. These are the citations Google cross-checks a local
 * business against, so naming them here ties the site to the same entity.
 */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LaundryStore",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: "Washworld Laundromat",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: [
      `${SITE_URL}/images/facility/facility-4.jpg`,
      `${SITE_URL}/images/facility/facility-1.jpg`,
      `${SITE_URL}/images/facility/facility-5.jpg`,
    ],
    logo: `${SITE_URL}/logo.webp`,
    description:
      "Coin laundry, wash and fold, and dry cleaning at 150 Kenwood Ave in Wychwood-Humewood, Toronto. Open every day 8AM to 10PM with free customer parking and free Wi-Fi.",
    priceRange: "$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Coin, Interac e-Transfer",
    hasMap: BUSINESS.mapsUrl,
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    sameAs: BUSINESS.citations,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: AREA_SERVED,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free customer parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Change machine", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vending machines", value: true },
      { "@type": "LocationFeatureSpecification", name: "Detergent for sale", value: true },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Self-serve coin laundry" },
        priceCurrency: "CAD",
        price: "2.25",
        url: `${SITE_URL}/services/self-serve`,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Wash, dry and fold" },
        priceCurrency: "CAD",
        price: "1.65",
        description: "Per pound, no minimum order",
        url: `${SITE_URL}/services/wash-and-fold`,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dry cleaning" },
        priceCurrency: "CAD",
        price: "4.00",
        description: "Shirts, wash and press",
        url: `${SITE_URL}/services/dry-cleaning`,
      },
    ],
  };
}

/**
 * WebSite node. Small, but it is what lets Google attach a site name to the
 * brand in results instead of falling back to the bare domain.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    alternateName: "Washworld",
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-CA",
  };
}
