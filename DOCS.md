# Portfolio — Engineering Notes

Full technical documentation of this project: what it is, how it was made, what every
technology does, the design system, the test suite, and how it ships.

A designed version of this document is published at
<https://claude.ai/code/artifact/6fa78f41-22d1-495b-8992-35ebb01260ea>.

---

## At a glance

| | |
| --- | --- |
| **Type** | Static single-page application (client-rendered) |
| **Framework** | React 18 + Vite 5 |
| **Routing** | React Router 6 (`BrowserRouter`, 8 routes) |
| **Styling** | Tailwind CSS 3 + a CSS custom-property theme layer |
| **Source size** | ~2,660 lines across 24 source files |
| **Production bundle** | ≈ 349 KB JS (109 KB gzip) + 29 KB CSS (6 KB gzip) |
| **Tests** | 12 Vitest specs — data integrity + routing |
| **Hosting** | GitHub Pages via GitHub Actions (auto-deploy on push to `main`) |
| **Live** | <https://murali-2004.github.io/portfolio/> |
| **Repo** | <https://github.com/Murali-2004/portfolio> (public) |

---

## 1. What it is

A personal site presenting Murali M's work as a MERN-stack developer across seven views.
It is deliberately a **content site, not an app** — no backend, no database, no auth.
Everything the visitor sees is compiled from one data file at build time and rendered in
the browser.

### The seven views

| Route | Purpose |
| --- | --- |
| `/` | Hero, a one-line stack declaration, a four-point fact list, a strengths grid, a tech ticker, three featured projects, a skills preview and a closing CTA. |
| `/about` | Long-form bio, four working principles, education, certifications, a photo gallery, soft skills and languages. |
| `/skills` | Six skill groups with animated proficiency bars, plus a five-step "how a feature ships" process. |
| `/projects` | All four projects as gold-framed cards, filterable by type (MERN / React). |
| `/projects/:slug` | Per-project case study: overview, feature list, tech stack, what it demonstrates, repo link, prev/next nav. |
| `/experience` | Two internships on an alternating timeline, a "what I bring" list, an academic timeline. |
| `/contact` | A working contact form (real email delivery) alongside every direct channel. |
| `*` | A 404 view for anything unmatched. |

### The four projects it showcases

- **Job Board Application** — MERN. Job posting, multi-field filtering, résumé upload, JWT-guarded recruiter routes.
- **YouTube Content Aggregator** — MERN. Pulls educational videos from the YouTube Data API, ranks them with a custom Content Quality Score, persists to MongoDB.
- **Book Store Application** — React. Reusable component library, centralised catalogue state, full CRUD.
- **Quiz Application** — React. Dynamic question rendering, live scoring, instant feedback, Hooks-driven state machine.

---

## 2. How it was built

Assembled from scratch — no starter template, no UI kit. Vite scaffolds the build;
everything in `src/` was written for this project. Working method:

1. **Content first.** Every fact — résumé, project details, skill levels, dates — was transcribed into `src/data/portfolio.js` as typed arrays and objects. The UI is a pure function of that file.
2. **Component shell.** Layout primitives (`Navbar`, `Footer`, `Background`, `ScrollToTop`) and reusable pieces (`Reveal`, `SectionHeading`, `SkillBar`, `ProjectCard`, `Photo`) before any page.
3. **Pages.** Seven route components composing the primitives around slices of the data file.
4. **Theme layer.** A CSS custom-property system so light/dark is a token swap, not a second stylesheet.
5. **Real photography.** Five portraits and four project screenshots in `public/`; the project shots are full-fidelity UI mock-ups rendered to PNG.
6. **Contact delivery.** The form wired to Web3Forms so messages actually arrive in an inbox, with genuine success/failure states.
7. **Tests, then CI, then deploy.** A Vitest suite, a GitHub Actions pipeline that gates on it, and GitHub Pages hosting.

### Design evolution

The current look is the result of deliberate rework, each step driven by a specific critique:

