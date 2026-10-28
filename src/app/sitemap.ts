import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/o-mnie/", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/uslugi/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cennik/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/kontakt/", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/polityka-prywatnosci/", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
