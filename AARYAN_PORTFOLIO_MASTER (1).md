# AARYAN GUPTA — PORTFOLIO WEBSITE MASTER BLUEPRINT
## World-Class Personal Brand Website | Complete AI Build Guide
### Version: 2025–2027 | Tech: Vanilla HTML + CSS + JS | Goal: SEO/GEO/AEO Dominance

---

> **PROMPT FOR AI BUILDING THIS WEBSITE:**
> You are a senior frontend architect, 30+ year UI/UX designer, and world-class SEO/GEO/AEO engineer working together. This markdown file is the single source of truth. Read every section completely before writing a single line of code. Every decision — architecture, visual design, content, schema, animation, interaction, performance — must follow this document exactly. The goal: build a world-class, conversion-optimized, AI-visible, SEO-dominant personal brand portfolio website for Aaryan Gupta, a Technical Project Manager specializing in HealthTech, AI products, SaaS, and SMB software — that generates unlimited genuine freelance clients globally, with special attraction for doctors and HealthTech founders in Jaipur and Ahmedabad. No assumptions. No deviation. Nothing missed.

---

## ━━━ CHAPTER 1: IDENTITY & BRAND FOUNDATION ━━━

### 1.1 Core Identity

| Field | Value |
|-------|-------|
| **Public Brand Name** | Aaryan Gupta |
| **Legal Name (documents only — NEVER use publicly)** |  |
| **Primary Title** | Technical Project Manager |
| **Secondary Titles** | HealthTech Digital Strategist · AI & SaaS Product Coordinator · Micro-SaaS Builder · Website Maintenance Expert · AI Automation Consultant |
| **Location (Primary Target)** | Jaipur, India |
| **Location (Secondary Target)** | Ahmedabad, India |
| **Location (Based)** | Noida, India |
| **Location (Global)** | Remote / Worldwide |
| **Email** | aaryangupta.pm@gmail.com |
| **Phone** | +91 62056 50368 |
| **LinkedIn** | https://linkedin.com/in/aryanony/ |
| **Twitter/X** | https://x.com/aryanony/ |
| **Instagram** | https://instagram.com/aryanony/ |
| **GitHub** | https://github.com/aryanony |
| **Current Portfolio** | https://aryanony.github.io/portfolio |
| **ProjectPort (Client Software)** | https://projectsport.vercel.app/ |
| **UiBrium (NPM Library)** | https://uibrium.vercel.app/ |
| **Primary Domain** | aaaryangupta.com |
| **Redirect Domain** | aaryanpm.com → aaaryangupta.com (301) |

---

### 1.2 Brand Promise (Use Verbatim in Hero — Never Change)

> **"I bridge complex technology with seamless execution — so healthcare, SaaS, and product teams ship faster, smarter, and at scale."**

---

### 1.3 One-Line Schema Bio (Use in Every Schema, Meta, Short Field)

> Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, AI automation consulting, and micro-SaaS software delivery for clinics, hospitals, startups, and SMBs across India and globally.

---

### 1.4 Brand Voice & Tone Rules

- **Tone:** Authoritative yet approachable. Precise. Never arrogant. Evidence-first.
- **Language:** English (primary). Occasional Hindi for local pages only.
- **Power verbs:** Delivered · Scaled · Coordinated · Reduced · Accelerated · Optimized · Managed · Shipped · Led · Deployed · Architected · Automated
- **Avoid:** Fast · Revolutionary · Amazing · Passionate · Guru · Ninja · Rockstar · Synergy · Best-in-class · World-class (in body copy)
- **Style:** Active voice. Short sentences. Data beats adjectives. Lead with outcomes always.
- **Numbers:** Use always when available. "70+ markets" not "many markets."

---

### 1.5 Target Audience Hierarchy

| Priority | Audience | Key Pain | Message Angle |
|----------|----------|----------|---------------|
| #1 | Doctors / Clinic Owners (Jaipur) | Manual processes, no-shows, paper records | "I build systems that give you 2 hours back per day" |
| #2 | HealthTech Founders | PM coordination, delivery gaps | "Dev-turned-PM who understands what you're building" |
| #3 | SMB Owners (all sectors) | Manual workflows, lack of software | "One-time software — no monthly fees, set up on your server" |
| #4 | SaaS/Tech Startups | Agile delivery, coordination | "Technical fluency + PM discipline = on-time delivery" |
| #5 | International Clients | Remote project coordination | "70+ markets delivered, timezone-proof systems" |
| #6 | Recruiters (TPM roles) | Portfolio, proof | Resume + case studies + GitHub |

---

## ━━━ CHAPTER 2: COMPLETE FILE & FOLDER ARCHITECTURE ━━━

### 2.1 Root Project Structure

