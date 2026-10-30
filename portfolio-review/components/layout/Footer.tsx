import Link from "next/link";
import { site } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)]" style={{ backgroundColor: "var(--color-nav)" }}>
      <div className="container-max flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[16px] font-bold text-[var(--color-accent)]">{site.name}</p>
          <p className="mt-1 max-w-[460px] text-[13px] text-[var(--color-text-muted)]"><LocalizedText en={site.positioning} id={site.positioningId} /></p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-[14px] font-medium">
          <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru" className="focus-ring hover:text-[#25D366]">
            <WhatsAppIcon size={20} />
          </a>
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="focus-ring hover:text-[var(--color-accent)]">
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="focus-ring hover:text-[var(--color-accent)]">
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </a>
          <Link href="/#contact" className="focus-ring hover:text-[var(--color-accent)]">
            <LocalizedText en="Contact" id="Kontak" />
          </Link>
        </nav>
      </div>
      <div className="container-max pb-8 text-[13px] text-[var(--color-text-muted)]">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
