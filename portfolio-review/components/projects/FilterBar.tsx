"use client";

import { useMemo, useState } from "react";
import { Category, CATEGORY_LABELS, ProjectCardData } from "@/lib/types";
import { ProjectCard } from "@/components/projects/ProjectCard";

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "data-bi", label: CATEGORY_LABELS["data-bi"] },
  { key: "machine-learning", label: CATEGORY_LABELS["machine-learning"] },
  { key: "web-it", label: CATEGORY_LABELS["web-it"] },
  { key: "academic", label: CATEGORY_LABELS["academic"] },
];

export function FilterBar({ projects }: { projects: ProjectCardData[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3">
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
              {f.label}
            </button>
          );
        })}
      </div>

      <h2 className="sr-only">Project list</h2>
      <p aria-live="polite" className="mt-3 text-[14px] text-[var(--color-text-muted)]">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-[15px] text-[var(--color-text-secondary)]">
            No projects match this filter.
          </p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="focus-ring mt-3 underline text-[var(--color-accent)]"
          >
            Show all projects
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
