export type Category =
  | "data-bi"
  | "machine-learning"
  | "web-it"
  | "academic";

export const CATEGORY_LABELS: Record<Category, string> = {
  "data-bi": "Data & BI",
  "machine-learning": "Machine Learning",
  "web-it": "Web / IT",
  academic: "Academic",
};

/**
 * - "published": appears on /projects, is eligible for Home's Selected
 *   Projects, and gets a full public case-study page.
 * - "private": appears on /projects and gets a case-study page, but only
 *   the intentionally-limited private-project treatment (see
 *   PrivateNotice) — no source/data detail is shown.
 * - "draft": never rendered publicly, anywhere. Excluded from /projects,
 *   Home, the sitemap, and generateStaticParams for the case-study route
 *   (which also sets dynamicParams = false), so a draft slug 404s even if
 *   requested directly.
 */
export type ProjectStatus = "published" | "draft" | "private";

export type ProjectLinks = {
  github?: string;
  demo?: string;
  figma?: string;
};

export type FigureAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type MetricRow = {
  model: string;
  precision: string;
  recall: string;
  f1: string;
  rocAuc: string;
};

export type ResearchData = {
  datasetStats: { label: string; value: string }[];
  classSplit: { label: string; count: number; pct: string }[];
  sameDaySetting: MetricRow[];
  historicalSetting: MetricRow[];
  shapFeatures: { feature: string; value: string }[];
};

export type CaseStudy = {
  plainOpening: string;
  /** Omit (don't pass an empty string) when not yet confirmed — the
   *  template hides the section entirely rather than rendering a
   *  placeholder. Used for the Problem / What I Did / Result sections. */
  problem?: string;
  whatIDid?: string;
  resultPlain?: string;
  technicalDetail: string;
  limitations: string[];
  futureImprovements: string[];
  visualEvidence?: FigureAsset[];
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  /** Eligible for Home's Selected Projects. Ignored for status "draft". */
  featured?: boolean;
  /** At most one project should carry this — it gets the large, two-column
   *  featured-card treatment on Home instead of a standard card. */
  flagship?: boolean;
  categories: Category[];
  cardDescription: string; // A-copy
  resultLine: string;
  techTags: string[];
  links: ProjectLinks;
  thumbnail?: string;
  /** Alt text for the card image. Defaults to "<title> preview"; use for illustrations. */
  thumbnailAlt?: string;
  recruiterSummary: string; // B-copy
  technicalSummary: string; // C-copy
  caseStudy: CaseStudy;
  researchData?: ResearchData; // ISPU only
  seo: { title: string; description: string };
  /** Internal workflow notes only — editor/maintainer awareness. Never
   *  rendered on any public page. */
  needsConfirmation?: string[];
};

/** Indonesian display copy. Project facts and measurements stay in the source data. */
export type ProjectTranslation = {
  title?: string;
  cardDescription?: string;
  resultLine?: string;
  recruiterSummary?: string;
  technicalSummary?: string;
  caseStudy?: {
    plainOpening?: string;
    problem?: string;
    whatIDid?: string;
    resultPlain?: string;
    technicalDetail?: string;
    limitations?: string[];
    futureImprovements?: string[];
    visualEvidenceCaptions?: string[];
  };
  researchData?: {
    datasetStatLabels?: string[];
    classSplitLabels?: string[];
  };
};

export const CATEGORY_LABELS_ID: Record<Category, string> = {
  "data-bi": "Data & BI",
  "machine-learning": "Machine Learning",
  "web-it": "Web & IT",
  academic: "Akademik",
};

/**
 * Shared project-list filters. Every page/component that lists or looks up
 * projects goes through these, so a new project only needs a `status`
 * (and optionally `featured`) to automatically appear (or not) in the
 * right places — see docs/ADDING-A-PROJECT.md.
 */
export function isPubliclyVisible(project: Project): boolean {
  return project.status === "published" || project.status === "private";
}

export function isPrivateProject(project: Project): boolean {
  return project.status === "private";
}

/**
 * The minimal, public-safe subset of a project that client components
 * receive. Anything passed as a prop to a "use client" component is
 * serialized into the page source, so internal fields (needsConfirmation,
 * full case-study text, research data) must never be included here.
 */
export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "title"
  | "status"
  | "categories"
  | "cardDescription"
  | "resultLine"
  | "techTags"
  | "links"
  | "thumbnail"
  | "thumbnailAlt"
>;

export function toCardData(p: Project): ProjectCardData {
  return {
    slug: p.slug,
    title: p.title,
    status: p.status,
    categories: p.categories,
    cardDescription: p.cardDescription,
    resultLine: p.resultLine,
    techTags: p.techTags,
    links: p.links,
    thumbnail: p.thumbnail,
    thumbnailAlt: p.thumbnailAlt,
  };
}
