# AARYAN GUPTA PORTFOLIO — COMPLETE ARCHITECTURE MASTER BLUEPRINT
## Single Source of Truth · Production Grade · World-Class Quality
### Version 3.0 | 2025–2027 | Pure HTML + CSS + JS + Vite
### Public Name: Aaryan Gupta | Legal: Aryan Raj | Domain: aaaryangupta.com

---

> **TO ANY ENGINEER, AI, OR DEVELOPER BUILDING THIS WEBSITE:**
> This is the absolute single source of truth. Read every chapter before touching a single file.
> Every decision — architecture, tokens, content, schema, animations, JS modules,
> folder names, variable names — must follow this document exactly.
> Goal: world-class, conversion-optimised, AI-visible, SEO-dominant personal brand
> portfolio that generates genuine freelance clients globally, with priority focus
> on doctors and HealthTech founders in Jaipur and Ahmedabad.
> **No deviation. No assumptions. No compromises.**

---

## TABLE OF CONTENTS

```
CHAPTER 01 — Identity & Brand Foundation
CHAPTER 02 — Design System (Colors, Type, Spacing, Shapes)
CHAPTER 03 — Complete File & Folder Architecture
CHAPTER 04 — Dynamic Config System (The ENV Approach)
CHAPTER 05 — Vite Build System
CHAPTER 06 — Page-by-Page Specifications (All 16 Pages)
CHAPTER 07 — JavaScript Module Specifications (22 Modules)
CHAPTER 08 — CSS Architecture (20+ Files)
CHAPTER 09 — SEO / GEO / AEO Master Strategy
CHAPTER 10 — Schema.org Complete Implementation
CHAPTER 11 — Performance & PWA Requirements
CHAPTER 12 — Animation Reference Table
CHAPTER 13 — Accessibility Checklist
CHAPTER 14 — Deployment & Infrastructure
CHAPTER 15 — Content Management & Update Schedule
CHAPTER 16 — Complete Content (All Copy & All Data)
CHAPTER 17 — Launch Checklist (90 Items)
APPENDIX  A — Quick Reference Card
```

---

## ━━━ CHAPTER 01: IDENTITY & BRAND FOUNDATION ━━━

### 1.1 Core Identity

| Field | Value |
|-------|-------|
| **Public Brand Name** | Aaryan Gupta |
| **Legal Name** | Aryan Raj (documents only — NEVER use publicly) |
| **Primary Title** | Technical Project Manager |
| **Secondary Titles** | HealthTech Digital Strategist · AI & SaaS Product Coordinator · Micro-SaaS Builder · AI Automation Consultant |
| **Primary Market** | Jaipur, Rajasthan, India |
| **Secondary Market** | Ahmedabad, Gujarat, India |
| **Based** | Noida, Uttar Pradesh, India |
| **Global** | Remote / Worldwide |
| **Email** | aaryangupta.pm@gmail.com |
| **Phone** | +91 62056 50368 |
| **WhatsApp** | https://wa.me/916205650368 |
| **Calendly** | https://calendly.com/aaryanpm/30min |
| **LinkedIn** | https://linkedin.com/in/aryanony/ |
| **Twitter/X** | https://x.com/aryanony/ |
| **Instagram** | https://instagram.com/aryanony/ |
| **GitHub** | https://github.com/aryanony |
| **Portfolio** | https://aryanony.github.io/portfolio |
| **ProjectPort** | https://projectsport.vercel.app/ |
| **UiBrium** | https://uibrium.vercel.app/ |
| **Primary Domain** | aaaryangupta.com |
| **Redirect Domain** | aaryanpm.com → aaaryangupta.com (301) |

### 1.2 Brand Promise (VERBATIM — NEVER CHANGE)

> **"I bridge complex technology with seamless execution — so healthcare, SaaS, and product teams ship faster, smarter, and at scale."**

### 1.3 One-Line Entity Bio (USE IN ALL SCHEMA, META, SHORT FIELDS)

> Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, AI automation consulting, and micro-SaaS software delivery for clinics, hospitals, startups, and SMBs across India and globally.

### 1.4 Brand Voice Rules

| Rule | Specification |
|------|---------------|
| **Tone** | Authoritative yet approachable. Precise. Evidence-first. Never arrogant. |
| **Style** | Active voice. Short sentences. Data > adjectives. Lead with outcomes. |
| **Power verbs** | Delivered · Scaled · Coordinated · Reduced · Accelerated · Shipped · Deployed |
| **AVOID** | Fast · Revolutionary · Amazing · Passionate · Guru · Ninja · Rockstar · Synergy |
| **Numbers** | Always use specifics: "70+ markets" not "many markets" |

### 1.5 Target Audience Priority (Build Every Page For This Order)

```
Priority 1 → Doctors / Clinic Owners (Jaipur & Ahmedabad)
  Pain: Manual OPDs, crowded waiting rooms, paper prescriptions, no-shows
  Message: "Software that gives your clinic 2 hours back every OPD day"
  Entry points: /jaipur.html, /ahmedabad.html, /services/healthtech-consulting.html

Priority 2 → HealthTech Founders / Startups
  Pain: PM coordination gaps, delivery failures, technical debt
  Message: "Developer-turned-PM who understands what you're actually building"
  Entry: /services/healthtech-consulting.html

Priority 3 → SMB Owners (All Sectors)
  Pain: Manual workflows, no affordable software, subscription fatigue
  Message: "One-time software — no monthly fees, your server, your data"
  Entry: /services/micro-saas-software.html

Priority 4 → SaaS / Tech Startups (India & Global)
  Pain: Agile delivery gaps, cross-team coordination
  Message: "Technical fluency + PM discipline = on-time delivery, always"
  Entry: /services/technical-project-management.html

Priority 5 → International Clients (Remote)
  Pain: Timezone complexity, unreliable delivery partners
  Message: "70+ markets delivered. Timezone-proof async systems."
  Entry: / (homepage)

Priority 6 → Recruiters (TPM Full-Time Roles)
  Pain: Need proof of work + verifiable PM skills
  Message: Resume + case studies + live projects
  Entry: /about.html, /work/index.html
```

---

## ━━━ CHAPTER 02: DESIGN SYSTEM ━━━

### 2.1 Shape Philosophy — THE ANGULAR RULE

```
CORE IDENTITY: Angular · Edgy · Sharp · Technical · Premium

USE:
  ✓ clip-path polygon corners (signature — use on ALL cards and buttons)
  ✓ Diagonal cuts on card edges (top-right cut is the primary signature)
  ✓ Sharp rectangular frames with corner tick marks
  ✓ Angular bracket decorators < / >
  ✓ Geometric grid-line decorative overlays
  ✓ border-radius: 4px max on micro-elements (tags, inputs, badges)
  ✓ border-radius: 6px max on buttons
  ✓ border-radius: 8px MAXIMUM on cards

DO NOT USE:
  ✗ Circles (profile photo uses polygon frame, never a circle)
  ✗ Pill buttons (border-radius > 8px is forbidden)
  ✗ Blob or organic shapes
  ✗ border-radius > 8px anywhere

SIGNATURE clip-path SHAPES (memorize these):
  Card top-right cut (PRIMARY signature):
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)

  Card small variant:
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)

  Button both corners cut:
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))

  Photo frame all corners:
    clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))

  Cursor dot (diamond shape):
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)

  Cursor ring (octagon shape):
    clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)
```

### 2.2 Color System — Complete CSS Custom Properties

```css
/* ===== assets/css/tokens/colors.css ===== */

/* ─── DARK MODE (Default) ─── */
:root,
:root[data-theme="dark"] {

  /* Backgrounds: slight teal undertone, NOT pure black */
  --bg-base:     #030D0A;   /* deepest bg — near-black with teal hint */
  --bg-surface:  #071410;   /* section backgrounds */
  --bg-card:     #0C1C15;   /* card backgrounds */
  --bg-elevated: #112219;   /* hovered/elevated cards */
  --bg-overlay:  rgba(3,13,10,0.94);
  --bg-glass:    rgba(7,20,16,0.80);

  /* PRIMARY: Dark Sea Green / Teal — NOT too green, balanced with blue/white */
  --accent-p:       #0D9488;   /* primary CTAs, active states */
  --accent-p-glow:  rgba(13,148,136,0.30);
  --accent-p-mute:  rgba(13,148,136,0.12);
  --accent-hover:   #14B8A6;   /* hover state */

  /* SECONDARY: Cyan — bridges teal and blue */
  --accent-c:       #06B6D4;
  --accent-c-glow:  rgba(6,182,212,0.22);
  --accent-c-mute:  rgba(6,182,212,0.10);

  /* TERTIARY: Dark Blue — NOT electric, NOT royal */
  --accent-b:       #2563EB;
  --accent-b-glow:  rgba(37,99,235,0.25);
  --accent-b-mute:  rgba(37,99,235,0.10);

  /* Text */
  --text-primary:   #EDF8F5;   /* warm white, slight teal tint */
  --text-secondary: #8DADA4;   /* medium muted */
  --text-muted:     #4A6B62;   /* very muted */
  --text-accent:    #2DD4BF;   /* highlighted accent text */
  --text-inverse:   #030D0A;   /* text ON colored buttons */

  /* Borders */
  --bd-subtle:  rgba(13,148,136,0.10);
  --bd-mid:     rgba(13,148,136,0.22);
  --bd-strong:  rgba(13,148,136,0.45);
  --bd-white:   rgba(255,255,255,0.08);

  /* Glows (dark mode signature — set to none in light mode) */
  --glow-teal:  0 0 16px rgba(13,148,136,0.40), 0 0 48px rgba(13,148,136,0.14);
  --glow-cyan:  0 0 16px rgba(6,182,212,0.35),  0 0 48px rgba(6,182,212,0.10);
  --glow-blue:  0 0 16px rgba(37,99,235,0.35),  0 0 48px rgba(37,99,235,0.10);

  /* Shadows */
  --sh-card:   0 4px 24px rgba(0,0,0,0.45), 0 1px 0 var(--bd-subtle);
  --sh-hover:  0 8px 40px rgba(0,0,0,0.60), 0 0 0 1px var(--bd-mid);
  --sh-float:  0 20px 60px rgba(0,0,0,0.65), var(--glow-teal);
  --sh-btn:    0 4px 16px var(--accent-p-glow);

  color-scheme: dark;
}

/* ─── LIGHT MODE — Glassmorphism + Clean Teal ─── */
:root[data-theme="light"] {
  --bg-base:     #F0FBFA;   /* near-white with teal hint */
  --bg-surface:  #FFFFFF;
  --bg-card:     rgba(255,255,255,0.90);
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(240,251,250,0.92);
  --bg-glass:    rgba(255,255,255,0.72);

  --accent-p:       #0F766E;
  --accent-p-glow:  rgba(15,118,110,0.18);
  --accent-p-mute:  rgba(15,118,110,0.10);
  --accent-hover:   #0D9488;

  --accent-c:       #0891B2;
  --accent-c-glow:  rgba(8,145,178,0.15);
  --accent-c-mute:  rgba(8,145,178,0.08);

  --accent-b:       #1E40AF;
  --accent-b-glow:  rgba(30,64,175,0.12);
  --accent-b-mute:  rgba(30,64,175,0.07);

  --text-primary:   #071410;
  --text-secondary: #2D5249;
  --text-muted:     #6B938A;
  --text-accent:    #0F766E;
  --text-inverse:   #FFFFFF;

  --bd-subtle:  rgba(15,118,110,0.10);
  --bd-mid:     rgba(15,118,110,0.22);
  --bd-strong:  rgba(15,118,110,0.42);
  --bd-white:   rgba(255,255,255,0.60);

  --glow-teal:  none;
  --glow-cyan:  none;
  --glow-blue:  none;

  --sh-card:   0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05);
  --sh-hover:  0 4px 24px rgba(15,118,110,0.14), 0 1px 0 var(--bd-mid);
  --sh-float:  0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px var(--bd-subtle);
  --sh-btn:    0 4px 16px rgba(15,118,110,0.25);

  color-scheme: light;
}
```

### 2.3 COLOR BALANCE RULE (CRITICAL)

```
Teal:  Primary — 40% usage (CTAs, active, headings, accents)
Blue:  Secondary — 25% usage (tags, links, tertiary accents)
White: Neutral — 30% usage (text, ghost borders, backgrounds)
Cyan:  Highlight — 5% usage (gradient accents, typewriter cursor)

→ NOT too green: blue and white ALWAYS balance the teal
→ Gradients: always teal→cyan (NEVER teal→green)
→ On dark backgrounds: add glow shadows to primary accents
→ On light backgrounds: drop all glows, use stronger shadows
```

