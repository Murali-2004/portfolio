# Murali M — Portfolio

A multi-page personal portfolio for **Murali M**, MERN Stack Developer.

Built with **React 18 + Vite**, **React Router**, **Tailwind CSS** and **Framer Motion**.

**Design:** an editorial / print-inspired look — warm paper background, near-black
ink, a single vermillion accent, hairline rules and flat cards (no gradients or
glassmorphism). Type: **Fraunces** (serif display), **Inter** (body),
**JetBrains Mono** (labels & metadata).

**Theme:** light by default, with a night-mode toggle in the navbar. The choice is
saved to `localStorage` and applied before first paint (no flash). All colours are
CSS-variable tokens in `src/index.css` — edit `:root` for light, `.dark` for night;
the accent is `--c-accent`.

## Pages

| Route              | Content                                                                 |
| ------------------ | ---------------------------------------------------------------------- |
| `/`                | Hero, stats, strengths, tech marquee, featured projects, skill preview |
| `/about`           | Bio, principles, education, certifications, soft skills, languages     |
| `/skills`          | Six skill groups with proficiency bars, build process                 |
| `/projects`        | All four projects, filterable by type                                 |
| `/projects/:slug`  | Full case study per project — overview, features, stack, links        |
| `/experience`      | Internship timeline, value summary, academic timeline                 |
| `/contact`         | Contact form (opens email client), full contact details              |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Add your photos

The résumé PDF is already in `public/`. Drop your 5 photos into
`public/images/` — see [`public/images/README.md`](public/images/README.md) for
the exact filenames and which chat photo goes where:

| File                   | Used on                          |
| ---------------------- | -------------------------------- |
| `portrait-formal.jpg`  | Home hero, Contact card          |
| `portrait-casual.jpg`  | About intro, Experience aside    |
| `photo-walking.jpg`    | About gallery                    |
| `photo-river.jpg`      | About gallery                    |
| `photo-standing.jpg`   | About gallery                    |

Until a file is added, that slot shows a gradient "M" placeholder — nothing breaks.

## Editing content

All text, projects, skills and links live in one file:
[`src/data/portfolio.js`](src/data/portfolio.js).

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages). For SPA routing, add a
rewrite of all routes to `/index.html`:

- **Vercel** — automatic
- **Netlify** — add `public/_redirects` with `/*  /index.html  200`
