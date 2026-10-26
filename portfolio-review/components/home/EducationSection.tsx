import Image from "next/image";
import { certifications, education, nonFormalEducation } from "@/content/education";
import { existingAssetOrUndefined } from "@/lib/assets";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function EducationSection() {
  const logo = existingAssetOrUndefined(education.logo);
  return (
    <section id="education" className="section-space scroll-mt-20">
      <div className="container-max">
        <h2 className="section-title">Education</h2>
        <Reveal>
          <div className="card flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center md:p-8">
            {logo && (
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-icon-tile)] p-2">
                <Image src={logo} alt={education.logoAlt} width={64} height={64} className="h-16 w-16 object-contain" />
              </span>
            )}
            <div>
              <h3 className="text-[20px] text-[var(--color-accent)]">{education.institution}</h3>
              <p className="mt-1 text-[15.5px] text-[var(--color-text-secondary)]">{education.degree}</p>
              <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">{education.status}</p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]">
                {education.relevantCoursework}
              </p>
            </div>
          </div>
        </Reveal>

        <h2 className="section-title mt-16">Non-formal Education</h2>
        <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          Practical courses and bootcamps that extend formal study with applied tools and project work.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {nonFormalEducation.map((program, i) => {
            const image = existingAssetOrUndefined(program.image);
            return (
              <Reveal key={program.title} delay={i * 80} className="h-full">
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  {image && (
                    <div className="relative aspect-[4/3] border-b border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-3">
                      <Image
                        src={image}
                        alt={program.imageAlt ?? `${program.title} certificate`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain p-3"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[18px] leading-snug">{program.title}</h3>
                    <p className="mt-1.5 text-[13.5px] text-[var(--color-text-secondary)]">
                      {program.issuer}{program.period ? ` · ${program.period}` : ""}
                    </p>
                    {program.detail && <p className="mt-1 text-[13px] font-medium text-[var(--color-accent)]">{program.detail}</p>}
                    {program.credentialId && (
                      <p className="mt-1 font-mono text-[12px] text-[var(--color-text-muted)]">Certificate ID: {program.credentialId}</p>
                    )}
                    <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{program.summary}</p>
                    <h4 className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">Relevant learning areas</h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {program.learningAreas.map((area) => (
                        <li key={area} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[12px] text-[var(--color-text-secondary)]">{area}</li>
                      ))}
                    </ul>
                    {program.href && (
                      <div className="mt-auto pt-5 text-[14px]">
                        <TextLink href={program.href} external>Verify certificate</TextLink>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <h2 className="section-title mt-16">Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cred, i) => {
            const image = existingAssetOrUndefined(cred.image);
            return (
              <Reveal key={cred.title} delay={i * 80} className="h-full">
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  {image && (
                    <div className="relative aspect-[4/3] border-b border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-3">
                      <Image
                        src={image}
                        alt={cred.imageAlt ?? `${cred.title} certificate`}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-3"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[16px] leading-snug">{cred.title}</h3>
                    <p className="mt-1.5 text-[13.5px] text-[var(--color-text-secondary)]">
                      {cred.issuer}
                      {cred.period ? ` · ${cred.period}` : ""}
                    </p>
                    {cred.detail && <p className="mt-1 text-[13px] font-medium text-[var(--color-accent)]">{cred.detail}</p>}
                    {cred.credentialId && (
                      <p className="mt-1 font-mono text-[12px] text-[var(--color-text-muted)]">ID: {cred.credentialId}</p>
                    )}
                    {cred.href && (
                      <div className="mt-auto pt-4 text-[14px]">
                        <TextLink href={cred.href} external>
                          View certificate
                        </TextLink>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