### 2.4 Typography Tokens

```css
/* ===== assets/css/tokens/typography.css ===== */

/* Font sources: fontshare.com (ClashDisplay + Satoshi), jetbrains.com (JetBrains Mono) */

@font-face {
  font-family: 'ClashDisplay';
  src: url('/assets/fonts/clash-display/ClashDisplay-Bold.woff2') format('woff2');
  font-weight: 700; font-display: swap;
}
@font-face {
  font-family: 'ClashDisplay';
  src: url('/assets/fonts/clash-display/ClashDisplay-Semibold.woff2') format('woff2');
  font-weight: 600; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Regular.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Medium.woff2') format('woff2');
  font-weight: 500; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Bold.woff2') format('woff2');
  font-weight: 700; font-display: swap;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/assets/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}

:root {
  --font-display: 'ClashDisplay', system-ui, sans-serif;
  --font-body:    'Satoshi', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Type scale (16px base) */
  --text-xs:   0.6875rem;   /* 11px — micro labels */
  --text-sm:   0.8125rem;   /* 13px — small text */
  --text-base: 1rem;        /* 16px — body */
  --text-lg:   1.125rem;    /* 18px */
  --text-xl:   1.25rem;     /* 20px */
  --text-2xl:  1.5rem;      /* 24px */
  --text-3xl:  1.875rem;    /* 30px */
  --text-4xl:  2.25rem;     /* 36px */
  --text-5xl:  3rem;        /* 48px */
  --text-6xl:  3.75rem;     /* 60px */
  --text-7xl:  4.5rem;      /* 72px */

  /* Fluid type */
  --hero-h1:    clamp(2.75rem, 6vw, 4.75rem);
  --hero-sub:   clamp(1rem, 1.8vw, 1.375rem);
  --section-h2: clamp(1.875rem, 3.5vw, 2.5rem);

  /* Line heights */
  --leading-tight:   1.1;
  --leading-snug:    1.3;
  --leading-normal:  1.55;
  --leading-relaxed: 1.72;

  /* Letter spacing */
  --tracking-tight:   -0.04em;
  --tracking-snug:    -0.02em;
  --tracking-wide:     0.04em;
  --tracking-widest:   0.16em;
}
```

### 2.5 Spacing, Layout & Animation Tokens

```css
/* ===== assets/css/tokens/spacing.css ===== */
:root {
  /* 4px base grid */
  --sp-1:  0.25rem;   /* 4px */
  --sp-2:  0.5rem;    /* 8px */
  --sp-3:  0.75rem;   /* 12px */
  --sp-4:  1rem;      /* 16px */
  --sp-5:  1.25rem;   /* 20px */
  --sp-6:  1.5rem;    /* 24px */
  --sp-8:  2rem;      /* 32px */
  --sp-10: 2.5rem;    /* 40px */
  --sp-12: 3rem;      /* 48px */
  --sp-16: 4rem;      /* 64px */
  --sp-20: 5rem;      /* 80px */
  --sp-24: 6rem;      /* 96px */
  --sp-32: 8rem;      /* 128px */

  /* Layout */
  --container-max: 1280px;
  --container-pad: clamp(1.25rem, 5vw, 2.5rem);
  --section-py:    clamp(4rem, 8vw, 8rem);
  --nav-h:         72px;

  /* Border radius (ANGULAR rule — max 8px on cards) */
  --r-xs: 2px;   /* micro only */
  --r-sm: 4px;   /* tags, badges, inputs */
  --r-md: 6px;   /* buttons */
  --r-lg: 8px;   /* cards (ABSOLUTE MAXIMUM) */

  /* clip-path shortcut variables */
  --clip-card:    polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
  --clip-card-sm: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
  --clip-btn:     polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  --clip-photo:   polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));

  /* Z-index layers */
  --z-base:     1;
  --z-elevated: 10;
  --z-nav:      100;
  --z-modal:    300;
  --z-cursor:   9999;
  --z-loader:   10000;

  /* Easing */
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-inout:  cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Durations */
  --dur-fast:   150ms;
  --dur-base:   300ms;
  --dur-slow:   500ms;
  --dur-slower: 800ms;

  /* 3D */
  --perspective: 1000px;
}
```


---

## ━━━ CHAPTER 03: FILE & FOLDER ARCHITECTURE ━━━

```
aaaryangupta.com/                          ← Project root
│
├── ─── ROOT HTML PAGES ─────────────────────────────────────
├── index.html                              Homepage (/)
├── about.html                              About entity page
├── services.html                           Services overview
├── contact.html                            Contact + Calendly
├── jaipur.html                             Jaipur GEO landing
├── ahmedabad.html                          Ahmedabad GEO landing
├── 404.html                                Custom 404 page
├── offline.html                            PWA offline fallback
│
├── ─── SERVICE DEEP-DIVE PAGES ─────────────────────────────
├── services/
│   ├── technical-project-management.html
│   ├── healthtech-consulting.html
│   ├── ai-automation.html
│   ├── micro-saas-software.html
│   └── website-maintenance.html
│
├── ─── WORK / PROJECTS ─────────────────────────────────────
├── work/
│   ├── index.html                          Portfolio overview
│   ├── projectport.html                    Case study
│   ├── uibrium.html                        Case study
│   └── ai-bot.html                         Case study
│
├── ─── BLOG ────────────────────────────────────────────────
├── blog/
│   ├── index.html
│   ├── why-healthtech-apps-fail.html
│   ├── technical-pm-vs-traditional-pm.html
│   ├── ai-tools-for-project-managers.html
│   ├── clinic-digitization-checklist.html
│   ├── agile-for-indian-startups.html
│   └── jaipur-healthtech-opportunity.html
│
├── ─── SEO / PWA ───────────────────────────────────────────
├── sitemap.xml
├── robots.txt
├── manifest.webmanifest
├── sw.js
├── _headers                                Security + cache headers
├── _redirects                              Redirect rules
├── .env.example                            Env template (committed)
├── .env.local                              Local values (GITIGNORED)
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
│
├── ─── DATA LAYER (ALL DYNAMIC CONTENT) ───────────────────
├── data/
│   ├── site.config.json                    ← THE MASTER VARIABLES FILE
│   ├── services.json                       Service cards data
│   ├── projects.json                       Projects/work data
│   ├── experience.json                     Career timeline
│   ├── skills.json                         Tech stack groups
│   ├── faq.json                            FAQ Q&A pairs
│   ├── testimonials.json                   Client testimonials
│   ├── stats.json                          Counter values
│   ├── healthtech-products.json            TokenQ, RxPad, etc.
│   ├── blog-meta.json                      Blog post metadata
│   └── schema/
│       ├── person.json
│       ├── organization.json
│       ├── faqpage.json
│       └── local-business.json
│
└── ─── ASSETS ──────────────────────────────────────────────

assets/
├── css/
│   ├── tokens/
│   │   ├── colors.css                      Chapter 2.2 content
│   │   ├── typography.css                  Chapter 2.4 content
│   │   ├── spacing.css                     Chapter 2.5 content
│   │   └── shapes.css                      Decorative shape utilities
│   ├── base/
│   │   ├── reset.css                       Modern minimal reset
│   │   └── global.css                      html, body, selection, scrollbar
│   ├── layout/
│   │   ├── container.css
│   │   ├── nav.css
│   │   └── footer.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── badges.css
│   │   ├── forms.css
│   │   ├── accordion.css
│   │   ├── cursor.css
│   │   └── loader.css
│   ├── sections/
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── work.css
│   │   ├── experience.css
│   │   ├── skills.css
│   │   ├── healthtech.css
│   │   ├── faq.css
│   │   ├── contact.css
│   │   └── blog.css
│   ├── utilities/
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   ├── print.css
│   │   └── dark-light.css
│   └── main.css                            ← Master @import file
│
├── js/
│   ├── config/
│   │   ├── site.config.js                  Loads + exports JSON config
│   │   └── constants.js
│   ├── core/
│   │   ├── main.js                         Entry point / orchestrator
│   │   ├── theme.js                        Dark/light toggle + persistence
│   │   └── loader.js                       Page preloader animation
│   ├── interactions/
│   │   ├── cursor.js                       2-layer angular cursor
│   │   ├── magnetic.js                     Magnetic button pull
│   │   ├── tilt.js                         3D card tilt + shine
│   │   └── smooth-scroll.js
│   ├── animations/
│   │   ├── gsap-init.js                    GSAP + ScrollTrigger setup
│   │   ├── hero-animations.js              GSAP hero entrance timeline
│   │   ├── scroll-reveal.js               ScrollTrigger section reveals
│   │   ├── counters.js                     Animated stat counters
│   │   ├── typewriter.js                   Hero title cycling
│   │   └── marquee.js
│   ├── three/
│   │   ├── hero-bg.js                      Three.js particle field
│   │   └── geometry-utils.js
│   ├── sections/
│   │   ├── nav.js
│   │   ├── services-render.js              Renders from services.json
│   │   ├── projects-render.js
│   │   ├── experience-render.js
│   │   ├── skills-render.js
│   │   ├── faq-render.js
│   │   ├── stats-render.js
│   │   └── healthtech-render.js
│   ├── forms/
│   │   └── contact-form.js
│   └── utils/
│       ├── scroll-progress.js
│       ├── lazy-load.js
│       ├── copy-email.js
│       ├── cookies.js
│       ├── analytics.js
│       └── pwa.js
│
├── images/
│   ├── profile/
│   │   ├── aaryan-gupta-headshot.webp     < 80KB main
│   │   └── aaryan-gupta-headshot@2x.webp  < 140KB retina
│   ├── og/
│   │   ├── og-default.png                  1200×630
│   │   ├── og-services.png
│   │   └── og-contact.png
│   ├── projects/
│   │   ├── projectport-thumb.webp
│   │   ├── uibrium-thumb.webp
│   │   └── aibot-thumb.webp
│   ├── blog/
│   │   └── [slug]-thumb.webp
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── favicon-32.png
│   │   ├── apple-touch-icon.png            180×180
│   │   ├── icon-192.png                    PWA
│   │   └── icon-512.png                    PWA
│   └── sprite.svg                          All UI icons (Phosphor set)
│
└── fonts/
    ├── clash-display/
    │   ├── ClashDisplay-Bold.woff2
    │   └── ClashDisplay-Semibold.woff2
    ├── satoshi/
    │   ├── Satoshi-Regular.woff2
    │   ├── Satoshi-Medium.woff2
    │   └── Satoshi-Bold.woff2
    └── jetbrains-mono/
        └── JetBrainsMono-Regular.woff2
```

---

## ━━━ CHAPTER 04: DYNAMIC CONFIG SYSTEM ━━━

### 4.1 data/site.config.json — THE MASTER VARIABLES FILE

**This is the single file to update for any site-wide change.**
**All HTML elements, schema, meta, and footer pull from here via JS injection.**

```json
{
  "_comment": "SINGLE SOURCE OF TRUTH — change any value, cascades everywhere",
  "_version": "3.0",
  "_updated": "2025-06-27",

  "identity": {
    "publicName":   "Aaryan Gupta",
    "initials":     "AG",
    "title":        "Technical Project Manager",
    "subtitle":     "HealthTech · AI · SaaS · Micro-SaaS",
    "tagline":      "I bridge complex technology with seamless execution — so healthcare, SaaS, and product teams ship faster, smarter, and at scale.",
    "bio_schema":   "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, AI automation consulting, and micro-SaaS software delivery for clinics, hospitals, startups, and SMBs across India and globally.",
    "availability": "Available for Projects & Roles"
  },

  "contact": {
    "email":        "aaryangupta.pm@gmail.com",
    "phone":        "+91 62056 50368",
    "phoneE164":    "+916205650368",
    "whatsappUrl":  "https://wa.me/916205650368",
    "calendlyUrl":  "https://calendly.com/aaryanpm/30min",
    "calendarText": "Book Free 30-Min Call"
  },

  "location": {
    "primary":      "Jaipur, Rajasthan, India",
    "secondary":    "Ahmedabad, Gujarat, India",
    "based":        "Noida, Uttar Pradesh, India",
    "global":       "Remote / Worldwide",
    "geoRegion":    "IN-RJ",
    "geoPlacename": "Jaipur",
    "lat":          "26.9124",
    "lng":          "75.7873"
  },

  "social": {
    "linkedin":     "https://linkedin.com/in/aryanony/",
    "twitter":      "https://x.com/aryanony/",
    "instagram":    "https://instagram.com/aryanony/",
    "github":       "https://github.com/aryanony",
    "portfolio":    "https://aryanony.github.io/portfolio",
    "handle":       "@aryanony"
  },

  "projects": {
    "projectport":    "https://projectsport.vercel.app/",
    "projectport_gh": "https://github.com/aryanony/ProjectPort",
    "uibrium":        "https://uibrium.vercel.app/",
    "uibrium_npm":    "https://www.npmjs.com/package/uibrium",
    "uibrium_gh":     "https://github.com/aryanony/uibrium",
    "aibot":          "https://aryanony.github.io/portfolio"
  },

  "domain": {
    "primary":  "aaaryangupta.com",
    "url":      "https://aaaryangupta.com",
    "redirect": "aaryanpm.com",
    "protocol": "https"
  },

  "analytics": {
    "ga4_id":      "G-XXXXXXXXXX",
    "clarity_id":  "XXXXXXXXXX",
    "gsc_verified": true
  },

  "stats": {
    "markets":          "70+",
    "markets_count":    70,
    "projects":         "20+",
    "projects_count":   20,
    "experience":       "3+",
    "experience_count": 3,
    "products":         "5+",
    "products_count":   5
  },

  "seo": {
    "defaultTitle": "Aaryan Gupta — Technical Project Manager | HealthTech & SaaS | Jaipur",
    "separator":    " | ",
    "siteName":     "Aaryan Gupta",
    "defaultDesc":  "Aaryan Gupta — Freelance Technical PM for HealthTech & SaaS. 70+ markets delivered. AI Automation. Micro-SaaS. Book a free 30-min strategy call.",
    "ogImage":      "/assets/images/og/og-default.png",
    "twitterHandle":"@aryanony",
    "locale":       "en_IN"
  },

  "pwa": {
    "name":       "Aaryan Gupta — Technical PM",
    "short_name": "Aaryan PM",
    "theme_dark": "#030D0A",
    "theme_light":"#F0FBFA"
  }
}
```

