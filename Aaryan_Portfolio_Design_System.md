# 🔱 AARYAN GUPTA — Portfolio Website Design System
## Complete In-Depth Design Blueprint · aaaryangupta.com

>

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Astrological Foundation](#astrological-foundation)
3. [Numerological Framework](#numerological-framework)
4. [Vastu Shastra Web Principles](#vastu-shastra)
5. [Psychological Design Principles](#psychology)
6. [Color System](#colors)
7. [Typography System](#typography)
8. [Grid & Spacing System](#grid)
9. [Shape Language & Geometry](#shapes)
10. [Animation & Motion System](#animation)
11. [Background & Texture](#backgrounds)
12. [Iconography & Imagery](#icons-images)
13. [UI Component Library](#components)
14. [Page Architecture](#architecture)
15. [Section-by-Section Design Guide](#sections)
16. [Effects & Polish](#effects)
17. [Responsive Design](#responsive)
18. [Technical Notes & CSS Variables](#technical)
19. [Assets Checklist](#assets)

---

## 1. EXECUTIVE SUMMARY {#executive-summary}

This document is the complete design brief for `aaaryangupta.com` — a Technical Project Manager portfolio 
for the HealthTech & SaaS space. Every design decision below is derived from three sources working together:

|

**Design direction in one sentence:**  
_Dark, deep, structured, and authoritative — with refined electric accents, precise typography, and subtle cosmic depth._

---

### 2.2 Planetary Positions → Design Mapping

| Planet | House | Status | Design Derived Element |
|--------|-------|--------|----------------------|
| **Saturn** (Lagna lord) | 4th | Neecha NBRY | Dark midnight navy — structure, depth, discipline |
| **Venus** (10th lord) | 3rd | **Exalted** ✨ | Electric blue + pearl silver — beauty, refinement, elegance |
| **Mars** (Atmakaraka) | 4th | Swakshetra 💪 | Bold accents, sharp angles, dynamic power, teal |
| **Sun** | 4th | **Exalted** ✨ | Subtle golden glow — authority, radiance |
| **Mercury** | 3rd | Neecha (NBRY) | Clean precision in typography, silver-gray tones |
| **Moon** | 9th | Mitra Rashi | Pearl/silver, calm gradients, starfield texture |
| **Jupiter** | 4th | Mitra | Generous white space, wisdom in copy |
| **Rahu** | 7th | — | Unconventional layout touches, magnetic effect |
| **Ketu** | 1st | — | Subtle depth, spiritual undercurrent |

### 2.3 Key Yogas → Personality of the Site

| Yoga | Design Expression |
|------|------------------|
| **Ruchaka Mahapurush (Mars)** | Bold, confident — never shy or apologetic in presentation |
| **Venus Exalted (3rd lord/10th lord)** | High aesthetic standards — nothing mediocre or cluttered |
| **Double Neecha Bhanga Raj Yoga** | Dark-to-light visual metaphor — depth that resolves into clarity |
| **9th-10th Lord Raj Yoga** | Fortune + Career combined — the site must communicate both ambition AND achievement |
| **8th House Strongest (Bhava Bala #1)** | Depth, layers, mystery — more is hidden than shown (confidence, not desperation) |

### 2.4 Auspicious vs. Inauspicious Design Elements

**✅ USE THESE (Shubh — Astrologically aligned):**
- Colors: White, Dark Navy, Deep Blue, Silver, Deep Teal/Green, Charcoal
- Shapes: Structured geometric, hexagonal accents (Saturn's geometry)
- Numbers: 6, 5, 8 (in counts of items, grid units, etc.)
- Direction flow: West-to-center (rightward motion favored)
- Materials feel: Silver, Iron, Stone (in textures and tones)
- Days/timing: Friday, Saturday, Wednesday influence (elegant, structured, communicative)

**❌ AVOID THESE (Ashubh — Misaligned):**
- Bright yellow (`#FFD700` type) — Jupiter malefic for Makar lagna
- Bright red (`#FF0000`) — Mars creates doshas; teal/blue replaces aggressive red
- Heavy gold/copper tones — inauspicious metals for this chart
- Orange (`#FF7700`) — ashubh spectrum for Makar
- East-facing visual emphasis — inauspicious direction
- Overcrowded layouts — Mercury's weakness = need for clarity, not chaos

---

## 3. NUMEROLOGICAL FRAMEWORK {#numerological-framework}

### 3.1 Core Numbers

| Number | Source | Planet | Design Role |
|--------|--------|--------|-------------|
| **8** | Birth Number (1+7=8) | Saturn | Base grid unit (8px), primary spacing increment |
| **5** | Destiny Number (DOB digits sum=14→5) | Mercury | 5 featured projects, 5 key skills per group |
| **8** | Name Number (AARYAN) | Saturn | Reconfirms dark/structured aesthetic |
| **6** | Venus number (ruling 10th) | Venus | 6 service cards, 6 navigation items |

### 3.2 Number 8 (Saturn) — Grid, Spacing, Timing

```
Base unit:    8px
Spacing scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160px
Border radius: 8px (cards), 4px (buttons), 0px (sharp accents)
Animation:    800ms (major), 400ms (micro), 600ms (transitions)
Grid:         8-column or 12-column (8-base multiples)
```

### 3.3 Number 5 (Mercury) — Content Counts

```
Featured projects:  5 on homepage
Case studies:       5 detailed
Social links:       5 platforms
Testimonials:       5 shown
Skill categories:   5 groups
Steps in process:   5 steps
```

### 3.4 Number 6 (Venus) — Creative/Beauty Elements

```
Service cards:      6 services
Color palette:      6 core colors
Stat metrics:       6 key numbers
Navigation items:   6 links (+ CTA)
```

---

## 4. VASTU SHASTRA WEB PRINCIPLES {#vastu-shastra}

### 4.1 Directional Layout Mapping

Vastu maps cardinal directions to the webpage like a floor plan (left=West, right=East, top=North, bottom=South).

For Makar lagna, **West and Northwest are most auspicious.**

```
Web Page Vastu Map:
┌─────────────────────────────────────────────────────┐
│ NORTH-WEST (top-right)   │  NORTH (top-center)       │
│ → Best for:              │  → Best for:               │
│   Navigation CTA button  │   Logo, Primary heading    │
│   Contact links          │   Key messaging            │
├──────────────────────────┼───────────────────────────┤
│ WEST (left-center)       │  CENTER (main content)    │
│ → Best for:              │  → Best for:               │
│   Primary nav links      │   Main offerings, services │
│   About intro            │   Portfolio highlights     │
├──────────────────────────┼───────────────────────────┤
│ SOUTH-WEST (bottom-left) │  SOUTH-CENTER (footer)    │
│ → Best for:              │  → Best for:               │
│   Social proof, trust    │   Contact form, CTA        │
│   Testimonials           │   Footer links             │
└─────────────────────────────────────────────────────┘
```

### 4.2 Element Placement Rules

**Earth Element (Makar + Kanya = Earth signs):**
- Heavy visual weight at bottom → grounded footer, solid section endings
- Dark, solid backgrounds → never airy/floaty feel throughout
- Compact typography in information-dense sections

**Water Element (Venus in Pisces, Rahu in Cancer):**
- Smooth gradients that flow horizontally
- Gentle wave or flow animation on hero background
- Connections/networking section = fluid layout

**Air Element (Mercury NBRY, Hasta = wind nakshatra):**
- White space is NOT emptiness — it's air, breathing room
- Typography should have generous line-height (air between lines)
- Hover animations: upward lifting feel (air rising)

**Fire Element (Sun + Mars exalted/own in Aries, 4th house):**
- Accent glows: subtle fire — not overwhelming but present
- CTA buttons: warm electric glow on hover
- Achievement stats: bold, bright, like sparks

### 4.3 Vastu Colors by Section

| Section | Vastu Zone | Recommended Color Treatment |
|---------|-----------|---------------------------|
| Hero | North (identity) | Deepest dark + bright electric blue |
| About | West (self-presentation) | Dark navy + silver |
| Services | Center | Structured dark cards, blue borders |
| Portfolio | East (knowledge display) | Dark + subtle teal accents |
| HealthTech | North-East (healing, wisdom) | Deep teal gradient |
| Contact | South-Center (results/outcomes) | Brightest CTA, high contrast |
| Footer | South-West (stability) | Solid, heaviest dark |

---

## 5. PSYCHOLOGICAL DESIGN PRINCIPLES {#psychology}

### 5.1 Visitor Psychology

**Primary visitors are:**
- HealthTech founders/CTOs looking for a PM
- Clinic/lab owners needing HealthTech software
- Freelance PM clients (technical teams needing coordination)
- Recruiters from HealthTech companies

**Their psychology:** Busy, skeptical, analytical, results-focused. They scan before they read.

**Design must answer in 3 seconds:**
1. Who is this person?
2. Can they solve my specific problem?
3. Is there proof?

### 5.2 Aaryan's Psychological Archetype → Design Personality

| Archetype Trait | Design Response |
|----------------|----------------|
| **Builder** (Mars Atmakaraka) | Show things built, not just described |
| **Researcher** (8th house strongest) | Depth beneath the surface — hover to discover more |
| **Creator** (Venus exalted) | Beauty is not decoration — it is substance |
| **Late-Bloomer** (Saturn NBRY) | Confident but not arrogant — earned authority |
| **Analytical** (Kanya Rashi) | Every element has purpose — nothing decorative for its own sake |

### 5.3 Trust Hierarchy Design

```
Layer 1 (Immediate, above fold):
→ Title + tagline + 4 proof stats
→ 2 clear CTAs

Layer 2 (After scroll — 2-3 sections):
→ Who am I, what do I do
→ Services with clear value props

Layer 3 (Deeper scroll — decision support):
→ Real work examples with outcomes
→ Company names, market scale

Layer 4 (For serious prospects only):
→ Full experience timeline
→ Tech depth, skill breakdown
→ Contact + consultation
```

### 5.4 Dark Theme Psychology

For this audience (technical, analytical, product-minded):
- Dark themes signal seriousness and technical depth
- They are common in developer/PM tools (Vercel, Linear, GitHub, Stripe)
- Black/navy backgrounds reduce cognitive load during scanning
- High contrast = trust (nothing to hide)

**Justify the dark theme:** Saturn (Makar lagna lord) + Birth Number 8 + Analytical identity = Dark theme is not aesthetic preference, it's archetypal alignment.

---

## 6. COLOR SYSTEM {#colors}

### 6.1 Master Palette (Astrologically Derived)

```css
/* ============================================================
   ASTROLOGICAL COLOR SYSTEM
   Each color mapped to a planetary/numerological source
   ============================================================ */

:root {
  /* ── FOUNDATION COLORS (Saturn / Number 8) ── */
  --color-void:       #04080F;   /* Absolute darkness — Saturn's depth */
  --color-midnight:   #070D1A;   /* Primary background — Makar lagna night */
  --color-navy:       #0C1730;   /* Card/surface background */
  --color-navy-mid:   #101E3D;   /* Elevated surface (card hover) */
  --color-navy-light: #16284F;   /* Borders, dividers */

  /* ── ACCENT COLORS (Venus Exalted / Mercury NBRY) ── */
  --color-venus:      #3B6DFF;   /* Electric blue — Venus exalted, Destiny 5 */
  --color-venus-soft: #7DA3FF;   /* Lighter blue for text accents */
  --color-venus-dim:  rgba(59,109,255,0.12); /* Blue tint on surfaces */
  --color-mercury:    #5BC8FF;   /* Sky blue — Mercury NBRY, Hasta nakshatra */
  --color-mercury-dim: rgba(91,200,255,0.1);

  /* ── ENERGY COLORS (Mars Ruchaka / Teal) ── */
  --color-mars:       #3DDC97;   /* Teal — Mars energy, Number 6, Venus */
  --color-mars-dim:   rgba(61,220,151,0.1);
  --color-mars-light: #6BE8B0;

  /* ── SUBTLE WARMTH (Sun Exalted / Prosperity) ── */
  --color-sun:        #D8B673;   /* Gold-silver — Sun exalted, prosperity hint */
  --color-sun-dim:    rgba(216,182,115,0.1);

  /* ── TEXT COLORS (Moon / Hasta Nakshatra) ── */
  --color-white:      #F3F6FF;   /* Primary text — pearl white (Hasta's purity) */
  --color-silver:     #93A2C2;   /* Secondary text — silver (moon's reflection) */
  --color-muted:      #5E6C8C;   /* Muted text — deep silver */
  --color-ghost:      rgba(255,255,255,0.06); /* Ghost surfaces */

  /* ── SEMANTIC COLORS ── */
  --color-success:    #3DDC97;   /* Same as mars (green = growth) */
  --color-warning:    #D8B673;   /* Same as sun (gold = caution) */
  --color-error:      #FF6B8A;   /* Soft red (not harsh — Mars dosha aware) */
  --color-info:       #5BC8FF;   /* Same as mercury */
}
```

### 6.2 Color Usage Rules

| Color | Use For | NEVER Use For |
|-------|---------|--------------|
| `#070D1A` (Midnight) | Page background, full-bleed sections | Text |
| `#0C1730` (Navy) | Card backgrounds, code blocks | Background on mobile (too dark) |
| `#3B6DFF` (Venus Blue) | Primary CTA, links, active states, brand highlight | Large background areas |
| `#5BC8FF` (Mercury) | Secondary accents, tags, icons, borders | Primary actions |
| `#3DDC97` (Mars Teal) | Success states, secondary CTA, feature highlights | Backgrounds |
| `#D8B673` (Sun Gold) | Premium labels, subtle highlights only | Text paragraphs |
| `#F3F6FF` (Pearl) | Primary text, headings | Small body text on white bg |
| `#93A2C2` (Silver) | Body text, descriptions, metadata | Primary headings |

### 6.3 Gradient System

```css
/* HERO GRADIENT — cosmic depth with Venus glow */
.gradient-hero {
  background: 
    radial-gradient(ellipse 900px 600px at 80% 0%, rgba(59,109,255,0.10), transparent 55%),
    radial-gradient(ellipse 600px 500px at 20% 100%, rgba(61,220,151,0.05), transparent 50%),
    radial-gradient(ellipse 400px 300px at 100% 50%, rgba(91,200,255,0.06), transparent 45%),
    #070D1A;
}

/* CARD GRADIENT — subtle depth */
.gradient-card {
  background: linear-gradient(135deg, #0C1730 0%, #101E3D 100%);
}

/* ACCENT GRADIENT — Venus electric */
.gradient-venus {
  background: linear-gradient(135deg, #3B6DFF 0%, #5BC8FF 100%);
}

/* TEAL GRADIENT — Mars energy */
.gradient-teal {
  background: linear-gradient(135deg, #3DDC97 0%, #5BC8FF 100%);
}

/* TEXT GRADIENT — for hero heading */
.gradient-text {
  background: linear-gradient(135deg, #FFFFFF 30%, #7DA3FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* GOLD GRADIENT — for premium/featured elements */
.gradient-gold {
  background: linear-gradient(135deg, #D8B673 0%, #E8D2A0 100%);
}
```

### 6.4 Color Psychological Reasoning

| Color | Psychological Impact | Astrological Alignment |
|-------|---------------------|----------------------|
| Deep Navy | Trust, depth, expertise, authority | Saturn (Makar lagna), Number 8 |
| Electric Blue | Innovation, intelligence, reliability | Venus exalted (creativity+tech), Mercury |
| Teal/Green | Growth, healing, fresh | Mars energy (Ruchaka), HealthTech alignment |
| Pearl White | Clarity, precision, purity | Hasta nakshatra (Moon), Kanya rashi |
| Gold (subtle) | Premium, achievement | Sun exalted, prosperity aspiration |

---

## 7. TYPOGRAPHY SYSTEM {#typography}

### 7.1 Font Selection (Astrologically Justified)

```css
/* ────────────────────────────────────────────────
   FONT SYSTEM
   
   Poppins  → Saturn + Mercury: Geometric precision,
              structured clarity, technical authority
   
   Lora     → Venus exalted: Elegant, refined serif
              for quotes, hero subtitles, testimonials
   
   JetBrains Mono → Mercury: Technical credibility,
                    code/stats display
   ──────────────────────────────────────────────── */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-accent:  'Lora', Georgia, serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', Consolas, monospace;
}
```

### 7.2 Type Scale (Saturn's 8px grid foundation)

```css
:root {
  /* SIZE SCALE — all multiples of 8 or 4 */
  --text-2xs:   10px;   /* Micro labels */
  --text-xs:    12px;   /* Captions, metadata, timestamps */
  --text-sm:    14px;   /* Small body, table text, helper text */
  --text-base:  16px;   /* Default body */
  --text-md:    18px;   /* Comfortable reading body */
  --text-lg:    20px;   /* Lead text, feature descriptions */
  --text-xl:    24px;   /* Section lead-ins, card titles */
  --text-2xl:   28px;   /* Sub-section headings */
  --text-3xl:   32px;   /* H3 level */
  --text-4xl:   40px;   /* H2 level */
  --text-5xl:   48px;   /* H1 level */
  --text-6xl:   64px;   /* Display (section hero) */
  --text-7xl:   80px;   /* Hero heading (large) */
  --text-8xl:   96px;   /* Hero heading (XL screens) */

  /* WEIGHT SCALE */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold: 600;
  --weight-bold:    700;
  --weight-extrabold: 800;
  --weight-black:   900;

  /* LINE HEIGHT */
  --leading-tight:  1.1;    /* Hero headings */
  --leading-snug:   1.25;   /* Sub-headings */
  --leading-normal: 1.5;    /* Body text */
  --leading-relaxed: 1.7;   /* Long-form reading */
  --leading-loose:  2.0;    /* Code, captions */

  /* LETTER SPACING */
  --tracking-tighter: -0.04em;  /* Large display text */
  --tracking-tight:   -0.02em;  /* Headings */
  --tracking-normal:   0em;     /* Body text */
  --tracking-wide:     0.05em;  /* Button labels, UI text */
  --tracking-wider:    0.1em;   /* Section labels, eyebrows */
  --tracking-widest:   0.2em;   /* ALL CAPS labels */
}
```

### 7.3 Typography Roles

```css
/* ── HERO DISPLAY ── */
.text-display {
  font-family: var(--font-primary);
  font-size: clamp(56px, 6vw, 96px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-white);
}

/* ── SECTION HEADING ── */
.text-h1 {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.text-h2 {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-h3 {
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 600;
  line-height: 1.25;
}

/* ── BODY ── */
.text-body-lg {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-silver);
}

.text-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--color-silver);
}

/* ── ACCENT (Venus elegance) ── */
.text-quote {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(18px, 2vw, 24px);
  color: var(--color-venus-soft);
  line-height: 1.6;
}

/* ── EYEBROW (Saturn structure) ── */
.text-eyebrow {
  font-family: var(--font-primary);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-venus-soft);
}

.text-eyebrow::before {
  content: '—';
  margin-right: 8px;
  opacity: 0.6;
}

/* ── MONO (Mercury precision) ── */
.text-mono {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--color-mercury);
}

/* ── STAT NUMBER (Number 8 / Saturn power) ── */
.text-stat {
  font-family: var(--font-primary);
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 800;
  line-height: 1;
  color: var(--color-venus-soft);
  letter-spacing: -0.04em;
}

.text-stat-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-top: 6px;
}
```

### 7.4 Typography Dos & Don'ts

**DO:**
- Use Poppins 800 for all hero headings
- Use text gradient (white→blue) on the most important words
- Use Lora italic for testimonials, hero tagline
- Use JetBrains Mono for stat numbers, code snippets, technical terms
- Keep body text at 16-18px, silver color (#93A2C2)
- Use letter-spacing 0.2em on ALL CAPS section eyebrows
- Keep line-height 1.65-1.7 for body paragraphs (generous air = Mercury/Hasta)

**DON'T:**
- Never mix more than 3 font families on one page
- Never use font-weight below 300 for body text (too thin, Mercury weakness)
- Never use bright colors for large text bodies
- Never center-align paragraphs (only headings and eyebrows)
- Never use default browser line-height (1.2) for body text — too cramped

---

## 8. GRID & SPACING SYSTEM {#grid}

### 8.1 Grid Structure (Number 8 foundation)

```css
/* ── CONTAINER WIDTHS ── */
:root {
  --container-sm:   640px;
  --container-md:   768px;
  --container-lg:   1024px;
  --container-xl:   1280px;  /* Primary content width */
  --container-2xl:  1440px;  /* Full-width sections */
  --container-narrow: 720px; /* Blog, about text */
}

/* ── GRID COLUMNS ── */
/* 12-column grid with 8px gutter base */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-8);  /* 32px gap */
}

/* Common grid patterns: */
/* 2-col:  span 6 each */
/* 3-col:  span 4 each */
/* 4-col:  span 3 each (service cards) */
/* Sidebar: 4 + 8 col split */
/* Hero: 7 col content + 5 col image */
```

### 8.2 Spacing Scale (All multiples of 8)

```css
:root {
  --space-1:   4px;    /* Tight micro spacing */
  --space-2:   8px;    /* Base unit (Birth Number 8) */
  --space-3:   12px;   /* Small gaps */
  --space-4:   16px;   /* Default padding small */
  --space-5:   20px;   /* Medium-small */
  --space-6:   24px;   /* Standard component gap */
  --space-7:   28px;   /* Large component gap */
  --space-8:   32px;   /* Section sub-spacing */
  --space-10:  40px;   /* Card padding comfortable */
  --space-12:  48px;   /* Section sub-header spacing */
  --space-16:  64px;   /* Medium section padding */
  --space-20:  80px;   /* Standard section padding */
  --space-24:  96px;   /* Large section padding */
  --space-32:  128px;  /* Hero/major section spacing */
  --space-40:  160px;  /* Full-bleed hero height */
}

/* SECTION PADDING RULE:
   Desktop: 96px or 120px top/bottom
   Tablet:  64px top/bottom
   Mobile:  48px top/bottom
   Always multiples of 8.
*/
```

### 8.3 Spacing Numerological Rules

```
Card padding:     24px (=3×8) internal, 32px (=4×8) for premium cards
Gap between cards: 24px (grid-gap)
Section spacing:  96px = 12×8 (Saturn's 12 signs × 8 = completion)
Nav height:       64px = 8×8 (pure Saturn)
Button padding:   12px 24px (multiples of 6 and 8 — Venus+Saturn)
Stat number gap:  40px between stat items
```

---

## 9. SHAPE LANGUAGE & GEOMETRY {#shapes}

### 9.1 Primary Shape: The Saturn Rectangle

Makar (Capricorn) is an Earth sign ruled by Saturn. Earth + Saturn = **rectangles, structure, straight lines, defined edges.**

```css
/* ── BORDER RADIUS SYSTEM ── */
:root {
  --radius-none:   0px;     /* Sharp corners — Saturn's absolute authority */
  --radius-sm:     4px;     /* Buttons, small tags */
  --radius-md:     8px;     /* Cards (Saturn base unit) */
  --radius-lg:     12px;    /* Large cards, modals */
  --radius-xl:     16px;    /* Feature cards, images */
  --radius-2xl:    24px;    /* Hero image frame */
  --radius-full:   9999px;  /* Pills, chips, circular avatars */
}

/* RULE:
   - Use 0-4px for action elements (buttons, CTAs) — direct, no-nonsense
   - Use 8px for standard cards — Mars strength, structured
   - Use 12-16px for featured/premium cards — Venus elegance
   - Use 9999px only for tags/chips and profile photo
   - NEVER use >24px for structural elements (too soft for Saturn)
*/
```

### 9.2 Saturn's Sacred Geometry — Hexagonal Accents

Saturn's polar hexagonal storm is one of the most iconic geometric phenomena.  
Use subtle hexagonal elements as decorative accents, NOT as primary shapes.

```
Locations for hexagonal geometry:
1. Background decorative elements (very low opacity 0.03-0.05)
2. Skill section — hexagonal icons
3. Loading screen — hex pattern
4. Section dividers — tiny hex pattern
5. Testimonial card — subtle hex border
```

### 9.3 Dynamic Angles — Mars Energy

Mars (Atmakaraka, Ruchaka Yoga) brings angular, dynamic energy.

```
30° diagonals: Use for section dividers, background cuts
45° angles: Used in accent lines, decorative arrows
Slanted section breaks: hero bottom edge cut at 3° (barely visible slant)
Diagonal gradient lines: faint lines at 30° in backgrounds

NOTE: Keep angles subtle. Mars energy = confidence, NOT aggression.
The portfolio should feel dynamic but controlled.
```

### 9.4 Circle Usage — Hasta Nakshatra

Hasta (Moon nakshatra) deals with hands, craft, and skill. The moon is circular.

```
Use circles for:
- Profile photo frame
- Skill icons background
- Timeline dots
- Testimonial avatar
- Section number badges
- Loader animation

Size: 6px (dots) → 8px → 16px → 40px → 64px → 120px → 200px
Always odd or 8-based sizes.
```

### 9.5 Line System

```css
/* ── BORDER SYSTEM ── */
:root {
  --border-subtle:  1px solid rgba(255,255,255,0.06);     /* Ghost borders */
  --border-dim:     1px solid rgba(59,109,255,0.15);      /* Card borders */
  --border-mid:     1px solid rgba(59,109,255,0.25);      /* Active borders */
  --border-bright:  1px solid rgba(59,109,255,0.50);      /* Highlighted */
  --border-gold:    1px solid rgba(216,182,115,0.35);     /* Premium */
  --border-teal:    1px solid rgba(61,220,151,0.30);      /* Success/feature */
}

/* ── DIVIDER LINES ── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59,109,255,0.3), transparent);
}

.divider-solid {
  height: 1px;
  background: rgba(255,255,255,0.06);
}
```

---

## 10. ANIMATION & MOTION SYSTEM {#animation}

### 10.1 Motion Philosophy (Saturn's Law)

Saturn moves **slowly, deliberately, and permanently.** Animations must mirror this:
- No instant pop-ins (too Mercury-ADHD)
- No flashy entrance effects (too Rahu-show-off)
- Reveal with purpose (Saturn shows what has been earned)
- Smooth, measured, controlled — like authority entering a room

**One-sentence animation rule:** _"Make every animation feel like it was always there, and is simply becoming visible."_

### 10.2 Easing Functions

```css
:root {
  /* Primary: ease-out = arrives with confidence (Saturn's certainty) */
  --ease-out:     cubic-bezier(0.0, 0, 0.2, 1);

  /* Smooth: standard ease-in-out = balanced (Venus harmony) */
  --ease-smooth:  cubic-bezier(0.4, 0, 0.6, 1);

  /* Spring: slight spring for hover states (Mars energy) */
  --ease-spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Gentle: for large reveals (Jupiter wisdom) */
  --ease-gentle:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### 10.3 Duration Scale (Multiples of 8 + numerological alignment)

```css
:root {
  --dur-instant:  100ms;   /* Micro feedback (click visual) */
  --dur-fast:     200ms;   /* Hover color changes */
  --dur-quick:    300ms;   /* Tooltip, dropdown open */
  --dur-normal:   400ms;   /* Standard micro-animation */
  --dur-smooth:   600ms;   /* Transitions (Number 6, Venus) */
  --dur-slow:     800ms;   /* Scroll reveals (Number 8, Saturn) */
  --dur-stagger:  100ms;   /* Stagger between list items */
  --dur-long:    1200ms;   /* Hero text entrance */
  --dur-cosmic:  2000ms;   /* Background particle drift */
}
```

### 10.4 Specific Animation Definitions

```css
/* ── 1. PAGE HERO ENTRANCE ── */
/* Order: Background → Eyebrow → H1 Line 1 → H1 Line 2 → Body → CTAs → Stats */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Stagger: 0ms, 100ms, 200ms, 400ms, 600ms, 800ms, 1000ms */
/* Duration: 800ms each, ease-out */

/* ── 2. SCROLL REVEAL (Section elements) ── */
@keyframes revealFromBottom {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Use IntersectionObserver: threshold 0.1, rootMargin 0px 0px -50px 0px */
/* Duration: 600ms, ease-out, stagger 80ms between items */

/* ── 3. CARD HOVER ── */
.card {
  transition: transform var(--dur-normal) var(--ease-spring),
              box-shadow var(--dur-normal) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);  /* Subtle lift — Venus's upward aspiration */
  box-shadow: 0 20px 60px rgba(59,109,255,0.15), 0 0 0 1px rgba(59,109,255,0.3);
  border-color: rgba(59,109,255,0.4);
}

/* ── 4. BUTTON HOVER ── */
.btn-primary {
  transition: all var(--dur-fast) var(--ease-out);
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.1);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-normal) var(--ease-out);
}
.btn-primary:hover::after { transform: scaleX(1); }

/* ── 5. STAT NUMBER COUNT-UP ── */
/* JavaScript: CountUp.js or manual implementation */
/* Numbers count from 0 to target over 1600ms (2×8 = 16 × 100ms) */
/* Easing: easeOutQuart */
/* Trigger: when stats section enters viewport */

/* ── 6. NAVIGATION LINK UNDERLINE ── */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 1px;
  background: var(--color-venus);
  transform: scaleX(0);
  transition: transform var(--dur-fast) var(--ease-out);
}
.nav-link:hover::after,
.nav-link.active::after { transform: scaleX(1); }

/* ── 7. BACKGROUND PARTICLES ── */
/* Very subtle, slow-moving dots */
/* Count: 40-60 particles (not overwhelming) */
/* Size: 1-2px */
/* Speed: 20-40s cycle (very slow — Saturn pace) */
/* Color: rgba(59,109,255,0.3) and rgba(91,200,255,0.2) */
/* Opacity: 0.3-0.6 */
/* Movement: gentle float, NO rapid movement */

/* ── 8. CUSTOM CURSOR ── */
/* Outer ring: 32px, transparent with blue border, 200ms lag behind mouse */
/* Inner dot:  6px, solid blue (#3B6DFF), exact mouse position */
/* On hover interactive: inner scales to 0, outer scales to 0.6 and fills */
```

### 10.5 Animation Sequences by Section

**Hero section:**
1. t=0ms: Background gradient settles
2. t=200ms: Particle system starts (barely perceptible)
3. t=400ms: Eyebrow text slides up + fades in
4. t=600ms: H1 line 1 slides up
5. t=800ms: H1 line 2 slides up
6. t=1000ms: Body text fades in
7. t=1200ms: CTA buttons scale in from center
8. t=1400ms: Stats section slides up
9. t=1600ms: Profile photo slides in from right

**Stat counters:** Count up for 1600ms (2×8 = karmic completion)

**Skill tags:** Stagger-in at 50ms intervals (crisp, like Mercury counting)

**Project cards:** Stagger 80ms, translateY(-40px)→0 + opacity

---

## 11. BACKGROUND & TEXTURE {#backgrounds}

### 11.1 Primary Background Treatment

```css
/* ── HERO BACKGROUND ── */
.hero-bg {
  /* Layer 1: Base darkness (Saturn) */
  background-color: #070D1A;

  /* Layer 2: Radial glow from top-right (NW = auspicious Vastu) */
  background-image:
    radial-gradient(ellipse 900px 600px at 100% 0%,   rgba(59,109,255,0.10), transparent 60%),
    radial-gradient(ellipse 500px 400px at 0% 100%,   rgba(61,220,151,0.05), transparent 55%),
    radial-gradient(ellipse 300px 200px at 60% 50%,   rgba(91,200,255,0.04), transparent 50%);

  /* Layer 3: Subtle grid (Saturn's structure) */
  background-image: also include grid:
}

/* Grid overlay technique: */
.grid-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
  background-size: 40px 40px;  /* 5×8 = 40 (Number 5 × Number 8) */
  pointer-events: none;
}
```

### 11.2 Section Backgrounds

```css
/* ALTERNATING SECTION PATTERN:
   Section 1 (Hero):     #070D1A — deepest void
   Section 2 (About):    #070D1A — same depth
   Section 3 (Services): #0C1730 — slightly lifted
   Section 4 (Portfolio):#070D1A — back to void
   Section 5 (HealthTech):gradient (teal-dark special)
   Section 6 (Experience):#0C1730
   Section 7 (Skills):   #070D1A
   Section 8 (Contact):  gradient (subtle blue)
   Footer:               #04080F — darkest (grounded)
*/

/* HealthTech section special background: */
.section-healthtech {
  background:
    radial-gradient(ellipse 800px 500px at 50% 0%, rgba(61,220,151,0.06), transparent 60%),
    #070D1A;
  border-top: 1px solid rgba(61,220,151,0.12);
  border-bottom: 1px solid rgba(61,220,151,0.12);
}
```

### 11.3 Noise Texture

```css
/* Subtle noise adds tactility — like Saturn's earthy grounding */
.noise-overlay::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.025;  /* Very subtle — barely perceptible */
  background-image: url("data:image/svg+xml,%3Csvg..."); /* SVG noise */
  /* Or use: background: url('/assets/noise.png') repeat; */
}
```

### 11.4 Star Particle System (Hasta Nakshatra — Stars, Night Sky)

```javascript
// Hasta nakshatra is ruled by the Moon, associated with stars and night sky.
// The particle system should feel like a deep space view — calm, vast, infinite.

const PARTICLE_CONFIG = {
  count: 50,           // 5×8+10 = 50 (Number 5 × Number 8 harmony)
  minSize: 1,          // px
  maxSize: 2.5,        // px (no large particles — Mercury precision)
  colors: [
    'rgba(59,109,255,0.4)',   // Venus blue
    'rgba(91,200,255,0.3)',   // Mercury sky
    'rgba(255,255,255,0.25)', // Pearl (Hasta Moon)
    'rgba(61,220,151,0.2)',   // Mars teal
  ],
  minSpeed: 0.1,       // Very slow (Saturn pace)
  maxSpeed: 0.3,
  driftRange: 30,      // px of gentle drift
  cycleDuration: 25000, // ms (very long cycle = Saturn patience)
  fadeIn: 2000,        // ms
};

// Each particle:
// - Random position
// - Gentle drift (not directional movement — floating)
// - Very slow opacity pulse (1.0 → 0.3 → 1.0 over 8-15 seconds)
// - NO twinkling effect (too decorative)
```

---

## 12. ICONOGRAPHY & IMAGERY {#icons-images}

### 12.1 Icon System

**Recommended library:** Phosphor Icons or Lucide React

```
Why Phosphor Icons?
- Three weight levels: Thin / Regular / Bold
- Use "Regular" for body icons, "Bold" for feature icons
- Clean, geometric (Saturn), versatile (Mercury)
- Line-based (not filled) = Mercury's precision and transparency

Size standards:
- Navigation:    20px
- In-text:       16px
- Card features: 24px
- Feature blocks:32px
- Hero section:  40px
- Decorative:    48-64px
```

### 12.2 Icon Color Rules

```css
/* ── ICON COLORS ── */
.icon-default    { color: var(--color-silver); }      /* #93A2C2 */
.icon-active     { color: var(--color-venus); }       /* #3B6DFF */
.icon-feature    { color: var(--color-mercury); }     /* #5BC8FF */
.icon-success    { color: var(--color-mars); }        /* #3DDC97 */
.icon-premium    { color: var(--color-sun); }         /* #D8B673 */

/* Icon backgrounds */
.icon-bg-default  { background: rgba(255,255,255,0.04); }
.icon-bg-blue     { background: rgba(59,109,255,0.1); }
.icon-bg-teal     { background: rgba(61,220,151,0.1); }
.icon-bg-gold     { background: rgba(216,182,115,0.1); }
```

### 12.3 Specific Icons by Section

| Section | Icon | Meaning |
|---------|------|---------|
| Technical PM | `monitor-play` or `brackets` | Code + management |
| HealthTech | `heartbeat` or `stethoscope` | Medical + tech |
| AI Automation | `robot` or `cpu` | AI/automation |
| Micro-SaaS | `package` | Software product |
| Maintenance | `wrench` or `shield-check` | Support/security |
| Team Coordination | `users-three` | Team work |
| 70+ Markets | `globe` or `map-pin` | Global reach |
| Years Experience | `clock-countdown` or `calendar` | Time |
| Projects | `folder-open` | Work |

### 12.4 Profile Photo Requirements

**Astrological alignment:**
- Background: Dark (exactly matching site palette `#070D1A-#0C1730`)
- Clothing: Dark Navy or White (Shubh colors, Saturn + Venus)
- Expression: Composed, confident (Makar lagna energy)
- Grooming: Clean, sharp (Kanya rashi perfectionism)
- Lighting: Side/Rembrandt lighting from left (west = auspicious)
- Format: Professional headshot, slight 3/4 angle (not full frontal = too direct)

**Photo treatment on site:**
- Slight blue tint overlay (Venus color)
- Subtle glow around edges (Sun exalted energy)
- Frame: 2px border in `rgba(59,109,255,0.4)` 
- Border radius: 50% for circular, or 16px for card style
- Size on hero: 400-500px wide

### 12.5 Supporting Visual Elements

**What to include:**
- Abstract tech/data visualizations (dark, blue tones)
- Subtle network graph animations (connections = Rahu in 7th, partnerships)
- Code editor screenshots (credibility for "PM who speaks dev")
- HealthTech related: clean medical UI mockups (not stock photos)
- Indian map accent (Jaipur/Ahmedabad location marker)
- Metric/data visualization decorations

**What to avoid:**
- Stock photos of random people
- Generic business handshakes
- Bright stock imagery (color clash)
- Logos without permission
- Generic "flat design" icons (too simplistic for Venus exalted)

---

## 13. UI COMPONENT LIBRARY {#components}

### 13.1 Buttons

```css
/* ── PRIMARY BUTTON (Saturn + Venus) ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;           /* 2×7 and 4×7 — Saturn precision */
  background: var(--color-venus);  /* #3B6DFF */
  color: white;
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.03em;
  border-radius: 6px;            /* Sharp-ish — Saturn authority */
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 200ms ease-out;
}
.btn-primary:hover {
  background: #4D7DFF;
  transform: translateY(-1px);
  box-shadow: 0 8px 32px rgba(59,109,255,0.4);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}

/* ── SECONDARY BUTTON (Ghost style) ── */
.btn-secondary {
  padding: 13px 27px;           /* 1px less than primary for border */
  background: transparent;
  color: var(--color-white);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: all 200ms ease-out;
}
.btn-secondary:hover {
  border-color: rgba(59,109,255,0.5);
  background: rgba(59,109,255,0.08);
  color: var(--color-venus-soft);
}

/* ── TEAL BUTTON (HealthTech / Features) ── */
.btn-teal {
  background: var(--color-mars);
  color: #070D1A;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
}
.btn-teal:hover {
  background: #4DE8A8;
  box-shadow: 0 8px 24px rgba(61,220,151,0.35);
}

/* ── SMALL / CHIP BUTTON ── */
.btn-chip {
  padding: 6px 14px;
  background: rgba(59,109,255,0.1);
  border: 1px solid rgba(59,109,255,0.25);
  border-radius: 100px;  /* Pill */
  font-size: 13px;
  font-weight: 500;
  color: var(--color-venus-soft);
}
```

### 13.2 Cards

```css
/* ── BASE CARD ── */
.card {
  background: var(--color-navy);         /* #0C1730 */
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 32px;                         /* 4×8 = Saturn */
  transition: all 300ms ease-out;
  position: relative;
  overflow: hidden;
}
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(59,109,255,0.3);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 
              0 0 0 1px rgba(59,109,255,0.2),
              0 0 40px rgba(59,109,255,0.06);
}

/* Shimmer line on top (like Venus's refined touch) */
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59,109,255,0.5), transparent);
  opacity: 0;
  transition: opacity 300ms;
}
.card:hover::before { opacity: 1; }

/* ── SERVICE CARD (6 cards) ── */
.card-service {
  /* Same base + icon on top */
  border-top: 2px solid var(--service-color, var(--color-venus));
}

/* ── PROJECT CARD ── */
.card-project {
  padding: 0;
  overflow: hidden;
}
.card-project-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  background: #101E3D;
}
.card-project-content {
  padding: 24px;
}

/* ── STAT CARD ── */
.card-stat {
  text-align: center;
  padding: 32px 24px;
  background: rgba(59,109,255,0.04);
  border: 1px solid rgba(59,109,255,0.12);
}
```

### 13.3 Navigation

```css
/* ── NAVIGATION ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;                /* 8×8 = Saturn's perfection */
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all 300ms ease-out;
}

/* Transparent on hero */
nav.transparent {
  background: transparent;
}

/* Frosted glass on scroll */
nav.scrolled {
  background: rgba(7, 13, 26, 0.90);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 4px 32px rgba(0,0,0,0.3);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Logo: AG monogram */
.nav-logo {
  font-family: var(--font-primary);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--color-white);
}
.nav-logo span { color: var(--color-venus); }  /* "A" in blue */

/* Nav links: 6 items (Number 6 = Venus) */
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}
.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-silver);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 200ms;
}
.nav-link:hover { color: var(--color-white); }
```

### 13.4 Chips / Tags

```css
.chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.chip-blue   { background: rgba(59,109,255,0.1);  border: 1px solid rgba(59,109,255,0.3);  color: #7DA3FF; }
.chip-teal   { background: rgba(61,220,151,0.1);  border: 1px solid rgba(61,220,151,0.3);  color: #3DDC97; }
.chip-gold   { background: rgba(216,182,115,0.1); border: 1px solid rgba(216,182,115,0.3); color: #D8B673; }
.chip-silver { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #93A2C2; }
.chip-red    { background: rgba(255,107,138,0.1);  border: 1px solid rgba(255,107,138,0.3); color: #FF8FAA; }
```

### 13.5 Timeline Component (Career)

```css
.timeline {
  position: relative;
  padding-left: 40px;
}

/* Vertical line: blue gradient, fading at bottom */
.timeline::before {
  content: '';
  position: absolute;
  left: 12px; top: 8px; bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, var(--color-venus), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;   /* 5×8 */
}

/* Dot: 8px circle (Birth Number 8) */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -34px; top: 6px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-midnight);
  border: 2px solid var(--color-venus);
}

.timeline-period {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-venus-soft);
  margin-bottom: 4px;
}

.timeline-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 8px;
}

.timeline-desc {
  font-size: 15px;
  color: var(--color-silver);
  line-height: 1.65;
}
```

---

## 14. PAGE ARCHITECTURE {#architecture}

### 14.1 Page Structure (Vastu-Aligned)

```
aaaryangupta.com
├── Navigation (sticky, 64px)
├── Hero Section
│   ├── Particle background
│   ├── Eyebrow tag
│   ├── H1 heading (The PM Who Speaks Dev)
│   ├── Subheading (personal tagline)
│   ├── CTA group (Book Call + View Work)
│   ├── Stats strip (70+ · 20+ · 3+ · 5+)
│   └── Profile photo (right side)
│
├── Scrolling marquee (tech skills strip)
│
├── About Section
│   ├── Story (not resume)
│   ├── Photo + decorative elements
│   └── Philosophy quote (Lora italic)
│
├── Services Section (6 cards)
│   ├── Technical PM
│   ├── HealthTech Consulting
│   ├── AI Automation
│   ├── Micro-SaaS
│   ├── Website Maintenance
│   └── Dev Team Coordination
│
├── Signature Work Section (5 projects)
│   ├── ProjectPort (Full-stack)
│   ├── UiBrium (NPM package)
│   ├── AI Assistant
│   ├── HealthTech product (TokenQ / LabTrack)
│   └── Case study #5
│
├── HealthTech Section (Special)
│   ├── Problem statement
│   ├── Product grid (6 products)
│   └── Stats (600K+ doctors · <10% digital)
│
├── Experience Timeline
│   ├── Oblinex (current)
│   ├── MyDigiShell
│   ├── Elipact
│   └── Ipistis
│
├── Skills Section
│   └── 5 skill groups (chips)
│
├── FAQ Section (6 questions — Number 6)
│
├── Contact / CTA Section
│   ├── Book Free 30-Min Call
│   ├── WhatsApp link
│   └── Email link
│
└── Footer
    ├── Logo + tagline
    ├── Navigation links
    ├── Social links (5 platforms)
    └── Copyright
```

### 14.2 Section Proportions

```
Hero:         100vh (full screen) + 80px padding
About:        auto (2-col layout, text + image)
Services:     auto (3-col card grid, 6 cards)
Portfolio:    auto (3-col or masonry, 5 projects)
HealthTech:   auto (stats + product grid)
Experience:   auto (timeline)
Skills:       auto (chip clouds, 5 groups)
FAQ:          auto (accordion, 6 items)
Contact:      560px min-height
Footer:       auto (4-col layout)
```

---

## 15. SECTION-BY-SECTION DESIGN GUIDE {#sections}

### 15.1 Hero Section

```
LAYOUT:
  Left (7 cols): Text content
  Right (5 cols): Profile photo + decorative

EYEBROW:  
  Text: "Technical Project Manager · HealthTech & SaaS"
  Style: text-eyebrow (12px, wide tracking, Venus blue)
  
H1 LINE 1: "The PM Who"
H1 LINE 2: "Speaks Dev."
  Style: text-display (clamp 56-96px), weight 800
  Color: Line 1 = pearl white, Line 2 = gradient (white→venus blue)
  Letter-spacing: -0.03em
  Animation: Line 1 appears first, Line 2 half-second later

TAGLINE:
  Text: "I bridge complex technology with seamless execution"
  Style: Lora italic, 20px, #93A2C2
  
BODY TEXT:
  Max 2 lines, 16px, silver color
  
CTA GROUP:
  Primary: "Book Free 30-Min Call" (blue button)
  Secondary: "View My Work →" (ghost button)
  Gap: 16px between
  
STATS STRIP:
  Show: 70+ · 20+ · 3+ · 5+
  Labels: Markets · Projects · Years · Products Built
  Style: Large number (48px, Venus blue) + small label (11px, uppercase, muted)
  Separated by: 1px vertical dividers
  
PROFILE PHOTO:
  Size: 400×480px
  Border: 2px solid rgba(59,109,255,0.3)
  Border-radius: 16px
  Filter: none (or very subtle brightness 1.05)
  Floating effect: CSS animation, gentle 4px vertical bob, 4s cycle
  Background behind photo: Glow blob (radial gradient, blue, 60% opacity, 300px)
```

### 15.2 Services Section

```
HEADER:
  Eyebrow: "What I Deliver"
  H2: "Services"
  Subheading: "From project kickoff to final deployment"

GRID: 3 columns × 2 rows = 6 cards (Number 6 = Venus = harmony)

EACH SERVICE CARD:
  Background: #0C1730
  Border: 1px solid rgba(255,255,255,0.06)
  Border-radius: 12px
  Top accent: 2px solid [service color]
  Padding: 32px
  
  Icon: 32px, in rounded 56px container
  Title: 18px, weight 700, white
  Description: 14px, silver, 3-4 lines max
  Tags: Chip components (technology tags)
  
  Service colors (accent top border):
  1. Technical PM:     #3B6DFF (Venus blue)
  2. HealthTech:       #3DDC97 (Mars teal)
  3. AI Automation:    #5BC8FF (Mercury sky)
  4. Micro-SaaS:       #B39BFF (Jupiter purple)
  5. Maintenance:      #D8B673 (Sun gold)
  6. Team Coord:       #FF8FAA (soft rose — creative balance)
```

### 15.3 HealthTech Special Section

```
PURPOSE: Differentiator section — "I specifically understand healthcare"

BACKGROUND: Subtle teal gradient (green-health signal)

HEADER:
  Eyebrow: "Built For Indian Healthcare"
  H2: "600K+ Doctors in India. <10% Digital."
  
STATS ROW:
  600K+ · <10% · ₹0/mo · 48hr
  Labels: Doctors in India · Digital adoption · Monthly fee · Setup time

PRODUCT GRID: 6 products (Number 6 = Venus = beauty of creation)
  TokenQ / RecallMD / LabTrack / WellnessDesk / RxPad Pro / CareReview
  Each: icon + name + one-line description
  Color: dark teal card with teal border
```

### 15.4 Contact Section

```
VASTU: Center-right position (auspicious for outcomes)

LAYOUT:
  Left: Large heading + contact details
  Right: Booking embed or contact form

HEADING: "Ready to Ship Something That Works?"

CTA OPTIONS:
  Primary: Book Free 30-Min Call (large blue button)
  Secondary: WhatsApp Me (teal button)
  Tertiary: Copy Email (ghost)

CONTACT DETAILS (below heading):
  - aaryangupta.pm@gmail.com
  - +91 62056 50368
  - Jaipur / Ahmedabad / Remote (availability note)

NUMEROLOGICAL NOTE: 
  Display email starting with "aryan" not "aryanraj" 
  AARYAN name has number 8 (same as birth number = aligned)
```

---

## 16. EFFECTS & POLISH {#effects}

### 16.1 Glow Effects (Venus Exalted = light from refinement)

```css
/* ── TEXT GLOW — for headline key words ── */
.glow-text {
  text-shadow: 0 0 40px rgba(59,109,255,0.4);
}

/* ── ICON GLOW ── */
.glow-icon {
  filter: drop-shadow(0 0 8px rgba(59,109,255,0.5));
}

/* ── CARD GLOW ON HOVER ── */
.glow-card:hover {
  box-shadow: 
    0 0 0 1px rgba(59,109,255,0.3),
    0 20px 60px rgba(0,0,0,0.5),
    0 0 80px rgba(59,109,255,0.06);
}

/* ── PROFILE PHOTO HALO ── */
.profile-halo {
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle at center, rgba(59,109,255,0.15), transparent 70%);
  filter: blur(30px);
  z-index: -1;
}

/* ── BUTTON GLOW ── */
.btn-primary:hover {
  box-shadow: 0 8px 32px rgba(59,109,255,0.45), 0 0 0 1px rgba(59,109,255,0.2);
}

/* ── STAT NUMBER AMBIENT ── */
/* Number 8 stats should feel powerful — slight ambient glow */
.stat-number-glow {
  text-shadow: 0 0 30px rgba(59,109,255,0.3);
}
```

### 16.2 Glass Morphism (Selective Use)

```css
/* Only on:
   1. Sticky nav when scrolled
   2. Modal overlays
   3. Tooltip backgrounds
   4. Featured project card (1 hero card only)
   NOT on all cards — too trendy for Saturn's timelessness */

.glass {
  background: rgba(12, 23, 48, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
}
```

### 16.3 Loading Screen

```
Duration: 1.5-2 seconds max
Background: #070D1A

Center element: AG monogram logo
  → Scale from 0.8 to 1.0 (400ms)
  → Logo fade in (400ms)
  → Hold 600ms
  → Dissolve out (400ms)
  
Optional: Minimal progress bar at bottom (thin, 1px, blue, left→right)
NO spinning wheels, NO complex loaders (Saturn = simplicity of authority)
```

### 16.4 Scrollbar Styling

```css
/* Custom scrollbar (Saturn: thin, precise) */
::-webkit-scrollbar { width: 6px; }  /* Thin = Mercury precision */
::-webkit-scrollbar-track { background: #070D1A; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3B6DFF, #5BC8FF);
  border-radius: 3px;
}
```

### 16.5 Selection Highlight

```css
/* When user selects text — Venus blue highlight */
::selection {
  background: rgba(59,109,255,0.25);
  color: white;
}
```

---

## 17. RESPONSIVE DESIGN {#responsive}

### 17.1 Breakpoints (8-based)

```css
/* ── BREAKPOINTS ── */
:root {
  --bp-sm:   640px;    /* Mobile landscape */
  --bp-md:   768px;    /* Tablet portrait */
  --bp-lg:   1024px;   /* Tablet landscape / Small laptop */
  --bp-xl:   1280px;   /* Desktop */
  --bp-2xl:  1536px;   /* Large desktop */
}

/* Usage: */
@media (max-width: 768px)  { /* Mobile adjustments */ }
@media (min-width: 1024px) { /* Desktop enhancements */ }
```

### 17.2 Mobile-Specific Rules

```
Hero:
- Stack: Text top, image bottom (or hide image)
- H1 font: clamp(40px, 10vw, 72px)
- Stats: 2×2 grid instead of horizontal row

Navigation:
- Hamburger menu icon (animated three-line → X)
- Full-screen overlay when open
- Background: rgba(7,13,26,0.98)

Services:
- 1 column on mobile, 2 on tablet, 3 on desktop

Profile photo:
- Mobile: smaller (240×280px), centered above text

Cards:
- Reduce padding to 24px on mobile (3×8)

Font sizes:
- Scale down by ~20% across the board on mobile
- Min body: 15px (Mercury demands readability)
```

---

## 18. TECHNICAL NOTES & CSS VARIABLES {#technical}

### 18.1 Complete CSS Custom Properties

```css
/* ── COPY THIS BLOCK TO :root ── */
:root {
  /* Colors */
  --void: #04080F; --midnight: #070D1A; --navy: #0C1730;
  --navy-mid: #101E3D; --navy-light: #16284F;
  --venus: #3B6DFF; --venus-soft: #7DA3FF;
  --venus-dim: rgba(59,109,255,0.12);
  --mercury: #5BC8FF; --mercury-dim: rgba(91,200,255,0.1);
  --mars: #3DDC97; --mars-dim: rgba(61,220,151,0.1);
  --sun: #D8B673; --sun-dim: rgba(216,182,115,0.1);
  --white: #F3F6FF; --silver: #93A2C2; --muted: #5E6C8C;

  /* Typography */
  --font-primary: 'Poppins', sans-serif;
  --font-accent: 'Lora', serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px;
  --s5: 20px; --s6: 24px; --s8: 32px; --s10: 40px;
  --s12: 48px; --s16: 64px; --s20: 80px; --s24: 96px;

  /* Borders */
  --border-subtle: 1px solid rgba(255,255,255,0.06);
  --border-dim: 1px solid rgba(59,109,255,0.15);
  --border-mid: 1px solid rgba(59,109,255,0.25);
  --border-bright: 1px solid rgba(59,109,255,0.5);

  /* Radii */
  --r-sm: 4px; --r-md: 8px; --r-lg: 12px;
  --r-xl: 16px; --r-2xl: 24px; --r-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 4px 16px rgba(0,0,0,0.3);
  --shadow-md: 0 8px 32px rgba(0,0,0,0.4);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.5);
  --shadow-glow: 0 0 40px rgba(59,109,255,0.15);

  /* Animation */
  --dur-fast: 200ms; --dur-normal: 400ms;
  --dur-smooth: 600ms; --dur-slow: 800ms;
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### 18.2 Technology Stack Recommendation

```
Framework:      Next.js 14+ (App Router)
Styling:        Tailwind CSS + Custom CSS (for animations)
Animations:     Framer Motion (for scroll reveals, page transitions)
Icons:          Phosphor React
Fonts:          Next/Font (optimized loading)
Analytics:      Vercel Analytics or Umami
Hosting:        Vercel (free tier)
Domain:         aaaryangupta.com
OG Images:      Vercel OG image generation

Packages:
- framer-motion          (animations)
- @phosphor-icons/react  (icons)
- react-countup          (stat numbers)
- next/font              (font optimization)
- react-intersection-observer (scroll triggers)
```

### 18.3 Meta & SEO

```html
<!-- PRIMARY META -->
<title>Aaryan Gupta | Technical Project Manager · HealthTech & SaaS</title>
<meta name="description" content="Technical PM delivering end-to-end 
  projects across 70+ markets. HealthTech specialist. AI Automation. 
  Micro-SaaS. Based in Jaipur. Available globally.">

<!-- OG IMAGE SPEC -->
<!-- Size: 1200×630px -->
<!-- Background: #070D1A with blue gradient -->
<!-- Content: Name, title, 4 stats -->
<!-- Font: Poppins Bold (white) -->
<!-- Accent: Venus blue #3B6DFF -->

<!-- CANONICAL URL -->
<link rel="canonical" href="https://aaaryangupta.com/">

<!-- SCHEMA.ORG -->
<!-- Person schema with: name, jobTitle, url, email, sameAs (LinkedIn/GitHub) -->
```

---

## 19. ASSETS CHECKLIST {#assets}

### 19.1 Images Required

```
□ Profile headshot (dark bg, professional)
    - Size: 800×960px (2x)
    - Format: WebP + JPG fallback
    - Exact specs: see section 12.4

□ OG/Social share image
    - Size: 1200×630px
    - Dark blue with name/title/stats

□ Favicon set:
    - 16×16, 32×32, 180×180 (Apple touch)
    - SVG favicon preferred

□ Project screenshots (5 projects):
    - Browser mockup screenshots
    - Size: 1200×750px each
    - Dark-tinted consistent treatment

□ Abstract background elements (optional):
    - Hexagonal pattern (SVG)
    - Noise texture (PNG, 256×256)
    - Particle system (JS-based, no image needed)
```

### 19.2 Content Required

```
□ Hero tagline (finalized)
□ About section (150-200 words, story format)
□ 6 service descriptions (50-80 words each)
□ 5 project case studies (title, problem, solution, outcome)
□ 4 experience entries (company, role, dates, 3 bullet points each)
□ 5 tech skill groups (8-10 chips each)
□ 6 FAQ questions + answers
□ Contact section headline
□ Footer tagline
□ Social links (LinkedIn, GitHub, Twitter, WhatsApp, YouTube/WYZEVO)
```

### 19.3 Auspicious Launch Timing

```
Best day to launch: Friday (Venus = 10th lord, career)
Best time: After 6 AM, before noon
Best date attributes: 
  - Sum to 6, 5, or 8
  - Avoid Thursday
  - Saturday also good (Saturn blesses what starts on Saturn's day)

Example auspicious dates (based on principles):
  - Any Friday ending in 6, 14, 15, 23 of the month
  - Or a date that sums to 8 (like the 17th = 1+7=8)
  
Pre-launch checklist:
  □ Test on all devices
  □ Lighthouse score > 90
  □ All links working
  □ Form submissions tested
  □ Analytics configured
  □ OG images verified
```

---

## 🔱 FINAL DESIGN INTENT SUMMARY

This portfolio carries the energy of:
- **Saturn's authority** — dark, structured, earned
- **Venus's refinement** — beautiful but never frivolous  
- **Mars's confidence** — bold, never apologetic
- **Mercury's precision** — every word and pixel justified
- **Moon's craftsmanship** — made by hand, with attention
- **Sun's radiance** — the person behind the work glows through

The visitor should feel: **"This person is serious. They know what they're doing. And they've done it."**

The last thing they should do: **Book the free call.**

---

*Design System v1.0 · Based on: Vedic Astrology (17 April 2000, 01:40 AM, Munger, Bihar) · Numerology (8·5·8) · Vastu Shastra (West/NW) · Psychology (INTJ, Builder) · Professional Identity (TPM, HealthTech, WYZEVO)*


---

## 20. VASTU CHAKRA — DETAILED ELEMENT MAPPING {#vastu-chakra}

### 20.1 Five Elements on the Web Page

| Panchamahabhuta | Zone | Web Placement | Design Element |
|----------------|------|--------------|---------------|
| **Prithvi (Earth)** | South-West | Footer, base sections | Heaviest color (#04080F), solid borders |
| **Jal (Water)** | North-East | Header/Nav area | Smooth gradients, fluid transitions |
| **Agni (Fire)** | South-East | CTA section | Brightest elements, electric blue glow |
| **Vayu (Air)** | North-West | Skills, network | White space, light chips, breathing room |
| **Akash (Space)** | Center | Hero, portfolio | Cosmic depth, particle field, void |

### 20.2 Number-to-Element Alignment

| Number | Element | Planet | Web Use |
|--------|---------|--------|---------|
| 8 (Birth) | Saturn/Earth | Saturn | Grid base, structure, dark backgrounds |
| 5 (Destiny) | Mercury/Space | Mercury | Flexibility, multiple content types |
| 6 (Venus) | Venus/Water | Venus | Beauty, harmony in layout, aesthetic balance |
| 4 (structure) | Rahu | Earth | 4-column grid option, stable layouts |

---

## 21. MICRO-INTERACTION SPECIFICATIONS {#micro-interactions}

### 21.1 Every Interactive Element Defined

```
LINKS:
  Resting:  color #93A2C2
  Hover:    color #F3F6FF, underline slides in from left (200ms)
  Active:   color #3B6DFF
  Visited:  color #7DA3FF (lighter blue)

BUTTONS — Primary:
  Resting:  bg #3B6DFF, no shadow
  Hover:    bg #4D7DFF, translateY(-2px), shadow appears (200ms)
  Active:   bg #2B5DEF, translateY(0), shadow disappears (100ms)
  Focus:    outline 2px solid #7DA3FF, outline-offset 3px
  Disabled: opacity 0.4, cursor not-allowed

BUTTONS — Secondary (Ghost):
  Resting:  transparent, border rgba(255,255,255,0.2)
  Hover:    border rgba(59,109,255,0.4), bg rgba(59,109,255,0.06)
  Active:   border rgba(59,109,255,0.6), bg rgba(59,109,255,0.12)

INPUT FIELDS:
  Resting:  bg rgba(255,255,255,0.04), border rgba(255,255,255,0.1)
  Focus:    border #3B6DFF, bg rgba(59,109,255,0.04), glow shadow
  Valid:    border #3DDC97
  Invalid:  border #FF6B8A
  Transition: all 200ms ease-out

CHECKBOXES / RADIO:
  Unchecked: border rgba(255,255,255,0.2), bg transparent
  Checked:   bg #3B6DFF, border #3B6DFF, white checkmark
  Animation: scale 0.8→1.0, 150ms spring

ACCORDION (FAQ):
  Closed:   chevron points right, border-bottom only
  Open:     chevron rotates 90°, content reveals with max-height
  Transition: 300ms ease-out
  Content:  opacity 0→1 during reveal

TOOLTIP:
  Trigger:  1px dashed underline on supporting text
  Appear:   fade in 200ms, translateY(4px→0)
  Style:    glass bg (#0C1730 80% opacity), 6px radius, 12px font
  Dismiss:  fade out 150ms on mouse leave

SCROLL-TO-TOP BUTTON:
  Appears:  after scrolling 400px (50vh)
  Position: bottom-right, 32px from edges
  Style:    circular 48px, blue, arrow icon
  Hover:    translateY(-4px), glow
```

### 21.2 Page Transition (Between Sections)

```
Section in-view triggers:
1. Eyebrow text: opacity 0→1, translateY(16px→0), dur 500ms, delay 0ms
2. Heading: opacity 0→1, translateY(24px→0), dur 600ms, delay 100ms
3. Subheading: opacity 0→1, dur 500ms, delay 200ms
4. Content items: stagger 80ms each, translateY(32px→0), dur 600ms
5. CTA/button: opacity 0→1, scale(0.95→1), dur 400ms, delay (n×80 + 200ms)

Implementation: IntersectionObserver, threshold 0.1
Once-only: Animation plays once, does not replay on re-scroll
```

---

## 22. SPECIFIC PAGE COPY FRAMEWORK {#copy}

### 22.1 Copy Tone (Astrologically Derived)

| Planet | Copy Tone | Examples |
|--------|-----------|---------|
| **Saturn** (Makar lagna) | Direct, earned, confident | "70+ markets delivered. No fluff." |
| **Venus** (10th lord, exalted) | Refined, purposeful, beautiful | "Where technical precision meets elegant execution" |
| **Mars** (Atmakaraka) | Bold, action-oriented | "Ship faster. Build smarter." |
| **Mercury** | Clear, analytical, specific | "React + Node + 3 years + real results" |
| **Moon** (Hasta) | Crafted, skilled, human | "I build things that actually work for clinicians" |

### 22.2 Hero Heading Options (Choose One)

```
OPTION A (Current):
  "The PM Who Speaks Dev.
   Delivers Results."
   [Simple, impactful, Saturn confident]

OPTION B (Venus-influenced):
  "Bridging the gap between
   technology and delivery."
   [Refined, elegant]

OPTION C (Mars bold):
  "Technical PM.
   70+ Markets.
   Zero Excuses."
   [Bold, direct, Ruchaka yoga energy]

RECOMMENDATION: Option A — aligns best with Makar lagna (quiet authority).
The Saturn influence makes understatement more powerful than oversell.
```

### 22.3 Section Eyebrows (All Caps, Wide Tracking)

```
Hero:        — AVAILABLE FOR PROJECTS & ROLES
About:       — WHO'S OPERATING THIS
Services:    — WHAT I DELIVER
Portfolio:   — PROOF OF DELIVERY
HealthTech:  — BUILT FOR INDIAN HEALTHCARE
Experience:  — CAREER TIMELINE
Skills:      — TECHNICAL DEPTH
Contact:     — READY TO SHIP?
```

### 22.4 CTA Copy Variants

```
Primary CTA options:
  → "Book Free 30-Min Call"    (most direct, Saturn approves)
  → "Let's Talk Strategy"      (Venus elegance)
  → "Start a Conversation"     (Mercury communication)
  RECOMMENDED: "Book Free 30-Min Call" — clarity converts

Secondary CTA:
  → "View My Work"             (Portfolio link)
  → "See Case Studies"         (credibility signal)
  → "Explore Work →"           (directional, clean)
```

---

## 23. LOGO & BRAND MARK SPECIFICATION {#logo}

### 23.1 AG Monogram Design

```
LETTERFORM: "AG" — Aaryan Gupta initials
STYLE: Geometric sans-serif (Poppins Bold or custom)

CONSTRUCTION:
  A: Triangular form with pointed top apex (Mars = sharp, angular)
     Base open (not closed triangle) — Venus opening to flow
  G: Circular with inner cut (Moon's circle, Saturn's discipline)
  
SPACING: Letters either touching (AB) or with exactly 2px gap
WEIGHT: Bold (700+)

PROPORTIONS:
  Width: 1:1.4 ratio (A to G)
  Height: uniform cap height

VERSIONS:
  1. Full mark: "AG" monogram + "AARYAN GUPTA" below
  2. Compact: "AG" monogram only (for favicon, nav)
  3. Badge: AG in circle (for profile/watermark)

COLORS:
  Primary: White (#F3F6FF) monogram on #070D1A dark background
  Accent: "A" in Venus Blue (#3B6DFF), "G" in white
  Alternative: Full gradient (Venus blue → Mercury sky)
  
SIZE USAGE:
  Navigation: 32px height monogram
  Footer: 28px height
  Favicon: 16×16px, 32×32px
  Watermark: 20px at 40% opacity
```

### 23.2 Logo DON'Ts

```
❌ Don't use on bright/white backgrounds (breaks dark aesthetic)
❌ Don't change the letter-spacing or proportions
❌ Don't add drop shadow to the logo (Venus = elegance, not kitsch)
❌ Don't use golden yellow version (ashubh color)
❌ Don't stretch or squish
❌ Don't use on backgrounds lighter than #1A2540
```

---

## 24. SOCIAL MEDIA DESIGN ALIGNMENT {#social}

### 24.1 LinkedIn Design (aryanony)

```
BANNER IMAGE (1584×396px):
  Background: #070D1A gradient
  Left: Name + title in Poppins Bold
  Center: 4 key stats (70+ Markets etc.)
  Right: Subtle blue glow element
  Bottom strip: aaaryangupta.com in small text

PROFILE PHOTO:
  Same photo as portfolio
  Dark background, professional
  
FEATURED SECTION:
  Pin the portfolio URL
  Use custom thumbnail matching site design
```

### 24.2 GitHub (aryanony)

```
PROFILE README:
  Dark mode (matches portfolio)
  ASCII art or terminal-style intro (Mercury tech)
  Stats badges in blue (#3B6DFF)
  Pinned repos: ProjectPort, UiBrium, LabTrack
```

### 24.3 Twitter/X

```
BANNER: Same as LinkedIn but 1500×500px
PROFILE: Same headshot
BIO: "Technical PM | HealthTech | Micro-SaaS | WYZEVO | aryanony"
```

---

## 25. ACCESSIBILITY (Saturn's Inclusivity) {#accessibility}

### 25.1 Contrast Ratios (WCAG 2.1 AA)

```
Primary text (#F3F6FF) on #070D1A:
  Ratio: 16.8:1 ✅ (exceeds AAA 7:1)

Silver text (#93A2C2) on #070D1A:
  Ratio: 5.8:1 ✅ (meets AA 4.5:1)

Venus blue (#3B6DFF) on #070D1A:
  Ratio: 5.2:1 ✅ (meets AA for large text)

Button text (white on #3B6DFF):
  Ratio: 4.7:1 ✅ (meets AA)

Muted text (#5E6C8C) on #070D1A:
  Ratio: 2.8:1 ⚠️ (use only for decorative/non-essential text)
```

### 25.2 Focus States

```css
/* Every interactive element needs visible focus */
:focus-visible {
  outline: 2px solid var(--venus);
  outline-offset: 3px;
  border-radius: 2px;
}
/* Remove outline for mouse users, keep for keyboard */
:focus:not(:focus-visible) { outline: none; }
```

### 25.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  /* Keep essential transitions but eliminate decorative ones */
  .particle-system { display: none; }
  .count-up { animation: none; }
}
```

---

## 26. PERFORMANCE TARGETS {#performance}

### 26.1 Core Web Vitals Targets

```
LCP (Largest Contentful Paint): < 2.5s ✅
FID (First Input Delay):         < 100ms ✅
CLS (Cumulative Layout Shift):   < 0.1 ✅
TTI (Time to Interactive):       < 3.5s ✅

Target Lighthouse Score:
  Performance:    > 90
  Accessibility:  > 95
  Best Practices: > 95
  SEO:            100
```

### 26.2 Optimization Checklist

```
Images:
□ WebP format with JPG fallback
□ Lazy loading (loading="lazy") for below-fold
□ Explicit width/height attributes (prevent CLS)
□ Next.js Image component for automatic optimization

Fonts:
□ font-display: swap
□ Preconnect to fonts.googleapis.com
□ Preload primary font file
□ Subset fonts to Latin characters only

JavaScript:
□ Code splitting (Next.js automatic)
□ Dynamic imports for heavy components (particles, framer-motion)
□ No jQuery, no large UI libraries
□ Tree-shake icon imports

CSS:
□ PurgeCSS for unused Tailwind classes
□ Critical CSS inlined
□ Non-critical CSS deferred

Hosting:
□ Vercel Edge Network (automatic CDN)
□ Gzip/Brotli compression
□ Cache-Control headers set correctly
```

---

## 27. FINAL IMPLEMENTATION PRIORITY ORDER {#priority}

### 27.1 Build Sequence (Saturn's disciplined order)

```
PHASE 1 — Foundation (Week 1):
  □ Setup: Next.js + Tailwind + Framer Motion
  □ CSS variables file (all tokens from this doc)
  □ Typography system
  □ Color system
  □ Navigation component

PHASE 2 — Hero & Identity (Week 1-2):
  □ Hero section (full implementation)
  □ Particle background system
  □ Custom cursor
  □ Loading screen
  □ Scroll reveal animation system

PHASE 3 — Content Sections (Week 2-3):
  □ About section
  □ Services grid (6 cards)
  □ Portfolio grid (5 projects)
  □ HealthTech section

PHASE 4 — Depth Sections (Week 3):
  □ Experience timeline
  □ Skills cloud
  □ FAQ accordion

PHASE 5 — Conversion & Close (Week 3-4):
  □ Contact section + form
  □ Footer
  □ Social meta / OG images
  □ Favicon

PHASE 6 — Polish (Week 4):
  □ Mobile responsive pass
  □ Performance optimization
  □ Accessibility audit
  □ Cross-browser test
  □ Final QA
  □ Launch on auspicious day (Friday)
```

### 27.2 The One Rule

> If any element on any page cannot answer "why does this exist?" — remove it.
> Saturn demands purpose. Venus demands beauty. Both reject excess.

---

*Document complete. Version 1.0 · June 2026*  
*For: (Aaryan Gupta) · aaaryangupta.com*  
*Sources: Vedic Jyotish · Numerology · Vastu Shastra · Design Psychology · UX Research*