```
aaaryangupta.com/                          ← Project root
│
├── index.html                             ← Homepage (/)
├── about.html                             ← About page (/about/)
├── services.html                          ← Services overview (/services/)
├── case-studies.html                      ← Case studies index (/case-studies/)
├── blog.html                              ← Blog index (/blog/)
├── contact.html                           ← Contact + Calendly (/contact/)
├── jaipur.html                            ← Jaipur location page (/jaipur/)
├── ahmedabad.html                         ← Ahmedabad location page (/ahmedabad/)
├── 404.html                               ← Custom 404 (branded)
├── sitemap.xml                            ← XML sitemap (auto-maintained)
├── robots.txt                             ← Crawler rules
├── manifest.webmanifest                   ← PWA manifest
│
├── services/
│   ├── technical-project-management.html  ← Service page 1
│   ├── healthtech-consulting.html         ← Service page 2
│   ├── website-maintenance.html          ← Service page 3
│   ├── ai-automation.html                ← Service page 4
│   └── micro-saas-software.html          ← Service page 5
│
├── case-studies/
│   ├── projectport.html                   ← Case study: ProjectPort
│   ├── uibrium.html                       ← Case study: UiBrium
│   └── oblinex-delivery.html             ← Case study: 70+ markets PM
│
├── blog/
│   ├── why-healthtech-apps-fail.html
│   ├── technical-pm-vs-traditional-pm.html
│   ├── ai-tools-for-project-managers.html
│   ├── clinic-digitization-checklist.html
│   ├── agile-for-indian-startups.html
│   └── jaipur-healthtech-opportunity.html
│
├── assets/
│   ├── css/
│   │   ├── root.css                       ← CSS variables, design tokens
│   │   ├── reset.css                      ← Minimal reset
│   │   ├── typography.css                 ← Font definitions, scale
│   │   ├── layout.css                     ← Grid, flex, container
│   │   ├── components.css                 ← Cards, buttons, badges
│   │   ├── animations.css                 ← All keyframes, transitions
│   │   ├── dark-mode.css                  ← Dark mode overrides
│   │   ├── light-mode.css                 ← Light mode (glassmorphism)
│   │   ├── cursor.css                     ← Custom cursor styles
│   │   ├── loader.css                     ← Page loader animation
│   │   └── responsive.css                 ← All breakpoints
│   │
│   ├── js/
│   │   ├── config.js                      ← Site config / dynamic vars
│   │   ├── main.js                        ← Core init, event listeners
│   │   ├── theme.js                       ← Dark/light mode toggle
│   │   ├── cursor.js                      ← Custom cursor logic
│   │   ├── loader.js                      ← Page loading animation
│   │   ├── animations.js                  ← Intersection Observer, scroll
│   │   ├── counter.js                     ← Animated counters
│   │   ├── typewriter.js                  ← Typewriter effect (hero)
│   │   ├── particles.js                   ← Particle background (hero)
│   │   ├── tilt.js                        ← 3D card tilt on hover
│   │   ├── magnetic.js                    ← Magnetic button effect
│   │   ├── scroll-progress.js             ← Top progress bar
│   │   ├── smooth-scroll.js               ← Smooth anchor scroll
│   │   ├── lazy-load.js                   ← Image lazy loading
│   │   ├── contact-form.js                ← Form validation + submit
│   │   ├── analytics.js                   ← GA4 events (deferred)
│   │   └── pwa.js                         ← Service worker registration
│   │
│   ├── images/
│   │   ├── headshot.webp                  ← Professional photo (< 80KB)
│   │   ├── headshot-2x.webp              ← Retina version
│   │   ├── og-default.webp               ← OG image 1200×630px
│   │   ├── og-services.webp              ← OG image for services
│   │   ├── og-blog.webp                  ← OG image for blog
│   │   ├── logo.svg                       ← Logo (SVG — scalable)
│   │   ├── logo-dark.svg                 ← Logo for dark mode
│   │   ├── logo-light.svg                ← Logo for light mode
│   │   ├── favicon.svg                   ← SVG favicon
│   │   ├── favicon-16.png
│   │   ├── favicon-32.png
│   │   ├── apple-touch-icon.png          ← 180×180px
│   │   ├── projects/
│   │   │   ├── projectport-thumb.webp
│   │   │   ├── uibrium-thumb.webp
│   │   │   └── aibot-thumb.webp
│   │   └── blog/
│   │       └── [post-slug]-thumb.webp
│   │
│   ├── icons/
│   │   ├── sprite.svg                    ← All icons as SVG sprite
│   │   └── [individual-icons].svg
│   │
│   ├── fonts/
│   │   ├── clash-display/                ← Headings (premium, authority)
│   │   │   ├── ClashDisplay-Bold.woff2
│   │   │   ├── ClashDisplay-Semibold.woff2
│   │   │   └── ClashDisplay-Medium.woff2
│   │   ├── satoshi/                      ← Body (clean, modern)
│   │   │   ├── Satoshi-Regular.woff2
│   │   │   ├── Satoshi-Medium.woff2
│   │   │   └── Satoshi-Bold.woff2
│   │   └── jetbrains-mono/              ← Code/mono accents
│   │       └── JetBrainsMono-Regular.woff2
│   │
│   └── schema/
│       ├── person.json                   ← Person schema (dynamic)
│       ├── organization.json
│       ├── services.json
│       └── faq.json
│
├── data/
│   ├── config.json                       ← Dynamic site config (domain, name, etc.)
│   ├── services.json                     ← All services data
│   ├── projects.json                     ← All projects data
│   ├── testimonials.json                 ← Client testimonials
│   ├── stats.json                        ← Counter numbers
│   ├── skills.json                       ← Tech stack data
│   ├── blog-posts.json                   ← Blog metadata
│   └── faq.json                          ← FAQ content
│
├── sw.js                                 ← Service Worker (PWA + offline cache)
├── _headers                              ← Cloudflare/Netlify security headers
├── _redirects                            ← Redirect rules
├── .env.example                          ← Environment variable template
└── README.md                             ← Developer documentation
```

---

### 2.2 config.json — Dynamic Variables System

```json
{
  "site": {
    "name": "Aaryan Gupta",
    "domain": "aaaryangupta.com",
    "url": "https://aaaryangupta.com",
    "tagline": "Technical Project Manager | HealthTech & SaaS",
    "email": "aaryangupta.pm@gmail.com",
    "phone": "+91 62056 50368",
    "whatsapp": "+916205650368",
    "location": {
      "primary": "Jaipur, Rajasthan, India",
      "secondary": "Ahmedabad, Gujarat, India",
      "based": "Noida, Uttar Pradesh, India"
    },
    "social": {
      "linkedin": "https://linkedin.com/in/aryanony/",
      "twitter": "https://x.com/aryanony/",
      "instagram": "https://instagram.com/aryanony/",
      "github": "https://github.com/aryanony"
    },
    "projects": {
      "projectport": "https://projectsport.vercel.app/",
      "uibrium": "https://uibrium.vercel.app/",
      "portfolio": "https://aryanony.github.io/portfolio"
    },
    "analytics": {
      "ga4": "G-XXXXXXXXXX",
      "gsc": "verified",
      "clarity": "XXXXXXXXXX"
    },
    "calendly": "https://calendly.com/aaryanpm/30min",
    "stats": {
      "markets": "70+",
      "projects": "20+",
      "experience_years": "3+",
      "products_built": "5+"
    }
  }
}
```

All references to domain name, stats, contact info in HTML/JS must pull from `config.json`. This allows one-file update to cascade across the entire site.

---

## ━━━ CHAPTER 3: DESIGN SYSTEM ━━━

### 3.1 Color System (Complete Token Map)

#### Dark Mode (Default — Neon + Deep Dark)
```css
:root[data-theme="dark"] {
  /* Backgrounds */
  --bg-base:        #050A0E;    /* deepest background */
  --bg-surface:     #0A1219;    /* card/section bg */
  --bg-elevated:    #0F1A24;    /* elevated cards */
  --bg-overlay:     rgba(5, 10, 14, 0.92);

  /* Primary Accent — Dark Sea Green / Teal */
  --accent-primary:     #0D9488;   /* dark teal — main CTAs */
  --accent-primary-glow: rgba(13, 148, 136, 0.25);
  --accent-hover:       #14B8A6;   /* hover state */
  --accent-muted:       rgba(13, 148, 136, 0.15);

  /* Secondary Accent — Cyan */
  --accent-secondary:   #06B6D4;   /* cyan — highlights */
  --accent-secondary-glow: rgba(6, 182, 212, 0.2);

  /* Tertiary — Dark Blue */
  --accent-tertiary:    #1D4ED8;   /* dark blue — tags, links */
  --accent-aqua:        #22D3EE;   /* light aqua — code, mono */

  /* Text */
  --text-primary:   #F0FAFA;    /* main text */
  --text-secondary: #94A3B8;    /* secondary text */
  --text-muted:     #475569;    /* disabled, placeholders */
  --text-accent:    #2DD4BF;    /* accent text */

  /* Borders */
  --border-subtle:  rgba(13, 148, 136, 0.12);
  --border-mid:     rgba(13, 148, 136, 0.25);
  --border-strong:  rgba(13, 148, 136, 0.45);

  /* Neon Glows (Dark Mode Signature) */
  --glow-teal:   0 0 20px rgba(13, 148, 136, 0.4), 0 0 60px rgba(13, 148, 136, 0.15);
  --glow-cyan:   0 0 20px rgba(6, 182, 212, 0.35), 0 0 60px rgba(6, 182, 212, 0.12);
  --glow-blue:   0 0 20px rgba(29, 78, 216, 0.35), 0 0 60px rgba(29, 78, 216, 0.12);

  /* 3D / Depth */
  --shadow-card:  0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(13, 148, 136, 0.08) inset;
  --shadow-hover: 0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(13, 148, 136, 0.3);
  --shadow-float: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(13, 148, 136, 0.1);
}
```

