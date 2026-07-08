# AARYAN GUPTA — WEBSITE MASTER DOCUMENT
## Complete AI Build Guide | Portfolio & Personal Brand Website
### Version: 2025–2027 | Strategy: SEO + AEO + GEO + Conversion
### Aaryan Gupta 

---

> **INSTRUCTION TO AI BUILDING THIS WEBSITE:**
> This document is the single source of truth for building the personal portfolio and brand website of Aaryan Gupta , a Technical Project Manager specializing in Health-Tech, SaaS, and website coordination. Read every section completely before generating a single line of code or copy. Every decision — architecture, copy, schema, URL, heading, CTA — must follow this document exactly. No deviation. No assumptions. Ask if unclear. The goal is a world-class, conversion-optimized, AI-visible, SEO-dominant personal brand website that generates unlimited genuine freelance clients.

---

## ━━━ PART 1: IDENTITY & BRAND FOUNDATION ━━━

### 1.1 Core Identity

| Field | Value |
|-------|-------|
| **Public Brand Name** | Aaryan Gupta |
| **Legal Name (documents only)** ||
| **Primary Title** | Technical Project Manager |
| **Secondary Titles** | Health-Tech Specialist · AI & SaaS Product Coordinator · Website Maintenance Expert |
| **Location (Primary)** | Jaipur, India (target market) |
| **Location (Based)** | Noida, India |
| **Location (Secondary Market)** | Ahmedabad, India |
| **Location (Global)** | Remote / Worldwide |
| **Email** | aaryangupta.pm@gmail.com |
| **Phone** | +91 62056 50368 |
| **LinkedIn** | https://linkedin.com/in/aryanony/ |
| **Twitter/X** | https://x.com/aryanony/ |
| **Instagram** | https://instagram.com/aryanony/ |
| **GitHub** | https://github.com/aryanony |
| **Current Portfolio** | https://aryanony.github.io/portfolio |
| **Domain (Target)** | aaaryangupta.com (primary) + aaryanpm.com (redirect to primary) |

---

### 1.2 Brand Promise (Use Verbatim in Hero Section)

> **"I bridge complex technology with seamless execution — so healthcare, SaaS, and product teams ship faster, smarter, and at scale."**

---

### 1.3 One-Line Bio (For Schema, Meta, All Short Fields)

> Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, and website maintenance management for clinics, hospitals, and startups across India and globally.

---

### 1.4 Brand Voice & Tone

- **Tone:** Authoritative yet approachable. Precise. Never arrogant.
- **Style:** Professional + modern. Premium. Evidence-first.
- **Language:** English (primary). Occasional Hindi phrases acceptable in local pages only.
- **Power words to use:** Delivered, scaled, coordinated, reduced, accelerated, optimized, managed, shipped, led, deployed.
- **Words to avoid:** Fast, revolutionary, amazing, passionate, guru, ninja, rockstar, synergy.
- **Writing style:** Active voice. Short sentences. Data over adjectives. Always lead with outcomes.

---



## ━━━ PART 2: SITE ARCHITECTURE ━━━

### 2.1 Domain & Hosting

```
PRIMARY DOMAIN:   aaaryangupta.com
REDIRECT DOMAIN:  aaryanpm.com → aaaryangupta.com (301 redirect)
HOSTING:          Vercel (free tier) OR Cloudflare Pages
CDN:              Cloudflare (mandatory — free tier sufficient)
SSL:              Auto via Cloudflare (HTTPS mandatory from Day 1)
DOMAIN REGISTRY:  Namecheap (preferred) — register for minimum 5 years
```

**Performance Targets (Must Pass Before Launch):**
- LCP (Largest Contentful Paint): < 2.5 seconds
- FID / INP: < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Mobile PageSpeed Score: > 90
- Desktop PageSpeed Score: > 95
- All images: WebP format, max 100KB hero, max 50KB inline
- Lazy loading: All below-fold images and non-critical assets

---

### 2.2 Complete URL Structure

```
aaaryangupta.com/                                    → Homepage
aaaryangupta.com/about/                              → About (Entity Page)
aaaryangupta.com/services/                           → Services Overview
aaaryangupta.com/services/technical-project-management/   → Service Page 1
aaaryangupta.com/services/health-tech-consulting/         → Service Page 2
aaaryangupta.com/services/website-maintenance/            → Service Page 3
aaaryangupta.com/services/project-coordination/           → Service Page 4
aaaryangupta.com/case-studies/                       → Case Studies Index
aaaryangupta.com/case-studies/[project-slug]/        → Individual Case Studies
aaaryangupta.com/blog/                               → Blog Index
aaaryangupta.com/blog/[post-slug]/                   → Blog Posts
aaaryangupta.com/jaipur/                             → Jaipur Location Page
aaaryangupta.com/jaipur/technical-project-manager/  → Jaipur Service Page
aaaryangupta.com/ahmedabad/                          → Ahmedabad Location Page
aaaryangupta.com/ahmedabad/technical-project-manager/ → Ahmedabad Service Page
aaaryangupta.com/contact/                            → Contact / Book Call
aaaryangupta.com/sitemap.xml                         → Auto-generated XML sitemap
aaaryangupta.com/robots.txt                          → Robots file
```

