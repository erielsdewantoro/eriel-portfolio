import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { isPubliclyVisible } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
  ];

  // Draft projects are excluded — only published/private (publicly
  // reachable) case studies belong in the sitemap.
  const projectRoutes: MetadataRoute.Sitemap = projects.filter(isPubliclyVisible).map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