### 4.2 Config Injection Engine (JS)

```javascript
// assets/js/config/site.config.js
export async function loadConfig() {
  const res    = await fetch('/data/site.config.json');
  const config = await res.json();
  window.AG    = config;
  injectDOM(config);
  return config;
}

function injectDOM(config) {
  // Text: <span data-cfg="contact.email"></span>
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const val = resolve(config, el.dataset.cfg);
    if (val !== undefined) el.textContent = val;
  });
  // Href: <a data-cfg-href="social.linkedin">
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const val = resolve(config, el.dataset.cfgHref);
    if (val) el.href = val;
  });
}

function resolve(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}
```

### 4.3 HTML Data-Attribute Usage

```html
<!-- Text injection -->
<span data-cfg="contact.email"></span>
<span data-cfg="stats.markets"></span>
<span data-cfg="identity.availability"></span>

<!-- Href injection -->
<a data-cfg-href="contact.calendlyUrl" data-cfg="contact.calendarText" class="btn btn-p"></a>
<a data-cfg-href="social.linkedin" target="_blank" rel="noopener">LinkedIn</a>
<a data-cfg-href="contact.whatsappUrl" target="_blank" rel="noopener">WhatsApp</a>

<!-- The above replaces ALL hardcoded emails/phones/URLs in HTML -->
<!-- Change data/site.config.json → everything updates instantly -->
```

---

## ━━━ CHAPTER 05: VITE BUILD SYSTEM ━━━

### 5.1 vite.config.js

```javascript
import { defineConfig }         from 'vite';
import { resolve }              from 'path';
import { readdirSync, existsSync } from 'fs';

function collectHTML(dir = '.') {
  const entries = {};
  const scan = (d) => {
    if (!existsSync(d)) return;
    readdirSync(d, { withFileTypes: true }).forEach(f => {
      const full = resolve(d, f.name);
      if (f.isDirectory() && !['node_modules','dist','.git'].includes(f.name)) { scan(full); return; }
      if (!f.name.endsWith('.html')) return;
      const key = full.replace(resolve('.') + '/', '').replace('.html', '');
      entries[key] = full;
    });
  };
  scan(resolve(dir));
  return entries;
}

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: collectHTML(),
      output: {
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
  },
  server: { port: 3000, open: true },
  resolve: {
    alias: {
      '@':       resolve('./assets/js'),
      '@css':    resolve('./assets/css'),
      '@data':   resolve('./data'),
      '@config': resolve('./assets/js/config'),
      '@three':  resolve('./assets/js/three'),
    }
  },
  optimizeDeps: { include: ['gsap', 'gsap/ScrollTrigger', 'three'] }
});
```

### 5.2 package.json

```json
{
  "name": "aaaryangupta-portfolio",
  "version": "3.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev":     "vite",
    "build":   "vite build",
    "preview": "vite preview --port 4000",
    "clean":   "rm -rf dist"
  },
  "dependencies": {
    "gsap":  "^3.12.4",
    "three": "^0.162.0"
  },
  "devDependencies": {
    "vite":   "^5.2.0",
    "terser": "^5.29.0"
  }
}
```

### 5.3 .env.example

```bash
# Copy to .env.local — NEVER commit .env.local to git
VITE_GA4_ID=G-XXXXXXXXXX
VITE_CLARITY_ID=XXXXXXXXXX
VITE_CALENDLY_URL=https://calendly.com/aaryanpm/30min
VITE_ENABLE_PARTICLES=true
VITE_ENABLE_THREEJS=true
VITE_ENABLE_CURSOR=true
VITE_ENV=production
```

---

## ━━━ CHAPTER 06: PAGE SPECIFICATIONS ━━━

### 6.1 HOMEPAGE (index.html) — Complete 14-Section Order

```
URL:    /
TITLE:  Aaryan Gupta — Technical Project Manager | HealthTech & SaaS | Jaipur
DESC:   Aaryan Gupta — Freelance Technical PM for HealthTech & SaaS. 70+ markets
        delivered. AI Automation. Micro-SaaS. Book a free 30-min strategy call.
SCHEMA: Person + FAQPage + WebSite + LocalBusiness

──────────────────────────────────────────────────────────────
NAV (fixed, full-width)
  Transparent → glass blur on scroll (scrollY > 50px)
  Left:   AG logo SVG (angular mark) + "Aaryan Gupta" text
  Center: About · Services · Work · Blog
  Right:  [Book Free Call] btn-p (angular clip-path)
  Mobile: hamburger → full-screen overlay
  2px teal gradient progress bar at very top edge

──────────────────────────────────────────────────────────────
HERO (100svh, 2-column)
  BG: Three.js particles (dark) / CSS gradient (light/fallback)

  LEFT 55% — content:
    1. Eyebrow badge:  [• Available for Projects & Roles]
       → angular clip, pulsing teal diamond dot
    2. H1 (ClashDisplay Bold, fluid):
       "The PM Who"
       "Speaks Dev."      ← gradient text: --accent-p → --accent-c
       "Delivers Results."
    3. Typewriter (Satoshi, below H1):
       Cycles: "Technical Project Manager" / "HealthTech Digital Strategist" /
               "AI Automation Consultant" / "Micro-SaaS Product Builder" /
               "Developer-Turned-PM"
       Speed: 60ms type, 40ms delete, 2.5s pause at full
    4. Brand promise paragraph (Satoshi Regular)
    5. CTA row: [Book Free 30-Min Call] btn-p + [View My Work →] btn-g
       Both: magnetic pull effect
    6. Trust bar (JetBrains Mono, muted):
       "MCA · AKTU 2025 · 70+ Markets · 20+ Projects · 3+ Years"

  RIGHT 45% — visual:
    1. Photo: polygon clip-path frame (NOT circle)
       tech-border corner ticks (teal lines)
       headshot.webp inside
    2. Three floating stat cards (3D parallax):
       "70+" / "International Markets"
       "MCA"  / "AKTU 2025"
       "Jaipur" / "Based"
    3. Decorative grid-line overlay behind photo

──────────────────────────────────────────────────────────────
MARQUEE STRIP
  CSS animation (no JS), auto-scroll left
  7 items: "Technical PM" · "HealthTech" · "AI Automation" ·
           "SaaS Delivery" · "Agile & Scrum" · "Micro-SaaS" · "70+ Markets"
  BG: --bg-surface, 1px borders top/bottom

──────────────────────────────────────────────────────────────
ABOUT SNAPSHOT (2-col)
  H2: "The PM Who Speaks Developer"
  LEFT 55%: 3 paragraphs → [LinkedIn] [GitHub] [Resume PDF] ghost btns
  RIGHT 45%: 4 animated counter stats + 4 feature bullets

──────────────────────────────────────────────────────────────
WHY AARYAN (2×2 card grid)
  H2: "What Sets This PM Apart"
  Intro paragraph
  4 tilt-cards: Developer DNA · 70+ Markets · HealthTech · AI Workflows

──────────────────────────────────────────────────────────────
SERVICES (3-col × 2 rows = 6 cards)
  H2: "What I Deliver"  [Get a Quote →] right-aligned
  Rendered from services.json
  First card featured/slightly prominent

──────────────────────────────────────────────────────────────
SIGNATURE PROJECTS (3-col)
  H2: "Proof of Delivery"
  Rendered from projects.json
  Each: 16:9 thumb, stack pills, name, status badge, result metric, links

──────────────────────────────────────────────────────────────
EXPERIENCE TIMELINE
  H2: "Career Timeline"
  Left: vertical stem (draws on GSAP scrub)
  Right: 4 entries, current highlighted with NOW badge

──────────────────────────────────────────────────────────────
SKILLS GRID (3 columns, collapsible groups)
  H2: "Full-Stack Technical Fluency"
  6 groups from skills.json
  Each group: click to expand/collapse (accessible accordion)

──────────────────────────────────────────────────────────────
HEALTHTECH FOCUS (2-col)
  H2: "Built for Indian Healthcare"
  LEFT: 2 body paragraphs + 4 stat counters + [Talk to Me] CTA
  RIGHT: 5 product cards (collapsible detail on click)

──────────────────────────────────────────────────────────────
PROCESS (5-step horizontal on desktop, vertical on mobile)
  H2: "From First Call to Launch"
  Steps 01–05 with connecting line

──────────────────────────────────────────────────────────────
FAQ ACCORDION (single column)
  H2: "Frequently Asked Questions"
  7 items from faq.json, smooth max-height expand
  FAQPage schema on this section

──────────────────────────────────────────────────────────────
CONTACT / CTA
  H2: "Ready to Ship Something That Works?"
  [Book Free 30-Min Call] + [WhatsApp Me] + [Copy Email]
  Contact line: email · phone · location

──────────────────────────────────────────────────────────────
FOOTER (4-col)
  Col 1: Logo + tagline + social row
  Col 2: Services links
  Col 3: Work links
  Col 4: Connect links
  Bottom: Copyright · Privacy Policy · Sitemap
```

### 6.2 Page SEO Meta Reference

```
/about.html
  TITLE: About Aaryan Gupta | Technical Project Manager | Jaipur, India
  DESC:  MCA (AKTU 2025). Developer-turned-PM. 3+ years, 70+ global markets.
         HealthTech specialist. Jaipur-based, globally available.

/services.html
  TITLE: Services — Technical PM, HealthTech & AI Automation | Aaryan Gupta
  DESC:  Technical PM, HealthTech Consulting, AI Automation, Micro-SaaS,
         Website Maintenance. Jaipur, Ahmedabad & worldwide.

/contact.html
  TITLE: Book a Free 30-Min Call | Aaryan Gupta — Technical PM
  DESC:  Book a free strategy call with Aaryan Gupta. No pitch. Just clarity.
         Jaipur, Ahmedabad & remote clients welcome.

/jaipur.html
  TITLE: Technical Project Manager in Jaipur | HealthTech & SaaS | Aaryan Gupta
  DESC:  Aaryan Gupta — Technical PM in Jaipur. Clinic software, AI automation,
         micro-SaaS. Serving doctors, startups & SMBs in Rajasthan.
  GEO:   IN-RJ / Jaipur

/ahmedabad.html
  TITLE: Technical Project Manager in Ahmedabad | HealthTech | Aaryan Gupta
  DESC:  Aaryan Gupta — Technical PM in Ahmedabad. HealthTech, AI automation,
         micro-SaaS for Gujarat businesses and clinics.
  GEO:   IN-GJ / Ahmedabad

/work/projectport.html
  TITLE: ProjectPort Case Study — Full-Stack Project Automation | Aaryan Gupta
  DESC:  How Aaryan Gupta built ProjectPort: a full-stack client automation
         platform with React, Node.js, and MongoDB. Live on Vercel.

/blog/why-healthtech-apps-fail.html
  TITLE: Why HealthTech Apps Fail in India — A PM's Perspective | Aaryan Gupta
  DESC:  India has 600K+ doctors, fewer than 10% use digital tools. Here is
         why HealthTech products fail to achieve adoption — and how to fix it.
```