**URL Rules:**
- All lowercase
- Hyphens only (never underscores)
- No trailing slashes inconsistency (pick one, stay consistent)
- No query parameters in public URLs
- Max 3 levels deep (/ level1 / level2 / level3 /)

---

### 2.3 Robots.txt Configuration

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /draft/
Disallow: /thank-you/
Disallow: /api/

Sitemap: https://aaaryangupta.com/sitemap.xml
```

**Critical:** Never disallow CSS, JavaScript, or image files. Googlebot must be able to render the full page.

---

### 2.4 Internal Linking Architecture (Hub & Spoke)

```
HOMEPAGE (Hub)
├── → /about/
├── → /services/
├── → /case-studies/
├── → /blog/
├── → /jaipur/
├── → /ahmedabad/
└── → /contact/

SERVICES (Secondary Hub)
├── → 2–3 related blog posts each
├── → Relevant case study
└── → /contact/

BLOG POSTS (Spokes)
├── → Relevant service page
├── → Relevant case study
└── → /contact/

LOCATION PAGES (Secondary Hub)
├── → Relevant service pages
├── → Local blog content
└── → /contact/
```

---

## ━━━ PART 3: PAGE-BY-PAGE CONTENT ARCHITECTURE ━━━

### 3.1 HOMEPAGE

**URL:** `aaaryangupta.com/`
**Target Keywords:** "Technical Project Manager India", "Technical Project Manager Jaipur", "Health-Tech Project Manager"
**Word Count:** 900–1,200 words
**Schema:** Person, Organization, FAQ, BreadcrumbList

#### TITLE TAG (Max 60 chars):
```
Aaryan Gupta — Technical Project Manager | Health-Tech | Jaipur
```

#### META DESCRIPTION (Max 160 chars):
```
Aaryan Gupta — Freelance Technical Project Manager specializing in Health-Tech & SaaS. 20+ projects delivered. Jaipur & Ahmedabad. Book a free 30-min consultation.
```

#### PAGE STRUCTURE (Build in This Exact Order):

**Section 1: Hero**
```
H1: "Technical Project Manager for Health-Tech & SaaS Teams"

Subheadline:
"I bridge complex technology with seamless execution — so healthcare,
SaaS, and product teams ship faster, smarter, and at scale."

CTA Buttons:
[Primary] Book a Free 30-Min Call → /contact/
[Secondary] See My Work → /case-studies/

Social Proof Bar (below buttons):
"Trusted by 20+ clinics, startups & founders across Jaipur, Ahmedabad & globally"
[3 client logo placeholders or 3 star-rating badges]
```

**Section 2: Problem Agitation**
```
H2: "Why Most Tech Projects Fail Before They Begin"

Content: 3 pain points in card format:
1. "Your developer and client speak different languages — deadlines slip"
2. "You're managing tech complexity without technical fluency — costly mistakes"
3. "No structured process = scope creep, delays, budget overruns"

Bridge: "That's where I come in."
```

**Section 3: Value Proposition**
```
H2: "What Aaryan Gupta Brings to Every Project"

4 differentiators with icons:
1. Technical Fluency — "I've built React apps, REST APIs, and deployed on Vercel.
   I speak developer language — meaning nothing gets lost in translation."
2. PM Discipline — "Sprint governance, milestone tracking, QA validation.
   Every project runs on process, not hope."
3. Health-Tech Specialization — "I understand clinical workflows, patient data
   sensitivity, and what doctors actually need from software."
4. Outcome-Oriented — "Not deliverables. Results. Every project ends with
   measurable impact you can put in a board deck."
```

**Section 4: Services Overview**
```
H2: "Services"

4 service cards linking to service pages:
1. Technical Project Management → /services/technical-project-management/
2. Health-Tech Consulting → /services/health-tech-consulting/
3. Website Maintenance → /services/website-maintenance/
4. Project Coordination → /services/project-coordination/
```

**Section 5: Featured Case Studies**
```
H2: "Selected Work"

3 case study cards with:
- Project name + sector tag
- 1-line result metric ("40% faster launch")
- Link to full case study
```

**Section 6: Testimonials**
```
H2: "What Clients Say"

3 testimonials with:
- Photo + Name + Title (e.g., "Dr. [Name], Cardiologist, Jaipur")
- Full testimonial text (3–5 sentences)
- Star rating (5/5)
- Review schema markup on each
```

**Section 7: Local Presence**
```
H2: "Serving Jaipur, Ahmedabad & Clients Globally"

Short paragraph mentioning:
- Jaipur health-tech ecosystem
- Ahmedabad startup + pharma sector
- Remote-first capability (70+ countries served via Oblinex)