#### Light Mode (Glassmorphism + Clean Teal)
```css
:root[data-theme="light"] {
  /* Backgrounds */
  --bg-base:        #F0FAFA;    /* off-white with teal hint */
  --bg-surface:     #FFFFFF;
  --bg-elevated:    #FFFFFF;
  --bg-overlay:     rgba(240, 250, 250, 0.85);

  /* Glassmorphism */
  --glass-bg:       rgba(255, 255, 255, 0.72);
  --glass-blur:     blur(20px);
  --glass-border:   rgba(13, 148, 136, 0.18);
  --glass-shadow:   0 8px 32px rgba(13, 148, 136, 0.08);

  /* Primary — same teal family, deeper */
  --accent-primary:     #0F766E;   /* dark teal */
  --accent-hover:       #0D9488;
  --accent-muted:       rgba(15, 118, 110, 0.1);

  /* Secondary */
  --accent-secondary:   #0891B2;   /* darker cyan */
  --accent-tertiary:    #1E40AF;   /* dark blue */

  /* Text */
  --text-primary:   #0A1219;
  --text-secondary: #334155;
  --text-muted:     #64748B;
  --text-accent:    #0F766E;

  /* Borders */
  --border-subtle:  rgba(15, 118, 110, 0.1);
  --border-mid:     rgba(15, 118, 110, 0.2);
  --border-strong:  rgba(15, 118, 110, 0.4);

  /* Shadows (no glow — clean for light) */
  --shadow-card:  0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  --shadow-hover: 0 4px 24px rgba(15, 118, 110, 0.12), 0 1px 0 rgba(15, 118, 110, 0.1) inset;
  --shadow-float: 0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(15, 118, 110, 0.1);
}
```

### 3.2 Typography System

```css
/* Font Loading — preload in <head> */
@font-face {
  font-family: 'ClashDisplay';
  src: url('/assets/fonts/clash-display/ClashDisplay-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'ClashDisplay';
  src: url('/assets/fonts/clash-display/ClashDisplay-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/assets/fonts/satoshi/Satoshi-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

/* Type Scale */
--font-display:  'ClashDisplay', system-ui, sans-serif;
--font-body:     'Satoshi', system-ui, sans-serif;
--font-mono:     'JetBrains Mono', monospace;

--text-xs:    0.75rem;   /* 12px */
--text-sm:    0.875rem;  /* 14px */
--text-base:  1rem;      /* 16px */
--text-lg:    1.125rem;  /* 18px */
--text-xl:    1.25rem;   /* 20px */
--text-2xl:   1.5rem;    /* 24px */
--text-3xl:   1.875rem;  /* 30px */
--text-4xl:   2.25rem;   /* 36px */
--text-5xl:   3rem;      /* 48px */
--text-6xl:   3.75rem;   /* 60px */
--text-7xl:   4.5rem;    /* 72px — hero only */

/* Hero H1 fluid type */
--hero-size: clamp(2.5rem, 6vw, 4.5rem);
```

### 3.3 Spacing, Layout & Grid

```css
/* 8px base grid */
--space-1:   0.25rem;   /* 4px */
--space-2:   0.5rem;    /* 8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-6:   1.5rem;    /* 24px */
--space-8:   2rem;      /* 32px */
--space-12:  3rem;      /* 48px */
--space-16:  4rem;      /* 64px */
--space-24:  6rem;      /* 96px */
--space-32:  8rem;      /* 128px */

/* Container */
--container-max:   1280px;
--container-lg:    1024px;
--container-md:    768px;
--container-pad:   clamp(1rem, 4vw, 2rem);

/* Border Radius — MINIMAL (per brief: less rounded, more edgy/sharp) */
--radius-sm:  4px;    /* small elements */
--radius-md:  8px;    /* cards, inputs */
--radius-lg:  12px;   /* large cards */
--radius-xl:  16px;   /* sections max */
/* NO circles or pill shapes — everything sharp/edgy/angular */

/* 3D Perspective */
--perspective:     1000px;
--tilt-max:        8deg;    /* card tilt degrees */
--tilt-transition: 0.15s ease;
```

### 3.4 Icon System

**Source:** Phosphor Icons (phosphoricons.com) — the premium choice
- Thin weight for backgrounds/decorative
- Regular weight for UI
- Bold weight for CTAs/emphasis

**Implementation:** SVG sprite — single HTTP request for all icons.

```html
<!-- Sprite import (in <body>, hidden) -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-briefcase" viewBox="0 0 256 256">...</symbol>
  <symbol id="icon-chart-line" viewBox="0 0 256 256">...</symbol>
  <!-- etc -->
</svg>

<!-- Usage -->
<svg class="icon icon--md" aria-hidden="true">
  <use href="#icon-briefcase"></use>
</svg>
```

**Icon sizes:**
```css
.icon--xs  { width: 14px; height: 14px; }
.icon--sm  { width: 18px; height: 18px; }
.icon--md  { width: 24px; height: 24px; }
.icon--lg  { width: 32px; height: 32px; }
.icon--xl  { width: 48px; height: 48px; }
.icon--2xl { width: 64px; height: 64px; }
```

**Required icons (minimum set):**
briefcase, chart-line-up, rocket-launch, brain, code, git-branch,
lightning, users, clock, map-pin, envelope, phone, arrow-right,
check-circle, star, shield-check, certificate, database, cloud,
device-mobile, desktop, waveform, heartbeat, stethoscope, hospital,
buildings, globe, linkedin-logo, github-logo, twitter-logo, instagram-logo,
sun, moon, list, x-circle, caret-right, caret-down, link-simple,
download, play-circle, eye, lock, currency-inr, trend-up, medal

---

## ━━━ CHAPTER 4: INTERACTIONS, ANIMATIONS & FEATURES ━━━

### 4.1 Custom Cursor

**Design:** Two-layer magnetic cursor system

```javascript
// cursor.js — Complete implementation spec
// Layer 1: Small solid dot (12px) — follows mouse exactly (no lag)
//           Color: var(--accent-primary) | Shape: sharp square (not circle)
// Layer 2: Larger outline frame (40px) — follows with 0.1s elastic lag
//           Color: var(--accent-primary) transparent border | Shape: sharp square
// Behavior:
//   - Hover link/button: Layer 2 expands to 60px, fills with accent-muted, text inside changes
//   - Hover image: cursor becomes "VIEW" label with expanded frame
//   - Hover CTA: cursor becomes "→" arrow with primary fill
//   - Clicking: Layer 1 scales to 1.5x briefly (click feedback)
//   - On mobile: cursor disabled (touch devices)
//   - Smooth: requestAnimationFrame for performance
```

### 4.2 Page Loader

```css
/* loader.css */
/* Full screen overlay: var(--bg-base) background */
/* Center: Logo SVG animates in */
/* Below logo: Loading bar (teal, fills left to right, 0.8s) */
/* Exit: Overlay slides up (translateY -100%) when DOM ready */
/* Total time: max 1.2s — never longer */
/* Use CSS animation — no JS library */
```

### 4.3 Scroll Progress Bar

