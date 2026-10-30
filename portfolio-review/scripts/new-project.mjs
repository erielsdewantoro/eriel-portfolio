#!/usr/bin/env node
/**
 * Scaffolds a new project:   npm run new-project -- my-project-slug "My Project Title"
 *
 *  1. Creates public/images/projects/<slug>/ (drop screenshots here)
 *  2. Inserts a ready-to-edit entry into content/projects.ts
 *
 * The entry starts as status "draft", so it is invisible on the whole site
 * (cards, pages, sitemap) until you fill it in and change it to "published".
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const [slug, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(" ").trim();

if (!slug || !title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    '\nUsage:   npm run new-project -- <slug> "<Project Title>"\n' +
      'Example: npm run new-project -- sales-forecast "Sales Forecasting Dashboard"\n' +
      "The slug must be lowercase letters/numbers separated by hyphens.\n"
  );
  process.exit(1);
}

const file = path.join(root, "content", "projects.ts");
const translationsFile = path.join(root, "content", "project-translations.ts");
const src = fs.readFileSync(file, "utf8");
const translationsSrc = fs.readFileSync(translationsFile, "utf8");
const MARKER = "  // <<NEW-PROJECTS-HERE>>";
const TRANSLATIONS_MARKER = "  // <<NEW-PROJECT-TRANSLATIONS-HERE>>";

if (!src.includes(MARKER)) {
  console.error("Marker comment not found in content/projects.ts — add it back above the closing `];`.");
  process.exit(1);
}
if (!translationsSrc.includes(TRANSLATIONS_MARKER)) {
  console.error("Indonesian translation marker not found in content/project-translations.ts — add it back before the closing `};`.");
  process.exit(1);
}
if (src.includes(`slug: "${slug}"`)) {
  console.error(`A project with slug "${slug}" already exists.`);
  process.exit(1);
}

const esc = (t) => t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const entry = `  // ---------------------------------------------------------------
  // ${title.toUpperCase()}
  // ---------------------------------------------------------------
  {
    slug: "${slug}",
    title: "${esc(title)}",
    status: "draft", // change to "published" when ready ("private" = limited public page)
    featured: false, // true = eligible for the homepage "Selected Projects"
    categories: ["data-bi"], // "data-bi" | "machine-learning" | "web-it" | "academic"
    cardDescription: "TODO: one plain-language sentence about what the project does.",
    resultLine: "TODO: one-line result in plain terms (leave \\"\\" if not confirmed).",
    techTags: [], // real tools only, e.g. ["Python", "Pandas"] — also feeds the Skills evidence
    // thumbnail: "/images/projects/${slug}/thumb.png", // shows once the file exists
    links: {
      // github: "https://github.com/...",
      // demo: "https://...",
      // figma: "https://...",
    },
    recruiterSummary: "TODO: tools, methods, metrics, evidence.",
    technicalSummary: "TODO: methodology, assumptions, limitations in brief.",
    caseStudy: {
      plainOpening: "TODO: what it is, in plain language.",
      // problem: "",
      // whatIDid: "",
      // resultPlain: "",
      technicalDetail: "TODO: the fuller technical explanation.",
      limitations: ["TODO: at least one honest limitation."],
      futureImprovements: [],
      // visualEvidence: [
      //   { src: "/images/projects/${slug}/overview.png", alt: "Describe the image", caption: "Figure 1. ..." },
      // ],
    },
    seo: {
      title: "${esc(title)} — Eriel Setiawan Dewantoro",
      description: "TODO: one sentence for search results.",
    },
  },

`;

const translationEntry = `  "${slug}": {
    title: "TODO: judul proyek dalam Bahasa Indonesia",
    cardDescription: "TODO: ringkasan satu kalimat yang mudah dipahami.",
    resultLine: "TODO: hasil singkat yang sudah dipastikan.",
    recruiterSummary: "TODO: ringkasan proyek, pekerjaan, dan bukti hasil.",
    technicalSummary: "TODO: penjelasan teknis singkat dan batasannya.",
    caseStudy: {
      plainOpening: "TODO: penjelasan proyek dengan bahasa sederhana.",
      problem: "TODO: kebutuhan atau masalah yang dijawab.",
      whatIDid: "TODO: pekerjaan yang benar-benar dilakukan.",
      resultPlain: "TODO: arti hasil dalam bahasa sederhana.",
      technicalDetail: "TODO: metode, data, dan alat yang dipakai.",
      limitations: ["TODO: batasan proyek yang perlu diketahui."],
      futureImprovements: [],
    },
  },
`;

fs.writeFileSync(file, src.replace(MARKER, entry + MARKER));
fs.writeFileSync(translationsFile, translationsSrc.replace(TRANSLATIONS_MARKER, translationEntry + TRANSLATIONS_MARKER));
const imgDir = path.join(root, "public", "images", "projects", slug);
fs.mkdirSync(imgDir, { recursive: true });
fs.writeFileSync(path.join(imgDir, ".gitkeep"), "");

console.log(`
✔ Added "${title}" to content/projects.ts  (status: draft)
✔ Added an Indonesian translation draft to content/project-translations.ts
✔ Created public/images/projects/${slug}/   (put screenshots here)

Next:
  1. Replace the TODO fields in content/projects.ts and content/project-translations.ts.
  2. Add images to the folder above and uncomment thumbnail / visualEvidence.
  3. Change status to "published" (and featured: true if it should be on the homepage).
`);