---

## ━━━ CHAPTER 07: JAVASCRIPT MODULE SPECIFICATIONS ━━━

### 7.1 cursor.js — Angular 2-Layer Cursor

```javascript
/**
 * cursor.js — 2-layer angular cursor (pure JS, no libraries)
 * Layer 1: Diamond dot   — instant mouse follow
 * Layer 2: Octagon ring  — lerp lag (smooth)
 * HTML needed: <div class="cursor-dot"></div><div class="cursor-ring"></div>
 */
class Cursor {
  constructor() {
    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    if (!this.dot || !this.ring) return;
    if (window.matchMedia('(hover: none)').matches) return;
    this.mouse   = { x: -100, y: -100 };
    this.ringPos = { x: -100, y: -100 };
    this.init();
  }

  init() {
    document.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.dot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    });
    const addHover = (root = document) => {
      root.querySelectorAll('a,button,.card,[data-tilt]').forEach(el => {
        if (el.dataset.cursorDone) return;
        el.dataset.cursorDone = '1';
        el.addEventListener('mouseenter', () => { this.ring.dataset.state = 'hover'; });
        el.addEventListener('mouseleave', () => { delete this.ring.dataset.state; });
      });
    };
    addHover();
    document.addEventListener('ag:ready', () => addHover());
    document.addEventListener('mousedown', () => { this.ring.dataset.state = 'click'; });
    document.addEventListener('mouseup',   () => { delete this.ring.dataset.state; });
    this.tick();
  }

  tick() {
    const lerp = (a, b, t) => a + (b - a) * t;
    this.ringPos.x = lerp(this.ringPos.x, this.mouse.x, 0.12);
    this.ringPos.y = lerp(this.ringPos.y, this.mouse.y, 0.12);
    this.ring.style.transform = `translate(${this.ringPos.x - 20}px, ${this.ringPos.y - 20}px)`;
    requestAnimationFrame(() => this.tick());
  }
}
export default new Cursor();
```

```css
/* cursor.css */
.cursor-dot, .cursor-ring {
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: var(--z-cursor); will-change: transform;
}
.cursor-dot {
  width: 12px; height: 12px;
  background: var(--accent-p);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* DIAMOND */
}
.cursor-ring {
  width: 40px; height: 40px;
  border: 1.5px solid var(--accent-p); opacity: 0.65;
  clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%); /* OCTAGON */
  transition: width .3s var(--ease-spring), height .3s var(--ease-spring), opacity .2s;
}
.cursor-ring[data-state="hover"] { width: 60px; height: 60px; background: var(--accent-p-mute); opacity: 1; }
.cursor-ring[data-state="click"] { width: 32px; height: 32px; background: var(--accent-p); opacity: 0.6; }
@media (hover: none) { .cursor-dot, .cursor-ring { display: none; } }
```

### 7.2 hero-bg.js — Three.js Particle Field

```javascript
/**
 * hero-bg.js — Three.js animated particle field
 * Teal particles with mouse interaction
 * Auto-pauses when hero scrolls off screen (IntersectionObserver)
 */
import * as THREE from 'three';

export function initHeroBackground() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.WebGLRenderingContext) return;

  const isDark  = () => document.documentElement.getAttribute('data-theme') !== 'light';
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
  camera.position.z = 5;

  // Particles
  const N   = window.innerWidth < 768 ? 500 : 1200;
  const pos = new Float32Array(N * 3);
  const vel = [];
  for (let i = 0; i < N; i++) {
    pos[i*3]   = (Math.random() - .5) * 16;
    pos[i*3+1] = (Math.random() - .5) * 10;
    pos[i*3+2] = (Math.random() - .5) * 5;
    vel.push({ x: (Math.random() - .5) * .002, y: (Math.random() - .5) * .002 });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.04, color: isDark() ? 0x0D9488 : 0x0F766E,
    transparent: true, opacity: isDark() ? 0.45 : 0.28, sizeAttenuation: true,
  });
  const pts = new THREE.Points(geo, mat);
  scene.add(pts);

  const mouse = { x: 0, y: 0 };
  canvas.addEventListener('mousemove', e => {
    mouse.x =  (e.clientX / window.innerWidth  - .5) * .5;
    mouse.y = -(e.clientY / window.innerHeight - .5) * .5;
  });

  let active = true;
  const clock = new THREE.Clock();
  function frame() {
    if (!active) return;
    requestAnimationFrame(frame);
    const arr = geo.attributes.position.array;
    for (let i = 0; i < N; i++) {
      arr[i*3]   += vel[i].x;
      arr[i*3+1] += vel[i].y;
      if (arr[i*3]   >  8) arr[i*3]   = -8;
      if (arr[i*3]   < -8) arr[i*3]   =  8;
      if (arr[i*3+1] >  5) arr[i*3+1] = -5;
      if (arr[i*3+1] < -5) arr[i*3+1] =  5;
    }
    geo.attributes.position.needsUpdate = true;
    pts.rotation.x += (mouse.y * .05 - pts.rotation.x) * .05;
    pts.rotation.y += (mouse.x * .05 - pts.rotation.y) * .05;
    pts.rotation.z = clock.getElapsedTime() * .02;
    renderer.render(scene, camera);
  }
  frame();

  new IntersectionObserver(([e]) => { active = e.isIntersecting; }).observe(canvas);
  new ResizeObserver(() => {
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
  }).observe(canvas.parentElement);

  document.addEventListener('themechange', () => {
    mat.color.set(isDark() ? 0x0D9488 : 0x0F766E);
    mat.opacity = isDark() ? 0.45 : 0.28;
  });
}
```

### 7.3 gsap-init.js + hero-animations.js

```javascript
// gsap-init.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'power3.out', duration: 0.7 });
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(100);
}
export { gsap, ScrollTrigger };

// hero-animations.js
import { gsap } from './gsap-init.js';
export function initHeroAnimation() {
  const tl = gsap.timeline({ delay: 0.2 });
  tl.fromTo('.hero__badge',     { opacity:0, x:-24 },              { opacity:1, x:0, duration:0.45 })
    .fromTo('.hero__h1 .word',  { opacity:0, y:40, rotationX:12 }, { opacity:1, y:0, rotationX:0, stagger:0.07, duration:0.6 }, '-=0.2')
    .fromTo('.hero__typewriter', { opacity:0, y:16 },               { opacity:1, y:0, duration:0.4 }, '-=0.1')
    .fromTo('.hero__body',      { opacity:0 },                      { opacity:1, duration:0.4 }, '-=0.1')
    .fromTo('.hero__ctas .btn', { opacity:0, y:12, scale:0.95 },    { opacity:1, y:0, scale:1, stagger:0.1, ease:'back.out(1.4)' }, '-=0.1')
    .fromTo('.hero__trust',     { opacity:0 },                      { opacity:1, duration:0.35 }, '-=0.1')
    .fromTo('.hero__photo',     { opacity:0, scale:0.93, x:24 },    { opacity:1, scale:1, x:0, duration:0.8, ease:'power3.out' }, 0.15)
    .fromTo('.hero__stat-card', { opacity:0, y:24, rotationY:-10 }, { opacity:1, y:0, rotationY:0, stagger:0.14, duration:0.6, ease:'back.out(1.2)' }, '-=0.4');
  return tl;
}
```

### 7.4 scroll-reveal.js — GSAP ScrollTrigger

```javascript
import { gsap, ScrollTrigger } from './gsap-init.js';
export function initScrollAnimations() {
  // Generic reveal
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el, { opacity:0, y:32, filter:'blur(3px)' }, {
      opacity:1, y:0, filter:'blur(0px)',
      scrollTrigger: { trigger:el, start:'top 88%', toggleActions:'play none none none' }
    });
  });
  // Staggered card grids
  gsap.utils.toArray('.reveal-grid').forEach(grid => {
    gsap.fromTo(grid.querySelectorAll(':scope > *'),
      { opacity:0, y:24, rotationX:4 },
      { opacity:1, y:0, rotationX:0, stagger:0.08, duration:0.55,
        scrollTrigger:{ trigger:grid, start:'top 86%', toggleActions:'play none none none' }
      }
    );
  });
  // Timeline stem scrub
  const stem = document.querySelector('.exp__stem');
  if (stem) gsap.fromTo(stem, { scaleY:0 }, { scaleY:1, transformOrigin:'top center', ease:'none',
    scrollTrigger:{ trigger:'.experience', start:'top 80%', end:'bottom 20%', scrub:true }
  });
  // Counters
  gsap.utils.toArray('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };
    gsap.to(obj, { val: target, duration: 1.8, ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });
}
```

### 7.5 tilt.js — 3D Card Tilt with Shine

```javascript
export function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  const apply = (root = document) => {
    root.querySelectorAll('[data-tilt]:not([data-tilt-ready])').forEach(card => {
      card.setAttribute('data-tilt-ready', '1');
      card.style.transformStyle = 'preserve-3d';
      const shine = Object.assign(document.createElement('div'),
        { className: 'card-shine', ariaHidden: 'true' });
      card.appendChild(shine);
      let raf;
      card.addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r  = card.getBoundingClientRect();
          const dx = (e.clientX - r.left - r.width/2)  / (r.width/2);
          const dy = (e.clientY - r.top  - r.height/2) / (r.height/2);
          card.style.transform  = `perspective(var(--perspective)) rotateX(${-dy*8}deg) rotateY(${dx*8}deg) scale(1.02)`;
          card.style.transition = 'transform 0.1s linear';
          shine.style.background = `radial-gradient(circle at ${(dx+1)/2*100}% ${(dy+1)/2*100}%, rgba(13,148,136,0.12) 0%, transparent 60%)`;
        });
      });
      card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        card.style.transform  = 'perspective(var(--perspective)) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s var(--ease-out)';
        shine.style.background = 'none';
      });
    });
  };
  apply(); document.addEventListener('ag:ready', () => apply()); setTimeout(apply, 1200);
}
```

### 7.6 magnetic.js — Button Magnetic Pull

```javascript
export function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;
  const apply = (root = document) => {
    root.querySelectorAll('.btn-magnetic:not([data-mag-done])').forEach(btn => {
      btn.setAttribute('data-mag-done', '1');
      let raf;
      btn.addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r  = btn.getBoundingClientRect();
          const dx = e.clientX - r.left - r.width/2;
          const dy = e.clientY - r.top  - r.height/2;
          btn.style.transform  = `translate(${dx*.25}px, ${dy*.25}px)`;
          btn.style.transition = 'transform 0.12s var(--ease-out)';
        });
      });
      btn.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        btn.style.transform  = 'translate(0,0)';
        btn.style.transition = 'transform 0.45s var(--ease-spring)';
      });
    });
  };
  apply(); document.addEventListener('ag:ready', () => apply());
}
```

### 7.7 main.js — Entry Point Orchestrator

```javascript
/**
 * main.js — Orchestrates all modules in correct dependency order
 */
import { loadConfig }           from '@config/site.config.js';
import { initTheme }            from '@core/theme.js';
import { initLoader }           from '@core/loader.js';
import Cursor                   from '@interactions/cursor.js';
import { initMagnetic }         from '@interactions/magnetic.js';
import { initTilt }             from '@interactions/tilt.js';
import { initHeroAnimation }    from '@animations/hero-animations.js';
import { initScrollAnimations } from '@animations/scroll-reveal.js';
import { initTypewriter }       from '@animations/typewriter.js';
import { renderServices }       from '@sections/services-render.js';
import { renderProjects }       from '@sections/projects-render.js';
import { renderExperience }     from '@sections/experience-render.js';
import { renderSkills }         from '@sections/skills-render.js';
import { renderFAQ }            from '@sections/faq-render.js';
import { renderHealthtech }     from '@sections/healthtech-render.js';
import { initNav }              from '@sections/nav.js';
import { initContactForm }      from '@forms/contact-form.js';
import { initScrollProgress }   from '@utils/scroll-progress.js';
import { initLazyLoad }         from '@utils/lazy-load.js';

async function init() {
  try {
    const cfg = await loadConfig();   // 1. Config FIRST
    initTheme(cfg);                   // 2. Theme (prevent FOUC)
    initLoader();                     // 3. Loader (user feedback)
    initNav(cfg);                     // 4. Nav (user needs immediately)

    await Promise.all([               // 5. Render dynamic sections
      renderServices(), renderProjects(), renderExperience(),
      renderSkills(), renderFAQ(), renderHealthtech(),
    ]);
    document.dispatchEvent(new Event('ag:ready'));

    initMagnetic(); initTilt();       // 6. Interactions
    initScrollProgress(); initLazyLoad();

    initHeroAnimation();              // 7. Animations
    initScrollAnimations();
    initTypewriter(cfg);

    if (import.meta.env.VITE_ENABLE_THREEJS !== 'false') {  // 8. Three.js (lazy)
      import('@three/hero-bg.js').then(m => m.initHeroBackground());
    }

    initContactForm(cfg);             // 9. Form

    setTimeout(async () => {          // 10. Non-critical (deferred 2.5s)
      const { initCookies }   = await import('@utils/cookies.js');
      const { initAnalytics } = await import('@utils/analytics.js');
      const { initPWA }       = await import('@utils/pwa.js');
      initCookies(); initAnalytics(cfg.analytics); initPWA();
    }, 2500);

    document.documentElement.classList.add('js-loaded');
  } catch (err) {
    console.error('[AG] Init error:', err);
    document.documentElement.classList.add('js-loaded');
  }
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
```