```css
/* Top of viewport, fixed position */
/* Height: 2px */
/* Color: linear-gradient(to right, var(--accent-primary), var(--accent-secondary)) */
/* Width driven by JS scrollTop / scrollHeight */
/* Glow effect: box-shadow with accent-primary-glow */
```

### 4.4 Intersection Observer Animations

All sections animate on scroll entry. Never animate on page load (bad UX + performance).

```javascript
// animations.js — Spec for each element type:

// TEXT: fade-up + slight blur clear
//   from: opacity 0, translateY 30px, filter blur(4px)
//   to:   opacity 1, translateY 0, filter blur(0)
//   duration: 0.6s ease-out
//   stagger: 80ms per child element

// CARDS: fade-up + 3D flip (Y axis) subtle
//   from: opacity 0, translateY 20px, rotateX(4deg)
//   to:   opacity 1, translateY 0, rotateX(0)
//   duration: 0.5s ease-out
//   stagger: 100ms

// STATS/COUNTERS: count up animation (0 → final number)
//   trigger: when element 50% in viewport
//   duration: 1.5s with ease-out curve
//   format: add "+" suffix where applicable

// LINES/RULES: width expansion (0% → 100%)
//   from: width 0%
//   to: width 100%
//   duration: 0.8s ease-out

// IMAGES: reveal with clip-path
//   from: clip-path inset(100% 0 0 0)
//   to: clip-path inset(0% 0 0 0)
//   duration: 0.7s cubic-bezier(0.4, 0, 0.2, 1)

// threshold: 0.15 (trigger when 15% visible)
// rootMargin: "0px 0px -40px 0px" (slight offset from bottom)
```

### 4.5 3D Card Tilt Effect

```javascript
// tilt.js — Applied to: project cards, service cards, testimonials
// On mousemove over card:
//   - Calculate mouse position relative to card center
//   - Apply rotateX and rotateY (max ±8deg)
//   - Apply subtle scale(1.02)
//   - Move internal "shine" layer (pseudo-element) tracking mouse
//   - Smooth: CSS transition 0.1s on mouse move, 0.5s ease-out on mouse leave
// CSS: transform-style: preserve-3d; perspective: 1000px;
// Child elements: translateZ(20px) for depth layering
// Performance: use will-change: transform on card
```

### 4.6 Magnetic Button Effect

```javascript
// magnetic.js — Applied to: primary CTAs, social icons, nav items
// On mousemove near button (within 60px radius):
//   - Button moves toward cursor (max 10px in any direction)
//   - Smooth lerp: currentPos + (target - current) * 0.2
//   - On mouse leave: spring back to origin
// Use requestAnimationFrame for smooth animation
```

### 4.7 Typewriter Hero Effect

```javascript
// typewriter.js
// After H1 loads, cycle through professional titles:
// "Technical Project Manager"
// "HealthTech Digital Strategist"
// "AI Automation Consultant"
// "Micro-SaaS Product Builder"
// Speed: 60ms per char type, 40ms per char delete
// Pause at end: 2.5s
// Cursor: blinking | (teal color)
// Loop: infinite
```

### 4.8 Particle Background (Hero Only)

```javascript
// particles.js — Lightweight custom implementation (NO libraries)
// Canvas element behind hero content
// Particles: 40-60 small dots (2px, teal color, 30% opacity)
// Behavior: slow drift, connect with lines when within 100px
// Line color: teal at 10% opacity
// Mouse interaction: particles slightly attracted to cursor position
// Performance: requestAnimationFrame, reduce to 20 particles on mobile
// Max CPU: never exceed 5% — kill if needed
```

### 4.9 Smooth Scroll

```javascript
// smooth-scroll.js — Native smooth scrolling + JS for offset
// Account for fixed navbar height (var: --nav-height)
// Scroll duration: 600ms cubic-bezier(0.4, 0, 0.2, 1)
// Active section highlight in nav: IntersectionObserver tracks sections
```

### 4.10 Theme Toggle

```javascript
// theme.js
// Toggle button: fixed position, bottom-right (or top-right nav)
// Icons: sun (light) / moon (dark) — Phosphor icons
// On toggle:
//   - Add/remove data-theme="dark" on <html>
//   - Store in localStorage: 'theme' key
//   - System preference fallback: prefers-color-scheme media query
//   - Transition: all CSS vars transition smoothly (0.3s)
// Default: dark mode
```

### 4.11 Browser & Storage Features

```javascript
// Features to implement (grouped by category):

// STORAGE:
// localStorage: theme preference, user's last visited section, cookie consent
// sessionStorage: form draft (if user refreshes mid-form)
// Cache API (via Service Worker): offline pages, static assets

// BROWSER APIs:
// IntersectionObserver: animations, lazy-load, active nav
// ResizeObserver: responsive canvas resizing
// requestAnimationFrame: all animations
// Web Speech API: (optional) voice command "Hey Aaryan" → opens contact
// Clipboard API: copy email address button
// Share API: social share buttons (mobile)
// Navigator.onLine: offline banner detection
// Performance API: measure LCP/FCP (dev mode only)
// matchMedia: system theme detection

// PERFORMANCE:
// Service Worker (sw.js): cache-first for assets, network-first for pages
// Prefetch: <link rel="prefetch"> for likely next pages (on hover)
// Preload: critical fonts, hero image
// defer: all non-critical JS
// async: analytics

// COOKIES:
// Cookie consent banner (GDPR-aware) — simple, non-intrusive
// Only analytics cookie (GA4) — no marketing/tracking cookies
// Cookie stored: consent=true|false
```

### 4.12 Low-Bandwidth Mode

```javascript
// Detect: navigator.connection.effectiveType === '2g' || '3g'
// If detected:
//   - Skip particle background
//   - Skip tilt effects
//   - Use simpler fade animations only
//   - Serve smaller images (100w srcset)
//   - Skip non-critical fonts (system fallbacks)
// Result: < 200KB total page weight on slow connection
```

---

## ━━━ CHAPTER 5: PAGE-BY-PAGE SPECIFICATION ━━━

### 5.1 HOMEPAGE (index.html)

**URL:** /
**Target Keywords:** technical project manager India, technical project manager Jaipur, healthtech project manager, freelance technical PM India
**Word Count:** 900–1,200 (visible content)
**Schema:** Person, FAQ, BreadcrumbList, Organization

