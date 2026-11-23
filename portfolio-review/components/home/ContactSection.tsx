import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizedText } from "@/components/ui/LocalizedText";

/** Contact links for email, WhatsApp, LinkedIn, and GitHub. */
export function ContactSection() {
  const hasEmail = Boolean(site.social.email);

  return (
    <section id="contact" className="section-space scroll-mt-20">
      <div className="container-max">
        <Reveal>
          <div className="contact-panel grid gap-8 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 md:p-12">
            <div>
              <p className="eyebrow mb-3"><LocalizedText en="Start a conversation" id="Mulai percakapan" /></p>
              <h2 className="mb-4 text-[clamp(2rem,4vw,3.3rem)]"><LocalizedText en="Get In Touch" id="Hubungi Saya" /></h2>
              <p className="max-w-[520px] text-[16px] text-[var(--color-text-secondary)]">
                <LocalizedText en="For work, project, or collaboration inquiries, contact Eriel by email or connect on LinkedIn and GitHub." id="Untuk urusan pekerjaan, proyek, atau kerja sama, hubungi Eriel melalui email, LinkedIn, atau GitHub." />
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              {hasEmail && (
                <Button href={`mailto:${site.social.email}`}>
                  <MailIcon size={18} />
                  {site.social.email}
                </Button>
              )}
              <Button href={site.social.linkedin} variant="outline" external>
                <LinkedInIcon size={17} />
                LinkedIn
              </Button>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru"
                title="WhatsApp"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <WhatsAppIcon size={21} />
              </a>
              <Button href={site.social.github} variant="outline" external>
                <GitHubIcon size={18} />
                GitHub
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