---

## ━━━ CHAPTER 08: CSS ARCHITECTURE ━━━

### 8.1 main.css — Master Import (ORDER IS CRITICAL)

```css
/* ================================================================
   AARYAN GUPTA PORTFOLIO — MASTER CSS IMPORT
   Import order matters. DO NOT reorder.
   ================================================================ */
@import './tokens/colors.css';
@import './tokens/typography.css';
@import './tokens/spacing.css';
@import './tokens/shapes.css';
@import './base/reset.css';
@import './base/global.css';
@import './layout/container.css';
@import './layout/nav.css';
@import './layout/footer.css';
@import './components/buttons.css';
@import './components/cards.css';
@import './components/badges.css';
@import './components/forms.css';
@import './components/accordion.css';
@import './components/cursor.css';
@import './components/loader.css';
@import './sections/hero.css';
@import './sections/about.css';
@import './sections/services.css';
@import './sections/work.css';
@import './sections/experience.css';
@import './sections/skills.css';
@import './sections/healthtech.css';
@import './sections/faq.css';
@import './sections/contact.css';
@import './sections/blog.css';
@import './utilities/animations.css';
@import './utilities/dark-light.css';
@import './utilities/responsive.css';
@import './utilities/print.css';
```

### 8.2 Core Component CSS

```css
/* ── base/global.css ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; -webkit-text-size-adjust: 100%; }
body { font-family: var(--font-body); font-size: var(--text-base); color: var(--text-primary); background: var(--bg-base); line-height: var(--leading-normal); -webkit-font-smoothing: antialiased; overflow-x: hidden; transition: background var(--dur-base), color var(--dur-base); }
h1,h2,h3,h4,h5 { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking-tight); color: var(--text-primary); line-height: var(--leading-tight); }
a { color: inherit; text-decoration: none; }
img, video { display: block; max-width: 100%; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg-base); }
::-webkit-scrollbar-thumb { background: var(--bd-mid); border-radius: 2px; }
::selection { background: var(--accent-p); color: var(--text-inverse); }

/* ── layout/container.css ── */
.container { max-width: var(--container-max); margin: 0 auto; padding: 0 var(--container-pad); }
.section { padding: var(--section-py) 0; }
.section-hdr { text-align: center; max-width: 640px; margin: 0 auto var(--sp-16); }
.section-hdr h2 { font-size: var(--section-h2); margin-bottom: var(--sp-3); }
.section-hdr p { font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-relaxed); }

/* ── components/buttons.css ── */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--sp-2); padding: 0.75rem 1.75rem;
  font-family: var(--font-body); font-size: var(--text-base); font-weight: 600;
  letter-spacing: 0.01em; line-height: 1;
  cursor: pointer; user-select: none; white-space: nowrap; text-decoration: none;
  border: 2px solid transparent;
  clip-path: var(--clip-btn);  /* ANGULAR — the brand signature */
  transition: background var(--dur-base) var(--ease-out),
              color      var(--dur-base) var(--ease-out),
              transform  var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 2px solid var(--accent-p); outline-offset: 3px; }

.btn-p { background: var(--accent-p); color: var(--text-inverse); border-color: var(--accent-p); box-shadow: var(--sh-btn); }
.btn-p:hover { background: var(--accent-hover); border-color: var(--accent-hover); box-shadow: var(--glow-teal); transform: translateY(-2px); }

.btn-g { background: transparent; color: var(--accent-p); border-color: var(--accent-p); }
.btn-g:hover { background: var(--accent-p-mute); box-shadow: 0 0 0 1px var(--accent-p); transform: translateY(-2px); }

.btn-w { background: transparent; color: var(--text-primary); border-color: var(--bd-white); }
.btn-w:hover { background: var(--bd-white); }

.btn-sm { padding: 0.5rem 1.25rem; font-size: var(--text-sm); }
.btn-lg { padding: 1rem 2.25rem; font-size: var(--text-lg); }
.btn-xl { padding: 1.125rem 2.75rem; font-size: var(--text-xl); }

/* ── components/cards.css ── */
.card {
  position: relative; background: var(--bg-card);
  border: 1px solid var(--bd-subtle); box-shadow: var(--sh-card);
  padding: var(--sp-8);
  clip-path: var(--clip-card);   /* TOP-RIGHT ANGULAR CUT */
  transform-style: preserve-3d; will-change: transform;
  transition: border-color var(--dur-base), box-shadow var(--dur-base), background var(--dur-base);
}
.card:hover { border-color: var(--bd-mid); box-shadow: var(--sh-hover); background: var(--bg-elevated); }

/* Shine layer for tilt.js */
.card-shine { position: absolute; inset: 0; pointer-events: none; clip-path: inherit; z-index: 1; }

/* ── components/accordion.css (FAQ) ── */
.faq-item { border: 1px solid var(--bd-subtle); clip-path: var(--clip-card-sm); overflow: hidden; transition: border-color var(--dur-base); }
.faq-item.open { border-color: var(--bd-mid); }
.faq-q { width:100%; text-align:left; padding:1.25rem 1.5rem; display:flex; align-items:center; justify-content:space-between; font-weight:600; color:var(--text-primary); cursor:pointer; background:none; border:none; gap:1rem; font-family:var(--font-body); font-size:var(--text-lg); transition:color var(--dur-base); }
.faq-q:hover, .faq-item.open .faq-q { color: var(--accent-p); }
.faq-icon { flex-shrink:0; width:20px; height:20px; color:var(--accent-p); transition:transform var(--dur-base) var(--ease-out); }
.faq-item.open .faq-icon { transform: rotate(45deg); }  /* + becomes × (angular) */
.faq-body { max-height:0; overflow:hidden; transition:max-height 0.38s var(--ease-out); }
.faq-item.open .faq-body { max-height: 500px; }
.faq-ans { padding: 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: var(--leading-relaxed); }

/* ── utilities/animations.css ── */
@keyframes loaderPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
@keyframes loaderFill  { to { width: 100%; } }
@keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes pulseRing   { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.6);opacity:0} }
@keyframes floatY      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

.reveal { opacity: 0; transform: translateY(28px); filter: blur(3px);
  transition: opacity 0.65s var(--ease-out), transform 0.65s var(--ease-out), filter 0.65s; }
.reveal.visible { opacity: 1; transform: none; filter: blur(0); }

/* ── utilities/responsive.css ── */
@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .exp-layout    { grid-template-columns: 1fr; }
  .footer-grid   { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .nav__links  { display: none; }
  .nav__ham    { display: flex; }
  .hero-grid   { grid-template-columns: 1fr; }
  .why-grid, .services-grid, .work-grid { grid-template-columns: 1fr; }
  .process-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .hero__ctas  { flex-direction: column; }
  .footer-grid { grid-template-columns: 1fr; }
  .process-grid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  .reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
  .cursor-dot, .cursor-ring { display: none; }
}
```

---

## ━━━ CHAPTER 09: SEO / GEO / AEO MASTER STRATEGY ━━━

### 9.1 Keyword Targets

```
PRIMARY — Homepage must rank for:
  "technical project manager India"          ~1,600/mo
  "technical project manager Jaipur"         ~320/mo
  "health-tech project manager"              ~480/mo
  "freelance technical PM India"             ~210/mo
  "IT project manager Jaipur"               ~580/mo

SECONDARY — Service pages:
  "clinic digitization software India"       ~180/mo
  "patient queue management software India"  ~110/mo
  "WhatsApp automation clinic India"         ~290/mo
  "micro SaaS India"                         ~350/mo
  "website maintenance retainer India"       ~420/mo

LONG-TAIL — Blog + FAQ:
  "how to digitize a clinic in India"        ~140/mo
  "why healthtech apps fail India"           ~90/mo
  "technical PM vs traditional PM difference"~70/mo

GEO-SPECIFIC:
  "technical project manager in Jaipur"      ~110/mo
  "IT project manager Ahmedabad"             ~90/mo
  "clinic software Jaipur doctor"            ~130/mo

AEO (Featured Snippets + AI Answers):
  "what does a technical project manager do"
  "how much does a technical PM cost in India"
  "what is micro-SaaS software"
  "how to choose a PM for health tech startup"
  "difference between PM and technical PM"
```

### 9.2 robots.txt (AI Bots Explicitly Allowed)

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /draft/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleExtendedBot
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://aaaryangupta.com/sitemap.xml
```

### 9.3 AEO Content Rules (Answer Engine Optimization)

```
Goal: Appear in ChatGPT, Perplexity, Claude, Gemini when users ask
"Who is the best technical PM for HealthTech in Jaipur?"

Rules for every page:
  1. Answer questions in the FIRST sentence of every paragraph
  2. Use exact question as H3 heading (conversational format)
  3. Include "Aaryan Gupta" by name in every major answer
  4. 100% factual accuracy — AI models cross-reference
  5. Structured data on every content type
  6. Third-person bio on About page (entity recognition style)
  7. FAQ answers must be complete and standalone
  8. Use WikiData-style entity descriptions in schema

Highest-pull content for AI models:
  ① Person schema description field
  ② About page entity bio (paragraphs 1–2, third-person)
  ③ FAQ answers (self-contained, 100+ words each)
  ④ Service page H1 + first paragraph
  ⑤ Blog post introductions (first 150 words)
```

---

## ━━━ CHAPTER 10: SCHEMA.ORG IMPLEMENTATION ━━━

### 10.1 Homepage JSON-LD (Person + FAQPage + WebSite + LocalBusiness)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aaaryangupta.com/#person",
      "name": "Aaryan Gupta",
      "url": "https://aaaryangupta.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://aaaryangupta.com/assets/images/profile/aaryan-gupta-headshot.webp",
        "width": 800, "height": 1000,
        "caption": "Aaryan Gupta — Technical Project Manager, Jaipur"
      },
      "jobTitle": "Technical Project Manager",
      "description": "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, AI automation consulting, and micro-SaaS software delivery for clinics, hospitals, startups, and SMBs across India and globally.",
      "email": "aaryangupta.pm@gmail.com",
      "telephone": "+916205650368",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Lloyd Institute of Engineering & Technology, AKTU", "sameAs": "https://liet.ac.in" },
        { "@type": "CollegeOrUniversity", "name": "R.D & D.J College, Munger University" }
      ],
      "knowsAbout": ["Technical Project Management","Health Technology","SaaS","Agile","React.js","Node.js","AI Automation","Prompt Engineering","Micro-SaaS"],
      "sameAs": [
        "https://linkedin.com/in/aryanony/",
        "https://x.com/aryanony/",
        "https://instagram.com/aryanony/",
        "https://github.com/aryanony"
      ],
      "worksFor": { "@type": "Organization", "name": "Oblinex Pvt. Ltd." }
    },
    {
      "@type": "WebSite",
      "@id": "https://aaaryangupta.com/#website",
      "url": "https://aaaryangupta.com",
      "name": "Aaryan Gupta — Technical Project Manager",
      "publisher": { "@id": "https://aaaryangupta.com/#person" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aaaryangupta.com/#localbusiness",
      "name": "Aaryan Gupta — Technical Project Manager",
      "telephone": "+916205650368",
      "email": "aaryangupta.pm@gmail.com",
      "url": "https://aaaryangupta.com",
      "address": { "@type": "PostalAddress", "addressLocality": "Jaipur", "addressRegion": "Rajasthan", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "26.9124", "longitude": "75.7873" },
      "areaServed": ["Jaipur","Ahmedabad","India","Worldwide"],
      "priceRange": "₹₹"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Technical Project Manager actually do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Technical PM bridges engineering teams and business stakeholders — owning the full delivery lifecycle from requirements through deployment. Unlike traditional PMs, a TPM has technical fluency: reading code, reviewing architecture, identifying technical debt, and translating engineering complexity into clear business language. This eliminates the translation gap, reducing rework by up to 40% and accelerating sprint delivery." }
        },
        {
          "@type": "Question",
          "name": "Can Aaryan Gupta help doctors and clinics in Jaipur or Ahmedabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — HealthTech is Aaryan Gupta's primary specialization. He works with doctors, clinic owners, and hospital administrators in Jaipur and Ahmedabad to digitize their practice management: patient queue systems (TokenQ), digital prescriptions (RxPad Pro), lab management (LabTrack Pro), patient follow-up automation (RecallMD), and reputation management (CareReview). All software is one-time purchase, deployed on the clinic's own server with no monthly SaaS fees." }
        },
        {
          "@type": "Question",
          "name": "What are Aaryan Gupta's rates for Technical PM services?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aaryan Gupta offers project-based rates from ₹20,000–₹80,000 per project depending on scope. Monthly retainers for dev team coordination range from ₹25,000–₹60,000/month. Micro-SaaS products are one-time purchases from ₹5,000–₹35,000. Website maintenance starts at ₹2,000/month. A free 30-minute strategy call is available to scope requirements before any commitment." }
        }
      ]
    }
  ]
}
</script>
```

