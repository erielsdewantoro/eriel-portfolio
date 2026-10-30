import Image from "next/image";
import Link from "next/link";
import { marqueeSkills, skillGroups } from "@/content/skills";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { projectsUsingSkill } from "@/lib/skillEvidence";
import { LocalizedText } from "@/components/ui/LocalizedText";
import { projectTranslationsId } from "@/content/project-translations";

function MarqueeSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-[18px] pr-[18px]"
      {...(duplicate ? { "aria-hidden": true, "data-dup": true } : { "aria-label": "Tools and technologies" })}
    >
      {marqueeSkills.map((s) => (
        <li
          key={s.label}
          className="card flex min-w-[190px] items-center gap-3 px-5 py-3.5 !shadow-none"
        >
          {/* Light tile keeps dark logos (GitHub, Pandas) readable in both themes */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-icon-tile)]">
            <Image src={s.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold">{s.label}</span>
            {s.note && <span className="block text-[11.5px] text-[var(--color-text-muted)]"><LocalizedText en={s.note} id={s.noteId ?? s.note} /></span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-space scroll-mt-20">
      <div className="container-max">
        <h2 className="section-title"><LocalizedText en="Skills" id="Keahlian" /></h2>

        <div className="marquee mb-12" role="region" aria-label="Tools and technologies / Alat dan teknologi">
          <div className="marquee-track">
            <MarqueeSet />
            <MarqueeSet duplicate />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            // Evidence is computed per chip from actual project techTags —
            // never a blanket group-level claim.
            const evidenced = group.chips
              .map((chip) => ({ chip, matches: projectsUsingSkill(chip.label) }))
              .filter((e) => e.matches.length > 0);

            return (
              <Reveal key={group.title} delay={(gi % 2) * 80}>
                <div className="card h-full p-6">
                  <h3 className="mb-2 text-[18px] text-[var(--color-accent)]"><LocalizedText en={group.title} id={group.titleId} /></h3>
                  <p className="mb-4 text-[13px] text-[var(--color-text-muted)]"><LocalizedText en={group.description} id={group.descriptionId} /></p>
                  <div className="flex flex-wrap gap-2">
                    {group.chips.map((chip) => (
                      <Chip key={chip.label} label={chip.label} note={chip.note} noteId={chip.noteId} />
                    ))}
                  </div>
                  {evidenced.length > 0 && (
                    <p className="mt-4 text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
                      {evidenced.map((e, i) => (
                        <span key={e.chip.label}>
                          {i > 0 && " · "}
                          {e.chip.label}:{" "}<LocalizedText en="Used in " id="Digunakan pada " />
                          {e.matches.map((m, j) => (
                            <span key={m.slug}>
                              {j > 0 && ", "}
                              <Link href={`/projects/${m.slug}`} className="focus-ring underline hover:text-[var(--color-accent)]">
                                <LocalizedText en={m.title} id={projectTranslationsId[m.slug]?.title ?? m.title} />
                              </Link>
                            </span>
                          ))}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
