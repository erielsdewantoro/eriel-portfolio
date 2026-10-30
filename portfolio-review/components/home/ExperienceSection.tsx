import Image from "next/image";
import { experience } from "@/content/experience";
import { existingAssetOrUndefined } from "@/lib/assets";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceGallery } from "@/components/home/ExperienceGallery";
import { Button } from "@/components/ui/Button";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space scroll-mt-20">
      <div className="container-max">
        <h2 className="section-title"><LocalizedText en="Experience" id="Pengalaman" /></h2>
        <div className="flex flex-col gap-8">
          {experience.map((entry, i) => {
            const images = (entry.images ?? [])
              .map((item) => ({ ...item, src: existingAssetOrUndefined(item.src) }))
              .filter((item): item is { src: string; alt: string } => Boolean(item.src));
            return (
              <Reveal key={entry.organization}>
                <article
                  className={`card card-hover overflow-hidden md:flex ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="p-6 md:flex-1 md:p-9">
                    <p className="eyebrow text-[var(--color-accent)]">{entry.period}</p>
                    <h3 className="mt-2 text-[22px] md:text-[26px]">{entry.organization}</h3>
                    <p className="mt-1 text-[15.5px] font-semibold text-[var(--color-text-secondary)]"><LocalizedText en={entry.role} id={entry.roleId ?? entry.role} /></p>
                    <ul className="mt-5 flex list-disc flex-col gap-2.5 pl-5 text-[15px] leading-[1.7] text-[var(--color-text-secondary)] marker:text-[var(--color-accent)]">
                      {entry.bullets.map((b, j) => (
                        <li key={j}><LocalizedText en={b} id={entry.bulletsId?.[j] ?? b} /></li>
                      ))}
                    </ul>

                    {entry.links?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {entry.links.map((link) => (
                          <Button key={link.href} href={link.href} variant="outline" external>
                            <LocalizedText en={link.label} id={link.labelId ?? link.label} />
                          </Button>
                        ))}
                      </div>
                    ) : null}

                    {entry.highlight && (
                      <div className="mt-6 rounded-[var(--radius-sm)] border-l-[3px] border-[var(--color-accent)] bg-[var(--color-info-bg)] p-4">
                        <p className="eyebrow mb-1.5 text-[var(--color-accent)]">{entry.highlight.label}</p>
                        {entry.highlight.lines.map((l, j) => (
                          <p key={j} className="text-[14.5px] leading-[1.65] text-[var(--color-text-secondary)]">
                            {l}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {images.length === 1 && (
                    <div className="relative min-h-[260px] bg-[var(--color-surface-subtle)] md:min-h-0 md:w-[36%] md:shrink-0">
                      <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        sizes="(min-width: 768px) 400px, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                  {images.length > 1 && (
                    <ExperienceGallery images={images} />
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
