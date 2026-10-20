# Portfolio

Personal portfolio for a junior Sysadmin / DevOps engineer. A single-page static site with About, Experience, Education, Projects and Contact sections.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font`

## Getting Started

Requires Node.js 22 or later.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # type-check + static export to ./out
```

## Content

All content lives in `src/data/*.json` (`profile`, `about`, `education`, `experience`, `projects`, `links`). Edit or add entries there; no component changes are needed.

## Project Structure

```
src/
├── app/          # layout, page, global styles, icon
├── components/   # sections and UI components
├── data/         # JSON content
├── lib/          # content loaders
└── types/        # shared types
public/
└── decorations/  # SVG assets
```

## CI/CD

GitHub Actions (`.github/workflows/ci-cd.yml`) runs lint and build on every pull request and push to `main`. Pushes to `main` deploy the `out/` export to GitHub Pages. Actions are pinned by commit SHA and Dependabot keeps dependencies updated.

## License

[MIT](LICENSE)