| Commit | Change |
| --- | --- |
| `f1c9b14` | **First build.** Purple→blue gradient system, glassmorphism cards, portrait-plus-floating-stats hero. |
| `2fd4a62` | **Full-width + theming.** Container widened; light-by-default theme + night-mode toggle carrying the original dark palette. |
| `c2c7a75` | **Editorial rebuild.** Gradients and glass removed. New system: warm paper, one accent, Fraunces + Inter + JetBrains Mono, hairline rules, flat cards. |
| — | **Tech recolour.** Palette re-pitched from warm-editorial to cool-engineering: near-white / near-black neutrals, one engineering blue, a faint graph-paper grid, sharper corners. Typefaces kept. |
| `48b1881` | **Project-card identity.** Thick metallic-gold frame with a foil-glint hover; faint gold tint on the description panel. |
| `e0dd079` · `1a658ed` | **Hardening.** Real UI screenshots replace SVG wireframes; Vitest suite; mobile-nav and scroll-restoration fixes; deploy pipeline. |

---

## 3. Architecture

No state-management library, no data fetching. At module load `src/data/portfolio.js`
exports plain constants; every page imports the slices it needs and renders them. The
only runtime state is the colour theme, the current route, and the contact form's
submission status.

### Render & routing

`main.jsx` mounts `<App>` inside a `BrowserRouter` whose `basename` comes from
`import.meta.env.BASE_URL` — so the same build works at a domain root or under
`/portfolio/`. `App.jsx` holds the route table and wraps each page in a Framer Motion
`<AnimatePresence mode="wait">` for a cross-fade. `ScrollToTop`, `Navbar`, `Background`
and `Footer` sit outside the animated area.

### Directory layout

```
src/
├─ main.jsx              # mount + BrowserRouter(basename)
├─ App.jsx               # route table + page transitions
├─ index.css             # Tailwind layers + the token system (243 lines)
├─ data/portfolio.js     # single source of truth — 14 exports, 342 lines
├─ hooks/useTheme.js     # useSyncExternalStore over <html class="dark">
├─ components/
│  ├─ Navbar · Footer · Background · ScrollToTop
│  ├─ Reveal · ThemeToggle · SectionHeading · Marquee
│  ├─ SkillBar · ProjectCard · Photo
├─ pages/
│  └─ Home · About · Skills · Projects · ProjectDetail · Experience · Contact · NotFound
└─ test/  setup.js · data.test.js · app.test.jsx

public/
├─ Murali_M_MERN_Stack_Developer_Resume.pdf
├─ favicon.svg           # theme-aware graduation-cap mark
├─ _redirects            # Netlify SPA fallback (unused by Pages)
└─ images/  portrait-*.jpg · photo-*.jpg · projects/*.png

root: vite.config.js · tailwind.config.js · vitest.config.js · postcss.config.js
      vercel.json · firebase.json · .github/workflows/deploy.yml
```

### The asset-path helper

Because the build can target a sub-path, every reference to a file in `public/` goes
through `asset()` in the data file, which prefixes `import.meta.env.BASE_URL`. The résumé
link, all portrait paths and `projectImage(slug)` resolve correctly whether served from
`/` or `/portfolio/`.

---

## 4. Tech stack — role of every dependency

### Runtime

| Package | Version | Role in this project |
| --- | --- | --- |
| `react` | 18.3 | Component model and rendering. Hooks throughout, plus `useSyncExternalStore` (theme) and `useLayoutEffect` (scroll restoration). |
| `react-dom` | 18.3 | Browser renderer — `createRoot(...).render()` in `main.jsx`. |
| `react-router-dom` | 6.26 | Client-side routing. `BrowserRouter` with a dynamic `basename`, an 8-entry `<Routes>` table, a dynamic `:slug` route, `<Navigate>` for bad slugs. |
| `framer-motion` | 11.3 | Animation. Page cross-fades (`AnimatePresence mode="wait"`), the nav active-link indicator (shared `layoutId`), the mobile-menu accordion, the animated skill bars. |
| `react-icons` | 5.2 | Icon set (Feather + Phosphor). Graduation-cap logo, social and UI glyphs. Tree-shaken to what's imported. |

