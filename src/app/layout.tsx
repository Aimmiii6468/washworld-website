import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  IS_PRODUCTION,
  OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
} from "@/lib/site";
import { businessSchema, websiteSchema, jsonLd } from "@/lib/schema";

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

// Wordmark only. One weight, used for the Washworld logotype in the header
// and footer, so the brand name does not read as body copy.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-wordmark",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coin Laundry & Laundromat in Toronto | Washworld",
    template: "%s | Washworld Coin Laundry",
  },
  description:
    "Coin laundry, wash and fold from $1.40/lb and dry cleaning at 150 Kenwood Ave near St. Clair West. Open every day 8AM to 10PM, free parking and Wi-Fi.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Coin Laundry in Toronto | Washworld Coin Laundry",
    description:
      "Self-serve laundry, wash and fold, and dry cleaning in Wychwood-Humewood. Open every day, 8AM to 10PM.",
    url: SITE_URL,
    siteName: "Washworld Coin Laundry",
    locale: "en_CA",
    type: "website",
    images: [OG_IMAGE],
  },
  // Only the card type and the image. Leaving title and description out means
  // Next fills each page's Twitter card from that page's own title and
  // description; setting them here pinned every inner page's card to the
  // homepage copy.
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
  // Google Search Console. The token lives in site.ts, see the note there for
  // why it is committed rather than held in an environment variable.
  verification: { google: GOOGLE_SITE_VERIFICATION },
  // Preview deployments must never compete with the live site in search.
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // The whole entity graph in one node list: the business, and the website
  // that publishes it. Service and FAQ nodes on inner pages reference the
  // business by @id rather than repeating it. See src/lib/schema.ts.
  const graph = [businessSchema(), websiteSchema()];

  return (
    // suppressHydrationWarning stays on <html> only. Browser extensions inject
    // attributes on the root element; keeping it on <body> masked real
    // hydration mismatches in page content.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${publicSans.variable} ${jakarta.variable} ${outfit.variable} flex min-h-screen flex-col font-sans text-[1rem] leading-[1.68]`}
      >
        {graph.map((node) => (
          <script
            key={node["@id"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd(node) }}
          />
        ))}

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
