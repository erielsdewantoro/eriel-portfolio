import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { site } from "@/content/site";
import { BASE_URL } from "@/lib/config";

export const viewport: Viewport = {
  themeColor: "#0f0f1a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} — Information Technology Graduate | Data & Business Analytics`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of Eriel Setiawan Dewantoro, an Information Technology graduate with a 3.70/4.00 GPA and experience in data analytics, business intelligence, community operations, public relations, and IT support.",
  openGraph: {
    title: `${site.name} — Information Technology Graduate`,
    description:
      "Information Technology graduate combining data analytics, business intelligence, community operations, public relations, and IT support.",
    type: "website",
  },
  // Optional: Google Search Console verification token (see README).
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

/**
 * Runs before first paint: applies the saved theme (dark by default) and
 * flags that JS is available so scroll-reveal can safely hide content.
 */
const themeInit = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");d.setAttribute("data-theme",t==="light"?"light":"dark");}catch(e){d.setAttribute("data-theme","dark");}d.classList.add("js");})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