Links:
→ Technical PM in Jaipur (/jaipur/)
→ Technical PM in Ahmedabad (/ahmedabad/)
```

**Section 8: CTA Section**
```
H2: "Ready to Stop Losing Time to Tech Delays?"

Copy: "Accepting 2 new clients this month. Book a free 30-minute
consultation — no sales pitch, just clarity on whether we're a fit."

[Book Your Free Call] → /contact/
Supporting text: "Free. No obligation. 30 minutes. Calendly link."
```

**Section 9: FAQ (AEO Target)**
```
H2: "Frequently Asked Questions"

Q1: Who is Aaryan Gupta?
A: Aaryan Gupta is a Technical Project Manager based in Jaipur, India...

Q2: What does a Technical Project Manager do?
A: A Technical PM bridges engineering teams and business stakeholders...

Q3: Does Aaryan Gupta work with doctors and clinics?
A: Yes — health-tech is a primary specialization...

Q4: Is Aaryan Gupta available for freelance projects?
A: Yes — currently accepting freelance and consulting engagements...

Q5: How can I contact Aaryan Gupta?
A: Via the contact form at aaaryangupta.com/contact, or directly at aaryangupta.pm@gmail.com

[Full FAQ schema markup on all 5 questions]
```

---

### 3.2 ABOUT PAGE

**URL:** `aaaryangupta.com/about/`
**Target Keywords:** "Aaryan Gupta Technical Project Manager", "Who is Aaryan Gupta"
**Word Count:** 1,200–1,800 words
**Schema:** Person (extended), Organization, SameAs

#### TITLE TAG:
```
About Aaryan Gupta | Technical Project Manager | Jaipur, India
```

#### META DESCRIPTION:
```
Learn about Aaryan Gupta — Technical Project Manager specializing in Health-Tech & SaaS. MCA graduate, developer-turned-PM. Based in Jaipur. 20+ projects delivered.
```

#### PAGE CONTENT STRUCTURE:

**Third-Person Entity Paragraph (GEO Critical — AI Models Pull This):**
```
Aaryan Gupta is a Technical Project Manager based in Jaipur, India,
specializing in health-tech digital transformation, SaaS project coordination,
and website maintenance management. With a Master of Computer Applications (MCA)
from AKTU University (2025) and a software engineering background spanning
React.js, Node.js, REST APIs, Firebase, and DevOps, Aaryan bridges the gap
between technical engineering teams and business stakeholders — ensuring
projects are delivered on time, within scope, and with measurable outcomes.

Aaryan Gupta has coordinated 20+ technology projects across healthcare, SaaS,
and e-commerce sectors, serving clients from Jaipur, Ahmedabad, and internationally
across 70+ markets. He is the developer of UiBrium (an open-source React UI
component library published on NPM) and ProjectPort (a full-stack client project
automation platform). His work sits at the intersection of clinical understanding
and technical execution — making him a trusted partner for doctors, clinic owners,
hospital administrators, and digital health startups across India.
```

**First-Person Story Section:**
```
H2: "From Keyboard to Coordination"

Story narrative:
- Started as a frontend developer (React, HTML/CSS/JS)
- Shipped real products: UiBrium (NPM) + ProjectPort (Vercel)
- Realized: the biggest project failures aren't technical — they're coordination failures
- Transitioned to PM at Oblinex: 70+ international markets, end-to-end lifecycle
- Mission: Apply technical + PM skills specifically to Indian healthcare
```

**Skills & Expertise Section:**
```
H2: "Core Competencies"

Technical PM Skills:
- Agile & Scrum (Sprint Planning, Backlog Management, Retrospectives)
- Risk & Dependency Management
- QA & Release Management (Play Store, App Store, Web)
- Stakeholder Reporting & Communication
- Product Lifecycle Management
- MVP Scoping & Feature Prioritization
- DevOps & CI/CD Awareness

Technical Fluency:
- Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS
- Backend: Node.js, Express.js, MongoDB, Firebase, REST APIs
- PM Tools: Notion, Jira, Trello, Asana, GitHub Projects, Miro
- DevOps: Git, GitHub, Vercel, Linux, Docker (conceptual)
- AI: Prompt Engineering, OpenAI/Claude API, LLM Integration
- Marketing: SEO, Google Analytics 4, Search Console, Keyword Research

Domain Expertise:
- Health-Tech & Digital Health
- SaaS Product Delivery
- Website Maintenance & Management
- Web3 / Blockchain (prior experience)
```

**Education Section:**
```
H2: "Education"

MCA — Lloyd Institute of Engineering & Technology (AKTU), 2023–2025, CGPA 7.31
BCA — R.D & D.J College, Munger University, 2019–2023, 72.36%
```

**Experience Timeline:**
```
H2: "Professional Experience"

Current: Associate Project Manager — Oblinex Pvt. Ltd. (May 2025–Present)
Prior: Frontend Web3 Developer Intern — MyDigiShell (April 2025–February 2026)
Prior: Digital Marketer & E-Commerce Strategist — Elipact Enterprises
Prior: Web Developer & WordPress Specialist — Ipistis Technologies
```

**Signature Projects:**
```
H2: "Signature Projects"