### Build & tooling

| Package | Version | Role in this project |
| --- | --- | --- |
| `vite` | 5.3 | Dev server (HMR) and production bundler (Rollup). Sets the base path from `DEPLOY_TARGET`; injects `import.meta.env.BASE_URL`. |
| `@vitejs/plugin-react` | 4.3 | JSX transform + Fast Refresh. |
| `tailwindcss` | 3.4 | Utility classes for layout, spacing, type. Colours map to CSS variables (`rgb(var(--c-accent) / <alpha-value>)`) so utilities follow the theme. `darkMode: 'class'`. |
| `postcss` + `autoprefixer` | 8.4 / 10.4 | Tailwind's processing pipeline and vendor prefixing. |
| `vitest` | 2.1 | Test runner (Vite-native, Jest-compatible API). |
| `@testing-library/react` | 16.3 | Renders components to jsdom and queries them like a user. |
| `@testing-library/jest-dom` | 6.9 | DOM matchers. |
| `jsdom` | 25.0 | Headless DOM for tests. `test/setup.js` polyfills `matchMedia`, `IntersectionObserver`, `scrollTo`. |

### External services (no package)

| Service | Role |
| --- | --- |
| **Web3Forms** | Serverless form-to-email. The contact form `POST`s JSON to `api.web3forms.com/submit` with a public access key; a real 200 is the only thing that shows "Message sent". |
| **Google Fonts** | Fraunces, Inter, JetBrains Mono via one stylesheet link with `display=swap`. |
| **GitHub Actions** | CI/CD — install, test, build, publish. |
| **GitHub Pages** | Static host serving the built `dist/` at `/portfolio/`. |

---

## 5. Design system

Cool neutrals, a single engineering-blue accent, and a metallic gold reserved for one
job (the project-card frame). No gradients, no glassmorphism, no gradient text. Hairline
rules and a faint graph-paper grid behind everything.

### Colour tokens (`src/index.css`)

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--c-base` | `#F9FAFB` | `#0B0D10` | Page ground |
| `--c-base-2` | `#F0F2F5` | `#12151A` | Inset panels, image wells |
| `--c-content` | `#0D0F13` | `#E9ECEF` | Headings, strong text |
| `--c-body` | `#373D45` | `#B0B7BF` | Body copy |
| `--c-muted` | `#6C747E` | `#808993` | Meta, captions, mono labels |
| `--c-accent` | `#2545D8` | `#6C8EFF` | Links, active nav, key figures |
| `--c-gold` | `#E6C24E` | `#F2D264` | Project-card frame only |

### Three-state theming

Light is the default. A pre-paint inline script in `index.html` reads
`localStorage.theme` and adds `class="dark"` to `<html>` before first render, so there is
no flash. Every colour is `rgb(var(--token) / …)`; `:root` is the full light palette and
`.dark` redefines only the tokens. Tailwind's colour keys point at the same variables.

### Typography

| Role | Face | Where |
| --- | --- | --- |
| Display | **Fraunces** | Page/section headings, project titles. |
| Body | **Inter** | All running text. |
| Utility | **JetBrains Mono** | Eyebrows, nav links, metadata, tags, the `const stack = [...]` hero line, buttons. |

### Motion

- **Page transitions** — 300 ms opacity + Y cross-fade between routes.
- **Scroll reveal** — sections fade up from a visible resting state as they enter view, with a hard 1 s fallback so nothing sticks hidden.
- **Project-card hover** — a diagonal light glint sweeps across (CSS `::before` transform), the card lifts, a gold glow fades in.
- **Skill bars** — width animates 0 → stored percentage on first view.
- All disabled under `prefers-reduced-motion`.

---

## 6. Components

