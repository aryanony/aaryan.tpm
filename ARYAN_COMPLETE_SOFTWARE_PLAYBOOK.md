# AARYAN GUPTA — COMPLETE MICRO-SaaS & LOCAL SOFTWARE BUSINESS PLAYBOOK
### Internal Strategy Document · Version 1.0 · July 2026
### Confidential — For Personal Use Only

---

## TABLE OF CONTENTS

| # | Section | Page Focus |
|---|---------|-----------|
| 1 | [Executive Summary](#1-executive-summary) | What this document is & how to use it |
| 2 | [Business Model Architecture](#2-business-model-architecture) | How your business actually works |
| 3 | [Local-First Philosophy](#3-local-first-philosophy) | Why local software is your biggest advantage |
| 4 | [Deployment Models](#4-deployment-models) | Local / Hybrid / Web — when to use what |
| 5 | [Complete Technology Stack Guide](#5-complete-technology-stack-guide) | Every stack explained in depth |
| 6 | [Vibe Coding Workflow](#6-vibe-coding-workflow) | How to build fast using AI tools |
| 7 | [Document Frameworks](#7-document-frameworks) | SRS / BRD / PRD / Wireframe / BDD templates |
| 8 | [Healthcare Product Portfolio](#8-healthcare-product-portfolio) | 6 healthcare software products with full docs |
| 9 | [SMB Product Portfolio](#9-smb-product-portfolio) | 5 SMB software products with full docs |
| 10 | [Automation Services Portfolio](#10-automation-services-portfolio) | AI automation products you resell |
| 11 | [Licensing & Code Delivery Model](#11-licensing--code-delivery-model) | How to protect and deliver your code |
| 12 | [White-Labeling System](#12-white-labeling-system) | How to make every product brandable |
| 13 | [Revenue & Pricing Strategy](#13-revenue--pricing-strategy) | Pricing tiers, upsells, projections |
| 14 | [Go-To-Market Strategy](#14-go-to-market-strategy) | Where and how to find clients |
| 15 | [Risk Analysis & Mitigation](#15-risk-analysis--mitigation) | What can go wrong and how to prevent it |
| 16 | [Priority Order & Execution Plan](#16-priority-order--execution-plan) | What to build first, second, third |
| 17 | [Final Conclusion](#17-final-conclusion) | The 3-line answer to everything |

---

## 1. EXECUTIVE SUMMARY

### What You Are Building

You are building a **portfolio of local-first, one-time-purchase software systems** — primarily for healthcare businesses (clinics, labs, doctors) and general SMBs (traders, agencies, wellness centers). The same code is resold to multiple clients without them knowing. You only provide the code. Clients handle all infrastructure. No subscription. No monthly cost. No server from your side.

### The Core Business Rules (Never Break These)

```
RULE 1 → You sell CODE only. Not hosting. Not servers. Not APIs. Not domains.
RULE 2 → One-time payment. Lifetime usage. No subscription model. Ever.
RULE 3 → Same product resold to unlimited clients. Internal knowledge only.
RULE 4 → If client needs server/domain (web-facing apps), THEY pay for it.
RULE 5 → Local software (desktop/mobile) = client pays NOTHING extra. Ever.
RULE 6 → Always upsell maintenance after every delivery.
RULE 7 → Build once. Sell 100 times. Customize per client from admin panel.
```

### What "Local-First" Means For You

> A **local-first** software runs entirely on the client's own computer or phone. No internet required. No server required. No monthly bill. Data lives on their machine. This is your biggest competitive advantage against every SaaS tool in the market.

**Example:** A pathology lab buys your LabTrack Pro. You install it on their Windows PC. It runs forever. No internet needed. No Razorpay. No AWS. No nothing. Just the PC that already exists in their lab. The only cost they ever paid was your one-time software fee.

---

## 2. BUSINESS MODEL ARCHITECTURE

### The 3-Layer Income System

```
┌─────────────────────────────────────────────────────┐
│                  LAYER 1 — SOFTWARE                  │
│   Build once → Resell to 50–200 clients             │
│   One-time fee: ₹5,000 – ₹40,000 per client        │
│   Zero marginal cost per new sale                    │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│               LAYER 2 — AUTOMATION                   │
│   Build n8n/Make workflow → Resell template          │
│   Setup fee: ₹5,000 – ₹25,000 per client           │
│   Client uses their own Make/Zapier/n8n account      │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│            LAYER 3 — MAINTENANCE + PM                │
│   Monthly retainer per client: ₹2,000 – ₹8,000      │
│   10 clients × ₹4,000 = ₹40,000/month recurring    │
│   Also: Technical PM, consulting, audits             │
└─────────────────────────────────────────────────────┘
```

### Client-Facing Positioning (What They Hear)

| Client Type | What You Say | Reality |
|-------------|-------------|---------|
| Non-tech offline business | "I've built this custom system for your clinic. One-time payment, yours forever." | Pre-built resellable product |
| Tech-savvy / startup | "I have a ready-made professional system. You buy the license, I set it up for you." | Same pre-built product |
| Agency buying for clients | "You can white-label this. Add your branding. Deploy for your clients." | Same product, agency license |
| All clients post-delivery | "I can maintain and manage your system for a small monthly fee." | Easy recurring income |

### Revenue Per Client (Full Stack)

```
Software License:         ₹10,000 – ₹30,000   (one-time)
Setup / Installation:     ₹2,000  – ₹5,000    (one-time)
Customization (branding): ₹1,000  – ₹3,000    (one-time)
Training Session:         ₹1,000  – ₃,000    (one-time)
Monthly Maintenance:      ₹2,000  – ₹8,000    (recurring)
─────────────────────────────────────────────────────
First Year per Client:    ₹40,000 – ₹1,30,000
```

---

## 3. LOCAL-FIRST PHILOSOPHY

### Why Local-First is Your Competitive Moat

| Feature | Your Local Software | Cloud SaaS (Practo, Zoho) |
|---------|-------------------|--------------------------|
| Monthly cost to client | ₹0 | ₹999 – ₹5,000/month |
| Internet required | ❌ No | ✅ Yes |
| Data ownership | ✅ Client owns data | ❌ SaaS company owns |
| Setup complexity | Low | High |
| Works in power cut | ✅ Yes (UPS) | ❌ No |
| Price objection | None (one-time) | Always (monthly drain) |
| Customizable branding | ✅ Full | ❌ Limited |
| Client dependency on you | Low | None |
| Your recurring cost | ₹0 | ₹0 |

### The 4 Types of Clients You'll Serve

```
TYPE 1 → PURE LOCAL CLIENT
         Example: A pathology lab, a small clinic
         Needs: Windows desktop app
         Server: NO
         Domain: NO
         Internet: Optional
         Stack: Tauri + React + SQLite

TYPE 2 → LOCAL + MOBILE CLIENT  
         Example: Wellness center, salon
         Needs: Desktop + staff mobile access on local WiFi
         Server: NO (runs on one PC, staff access via local IP)
         Domain: NO
         Internet: NO
         Stack: PWA (React) served from local Node.js

TYPE 3 → LOCAL + CLIENT-FACING
         Example: Lab with patient report portal
         Needs: Desktop software + online patient access
         Server: YES (client pays ₹500–1000/month hosting)
         Domain: YES (client pays ₹800/year)
         Internet: YES (for patient-facing only)
         Stack: React + Node.js + MySQL on VPS

TYPE 4 → FULL WEB
         Example: Multi-branch hospital, agency
         Needs: Web app accessible from anywhere
         Server: YES (client pays)
         Domain: YES (client pays)
         Internet: YES
         Stack: React + Node.js + MySQL
```

---

## 4. DEPLOYMENT MODELS

### Model A — Pure Local Desktop (Best for Most Healthcare Clients)

```
[Your Code] → [Client's Windows PC]
                      │
               SQLite Database
               (stored on PC)
                      │
              Print / PDF / Export
              (local printer / USB)

No internet. No server. No domain.
Works forever after installation.
```

**Best For:** Small clinics, pathology labs, dental clinics, small factories, shops, salons

**Client pays:** ₹0 extra after purchase

---

### Model B — Local Network (Multiple Devices, One Location)

```
[Your Code] → [Client's Main PC] ← Admin Server
                      │
              Local WiFi Network
                      │
        ┌─────────────┼─────────────┐
   [Staff PC 1]  [Staff PC 2]  [Mobile Phone]
   (Browser)     (Browser)     (Browser - PWA)

No internet. No domain. Runs on local WiFi.
All devices connect via local IP (192.168.x.x)
```

**Best For:** Wellness centers, restaurants, clinics with multiple staff, labs with reception + lab room

**Client pays:** ₹0 extra — uses existing WiFi router

**Tech:** Node.js server (runs on their PC) + React PWA (opens in browser on any device)

---

### Model C — Web-Hosted (Patient/Client Facing Features)

```
[Your Code] → [Client's VPS Hosting]
                      │
               MySQL Database
                      │
         ┌────────────┼────────────┐
    [Admin Panel] [Staff Panel] [Patient Portal]
    (clinic)      (lab tech)    (any internet)

Internet required. Client buys domain + hosting.
Best for patient report access, online booking.
```

**Best For:** Diagnostic labs (patient report QR), clinics with online appointment booking

**Client pays:** ~₹1,000–2,000/month (their hosting + domain)

---

### Model D — Mobile App (Android First)

```
[Your Flutter App] → [Android Phone]
                           │
                    Local SQLite DB
                           │
              Optional: Sync to Google Drive
              (client's own Google account)

No server. Works offline.
Syncs data when internet available.
```

**Best For:** Field sales teams, delivery tracking, attendance marking on phone

---

## 5. COMPLETE TECHNOLOGY STACK GUIDE

> This is the most important section. Read it fully before building anything.

---

### STACK 1 — TAURI + REACT + SQLITE
#### **(Recommended for Desktop Local Apps)**

```
┌─────────────────────────────────────┐
│           TAURI v2 DESKTOP          │
├──────────────┬──────────────────────┤
│   FRONTEND   │      BACKEND         │
│   React.js   │    Tauri Rust Core   │
│   TypeScript │    (handles OS ops)  │
│   TailwindCSS│                      │
│   Shadcn/UI  │    SQLite Database   │
│              │    (via tauri-plugin) │
└──────────────┴──────────────────────┘
         ↓ Build Output
    Windows: .msi / .exe installer
    Mac:     .dmg installer
    Linux:   .AppImage
```

**Why Tauri over Electron:**
- App size: 3–10 MB (vs Electron's 100–200 MB)
- RAM usage: 20–40 MB (vs Electron's 200–500 MB)
- Startup speed: Instant (vs Electron's 3–5 seconds)
- Security: Better (Rust core, minimal attack surface)
- Performance: Native-level speed

**Dependencies (all free, open source):**
```
tauri@2.x          → Desktop wrapper (Rust)
@tauri-apps/api    → JS bridge to Rust
tauri-plugin-sql   → SQLite integration
tauri-plugin-pdf   → PDF generation
react@18           → UI framework
typescript@5       → Type safety
tailwindcss@3      → Styling
shadcn/ui          → Component library
react-query@5      → State + data management
react-router-dom@6 → Navigation
recharts           → Charts/graphs
react-hook-form    → Forms
zod                → Validation
date-fns           → Date handling
jspdf              → Additional PDF control
```

**SQLite Schema Example (LabTrack):**
```sql
CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  mobile TEXT,
  age INTEGER,
  gender TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER REFERENCES patients(id),
  test_name TEXT,
  result TEXT,
  normal_range TEXT,
  unit TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Tauri Command Example (Rust → JS bridge):**
```rust
// src-tauri/src/main.rs
#[tauri::command]
async fn get_patients(db: State<'_, DbPool>) -> Result<Vec<Patient>, String> {
    let patients = sqlx::query_as::<_, Patient>("SELECT * FROM patients ORDER BY created_at DESC")
        .fetch_all(&db.pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(patients)
}
```

**Build Command:**
```bash
npm run tauri build     # Creates installer for current OS
npm run tauri dev       # Development mode with hot reload
```

**Admin Panel Config (feature toggles):**
```typescript
// src/config/features.ts
export const FEATURES = {
  patientPortal: true,
  doctorCommission: true,
  homeCollection: false,
  whatsappShare: false,    // Only if client has API
  gstBilling: true,
  multiBranch: false,
}
```

---

### STACK 2 — ELECTRON + REACT + SQLITE
#### **(Alternative Desktop — Easier to Build, Heavier)**

```
┌──────────────────────────────────┐
│         ELECTRON DESKTOP         │
├──────────────┬───────────────────┤
│   FRONTEND   │    MAIN PROCESS   │
│   React.js   │    Node.js        │
│   TypeScript │    better-sqlite3 │
│   TailwindCSS│    (SQLite DB)    │
└──────────────┴───────────────────┘
         ↓ Build Output
    Windows: .exe / .msi
    Mac:     .dmg
    Linux:   .deb / .AppImage
```

**When to Use Electron Instead of Tauri:**
- You want faster development (no Rust knowledge needed)
- Existing Node.js ecosystem tools needed
- Client has modern hardware (RAM not a concern)
- Quick MVP needed in days, not weeks

**Key Dependencies:**
```
electron@28           → Desktop wrapper
electron-builder      → Packaging & installer
better-sqlite3        → SQLite (synchronous, fast)
react@18              → UI
tailwindcss@3         → Styling
electron-store        → Settings/config storage
pdfkit                → PDF generation
node-printer          → Direct printing
```

---

### STACK 3 — REACT PWA + INDEXEDDB
#### **(Cross-Platform: Browser + Mobile + Local Network)**

```
┌─────────────────────────────────────────┐
│         REACT PROGRESSIVE WEB APP        │
├─────────────────────────────────────────┤
│  Runs in Chrome/Firefox/Safari/Edge      │
│  Installable on Android home screen     │
│  Works OFFLINE with Service Workers     │
│  Data in IndexedDB (browser storage)    │
└─────────────────────────────────────────┘
         ↓ Two Modes
    MODE 1: Local Network
            → Node.js server on client's PC
            → All devices connect via WiFi IP
            → No internet needed

    MODE 2: Hosted (if client wants web access)
            → Deploy to VPS
            → Client buys domain
            → Accessible from anywhere
```

**Key Dependencies:**
```
react@18              → UI framework
vite@5                → Build tool (fast)
tailwindcss@3         → Styling
workbox               → Service workers (offline)
dexie.js              → IndexedDB wrapper (simple API)
pwa-asset-generator   → Icons / splash screens
idb                   → IndexedDB helper
```

**Offline Sync Strategy:**
```typescript
// Queue actions when offline, sync when online
const syncQueue = new Dexie('SyncQueue');
syncQueue.version(1).stores({
  pending: '++id, action, payload, timestamp'
});

// When online, process queue
navigator.serviceWorker.addEventListener('sync', (event) => {
  event.waitUntil(processPendingSync());
});
```

---

### STACK 4 — REACT + NODE.JS + MYSQL
#### **(Full Web App — When Client Needs Online Access)**

```
[React Frontend]  ←HTTP/REST→  [Node.js + Express]
                                         │
                                    [MySQL DB]
                                    (client's VPS)

Client hosts this on their own VPS (Hostinger, DigitalOcean)
Client buys their own domain
You only provide the code
```

**Key Dependencies:**
```
FRONTEND:
react@18              → UI
vite@5                → Build
tailwindcss@3         → Styling
axios                 → HTTP client
react-query@5         → Server state
react-router-dom@6    → Routing
recharts              → Charts

BACKEND:
express@4             → Web framework
mysql2                → MySQL connection
sequelize             → ORM (or use raw queries)
jsonwebtoken          → JWT auth
bcryptjs              → Password hashing
multer                → File uploads
node-cron             → Scheduled tasks
nodemailer            → Email (client's SMTP)
puppeteer/pdfkit      → PDF generation
qrcode                → QR codes
socket.io             → Real-time (for queue systems)
```

---

### STACK 5 — FLUTTER + SQLITE
#### **(Mobile Apps — Android + iOS from One Codebase)**

```
┌──────────────────────────────────┐
│         FLUTTER APP              │
├──────────────────────────────────┤
│  Dart language                   │
│  Material Design 3 UI            │
│  SQLite (via sqflite package)    │
│  Hive (for fast local storage)   │
│  Works 100% offline              │
└──────────────────────────────────┘
         ↓ Build Output
    Android: .apk / .aab
    iOS:     .ipa (Mac needed to build)
```

**Key Flutter Packages:**
```yaml
dependencies:
  flutter: sdk
  sqflite: ^2.3.0          # SQLite database
  hive: ^2.2.3              # Fast local storage
  hive_flutter: ^1.1.0      # Hive for Flutter
  provider: ^6.1.0          # State management
  go_router: ^13.0.0        # Navigation
  pdf: ^3.10.0              # PDF generation
  printing: ^5.12.0         # Print support
  fl_chart: ^0.66.0         # Charts
  intl: ^0.19.0             # Formatting
  shared_preferences: ^2.2.0 # Simple key-value storage
  image_picker: ^1.0.7      # Camera/gallery
  path_provider: ^2.1.0     # File system paths
  permission_handler: ^11.0.0 # OS permissions
```

---

### STACK DECISION MATRIX

| Requirement | Tauri | Electron | PWA | React+Node | Flutter |
|-------------|-------|----------|-----|-----------|---------|
| Windows desktop | ✅ Best | ✅ Good | ⚠️ Browser only | ❌ | ❌ |
| Android mobile | ❌ | ❌ | ✅ Good | ❌ | ✅ Best |
| iOS (Apple) | ❌ | ❌ | ✅ Partial | ❌ | ✅ Best |
| No internet needed | ✅ | ✅ | ✅ | ❌ | ✅ |
| No server needed | ✅ | ✅ | ✅ LAN mode | ❌ | ✅ |
| Multi-device LAN | ⚠️ Hard | ⚠️ Hard | ✅ Best | ✅ | ❌ |
| Patient web portal | ❌ | ❌ | ✅ | ✅ Best | ❌ |
| Build speed | Medium | Fast | Fast | Medium | Medium |
| App size | 3–10 MB | 100–200 MB | 0 MB | N/A | 20–40 MB |
| Vibe coding friendly | Medium | ✅ High | ✅ High | ✅ High | Medium |

---

### RECOMMENDED STACK PER PRODUCT

| Product | Primary Stack | Reason |
|---------|-------------|--------|
| LabTrack Pro | React+Node (Model C) | Patient portal needs web |
| RecallMD | Electron + SQLite | Local cron jobs + WhatsApp |
| TokenQ | React PWA (LAN) | Multi-screen, real-time display |
| WellnessDesk | Electron or PWA | Local + mobile staff access |
| RxPad Pro | Tauri + SQLite | Pure local, PDF printing |
| CareReview | React+Node | QR links, Google redirect |
| QuoteFlow | Electron + SQLite | Local, PDF, WhatsApp share |
| SmartProof | React+Node (Web) | Client portal = web needed |
| ShiftMate | Electron + SQLite | Local attendance, payroll PDF |
| LeadBoard | React PWA | Mobile sales team access |

---

## 6. VIBE CODING WORKFLOW

### What is Vibe Coding?

> Using AI tools (Claude, Cursor, Windsurf, GitHub Copilot) to generate entire features, modules, and systems by describing what you want in natural language. You are the architect. AI is the coder.

### Your AI Tool Stack

```
PRIMARY CODING:
├── Cursor IDE          → Best for large codebase, tab completion
├── Windsurf IDE        → Alternative to Cursor, good context
└── Claude (claude.ai)  → Architecture, planning, complex logic

CODE GENERATION HELPERS:
├── v0.dev             → React UI component generation (Vercel)
├── bolt.new           → Full-stack app scaffolding
└── GitHub Copilot     → In-editor suggestions

DESIGN TO CODE:
├── Figma + Anima      → Figma designs → React code
└── Uizard             → Wireframe → React code

DOCUMENTATION:
└── Claude             → SRS, BRD, PRD, user stories generation
```

### The Vibe Coding Process (Step-by-Step)

```
STEP 1 — ARCHITECTURE PROMPT (Claude)
Give Claude this prompt structure:
"I am building a [Product Name] for [Target User].
It is a [local desktop / web app] using [Stack].
Here are the features: [list features]
Create a complete project structure with:
- Folder structure
- Database schema (SQLite/MySQL)
- All React component names
- All API endpoints (if web)
- Feature toggle system"

──────────────────────────────────────────────

STEP 2 — SCAFFOLD GENERATION (Bolt.new or Cursor)
Use the architecture output to prompt:
"Generate the complete boilerplate for [stack]
with this folder structure: [paste structure]
Include: routing, auth, sidebar nav, dark/light mode"

──────────────────────────────────────────────

STEP 3 — MODULE-BY-MODULE BUILDING (Cursor)
Build one module at a time:
"Build the Patient Registration module with:
- Form fields: name, age, gender, mobile, address
- Validation with Zod
- SQLite insert query
- Success toast notification
- Auto-fill next available patient ID"

──────────────────────────────────────────────

STEP 4 — UI POLISH (v0.dev → Copy to project)
"Create a professional dashboard card component showing:
- Today's patient count
- Pending reports count
- Revenue today
- Quick action buttons
Use TailwindCSS, clean minimal design"

──────────────────────────────────────────────

STEP 5 — PDF GENERATION (Claude → Cursor)
"Generate a PDF report template for a pathology lab
with these fields: [list fields]
Using PDFKit/Puppeteer.
Include: lab logo placeholder, QR code space,
doctor signature line, normal range table"

──────────────────────────────────────────────

STEP 6 — TESTING + BUG FIX (Cursor)
Select buggy code → "Fix this bug: [describe bug]"
Or: "Write Jest tests for this component: [paste code]"

──────────────────────────────────────────────

STEP 7 — WHITE-LABEL PACKAGING
"Create an admin settings panel where the owner can:
- Upload their logo
- Set business name, address, phone
- Choose primary color theme
- These settings apply to all PDFs and UI"
```

### Effective Prompting for Healthcare Software

```
PROMPT TEMPLATE FOR MODULES:
───────────────────────────
"I am building [Module Name] for [LabTrack Pro / RecallMD / etc].
Tech stack: [React + Electron + SQLite / etc]

CONTEXT:
- Target user: [Lab technician / Doctor / Reception]
- This module handles: [what it does]
- Data it works with: [table names / fields]

BUILD THIS:
1. [Component 1 with details]
2. [Component 2 with details]
3. [Database operations needed]
4. [Validation rules]
5. [Error states]

CONSTRAINTS:
- Non-technical user must understand it
- Mobile responsive
- Follow existing TailwindCSS classes
- Use existing components from [shadcn/ui]"
```

### Vibe Coding Rules (What Not to Do)

```
❌ DON'T ask AI to build the entire app in one prompt → breaks quality
❌ DON'T skip type definitions → AI generates buggy untyped code
❌ DON'T forget to tell AI your database schema → wrong queries
❌ DON'T use AI-generated code without reading it → security holes
❌ DON'T build features without testing with real users first

✅ DO build module by module
✅ DO provide context (stack, schema, existing code) every time
✅ DO test each module before moving to next
✅ DO read and understand every generated function
✅ DO use TypeScript (AI is much better with types)
```

---

## 7. DOCUMENT FRAMEWORKS

> These are the actual templates you will use for every product. Fill these before building anything.

---

### 7.1 BRD — BUSINESS REQUIREMENTS DOCUMENT

**Purpose:** Defines WHAT the business needs. Written from the client's perspective. NOT technical.

```markdown
# BRD — [PRODUCT NAME]
Version: 1.0 | Date: [Date]

## 1. BUSINESS PROBLEM STATEMENT
[1–2 sentences describing the exact pain point]
Example: "Pathology labs in India track referral doctor commissions 
in paper registers, causing disputes, errors, and lost business 
relationships."

## 2. BUSINESS OBJECTIVE
[What success looks like for the client]
- Objective 1: [measurable outcome]
- Objective 2: [measurable outcome]
- Objective 3: [measurable outcome]

## 3. STAKEHOLDERS
| Role | Name/Title | Interest |
|------|-----------|---------|
| Primary User | Lab Owner | Full access, reports |
| Secondary User | Lab Technician | Data entry |
| External User | Referring Doctor | Commission view |
| External User | Patient | Report access |

## 4. BUSINESS RULES
[Rules that MUST be followed, non-negotiable]
- Rule 1: [e.g., "Doctor commission % is configurable per test"]
- Rule 2: [e.g., "Patient data cannot be deleted once entered"]
- Rule 3: [e.g., "PDF reports must carry lab logo and stamp"]

## 5. SCOPE
### In Scope:
- [Feature 1]
- [Feature 2]

### Out of Scope (future):
- [Feature not in MVP]

## 6. SUCCESS METRICS
| Metric | Target |
|--------|--------|
| Time to register patient | < 60 seconds |
| Time to generate report PDF | < 10 seconds |
| Monthly commission disputes | 0 |

## 7. ASSUMPTIONS & CONSTRAINTS
- Client has Windows 7/10/11 PC
- No internet required for core operations
- Client has laser printer for report printing
```

---

### 7.2 PRD — PRODUCT REQUIREMENTS DOCUMENT

**Purpose:** Defines HOW the product works. Written from the user's perspective. Bridges BRD and SRS.

```markdown
# PRD — [PRODUCT NAME]
Version: 1.0 | Date: [Date]

## 1. PRODUCT VISION
[One sentence: "This product helps [USER] to [GOAL] by [METHOD]"]

## 2. USER PERSONAS

### Persona 1: Primary User
- Name: [e.g., "Ramesh — Lab Owner"]
- Age: 45
- Tech level: Basic (uses smartphone, WhatsApp)
- Main goal: Know today's revenue and pending reports at a glance
- Frustration: "I have to call my technician to know if a report is ready"

### Persona 2: Secondary User
- Name: [e.g., "Kavita — Lab Technician"]  
- Age: 28
- Tech level: Medium (uses Excel occasionally)
- Main goal: Enter test results quickly without errors
- Frustration: "Typing patient name and test info is repeated work"

## 3. USER STORIES (Prioritized)

### MUST HAVE (MVP)
| # | As a... | I want to... | So that... | Priority |
|---|---------|-------------|-----------|---------|
| US01 | Lab Owner | Register a new patient in < 60 seconds | I don't slow down the queue | P0 |
| US02 | Lab Tech | Enter test results with normal range reference | I don't need paper charts | P0 |
| US03 | Lab Owner | Generate a PDF report with QR code | Patient can access digitally | P0 |
| US04 | Lab Owner | See referral doctor commission automatically | I stop manual calculations | P0 |

### SHOULD HAVE (v1.1)
| # | As a... | I want to... | Priority |
|---|---------|-------------|---------|
| US05 | Doctor | Log in and see my commission statement | P1 |
| US06 | Patient | Scan QR on my report to view it digitally | P1 |

### NICE TO HAVE (v2.0)
| # | As a... | I want to... | Priority |
|---|---------|-------------|---------|
| US07 | Lab Owner | See peak hours chart for staff planning | P2 |
| US08 | Lab Owner | Export monthly data to Excel | P2 |

## 4. FEATURE REQUIREMENTS

### Feature: Patient Registration
- Fields: Name (required), Mobile (required), Age, Gender, Address, Referring Doctor
- Auto-generate Patient ID (format: LAB-YYYY-XXXX)
- Duplicate mobile number warning (not block)
- Search existing patient by name/mobile

### Feature: Test Entry
- Select tests from pre-defined catalog (admin configurable)
- Enter result value
- System shows normal range (from catalog)
- Flag: Normal / Abnormal / Critical
- Save with timestamp + technician name

## 5. ACCEPTANCE CRITERIA
[For each major feature, define what "done" means]

Feature: PDF Report Generation
- AC1: PDF generates in < 5 seconds
- AC2: PDF contains: lab logo, patient info, test results, normal ranges, QR code
- AC3: QR code links to patient's report portal page
- AC4: PDF is saved locally and can be printed directly

## 6. NON-FUNCTIONAL REQUIREMENTS
- Performance: App opens in < 3 seconds
- Reliability: No crash or data loss on power failure (SQLite WAL mode)
- Usability: New technician can use core features after 30 min training
- Compatibility: Windows 7 SP1 and above
- Security: Admin password required on startup

## 7. MVP SCOPE (What to build in Week 1–4)
Week 1: Patient registration + test catalog management
Week 2: Test result entry + PDF generation
Week 3: QR code + commission calculator
Week 4: Dashboard + doctor login portal
```

---

### 7.3 SRS — SOFTWARE REQUIREMENTS SPECIFICATION

**Purpose:** The technical blueprint. Describes every function the system must perform.

```markdown
# SRS — [PRODUCT NAME]
Version: 1.0 | Date: [Date]

## 1. SYSTEM OVERVIEW
[Architecture diagram description, deployment model, tech stack]

## 2. FUNCTIONAL REQUIREMENTS

### FR-01: User Authentication
- FR-01.1: System shall support role-based login (Admin, Staff, Doctor, Patient)
- FR-01.2: Admin can create/delete/modify staff accounts
- FR-01.3: Passwords stored as bcrypt hash (cost factor 10)
- FR-01.4: Session expires after 8 hours of inactivity
- FR-01.5: Failed login attempts > 5 shall lock account for 10 minutes

### FR-02: Patient Registration
- FR-02.1: System shall accept: name, mobile, age, gender, address, referring doctor
- FR-02.2: System shall auto-generate unique Patient ID (format: LAB-YYYY-NNNN)
- FR-02.3: Mobile number shall be validated (10-digit Indian mobile)
- FR-02.4: System shall search existing patients by name or mobile in real-time
- FR-02.5: System shall warn (not block) on duplicate mobile number
- FR-02.6: All fields shall be stored in SQLite `patients` table

### FR-03: Test Management
[... continue for each feature]

## 3. NON-FUNCTIONAL REQUIREMENTS

### NFR-01: Performance
- NFR-01.1: Application startup time < 3 seconds on i3 processor
- NFR-01.2: Patient search results appear within 500ms for databases up to 50,000 patients
- NFR-01.3: PDF generation completes within 5 seconds
- NFR-01.4: SQLite queries execute within 100ms for standard operations

### NFR-02: Reliability
- NFR-02.1: SQLite WAL (Write-Ahead Logging) mode enabled to prevent corruption
- NFR-02.2: Auto-backup to separate file daily at 11 PM
- NFR-02.3: System shall handle power failure gracefully (no data corruption)

### NFR-03: Security
- NFR-03.1: Passwords shall never be stored in plaintext
- NFR-03.2: SQLite database file shall be stored in OS app data directory (not user-accessible easily)
- NFR-03.3: License key validation on first launch

### NFR-04: Usability
- NFR-04.1: All primary actions reachable within 2 clicks from dashboard
- NFR-04.2: Error messages shall be in plain language (not error codes)
- NFR-04.3: System shall work at 1366×768 screen resolution minimum

## 4. DATABASE SCHEMA

### Table: patients
```sql
CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id TEXT UNIQUE NOT NULL,     -- LAB-2026-0001
  name TEXT NOT NULL,
  mobile TEXT,
  age INTEGER,
  gender TEXT CHECK(gender IN ('Male','Female','Other')),
  address TEXT,
  referring_doctor_id INTEGER REFERENCES doctors(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

[Continue for all tables...]

## 5. API SPECIFICATION (if web app)
[REST endpoint definitions with request/response]

## 6. INTERFACE REQUIREMENTS

### UI-01: Navigation
- Sidebar navigation, always visible on desktop
- Current page highlighted
- Sections: Dashboard | Patients | Tests | Reports | Doctors | Settings

### UI-02: Forms
- Single-column layout on mobile, two-column on desktop
- Required fields marked with * in red
- Save button always visible (sticky footer on mobile)
- Success/error toasts for all actions

## 7. CONSTRAINTS
- Must run on Windows 7 SP1 minimum
- No internet connection required for core features
- Database size < 2GB (SQLite limit consideration)
- Single-user by default (multi-user via LAN mode optional module)
```

---

### 7.4 WIREFRAME STANDARDS

**Purpose:** Define the visual layout and navigation flow before development. You can use tools like Figma, Excalidraw, or even paper sketches. This section defines the standards to follow.

#### Wireframe Conventions

```
LAYOUT RULES:
────────────────────────────────────────
1. Sidebar navigation (left, 240px wide) — desktop
2. Top bar: Business name + logo + user info + logout
3. Main content area: padding 24px
4. Cards for grouping: rounded-lg, shadow-sm, white bg
5. Primary action button: top-right of each section
6. Tables: sortable headers, row actions (edit/delete/view)
7. Mobile: bottom navigation bar (max 5 items)

COLOR SYSTEM (per product):
────────────────────────────────────────
Healthcare products → Blue/Teal theme (#0EA5E9 primary)
SMB products → Indigo/Purple theme (#6366F1 primary)
Wellness products → Green/Sage theme (#10B981 primary)

TYPOGRAPHY:
────────────────────────────────────────
Font: Inter (Google Fonts, free)
Headings: font-semibold
Body: font-normal
Monospace (IDs, codes): font-mono
```

#### Screen Layout Template

```
┌─────────────────────────────────────────────────┐
│ [Logo]  Business Name            [User] [Logout] │  ← Top Bar (56px)
├──────────┬──────────────────────────────────────┤
│          │  Page Title          [+ New Patient]  │  ← Page Header (60px)
│  NAV     ├──────────────────────────────────────┤
│          │  [Search Bar]    [Filter] [Export]    │  ← Action Bar
│ Dashboard│  ┌──────────────────────────────────┐│
│ Patients │  │ TABLE / FORM / CHART / CARDS     ││  ← Main Content
│ Tests    │  │                                  ││
│ Reports  │  │                                  ││
│ Doctors  │  └──────────────────────────────────┘│
│ Settings │                                      │
│          │  [Pagination: Prev | 1 2 3 | Next]   │  ← Footer
└──────────┴──────────────────────────────────────┘
   240px         Remaining width
```

#### Dashboard Card Pattern

```
┌────────────────────┐  ┌────────────────────┐
│ 📋 Today's Patients│  │ ⏳ Pending Reports  │
│                    │  │                    │
│       47           │  │       12           │
│                    │  │                    │
│ ↑ 8 from yesterday │  │ Oldest: 2 hrs ago  │
└────────────────────┘  └────────────────────┘

┌────────────────────┐  ┌────────────────────┐
│ 💰 Today's Revenue │  │ 👨‍⚕️ Top Referrer   │
│                    │  │                    │
│    ₹12,450         │  │  Dr. R. Sharma     │
│                    │  │  23 patients/month │
│ Goal: ₹15,000      │  │                    │
└────────────────────┘  └────────────────────┘
```

---

### 7.5 BDD — BEHAVIOR DRIVEN DEVELOPMENT

**Purpose:** Define how each feature should behave from the user's perspective. Uses Gherkin syntax (Given/When/Then). Helps you test and also helps AI generate tests.

```gherkin
# Feature: Patient Registration

Feature: Patient Registration
  As a lab receptionist
  I want to register new patients quickly
  So that I can process their tests without delay

  Background:
    Given the receptionist is logged into the system
    And is on the "New Patient" page

  Scenario: Successfully register a new patient
    Given I enter name "Rahul Kumar"
    And I enter mobile "9876543210"
    And I enter age "34" and gender "Male"
    And I select referring doctor "Dr. Sharma"
    When I click "Save Patient"
    Then a new patient ID "LAB-2026-0047" is generated
    And the patient appears in today's patient list
    And a success toast shows "Patient registered successfully"

  Scenario: Prevent registration with empty name
    Given I leave the name field empty
    When I click "Save Patient"
    Then an error shows "Patient name is required"
    And no patient is created

  Scenario: Warn on duplicate mobile number
    Given a patient with mobile "9876543210" already exists
    When I try to register another patient with same mobile
    Then a warning dialog shows "A patient with this mobile already exists. Continue?"
    And I can choose to proceed or cancel

  Scenario: Search existing patient
    Given patients exist in the system
    When I type "Rahul" in the search bar
    Then matching patients appear in dropdown within 500ms
    And I can click a result to pre-fill the form
```

```gherkin
# Feature: Commission Calculation

Feature: Referral Doctor Commission Calculation
  As a lab owner
  I want automatic commission calculation
  So that I never have a dispute with doctors

  Scenario: Auto-calculate commission on report finalization
    Given Dr. Sharma has 20% commission on CBC test (price ₹300)
    When a CBC test for a Dr. Sharma patient is marked "Complete"
    Then ₹60 is added to Dr. Sharma's commission ledger
    And the dashboard shows Dr. Sharma's updated pending amount

  Scenario: Generate monthly commission statement PDF
    Given it is the end of month
    And Dr. Sharma has ₹4,500 in earned commissions
    When I click "Generate Statement" for Dr. Sharma
    Then a PDF is generated with itemized commission list
    And total payable amount is shown as ₹4,500
    And the PDF has lab letterhead and date

  Scenario: Doctor views own commission online
    Given Dr. Sharma is logged into the Doctor Portal
    When he opens "My Commission"
    Then he sees only his patients and his commissions
    And cannot see other doctors' data
    And can download his commission statement as PDF
```

---

## 8. HEALTHCARE PRODUCT PORTFOLIO

---

### PRODUCT H1 — LABTRACK PRO
**Diagnostic Lab Report & Referral Commission Management System**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Pathology labs, diagnostic centers, radiology |
| Market | 1 lakh+ labs in India |
| Stack | React + Node.js + MySQL (Model C — Web hosted) |
| Local option | Electron + SQLite (no patient portal) |
| Build time | 5–7 weeks |
| India price | ₹15,000 – ₹35,000 |
| Global price | $149 – $349 |
| Complexity | Medium-High |
| #1 feature | Referral doctor commission automation |

#### Deployment Decision
```
OPTION A (Recommended): Web-hosted
→ Core lab software runs on VPS
→ Client buys cheap VPS (₹500/month on DigitalOcean)
→ Domain for patient portal (₹800/year)
→ You: provide code only
→ WHY: Patient portal, QR code report access = needs internet

OPTION B: Pure Local (Offline version)
→ Electron desktop app
→ SQLite database
→ No patient portal, no QR access
→ Reports printed and handed physically
→ Sell at ₹10,000 (lower price, no server needed)
```

#### BRD Summary (LabTrack Pro)
```
BUSINESS PROBLEM:
Labs track referral commissions in notebooks → disputes → lost doctors

BUSINESS OBJECTIVES:
1. Zero commission disputes with referring doctors
2. Professional digital report delivery (QR/portal)
3. Lab owner can see full business health at a glance

STAKEHOLDERS:
- Lab Owner (Admin): Full access
- Lab Technician: Enter results, generate reports
- Referring Doctor: View commissions, patient reports
- Patient: View/download their own reports

KEY BUSINESS RULES:
- Commission rate: configurable per test per doctor (flat or %)
- Doctor sees ONLY their patients, not all lab data
- Patient accesses report via mobile number + OTP (no password)
- Critical values (abnormal extremes) trigger immediate alert
- All PDFs carry lab logo, NABL accreditation number (if applicable)
```

#### PRD — Core User Stories (LabTrack Pro)

```markdown
MUST HAVE (MVP — Week 1–4):
US01: Register patient in < 60 seconds
US02: Book test packages from catalog
US03: Enter test results with normal range reference
US04: Generate branded PDF report with QR code
US05: Auto-calculate referral commission on test completion
US06: Dashboard: today's count, revenue, pending reports

SHOULD HAVE (Week 5–6):
US07: Patient portal (mobile OTP → view/download reports)
US08: Doctor portal (login → see referred patients + commissions)
US09: Monthly commission PDF statement per doctor
US10: WhatsApp report link share (client's API key)

NICE TO HAVE (v2):
US11: Home collection agent tracking
US12: Machine result import (CSV from analyzer machine)
US13: Multi-branch consolidated dashboard
US14: Accounts receivable tracking
```

#### SRS — Key Functional Requirements (LabTrack Pro)

```
MODULE 1: AUTHENTICATION & ROLES
FR-AUTH-01: Four roles: LabAdmin, Technician, Doctor, Patient
FR-AUTH-02: Role-based menu (Doctor sees only their portal)
FR-AUTH-03: Patient login: mobile number + 6-digit OTP (SMS)
FR-AUTH-04: Admin can reset any password

MODULE 2: PATIENT MANAGEMENT
FR-PAT-01: Fields: name, mobile, age, gender, address, ref doctor, test selection
FR-PAT-02: Auto Patient ID: LAB-[YEAR]-[SEQUENCE]
FR-PAT-03: Bill auto-generated on patient registration with test prices
FR-PAT-04: Patient search: real-time by name or mobile

MODULE 3: TEST CATALOG
FR-CAT-01: Admin can add/edit/delete tests
FR-CAT-02: Each test: name, price, normal range (age/gender specific), unit, method
FR-CAT-03: Tests grouped into packages (e.g., "Thyroid Package" = T3+T4+TSH)
FR-CAT-04: Package price = individual prices with configurable discount

MODULE 4: RESULT ENTRY
FR-RES-01: Technician selects patient → enters result values per test
FR-RES-02: System auto-flags: Normal / Abnormal / Critical (vs stored normal range)
FR-RES-03: Critical value → immediate visual alert + optional WhatsApp alert
FR-RES-04: Result saved with technician ID and timestamp
FR-RES-05: Results can be edited before report is "Finalized"
FR-RES-06: Once "Finalized", result edit requires admin password

MODULE 5: REPORT GENERATION
FR-RPT-01: PDF generated on clicking "Generate Report"
FR-RPT-02: PDF template includes: lab header, patient info, test table, QR code, signature line
FR-RPT-03: QR code encodes URL: [domain]/report/[patient-id]/[report-id]
FR-RPT-04: PDF saved to server + path stored in DB
FR-RPT-05: Report has unique report number: RPT-[YEAR]-[SEQ]
FR-RPT-06: Delivery status: Pending → Ready → Delivered

MODULE 6: COMMISSION ENGINE
FR-COM-01: Admin configures: Doctor → Test → Commission rate (flat ₹ or %)
FR-COM-02: On "Finalized" report, commission auto-debited to doctor ledger
FR-COM-03: Doctor dashboard: total earned, total paid, pending balance
FR-COM-04: Monthly statement PDF: itemized list of referred patients + commission per test
FR-COM-05: Admin can mark payment as "Paid" + add payment reference

MODULE 7: DOCTOR PORTAL
FR-DOC-01: Separate login page for doctors
FR-DOC-02: Doctor sees only: their referred patients, report status, commission
FR-DOC-03: Doctor can download patient reports as PDF
FR-DOC-04: Doctor can download their commission statement PDF

MODULE 8: PATIENT PORTAL
FR-POR-01: Patient enters mobile → receives OTP → accesses their reports
FR-POR-02: Patient sees: report date, test names, results, download button
FR-POR-03: Patient cannot see other patients' data

MODULE 9: BILLING
FR-BIL-01: Invoice auto-generated: test prices + GST (if enabled)
FR-BIL-02: Payment status: Cash / Online / Due
FR-BIL-03: Daily collection summary for owner

MODULE 10: DASHBOARD
FR-DSH-01: Cards: Today's patients, pending reports, today's revenue
FR-DSH-02: Chart: Daily patient trend (7-day)
FR-DSH-03: List: Reports pending delivery
FR-DSH-04: List: Doctors with highest referrals this month
FR-DSH-05: Alert: Critical value reports pending attention
```

#### Wireframe: LabTrack Pro Dashboard

```
┌─────────────────────────────────────────────────────┐
│ [LabTrack] Sharma Diagnostics     [👤 Admin] [Logout]│
├───────────┬─────────────────────────────────────────┤
│ 📊 Home   │ Good Morning! Tuesday, 8 July 2026       │
│ 👤 Patients│                                         │
│ 🧪 Tests  │ ┌──────────┐┌──────────┐┌──────────────┐│
│ 📄 Reports││47 Patients││12 Pending││ ₹14,200 Today││
│ 👨‍⚕️ Doctors│└──────────┘└──────────┘└──────────────┘│
│ 💰 Commission│                                       │
│ ⚙️ Settings│ [+ Register New Patient]  [Enter Results]│
│           │                                         │
│           │ PENDING REPORTS                          │
│           │ ┌────────────────────────────────────┐   │
│           │ │ Rahul K.  |  CBC, LFT  | 2 hrs ⚠️ │   │
│           │ │ Priya S.  |  Thyroid   | 30 min  │   │
│           │ │ Ahmed M.  |  KFT       | 1 hr    │   │
│           │ └────────────────────────────────────┘   │
└───────────┴─────────────────────────────────────────┘
```

#### BDD Scenarios: LabTrack Pro

```gherkin
Feature: Lab Report Generation with QR Code

  Scenario: Generate report with QR for patient portal
    Given test results for patient "Rahul Kumar" are entered and verified
    When technician clicks "Generate Report"
    Then a PDF is created with lab letterhead
    And a QR code appears on the PDF bottom-right
    And the QR links to "https://labportal.com/report/LAB-2026-0047/RPT-2026-0234"
    And report status changes to "Ready"
    And lab owner sees notification "Report ready: Rahul Kumar"

  Scenario: Patient accesses report via QR scan
    Given patient Rahul scans the QR on his printed report
    When the browser opens the patient portal
    And Rahul enters his mobile number and receives OTP
    Then he sees his CBC and LFT results
    And can download the PDF
    And cannot see any other patient's data

  Scenario: Critical value alert
    Given technician enters Glucose value as "520 mg/dL"
    And normal range is "70–140 mg/dL"
    When result is saved
    Then the system flags it as "CRITICAL" in red
    And an alert appears: "Critical value detected — notify doctor immediately"
    And if WhatsApp is configured, an auto-message is sent to referring doctor
```

---

### PRODUCT H2 — RECALLMD
**Patient Follow-Up & Engagement Automation**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Any clinic, dental, ophthalmology, pediatric |
| Stack | Electron + SQLite + node-cron |
| Build time | 3–4 weeks |
| India price | ₹8,000 – ₹18,000 |
| Complexity | Low–Medium |
| #1 feature | Automated WhatsApp follow-up on due date |

#### SRS — Key Requirements (RecallMD)

```
MODULE 1: PATIENT DATABASE
FR-01: Store patient: name, mobile, doctor, last visit, diagnosis category
FR-02: Import existing patients from CSV (migration support)
FR-03: Search patient by name/mobile

MODULE 2: FOLLOW-UP SCHEDULER
FR-01: On visit entry, receptionist sets "Next Visit Date"
FR-02: System stores: patient, follow-up date, reminder type
FR-03: Reminder types: Follow-up, Vaccination (date-based), Annual Check-up
FR-04: Cron job runs daily at 8:00 AM
FR-05: Sends WhatsApp message to all patients with follow-up = today

MODULE 3: MESSAGE TEMPLATE ENGINE
FR-01: Admin creates message templates per type
FR-02: Templates support variables: [patient_name], [doctor_name], [date], [condition]
FR-03: Example: "Dear [patient_name], Dr. [doctor_name] recommends your follow-up for [condition] on [date]. Reply YES to confirm. — [clinic_name]"

MODULE 4: WHATSAPP INTEGRATION
FR-01: Client provides their own Twilio/WATI API credentials
FR-02: Credentials stored in encrypted local config
FR-03: Message sending log: sent/failed/pending per patient
FR-04: If API not configured, system shows "Manual Call List" instead

MODULE 5: DASHBOARD
FR-01: Today: X patients to follow up
FR-02: This week: X patients
FR-03: Missed: Patients who got reminder but haven't confirmed
FR-04: Revenue recovery estimate: missed patients × average visit fee

MODULE 6: CAMPAIGN MANAGER (Optional)
FR-01: Bulk message to patient group (e.g., all diabetic patients)
FR-02: Schedule campaign for specific date
FR-03: Track: sent, read, replied
```

---

### PRODUCT H3 — TOKENQ
**Smart Patient Queue & Token Display System**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Any clinic, OPD, diagnostic center |
| Stack | React PWA + Node.js (LAN — no internet) |
| Build time | 2–3 weeks |
| India price | ₹6,000 – ₹15,000 |
| Complexity | Low |
| #1 feature | Real-time token display on TV/monitor |

#### How It Works (No Internet Required)

```
[Reception PC] — runs Node.js server
      │
      └── Local WiFi (192.168.1.x)
            │
            ├── [Reception Browser] → Admin panel (issue tokens)
            ├── [Doctor Browser]    → Call next patient
            └── [TV/Monitor Browser] → Display board (full screen)

Socket.io pushes real-time updates → instant on all screens
No internet. No domain. Works on clinic WiFi.
```

#### SRS — Key Requirements (TokenQ)

```
MODULE 1: TOKEN ISSUANCE
FR-01: Reception clicks "New Token" → increments counter
FR-02: Token format: configurable prefix (A, OPD, GEN) + number
FR-03: Multi-doctor mode: separate token series per doctor
FR-04: Priority token: jumps to front (senior citizen/emergency)
FR-05: Print token slip (optional, via thermal printer)

MODULE 2: DISPLAY BOARD
FR-01: Full-screen mode for TV/monitor
FR-02: Shows: CURRENT TOKEN (large), NEXT TOKEN, WAITING COUNT
FR-03: Audio alert (beep/announcement) when token changes
FR-04: Customizable colors, font size, clinic logo
FR-05: Hindi/English toggle for display text
FR-06: Estimated wait time shown (if enabled)

MODULE 3: DOCTOR PANEL
FR-01: Doctor opens dashboard on their device (via WiFi URL)
FR-02: Shows: current patient token, next patient
FR-03: Button: "Call Next" (advances to next token)
FR-04: Button: "Skip" (mark as no-show, advance)
FR-05: Button: "Pause" (no new tokens — lunch/emergency)

MODULE 4: ANALYTICS
FR-01: Daily report: total patients, avg wait time, peak hours
FR-02: Per-doctor report: patients seen, avg time per patient
FR-03: Export to PDF (daily summary for clinic records)

MODULE 5: CONFIGURATION
FR-01: Admin: set clinic name, logo, colors, sound
FR-02: Admin: configure working hours (tokens not issued outside hours)
FR-03: Toggle features: estimated wait, multi-doctor, priority token
```

#### BDD: TokenQ

```gherkin
Feature: Patient Token Queue Management

  Scenario: Reception issues new token
    Given reception is on the Token panel
    When receptionist clicks "Issue Token"
    Then token "A-047" is generated
    And the TV display shows "Now Serving: A-046 | Next: A-047"
    And waiting count increments to "12"

  Scenario: Doctor calls next patient
    Given current token is A-046
    And doctor has finished with current patient
    When doctor clicks "Call Next" on their panel
    Then token advances to A-047
    And TV display updates instantly to "Now Serving: A-047"
    And a beep sound plays on the display screen

  Scenario: Priority patient (senior citizen)
    Given current queue has tokens A-048 to A-060 pending
    When receptionist clicks "Priority Token" for an elderly patient
    Then token A-047-P is issued
    And displayed as "PRIORITY" on doctor's panel
    And doctor sees "P" flag next to patient token
```

---

### PRODUCT H4 — WELLNESSDESK
**Membership & Appointment Manager for Wellness Centers**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Yoga studios, physio, spa, naturopathy, fitness |
| Stack | Electron + SQLite OR PWA (LAN) |
| Build time | 3–4 weeks |
| India price | ₹8,000 – ₹20,000 |
| Complexity | Low–Medium |
| #1 feature | Session package tracker + expiry alerts |

#### Key SRS — WellnessDesk

```
MODULE 1: MEMBER MANAGEMENT
FR-01: Fields: name, mobile, photo, membership type, start/end date, health notes
FR-02: Member status: Active (green) / Expiring in 7 days (yellow) / Expired (red)
FR-03: Auto-alert: WhatsApp to member 7, 3, 1 days before expiry

MODULE 2: MEMBERSHIP PLANS
FR-01: Admin creates plans: name, duration, price, session count (if applicable)
FR-02: Plan types: Monthly/Quarterly/Annual/Session-Based
FR-03: Discount: admin can override price at time of renewal

MODULE 3: SESSION PACKAGE TRACKER
FR-01: Session-based plan: 10 sessions, 20 sessions, etc.
FR-02: Each attended session: deducted from balance
FR-03: Member can see remaining sessions on their member card
FR-04: Alert when 2 sessions remaining: suggest renewal

MODULE 4: APPOINTMENT BOOKING
FR-01: Calendar view: by day, by week
FR-02: Book slot: member + therapist/trainer + session type + time
FR-03: Conflict detection: same trainer at same time
FR-04: Booking confirmation: WhatsApp/SMS to member

MODULE 5: ATTENDANCE TRACKER
FR-01: Mark member present: check-in button
FR-02: Attendance log: date, time, trainer, session type
FR-03: Monthly attendance report per member
FR-04: No-show tracking

MODULE 6: REVENUE DASHBOARD
FR-01: Today/Week/Month revenue
FR-02: Active members count
FR-03: Expiring soon count (action required)
FR-04: Revenue forecast: based on renewals due
```

---

### PRODUCT H5 — RXPAD PRO
**Smart Digital Prescription & Medical Certificate Generator**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | General physicians, specialists, dentists |
| Stack | Tauri + React + SQLite (pure local) |
| Build time | 3–4 weeks |
| India price | ₹5,000 – ₹12,000 |
| Complexity | Low–Medium |
| #1 feature | 3-click prescription with doctor's saved protocols |

#### SRS — RxPad Pro

```
MODULE 1: PATIENT QUICK ENTRY
FR-01: Minimal fields: name, age, gender, mobile (30-second registration)
FR-02: Patient history: all past prescriptions searchable

MODULE 2: PRESCRIPTION BUILDER
FR-01: Chief complaint entry (Voice-to-text via Web Speech API)
FR-02: Diagnosis entry: typed or selected from saved list
FR-03: Medicine entry: type 3 letters → autocomplete from 5000+ medicine DB
FR-04: Medicine fields: name, dose, frequency, duration, instructions
FR-05: "Doctor's Favorites": saved protocols auto-suggested by diagnosis
FR-06: Drug interaction checker: basic flag for known combinations (local DB)

MODULE 3: PDF PRESCRIPTION
FR-01: Clinic letterhead: logo, doctor name, degrees, reg. number, address
FR-02: Standard Rx format layout
FR-03: Print directly or save as PDF
FR-04: WhatsApp share option (opens WhatsApp with PDF attached)

MODULE 4: MEDICAL CERTIFICATES
FR-01: Templates: Fitness Certificate, Sick Leave, Sports Fitness, School Medical
FR-02: Auto-fill patient info, date, doctor signature block
FR-03: Admin can create custom certificate templates

MODULE 5: VITALS TRACKER (Optional)
FR-01: Record: BP, pulse, weight, height, SpO2, blood sugar, temperature
FR-02: Plot trend chart for chronic patients

MODULE 6: REFERRAL LETTER (Optional)
FR-01: Template: "Referring [patient] to [specialist] for [reason]"
FR-02: Auto-fill with patient details
FR-03: Print or WhatsApp share
```

---

### PRODUCT H6 — CAREREVIEW
**Patient Feedback & Clinic Reputation System**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | All clinics, labs, wellness centers |
| Stack | React + Node.js (minimal — for QR redirect) or PWA |
| Build time | 2–3 weeks |
| India price | ₹5,000 – ₹12,000 |
| Complexity | Low |
| #1 feature | Positive ratings → auto-redirect to Google Reviews |

#### SRS — CareReview

```
MODULE 1: FEEDBACK TRIGGER
FR-01: QR code at reception desk → opens feedback form
FR-02: Optional: WhatsApp link sent after appointment
FR-03: Feedback form: 5-star rating + optional text comment

MODULE 2: SMART ROUTING
FR-01: Rating 4–5 stars → after submit, show Google Maps review link
FR-02: Rating 1–3 stars → submit to internal system only
FR-03: Internal alert to admin on negative feedback (email/WhatsApp)

MODULE 3: FEEDBACK DASHBOARD
FR-01: Average rating (overall and by category)
FR-02: Categories: Doctor, Waiting Time, Staff Behavior, Cleanliness, Value
FR-03: Trend chart: rating over time
FR-04: Keyword cloud from text comments
FR-05: Staff performance by category ratings

MODULE 4: AI RESPONSE SUGGESTIONS (Optional — client's API)
FR-01: For negative reviews: suggests professional response text
FR-02: Uses Claude/OpenAI API with clinic's own API key
FR-03: Admin reviews + edits before posting to Google

MODULE 5: REPORTS
FR-01: Monthly summary PDF: avg rating, complaint categories, trends
FR-02: Export feedback CSV for own analysis
```

---

## 9. SMB PRODUCT PORTFOLIO

---

### PRODUCT S1 — QUOTEFLOW
**B2B Quotation, Order & Payment Tracker**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Manufacturers, traders, wholesalers, IT dealers |
| Stack | Electron + SQLite (local) |
| Build time | 3–5 weeks |
| India price | ₹10,000 – ₹25,000 |
| Complexity | Medium |
| #1 feature | One-click PDF quotation with WhatsApp share |

#### SRS — QuoteFlow

```
MODULE 1: PRODUCT/SERVICE CATALOG
FR-01: Admin adds products: name, SKU, base price, GST rate, unit
FR-02: Multiple price lists: retail, wholesale, dealer (switchable per quotation)
FR-03: Product categories for easy search
FR-04: Import products from CSV (initial setup)

MODULE 2: CLIENT DATABASE
FR-01: Store: company name, contact person, mobile, email, GSTIN, address
FR-02: Quotation history per client
FR-03: Outstanding payment amount per client

MODULE 3: QUOTATION BUILDER
FR-01: Select client → Add line items from catalog
FR-02: Quantities editable per line
FR-03: Discount: per line or overall %
FR-04: GST auto-calculated (CGST+SGST or IGST based on state)
FR-05: Terms & conditions: configurable default text
FR-06: Validity period: default 7/15/30 days (configurable)
FR-07: Quote number: QT-[YEAR]-[SEQ]

MODULE 4: PDF + SHARE
FR-01: Professional PDF with company letterhead
FR-02: Print or save to local folder
FR-03: WhatsApp share: opens WhatsApp Web with PDF + default message
FR-04: Email share: opens default email client with PDF attached

MODULE 5: ORDER PIPELINE
FR-01: Quote statuses: Draft → Sent → Viewed → Accepted → Rejected
FR-02: Convert accepted quote to Order in one click
FR-03: Order statuses: Confirmed → In Production → Ready → Dispatched → Delivered
FR-04: Visual Kanban board for all active orders
FR-05: Expected delivery date per order

MODULE 6: PAYMENT TRACKER
FR-01: Invoice auto-generated from delivered order
FR-02: Payment status: Unpaid → Partial → Paid
FR-03: Payment reminders: manual WhatsApp send or auto-scheduled
FR-04: Outstanding amount per client

MODULE 7: DASHBOARD
FR-01: This month: quotes sent, orders active, revenue, outstanding
FR-02: Pipeline view: total value at each stage
FR-03: Top clients by order value
FR-04: Overdue payments list
```

---

### PRODUCT S2 — SMARTPROOF
**White-Label Client & Project Portal for Agencies**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Digital agencies, CA firms, consultants, web developers |
| Stack | React + Node.js + MySQL (Web — clients need login) |
| Build time | 4–6 weeks |
| India price | ₹8,000 – ₹20,000 base, ₹40,000+ agency license |
| Complexity | Medium |
| #1 feature | Agency buys once, deploys for all their clients |

#### SRS — SmartProof

```
MODULE 1: MULTI-CLIENT WORKSPACE
FR-01: Agency admin creates client accounts (name, email, domain if applicable)
FR-02: Each client has isolated workspace (cannot see other clients)
FR-03: Client receives email with login credentials automatically

MODULE 2: PROJECT MANAGEMENT
FR-01: Create projects per client: name, description, start date, deadline
FR-02: Project status: Planning → In Progress → Review → Completed
FR-03: Task list per project: title, assignee, due date, status
FR-04: Internal notes: only agency team sees (not client)
FR-05: Activity log: all changes timestamped and attributed

MODULE 3: FILE SHARING & APPROVALS
FR-01: Agency uploads deliverables as files (PDF, images, links)
FR-02: Each deliverable has status: Pending Review → Approved / Revision Requested
FR-03: Client clicks "Approve" or "Request Revision" with comment
FR-04: Revision comments visible to agency team
FR-05: Version history: multiple uploads per deliverable

MODULE 4: INVOICING
FR-01: Create invoice: line items, amounts, GST, due date
FR-02: Invoice PDF with agency letterhead
FR-03: Payment status: Pending → Partial → Paid
FR-04: Client can view invoice and download PDF

MODULE 5: BRANDING (White-Label)
FR-01: Agency uploads their logo → appears on all pages
FR-02: Primary color configurable
FR-03: Agency name replaces "SmartProof" everywhere
FR-04: Custom domain support (if client wants agency.com/portal)

MODULE 6: NOTIFICATIONS
FR-01: Email to client: when new file uploaded for review
FR-02: Email to agency: when client approves or requests revision
FR-03: Email to agency: when client views an invoice
```

---

### PRODUCT S3 — SHIFTMATE
**Staff Attendance, Shift & Payroll Manager**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Restaurants, shops, factories, salons (10–100 staff) |
| Stack | Electron + SQLite (pure local) |
| Build time | 4–5 weeks |
| India price | ₹8,000 – ₹18,000 |
| Complexity | Medium |
| #1 feature | One-click monthly salary slip PDF generation |

#### SRS — ShiftMate

```
MODULE 1: EMPLOYEE MANAGEMENT
FR-01: Profile: name, photo, designation, department, joining date, salary type
FR-02: Salary: Fixed monthly / Daily wage / Hourly
FR-03: Salary components: Basic, HRA, DA, Allowances, Deductions (configurable)
FR-04: Bank details for salary transfer reference
FR-05: Document upload: Aadhaar, PAN (stored locally)

MODULE 2: ATTENDANCE MARKING
FR-01: List view: all employees, one row each
FR-02: Mark per employee: Present (P) / Absent (A) / Half-day (H) / Leave (L) / Holiday (HO)
FR-03: Bulk mark: "Mark All Present" for typical days
FR-04: Overtime entry: extra hours per day
FR-05: Auto-close day at midnight (mark unmarked as Absent)

MODULE 3: LEAVE MANAGEMENT
FR-01: Leave types: CL (Casual), SL (Sick), EL (Earned) — configurable
FR-02: Annual leave balance per employee per type
FR-03: Leave application: employee applies → manager approves/rejects
FR-04: Leave deducted from balance automatically on approval
FR-05: Leave report: per employee per month

MODULE 4: PAYROLL CALCULATION
FR-01: On "Calculate Payroll" for selected month:
FR-02: Days present count from attendance records
FR-03: Leave deduction: paid leave vs unpaid leave logic
FR-04: Overtime amount: extra hours × hourly rate
FR-05: Deductions: PF (12%), ESI (0.75%) if applicable — configurable on/off
FR-06: Net salary = Gross - Deductions
FR-07: Payroll locked once processed (no edit without admin PIN)

MODULE 5: SALARY SLIP PDF
FR-01: Professional salary slip with company letterhead
FR-02: Sections: Employee info, Earnings, Deductions, Net Pay
FR-03: Unique slip number: SAL-[MONTH]-[YEAR]-[EMP-ID]
FR-04: Print individual or bulk print all for month
FR-05: Export all slips as single merged PDF

MODULE 6: SHIFT SCHEDULING (Optional)
FR-01: Create shifts: Morning (6AM-2PM), Afternoon (2PM-10PM), Night (10PM-6AM)
FR-02: Assign shift to employee by week
FR-03: Shift swap requests (manager approves)
FR-04: Weekly schedule visual grid
```

---

### PRODUCT S4 — LEADBOARD
**Simple Lead & Follow-Up Manager for Field Sales Teams**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Real estate, coaching, insurance, auto dealers |
| Stack | React PWA (works on mobile + desktop) |
| Build time | 4–5 weeks |
| India price | ₹10,000 – ₹22,000 |
| Complexity | Medium |
| #1 feature | Mobile-first, manager sees team pipeline in real-time |

#### SRS — LeadBoard

```
MODULE 1: LEAD CAPTURE
FR-01: Quick add: name, mobile, source, interest (30 seconds)
FR-02: Source tracking: Walk-in, IndiaMART, Website, Referral, Social, Cold Call
FR-03: Lead assignment: to specific salesperson
FR-04: Import leads from CSV

MODULE 2: PIPELINE BOARD
FR-01: Kanban columns: New → Contacted → Interested → Negotiating → Won → Lost
FR-02: Drag-and-drop between stages
FR-03: Lead card shows: name, company, value, assigned to, last activity date
FR-04: Color coding: hot (red), warm (orange), cold (blue)

MODULE 3: FOLLOW-UP SYSTEM
FR-01: Add follow-up: date, time, type (call/visit/WhatsApp), note
FR-02: Today's follow-up list on home screen
FR-03: Overdue follow-ups alert (marked in red)
FR-04: Auto-WhatsApp template launch: opens WhatsApp with pre-filled message

MODULE 4: ACTIVITY LOG
FR-01: Per lead: all interactions logged with date, type, salesperson, note
FR-02: Call log: duration, outcome
FR-03: Meeting log: location, attendees, outcome

MODULE 5: MANAGER DASHBOARD
FR-01: Team pipeline: total leads, by stage, by salesperson
FR-02: Conversion rate: leads → won (by person, by source)
FR-03: Follow-up compliance: who is doing follow-ups vs not
FR-04: Revenue forecast: sum of "Negotiating" stage deal values

MODULE 6: SALESPERSON VIEW
FR-01: My leads only (cannot see colleagues' leads)
FR-02: Today's follow-up list
FR-03: Quick log: "I called — outcome" in 2 taps
```

---

### PRODUCT S5 — DASHCORE
**Business Intelligence Dashboard for SMB Owners**

#### Quick Card
| Field | Detail |
|-------|--------|
| Target | Any SMB owner with Excel data |
| Stack | Electron + SQLite + file import |
| Build time | 5–7 weeks |
| India price | ₹12,000 – ₹30,000 |
| Complexity | Medium–High |
| #1 feature | Upload Excel/CSV → instant visual dashboard |

#### SRS — DashCore

```
MODULE 1: DATA IMPORT
FR-01: Accept: CSV, Excel (.xlsx), JSON
FR-02: Column mapping wizard: "Which column is your sales figure?"
FR-03: Data preview before import
FR-04: Schedule: remind owner to re-upload data weekly/monthly
FR-05: Keep history: multiple import snapshots

MODULE 2: AUTO DASHBOARD GENERATION
FR-01: System detects data type (date, currency, number, text)
FR-02: Auto-generates appropriate charts (line for time-series, bar for categories, pie for distribution)
FR-03: KPI cards: total, average, max, min, change from previous period

MODULE 3: INDUSTRY TEMPLATES
FR-01: Pre-built templates:
       → Retail: Sales by product, daily revenue, top products
       → Restaurant: Covers, avg bill, peak hours
       → Real Estate: Pipeline value, closed deals, agent performance
       → Agency: Project count, revenue, client retention

MODULE 4: GOAL TRACKING
FR-01: Set monthly/quarterly targets per metric
FR-02: Progress bar: actual vs target
FR-03: Alert: when metric drops below X% of target

MODULE 5: REPORT EXPORT
FR-01: Export dashboard as PDF (A4, portrait)
FR-02: Include: all charts, KPI cards, date range header, business logo
FR-03: Schedule: email PDF report monthly (if email configured)

MODULE 6: USER ROLES
FR-01: Owner: full access
FR-02: Manager: view only, no settings
FR-03: Accountant: can upload data, view finance metrics only
```

---

## 10. AUTOMATION SERVICES PORTFOLIO

> These are NOT software products you build from scratch. These are **automation workflows** you build using n8n, Make.com, or Zapier — on the client's own account. You charge a setup fee. You resell the same workflow template to the next client.

---

### AUTOMATION A1 — WHATSAPP BUSINESS AUTOMATION

**What it does:** Automates WhatsApp responses, appointment confirmations, follow-ups for any business.

**Tools:** WATI or AiSensy (client's account) + n8n (self-hosted on client's VPS OR Make.com)

**Client pays:** Their own WATI/AiSensy subscription (~₹1,999–3,999/month)

**You charge:** ₹8,000–₹20,000 setup fee

**Resell:** Same workflow to next client (20 minutes to set up the second time)

**What you build:**
```
WORKFLOW: New Lead Auto-Response
Trigger: New message from unknown number
→ Auto-reply: "Thanks for contacting [Business]. What are you looking for?"
→ If they reply keyword: Route to appropriate template
→ Assign to sales team
→ Log in CRM (Google Sheet or Notion)

WORKFLOW: Appointment Reminder
Trigger: 24 hours before appointment (from calendar/Google Sheet)
→ Send: "Reminder: Your appointment at [Clinic] tomorrow at [Time]"
→ If reply YES: Confirm in system
→ If reply NO: Cancel + notify receptionist

WORKFLOW: Post-Service Follow-up
Trigger: 2 days after service/appointment
→ Send: "How was your experience at [Business]? Rate us 1-5"
→ If 4-5: Send Google Review link
→ If 1-3: Alert business owner
```

---

### AUTOMATION A2 — LEAD CAPTURE & ROUTING

**What it does:** Captures leads from multiple sources → routes to right person → tracks in one place

**Tools:** n8n + Google Sheets (client's account) + WhatsApp API

**You charge:** ₹5,000–₹15,000 setup

```
WORKFLOW: Multi-Source Lead Capture
Sources: Website form, Instagram DM, IndiaMART inquiry, WhatsApp
→ All routed to single Google Sheet
→ Salesperson gets WhatsApp notification with lead details
→ Lead gets auto-reply: "Thanks! Our team will contact you in 2 hours."
→ If no contact in 2 hours: Reminder to salesperson
```

---

### AUTOMATION A3 — INVOICE & PAYMENT AUTOMATION

**What it does:** Auto-generates invoices, sends payment links, follows up on overdue

**Tools:** Razorpay (client's account) + n8n + WhatsApp

**You charge:** ₹8,000–₹18,000 setup

```
WORKFLOW: Invoice → Payment → Receipt
Trigger: Service marked "Completed" in system/sheet
→ Auto-generate invoice PDF
→ Send to client via WhatsApp with Razorpay payment link
→ On payment: Auto-send receipt PDF
→ If unpaid after 7 days: Reminder message
→ If unpaid after 14 days: Alert business owner
```

---

### AUTOMATION A4 — AI CHATBOT SETUP

**What it does:** Website/WhatsApp chatbot that answers FAQs, books appointments, captures leads

**Tools:** Botpress/Flowise (self-hosted, free) OR Landbot (client's account)

**Local LLM option:** Ollama on client's decent PC → FREE, no API cost

**You charge:** ₹10,000–₹25,000 setup

```
CHATBOT CAPABILITIES:
→ FAQ answering (trained on clinic/business info)
→ Appointment booking (checks availability, books slot)
→ Lead capture (name, mobile, interest → to Google Sheet/CRM)
→ Product/service information
→ Hours, location, contact info
→ Escalation: "I'll connect you to our team" when can't answer
```

---

## 11. LICENSING & CODE DELIVERY MODEL

### License Types You Offer

```
TYPE 1 — SINGLE BUSINESS LICENSE
Price: Standard product price
Rights: One business, one location
Restriction: Cannot share code or resell

TYPE 2 — MULTI-LOCATION LICENSE
Price: 2× standard price
Rights: One business, multiple branches
Example: A diagnostic lab chain with 3 branches

TYPE 3 — AGENCY / RESELLER LICENSE
Price: 4–5× standard price
Rights: Agency can deploy for their clients (10 deployments)
Example: Digital agency buys SmartProof, deploys for their 10 clients

TYPE 4 — DEVELOPER LICENSE (for tech buyers)
Price: 3× standard price
Rights: Buy source code, modify as needed, deploy for one client
Used for: Freelancers/developers who want to customize heavily
```

### License Agreement Essentials (Always Include)

```
✅ Software provided "as-is" — no warranty on suitability
✅ Buyer may not resell, redistribute, or share code
✅ Support: 30 days bug fixes (not feature additions)
✅ Major version updates: charged separately
✅ Minor bug fixes: free for 3 months
✅ Payment: 100% upfront before code delivery
✅ Customization beyond scope: ₹XXX/hour
✅ No refunds once code is delivered
```

### Code Protection Strategy

```
STEP 1 — OBFUSCATION
Frontend (React/JS):
→ Build with Vite → dist/ folder is minified
→ Further obfuscate with javascript-obfuscator
→ Variable names become _0x3a4f, _0x9bc2, etc.
→ Cannot be read or understood even if seen

Desktop (Tauri/Electron):
→ Binary compiled — source not visible
→ SQLite DB encrypted with SQLCipher (optional)

STEP 2 — LICENSE KEY VALIDATION
→ On first launch: show license key input screen
→ License key: tied to client's business name (you generate it)
→ Key format: [PRODUCT-CODE]-[HASH-OF-BUSINESS-NAME]-[YEAR]
→ Simple validation (local check) — no internet call needed
→ If key invalid: app runs in Demo Mode (limited records)

STEP 3 — DELIVERY METHOD
→ Deliver via private GitHub repo (add client as collaborator for 7 days, then remove)
→ Or: Encrypted ZIP with password (share password separately)
→ Or: WeTransfer link (expires in 7 days)
→ Never share on Google Drive (permanent, shareable)
```

### What You Deliver (Checklist)

```
□ Source code (Zip or GitHub private repo, time-limited access)
□ Compiled/built version (ready to install .exe or .apk)
□ Setup guide: step-by-step PDF (Hindi + English)
□ Database setup script (SQL migration file)
□ Admin panel walkthrough video (15–20 min screen recording)
□ License key (unique to this client)
□ WhatsApp number for 30-day support
□ .env template file (blank — client fills their credentials)
```

---

## 12. WHITE-LABELING SYSTEM

### The 3-Layer White-Label Approach

```
LAYER 1 — BASIC BRANDING (All products, no extra charge)
→ Business name in all headers, PDFs, emails
→ Logo uploaded via admin settings panel
→ Primary color chosen from color picker
→ Contact info in all automated messages
→ Client sets this up themselves from admin panel

LAYER 2 — DEEP BRANDING (₹2,000–5,000 extra)
→ Custom app name (Windows app title, icon)
→ Splash screen with clinic logo
→ PDF letterhead with custom fonts
→ Remove any watermark or "Powered by" text

LAYER 3 — AGENCY RESELL BRANDING (₹10,000–25,000 extra)
→ Agency's brand, not clinic's brand
→ Different admin theme per deployed client
→ Agency logo + client logo side by side
→ White-labeled documentation (PDF with agency name)
```

### Admin Settings Panel (Built into Every Product)

```typescript
// Every product has this settings module:

const BusinessSettings = {
  // Branding
  businessName: "Sharma Diagnostics",
  logo: "/uploads/logo.png",          // uploaded by admin
  primaryColor: "#0EA5E9",            // color picker
  
  // Contact
  phone: "+91 98765 43210",
  email: "info@sharmadiagnostics.com",
  address: "123 MG Road, Patna, Bihar",
  
  // Features (toggle on/off)
  features: {
    whatsappShare: true,
    gstBilling: true,
    multiDoctor: false,
    patientPortal: true,
  },
  
  // PDF customization
  pdf: {
    headerText: "SHARMA DIAGNOSTICS",
    footerText: "NABL Accredited Lab | All tests done by certified pathologists",
    showQRCode: true,
    showDoctorSignature: true,
  }
}
```

---

## 13. REVENUE & PRICING STRATEGY

### Pricing Tiers Per Product

| Product | Basic (code only) | Standard (code+setup) | Premium (code+setup+3mo support) | Agency License |
|---------|------------------|-----------------------|----------------------------------|----------------|
| LabTrack Pro | ₹15,000 | ₹20,000 | ₹28,000 | ₹60,000 |
| RecallMD | ₹8,000 | ₹11,000 | ₹16,000 | ₹35,000 |
| TokenQ | ₹6,000 | ₹8,500 | ₹12,000 | ₹25,000 |
| WellnessDesk | ₹8,000 | ₹11,000 | ₹16,000 | ₹30,000 |
| RxPad Pro | ₹5,000 | ₹7,500 | ₹11,000 | ₹25,000 |
| CareReview | ₹5,000 | ₹7,500 | ₹11,000 | ₹20,000 |
| QuoteFlow | ₹10,000 | ₹14,000 | ₹20,000 | ₹40,000 |
| SmartProof | ₹8,000 | ₹12,000 | ₹18,000 | ₹45,000 |
| ShiftMate | ₹8,000 | ₹11,000 | ₹16,000 | ₹35,000 |
| LeadBoard | ₹10,000 | ₹14,000 | ₹20,000 | ₹40,000 |

### Global Pricing (Gumroad/Lemon Squeezy)

| Product | USD Price | Target Market |
|---------|----------|--------------|
| LabTrack Pro | $199 – $349 | Southeast Asia, Africa, Middle East |
| WellnessDesk | $79 – $199 | US, UK, Canada, Australia |
| SmartProof | $79 – $199 | Global agencies |
| QuoteFlow | $99 – $249 | Southeast Asia, Africa |
| RecallMD | $79 – $179 | Any English-speaking market |

### Upsell Stack (Every Client Gets This Pitch)

```
AFTER DELIVERY (Day 1):
"Aapka system ready hai. Main iska monthly maintenance ₹3,000 mein 
handle kar sakta hoon — bugs, updates, data backup sab mera."
→ Target: 60% of clients say yes
→ Revenue: 10 clients × ₹3,000 = ₹30,000/month passive

AFTER 1 MONTH:
"Aapke system mein WhatsApp automation add karein — 
patients ko automatic reminder jayega ₹8,000 ek baar mein."
→ Target: 30% of clients buy add-on

AFTER 3 MONTHS:
"New module available hai — [feature client mentioned they need].
₹5,000 mein add kar deta hoon."
→ Target: 40% uptake

YEAR 1 END:
"Annual maintenance package: ₹18,000/year (saves ₹18k vs monthly)
+ free major update when available"
→ Locks client for full year
```

### 12-Month Revenue Projection

```
MONTH 1–2:
→ 3 LabTrack clients (local Patna labs) × ₹20,000 = ₹60,000
→ 2 Automation setups × ₹10,000 = ₹20,000
→ Total: ₹80,000

MONTH 3–4:
→ 5 more software clients × ₹15,000 avg = ₹75,000
→ 3 maintenance retainers (Month 1–2 clients) × ₹3,000 = ₹9,000
→ 2 QuoteFlow clients × ₹14,000 = ₹28,000
→ Total: ₹1,12,000

MONTH 5–6:
→ 6 software clients × ₹15,000 = ₹90,000
→ 8 maintenance retainers × ₹3,000 = ₹24,000
→ 2 Global Gumroad sales × $150 = ₹25,000
→ 1 Freelance PM project = ₹30,000
→ Total: ₹1,69,000

MONTH 7–12 (Steady State):
→ Software sales: 5–8 clients/month × ₹15,000 = ₹75,000–1,20,000
→ Maintenance retainers: 20+ clients × ₹3,000 = ₹60,000
→ Automation setups: 2–3/month × ₹10,000 = ₹20,000–30,000
→ Global passive (Gumroad): ₹15,000–25,000
→ Total/month: ₹1,70,000 – ₹2,35,000

YEAR 1 TOTAL (Conservative): ₹10–15 Lakh
YEAR 1 TOTAL (Realistic): ₹15–20 Lakh
```

---

## 14. GO-TO-MARKET STRATEGY

### Client Acquisition by Channel

#### Channel 1 — Local Offline (Fastest, First 2 Months)

```
TARGET: Pathology labs, clinics in Patna/nearby

HOW:
1. Walk in during 9–11 AM (receptionist free before rush)
2. Ask: "Main medical software develop karta hoon — 
   kya aap 5 minute de sakte hain?"
3. Show demo on laptop (pre-loaded with realistic data)
4. NEVER cold sell — ask ONE question about their pain first
5. Leave business card + WhatsApp contact

DEMO FLOW (15 minutes):
Minute 1–2: "Show me how you currently track commissions"
           (let them show you their notebook)
Minute 3–7: Open laptop, show commission dashboard
           "Doctor Sharma ka commission dekho — automatic"
Minute 8–12: Generate a sample patient report with QR
           "Patient ko link milega — hospital jaisa"
Minute 13–15: Pricing + "No monthly fee"
           → Close or "Think karo, kal phone karo"
```

#### Channel 2 — LinkedIn (Weeks 2–4 onward)

```
YOUR LINKEDIN HEADLINE:
"Technical Product Consultant | One-Time Software for Clinics, Labs & SMBs | 
No Subscription | AI Automation | Jaipur & Pan India"

CONTENT STRATEGY:
Monday: Before/After post ("Lab tracking commissions in notebook vs my system")
Wednesday: Short demo video (90 seconds, screen recording)
Friday: Client testimonial or result post (with permission)

OUTREACH:
→ Search: "Pathology Lab Owner" / "Clinic Owner" / "Diagnostic Center"
→ Connect with note: "I build one-time software for labs — no monthly fees"
→ If accepted: Wait 2 days → Send demo video link
→ If interested: Book 15-min call

TARGET: 5 connection requests/day → 1 reply/day → 1 demo/week → 1 sale/month
```

#### Channel 3 — WhatsApp Marketing

```
BUILD YOUR LIST:
→ Visit 20 labs/clinics → get owner WhatsApp
→ Join: "Patna Medical" / "Bihar Lab Owners" WhatsApp groups
→ Join: "MSME Bihar" / "Startup Patna" groups

CONTENT TO SHARE:
→ 60-second demo videos (recorded on phone, casual)
→ "Before/After" screenshots
→ "Client result" posts (anonymous data)

HOW TO NOT GET BANNED:
→ Don't mass-broadcast to 50 people at once
→ Send personal messages, not group spam
→ Wait for groups to know you before pitching
→ Help first, pitch second
```

#### Channel 4 — Passive Sales (Month 3+)

```
GUMROAD STORE:
→ Create professional product listing with demo GIF
→ One paragraph problem → solution → price
→ Video walkthrough embedded
→ FAQ section
→ Instant digital download after payment

INDIAMART LISTING:
→ List as "Clinic Management Software" / "Lab Management System"
→ One-time payment prominently mentioned
→ Respond to all inquiries within 1 hour

FIVERR GIG:
→ "I will set up a professional [clinic/lab/wellness] software on your server"
→ Include demo screenshots
→ Start at ₹8,000 to get reviews → increase price
```

---

## 15. RISK ANALYSIS & MITIGATION

| Risk | Probability | Impact | Prevention | Recovery |
|------|-------------|--------|-----------|---------|
| Client demands features not in scope | High | Medium | Always define scope in writing before starting. Charge ₹500–1,000/hour for extras. | Have a written addendum agreement ready. |
| Client can't set up hosting (web apps) | High | Low | Offer paid setup service ₹2,000–5,000. This becomes a feature, not a problem. | Set up their hosting yourself and charge for it. |
| WhatsApp API getting banned | Medium | Medium | Educate clients to follow WhatsApp policies. Use official BSP (WATI, AiSensy). | Have SMS fallback built into automation workflows. |
| Client shares code with friend | Medium | Medium | Obfuscate code. License key validation. Focus on relationships, not just code. | Not recoverable — minimize risk via obfuscation. |
| Competition copies your idea | Medium | Low | First-mover advantage. Local relationships = your moat. Tech is not your moat. | Build deeper product, add modules, improve support. |
| Building for months without one client | High | Critical | Talk to 5 potential clients BEFORE writing one line of code. Validate first. | Pivot based on actual client feedback. |
| Client fails to pay after delivery | High | High | 50% advance, 50% before final code delivery. Never deliver full code without full payment. | Recover via legal notice (small amount) or lesson learned. |
| Product becomes outdated | Low | Medium | Build modular — add new modules over time. Sell updates as paid add-ons. | Keep one eye on market for new features clients want. |

### The 3 Most Dangerous Failure Modes

```
FAILURE MODE 1 — BUILDING IN A VACUUM
"I built for 3 months and when I showed it to labs, 
they said it doesn't work for how they actually operate."
→ Prevention: Get 3 people to say "YES I'd pay for this" BEFORE building

FAILURE MODE 2 — OVER-ENGINEERING
"My software is amazing technically but clients find it confusing."
→ Prevention: Test with a non-technical person every week of build.
  If they're confused, the UX is wrong. Not them — YOU.

FAILURE MODE 3 — NOT ASKING FOR MONEY
"I have 5 happy users but no revenue."
→ Prevention: Always name a price in the first demo.
  Free demos must end with: "This is ₹15,000. Want to proceed?"
```

---

## 16. PRIORITY ORDER & EXECUTION PLAN

### The Master Priority Formula

```
PRIORITY = (Problem Urgency × Market Size × Build Speed × Sales Ease) / Risk
```

### Ranked Priority Order

```
RANK 1 → START NOW: Sell AI Automation Services
Reason: No product build required. Learn n8n in 3 days.
Sell WhatsApp automation to any local business.
Time to first ₹: 1–2 weeks
Revenue: ₹5,000–₹25,000 per setup
Action: Contact 5 local businesses TODAY

RANK 2 → WEEK 1–4: Build LabTrack Pro (Electron + SQLite version first)
Reason: Highest ticket. Daily acute pain. Walk into any lab.
Build offline version first (4 weeks). No server complexity.
Add patient portal later (web version) after 3 clients.
Time to first ₹: 4–5 weeks
Revenue: ₹15,000–₹20,000 per client

RANK 3 → WEEK 3–6 (PARALLEL): Build TokenQ
Reason: 2–3 week build. Low complexity. Universal clinic pain.
Build while LabTrack stabilizes. Sell to LabTrack clients too.
Time to first ₹: 3 weeks after LabTrack
Revenue: ₹6,000–₹12,000 per client

RANK 4 → MONTH 2–3: Build RecallMD
Reason: Sell to same labs/clinics who bought LabTrack or TokenQ.
Every client is a potential cross-sell. Easy WhatsApp pitch.
Time to first ₹: Within 1 week of launch (existing client base)
Revenue: ₹8,000–₹15,000 per client

RANK 5 → MONTH 3–4: Build QuoteFlow
Reason: Opens entire SMB market beyond healthcare.
Sell to traders, manufacturers in industrial areas.
Offline Electron version = no server needed.
Time to first ₹: 4 weeks
Revenue: ₹10,000–₹20,000 per client

RANK 6 → MONTH 4–5: ShiftMate + WellnessDesk
Reason: Opens restaurants, salons, wellness market.
Both are ~3–4 week builds after existing codebase patterns.

RANK 7 → MONTH 5–6: SmartProof + Gumroad Launch
Reason: Agency-focused. Higher price with agency license.
First Gumroad listings for all products = passive global income.

RANK 8 → MONTH 6+: RxPad Pro + LeadBoard + DashCore
Reason: Add-on products. Cross-sell to existing clients.
Steady expansion of portfolio.
```

### 12-Week Execution Calendar

```
WEEK 1:
→ Learn n8n basics (YouTube: 3 hours)
→ Contact 5 local labs about demo (WhatsApp)
→ Set up LinkedIn profile with new positioning
→ Start LabTrack Pro architecture (Electron + SQLite)

WEEK 2:
→ Build LabTrack: Patient registration + test catalog
→ Do first 2 lab visits with rough demo
→ Set up first automation for any local business (paid or free for testimonial)

WEEK 3:
→ Build LabTrack: Result entry + PDF generation
→ Start building TokenQ in parallel (simple, 2-3 days each module)

WEEK 4:
→ Build LabTrack: Commission engine + dashboard
→ Complete TokenQ MVP
→ Get feedback from 3–5 local lab owners on LabTrack demo

WEEK 5:
→ Polish LabTrack based on feedback
→ First paying client for LabTrack
→ Write setup guide + record walkthrough video

WEEK 6:
→ Close 2–3 LabTrack clients
→ Start RecallMD development
→ Pitch TokenQ to LabTrack clients (upsell)

WEEK 7–8:
→ Complete RecallMD
→ Cross-sell to existing clients
→ Start QuoteFlow architecture

WEEK 9–10:
→ Build QuoteFlow MVP
→ Visit 10 local traders/manufacturers for demos
→ 5+ clients by now = ₹80,000–1,00,000 revenue

WEEK 11–12:
→ Launch on Gumroad (LabTrack + TokenQ + RecallMD)
→ Start ShiftMate development
→ Get first maintenance retainers (pitch all existing clients)
→ Monthly revenue target: ₹1,00,000+
```

---

## 17. FINAL CONCLUSION

### The 3-Line Summary of Everything

```
1. BUILD LOCAL-FIRST software (no server needed) → sell one-time → zero overhead per sale.
2. START with LabTrack Pro (walk into 5 labs this week) + sell automation NOW (no build needed).
3. After 3 sales: build RecallMD → cross-sell to same clients → stack income layers.
```

### The One Thing That Will Make or Break Everything

> **You are not in the software business. You are in the trust business.**
>
> A lab owner in Patna will not buy software from a website. They will buy it from a person they met, whose demo ran on their own data, who said "koi monthly fee nahi", and who promised to set it up himself.
>
> Walk into labs. Show the demo. Ask for ₹20,000. That's the entire business in one sentence.

### Your Competitive Advantage (Never Forget This)

```
Every SaaS tool charges monthly → You charge once → You win on price
Every tool is complex → Yours is built for non-tech users → You win on simplicity
Every tool stores data on their servers → Yours is local → You win on trust/privacy
Every tool needs internet → Yours runs offline → You win on reliability
Every tool is generic → Yours is built for this specific business → You win on fit
```

### Final Action Items (Do These in Order)

```
□ TODAY: Update LinkedIn headline to new positioning
□ TODAY: Message 5 local labs/clinics on WhatsApp (demo request)
□ WEEK 1: Learn n8n, sell first automation (even free, for testimonial)
□ WEEK 1: Set up LabTrack Pro project scaffold (Electron + React + SQLite)
□ WEEK 2: First lab visit with working (rough) demo
□ WEEK 4: Complete LabTrack MVP
□ WEEK 5: First paying client. Then build. Then scale.
```

---

*Document End*

**Document Version:** 1.0
**Created:** July 2026
**Author:** Internal Strategy — Aaryan Gupta
**Status:** Active Reference — Update quarterly

---

> *"Don't build what you think they need. Build what they said they'd pay for."*