1. UiBrium — Open-Source React UI Component Library
   Live: uibrium.vercel.app | NPM: npmjs.com/package/uibrium

2. ProjectPort — Client Project Automation Platform
   Live: projectsport.vercel.app

3. Aryanony AI Bot — Conversational AI Assistant (Botpress + LLM)
```

---

### 3.3 SERVICE PAGE — TECHNICAL PROJECT MANAGEMENT

**URL:** `aaaryangupta.com/services/technical-project-management/`
**Word Count:** 1,800–2,500 words
**Schema:** Service, FAQ, BreadcrumbList

#### TITLE TAG:
```
Technical Project Management Services | Aaryan Gupta | Freelance PM India
```

#### META DESCRIPTION:
```
Technical Project Management by Aaryan Gupta — Agile delivery, sprint governance, QA, and release management for Health-Tech and SaaS teams across India & globally.
```

#### PAGE CONTENT:
- H1: "Technical Project Management Services"
- What it is (definition — AEO target)
- Who it's for (clinics, startups, SaaS companies, digital agencies)
- What's included (detailed service breakdown)
- The process (how Aaryan works: Discovery → Sprint → QA → Launch → Handoff)
- Tools used (Jira, Notion, GitHub, Asana, Loom)
- Pricing/engagement models (retainer / per-project / hourly)
- 1 relevant testimonial
- 2–3 links to related blog posts
- FAQ section (5–8 Q&As) with FAQ schema
- CTA: Book a consultation

---

### 3.4 SERVICE PAGE — HEALTH-TECH CONSULTING

**URL:** `aaaryangupta.com/services/health-tech-consulting/`
**Word Count:** 1,800–2,500 words
**Schema:** Service, FAQ, BreadcrumbList

#### TITLE TAG:
```
Health-Tech Project Management | Aaryan Gupta | Clinics & Hospitals India
```

#### TARGET AUDIENCE COPY (use these exact framings):
- "For doctors who want to digitize their clinic without tech chaos"
- "For hospital administrators coordinating a new patient management system"
- "For health-tech startups that need a PM who understands clinical workflows"
- "For medical professionals building telemedicine apps, EMR systems, or patient portals"

#### KEY SECTIONS:
- Why health-tech projects fail (evidence-first)
- What Aaryan brings specifically to healthcare projects (HIPAA-awareness, clinical workflow understanding, patient data sensitivity)
- Case study snippets (anonymized if needed)
- Doctor-specific FAQ (e.g., "Do I need to know technology to work with a PM?")
- Local signals: mention Jaipur hospitals, Rajasthan Health Department, Ahmedabad pharma sector

---

### 3.5 SERVICE PAGE — WEBSITE MAINTENANCE

**URL:** `aaaryangupta.com/services/website-maintenance/`
**Word Count:** 1,500–2,000 words
**Schema:** Service, FAQ, BreadcrumbList

#### TITLE TAG:
```
Website Maintenance Services India | Aaryan Gupta | Clinics & SaaS Teams
```

#### PRICING PACKAGES (show these clearly):
```
Package 1 — Essential Maintenance: ₹8,000/month
  - Monthly uptime monitoring
  - Security updates & patches
  - Content updates (up to 5/month)
  - Monthly report

Package 2 — Professional Maintenance: ₹15,000/month
  - Everything in Essential
  - Performance optimization
  - SEO health check
  - Priority support (24hr response)
  - Google Analytics monthly review

Package 3 — Premium Maintenance: ₹25,000/month
  - Everything in Professional
  - Unlimited content updates
  - Emergency support (4hr response)
  - Quarterly strategy review
  - Analytics + conversion recommendations
