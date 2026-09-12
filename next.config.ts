import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only the hosts the site actually loads images from.
    // images.unsplash.com and img.youtube.com were removed: nothing
    // references them any more.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,

  /**
   * Send the vercel.app alias to the real domain.
   *
   * Both hostnames serve the same site, so without this Google sees two full
   * copies and has to pick one. Canonical tags already point at the .ca domain,
   * but a 308 is a harder signal than a hint, and it stops anyone sharing a
   * vercel.app link that quietly competes with the site it came from.
   *
   * Matched on the exact production alias only. Preview deployments get
   * generated hostnames with a hash in them, so they are untouched and stay
   * reachable for client review.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "washworld-website.vercel.app",
          },
        ],
        destination: "https://www.washworldcoinlaundry.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
