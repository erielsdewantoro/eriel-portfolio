import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function Hero() {
  return (
    <section className="hero-shell">
      <div className="container-max relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="hero-copy order-2 min-w-0 lg:order-1 lg:col-span-8">
            <p className="eyebrow mb-5">
              <LocalizedText en={site.eyebrow} id={site.eyebrowId} />
            </p>

            <h1 className="hero-name">
              {site.name}
            </h1>

            <p className="hero-role mt-6">
              <LocalizedText en={site.positioning} id={site.positioningId} />
            </p>
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.8] text-[var(--color-text-secondary)] md:text-[17px]">
              <LocalizedText en={site.supportingStatement} id={site.supportingStatementId} />
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={site.primaryCta.href}>
                <LocalizedText en={site.primaryCta.label} id={site.primaryCta.labelId} />
                <ArrowIcon />
              </Button>
              <Button href={site.secondaryCta.href} variant="outline">
                <LocalizedText en={site.secondaryCta.label} id={site.secondaryCta.labelId} />
              </Button>
              <LocalizedText
                en={(
                  <Button href="/cv/cv-eriel-en.pdf" download="Eriel-Setiawan-Dewantoro-CV-English.pdf" variant="outline">
                    <DownloadIcon size={16} />
                    Download CV
                  </Button>
                )}
                id={(
                  <Button href="/cv/cv-eriel-id.pdf" download="Eriel-Setiawan-Dewantoro-CV-Bahasa-Indonesia.pdf" variant="outline">
                    <DownloadIcon size={16} />
                    Unduh CV
                  </Button>
                )}
              />
              <div className="flex items-center">
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile / Profil GitHub, opens in new tab / buka di tab baru"
                  className="focus-ring flex h-12 w-12 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <GitHubIcon size={22} />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile / Profil LinkedIn, opens in new tab / buka di tab baru"
                  className="focus-ring flex h-12 w-12 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <LinkedInIcon size={21} />
                </a>
                <a
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru"
                  className="focus-ring flex h-12 w-12 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[#25D366]"
                >
                  <WhatsAppIcon size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-photo-wrap order-1 mx-auto w-full min-w-0 max-w-[280px] lg:order-2 lg:col-span-4 lg:max-w-[340px]">
            <div className="hero-photo">
              <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src={site.profileImage}
                  alt={site.profileAlt}
                  width={691}
                  height={947}
                  priority
                  sizes="(min-width: 1024px) 380px, 300px"
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <Reveal className="hero-highlights mt-12 pt-6 md:mt-16 md:pt-8">
          <p className="eyebrow mb-5"><LocalizedText en="Selected highlights" id="Ringkasan utama" /></p>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.snapshot.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="focus-ring group flex h-full items-start justify-between gap-3 border-b border-[var(--color-border)] pb-4 transition-colors hover:border-[var(--color-accent)]"
                >
                  <span>
                    <span className="block text-[15px] font-semibold leading-snug text-[var(--color-text)]">
                      <LocalizedText en={item.label} id={item.labelId} />
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-[1.5] text-[var(--color-text-muted)]">
                      <LocalizedText en={item.detail} id={item.detailId} />
                    </span>
                  </span>
                  <ArrowIcon className="mt-1 shrink-0 text-[var(--color-accent)] transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