```

---

### 3.6 LOCATION PAGE — JAIPUR

**URL:** `aaaryangupta.com/jaipur/`
**Word Count:** 1,000–1,500 words
**Schema:** LocalBusiness, Person, FAQ

#### TITLE TAG:
```
Technical Project Manager in Jaipur | Aaryan Gupta | Health-Tech Expert
```

#### REQUIRED LOCAL SIGNALS (mention all of these naturally):
- Jaipur tech startup ecosystem
- RIICO industrial areas
- Rajasthan Health Department digital initiatives
- SMS Hospital, Sawai Man Singh Hospital (reference for context)
- Jaipur's growing health-tech scene
- IMA Jaipur branch
- JLN Marg, Vaishali Nagar, Malviya Nagar (local neighborhoods for geo-signals)

#### EMBED: Google Maps showing Jaipur with LocalBusiness schema

---

### 3.7 LOCATION PAGE — AHMEDABAD

**URL:** `aaaryangupta.com/ahmedabad/`
**Word Count:** 1,000–1,500 words
**Schema:** LocalBusiness, Person, FAQ

#### REQUIRED LOCAL SIGNALS:
- GIFT City (Gujarat International Finance Tec-City)
- Ahmedabad pharma sector
- Gujarat's health-tech ecosystem
- AMTS, SG Highway corridor
- Civil Hospital Ahmedabad (context reference)
- iSPIRT Gujarat presence

---

### 3.8 CONTACT / BOOK PAGE

**URL:** `aaaryangupta.com/contact/`
**Schema:** ContactPage, Person

#### TITLE TAG:
```
Book a Free Consultation | Aaryan Gupta | Technical Project Manager
```

#### PAGE ELEMENTS (in order):
1. H1: "Let's Talk About Your Project"
2. Subheadline: "30 minutes. Free. No sales pitch — just clarity."
3. What to expect on the call:
   - We understand your project scope and challenges
   - I share how I've solved similar problems
   - We decide together if there's a fit
   - You leave with at least one actionable insight
4. **Calendly embed** (primary booking mechanism)
5. Photo + short bio (builds trust at the critical CTA moment)
6. 2 testimonials (social proof near CTA)
7. FAQ:
   - "Is the consultation really free?" → Yes, 100%.
   - "What if I'm not ready to hire yet?" → Still reach out. Knowledge exchange always helps.
   - "How quickly will I hear back?" → Within 24 hours.
8. Alternative contact:
   - Email: aaryangupta.pm@gmail.com
   - LinkedIn: linkedin.com/in/aryanony/
   - WhatsApp link (if applicable)

---

### 3.9 BLOG STRUCTURE

**URL Pattern:** `aaaryangupta.com/blog/[post-slug]/`
**Schema per post:** Article, Person (author), FAQ, BreadcrumbList

#### Standard Blog Post Template:

```
[TITLE TAG: Primary keyword + "| Aaryan Gupta" — max 60 chars]
[META DESCRIPTION: 150–160 chars, keyword + CTA + differentiator]

H1: [Post Title with primary keyword]

Author box (top): Photo + "Aaryan Gupta | Technical Project Manager | Last updated: [date]"

[TL;DR Box — 3-5 bullet summary — Google AI Overview pulls this]

H2: [First major section — answer the primary question directly in 40-60 words here]
[Then expand with detail]

H2: [Second major section]
[Include 1 external authoritative link per major section]

H2: [Third major section]
[Include your original observation: "In my 20+ projects, I've found..."]

H2: People Also Ask
Q: [Question from PAA research]
A: [Direct 40-60 word answer]
[Repeat 5-8 times — FAQ schema on all]

H2: Conclusion

[Author bio box at bottom: photo + credentials + links]

