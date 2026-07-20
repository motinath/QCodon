# Quantum Codon — Web Platform & Bioeconomy Architecture

> **The official web platform for Quantum Codon**, a first-mover life sciences company in the Amaravati Quantum Valley. Built with TanStack Start (React SSR), Vite 8, Tailwind CSS v4, and TypeScript.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Preloader & Cinematic Experience](#preloader--cinematic-experience)
- [Project Architecture](#project-architecture)
- [Pages & Routes](#pages--routes)
- [Responsive Typography & Design Tokens](#responsive-typography--design-tokens)
- [Shared Components & AI Widgets](#shared-components--ai-widgets)
- [Build & Quality Assurance](#build--quality-assurance)

---

## Tech Stack

| Layer           | Technology                                                                    |
| --------------- | ----------------------------------------------------------------------------- |
| Framework       | [TanStack Start](https://tanstack.com/start) (React SSR)                      |
| Routing         | [TanStack Router](https://tanstack.com/router) (file-based route trees)       |
| Language        | TypeScript 5                                                                  |
| Styling         | Tailwind CSS v4 + Custom Master Design System Tokens                          |
| Build Tool      | Vite 8                                                                        |
| Icons           | [Lucide React](https://lucide.dev/)                                           |
| 3D / Video      | HTML5 4K Hardware-Accelerated Video Engine (`/d.mp4`) + Custom CSS Keyframes  |
| Chatbot / AI    | Quantum Codon Assistant (`QcChatbot`)                                         |
| Fonts           | Cormorant Garamond, Fira Code, Plus Jakarta Sans (Google Fonts)               |

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production (SSR & Client bundles)
npm run build
```

---

## Preloader & Cinematic Experience

The platform features an ultra-cinematic 4K video preloader (`QcPreloader3D.tsx`) with a strict **5.0-second lifecycle**:

1. **Hardware-Accelerated Video Engine (`/d.mp4`)**:
   - Renders with high-contrast color grading (`brightness-[1.08] contrast-[1.25] saturate-[1.3] blur-[30px]`) and a dark radial vignette backdrop.
2. **Continuous 0-to-Full Zoom Sequence (0.0s – 4.2s)**:
   - Progressively zooms from 0 scale (`scale-100`) to full scale (`scale-[4.5]`) with smooth `cubic-bezier(0.2, 1, 0.4, 1)` easing.
3. **Typography Entrance Animation**:
   - **Quantum Codon** title uses `.animate-title-glow` with letter-spacing tracking and glowing cyan/purple drop-shadows.
   - Tagline **`POWERING THE NEXT-GENERATION BIOECONOMY`** uses `.animate-tagline-tracking` fade-up.
4. **0.8s Camera Outro & Hard Stop (4.2s – 5.0s)**:
   - At 4.2s, the title zooms forward into the camera lens with cyan blur dissolve (`blur-xl`), seamlessly revealing the landing page.
   - At 5.0s, component unmounts and body scroll is cleanly unlocked.

---

## Project Architecture

```
QCodon/
├── public/                  # Static assets served at root (videos, images, icons, robots.txt)
│   ├── d.mp4                # High-definition preloader video
│   ├── dna.mp4              # Secondary bio-video stream
│   └── logo-emblem.png      # Brand mark
├── src/
│   ├── components/
│   │   ├── layout/          # QcNavbar, SiteFooter, QcPreloader3D, QcRouteSwipe
│   │   ├── shared/          # ThemeProvider, ContactModal, Reveal
│   │   └── QcChatbot/       # AI Assistant Chatbot widget
│   ├── lib/                 # Data files (services-data, industries-data, router-compat)
│   ├── pages/               # Self-contained page modules
│   │   ├── landing/         # /
│   │   ├── about/           # /about (includes 2% vs 98% Dark Genome visualizer)
│   │   ├── careers/         # /careers
│   │   ├── contact/         # /contact
│   │   ├── blogs/           # /blogs & /blogs/:slug
│   │   ├── case-studies/    # /case-studies
│   │   ├── research/        # /research
│   │   ├── industries/      # /industries/:slug
│   │   └── services/        # /services/:slug
│   ├── routes/              # TanStack Router definitions (__root.tsx shell)
│   └── styles.css           # Global design system tokens, clamp utilities, animations
├── vite.config.ts           # Vite + TanStack Start build configuration
└── tsconfig.json            # TypeScript path aliases (@/ -> src/)
```

---

## Pages & Routes

| URL Path            | Folder Location                 | Key Component                                         |
| ------------------- | ------------------------------- | ----------------------------------------------------- |
| `/`                 | `src/pages/landing/`            | `Landing.tsx` & `QcLandingContent.tsx`                |
| `/about`            | `src/pages/about/`              | `About.tsx` (2% Mined vs 98% Dark Genome Visualizer)  |
| `/careers`          | `src/pages/careers/`            | `Careers.tsx`                                         |
| `/contact`          | `src/pages/contact/`            | `Contact.tsx` & `ContactHero.tsx`                     |
| `/blogs`            | `src/pages/blogs/`              | `Blogs.tsx`                                           |
| `/blogs/:slug`      | `src/pages/blogs/`              | `BlogPostDetail.tsx`                                  |
| `/case-studies`     | `src/pages/case-studies/`       | `CaseStudies.tsx`                                     |
| `/research`         | `src/pages/research/`           | `Research.tsx`                                        |
| `/industries/:slug` | `src/pages/industries/`         | `IndustryDetailPage.tsx`                              |
| `/services/:slug`   | `src/pages/services/`           | Dynamic service pages (`drug-discovery`, `bio-mmg`…)  |

---

## Responsive Typography & Design Tokens

The platform features a master responsive typography system defined in `styles.css`:

```css
/* Fluid Typography Clamps */
.heading-hero {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.25rem, 5vw, 4.25rem);
  line-height: 1.12;
}

.heading-section {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.875rem, 4vw, 3.25rem);
  line-height: 1.2;
}

.badge-meta {
  font-family: "Fira Code", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
}
```

### Multi-Device Layout Rules

1. **Fluid Grid Clamps**: All grid layouts use adaptive `minmax` columns (`grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]`).
2. **Container Margins**: Responsive outer padding (`px-4 sm:px-6 lg:px-8`) ensures zero screen edge clipping on small mobile viewports (375px+).
3. **Card Micro-Borders (`sci-panel`)**: Uniform card padding (`p-6 md:p-8`) with scientific glassmorphism border styling.

---

## Shared Components & AI Widgets

| Component       | Path                                      | Description                                            |
| --------------- | ----------------------------------------- | ------------------------------------------------------ |
| `QcNavbar`      | `src/components/layout/QcNavbar.tsx`      | Sticky glassmorphism header & responsive mobile drawer |
| `QcPreloader3D` | `src/components/layout/QcPreloader3D.tsx` | 5.0-second 4K video preloader sequence                 |
| `SiteFooter`    | `src/components/layout/SiteFooter.tsx`    | Comprehensive footer with newsletter & quick links     |
| `QcChatbot`     | `src/components/QcChatbot/`               | Floating AI biotech assistant with interactive prompts |
| `ContactModal`  | `src/components/shared/ContactModal.tsx`  | App-wide contact modal triggered via `useContactModal()`|

---

## Build & Quality Assurance

```bash
# Production Build Verification
npm run build

# TypeScript Static Type Check
npx tsc --noEmit
```

- Verified with zero build compilation errors across client and server-side rendering bundles.
