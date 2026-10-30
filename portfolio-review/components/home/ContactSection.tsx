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
          <div className="card relative overflow-hidden p-8 text-center md:p-14">
            <div aria-hidden="true" className="hero-blob -top-24 left-1/2 h-56 w-56 -translate-x-1/2 bg-[var(--color-accent)]" />
            <div className="relative">
              <h2 className="section-title section-title-center !mb-8"><LocalizedText en="Get In Touch" id="Hubungi Saya" /></h2>
              <p className="mx-auto max-w-[520px] text-[16.5px] text-[var(--color-text-secondary)]">
                <LocalizedText en="For work, project, or collaboration inquiries, contact Eriel by email or connect on LinkedIn and GitHub." id="Untuk urusan pekerjaan, proyek, atau kerja sama, hubungi Eriel melalui email, LinkedIn, atau GitHub." />
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <WhatsAppIcon size={21} />
                </a>
                <Button href={site.social.github} variant="outline" external>
                  <GitHubIcon size={18} />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
