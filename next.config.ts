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
   * Fallback redirect from the vercel.app alias to the production domain.
   *
   * Vercel now does this at the edge, in the project's domain settings, so in
   * normal operation a request never reaches this rule. It stays because a
   * domain setting is a checkbox in a dashboard that someone can change
   * without noticing what depends on it, and the failure mode is silent: two
   * fully crawlable copies of the site competing with each other.
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
        destination: "https://washworldcoinlaundry.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
