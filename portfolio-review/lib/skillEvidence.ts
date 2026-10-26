import { projects } from "@/content/projects";
import { isPubliclyVisible } from "@/lib/types";

function normalize(s: string): string {
  return s.toLowerCase().replace(/[\s/]+/g, "");
}

/**
 * Returns the published/private projects whose techTags literally include
 * this skill label (case/spacing-insensitive exact match). This is how
 * "Used in" evidence is generated for Skills — never hand-typed — so it's
 * always accurate and automatically includes any new project that lists
 * the tag, with no manual bookkeeping. See docs/ADDING-A-PROJECT.md.
 */
export function projectsUsingSkill(label: string): { title: string; slug: string }[] {
  const target = normalize(label);
  return projects
    .filter(isPubliclyVisible)
    .filter((p) => p.techTags.some((t) => normalize(t) === target))
    .map((p) => ({ title: p.title, slug: p.slug }));
}
