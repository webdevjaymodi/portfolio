# Resolving the Next.js migration merge conflict

The portfolio has been migrated from a static HTML/CSS/JS site to a Next.js app. If Git reports conflicts while merging `main` into a migration branch, keep the Next.js version and remove the legacy static files.

## One-time conflict resolution commands

Run these commands from the repository root after the conflicted merge:

```powershell
# Keep the Next.js files from the migration branch for add/add conflicts.
git checkout --ours app/layout.js app/page.js app/globals.css

# The legacy static files were intentionally removed by the Next.js migration.
git rm app.js index.html script.js

# Mark the resolved files and finish the merge.
git add app/layout.js app/page.js app/globals.css
git status
git commit
```

## Why these choices are correct

- `app.js`, `index.html`, and `script.js` belong to the old static site and should stay deleted.
- `app/layout.js`, `app/page.js`, `components/*`, `data/portfolio.js`, `app/globals.css`, and `public/img/*` are the Next.js implementation.
- `jsconfig.json` is no longer required because the app now uses relative imports, which avoids JSON merge-conflict build failures.

## Validate before deploying

```powershell
npm install
npm run build
```

If `npm run build` passes locally, push the branch and redeploy on Vercel.
