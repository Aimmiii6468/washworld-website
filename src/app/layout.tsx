import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, BUSINESS } from "@/lib/site";

// Configure Poppins font with the specific weights we need for a premium look
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Configure Inter font for Body text hierarchy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure SEO Metadata (Title, Description, Social Sharing)
export const metadata: Metadata = {
  // metadataBase lets Next resolve relative OG/Twitter image paths to absolute URLs
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Washworld Coin Laundry | Premium Laundromat in Toronto",
    template: "%s | Washworld Coin Laundry",
  },
  description:
    "Experience the cleanest, most modern laundromat. Free Wi-Fi, A/C, huge capacity washers, and flexible payment options.",
  openGraph: {
    title: "Washworld Coin Laundry | Premium Laundromat",
    description: "Experience the cleanest, most modern laundromat in Toronto.",
    url: SITE_URL,
    siteName: "Washworld Coin Laundry",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washworld Coin Laundry",
    description:
      "Premium Laundromat in Toronto with huge capacity machines and free Wi-Fi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Local Business (SEO Boost)
  //
  // Note: aggregateRating is deliberately NOT included. Google treats
  // self-serving review markup (a business marking up its own rating) as a
  // structured data violation for LocalBusiness, so the rating lives in the
  // page UI only and is sourced from the live Google Business Profile.
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
    // suppressHydrationWarning is kept on <html> only. Browser extensions
    // commonly inject attributes on the root element; keeping it on <body>
    // as well was masking genuine hydration mismatches in page content.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans pt-24 flex flex-col min-h-screen`}
      >
        {/* Injecting Local SEO Schema */}
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