#### HEAD (All pages — template):
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- TITLE (60 chars max) -->
  <title>Aaryan Gupta — Technical Project Manager | HealthTech | Jaipur</title>

  <!-- META DESCRIPTION (160 chars max) -->
  <meta name="description" content="Aaryan Gupta — Freelance Technical Project Manager for HealthTech & SaaS. 70+ markets delivered. Micro-SaaS builder. Book a free 30-min strategy call.">

  <!-- CANONICAL -->
  <link rel="canonical" href="https://aaaryangupta.com/">

  <!-- OPEN GRAPH -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aaaryangupta.com/">
  <meta property="og:title" content="Aaryan Gupta — Technical Project Manager | HealthTech & SaaS">
  <meta property="og:description" content="Freelance Technical PM · HealthTech Specialist · AI Automation · 70+ markets. Book a free call.">
  <meta property="og:image" content="https://aaaryangupta.com/assets/images/og-default.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_IN">
  <meta property="og:site_name" content="Aaryan Gupta">

  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@aryanony">
  <meta name="twitter:creator" content="@aryanony">
  <meta name="twitter:title" content="Aaryan Gupta — Technical Project Manager | HealthTech">
  <meta name="twitter:description" content="Freelance Technical PM · HealthTech Specialist · AI Automation · 70+ markets. Book a free call.">
  <meta name="twitter:image" content="https://aaaryangupta.com/assets/images/og-default.webp">

  <!-- ADDITIONAL META -->
  <meta name="author" content="Aaryan Gupta">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#050A0E" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#F0FAFA" media="(prefers-color-scheme: light)">
  <meta name="geo.region" content="IN-RJ">
  <meta name="geo.placename" content="Jaipur">

  <!-- hreflang -->
  <link rel="alternate" hreflang="en" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="en-IN" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="x-default" href="https://aaaryangupta.com/">

  <!-- PRELOAD CRITICAL ASSETS -->
  <link rel="preload" href="/assets/fonts/clash-display/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/satoshi/Satoshi-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/images/headshot.webp" as="image">
  <link rel="preload" href="/assets/css/root.css" as="style">

  <!-- DNS PREFETCH -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  <link rel="dns-prefetch" href="//www.googletagmanager.com">
  <link rel="dns-prefetch" href="//calendly.com">

  <!-- CRITICAL CSS (inline) -->
  <style>/* above-fold critical CSS inline here — prevents FOUC */</style>

  <!-- CSS FILES -->
  <link rel="stylesheet" href="/assets/css/root.css">
  <link rel="stylesheet" href="/assets/css/reset.css">
  <link rel="stylesheet" href="/assets/css/typography.css">
  <link rel="stylesheet" href="/assets/css/layout.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="/assets/css/animations.css">
  <link rel="stylesheet" href="/assets/css/dark-mode.css">
  <link rel="stylesheet" href="/assets/css/light-mode.css">
  <link rel="stylesheet" href="/assets/css/cursor.css">
  <link rel="stylesheet" href="/assets/css/loader.css">
  <link rel="stylesheet" href="/assets/css/responsive.css">

  <!-- FAVICONS -->
  <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/favicon-32.png" sizes="32x32">
  <link rel="icon" href="/assets/images/favicon-16.png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">

  <!-- SCHEMA (JSON-LD) — Person + FAQ + Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aaaryangupta.com/#person",
        "name": "Aaryan Gupta",
        "alternateName": "",
        "url": "https://aaaryangupta.com",
        "image": "https://aaaryangupta.com/assets/images/headshot.webp",
        "jobTitle": "Technical Project Manager",
        "description": "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, AI automation consulting, and micro-SaaS software delivery.",
        "email": "aaryangupta.pm@gmail.com",
        "telephone": "+916205650368",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "addressCountry": "IN"
        },
        "alumniOf": [
          {"@type": "CollegeOrUniversity", "name": "Lloyd Institute of Engineering & Technology", "sameAs": "https://liet.ac.in"},
          {"@type": "CollegeOrUniversity", "name": "Munger University"}
        ],
        "hasCredential": [
          {"@type": "EducationalOccupationalCredential", "name": "Master of Computer Applications (MCA)", "credentialCategory": "degree"},
          {"@type": "EducationalOccupationalCredential", "name": "IBM MERN Stack Virtual Internship", "credentialCategory": "certificate"}
        ],
        "knowsAbout": [
          "Technical Project Management", "Health Technology", "SaaS", "Agile", "Scrum",
          "React.js", "Node.js", "AI Automation", "Prompt Engineering", "Digital Marketing",
          "Project Delivery", "Sprint Planning", "Stakeholder Management"
        ],
        "sameAs": [
          "https://linkedin.com/in/aryanony/",
          "https://x.com/aryanony/",
          "https://instagram.com/aryanony/",
          "https://github.com/aryanony",
          "https://aryanony.github.io/portfolio"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Oblinex Pvt. Ltd.",
          "url": "https://oblinex.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aaaryangupta.com/#website",
        "url": "https://aaaryangupta.com",
        "name": "Aaryan Gupta — Technical Project Manager",
        "description": "Freelance Technical PM for HealthTech & SaaS. AI automation, micro-SaaS products, project coordination.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://aaaryangupta.com/blog/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
  </script>
</head>
```

#### HOMEPAGE SECTIONS (In Order):

```
SECTION 1: NAV
  - Fixed top, glass blur background (both modes)
  - Left: Logo (SVG) + name text
  - Right: Services · Case Studies · Blog · Contact
  - Far right: [Book a Call] CTA button (accent color)
  - Mobile: Hamburger → full-screen overlay menu
  - Scroll behavior: transparent at top → glass blur when scrolled 50px
  - Active section highlight via IntersectionObserver

SECTION 2: HERO
  - Full viewport height (100svh)
  - Background: Particle canvas (dark) / clean gradient (light)
  - Left column (60%):
    - Eyebrow tag: [#] Technical Project Manager
    - H1 (ClashDisplay Bold, fluid): "Delivered Across 70+ Markets."
    - Subheading (Satoshi, lg): Typewriter cycling titles
    - Body (2 lines): Brand promise text
    - CTA row: [Book Free 30-Min Call] (primary) · [View My Work →] (secondary ghost)
    - Trust bar: "MCA · AKTU 2025 · 70+ Markets · 20+ Projects · 3+ Years"
  - Right column (40%):
    - Professional headshot (WebP, sharp frame — not circle)
    - Floating stat cards (3D animated):
      Card 1: "70+" / "International Markets"
      Card 2: "20+" / "Projects Delivered"
      Card 3: "3+" / "Years Experience"
    - Decorative: Grid lines + corner accents (teal)

SECTION 3: SOCIAL PROOF BAR
  - Full width, subtle background
  - "Trusted by professionals across India & globally"
  - Client/org type logos or name badges (text if no logos)
  - Smooth marquee scroll

SECTION 4: ABOUT SNAPSHOT
  - 2-column: left text, right visual (stats + icons)
  - H2: "The PM Who Speaks Developer"
  - Short bio: 3 tight paragraphs (TPM background, HealthTech mission, global delivery)
  - Feature list with icons: [icon] Technical Fluency · [icon] Agile Delivery · [icon] AI-Native
  - [Read Full Story →] link to /about/

SECTION 5: SERVICES GRID
  - H2: "What I Deliver"
  - 3-column card grid (3D tilt on hover):
    Card 1: Technical Project Management [briefcase icon]
    Card 2: HealthTech Consulting [heartbeat icon]
    Card 3: AI Automation [brain icon]
    Card 4: Micro-SaaS Software [code icon]
    Card 5: Website Maintenance [shield icon]
    Card 6: Project Coordination [users icon]
  - Each card: Icon (large) · Title · 2-line description · [Learn More →]
  - [View All Services →] button below grid

SECTION 6: PROJECTS / CASE STUDIES
  - H2: "Proof of Delivery"
  - Featured project cards (large, 2-column):
    ProjectPort: screenshot + title + tech stack + 2 impact bullets + [View Live] [GitHub]
    UiBrium: screenshot + title + tech stack + 2 impact bullets + [View Docs] [NPM]
  - Smaller row (text only): Oblinex 70+ markets delivery brief
  - [All Case Studies →]

SECTION 7: STATS COUNTER ROW
  - 4 animated counters on scroll trigger:
    [70+] International Markets
    [20+] Projects Delivered
    [3+] Years Experience
    [5+] Products Built
  - Dark section, teal accents

SECTION 8: TESTIMONIALS
  - H2: "What Clients Say" (replace with real testimonials when available)
  - Placeholder cards designed, ready for real content
  - Each card: Quote · Name · Title · Company · City · Star rating (5)
  - Schema: Review markup on each

SECTION 9: TECH STACK VISUAL
  - H2: "Technical Depth, Management Mindset"
  - Animated icon grid: all tech logos
  - Grouped: PM Tools · Frontend · Backend · AI · Mobile · DevOps · Marketing
  - Filter tabs to show/hide groups

SECTION 10: HEALTHTECH FOCUS SECTION
  - H2: "Built for the Future of Indian Healthcare"
  - Special section targeting doctor/HealthTech audience
  - Visual: clinic/medical illustration (SVG, custom)
  - Text: "600,000+ doctors in India. Fewer than 10% use digital practice management."
  - Sub-products: QuickRx · ClinicFlow · LabTrack · TokenQ · RxPad
  - [Talk About Your Clinic →] CTA

SECTION 11: FAQ
  - H2: "Common Questions"
  - 6-8 Q&A pairs (see FAQ content below)
  - Accordion expand/collapse (CSS-only where possible)
  - FAQPage schema markup

SECTION 12: CTA SECTION
  - H2: "Ready to Ship Something That Works?"
  - Sub: "Book a free 30-minute strategy call. No sales pitch. Just clarity."
  - [Book Free 30-Min Call] (large CTA)
  - [Or email directly →] aaryangupta.pm@gmail.com
  - [WhatsApp] button linking to wa.me/+916205650368

SECTION 13: FOOTER
  - 4-column: About · Services · Location Pages · Connect
  - Bottom bar: Copyright · Privacy Policy · LinkedIn · GitHub · Twitter
  - "Built with precision. Deployed with purpose." tagline
```

---

### 5.2 ALL OTHER PAGES — SPEC SUMMARY

**About Page (/about/):**
- 1,200+ words entity page (third-person first paragraph for AEO)
- Detailed professional timeline (visual)
- Full tech stack with proficiency levels
- Education section
- Certifications with credentials
- Link to all social profiles and GitHub
- "Aaryan Gupta is a Technical Project Manager..." opening (exact GEO entity format)
- FAQ section about background and services
- LocalBusiness schema

**Services Pages (5 pages, 1,500+ words each):**
- One H1 per page with primary keyword
- Service explanation (outcome-first)
- Process: how engagement works (numbered steps)
- Who it's for (target client profile)
- Pricing range (honest, value-first)
- 1 matching testimonial
- 2-3 related blog post links
- FAQ (5-8 Qs per service)
- CTA: Book Call

**Case Studies (3+ pages):**
- ProjectPort: Problem → Solution → Tech stack → Key features → Live links
- UiBrium: Why built → Architecture decisions → Open source impact → NPM stats
- Oblinex: 70+ markets context → Role → Delivery approach → Outcomes

**Blog (6 initial posts):**
- 1,500+ words each
- H2/H3 structure matching search queries
- FAQ section at end
- Author bio with schema
- Internal links to services
- CTA in conclusion
- Social share buttons

**Location Pages (Jaipur + Ahmedabad):**
- LocalBusiness schema
- Jaipur: "Technical Project Manager Jaipur" — 800+ words
- Ahmedabad: "Technical Project Manager Ahmedabad" — 800+ words
- Local context: HealthTech ecosystem in each city
- Testimonials from local clients (when available)
- Google Maps embed

**Contact Page (/contact/):**
- H1: "Book a Free 30-Minute Strategy Call"
- Calendly embed (full inline)
- Contact form (name, email, message, project type)
- Direct: email, phone, WhatsApp
- FAQ: "What happens in the call?"
- Response time: "within 4 hours" commitment

---

## ━━━ CHAPTER 6: SEO / AEO / GEO MASTER IMPLEMENTATION ━━━

### 6.1 Complete Keyword Map

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Homepage | technical project manager India | healthtech PM, freelance TPM India |
| About | who is Aaryan Gupta | Aaryan Gupta project manager |
| Services: TPM | technical project management services India | hire technical PM |
| Services: HealthTech | healthtech project manager India | medical software PM |
| Services: Maintenance | website maintenance services India | monthly maintenance retainer |
| Services: AI Automation | AI automation consultant India | WhatsApp automation SMB |
| Services: Micro-SaaS | micro SaaS for clinics India | clinic management software |
| Blog 1 | why healthtech apps fail India | clinic app mistakes |
| Blog 2 | technical PM vs traditional PM | developer turned PM |
| Blog 3 | AI tools for project managers 2025 | best PM AI tools India |
| Jaipur | technical project manager Jaipur | PM services Jaipur |
| Ahmedabad | technical project manager Ahmedabad | PM services Ahmedabad |

### 6.2 FAQ Content (AEO Gold — Answer Engine Ready)

```json
[
  {
    "q": "What does a Technical Project Manager do?",
    "a": "A Technical Project Manager (TPM) bridges engineering teams and business stakeholders — owning the full delivery lifecycle from requirement gathering through deployment. Unlike traditional PMs, a TPM has hands-on technical literacy: reading code, reviewing architecture decisions, identifying technical debt, and communicating development complexity in business language."
  },
  {
    "q": "What is Aaryan Gupta's area of specialization?",
    "a": "Aaryan Gupta specializes in Technical Project Management for HealthTech and SaaS products, AI automation implementation, and micro-SaaS software delivery for Indian SMBs. He has managed projects across 70+ international markets and builds ready-made software systems for clinics, diagnostic labs, and business owners."
  },
  {
    "q": "How much does a freelance Technical Project Manager charge in India?",
    "a": "Freelance Technical Project Managers in India typically charge ₹25,000–₹80,000 per project for coordination services, or ₹40,000–₹80,000 per month for ongoing retainers. Rates vary by project complexity, team size, and domain expertise. Aaryan Gupta offers a free 30-minute strategy call to scope requirements before pricing."
  },
  {
    "q": "Can a Technical PM help with healthcare app development?",
    "a": "Yes. A Technical PM specializing in HealthTech coordinates the development of clinic management systems, patient apps, diagnostic lab software, and hospital information systems — ensuring clinical workflow requirements are captured accurately, regulatory considerations are scoped, and the product ships on schedule."
  },
  {
    "q": "Does Aaryan Gupta take on freelance projects?",
    "a": "Yes. Aaryan Gupta is available for freelance Technical Project Management engagements, AI automation projects, and micro-SaaS software delivery. He serves clients in Jaipur, Ahmedabad, and remotely across India and internationally. Contact via aaryangupta.pm@gmail.com or book a free call on this website."
  },
  {
    "q": "What micro-SaaS products does Aaryan Gupta build?",
    "a": "Aaryan builds ready-made software systems for Indian SMBs including: diagnostic lab management (LabTrack Pro), clinic appointment systems (TokenQ, ClinicFlow), prescription generation (RxPad Pro), and B2B quotation tools (QuoteFlow). These are delivered as one-time purchase software deployed on the client's own server."
  },
  {
    "q": "How can doctors in Jaipur benefit from working with Aaryan Gupta?",
    "a": "Doctors and clinic owners in Jaipur can work with Aaryan Gupta to digitize their practice management — including patient queue systems, digital prescription pads, appointment automation, and WhatsApp follow-up tools. All software is delivered as a one-time setup on the clinic's own infrastructure with optional monthly maintenance."
  },
  {
    "q": "What AI automation services does Aaryan Gupta offer?",
    "a": "Aaryan offers AI automation services including WhatsApp business automation, AI lead qualification bots, AI customer support agents, and workflow automation using tools like n8n, Make, Botpress, and OpenAI API. All automations are delivered as one-time setups on the client's own accounts and infrastructure."
  }
]
```

### 6.3 GEO Entity Building Checklist

Before launch — create presence on all these platforms:
```
□ Wikidata: Create entity "Aaryan Gupta (Technical Project Manager)"
□ Crunchbase: Profile with website + role + skills
□ Google Business Profile: "Aaryan Gupta — Technical Project Manager" (Jaipur)
□ Clutch.co: Service provider profile (minimum 3 reviews within 60 days)
□ GoodFirms: Profile + services listed
□ Upwork: "Technical Project Manager | HealthTech | AI Automation"
□ Fiverr: Gig for micro-SaaS delivery + maintenance
□ IndiaMART: "Clinic software provider" listing
□ LinkedIn: Fully optimized (already documented separately)
□ Bing Webmaster Tools: Sitemap submitted (critical for ChatGPT visibility)
□ IndexNow: API key setup on Cloudflare for instant Bing indexing
□ Google Search Console: Domain property + sitemap
□ Schema.org: All schemas validated at schema.org/validator before launch
```

### 6.4 Technical SEO Configuration

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /draft/
Disallow: /thank-you/
Disallow: /api/
Disallow: /data/

# Allow AI crawlers explicitly
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://aaaryangupta.com/sitemap.xml
```

**_headers (Cloudflare/Netlify):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  X-XSS-Protection: 1; mode=block
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600, must-revalidate

/sitemap.xml
  Cache-Control: public, max-age=86400
```

---

## ━━━ CHAPTER 7: PERFORMANCE TARGETS & IMPLEMENTATION ━━━

### 7.1 Performance Budget

| Metric | Target | Method |
|--------|--------|--------|
| LCP | < 1.8s | Preload hero image, inline critical CSS |
| INP | < 100ms | No heavy JS on main thread |
| CLS | < 0.05 | Explicit width/height on all images |
| FCP | < 1.2s | Inline above-fold CSS |
| TTFB | < 300ms | Static host + Cloudflare CDN |
| Total page weight | < 300KB (gzipped) | Aggressive optimization |
| Hero image | < 80KB (WebP) | Compress + srcset |
| JS total | < 60KB (minified) | No libraries |
| CSS total | < 40KB (minified) | No frameworks |
| Fonts | < 80KB total | WOFF2 only, 2 weights each |
| Lighthouse score | 95+/100/100/100 | All green |

### 7.2 Image Optimization Rules

```html
<!-- Every image must follow this pattern -->
<img
  src="/assets/images/headshot.webp"
  srcset="/assets/images/headshot.webp 1x, /assets/images/headshot-2x.webp 2x"
  width="400"
  height="500"
  alt="Aaryan Gupta — Technical Project Manager based in Jaipur, India"
  loading="eager"   <!-- only for above-fold images -->
  decoding="async"
  fetchpriority="high"
>

<!-- Below fold images -->
<img
  src="/assets/images/project-thumb.webp"
  width="600"
  height="400"
  alt="ProjectPort — Client Project Automation Platform by Aaryan Gupta"
  loading="lazy"
  decoding="async"
>
```

### 7.3 Service Worker Strategy (sw.js)

```javascript
// Cache-first for: fonts, images, CSS, JS (static assets)
// Network-first for: HTML pages (always fresh content)
// Stale-while-revalidate for: blog posts (serve cache, update in background)
// Offline fallback: /offline.html (custom branded page)
// Cache version: increment on each deploy
```

---

## ━━━ CHAPTER 8: CONTENT REFERENCE ━━━

### 8.1 Professional Experience Summary (For All Copy)

**Current — Associate Project Manager | Oblinex Pvt. Ltd. | May 2026–Present**
- Managing end-to-end technical project delivery across 70+ international markets
- Full lifecycle: onboarding → sprint governance → infrastructure setup → QA → Play Store/App Store releases
- VPS provisioning, Ubuntu server setup, domain configuration, SSL installation (Hostinger)
- Cross-functional developer coordination via structured ticketing and task assignment
- Post-delivery account expansion, upsell revenue, client retention
- Markets: India, UAE, UK, USA, Europe, Southeast Asia, 60+ more

**Frontend Web3 Developer Intern | MyDigiShell | April 2025–February 2026**
- 11-month engagement coordinating multi-project Web3 frontend delivery
- React.js, Tailwind CSS, Web3.js, Blockchain Wallet Integration
- Mobile-first QA, cross-browser compatibility, performance optimization

**Digital Marketer & E-Commerce Strategist | Elipact Enterprises | Nov 2021–Mar 2022**
- SEO + content marketing for Shopify and WordPress platforms
- Landing page builds, branding, KPI tracking, competitive analysis

**Web Developer & WordPress Specialist | Ipistis Technologies | Aug–Nov 2021**
- Brief-to-launch WordPress website delivery

### 8.2 Products & Freelance Services (What to Mention)

**Micro-SaaS Products (Build Once → Sell Many):**
- LabTrack Pro: Diagnostic lab management (₹15k–35k)
- RecallMD: Patient follow-up automation (₹8k–18k)
- TokenQ: Clinic OPD queue system (₹6k–15k)
- WellnessDesk: Yoga/Spa/Physio management (₹8k–20k)
- RxPad Pro: Digital prescription generator (₹5k–12k)
- CareReview: Patient feedback & reputation (₹5k–12k)
- QuoteFlow: B2B quotation tool for traders (₹10k–25k)
- SmartProof: Client project portal for agencies (₹8k–20k)
- ShiftMate: Staff attendance/payroll for MSMEs (₹8k–18k)
- LeadBoard: Field sales lead manager (₹10k–22k)

**AI Automation Services:**
- WhatsApp auto-reply bot (₹4k–8k)
- AI lead qualification (₹6k–10k)
- AI customer support agent (₹8k–15k)
- AI content generator (₹5k–9k)
- AI appointment reminders (₹3k–6k)
- Workflow automation (n8n/Make) (₹5k–25k)

**Maintenance Contracts:**
- Basic: ₹2,000/month
- Standard: ₹4,000/month
- Premium: ₹8,000/month

**TPM Freelancing:**
- Project coordination: ₹25k–50k/project
- Development team management: ₹40k–80k/month
- SDLC management: ₹30k–60k/project

### 8.3 Lead Magnet (Create Before Launch)

**Title:** "The Clinic Digitization Checklist: 20 Things Before You Hire a Tech Partner"
**Format:** PDF, 2 pages, branded, teal design
**Value:** Doctors can self-assess their readiness
**CTA inside PDF:** Book a free 30-min call with Aaryan
**Email capture:** Mailchimp (free tier) or Brevo
**Placement:** Hero section + every blog post footer + Contact page

---

## ━━━ CHAPTER 9: MONTHLY GROWTH KPIs ━━━

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| Organic sessions/month | 200+ | 800+ | 3,000+ |
| Keyword rankings (Top 10) | 5 | 20+ | 50+ |
| Domain Authority (Ahrefs DR) | 15+ | 25+ | 40+ |
| Referring domains | 10+ | 30+ | 80+ |
| Google Business reviews | 5 | 15 | 30+ |
| Inbound inquiries/month | 2–3 | 5–8 | 15–25 |
| Email subscribers | 50+ | 200+ | 1,000+ |
| LinkedIn SSI score | 60+ | 70+ | 80+ |
| Core Web Vitals | All green | All green | All green |

---

## ━━━ CHAPTER 10: COMPLETE PRE-LAUNCH CHECKLIST ━━━

### Technical
- [ ] Domain aaaryangupta.com purchased (minimum 5 years)
- [ ] SSL/HTTPS active and enforced
- [ ] Cloudflare CDN configured
- [ ] robots.txt configured with AI bot allowances
- [ ] XML sitemap generated and valid
- [ ] Core Web Vitals: all green (LCP<2.5s, CLS<0.1, INP<200ms)
- [ ] Mobile test on 3 devices (iPhone, Android, tablet)
- [ ] All images: WebP, compressed, explicit dimensions, descriptive alt text
- [ ] No broken links
- [ ] Canonical tags on all pages
- [ ] Custom 404 page (branded)
- [ ] _headers security rules configured
- [ ] Service Worker registered and caching correctly
- [ ] PWA manifest complete
- [ ] Dark/light mode toggle working
- [ ] Custom cursor working (disabled on touch devices)
- [ ] All animations smooth (no jank)
- [ ] Form validation working
- [ ] Calendly embed loading

### SEO/GEO/AEO
- [ ] Unique title tag per page (< 60 chars)
- [ ] Unique meta description per page (< 160 chars)
- [ ] One H1 per page (keyword-first)
- [ ] Person schema validated (Rich Results Test)
- [ ] Service schema on all service pages
- [ ] FAQPage schema on all FAQ sections
- [ ] LocalBusiness schema on Jaipur + Ahmedabad pages
- [ ] BreadcrumbList schema on all inner pages
- [ ] All schemas pass schema.org validator
- [ ] Open Graph tags complete (all pages)
- [ ] Twitter Card tags complete (all pages)
- [ ] hreflang tags on all pages
- [ ] geo meta tags on location pages
- [ ] Internal linking complete (hub & spoke)
- [ ] Image alt text: descriptive + keyword-relevant

### Analytics & Tracking
- [ ] GA4 installed and tracking (async, deferred)
- [ ] GSC verified — sitemap submitted
- [ ] Bing Webmaster Tools — sitemap submitted
- [ ] IndexNow configured (Cloudflare plugin)
- [ ] Microsoft Clarity heatmaps installed
- [ ] Calendly booking tracked as GA4 conversion goal
- [ ] Contact form submission tracked as GA4 conversion goal

### Content
- [ ] Homepage: 900+ words, all sections complete
- [ ] About page: 1,200+ words, entity paragraph, timeline
- [ ] Minimum 2 service pages live (1,500+ words each)
- [ ] Contact page live + Calendly working
- [ ] Minimum 2 blog posts published
- [ ] Lead magnet PDF created + email capture working
- [ ] All project case studies written

### Entity & GEO
- [ ] Wikidata entity created
- [ ] Crunchbase profile created + website linked
- [ ] Google Business Profile verified (Jaipur)
- [ ] Clutch.co profile created
- [ ] GoodFirms profile created
- [ ] Bing Webmaster Tools — sitemap submitted

---

## ━━━ APPENDIX A: RESPONSIVE BREAKPOINTS ━━━

```css
/* Mobile first */
/* XS: 0–479px */
/* SM: 480–767px */
/* MD: 768–1023px */
/* LG: 1024–1279px */
/* XL: 1280–1535px */
/* 2XL: 1536px+ */

/* Container max-width by breakpoint */
@media (min-width: 640px)  { .container { max-width: 640px; } }
@media (min-width: 768px)  { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }

/* Nav breakpoint: hamburger below 768px */
/* Grid: 1col mobile → 2col tablet → 3col desktop */
/* Hero: stack on mobile (photo below text), side-by-side desktop */
/* Typography: fluid with clamp() at all major elements */
```

---

## ━━━ APPENDIX B: ACCESSIBILITY REQUIREMENTS ━━━

```
- WCAG 2.1 AA minimum compliance
- All interactive elements keyboard-navigable
- Tab order logical and visible
- Focus indicators: 2px teal outline on all focusable elements
- Skip-to-content link (visually hidden, keyboard visible)
- All images: alt text (decorative images: alt="")
- Aria labels on icon-only buttons
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text
- Reduced motion: @media (prefers-reduced-motion: reduce) — disable animations
- Screen reader: test with NVDA/VoiceOver before launch
- No content hidden only by color
- Form errors announced by aria-live
```

---

## ━━━ APPENDIX C: MANIFEST.WEBMANIFEST ━━━

```json
{
  "name": "Aaryan Gupta — Technical Project Manager",
  "short_name": "Aaryan Gupta",
  "description": "Technical Project Manager for HealthTech & SaaS. AI automation, micro-SaaS, project coordination.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#050A0E",
  "theme_color": "#0D9488",
  "icons": [
    {"src": "/assets/images/favicon-16.png", "sizes": "16x16", "type": "image/png"},
    {"src": "/assets/images/favicon-32.png", "sizes": "32x32", "type": "image/png"},
    {"src": "/assets/images/apple-touch-icon.png", "sizes": "180x180", "type": "image/png"},
    {"src": "/assets/images/icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/assets/images/icon-512.png", "sizes": "512x512", "type": "image/png"}
  ],
  "categories": ["business", "productivity"],
  "lang": "en",
  "dir": "ltr"
}
```

---

## ━━━ APPENDIX D: DESIGN PRINCIPLES SUMMARY ━━━

| Principle | Implementation |
|-----------|---------------|
| 3D depth | Card tilt, translateZ, perspective, floating elements |
| Sharp / edgy | border-radius max 12px, angular grid lines, sharp cuts |
| Neon (dark mode) | box-shadow glows on accent elements, borders |
| Glassmorphism (light mode) | backdrop-filter blur, semi-transparent backgrounds |
| Material Design signals | Elevation layers, consistent ripple on click |
| Cupertino signals | Smooth spring animations, blur overlays, clean spacing |
| Symmetrical | 8px grid strictly, consistent column widths |
| Less rounded | No circles except profile photo, no pill buttons |
| Premium feel | Clash Display headings, generous whitespace, no stock photos |
| Animated everywhere | But never distracting — always purposeful, subtle |

---

*This document is complete. Every section must be implemented without exception.*
*Dynamic values (domain, name, stats, contact) must be loaded from data/config.json.*
*Performance, SEO, AEO, GEO, accessibility, and conversion — all equal priority.*
*Version: 2025–2027 | Aaryan Gupta Digital Portfolio | aaaryangupta.com*
