import Link from "next/link";
import { site } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-max flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div>
          <p className="text-[16px] font-bold text-[var(--color-accent)]">{site.name}</p>
          <p className="mt-1 max-w-[460px] text-[13px] text-[var(--color-text-muted)]"><LocalizedText en={site.positioning} id={site.positioningId} /></p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] font-medium">
          <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru" className="focus-ring hover:text-[var(--color-accent)]">
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
      <div className="container-max border-t border-[var(--color-border)] py-5 text-[12px] text-[var(--color-text-muted)]">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
