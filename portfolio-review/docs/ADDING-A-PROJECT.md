# Adding a Project

## Quick start (2 minutes)

```bash
npm run new-project -- sales-forecast "Sales Forecasting Dashboard"
```

This does two things:

1. Creates the folder `public/images/projects/sales-forecast/` — put screenshots there.
2. Adds a ready-to-edit entry to `content/projects.ts` with `status: "draft"`.

Then:

1. Open `content/projects.ts`, find the new entry, and replace every `TODO`.
2. Copy your screenshots into the folder and uncomment `thumbnail` / `visualEvidence`.
3. Change `status` to `"published"` (and `featured: true` if it should appear on the homepage).
4. Run `npm run dev` to preview, then commit and push — Vercel redeploys automatically.

A `draft` project is invisible everywhere (cards, pages, sitemap), so you can save
half-finished work safely. Skills "Used in" evidence updates by itself from `techTags`.

The rest of this guide explains every field.

---

This site is content-driven: every project lives as one entry in
`content/projects.ts`. You do **not** need to create a new page, route,
card component, or layout — the dynamic `/projects/[slug]` route, the
`/projects` index, the homepage Selected Projects section, the filters,
the SEO metadata, and the sitemap all read from this one file
automatically.

You do not need to touch `app/`, `components/`, or any routing file to add,
hide, or retire a project.

## 1. Where to add the project

Open `content/projects.ts`. Add a new object to the `projects` array —
anywhere in the array is fine; order doesn't affect anything except the
order projects appear on `/projects`.

## 2. Required fields

These must be filled in for a project to render correctly:

| Field | What it is |
|---|---|
| `slug` | URL segment, e.g. `"my-new-project"` → `/projects/my-new-project`. Lowercase, hyphenated, unique. |
| `title` | Project name as shown everywhere. |
| `status` | `"published"`, `"draft"`, or `"private"` — see Section 8 and 7. |
| `categories` | One or more of `"data-bi"`, `"machine-learning"`, `"web-it"`, `"academic"`. Multiple is fine — the project appears under every category it lists. |
| `cardDescription` | One plain-language sentence for the project card (no jargon, no algorithm names first). |
| `resultLine` | One-line result, in plain terms. Leave as `""` only if genuinely unconfirmed (see Section 8 on private/draft projects) — a missing result line simply means that row doesn't render, never a placeholder. |
| `techTags` | Array of real tool/library names actually used, e.g. `["Python", "Pandas", "Streamlit"]`. **This also drives the Skills section** — see note below. |
| `links` | `{ github？, demo？, figma？ }` — see Sections 4–5. |
| `recruiterSummary` | Short B-level copy: tools, methods, metrics, evidence. |
| `technicalSummary` | Short C-level copy: methodology, assumptions, limitations in brief. |
| `caseStudy.plainOpening` | The first thing a non-technical reader sees — what it is, in plain language. |
| `caseStudy.technicalDetail` | The fuller "How it works technically" paragraph. |
| `caseStudy.limitations` | Array of strings. Can be empty, but an honest project almost always has at least one. |
| `caseStudy.futureImprovements` | Array of strings. Can be empty — the section just won't render. |
| `seo.title`, `seo.description` | Per-page metadata. |

## 3. Optional fields

