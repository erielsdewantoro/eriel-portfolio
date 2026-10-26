# Eriel Setiawan Dewantoro — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4.
Dark navy/cyan design by default, with a light-mode toggle.

## Publish this portfolio (quick guide)

See **[docs/PUBLISH.md](docs/PUBLISH.md)** for the copy-ready steps to push this
folder to GitHub and deploy it on Vercel.

## Add a course or certificate

Edit `content/education.ts`: add bootcamps and courses to `nonFormalEducation`,
and add standalone credentials to `certifications`. Add certificate images under
`public/images/certs/`. Full field template: **[docs/ADDING-EDUCATION.md](docs/ADDING-EDUCATION.md)**.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm run start
```

## Add a new project (the one thing you will do most)

```bash
npm run new-project -- my-project-slug "My Project Title"
```

Then fill in the new entry in `content/projects.ts`, drop images into
`public/images/projects/my-project-slug/`, and set `status: "published"`.
Full guide: **[docs/ADDING-A-PROJECT.md](docs/ADDING-A-PROJECT.md)**.

Everything else updates by itself: the `/projects` list and filters, the
`/projects/<slug>` case-study page, the homepage (when `featured: true`), SEO
metadata, the sitemap, and the Skills "Used in" links.

## Where things live

| To change… | Edit… |
|---|---|
| Name, headline, hero text, nav, social links | `content/site.ts` |
| Profile photo | replace `public/images/profile/eriel.jpeg` |
| Jobs / internships (and their photos) | `content/experience.ts` |
| Education, certificates (and images / links) | `content/education.ts` |
| Skill chips and the scrolling logo strip | `content/skills.ts` (logos: `public/images/skills/`) |
| Projects | `content/projects.ts` |
| Colors, glow, spacing, both themes | `app/globals.css` (`:root` = dark, `:root[data-theme="light"]` = light) |

Contact is email + LinkedIn + GitHub, with a WhatsApp logo linking directly to
the chat. The phone number is not displayed as text.

## Publish (Vercel — recommended)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repository → **Deploy**
   (all defaults are correct for Next.js).
3. Every later `git push` redeploys automatically.
4. Optional custom domain: add it in Vercel, then set
   `NEXT_PUBLIC_SITE_URL=https://your-domain` in Vercel → Settings → Environment
   Variables (see `.env.example`). Without it the `*.vercel.app` address is used.
5. Optional Google Search Console: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

> GitHub Pages is not a fit for this version: the site uses server-side features
> of Next.js (reading image files at build time, generated OG image).

## Notes

- Fonts (Poppins) are bundled with the site via `@fontsource/poppins`, so the
  build works offline and visitors load nothing from Google Fonts.
- Images referenced in content render only if the file exists, so a missing
  image never shows a broken icon.
- Items marked `needsConfirmation` in `content/projects.ts` are private notes
  and are never rendered publicly.
