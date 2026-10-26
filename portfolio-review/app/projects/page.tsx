import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { isPubliclyVisible, toCardData } from "@/lib/types";
import { existingAssetOrUndefined } from "@/lib/assets";
import { FilterBar } from "@/components/projects/FilterBar";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data, BI, machine learning, and web/IT projects by Eriel Setiawan Dewantoro, each documented with methodology, results, and limitations.",
};

export default function ProjectsPage() {
  // Draft projects never reach this list — see lib/types.ts isPubliclyVisible.
  // Only the minimal public card shape crosses into the client component.
  const visibleProjects = projects.filter(isPubliclyVisible).map((p) => ({
    ...toCardData(p),
    thumbnail: existingAssetOrUndefined(p.thumbnail),
  }));

  return (
    <section className="section-space">
      <div className="container-max">
        <h1 className="section-title !mb-6 text-[clamp(2rem,5vw,2.75rem)]">Projects</h1>
        <p className="reading text-[17px] text-[var(--color-text-secondary)]">
          Data analytics, business intelligence, machine learning, and web/IT projects —
          each documented with its methodology, results, and limitations.
        </p>
        <div className="mt-8">
          <FilterBar projects={visibleProjects} />
        </div>
      </div>
    </section>
  );
}
