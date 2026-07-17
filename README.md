# Quantum Codon — Web Platform

> **The official web platform for Quantum Codon**, a first-mover life sciences company in the Amaravati Quantum Valley. Built with TanStack Start (React SSR), Tailwind CSS v4, and TypeScript.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & URLs](#pages--urls)
- [Working on a Page](#working-on-a-page)
- [Routing](#routing)
- [Shared Components](#shared-components)
- [Styling Guidelines](#styling-guidelines)
- [Environment & Config](#environment--config)
- [Common Scripts](#common-scripts)

---

## Tech Stack

| Layer           | Technology                                                           |
| --------------- | -------------------------------------------------------------------- |
| Framework       | [TanStack Start](https://tanstack.com/start) (React SSR)             |
| Routing         | [TanStack Router](https://tanstack.com/router) (file-based)          |
| Language        | TypeScript 5                                                         |
| Styling         | Tailwind CSS v4                                                      |
| Build Tool      | Vite 8                                                               |
| Icons           | [Lucide React](https://lucide.dev/)                                  |
| 3D / Animations | HTML5 Canvas 2D with 3D Projection (Custom Math in `DnaHelix3D.tsx`) |
| Forms           | React Hook Form + Zod                                                |
| Fonts           | Inter, Cormorant Garamond (Google Fonts)                             |

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (runs on http://localhost:8080)
npm run dev

# 3. Build for production
npm run build
```

> The dev server uses Vite HMR. Any file save instantly reflects in the browser.

---

## Project Structure

```
QCodon/
├── public/                  # Static assets served at root (images, icons, og images)
├── src/
│   ├── components/
│   │   ├── layout/          # App-wide layout: QcNavbar, SiteFooter, QcPreloader, QcRouteSwipe
│   │   ├── shared/          # Reusable across pages: ThemeProvider, ContactModal, Reveal, DnaHelix3D
│   │   ├── QcChatbot/       # Self-contained AI chatbot widget and all its sub-components
│   │   └── ui/              # Radix UI primitive wrappers (shadcn-style)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Data files, utility functions, router compatibility layer
│   ├── pages/               # One folder per URL — see table below
│   │   ├── _PageShell.tsx   # Wrapper with Navbar + Footer used by most pages
│   │   ├── NotFound.tsx     # 404 page
│   │   ├── landing/         # /
│   │   ├── about/           # /about
│   │   ├── careers/         # /careers
│   │   ├── contact/         # /contact
│   │   ├── blogs/           # /blogs and /blogs/:slug
│   │   ├── case-studies/    # /case-studies
│   │   ├── research/        # /research
│   │   ├── industries/      # /industries/:slug
│   │   └── services/        # /services/:slug
│   ├── routes/              # TanStack Router file-based route definitions (thin — just imports pages)
│   ├── styles.css           # Global CSS tokens, Tailwind base, custom utilities
│   └── vite-env.d.ts        # TypeScript declarations for .mp4 and other asset imports
│   └── router.tsx           # Router configuration
│   └── start.ts             # Entry point for Tanstack Start client
│   └── server.ts            # Entry point for Tanstack Start server
├── vite.config.ts           # Vite + TanStack Start + Tailwind config
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## Pages & URLs

Each page lives in its own folder under `src/pages/`. The folder name matches the URL path exactly — this makes it easy for any developer to locate the code for any page they see in the browser.

| URL in Browser      | Folder                          | Main File                                            |
| ------------------- | ------------------------------- | ---------------------------------------------------- |
| `/`                 | `src/pages/landing/`            | `Landing.tsx`                                        |
| `/about`            | `src/pages/about/`              | `About.tsx`                                          |
| `/careers`          | `src/pages/careers/`            | `Careers.tsx`                                        |
| `/contact`          | `src/pages/contact/`            | `Contact.tsx`                                        |
| `/blogs`            | `src/pages/blogs/`              | `Blogs.tsx`                                          |
| `/blogs/:slug`      | `src/pages/blogs/`              | `BlogPostDetail.tsx`                                 |
| `/case-studies`     | `src/pages/case-studies/`       | `CaseStudies.tsx`                                    |
| `/research`         | `src/pages/research/`           | `Research.tsx`                                       |
| `/education`        | `src/pages/services/education/` | `Education.tsx` (redirects to `/services/education`) |
| `/industries/:slug` | `src/pages/industries/`         | `IndustryDetailPage.tsx`                             |
| `/services/:slug`   | `src/pages/services/`           | One sub-folder per service (see below)               |

### Services Sub-pages (`/services/:slug`)

| Slug in URL             | Folder                                      |
| ----------------------- | ------------------------------------------- |
| `drug-discovery`        | `src/pages/services/drug-discovery/`        |
| `analytical-services`   | `src/pages/services/analytical-services/`   |
| `regulatory-compliance` | `src/pages/services/regulatory-compliance/` |
| `bio-mmg`               | `src/pages/services/bio-mmg/`               |
| `bioinformatics`        | `src/pages/services/bioinformatics/`        |
| `education`             | `src/pages/services/education/`             |

---

## Working on a Page

> **One developer per page = zero merge conflicts.** Each page is fully self-contained in its own folder.

### Folder anatomy (example: `/about`)

```
src/pages/about/
├── About.tsx              # Root component — the page entry point
├── components/            # Components used ONLY by this page
│   ├── MolecularBackground.tsx
│   └── DiagnosticWaveform.tsx
└── (any images/videos used only by this page go here too)
```

### Steps to work on a page

1. Open `src/pages/<page-name>/` — **only touch files inside this folder**.
2. The page is imported in `src/routes/<page-name>.tsx` — **do not edit the route file** unless you need to change the URL or add a loader.
3. Add local sub-components inside `components/` inside the page folder.
4. If a component needs to be shared with another page, move it to `src/components/shared/`.

---

## Routing

Routes are defined in `src/routes/` using TanStack Router's file-based convention:

| Route File                           | URL                               | Description                                             |
| ------------------------------------ | --------------------------------- | ------------------------------------------------------- |
| `index.tsx`                          | `/`                               | Home/landing page                                       |
| `about.tsx`                          | `/about`                          | About page                                              |
| `careers.tsx`                        | `/careers`                        | Careers page                                            |
| `contact.tsx`                        | `/contact`                        | Contact page                                            |
| `education.tsx`                      | `/education`                      | Redirects to `/services/education`                      |
| `blogs.tsx`                          | `/blogs`                          | Layout route rendering `<Outlet />`                     |
| `blogs/index.tsx`                    | `/blogs`                          | Blog index list page                                    |
| `blogs/$slug.tsx`                    | `/blogs/:slug`                    | Blog detail page                                        |
| `case-studies.tsx`                   | `/case-studies`                   | Case studies page                                       |
| `research.tsx`                       | `/research`                       | Research page                                           |
| `industries.$slug.tsx`               | `/industries/:slug`               | Dynamic Industry detail page                            |
| `services.$slug.tsx`                 | `/services/:slug`                 | Dynamic Services details (uses sub-components per slug) |
| `services.regulatory-compliance.tsx` | `/services/regulatory-compliance` | Custom service page for regulatory compliance           |
| `__root.tsx`                         | App shell                         | Navbar, Footer, global providers, and layouts           |

> Route files are intentionally thin — they only `import` the page component and export a `Route` object. All real UI code lives in `src/pages/`.

---

## Shared Components

| Component       | Location                                  | Purpose                                                |
| --------------- | ----------------------------------------- | ------------------------------------------------------ |
| `QcNavbar`      | `src/components/layout/QcNavbar.tsx`      | Top navigation bar                                     |
| `SiteFooter`    | `src/components/layout/SiteFooter.tsx`    | Site-wide footer                                       |
| `QcPreloader`   | `src/components/layout/QcPreloader.tsx`   | Animated page load screen                              |
| `QcRouteSwipe`  | `src/components/layout/QcRouteSwipe.tsx`  | Page transition animation                              |
| `QcChatbot`     | `src/components/QcChatbot/`               | Floating AI chatbot widget                             |
| `ContactModal`  | `src/components/shared/ContactModal.tsx`  | Global contact popup (trigger via `useContactModal()`) |
| `ThemeProvider` | `src/components/shared/ThemeProvider.tsx` | Dark/light mode context                                |
| `Reveal`        | `src/components/shared/Reveal.tsx`        | Scroll-triggered fade-in animation wrapper             |
| `_PageShell`    | `src/pages/_PageShell.tsx`                | Wraps Navbar + page content + Footer                   |

---

## Styling Guidelines

This project uses **Tailwind CSS v4** with the following conventions:

### 1. Responsive grids — use `auto-fit` + `minmax`

Instead of breakpoint columns, use one adaptive line:

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6"></div>
```

### 2. Widths — use `w-full` + `max-w-*`

```html
<!-- Correct -->
<div class="w-full max-w-5xl mx-auto">
  <!-- Avoid -->
  <div class="w-[800px]"></div>
</div>
```

### 3. Font sizes — use `clamp()` for fluid scaling

```html
<!-- Scales smoothly from 2rem to 3.75rem without breakpoints -->
<h1 class="text-[clamp(2rem,5vw,3.75rem)]">
  <!-- Avoid -->
  <h1 class="text-4xl md:text-5xl lg:text-6xl"></h1>
</h1>
```

### Design tokens (defined in `styles.css`)

- Colors: `text-accent-blue`, `text-accent-emerald`, `text-accent-purple`
- Backgrounds: `bg-[#0c131f]` (dark), `bg-[#f0f4f8]` (light)
- Fonts: `font-serif-display` (Cormorant Garamond editorial font), default Inter (sans-serif)

---

## Environment & Config

| File              | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `vite.config.ts`  | Vite build config — plugins, server settings         |
| `tsconfig.json`   | TypeScript settings — path alias `@/` maps to `src/` |
| `tailwind.config` | Tailwind v4 uses CSS-first config in `styles.css`    |

### Path alias

`@/` is an alias for `src/`. Use it everywhere instead of relative paths:

```ts
import { Reveal } from "@/components/shared/Reveal";
import { blogPosts } from "@/pages/blogs/blogs-data";
```

---

## Common Scripts

```bash
npm run dev        # Start dev server (http://localhost:8080, hot reload)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run format     # Auto-format with Prettier
npx tsc --noEmit   # Type-check without building (run this before pushing!)
```

---

## Key Data Files

| File                            | What it controls                                                             |
| ------------------------------- | ---------------------------------------------------------------------------- |
| `src/lib/services-data.ts`      | All service offerings (drug discovery, bioinformatics, etc.) and their slugs |
| `src/lib/industries-data.ts`    | All industry pages (healthcare, manufacturing, education)                    |
| `src/pages/blogs/blogs-data.ts` | Blog post list, metadata, and content                                        |

---

## Before You Push

1. Run `npx tsc --noEmit` — **zero TypeScript errors required**
2. Run `npm run lint` — fix any lint warnings
3. Test in both **dark mode** and **light mode**
4. Check the page at mobile width (≤ 375px) — grids should stack automatically

---

_Built and maintained by the Quantum Codon engineering team._