---

## ━━━ CHAPTER 11: PERFORMANCE & PWA ━━━

### 11.1 Targets

```
LCP (Largest Contentful Paint): < 1.8 seconds
INP (Interaction to Next Paint): < 100ms
CLS (Cumulative Layout Shift):   < 0.05
FCP (First Contentful Paint):    < 0.9 seconds

Lighthouse Desktop: 98+ | Lighthouse Mobile: 92+

Size budget per page:
  HTML (gzip):        < 12KB
  Critical CSS inline:< 8KB
  Deferred CSS total: < 60KB
  JS initial:         < 30KB (gzip)
  Fonts total:        < 150KB
  Hero image:         < 80KB (WebP 1200w)
  Total initial load: < 400KB
```

### 11.2 Critical Head Template (Every Page)

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Anti-FOUC: must be FIRST script in <head> -->
  <script>!function(){var t=localStorage.getItem('ag-theme')||(window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t)}()</script>

  <!-- Preload critical resources -->
  <link rel="preload" href="/assets/fonts/clash-display/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/satoshi/Satoshi-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/images/profile/aaryan-gupta-headshot.webp" as="image">

  <!-- DNS prefetch -->
  <link rel="dns-prefetch" href="//www.googletagmanager.com">
  <link rel="dns-prefetch" href="//calendly.com">

  <!-- Meta (page-specific) -->
  <title>PAGE TITLE | MAX 60 CHARS</title>
  <meta name="description" content="MAX 160 CHARS">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://aaaryangupta.com/PAGE-URL">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aaaryangupta.com/PAGE-URL">
  <meta property="og:title" content="OG TITLE">
  <meta property="og:description" content="OG DESC">
  <meta property="og:image" content="https://aaaryangupta.com/assets/images/og/og-default.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@aryanony">
  <meta name="twitter:image" content="https://aaaryangupta.com/assets/images/og/og-default.png">

  <!-- Geo -->
  <meta name="geo.region" content="IN-RJ">
  <meta name="geo.placename" content="Jaipur">

  <!-- hreflang -->
  <link rel="alternate" hreflang="en"    href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="en-IN" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="x-default" href="https://aaaryangupta.com/">

  <!-- Inline critical CSS (above-fold only, ~6KB) -->
  <style>/* CRITICAL CSS INLINE HERE */</style>

  <!-- Deferred full CSS (non-render-blocking) -->
  <link rel="stylesheet" href="/assets/css/main.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>

  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#030D0A" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#F0FBFA" media="(prefers-color-scheme: light)">

  <!-- JSON-LD Schema (page-specific) -->
