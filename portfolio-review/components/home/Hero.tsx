import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-20 lg:pt-24">
      {/* Decorative glows (hidden from assistive tech) */}
      <div aria-hidden="true" className="hero-blob -left-24 top-10 h-72 w-72 bg-[var(--color-accent)]" />
      <div aria-hidden="true" className="hero-blob -right-20 bottom-0 h-80 w-80 bg-[var(--color-accent-2)]" />

      <div className="container-max relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.07em] text-[var(--color-text-secondary)]">
              <span aria-hidden="true" className="pulse-dot h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <LocalizedText en={site.eyebrow} id={site.eyebrowId} />
            </p>

            <h1 className="gradient-text text-[40px] font-extrabold leading-[1.08] sm:text-[52px] lg:text-[60px]">
              {site.name}
            </h1>

            <p className="mt-5 text-[18px] font-semibold leading-[1.5] text-[var(--color-accent)] md:text-[20px]">
              <LocalizedText en={site.positioning} id={site.positioningId} />
            </p>
            <p className="mt-4 max-w-[580px] text-[16px] leading-[1.75] text-[var(--color-text-secondary)] md:text-[17px]">
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

          <div className="order-1 mx-auto w-full max-w-[300px] lg:order-2 lg:col-span-5 lg:max-w-[380px]">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-60 blur-xl"
              />
              <div className="profile-float relative overflow-hidden rounded-[26px] border-[3px] border-[var(--color-accent)] shadow-[var(--glow-strong)]">
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

        {/* Evidence strip — quick proof points for a fast skim */}
        <Reveal className="mt-14 md:mt-20">
          <p className="eyebrow mb-4"><LocalizedText en="Selected highlights" id="Ringkasan utama" /></p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.snapshot.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="card card-hover focus-ring group flex h-full items-start justify-between gap-3 p-5"
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