| Component | What it does |
| --- | --- |
| `useTheme` | Hook backed by `useSyncExternalStore`. Source of truth is the `dark` class on `<html>`; a module-level listener set keeps every consumer in sync so two toggle buttons never disagree. Writes through to `localStorage`. |
| `ThemeToggle` | Sun/moon button; Framer Motion icon swap. In the desktop and mobile navs. |
| `Navbar` | Fixed header. Transparent over the hero, solid on scroll; *always* solid on mobile so links stay legible. Desktop links are mono with a sliding `layoutId` underline; mobile is a height-animated accordion with a solid background. |
| `ScrollToTop` | On every route change, forces the viewport to the top before paint (`useLayoutEffect`) and again after, temporarily disabling `scroll-behavior: smooth`, plus an `onExitComplete` hook. Handles `body`-as-scroll-container. |
| `Reveal` | Wraps content, observes with `IntersectionObserver`, transitions it in. Respects reduced-motion; self-heals after 1 s if the observer never fires. |
| `Background` | Fixed, pointer-events-none layer: page ground + a 48 px graph grid + a dot grid, both low-opacity, tuned per theme. |
| `Photo` | `<img>` with an `onError` fallback to a monogram tile and an `object-position` prop for per-portrait framing. |
| `ProjectCard` | The gold-framed card: mono meta row, 16:9 screenshot, serif title, tagline, stack tags, footer link. Frame/glint/glow are a dedicated CSS class (`.proj-card`). |
| `SkillBar` / `SectionHeading` / `Marquee` | Animated proficiency bar; titled section header with a mono eyebrow; infinite CSS-keyframe technology ticker. |
| `Footer` | Three-column footer — identity, navigation, direct contact — with résumé download and social links. |

---

## 7. The contact form

`POST`s JSON to **Web3Forms** (serverless form-to-email relay) using a public access key
in the data file. No backend of our own.

**Submission states:** `idle` → `sending` (spinner, disabled button) → `success` (only on
`res.ok && data.success`; fields cleared, confirmation replaces the form) / `error` (any
non-200, failed `success` flag, or network throw; shows the service message + a `mailto:`
fallback link).

A hidden `botcheck` honeypot short-circuits submission if filled. If the access key is
missing, the form falls back to opening the visitor's mail client. The key is safe in
client code by design — it only routes a message to a fixed inbox and can be
domain-restricted in the Web3Forms dashboard.

---

## 8. Content model

`src/data/portfolio.js` exports 14 named constants and helpers:

```
asset          // (path) => base-prefixed URL for /public files
projectImage   // (slug) => /images/projects/<slug>.png
profile        // name, role, email, links, résumé, web3formsKey, bio
photos         // 5 resolved portrait URLs
stats          // headline figures
highlights     // 4 strengths { title, text, icon }
skillGroups    // 6 groups, each { name, accent, skills:[{name, level}] }
techBadges     // 15 strings for the ticker
experience     // 2 roles { role, company, period, points[], stack[] }
projects       // 4 projects { slug, title, type, year, repo, tagline,
               //              description, features[], highlights[], stack[] }
education / certifications / softSkills / languages
```

To change any text, project, skill level or link, this is the only file to touch.
`data.test.js` enforces its shape.

---

## 9. Testing

`npm test` runs Vitest against jsdom. A smoke layer — it proves the content is
well-formed and every route renders the right thing, which is what actually breaks in a
content site.

**`src/test/data.test.js` — content integrity**

- Profile has every required field, a valid e-mail and a `.pdf` résumé path.
- Every project has a slug, title, GitHub URL, non-empty stack / features / highlights.
- A matching screenshot PNG exists in `public/images/projects/` for every project (read off disk).
- Project slugs are unique.
- Every skill level is a percentage between 1 and 100.
- At least one experience and one education entry.

**`src/test/app.test.jsx` — routing & render**

- Home renders an `<h1>` containing "full-stack" and a nav.
- The projects page shows a card for each project.
- A case-study route renders its title and a repo link with the correct URL.
- An unknown route renders the 404 view.
- The contact page shows the e-mail and a send button.
- A résumé link points at the PDF.

`src/test/setup.js` polyfills the browser APIs jsdom lacks so the theme hook and
scroll-reveal run without throwing.

---

## 10. Build & deployment

The build is **base-path aware**. By default (`vite build`) it targets a domain root
(Vercel / Firebase / local). With `DEPLOY_TARGET=pages` the base becomes `/portfolio/`
for GitHub Pages. `import.meta.env.BASE_URL` then feeds the router basename and the
`asset()` helper automatically.

