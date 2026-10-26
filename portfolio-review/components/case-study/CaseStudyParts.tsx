import Image from "next/image";
import Link from "next/link";
import { Project, CATEGORY_LABELS, MetricRow, isPubliclyVisible } from "@/lib/types";
import { Chip } from "@/components/ui/Chip";
import { TextLink } from "@/components/ui/TextLink";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { projects } from "@/content/projects";
import { existingSizedFigures } from "@/lib/assets";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header className="relative overflow-hidden border-b border-[var(--color-border)] pb-12 pt-10 md:pb-16 md:pt-14">
      <div aria-hidden="true" className="hero-blob -right-16 -top-10 h-64 w-64 bg-[var(--color-accent)]" />
      <div className="container-max relative">
        <Link
          href="/projects"
          className="focus-ring mb-6 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.status === "private" && <Chip label="Private" />}
          {project.categories.map((c) => (
            <Chip key={c} label={CATEGORY_LABELS[c]} />
          ))}
        </div>
        <h1 className="gradient-text max-w-[900px] text-[32px] font-extrabold leading-[1.12] md:text-[48px]">
          {project.title}
        </h1>
        <p className="reading mt-4 text-[17.5px] leading-[1.7] text-[var(--color-text-secondary)]">
          {project.cardDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.demo && (
            <Button href={project.links.demo} external>
              Live demo
            </Button>
          )}
          {project.links.github && (
            <Button href={project.links.github} variant="outline" external>
              GitHub repository
            </Button>
          )}
          {project.links.figma && (
            <Button href={project.links.figma} variant="outline" external>
              Figma prototype
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export function AtAGlance({ project }: { project: Project }) {
  // Rows render only when there's confirmed content — a missing Stack or
  // Result simply means that row is absent, never a placeholder.
  const rows: { label: string; value: string }[] = [
    { label: "Type", value: project.categories.map((c) => CATEGORY_LABELS[c]).join(", ") },
    ...(project.techTags.length ? [{ label: "Stack", value: project.techTags.join(", ") }] : []),
    ...(project.resultLine ? [{ label: "Result", value: project.resultLine }] : []),
  ];
  if (rows.length === 0) return null;
  return (
    <section className="container-max pt-10 pb-4">
      <dl className="card reading divide-y divide-[var(--color-border)] px-6">
        {rows.map((r) => (
          <div key={r.label} className="flex gap-6 py-3">
            <dt className="eyebrow w-24 shrink-0 pt-0.5">
              {r.label}
            </dt>
            <dd className="text-[15px] text-[var(--color-text)]">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ProseSection({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-max py-7">
      {heading && <h2 className="section-title section-title-sm">{heading}</h2>}
      <div className="reading text-[17px] leading-[1.8] text-[var(--color-text-secondary)]">
        {children}
      </div>
    </section>
  );
}

export function LimitationsSection({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="container-max py-7">
      <h2 className="section-title section-title-sm">Limitations</h2>
      <Callout variant="note" label="Limitations">
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {items.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </Callout>
    </section>
  );
}

export function FutureImprovementsSection({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="container-max py-7">
      <h2 className="section-title section-title-sm">Future Improvements</h2>
      <p className="eyebrow reading mb-3">
        Not yet implemented
      </p>
      <ul className="reading flex list-disc flex-col gap-2 pl-5 text-[16px] leading-[1.7] text-[var(--color-text-secondary)] marker:text-[var(--color-accent)]">
        {items.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </section>
  );
}

export function VisualEvidenceSection({ project }: { project: Project }) {
  // Only figures whose image file actually exists are shown. No figures →
  // the whole section is omitted, not filled with a placeholder.
  // Figures render at their natural aspect ratio (never cropped) so
  // dashboard screenshots stay fully readable.
  const figures = existingSizedFigures(project.caseStudy.visualEvidence);
  if (figures.length === 0) return null;
  const single = figures.length === 1;
  return (
    <section className="container-max py-7">
      <h2 className="section-title section-title-sm !mb-5">Visual Evidence</h2>
      <div className={single ? "wide" : "wide grid gap-6 md:grid-cols-2"}>
        {figures.map((f) => (
          <figure
            key={f.src}
            className={`card overflow-hidden ${
              single && f.width && f.width < 700 ? "mx-auto max-w-[480px]" : ""
            }`}
          >
            {f.width && f.height ? (
              <Image
                src={f.src}
                alt={f.alt}
                width={f.width}
                height={f.height}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <div className="relative aspect-[16/10] bg-[var(--color-surface-subtle)]">
                <Image src={f.src} alt={f.alt} fill className="object-contain" />
              </div>
            )}
            <figcaption className="p-3 text-[13px] text-[var(--color-text-muted)]">
              {f.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function LinksSection({ project }: { project: Project }) {
  const isPrivate = project.status === "private";
  const hasAnyLink = project.links.github || project.links.demo || project.links.figma;

  // Nothing to show at all (no links, not private) — omit the section
  // rather than explaining why it's empty.
  if (!hasAnyLink && !isPrivate) return null;

  return (
    <section className="container-max py-8">
      <h2 className="section-title section-title-sm">Links</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
        {project.links.github && (
          <TextLink href={project.links.github} external>
            GitHub repository
          </TextLink>
        )}
        {isPrivate && !project.links.github && (
          <span className="text-[var(--color-text-muted)]">
            Source and database — private, not public
          </span>
        )}
        {project.links.demo && (
          <TextLink href={project.links.demo} external>
            Live demo
          </TextLink>
        )}
        {project.links.figma && (
          <TextLink href={project.links.figma} external>
            Figma prototype
          </TextLink>
        )}
      </div>
    </section>
  );
}

/**
 * Compact explanation used only for status: "private" projects, in place
 * of the generic Problem / What I Did / Result / How It Works Technically
 * sections — those are never rendered with empty or placeholder content.
 */
export function PrivateNotice({ project }: { project: Project }) {
  return (
    <section className="container-max py-7">
      <Callout variant="info" label="Private client project">
        <p>{project.caseStudy.technicalDetail}</p>
      </Callout>
    </section>
  );
}

export function RelatedProjects({ current }: { current: Project }) {
  // Only publicly visible projects (published/private) can ever be suggested —
  // a draft must never surface here, including on private-project pages.
  const related = projects
    .filter(isPubliclyVisible)
    .filter((p) => p.slug !== current.slug && p.categories.some((c) => current.categories.includes(c)))
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="container-max mt-6 border-t border-[var(--color-border)] py-12">
      <h2 className="section-title section-title-sm !mb-6">Related Projects</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="card card-hover focus-ring p-6"
          >
            <p className="text-[16px] font-semibold">{p.title}</p>
            <p className="mt-1 text-[14px] text-[var(--color-text-secondary)]">{p.cardDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function MetricTable({ title, rows }: { title: string; rows: MetricRow[] }) {
  return (
    <div className="card min-w-0 p-5">
      <h3 className="mb-3 text-[16px] font-semibold">{title}</h3>
      <div className="overflow-x-auto" tabIndex={0}>
        <table className="w-full text-[14px]">
          <caption className="sr-only">{title} — test-set metrics</caption>
          <thead>
            <tr className="border-b border-[var(--color-border)] text-left text-[var(--color-text-secondary)]">
              <th scope="col" className="py-2 pr-3 font-semibold">Model</th>
              <th scope="col" className="py-2 pr-3 font-semibold text-right">Precision</th>
              <th scope="col" className="py-2 pr-3 font-semibold text-right">Recall</th>
              <th scope="col" className="py-2 pr-3 font-semibold text-right">F1</th>
              <th scope="col" className="py-2 font-semibold text-right">ROC-AUC</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.model} className="border-b border-[var(--color-border)] last:border-none">
                <td className="py-2 pr-3">{r.model}</td>
                <td className="tabular-nums py-2 pr-3 text-right">{r.precision}</td>
                <td className="tabular-nums py-2 pr-3 text-right">{r.recall}</td>
                <td className="tabular-nums py-2 pr-3 text-right">{r.f1}</td>
                <td className="tabular-nums py-2 text-right">{r.rocAuc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ISPUResearchSection({ project }: { project: Project }) {
  const data = project.researchData;
  if (!data) return null;
  const totalClass = data.classSplit.reduce((s, c) => s + c.count, 0);

  return (
    <>
      <section className="container-max py-7">
        <Callout variant="info" label="How to read this study">
          <p className="mb-2">
            The models below were evaluated under two different input settings, so their scores
            are not a single ranked comparison.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-semibold">Same-day setting</p>
              <p>Random Forest and XGBoost use the target day&apos;s own pollutant sub-index values.</p>
            </div>
            <div>
              <p className="font-semibold">Historical-window setting</p>
              <p>LSTM and GRU classify the target day using only the previous 14 days.</p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="container-max py-7">
        <h2 className="section-title section-title-sm !mb-5">Dataset</h2>
        <div className="wide grid grid-cols-2 gap-5 sm:grid-cols-5">
          {data.datasetStats.map((s) => (
            <div key={s.label}>
              <p className="tabular-nums text-[26px] font-bold leading-[1.1] text-[var(--color-accent)]">{s.value}</p>
              <p className="text-[13px] text-[var(--color-text-muted)]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="wide mt-6">
          <p className="mb-2 text-[14px] text-[var(--color-text-muted)]">Class distribution</p>
          <div className="flex h-8 w-full overflow-hidden rounded-[var(--radius-sm)]">
            {data.classSplit.map((c, i) => (
              <div
                key={c.label}
                style={{
                  width: `${(c.count / totalClass) * 100}%`,
                  backgroundColor: i === 0 ? "var(--chart-1)" : "var(--chart-5)",
                }}
                className="flex items-center justify-center text-[12px] font-medium text-white"
                title={`${c.label}: ${c.count} (${c.pct})`}
              >
                {c.pct}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-5 text-[13px] text-[var(--color-text-secondary)]">
            {data.classSplit.map((c) => (
              <span key={c.label}>
                {c.label}: {c.count} ({c.pct})
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-max py-7">
        <h2 className="section-title section-title-sm !mb-5">Results</h2>
        <div className="wide grid grid-cols-1 gap-6 md:grid-cols-2">
          <MetricTable title="Same-day setting" rows={data.sameDaySetting} />
          <MetricTable title="Historical-window setting" rows={data.historicalSetting} />
        </div>
        <p className="reading mt-4 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
          Random Forest and XGBoost produced identical Precision, Recall, and F1-score, while
          Random Forest produced a higher ROC-AUC. These two models are not directly comparable to
          LSTM and GRU, which were evaluated under the historical-window setting described above.
        </p>
      </section>

      <section className="container-max py-7">
        <h2 className="section-title section-title-sm !mb-5">SHAP: Feature Contribution</h2>
        <p className="reading mb-4 text-[15px] text-[var(--color-text-secondary)]">
          SHAP is a method for showing which factors contributed most to the selected Random
          Forest model&apos;s decisions — it does not prove that a factor causes the outcome.
        </p>
        <div className="wide flex flex-col gap-2">
          {data.shapFeatures.map((f) => {
            const max = Number(data.shapFeatures[0].value);
            const pct = (Number(f.value) / max) * 100;
            return (
              <div key={f.feature} className="flex items-center gap-3">
                <span className="w-16 text-[14px] font-medium">{f.feature}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-subtle)]">
                  <div
                    className="h-full rounded-[var(--radius-sm)]"
                    style={{ width: `${pct}%`, backgroundColor: "var(--chart-1)" }}
                  />
                </div>
                <span className="tabular-nums w-20 text-right text-[13px] text-[var(--color-text-muted)]">
                  {f.value}
                </span>
              </div>
            );
          })}
        </div>
        <p className="reading mt-4 text-[13px] text-[var(--color-text-muted)]">
          Retrospective · diagnostic — a year-by-year breakdown shows O3 dominant in 2020 and
          PM2.5 dominant 2021–2024, because PM2.5 was entirely missing in 2020, not because of a
          real shift in pollution drivers.
        </p>
      </section>
    </>
  );
}
