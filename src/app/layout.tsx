import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure Poppins font with the specific weights we need for a premium look
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

// Configure Inter font for Body text hierarchy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure SEO Metadata (Title, Description)
export const metadata: Metadata = {
  title: "Washworld Coin Laundry | Premium Laundromat in Toronto",
  description: "Experience the cleanest, most modern laundromat. Free Wi-Fi, A/C, huge capacity washers, and flexible payment options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Local Business (SEO Boost)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LaundryStore",
    name: "Washworld Coin Laundry",
    image: "https://www.google.com/maps/placeholder-image-url",
    "@id": "",
    url: "https://washworld-website.vercel.app",
    telephone: "+1-416-652-9274",
    address: {
      "@type": "PostalAddress",
      streetAddress: "150 Kenwood Ave.",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M6C 2S3",
      addressCountry: "CA"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "08:00",
      closes: "22:00"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${poppins.variable} font-sans pt-20 flex flex-col min-h-screen`}>
        {/* Injecting Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