### CI/CD pipeline — `.github/workflows/deploy.yml`

Runs on every push to `main`:

1. Checkout.
2. Set up Node 20 with an npm cache.
3. `npm ci` — clean, lockfile-exact install.
4. `npm test` — **the deploy stops here if any spec fails.**
5. `npm run build` with `DEPLOY_TARGET=pages`.
6. Copy `index.html` → `404.html` so Pages serves the SPA for deep links.
7. Upload `dist/` as the Pages artifact.
8. Deploy to the `github-pages` environment.

### Hosting

GitHub Pages serves the static bundle at <https://murali-2004.github.io/portfolio/>. The
repo is public (Pages requires it on the free plan). `vercel.json` and `firebase.json`
are committed with SPA rewrites, so switching host is an import or one command — no code
change.

> Deep links on Pages return a 404 *status* on the first document request but still
> render the correct page via `404.html`; in-app navigation is unaffected. A host with a
> proper SPA rewrite (Vercel / Firebase / Netlify) removes even that.

**Alternative hosts:**

- **Vercel** — import the repo at vercel.com (or `npx vercel`). `vercel.json` is present; auto-detects Vite, builds at the root, rewrite handles SPA routing.
- **Firebase Hosting** — `firebase login`, `firebase use --add <project>`, then `npm run build && firebase deploy --only hosting`. `firebase.json` is present.

---

## 11. Level of code — an honest assessment

This is a **front-end content site**, so there is no algorithmic difficulty — no data
structures, no concurrency, no backend. What it demonstrates is craft in the areas that
decide whether a front-end project is professional.

**Above a typical portfolio**

- **A real design system.** Colour, type and spacing tokenised; theming is a correct three-state implementation (explicit light / explicit dark / OS default) with no flash-of-wrong-theme.
- **Correct use of modern React primitives.** `useSyncExternalStore` for the theme (the right tool for external mutable state), `useLayoutEffect` for pre-paint scroll restoration, a module-level store so duplicated UI stays consistent.
- **Defensive components.** `Reveal` self-heals if `IntersectionObserver` never fires; `Photo` degrades to a monogram; the contact form has a genuine error path and a `mailto:` fallback.
- **A test suite that gates deployment.** Small but real — it catches malformed data, a broken route, a missing asset.
- **A portable build.** One artifact that deploys to a sub-path or a root without edits, plus a CI pipeline.
- **Accessibility basics.** Semantic landmarks, focus-visible outlines, ARIA labels on icon buttons, `prefers-reduced-motion` honoured everywhere.

**Deliberately simple**

- No TypeScript — the data shapes are small and covered by the data test.
- No state library — there is almost no state to manage.
- No code-splitting — the whole app gzips to ~115 KB, below the point where splitting helps.
- Content is hand-authored in one JS file rather than a CMS or MDX — appropriate at this scale.

**Overall:** solid junior-to-mid front-end engineering. The value is not problem-solving
complexity but the discipline around it — a tokenised design system, modern React done
correctly, tests, and a real deployment pipeline.

---

## 12. Run it locally

```bash
git clone https://github.com/Murali-2004/portfolio
cd portfolio
npm install

npm run dev        # dev server + HMR at http://localhost:5173
npm test           # run the Vitest suite once
npm run test:watch # watch mode
npm run build      # production build → dist/  (root base)
npm run preview    # serve the build locally
```

Node 18+ required. To reproduce the Pages build: `DEPLOY_TARGET=pages npm run build`.

---

## 13. Where it could go

- **TypeScript** — start with the data file; a schema type would replace half of `data.test.js`.
- **Per-project pages with MDX** — longer write-ups, embedded diagrams, real screenshots from the deployed apps.
- **An OG-image per route** so shared links preview well.
- **Visual-regression checks** in CI (Playwright screenshot diffing).
- **Move to Vercel or a custom domain** to drop the `/portfolio/` sub-path and the deep-link 404 status.
