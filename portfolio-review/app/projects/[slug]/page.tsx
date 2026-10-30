import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import { isPubliclyVisible } from "@/lib/types";
import { projectTranslationsId } from "@/content/project-translations";
import { LocalizedText } from "@/components/ui/LocalizedText";
import {
  CaseStudyHero,
  AtAGlance,
  ProseSection,
  LimitationsSection,
  FutureImprovementsSection,
  VisualEvidenceSection,
  LinksSection,
  RelatedProjects,
  ISPUResearchSection,
  PrivateNotice,
} from "@/components/case-study/CaseStudyParts";

type Params = { slug: string };

// Draft projects are excluded here, and dynamicParams below refuses any
// slug not in this list — so a draft 404s even if its slug is guessed or
// requested directly.
export function generateStaticParams(): Params[] {
  return projects.filter(isPubliclyVisible).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !isPubliclyVisible(project)) return {};
  return {
    // `absolute` bypasses the layout's "%s — Name" template: project SEO
    // titles already carry the site name.
    title: { absolute: project.seo.title },
    description: project.seo.description,
    openGraph: { title: project.seo.title, description: project.seo.description },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  // In Next.js 15+/16, route params are a Promise and must be awaited.
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !isPubliclyVisible(project)) notFound();

  const cs = project.caseStudy;
  const isPrivate = project.status === "private";
  const idCopy = projectTranslationsId[project.slug];
  const idCase = idCopy?.caseStudy;
  const isISPU = Boolean(project.researchData);
  const isSALAX = project.slug === "sala-x";

  // ---- Private projects: compact, intentionally-limited template ----
  if (isPrivate) {
    return (
      <>
        <CaseStudyHero project={project} />
        <AtAGlance project={project} />
        <ProseSection heading="Overview" headingId="Ringkasan">
          <LocalizedText en={cs.plainOpening} id={idCase?.plainOpening ?? cs.plainOpening} />
        </ProseSection>
        <PrivateNotice project={project} />
        <LimitationsSection items={cs.limitations} itemsId={idCase?.limitations} />
        <LinksSection project={project} />
        <RelatedProjects current={project} />
      </>
    );
  }

  // ---- Standard template, shared by every published project ----
  return (
    <>
      <CaseStudyHero project={project} />
      <AtAGlance project={project} />

      <ProseSection heading="Overview" headingId="Ringkasan">
        <LocalizedText en={cs.plainOpening} id={idCase?.plainOpening ?? cs.plainOpening} />
      </ProseSection>
      {cs.problem && <ProseSection heading="Problem" headingId="Tantangan"><LocalizedText en={cs.problem} id={idCase?.problem ?? cs.problem} /></ProseSection>}
      {cs.whatIDid && <ProseSection heading="What I Did" headingId="Yang Saya Kerjakan"><LocalizedText en={cs.whatIDid} id={idCase?.whatIDid ?? cs.whatIDid} /></ProseSection>}
      {cs.resultPlain && <ProseSection heading="Result" headingId="Hasil"><LocalizedText en={cs.resultPlain} id={idCase?.resultPlain ?? cs.resultPlain} /></ProseSection>}

      {/* SALA-X leads with screens instead of a Data/Input section */}
      {isSALAX && <VisualEvidenceSection project={project} />}

      <ProseSection heading="Project details" headingId="Rincian proyek">
        <LocalizedText en={cs.technicalDetail} id={idCase?.technicalDetail ?? cs.technicalDetail} />
      </ProseSection>

      {isISPU && <ISPUResearchSection project={project} />}

      {!isSALAX && <VisualEvidenceSection project={project} />}

      <LimitationsSection items={cs.limitations} itemsId={idCase?.limitations} />
      <FutureImprovementsSection items={cs.futureImprovements} itemsId={idCase?.futureImprovements} />
      <LinksSection project={project} />
      <RelatedProjects current={project} />
    </>
  );
}
