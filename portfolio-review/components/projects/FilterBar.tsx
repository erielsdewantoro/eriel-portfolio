"use client";

import { useMemo, useState } from "react";
import { Category, CATEGORY_LABELS, CATEGORY_LABELS_ID, ProjectCardData } from "@/lib/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { LocalizedText } from "@/components/ui/LocalizedText";

const FILTERS: { key: Category | "all"; label: string; labelId: string }[] = [
  { key: "all", label: "All", labelId: "Semua" },
  { key: "data-bi", label: CATEGORY_LABELS["data-bi"], labelId: CATEGORY_LABELS_ID["data-bi"] },
  { key: "machine-learning", label: CATEGORY_LABELS["machine-learning"], labelId: CATEGORY_LABELS_ID["machine-learning"] },
  { key: "web-it", label: CATEGORY_LABELS["web-it"], labelId: CATEGORY_LABELS_ID["web-it"] },
  { key: "academic", label: CATEGORY_LABELS.academic, labelId: CATEGORY_LABELS_ID.academic },
];

export function FilterBar({ projects }: { projects: ProjectCardData[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category / Saring proyek berdasarkan kategori" className="flex flex-wrap gap-3">
        {FILTERS.map((f) => {
          const pressed = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(f.key)}
              className={`focus-ring min-h-[44px] rounded-full border px-5 text-[14.5px] font-medium transition-all duration-[var(--duration-fast)] ${
                pressed
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-[var(--glow)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {pressed && <span aria-hidden="true">✓ </span>}
              <LocalizedText en={f.label} id={f.labelId} />
            </button>
          );
        })}
      </div>

      <h2 className="sr-only">Project list</h2>
      <p aria-live="polite" className="mt-3 text-[14px] text-[var(--color-text-muted)]">
        <LocalizedText en={<>Showing {filtered.length} of {projects.length} projects</>} id={<>Menampilkan {filtered.length} dari {projects.length} proyek</>} />
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-[15px] text-[var(--color-text-secondary)]">
            <LocalizedText en="No projects match this filter." id="Tidak ada proyek pada kategori ini." />
          </p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="focus-ring mt-3 underline text-[var(--color-accent)]"
          >
            <LocalizedText en="Show all projects" id="Tampilkan semua proyek" />
          </button>
        </div>
      ) : (
        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
