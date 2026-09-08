import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Routes, with the date each one's content actually changed.
 *
 * lastModified used to be `new Date()`, which told Google every page had
 * changed on every single crawl. Google discounts a sitemap that cries wolf
 * like that, so these are real dates now: bump a route's date in the same
 * commit that changes its copy, and leave it alone otherwise.
 *
 * priority and changeFrequency are hints Google largely ignores. They are kept
 * because Bing still reads them and they cost nothing.
 */
const ROUTES = [
  { path: "", updated: "2026-09-08", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/prices", updated: "2026-09-08", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/self-serve", updated: "2026-09-08", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/wash-and-fold", updated: "2026-09-08", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/dry-cleaning", updated: "2026-09-08", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/commercial", updated: "2026-09-08", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/faq", updated: "2026-09-08", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", updated: "2026-09-08", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/about", updated: "2026-09-08", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/policies", updated: "2026-09-08", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(route.updated),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