[CTA: "Need a technical PM for your project? Book a free 30-min consultation."]
```

#### First 6 Blog Posts to Publish (Priority Order):

| Priority | Title | Target Keyword | Type |
|----------|-------|----------------|------|
| 1 | "What Every Doctor Should Know Before Hiring a Tech Project Manager" | "hire technical project manager doctor" | Doctor-targeted |
| 2 | "Technical Project Manager in Jaipur: What to Expect & How to Hire" | "technical project manager Jaipur" | Local SEO |
| 3 | "Why Hospital Websites Fail: A Technical PM's Honest Analysis" | "why hospital websites fail" | AEO target |
| 4 | "What is a Technical Project Manager? (Simple Explanation)" | "what is technical project manager" | Featured snippet |
| 5 | "How to Launch a Telemedicine App in India: A PM's Complete Guide" | "telemedicine app India" | Health-Tech |
| 6 | "IT Project Management Services in Ahmedabad: Complete Buyer's Guide" | "IT project manager Ahmedabad" | Local SEO |

---

## ━━━ PART 4: SEO TECHNICAL SPECIFICATIONS ━━━

### 4.1 Complete On-Page SEO Rules

**Title Tags:**
- Max 60 characters
- Primary keyword FIRST
- Brand name (Aaryan Gupta) at END
- Every page has a UNIQUE title — zero duplicates
- Pattern: `[Primary Keyword] | [Secondary Context] | Aaryan Gupta`

**Meta Descriptions:**
- 150–160 characters exactly
- Include: primary keyword + unique value prop + CTA
- Every page unique
- No generic descriptions

**Heading Hierarchy:**
- ONE H1 per page — includes primary keyword naturally
- H2s = major sections (include secondary keywords)
- H3s = supporting points under H2s
- NEVER skip heading levels (H1→H3 without H2 is invalid)
- Headings must be descriptive, not decorative

**Image Optimization:**
- Filename: `aaryan-gupta-technical-project-manager-jaipur.webp` (descriptive)
- Alt text: Describe the image + include keyword naturally
- Hero image: max 100KB in WebP
- Inline images: max 50KB in WebP
- Lazy load all below-fold images
- Headshot alt: "Aaryan Gupta - Technical Project Manager Jaipur India"

**Internal Links:**
- Minimum 3–5 internal links per page
- Use descriptive anchor text (not "click here" or "read more")
- Every blog post → links to 1 service page + 1 case study
- Every service page → links to 2–3 blog posts + contact page

---

### 4.2 Keyword Master List

**PRIMARY KEYWORDS (Homepage + Service Pages):**
```
technical project manager India
technical project manager freelance
hire technical project manager
health tech project manager India
IT project coordinator freelance
website maintenance services India
technical PM for healthcare startup
```

**LOCAL KEYWORDS (Location Pages + Blog):**
```
technical project manager Jaipur
IT project manager Ahmedabad
freelance project manager Rajasthan
health tech consultant Jaipur
website maintenance Jaipur
technical PM Ahmedabad
digital health Jaipur
```

**DOCTOR/HEALTH-TECH KEYWORDS (Health-Tech Service Page + Blog):**
```
digital transformation for clinics
tech project manager for hospitals
health tech coordinator for doctors
clinic website management services
hospital IT project management
EMR software project manager
telemedicine app project coordinator
clinic app development India
patient management system PM
digital health transformation India
```

**LONG-TAIL / AEO KEYWORDS (FAQ + Blog):**
```
who is Aaryan Gupta technical project manager
what does a technical project manager do
how to hire a PM for a health-tech startup
technical project manager rates India 2025
best technical project manager for health tech in India
freelance technical PM for medical startups
how much does technical project management cost India
what is the difference between technical PM and IT PM
```

**BRANDED KEYWORDS (About Page + Schema):**
```
Aaryan Gupta
Aaryan Gupta technical project manager
Aaryan Gupta Jaipur
Aaryan Gupta health tech
Aaryan Gupta portfolio
```

---

### 4.3 Complete Schema Markup Code

#### Person Schema (Homepage + About — MANDATORY):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aaryan Gupta",
  "jobTitle": "Technical Project Manager",
  "description": "Aaryan Gupta is a freelance Technical Project Manager specializing in Health-Tech, SaaS project coordination, and website maintenance in India. Based in Jaipur, serving clients globally.",
  "url": "https://aaaryangupta.com",
  "image": "https://aaaryangupta.com/images/aaryan-gupta-technical-project-manager.jpg",
  "email": "aaryangupta.pm@gmail.com",
  "telephone": "+916205650368",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://linkedin.com/in/aryanony/",
    "https://x.com/aryanony/",
    "https://instagram.com/aryanony/",
    "https://github.com/aryanony",
    "https://aryanony.github.io/portfolio"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Aaryan Gupta Consulting"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Lloyd Institute of Engineering & Technology (AKTU)"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Munger University"
    }
  ],
  "areaServed": ["Jaipur", "Ahmedabad", "India", "Global"],
  "knowsAbout": [
    "Technical Project Management",
    "Health-Tech",
    "SaaS",
    "Agile",
    "Scrum",
    "Website Maintenance",
    "React.js",
    "Node.js",
    "Digital Transformation",
    "EMR Software",
    "Telemedicine"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Technical Project Manager",
    "occupationLocation": {
      "@type": "City",
      "name": "Jaipur"
    }
  }
}
```

#### Service Schema (Each Service Page):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical Project Management",
  "serviceType": "Technical Project Management",
  "provider": {
    "@type": "Person",
    "name": "Aaryan Gupta",
    "url": "https://aaaryangupta.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "description": "End-to-end technical project management for health-tech and SaaS teams. Includes sprint governance, QA, release management, and stakeholder coordination.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "priceRange": "₹15,000 - ₹80,000"
  }
}
```

#### LocalBusiness Schema (Location Pages):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aaryan Gupta — Technical Project Manager",
  "description": "Freelance Technical Project Manager in Jaipur specializing in health-tech digital transformation and SaaS project coordination.",
  "url": "https://aaaryangupta.com/jaipur/",
  "telephone": "+916205650368",
  "email": "aaryangupta.pm@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "priceRange": "₹₹",
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": ["Jaipur", "Rajasthan", "India"],
  "sameAs": ["https://linkedin.com/in/aryanony/"]
}
```

#### FAQ Schema Template (Every Blog Post + Service Page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Aaryan Gupta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation and SaaS project coordination. He has managed 20+ technology projects across healthcare, SaaS, and e-commerce sectors."
      }
    },
    {
      "@type": "Question",
      "name": "What services does Aaryan Gupta offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aaryan Gupta offers Technical Project Management, Health-Tech Consulting, Website Maintenance, and Project Coordination services to clinics, hospitals, SaaS companies, and startups across India and globally."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Aaryan Gupta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a free 30-minute consultation at aaaryangupta.com/contact, email at aaryangupta.pm@gmail.com, or connect on LinkedIn at linkedin.com/in/aryanony/"
      }
    }
  ]
}
```

---

## ━━━ PART 5: GEO (GENERATIVE ENGINE OPTIMIZATION) ━━━

### 5.1 Writing Style for AI Visibility

**Every page must include:**
1. A direct 3-sentence answer to the page's primary question (AI extracts this)
2. Third-person entity references (especially About page — AI quotes these)
3. Original quotable statements — 2–3 per blog post
4. Statistics from credible sources (McKinsey, WHO, NASSCOM) with attribution
5. Encyclopedic About paragraph (written exactly as AI would describe you)

**Quotable Statements to Embed in Blog Posts:**
```
"A technical project manager doesn't just manage tasks — they translate
business outcomes into engineering language."

