import { projects } from "@/content/projects";
import { FeaturedProjectCard, ProjectCard } from "@/components/projects/ProjectCard";
import { toCardData } from "@/lib/types";
import { existingAssetOrUndefined } from "@/lib/assets";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

const MAX_SUPPORTING_CARDS = 3;

/**
 * Fully data-driven: which projects show up here is controlled entirely by
 * each project's `status` and `featured` fields in content/projects.ts —
 * nothing here needs to change when a project is added, removed, or
 * un-featured. See docs/ADDING-A-PROJECT.md.
 */
export function SelectedProjects() {
  const featured = projects.filter((p) => p.status === "published" && p.featured);

  const flagship = featured.find((p) => p.flagship) ?? featured[0];
  const supporting = featured.filter((p) => p.slug !== flagship?.slug).slice(0, MAX_SUPPORTING_CARDS);

  if (!flagship) return null;

  return (
    <section id="projects" className="section-space scroll-mt-20">
      <div className="container-max">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title">Selected Projects</h2>
          <TextLink href="/projects" className="mb-9">
            View all projects
          </TextLink>
        </div>

        <Reveal>
          <FeaturedProjectCard project={flagship} thumbnail={existingAssetOrUndefined(flagship.thumbnail)} />
        </Reveal>

        {supporting.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={{ ...toCardData(p), thumbnail: existingAssetOrUndefined(p.thumbnail) }} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
