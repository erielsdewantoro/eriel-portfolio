# Publish to GitHub and Vercel

## 1. Create a GitHub repository

On GitHub, create a new repository (for example, `eriel-portfolio`). For the
first push from this extracted folder, leave **Add a README**, `.gitignore`, and
license unchecked so GitHub creates an empty repository. Copy its HTTPS URL.

## 2. Push this folder from PowerShell

Open PowerShell in `C:\Eriel\Codex_Erl\portfolio-review` and run:

```powershell
git init
git add .
git commit -m "Publish portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/eriel-portfolio.git
git push -u origin main
```

Replace the remote URL with the one GitHub gave you. If Git asks for your name
and email, set them once with `git config --global user.name "Your Name"` and
`git config --global user.email "you@example.com"`, then repeat the commit.

For later updates, save your changes and run:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

## 3. Deploy and list the site on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Connect GitHub if asked, then import `eriel-portfolio`.
3. Keep the detected Next.js settings and select **Deploy**.
4. When deployment finishes, open the assigned `*.vercel.app` URL to view the
   live portfolio. Each later push to `main` automatically starts a deployment.
5. To use a custom domain, add it under the Vercel project's **Settings →
   Domains**, follow the DNS instructions, then set
   `NEXT_PUBLIC_SITE_URL=https://your-domain` under **Settings → Environment
   Variables** and redeploy.

The GitHub repository is the source listing; the Vercel URL is the public live
site to share. GitHub Pages is not suitable for this Next.js project.