"The most dangerous phrase in any tech project: 'We'll figure it out later.'
That's where timelines die."

"Clinics don't fail at technology. They fail at coordination. That's the gap I fill."

"A PM who can't read code can't challenge a developer's estimate.
That's how projects go 3x over budget."
```

### 5.2 GEO Entity Signals Checklist

Before website launch, complete ALL of these:
- [ ] Wikidata entry created for "Aaryan Gupta (Technical Project Manager)"
- [ ] Crunchbase profile created with website link
- [ ] Google Business Profile verified (Jaipur primary)
- [ ] Clutch.co profile with minimum 3 reviews
- [ ] GoodFirms profile complete
- [ ] LinkedIn fully optimized (feeds Perplexity/ChatGPT)
- [ ] Bing Webmaster Tools — sitemap submitted
- [ ] All social profiles linked from website (sameAs in Person schema)

---

## ━━━ PART 6: ANALYTICS & TOOLS SETUP ━━━

### 6.1 Mandatory Day-1 Setup

```
1. Google Analytics 4 (GA4)
   → Tracking ID embedded in <head> of every page
   → Goals: Contact form submission, Calendly booking click, Email click

2. Google Search Console (GSC)
   → Domain property verified (DNS method preferred)
   → Sitemap submitted: aaaryangupta.com/sitemap.xml
   → Monitor weekly: Impressions, Clicks, CTR, Average Position

3. Bing Webmaster Tools
   → Separate account from Google
   → Sitemap submitted
   → Critical for ChatGPT browsing visibility

4. Google Business Profile (GBP)
   → Business Name: "Aaryan Gupta — Technical Project Manager"
   → Category: Management Consulting (primary) / IT Services (secondary)
   → Phone, Address, Website all matching exactly

5. Cloudflare (if using Cloudflare Pages)
   → Enable IndexNow plugin — instant indexing notification
   → Enable Web Analytics (privacy-friendly, no cookie banner needed)
