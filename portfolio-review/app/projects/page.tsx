import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { isPubliclyVisible, toCardData } from "@/lib/types";
import { existingAssetOrUndefined } from "@/lib/assets";
import { FilterBar } from "@/components/projects/FilterBar";
import { LocalizedText } from "@/components/ui/LocalizedText";

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
        <h1 className="section-title !mb-6 text-[clamp(2rem,5vw,2.75rem)]"><LocalizedText en="Projects" id="Proyek" /></h1>
        <p className="reading text-[17px] text-[var(--color-text-secondary)]">
          <LocalizedText en="Projects using data, reporting, machine learning, and web design. Each page explains what I did and what the results mean." id="Kumpulan proyek analisis data, laporan, machine learning, dan desain web. Setiap halaman menjelaskan pekerjaan yang dilakukan dan arti hasilnya." />
        </p>
        <div className="mt-8">
          <FilterBar projects={visibleProjects} />
        </div>
      </div>
    </section>
  );
}