| Field | What it does if omitted |
|---|---|
| `featured` | `true` to make it eligible for the homepage Selected Projects section. Omit or `false` → still on `/projects`, just not on Home. |
| `flagship` | `true` gets the large two-column featured-card treatment on Home instead of a standard card. **Only one project should carry this at a time** — if several do, the first one found wins; the others are treated as ordinary featured cards. |
| `thumbnail` | Path under `public/images/projects/<slug>/...`. If omitted, or if the file doesn't exist yet, the card simply has no image area — never a placeholder or a broken image. |
| `caseStudy.problem` | Omit (don't pass `""`) if not yet confirmed — the Problem section simply won't render. Same for `whatIDid` and `resultPlain`. |
| `caseStudy.visualEvidence` | Array of `{ src, alt, caption }`. Omit entirely if there's nothing to show yet — the whole Visual Evidence section is hidden, not shown empty. |
| `researchData` | Only Jakarta ISPU uses this (the two-panel results/SHAP layout). Leave it out for every other project. |
| `needsConfirmation` | A plain array of strings for your own tracking. **This is never rendered anywhere on the public site** — it's purely a note to yourself about what's still open. |

## 4. How to add a GitHub URL

```ts
links: {
  github: "https://github.com/erielsdewantoro/your-repo",
},
```

Screenshots: save an image under `public/images/projects/<slug>/` and list it in
`caseStudy.visualEvidence`; it is shown uncropped at its natural size. For the
card, add a 16:10 crop and set `thumbnail`. Figma prototypes use `links.figma`.

Leave the `github` key out entirely if you don't want it public yet — don't
set it to `""` or `"#"`. An omitted link means the GitHub button simply
doesn't render, which is the correct "not ready yet" state.

## 5. How to add a demo URL

Same pattern:

```ts
links: {
  github: "https://github.com/erielsdewantoro/your-repo",
  demo: "https://your-app.streamlit.app",
},
```

## 6. How to add a thumbnail

1. Drop the image file in `public/images/projects/<slug>/`.
2. Set `thumbnail: "/images/projects/<slug>/your-image.png"` on the project.
3. For in-page figures (not just the card thumbnail), add entries to
   `caseStudy.visualEvidence` instead — each needs `src`, `alt`, and
   `caption`.

Images are only rendered if the file actually exists under `public/`. So
you may list the paths you *expect* (e.g. in `visualEvidence`) before the
screenshots exist: nothing broken shows up in the meantime, and each image
appears automatically once you drop the file in. Don't point anything at a
placeholder graphic.

## 7. How to mark a project as featured

```ts
status: "published",
featured: true,
```

That's it — it will now be considered for the homepage Selected Projects
section automatically (see Section 2's `featured`/`flagship` notes above
for how the flagship slot is chosen).

## 8. How to keep a project unpublished while drafting

```ts
status: "draft",
```

A draft project:
- never appears on `/projects`,
- never appears on Home,
- never appears in the sitemap,
- and its case-study route **404s even if someone guesses or requests the
  URL directly** (the build excludes drafts from the page list entirely).

You can fill in as much or as little as you like while a project is a
draft — nothing in a draft is validated against the "required fields"
table until you flip `status` to `"published"`.

When a project involves private source code or client/guest data that
should never be public in detail, use `status: "private"` instead of
`"draft"`. A private project **does** get a real page, but only the
compact, intentionally-limited treatment (overview sentence, a short
privacy explanation drawn from `technicalDetail`, limitations, and links
if any exist) — it never shows empty Problem/What I Did/Result sections.
See the existing `wedding-invitation` entry as the reference example.

## 9. How to run lint/build before publishing

```bash
npm run lint       # ESLint
npx tsc --noEmit   # type-check
npm run build      # full production build + static generation
```

Run all three before flipping a project from `draft` to `published`. The
build will fail loudly on a real TypeScript error (e.g. a missing required
field); it will not fail on an omitted optional field.

## 10. Copyable template

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  status: "draft", // flip to "published" when ready
  featured: false,
  categories: ["data-bi"], // or ["machine-learning"], ["web-it"], ["academic"] — can combine
  cardDescription: "One plain-language sentence: what it is and what problem it addresses.",
  resultLine: "",
  techTags: [],
  links: {
    // github: "https://github.com/erielsdewantoro/my-new-project",
    // demo: "https://my-new-project.example.com",
  },
  recruiterSummary: "Tools, methods, metrics, and evidence, in two or three sentences.",
  technicalSummary: "Methodology, assumptions, and limitations, in two or three sentences.",
  caseStudy: {
    plainOpening: "What this project is and what problem it addresses, in plain language.",
    problem: "The problem, in a sentence or two.",
    whatIDid: "What you actually did, in plain verbs.",
    resultPlain: "What the result means, in plain terms.",
    technicalDetail: "The fuller technical explanation — dataset, method, tools, numbers.",
    limitations: [
      "Be honest here — every real project has at least one.",
    ],
    futureImprovements: [],
    // visualEvidence: [
    //   { src: "/images/projects/my-new-project/screenshot.png", alt: "Describe the content and the project name", caption: "Figure 1. Description." },
    // ],
  },
  seo: {
    title: "My New Project — Eriel Setiawan Dewantoro",
    description: "One-sentence description for search engines and link previews.",
  },
  needsConfirmation: [], // your own tracking notes only — never shown publicly
},
```

## A note on Skills

The Skills section on the homepage doesn't need manual updates either.
Each skill chip's "Used in" evidence is computed automatically from every
published/private project's `techTags` (see `lib/skillEvidence.ts`) — so
if your new project's `techTags` includes `"Python"`, the Python chip's
evidence line picks it up on its own. Don't hand-edit `content/skills.ts`
to add project associations; add the tool to the right project's
`techTags` array instead, and make sure the spelling matches an existing
chip label in `content/skills.ts` (case and spacing are normalized, so
`"scikit-learn"` and `"Scikit-Learn"` would match, but `"Sklearn"`
would not).
