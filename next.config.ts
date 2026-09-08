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
};

export default nextConfig;
