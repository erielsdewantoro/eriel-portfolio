import Image from "next/image";
import Link from "next/link";
import { skillTools } from "@/content/skills";
import { Reveal } from "@/components/ui/Reveal";
import { projectsUsingSkill } from "@/lib/skillEvidence";
import { LocalizedText } from "@/components/ui/LocalizedText";
import { projectTranslationsId } from "@/content/project-translations";

function SkillMarqueeRow({ skills, slower = false }: { skills: typeof skillTools; slower?: boolean }) {
  return (
    <div className="skill-marquee-window">
      <div className={`skill-marquee-track${slower ? " skill-marquee-track-slower" : ""}`}>
        {[false, true].map((duplicate) => (
          <ul key={String(duplicate)} className="skill-marquee-set" aria-hidden={duplicate || undefined}>
            {skills.map((skill) => (
              <li key={skill.label} className="skill-marquee-item">
                <span className="skill-marquee-logo">
                  <Image src={skill.icon} alt="" aria-hidden="true" width={40} height={40} className="h-8 w-8 object-contain" />
                </span>
                <span>{skill.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const projectEvidence = skillTools
    .map((skill) => ({ skill, projects: projectsUsingSkill(skill.label) }))
    .filter((entry) => entry.projects.length > 0);

  return (
    <section id="skills" className="section-space scroll-mt-20">
      <div className="container-max">
        <div className="mb-8 max-w-[760px]">
          <p className="eyebrow mb-2"><LocalizedText en="Capabilities" id="Kapabilitas" /></p>
          <h2 className="section-title !mb-3"><LocalizedText en="Skills & Tools" id="Keahlian & Perangkat" /></h2>
          <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)]">
            <LocalizedText en="A concise set of tools used across analytics, business intelligence, development, and design." id="Perangkat kerja utama untuk analitik, business intelligence, pengembangan, dan desain." />
          </p>
        </div>

        <Reveal>
          <div className="skills-marquee" role="region" aria-label="Skills and tools / Keahlian dan perangkat">
            <SkillMarqueeRow skills={skillTools.slice(0, 7)} />
            <SkillMarqueeRow skills={skillTools.slice(7)} slower />
          </div>
        </Reveal>

        {projectEvidence.length > 0 && (
          <Reveal>
            <section className="skills-proof-block mt-8 border-t border-[var(--color-border)] pt-6" aria-labelledby="skills-projects-title">
              <h3 id="skills-projects-title" className="mb-4 text-[16px] font-semibold">
                <LocalizedText en="Project references" id="Rujukan proyek" />
              </h3>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {projectEvidence.map(({ skill, projects }) => (
                  <li key={skill.label} className="text-[13px] leading-[1.65] text-[var(--color-text-muted)]">
                    <span className="font-semibold text-[var(--color-text-secondary)]">{skill.label}:</span>{" "}
                    {projects.map((project, index) => (
                      <span key={project.slug}>
                        {index > 0 && ", "}
                        <Link href={`/projects/${project.slug}`} className="proof-link focus-ring">
                          <LocalizedText en={project.title} id={projectTranslationsId[project.slug]?.title ?? project.title} />
                        </Link>
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}
      </div>
    </section>
  );
}
