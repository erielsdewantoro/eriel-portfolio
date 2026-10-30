import Link from "next/link";
import Image from "next/image";
import { Project, ProjectCardData, CATEGORY_LABELS, CATEGORY_LABELS_ID } from "@/lib/types";
import { Chip } from "@/components/ui/Chip";
import { TextLink } from "@/components/ui/TextLink";
import { ArrowIcon } from "@/components/ui/Icons";
import { LocalizedText } from "@/components/ui/LocalizedText";
import { projectTranslationsId } from "@/content/project-translations";

function LinkRow({ project }: { project: ProjectCardData }) {
  return (
    <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
      <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)]">
        <LocalizedText en={project.status === "private" ? "View overview" : "View case study"} id={project.status === "private" ? "Lihat ringkasan" : "Lihat studi kasus"} />
        <ArrowIcon size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
      {project.links.github && (
        <TextLink href={project.links.github} external>
          GitHub
        </TextLink>
      )}
      {project.links.demo && (
        <TextLink href={project.links.demo} external>
          Demo
        </TextLink>
      )}
      {project.links.figma && (
        <TextLink href={project.links.figma} external>
          Figma
        </TextLink>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectCardData }) {
  const isPrivate = project.status === "private";
  const idCopy = projectTranslationsId[project.slug];
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      {project.thumbnail ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-subtle)]">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? `${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-2"
          />
        </div>
      ) : isPrivate ? (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-[var(--color-border)] bg-[var(--color-surface-subtle)] px-6 text-center text-[13px] text-[var(--color-text-muted)]">
          <LocalizedText en="Private client project — details are not public" id="Proyek klien privat — rincian tidak dipublikasikan" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {isPrivate && <Chip label="Private" labelId="Privat" />}
          {project.categories.map((c) => (
            <Chip key={c} label={CATEGORY_LABELS[c]} labelId={CATEGORY_LABELS_ID[c]} />
          ))}
        </div>
        <h3 className="text-[20px] leading-[1.25]">
          <Link href={`/projects/${project.slug}`} className="card-link focus-ring">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--color-text-secondary)]"><LocalizedText en={project.cardDescription} id={idCopy?.cardDescription ?? project.cardDescription} /></p>

        {project.techTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techTags.slice(0, 4).map((t) => (
              <Chip key={t} label={t} />
            ))}
          </div>
        )}

        {project.resultLine && (
          <div className="mt-5 border-t border-[var(--color-border)] pt-4">
            <p className="eyebrow"><LocalizedText en="Result" id="Hasil" /></p>
            <p className="mt-1 text-[14.5px] font-medium leading-[1.55] text-[var(--color-text)]"><LocalizedText en={project.resultLine} id={idCopy?.resultLine ?? project.resultLine} /></p>
          </div>
        )}

        <div className="mt-auto">
          <LinkRow project={project} />
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjectCard({ project, thumbnail }: { project: Project; thumbnail?: string }) {
  const research = project.researchData;
  const idCopy = projectTranslationsId[project.slug];
  return (
    <article className="card card-hover group relative overflow-hidden p-6 md:p-9 lg:grid lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <p className="eyebrow mb-3 text-[var(--color-accent)]"><LocalizedText en="Undergraduate thesis · Featured project" id="Skripsi · Proyek unggulan" /></p>
        <h3 className="text-[28px] leading-[1.15] md:text-[36px]">
          <Link href={`/projects/${project.slug}`} className="card-link focus-ring">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-[16.5px] leading-[1.7] text-[var(--color-text-secondary)]"><LocalizedText en={project.cardDescription} id={idCopy?.cardDescription ?? project.cardDescription} /></p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techTags.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
        <p className="mt-5 text-[15px] font-medium leading-[1.6]"><LocalizedText en={project.resultLine} id={idCopy?.resultLine ?? project.resultLine} /></p>
        <LinkRow project={project} />
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:col-span-5 lg:mt-0">
        {thumbnail && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-subtle)]">
            <Image
              src={thumbnail}
              alt={project.thumbnailAlt ?? `${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-contain p-2"
            />
          </div>
        )}
        {research && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-5">
            {research.datasetStats.slice(0, 4).map((s) => (
              <div key={s.label}>
                <p className="tabular-nums text-[20px] font-bold leading-[1.15] text-[var(--color-accent)] md:text-[22px]">{s.value}</p>
                <p className="mt-1 text-[12px] text-[var(--color-text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