```

### 6.2 Monthly KPI Targets

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Organic Sessions/Month | 200+ | 800+ | 3,000+ |
| Keyword Rankings (Top 10) | 5 | 20+ | 50+ |
| Domain Authority (Ahrefs DR) | 15+ | 25+ | 40+ |
| Referring Domains | 10+ | 30+ | 80+ |
| Google Reviews (GBP) | 5 | 15 | 30+ |
| Inbound Inquiries/Month | 2–3 | 5–8 | 15–25 |
| Core Web Vitals | All Green | All Green | All Green |

---

## ━━━ PART 7: CONVERSION ARCHITECTURE ━━━

### 7.1 CTA Rules (Non-Negotiable)

- **ONE primary CTA per page** — no exceptions
- **Primary CTA everywhere:** "Book a Free 30-Min Call"
- **CTA destination:** Calendly embed at /contact/
- **Secondary CTA (blog posts only):** Email signup / lead magnet download
- **CTA button color:** Gold (#C9A84C) — always stands out from dark background
- **Never:** "Submit", "Click here", "Learn more" as CTA text

### 7.2 Lead Magnet

**Create this resource to capture emails:**

Title: "The Clinic Digitization Checklist: 20 Things to Do Before Hiring a Tech Partner"
Format: PDF, 2 pages, branded with Aaryan Gupta design
Placement: Homepage hero section + every blog post footer + /contact/ sidebar
Email tool: Mailchimp (free up to 500) or Brevo (free up to 300/day)

### 7.3 Testimonial Display Rules

- Minimum 3 testimonials on homepage
- Each testimonial: Photo + Full Name + Title (Dr./Founder/etc.) + Company + City
- Star rating: 5/5 displayed visually
- Review schema markup on EVERY testimonial
- Service pages: 1 matching testimonial (match doctor testimonial to health-tech page)

### 7.4 Trust Signals (Place Near Every CTA)

```
In order of impact:
1. Professional headshot (visible on every page)
2. "Trusted by 20+ clients across Jaipur & Ahmedabad" (verified metric)
3. Verified review badges (Google 5★, Clutch 5★)
4. Specific outcome metrics ("40% faster delivery", "₹0 delays in 18/20 projects")
5. Media logos if any (Inc42, YourStory — add after first PR mention)
6. Security badge (SSL, data protection — critical for health-tech audience)
```

---

## ━━━ PART 8: PRE-LAUNCH CHECKLIST ━━━

### Complete Before Going Live

**Technical:**
- [ ] Domain aaaryangupta.com purchased and configured
- [ ] SSL/HTTPS active and verified
- [ ] Robots.txt configured (block admin/draft/thank-you)
- [ ] XML sitemap generated and tested
- [ ] Core Web Vitals: all green (LCP<2.5s, CLS<0.1, INP<200ms)
- [ ] Mobile responsive test: 3 different devices
- [ ] All images: WebP format, compressed, descriptive filenames, alt text
- [ ] No broken internal links
- [ ] Canonical tags on all pages
- [ ] 404 page exists and is branded

**SEO:**
- [ ] Unique title tag on every page (max 60 chars)
- [ ] Unique meta description on every page (150–160 chars)
- [ ] H1 on every page (one per page only)
- [ ] Person schema on homepage + about (validated via Rich Results Test)
- [ ] Service schema on all service pages
- [ ] FAQ schema on all service + blog pages
- [ ] LocalBusiness schema on Jaipur + Ahmedabad pages
- [ ] BreadcrumbList schema on all inner pages
- [ ] Schema validated: https://validator.schema.org/

**Analytics:**
- [ ] GA4 installed and tracking
- [ ] GSC verified — sitemap submitted
- [ ] Bing Webmaster Tools — sitemap submitted
- [ ] Calendly booking goal tracked in GA4

**Content:**
- [ ] Homepage copy complete (900+ words)
- [ ] About page complete (1,200+ words, third-person entity paragraph included)
- [ ] Minimum 2 service pages live (1,500+ words each)
- [ ] Contact/booking page live with Calendly embed working
- [ ] Minimum 2 blog posts published
- [ ] Lead magnet PDF created + email capture working

**Social Proof:**
- [ ] Minimum 1 testimonial on homepage
- [ ] All social profile links working
- [ ] Google Business Profile verified and linked

**Entity Signals:**
- [ ] Wikidata entry created
- [ ] Crunchbase profile created and linked
- [ ] Clutch.co profile created

---

## ━━━ APPENDIX: BACKGROUND & EXPERIENCE DATA ━━━

### Full Professional History (Source of Truth for All Copy)

**Current Role:**
Associate Project Manager — Oblinex Pvt. Ltd. (May 2025–Present)
- Managing end-to-end technical project delivery across 70+ international markets
- Full lifecycle: onboarding → sprint governance → infrastructure setup → QA → Play Store/App Store releases
- Coordinating cross-functional developer teams via ticketing and task assignment
- VPS provisioning, Ubuntu server setup, domain configuration, SSL installation (Hostinger)
- Driving post-delivery account expansion, upsell revenue, client retention
- Markets: India, UAE, UK, USA, Europe, Southeast Asia, 60+ more

**Prior Role:**
Frontend Web3 Developer Intern — MyDigiShell (April 2025–February 2026, Remote)
- Coordinated multi-project Web3 frontend delivery across 11 months
- React.js, Tailwind CSS, Web3.js, Blockchain Wallet Integration
- Mobile-first QA, cross-browser compatibility, performance optimization

**Prior Role:**
Digital Marketer & E-Commerce Strategist — Elipact Enterprises (Nov 2021–Mar 2022)
- SEO + content marketing for Shopify and WordPress e-commerce platforms
- Landing page builds, branding, KPI tracking, competitive analysis

**Prior Role:**
Web Developer & WordPress Specialist — Ipistis Technologies (Aug–Nov 2021)
- Responsive, SEO-optimized WordPress websites, brief-to-launch ownership

**Key Projects:**
1. UiBrium — React UI Component Library (NPM published, open-source)
   URL: uibrium.vercel.app | npmjs.com/package/uibrium
2. ProjectPort — Client Project Automation Platform (Full-stack, live)
   URL: projectsport.vercel.app
3. Aryanony AI Bot — Conversational AI (Botpress + LLM API)

**Education:**
- MCA — Lloyd Institute (AKTU), Greater Noida, 2023–2025, CGPA 7.31
- BCA — R.D & D.J College, Munger University, 2019–2023, 72.36%

**Tech Stack:**
React.js, HTML5, CSS3, JS (ES6+), Tailwind CSS, Bootstrap, Node.js, Express.js, MongoDB, MySQL, Firebase, REST APIs, Flutter (basics), PHP/Laravel (basics), Git, GitHub, Vercel, Linux, Docker (conceptual), Web3.js, IPFS, Notion, Jira, Trello, Asana, Figma, Canva, Prompt Engineering, OpenAI/Claude API, Botpress, SEO, GA4, Search Console

**Certifications:**
- Virtual Internship — Web & Mobile Development (MERN Stack) | IBM / IBMMooc (2026)
- Digital Application Fundamentals STEM | nasscom / MeitY (2026)
- JavaScript Algorithms & Data Structures | freeCodeCamp
- Responsive Web Design & Front End Development Libraries | freeCodeCamp
- Cryptocurrency & Blockchain | The Digital Adda

---

*This document is the complete source of truth for building aaaryangupta.com.*
*Version: 2025–2027 | For AI build use only — do not publish this file publicly.*
*All strategies synthesized from Aaryan Gupta's complete SEO/AEO/GEO/SMO masterplan.*
