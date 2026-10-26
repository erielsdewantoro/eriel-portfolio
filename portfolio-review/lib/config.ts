/**
 * The only place the site URL is defined. Used by app/layout.tsx
 * (metadataBase), app/sitemap.ts, and app/robots.ts.
 *
 * Resolution order (no domain is hard-coded):
 *  1. NEXT_PUBLIC_SITE_URL — set this in Vercel (or .env.local) once you
 *     have a custom domain, e.g. https://yourname.com
 *  2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel at
 *     build time (host only, no protocol), so the default *.vercel.app
 *     address works with no setup.
 *  3. http://localhost:3000 — local development only.
 */
function resolveBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const BASE_URL = resolveBaseUrl();
