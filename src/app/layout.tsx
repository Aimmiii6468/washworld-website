import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, IS_PRODUCTION, BUSINESS } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coin Laundry in Toronto | Washworld, 150 Kenwood Ave",
    template: "%s | Washworld Coin Laundry",
  },
  description:
    "Self-serve laundry, wash and fold, and dry cleaning at 150 Kenwood Ave near St. Clair West. Open every day 8AM to 10PM with free parking and free Wi-Fi.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Coin Laundry in Toronto | Washworld Coin Laundry",
    description:
      "Self-serve laundry, wash and fold, and dry cleaning in Wychwood-Humewood. Open every day, 8AM to 10PM.",
    url: SITE_URL,
    siteName: "Washworld Coin Laundry",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coin Laundry in Toronto | Washworld",
    description:
      "Self-serve laundry, wash and fold and dry cleaning near St. Clair West.",
  },
  // Preview deployments must never compete with the live site in search.
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // LocalBusiness schema.
  //
  // aggregateRating is deliberately omitted: Google treats self-serving review
  // markup as a structured data violation, so the rating lives in the page UI
  // only, sourced from the live Google Business Profile.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LaundryStore",
    "@id": `${SITE_URL}/#laundrystore`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/facility/facility-4.jpg`,
    logo: `${SITE_URL}/logo.webp`,
    priceRange: "$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Coin, Interac e-Transfer",
    hasMap: BUSINESS.mapsUrl,
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
    areaServed: [
      { "@type": "Place", name: "Wychwood-Humewood, Toronto" },
      { "@type": "Place", name: "St. Clair West, Toronto" },
      { "@type": "Place", name: "Forest Hill, Toronto" },
      { "@type": "Place", name: "Central Toronto" },
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
  };

  return (
    // suppressHydrationWarning stays on <html> only. Browser extensions inject
    // attributes on the root element; keeping it on <body> masked real
    // hydration mismatches in page content.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${publicSans.variable} ${jakarta.variable} flex min-h-screen flex-col font-sans text-[1rem] leading-[1.68]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