</head>
```

### 11.3 manifest.webmanifest

```json
{
  "name":             "Aaryan Gupta — Technical Project Manager",
  "short_name":       "Aaryan PM",
  "description":      "Freelance Technical PM for HealthTech & SaaS. 70+ markets. Book a free call.",
  "start_url":        "/",
  "display":          "standalone",
  "theme_color":      "#030D0A",
  "background_color": "#030D0A",
  "lang":             "en-IN",
  "categories":       ["business", "productivity"],
  "icons": [
    { "src": "/assets/images/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/assets/images/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

---

## ━━━ CHAPTER 12: ANIMATION REFERENCE TABLE ━━━

```
┌────────────────────────────────────────────────────────────────────┐
│ ELEMENT              │ TRIGGER        │ ANIMATION         │ DUR    │
├────────────────────────────────────────────────────────────────────┤
│ Page loader bar      │ DOM ready      │ Width 0→100%      │ 1.1s   │
│ Loader exit          │ window.load    │ Slide up exit     │ 0.6s   │
│ Nav entrance         │ Page load      │ Slide down -72px  │ 0.5s   │
│ Scroll progress bar  │ Scroll event   │ Width % of scroll │ instant│
│ Hero eyebrow badge   │ After loader   │ Fade + slide-left │ 0.45s  │
│ Hero H1 words        │ Stagger chain  │ Fade-up + rotateX │ 0.6s   │
│ Hero typewriter      │ After H1       │ Type/delete cycle │ loop   │
│ Hero body text       │ Chain          │ Fade-in           │ 0.4s   │
│ Hero CTA buttons     │ Chain stagger  │ Scale + fade-up   │ 0.5s   │
│ Hero trust bar       │ Chain          │ Fade-in           │ 0.35s  │
│ Hero photo frame     │ Parallel 0.15s │ Scale + fade-right│ 0.8s   │
│ Hero stat cards      │ After photo    │ Stagger 3D flip   │ 0.6s   │
│ Hero Three.js ptcls  │ Always (60fps) │ Float + mouse     │ loop   │
│ Marquee strip        │ Always         │ CSS translateX    │ 30s    │
│ Section headings     │ top 90% VP     │ Fade-up           │ 0.6s   │
│ Section body text    │ top 88% VP     │ Fade-up + blur    │ 0.65s  │
│ Card grids           │ top 86% VP     │ Stagger fade+rotX │ 0.55s  │
│ Stat counters        │ top 85% VP     │ Count 0 → target  │ 1.8s   │
│ Timeline stem        │ Scrub scroll   │ scaleY 0 → 1      │ scrub  │
│ Timeline entries     │ Top visible    │ Fade-left stagger │ 0.5s   │
│ Skill chips          │ top 85% VP     │ Scale + fade stgr │ 0.08s  │
│ Skills group toggle  │ Click          │ max-height expand │ 0.35s  │
│ FAQ accordion open   │ Click          │ max-height expand │ 0.38s  │
│ FAQ accordion close  │ Click          │ max-height shrink │ 0.38s  │
│ Card 3D tilt enter   │ Mouse hover    │ rotateX/Y + scale │ 0.1s   │
│ Card tilt leave      │ Mouse leave    │ Reset to zero     │ 0.5s   │
│ Card shine layer     │ Mouse move     │ Radial gradient   │ instant│
│ Magnetic button      │ Mouse near     │ translate X/Y     │ 0.12s  │
│ Magnetic leave       │ Mouse leave    │ Spring to origin  │ 0.45s  │
│ Cursor dot           │ Mousemove      │ Direct instant    │ instant│
│ Cursor ring          │ Mousemove      │ Lerp 12%/frame    │ smooth │
│ Cursor hover expand  │ Enter target   │ Scale + fill      │ 0.3s   │
│ Cursor click shrink  │ Mousedown      │ Scale compress    │ 0.15s  │
│ Nav glass blur       │ scrollY > 50   │ backdrop-filter   │ 0.3s   │
│ Page exit transition │ Link click     │ Fade + slide      │ 0.4s   │
└────────────────────────────────────────────────────────────────────┘
```

---

## ━━━ CHAPTER 13: ACCESSIBILITY ━━━

```
WCAG 2.1 Level AA — Required before launch

KEYBOARD NAVIGATION:
  ✓ Skip-to-main link (first element, visible on focus)
  ✓ All interactive elements reachable via Tab
  ✓ Focus indicator: 2px solid teal, 3px offset on all elements
  ✓ Tab order matches visual reading order
  ✓ FAQ accordion: Enter/Space to toggle
  ✓ Skills accordion: Enter/Space to toggle
  ✓ Mobile menu: Escape key closes, focus returns to trigger
  ✓ No keyboard trap except modals (focus trapped correctly)

SEMANTIC HTML:
  ✓ Exactly one <h1> per page (hero H1)
  ✓ Heading hierarchy: h1→h2→h3 (never skip levels)
  ✓ <nav aria-label="Primary navigation">
  ✓ <main id="main-content"> wrapping all page content
  ✓ <section aria-labelledby="[section-h2-id]">
  ✓ <footer role="contentinfo">
  ✓ <button> for actions only, <a> for navigation only

IMAGES:
  ✓ All <img> have descriptive alt text
  ✓ Decorative images: alt="" (empty, not missing attribute)
  ✓ SVG icons used in UI: aria-hidden="true" + visible text label
  ✓ Profile photo: meaningful alt "Aaryan Gupta — Technical Project Manager"

COLOR & CONTRAST:
  ✓ Normal text ≥ 4.5:1 ratio
  ✓ Large text (18px+ bold or 24px+) ≥ 3:1 ratio
  ✓ Interactive elements ≥ 3:1
  ✓ Color alone never conveys meaning (always + icon or label)
  ✓ Both dark AND light themes independently pass

FORMS:
  ✓ Every input has associated visible <label>
  ✓ Error messages descriptive ("Please enter a valid email" not "Error")
  ✓ Required: aria-required="true" + asterisk or "(required)" text
  ✓ autocomplete attributes: name, email, tel on all relevant inputs

DYNAMIC CONTENT:
  ✓ aria-expanded on all accordion/disclosure triggers
  ✓ aria-controls linking trigger to panel ID
  ✓ aria-hidden="true" on decorative/animated elements
  ✓ aria-live="polite" on typewriter and counter outputs
  ✓ aria-current="page" on active navigation link
  ✓ aria-label on icon-only buttons (social icons, copy button)

MOTION:
  ✓ prefers-reduced-motion: instantly removes all animations
  ✓ Custom cursor disabled automatically
  ✓ Three.js particle background disabled (falls back to CSS)
  ✓ Counter animations run instantly to final value
  ✓ Typewriter shows final state immediately
```

---

## ━━━ CHAPTER 14: DEPLOYMENT & INFRASTRUCTURE ━━━

### 14.1 Stack Recommendation

```
HOSTING:    Cloudflare Pages (preferred — global CDN, free tier)
CDN:        Cloudflare (automatic with Pages)
SSL:        Cloudflare auto HTTPS
DOMAIN:     Namecheap (5-year registration minimum)
EMAIL:      Gmail (aaryangupta.pm@gmail.com) OR Google Workspace
ANALYTICS:  Google Analytics 4 (deferred load, cookie-gated)
MONITORING: UptimeRobot (free, 5-minute checks)
GSC:        Google Search Console (submit sitemap immediately)
```

### 14.2 _headers (Cloudflare/Netlify Security)

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600, must-revalidate

/data/*.json
  Cache-Control: public, max-age=3600, must-revalidate
```

### 14.3 _redirects

```
https://aaryanpm.com/*    https://aaaryangupta.com/:splat  301!
/about                    /about.html       200
/services                 /services.html    200
/contact                  /contact.html     200
/jaipur                   /jaipur.html      200
/ahmedabad                /ahmedabad.html   200
/work                     /work/index.html  200
/blog                     /blog/index.html  200
/*                        /404.html         404
```

### 14.4 Deploy Sequence

```bash
npm install
cp .env.example .env.local
# Fill VITE_GA4_ID and other values
npm run build
npm run preview
# Run Lighthouse on http://localhost:4000
npx lighthouse http://localhost:4000 --output=html --output-path=./lighthouse.html
# Deploy
npx wrangler pages deploy dist
# Post-deploy
# Submit sitemap.xml to Google Search Console
# Submit to Bing Webmaster Tools
# Test rich results: search.google.com/test/rich-results
```

---

## ━━━ CHAPTER 15: CONTENT MANAGEMENT ━━━

### 15.1 How To Update Any Value

```
CONTACT / IDENTITY:
  → Edit data/site.config.json → cascades to all HTML via JS injection

SOCIAL LINKS:
  → Edit data/site.config.json → social.* keys

SERVICE CARDS:
  → Edit data/services.json → add/remove/reorder JSON objects

PROJECT CARDS:
  → Edit data/projects.json → add/edit project objects

EXPERIENCE:
  → Edit data/experience.json → add new job at array start

SKILLS:
  → Edit data/skills.json → add to any group array

FAQ:
  → Edit data/faq.json → add/reorder/edit Q&A objects

STATS (counters):
  → Edit data/site.config.json → stats.* (both string and count fields)

NEW BLOG POST:
  1. Add metadata entry to data/blog-meta.json
  2. Create /blog/[slug].html following blog post template
  3. Add thumbnail /assets/images/blog/[slug]-thumb.webp (< 60KB WebP)

NEW SERVICE PAGE:
  1. Add to data/services.json
  2. Create /services/[id].html following service page template
  3. Update sitemap.xml
  4. Add _redirects entry if needed
```

### 15.2 Content Update Schedule

```
WEEKLY:
  → Update stats if new milestone hit
  → Check all project links still working

MONTHLY:
  → Publish 1–2 blog posts (minimum 600 words each)
  → Add testimonials if received
  → Refresh Calendly availability

QUARTERLY:
  → Audit meta descriptions for click-through rate (GSC data)
  → Update schema dates
  → Check broken links (all external URLs)
  → Generate fresh sitemap

ANNUALLY:
  → Full content audit — remove outdated info
  → Refresh OG images
  → Update copyright year in footer
  → Review keyword targets (new opportunities)
  → Renew domain registration
```

---

## ━━━ CHAPTER 16: COMPLETE CONTENT ━━━

### 16.1 Hero Section (All Copy — Verbatim)

```
EYEBROW BADGE:    "Available for Projects & Roles"

H1:
  Line 1: "The PM Who"
  Line 2: "Speaks Dev."      [gradient: --accent-p → --accent-c]
  Line 3: "Delivers Results."

TYPEWRITER CYCLE (5 phrases):
  1. "Technical Project Manager"
  2. "HealthTech Digital Strategist"
  3. "AI Automation Consultant"
  4. "Micro-SaaS Product Builder"
  5. "Developer-Turned-PM"
  (60ms type speed, 40ms delete, 2.5s pause at full phrase)

BRAND PROMISE (1 paragraph, Satoshi Regular):
  "I bridge complex technology with seamless execution — so healthcare,
   SaaS, and product teams ship faster, smarter, and at scale.
   Developer-turned-PM with full-stack technical fluency."

CTA BUTTONS:
  Primary: "Book Free 30-Min Call" → data-cfg-href="contact.calendlyUrl"
  Ghost:   "View My Work →"       → /work/index.html

TRUST BAR (JetBrains Mono, muted):
  "MCA · AKTU 2025 · 70+ Markets · 20+ Projects · 3+ Years"

FLOATING STAT CARDS (3 cards, right column):
  Card 1: "70+"    / "International Markets"
  Card 2: "MCA"    / "AKTU 2025"
  Card 3: "Jaipur" / "Based"
```

### 16.2 About Section (Verbatim)

```
H2: "The PM Who Speaks Developer"

P1: Aaryan Gupta is a Technical Project Manager based in Jaipur, India,
    with 3+ years of progressive experience across frontend engineering,
    AI integration, product delivery, and digital strategy.

P2: Currently managing end-to-end project lifecycles at Oblinex Pvt. Ltd.
    across 70+ international markets — owning client onboarding,
    infrastructure setup, sprint governance, QA validation, and Play Store
    / App Store releases for concurrent live client accounts.

P3: With an MCA from AKTU (2025) and hands-on React, Node.js, and DevOps
    fluency, he bridges engineering execution and business outcomes —
    translating complex technical realities into clear stakeholder language
    and actionable delivery plans.

FEATURE BULLETS (with icons):
  ✦ Technical Fluency — Reads code, reviews APIs, speaks dev
  ✦ Agile Delivery — Sprint governance, backlog, retrospectives
  ✦ AI-Native — LLM integration, automation, prompt engineering
  ✦ Cross-Domain — Web, app, DevOps, marketing, branding

COUNTER STATS:
  70+  International Markets Served
  20+  Projects Delivered
  3+   Years Experience
  5+   SaaS Products Built
```

### 16.3 Why Aaryan Section (Verbatim)

```
H2: "What Sets This PM Apart"

INTRO: "Most PMs understand process. Few understand the code behind the
        process. That gap is where projects fail — and where I operate."

CARD 01 — Developer DNA:
  "Built in React, Node.js, Firebase, and DevOps before managing those
   who do. I estimate complexity without asking — saving 40% of sprint
   planning time."

CARD 02 — 70+ Markets Delivered:
  "Currently overseeing client products across India, UAE, UK, USA,
   Europe, and Southeast Asia. Timezone-proof systems, async-first
   processes, zero friction handoffs."

CARD 03 — HealthTech Specialist:
  "Deeply focused on the clinical workflow problem. India's 600K+ doctors
   deserve better digital tools — tools built around how clinicians
   actually work, not UX assumptions."

CARD 04 — AI-Powered Workflows:
  "Integrates LLMs, automation tools, and AI APIs into real delivery
   systems. Reduces admin time by 60%, surfaces blockers before they
   escalate, keeps stakeholders informed with zero lag."
```

### 16.4 Services JSON (All 6 — Complete)

```json
[
  { "id":"tpm", "icon":"briefcase",
    "heading":"Technical Project Management", "subheading":"End-to-end delivery ownership",
    "body":"From requirements through deployment — Agile sprint governance, stakeholder reporting, QA oversight, and milestone-based delivery for web, app, and AI products.",
    "tags":["Agile","Scrum","Jira","QA"], "href":"/services/technical-project-management.html",
    "cta":"Start a Project", "price":"₹25k–₹80k/project" },
  { "id":"healthtech", "icon":"heartbeat",
    "heading":"HealthTech Consulting", "subheading":"For doctors, clinics & health startups",
    "body":"Clinical workflow digitization. Scope, coordinate, and deliver digital health products that actually fit how medicine works — not how software engineers imagine it does.",
    "tags":["Clinics","Labs","Hospitals","EMR"], "href":"/services/healthtech-consulting.html",
    "cta":"Talk HealthTech", "price":"₹20k–₹60k/project" },
  { "id":"ai", "icon":"brain",
    "heading":"AI Automation Consulting", "subheading":"WhatsApp bots · LLM workflows · n8n",
    "body":"WhatsApp bots, AI lead qualification, customer support agents, and workflow automation using n8n, Make, Botpress, and OpenAI API. One-time setup on your own infrastructure.",
    "tags":["WhatsApp","LLM","n8n","Botpress"], "href":"/services/ai-automation.html",
    "cta":"Automate Now", "price":"₹8k–₹30k one-time" },
  { "id":"microsaas", "icon":"code",
    "heading":"Micro-SaaS Software", "subheading":"Ready-made. Self-hosted. No monthly fees.",
    "body":"Ready-made software for Indian SMBs — clinic queues, lab tracking, prescription pads, coaching management, B2B quotation tools. One-time purchase, deployed on your server.",
    "tags":["One-Time","Self-Hosted","SMB"], "href":"/services/micro-saas-software.html",
    "cta":"View Products", "price":"₹5k–₹35k one-time" },
  { "id":"maintenance", "icon":"shield",
    "heading":"Website Maintenance", "subheading":"Monthly retainer — clinics & businesses",
    "body":"Bug fixes, security updates, performance monitoring, content updates, and technical support. Peace of mind — without hiring a full-time developer.",
    "tags":["Monthly","Security","Support"], "href":"/services/website-maintenance.html",
    "cta":"Get Maintained", "price":"₹2k–₹8k/month" },
  { "id":"devcoord", "icon":"users",
    "heading":"Dev Team Coordination", "subheading":"For founders who need PM bandwidth",
    "body":"Sprint planning, task assignment, daily standups, blocker resolution, and client communication — handled. For founders who lack the bandwidth to manage distributed developer teams.",
    "tags":["Remote","Distributed","Agile"], "href":"/services/technical-project-management.html",
    "cta":"Start Coordinating", "price":"₹25k–₹60k/month" }
]
```

### 16.5 Experience JSON (All 4 Jobs)

```json
[
  { "period":"May 2026 — Present", "current":true,
    "role":"Associate Project Manager",
    "company":"Oblinex Pvt. Ltd.", "location":"Patna, India · Full-time",
    "bullets":[
      "Managing end-to-end delivery across <strong>70+ international markets</strong> — from onboarding through infrastructure setup, sprint governance, QA validation, and Play Store / App Store releases.",
      "Coordinating cross-functional developer teams via structured ticketing; resolving blockers, tracking sprint-level progress, and enforcing milestone-based delivery across concurrent live projects.",
      "Driving post-delivery account expansion — identifying customisation opportunities and negotiating scope additions, contributing to upsell revenue and long-term retention."
    ]
  },
  { "period":"April 2025 — February 2026", "current":false,
    "role":"Frontend Web3 Developer Intern",
    "company":"MyDigiShell", "location":"Kolkata, India · Remote Internship",
    "bullets":[
      "Coordinated multi-project Web3 frontend delivery over <strong>11 months</strong> — aligning backend developers, design stakeholders, and sprint timelines to meet client commitments.",
      "Integrated blockchain wallet features using React.js, Tailwind CSS, and Web3 libraries; enforced QA standards across every release cycle."
    ]
  },
  { "period":"November 2021 — March 2022", "current":false,
    "role":"Digital Marketer & E-Commerce Strategist",
    "company":"Elipact Enterprises", "location":"Patna, Bihar · Full-time",
    "bullets":[
      "Planned and executed SEO and content marketing roadmaps for Shopify and WordPress — managing timelines, content calendars, and channel KPIs end-to-end."
    ]
  },
  { "period":"August 2021 — November 2021", "current":false,
    "role":"Web Developer & WordPress Specialist",
    "company":"Ipistis Technologies + Startup Web Support", "location":"Patna / Remote",
    "bullets":[
      "Delivered SEO-optimised WordPress websites end-to-end for multiple clients — brief to launch, including requirements, UI design, speed optimisation, and security hardening."
    ]
  }
]
```

### 16.6 Skills JSON (All 6 Groups)

```json
{
  "PM & Agile":        ["Agile","Scrum","Kanban","Jira","Notion","Trello","Miro","Sprint Planning","Backlog Grooming","Stakeholder Reporting","Risk Management","QA Governance"],
  "Frontend Dev":      ["React.js","TypeScript","HTML5","CSS3","JavaScript ES6+","Tailwind CSS","Bootstrap","SASS/SCSS","Responsive Design","Web3 / dApp Frontend"],
  "Backend & DB":      ["Node.js","Express.js","MongoDB","MySQL","Firebase","REST APIs","PHP basics","Laravel basics"],
  "AI & Automation":   ["Prompt Engineering","OpenAI API","Claude API","Botpress","LLM Integration","n8n","Make/Zapier","WhatsApp Automation"],
  "DevOps & Tools":    ["Git","GitHub","Vercel","Linux (Debian)","CI/CD","Docker (concepts)","IPFS","cPanel","VPS Setup"],
  "Design & Marketing":["Figma","UI/UX Design","SEO","SMO","Google Analytics 4","Google Search Console","Brand Strategy","WordPress","Shopify","Canva"]
}
```

### 16.7 HealthTech Products JSON (All 5)

```json
[
  { "id":"tokenq", "name":"TokenQ", "tagline":"OPD Patient Queue System",
    "desc":"Patients get a WhatsApp token number. Doctor sees live queue on any screen. Eliminates crowded waiting rooms instantly.",
    "price":"₹6,000–₹12,000", "setup":"24 hours" },
  { "id":"rxpad-pro", "name":"RxPad Pro", "tagline":"Digital Prescription Generator",
    "desc":"Type or voice-input prescriptions. System generates professional PDF with clinic letterhead in seconds. Patient history stored.",
    "price":"₹5,000–₹10,000", "setup":"24 hours" },
  { "id":"labtrack-pro", "name":"LabTrack Pro", "tagline":"Diagnostic Lab Management",
    "desc":"Sample tracking, test report generation, patient notification — complete lab workflow in one system.",
    "price":"₹15,000–₹35,000", "setup":"48 hours" },
  { "id":"recallmd", "name":"RecallMD", "tagline":"Patient Follow-Up Automation",
    "desc":"Automated WhatsApp follow-ups for appointment reminders, medication schedules, and post-visit check-ins. Zero manual effort.",
    "price":"₹4,000–₹8,000", "setup":"12 hours" },
  { "id":"carereview", "name":"CareReview", "tagline":"Clinic Reputation Management",
    "desc":"Automated Google review requests post-visit. Monitor ratings, respond to feedback, grow online presence.",
    "price":"₹4,000–₹9,000", "setup":"12 hours" }
]
```

### 16.8 FAQ JSON (All 7 — Complete)

```json
[
  { "q":"What does a Technical Project Manager actually do?",
    "a":"A Technical PM bridges engineering teams and business stakeholders — owning the full delivery lifecycle from requirements through deployment. Unlike traditional PMs, a TPM reads code, reviews architecture decisions, identifies technical debt early, and communicates engineering complexity in clear business language. This eliminates the translation gap, reducing rework by up to 40% and accelerating sprint velocity." },
  { "q":"Can you help doctors and clinics in Jaipur or Ahmedabad?",
    "a":"Yes — HealthTech is a primary specialization. Aaryan works with doctors, clinic owners, and hospital administrators in Jaipur and Ahmedabad to digitize their practice: patient queue management (TokenQ), digital prescriptions (RxPad Pro), lab management (LabTrack Pro), patient follow-up automation (RecallMD), and reputation management (CareReview). All software is one-time purchase, deployed on the clinic's own server with no monthly SaaS fees." },
  { "q":"What does your micro-SaaS software cost?",
    "a":"Products are one-time purchases from ₹5,000 to ₹35,000 depending on complexity. TokenQ (₹6,000–₹12,000), RxPad Pro (₹5,000–₹10,000), LabTrack Pro (₹15,000–₹35,000), RecallMD (₹4,000–₹8,000), CareReview (₹4,000–₹9,000). All include deployment on your own server and 30-day support. Optional maintenance from ₹2,000/month." },
  { "q":"Are you available for remote or international projects?",
    "a":"Yes. Currently managing projects across 70+ countries at Oblinex Pvt. Ltd. Async-first workflow, milestone-based delivery — timezone agnostic. International freelance engagements welcome. USD pricing available ($500–$1,500/month)." },
  { "q":"What happens in the free 30-minute call?",
    "a":"No sales pitch. The 30-minute call covers: what you are trying to build or fix, your current team setup and constraints, realistic timeline and budget range, and whether a PM engagement is the right fit. You leave with a clear next-step action plan whether or not you engage Aaryan." },
  { "q":"Do you offer ongoing maintenance after delivery?",
    "a":"Yes. Post-delivery maintenance: Basic ₹2,000/month (bug fixes, security monitoring), Standard ₹4,000/month (10 hours + minor updates), Premium ₹8,000/month (unlimited minor changes, priority 4-hour response, monthly report). Cancel anytime." },
  { "q":"What makes your HealthTech approach different from other consultants?",
    "a":"Most PM consultants approach healthcare like e-commerce. Clinical software fails when it ignores the 3-minute patient consultation window, actual doctor workflow, receptionist tech comfort levels, and connectivity drops during OPD. Aaryan maps real clinic workflows before speccing a single feature — this is why products achieve genuine adoption, not just deployment." }
]
```

### 16.9 Contact Section (Verbatim)

```
H2:   "Ready to Ship Something That Works?"

BODY: "Book a free 30-minute strategy call. No sales pitch —
       just clarity on what you need and whether I can help."

CTA 1: "Book Free 30-Min Call" → data-cfg-href="contact.calendlyUrl"
CTA 2: "WhatsApp Me"           → data-cfg-href="contact.whatsappUrl"
CTA 3: "Copy Email"            → Clipboard API (aaryangupta.pm@gmail.com)

LINE: "<email> · <phone> · Jaipur / Ahmedabad / Remote"
      (all values injected from site.config.json via data-cfg)
```

---

## ━━━ CHAPTER 17: LAUNCH CHECKLIST (90 Items) ━━━

```
━━ CONTENT (10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 01 All placeholder text replaced with real content
□ 02 Professional headshot added (WebP, < 80KB)
□ 03 OG image created 1200×630px (< 200KB PNG)
□ 04 All service descriptions finalized
□ 05 All FAQ answers complete and reviewed
□ 06 At least 1 blog post published
□ 07 All project links tested (ProjectPort, UiBrium, AI Bot)
□ 08 Calendly link live and shows correct availability
□ 09 Contact form emails receiving correctly
□ 10 WhatsApp button opens correct pre-filled message

━━ SEO / META (13) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 11 All title tags ≤ 60 characters
□ 12 All meta descriptions ≤ 160 characters
□ 13 Canonical tags on every page
□ 14 OG tags complete + images correct 1200×630
□ 15 Twitter card tags on every page
□ 16 hreflang (en, en-IN, x-default) on every page
□ 17 robots.txt deployed and AI bots explicitly allowed
□ 18 sitemap.xml generated with all page URLs
□ 19 Sitemap submitted to Google Search Console
□ 20 Schema JSON-LD validated at schema.org/validator
□ 21 Rich results test passes (search.google.com/test/rich-results)
□ 22 One H1 per page, heading hierarchy correct
□ 23 Geo meta tags on homepage + location pages

━━ PERFORMANCE (12) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 24 Lighthouse mobile score ≥ 92
□ 25 Lighthouse desktop score ≥ 98
□ 26 LCP < 1.8 seconds
□ 27 CLS < 0.05
□ 28 INP < 100ms
□ 29 All images WebP + width/height attributes
□ 30 Below-fold images have loading="lazy"
□ 31 Fonts preloaded with crossorigin
□ 32 Critical CSS inlined (< 8KB)
□ 33 Non-critical JS deferred / lazy-loaded
□ 34 Service Worker caching working
□ 35 Offline fallback page accessible

━━ FUNCTIONALITY (19) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 36 Dark/light theme toggle working
□ 37 Theme persists across page reloads (localStorage)
□ 38 System color scheme preference respected
□ 39 Anti-FOUC script preventing flash
□ 40 Custom cursor working (diamond dot + octagon ring)
□ 41 Cursor states: default / hover / click
□ 42 Three.js particle background loading and animating
□ 43 GSAP hero entrance animation playing in sequence
□ 44 GSAP scroll reveals triggering correctly
□ 45 3D tilt effect on all data-tilt cards (with shine layer)
□ 46 Magnetic pull on .btn-magnetic elements
□ 47 Typewriter cycling all 5 titles correctly
□ 48 Counter animations trigger on scroll into view
□ 49 Timeline stem draws on scroll (GSAP scrub)
□ 50 FAQ accordion: click open, click close, only one open
□ 51 Skills groups: click to collapse/expand each group
□ 52 Contact form validation working (required, email format)
□ 53 Contact form mailto submit opens mail client
□ 54 Cookie consent banner shows, accept/decline works
□ 55 Copy email button (clipboard API) works with feedback

━━ NAVIGATION & UX (7) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 56 Nav active state updates on scroll (IntersectionObserver)
□ 57 Nav glass blur on scroll (scrollY > 50px)
□ 58 Marquee strip auto-scrolling smoothly
□ 59 Mobile hamburger menu opens overlay
□ 60 Mobile menu: Escape key closes it
□ 61 All anchor links smooth-scroll with nav height offset
□ 62 Scroll progress bar shows and fills correctly

━━ CROSS-BROWSER / DEVICE (10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 63 Chrome desktop (latest)
□ 64 Firefox desktop (latest)
□ 65 Safari desktop (latest)
□ 66 Edge desktop (latest)
□ 67 Chrome on Android (real device test)
□ 68 Safari on iOS iPhone (real device test)
□ 69 320px viewport — no horizontal overflow
□ 70 768px viewport — layout correct
□ 71 1440px viewport — standard desktop
□ 72 1920px viewport — max-width respected

━━ ACCESSIBILITY (8) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 73 Skip-to-main link visible on keyboard focus
□ 74 All interactive elements focusable via Tab
□ 75 Focus indicator: 2px teal outline visible
□ 76 Color contrast ≥ 4.5:1 (both themes)
□ 77 ARIA labels on all icon-only buttons
□ 78 aria-expanded on all accordion triggers
□ 79 Screen reader tested (NVDA or VoiceOver)
□ 80 prefers-reduced-motion removes all animations

━━ SECURITY / INFRA (5) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 81 HTTPS active and certificate valid
□ 82 HTTP → HTTPS redirect working
□ 83 Security headers deployed and passing (securityheaders.com)
□ 84 No sensitive data in public JS or HTML
□ 85 GA4 Measurement ID is production (not G-XXXXXXXXXX)

━━ ANALYTICS & TRACKING (5) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ 86 GA4 receiving page views correctly
□ 87 Google Search Console domain property verified
□ 88 Sitemap submitted to GSC and indexed
□ 89 Bing Webmaster Tools: domain submitted
□ 90 UptimeRobot monitoring active (alert on downtime)

━━ POST-LAUNCH WEEK 1 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Google Business Profile (Jaipur) created with correct NAP
□ LinkedIn announcement post published
□ Instagram portfolio screenshots posted
□ Twitter/X launch thread posted
□ Wikidata entity created (GEO signal)
□ Crunchbase profile created (GEO signal)
□ Set up GSC weekly performance email alerts
□ Submit to ProductHunt if appropriate
```

---

## ━━━ APPENDIX A: QUICK REFERENCE CARD ━━━

```
━━ KEY COLORS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Teal Primary (CTAs):      #0D9488  (var: --accent-p)
Teal Hover:               #14B8A6  (var: --accent-hover)
Cyan Accent:              #06B6D4  (var: --accent-c)
Blue Tertiary:            #2563EB  (var: --accent-b)
Background Deep:          #030D0A  (var: --bg-base)
Background Surface:       #071410  (var: --bg-surface)
Card Background:          #0C1C15  (var: --bg-card)
Text Primary:             #EDF8F5  (var: --text-primary)
Text Secondary:           #8DADA4  (var: --text-secondary)
Text Accent:              #2DD4BF  (var: --text-accent)

COLOR BALANCE: 40% Teal · 25% Blue · 30% White · 5% Cyan
NEVER: too green, circles, border-radius > 8px, pill buttons

━━ SIGNATURE clip-path SHAPES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card (top-right cut):
  polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)
Button (both corners):
  polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))
Photo frame (all corners):
  polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))
Cursor dot (diamond):
  polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)
Cursor ring (octagon):
  polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)

━━ FONTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headings:   ClashDisplay Bold 700   → fontshare.com/fonts/clash-display
Body:       Satoshi Regular/Medium  → fontshare.com/fonts/satoshi
Mono/Code:  JetBrains Mono 400      → jetbrains.com/mono

━━ NPM PACKAGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
gsap    ^3.12.4   (GSAP animations + ScrollTrigger)
three   ^0.162.0  (Three.js hero particle field)
vite    ^5.2.0    (Dev server + production bundler)

━━ KEY LINKS (from data/site.config.json) ━━━━━━━━━━━━━━━━━━
Site:       https://aaaryangupta.com
Calendly:   https://calendly.com/aaryanpm/30min
WhatsApp:   https://wa.me/916205650368
LinkedIn:   https://linkedin.com/in/aryanony/
GitHub:     https://github.com/aryanony
Email:      aaryangupta.pm@gmail.com
Phone:      +91 62056 50368

━━ CONTENT CHANGE PROCEDURE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email/Phone:    → data/site.config.json (cascades everywhere)
Stats:          → data/site.config.json → stats.*
Service cards:  → data/services.json
Projects:       → data/projects.json
Timeline:       → data/experience.json
Skills:         → data/skills.json
FAQ:            → data/faq.json
HealthTech pdts:→ data/healthtech-products.json
Blog post:      → data/blog-meta.json + create blog/[slug].html

━━ ANIMATION LIBRARY SUMMARY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GSAP v3:        Hero entrance, scroll reveals, counters, stem draw
Three.js v162:  Hero particle field (pauses when offscreen)
CSS Keyframes:  Marquee, loader, pulse ring, float
Pure rAF JS:    Custom cursor lerp, tilt 3D, magnetic buttons
NO:             AOS, Framer Motion, Lottie, ScrollMagic

━━ SHAPE PHILOSOPHY (NEVER VIOLATE) ━━━━━━━━━━━━━━━━━━━━━━━
✓ Angular clip-path on ALL cards and buttons
✓ Diamond cursor dot, octagon cursor ring
✓ Angular photo frame polygon (not a circle)
✓ Corner tick marks (::before / ::after) on bordered elements
✓ Grid-line decorative overlays (background-image linear-gradient)
✗ Zero circles (6-8px status dot pulses are the ONLY exception)
✗ Zero border-radius > 8px anywhere
✗ Zero pill/rounded shapes
✗ Zero blob/organic/fluid shapes
```

---

*END OF AARYAN GUPTA PORTFOLIO MASTER BLUEPRINT v3.0*
*File: AARYAN_MASTER_BLUEPRINT.md*
*Last Updated: 2025-06-27*
*Maintained by: Aaryan Gupta — aaryangupta.pm@gmail.com*
*Domain: https://aaaryangupta.com*
*Total Specification: ~2,100 lines · Complete · No compromises*
