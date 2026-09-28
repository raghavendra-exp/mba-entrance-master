# MBA ENTRANCE MASTER INDIA 🎯

> **CAT • XAT • SNAP • NMAT — Complete Preparation, PYQ, Practice, Mock Tests, Books & College Information**

[![Deploy to GitHub Pages](https://github.com/raghavendra-exp/mba-entrance-master/actions/workflows/deploy.yml/badge.svg)](https://github.com/raghavendra-exp/mba-entrance-master/actions/workflows/deploy.yml)
[![Content & Build Validation](https://github.com/raghavendra-exp/mba-entrance-master/actions/workflows/content-validation.yml/badge.svg)](https://github.com/raghavendra-exp/mba-entrance-master/actions/workflows/content-validation.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Live Website:** [https://raghavendra-exp.github.io/mba-entrance-master/](https://raghavendra-exp.github.io/mba-entrance-master/)

---

## 🌟 Overview

**MBA Entrance Master India** is an all-in-one, responsive, bilingual (**English + Hindi**), interactive open-access platform meticulously crafted for Indian MBA aspirants targeting:

1. **CAT** — Common Admission Test (IIMs & top institutes)
2. **XAT** — Xavier Aptitude Test (XLRI Jamshedpur/Delhi & associate institutes)
3. **SNAP** — Symbiosis National Aptitude Test (SIBM, SCMHRD & SIU institutes)
4. **NMAT by GMAC** — NMIMS Mumbai/Bengaluru, K J Somaiya, XIMB & partner universities

The ecosystem bridges the complete preparation journey:
```
SYLLABUS ➔ CONCEPT ➔ BOOKS ➔ PRACTICE ➔ PYQ ➔ MOCK ➔ ANALYSIS ➔ REVISION ➔ EXAM ➔ SCORE ➔ ADMISSION ➔ COLLEGE
```

---

## 🚀 Key Features

### 1. 📚 Complete Examination Deep Dives
* **Independent Modules** for CAT, XAT, SNAP, and NMAT.
* **Historical Pattern Shifts**: Track pattern, question count, and marking changes across 2024, 2025, and 2026.
* **Factual Side-by-Side Comparison Matrix**: Sections, question count, duration, negative marking, unattempted penalties, normalisation, and participating institutes.

### 2. 🧠 Authentic Question Bank (1,228+ Questions)
* Rigorously categorized across **Quantitative Aptitude**, **VARC**, **DILR**, **Decision Making (XAT)**, and **General Knowledge**.
* Explicit source tagging: `VERIFIED PYQ`, `ORIGINAL`, and `PYQ-STYLE`.
* Complete step-by-step solutions, alternative shortcut methods, common student traps, and formula references.

### 3. 🧪 Interactive Specialized Labs
* **Speed Lab (Mental Math Blitz)**: 60-second interactive drills for percentage reciprocals (1/2 to 1/20), square roots, quick products, and DI calculations.
* **Reading Comprehension Lab**: Live WPM (Words Per Minute) reader with active tracking, comprehension checkpoints, tone identifiers, and inference questions.
* **Decision Making Lab (XAT)**: Ethical frameworks, stakeholder alignment analysis, and multi-scenario management caselets.
* **DILR Logic Lab**: Caselet breakdowns, arrangement matrices, graph readers, and condition trackers.
* **Vocabulary Builder**: High-frequency exam words with English + Hindi meanings, audio-ready pronunciations, mnemonics, synonyms, and antonyms.
* **Quant Formula Master**: Categorized formula cheat sheets with applicability conditions, exam traps, and real CAT-level illustrations.

### 4. 📝 Realistic Mock Test Engine
* True-to-exam interfaces:
  * **CAT**: 66 questions, strict 40-minute sectional locks, +3 / -1 marking, TITA questions.
  * **XAT**: 210 minutes, Part 1 & Part 2, unattempted question penalty deduction after 8 blanks.
  * **SNAP**: 60 questions in 60 minutes speed-run.
  * **NMAT**: Adaptive sectional countdowns, score range 36–360.
* Interactive question palette (Answered, Marked for Review, Unvisited, Answered & Marked).
* Deep performance analytics: Accuracy, time per question, projected percentile, section weakness diagnosis, and celebratory confetti upon completion.

### 5. 🔁 Error Notebook & SuperMemo SM-2 Spaced Repetition
* Root-cause mistake tracking:
  * *Concept Gap*, *Calculation Error*, *Misread Question*, *Formula Forgotten*, *Time Pressure*, *Overthinking*.
* Automated revision intervals: **1 day ➔ 3 days ➔ 7 days ➔ 15 days ➔ 30 days ➔ 60 days**.
* Smart flashcards with flip-to-reveal solutions and self-assessment buttons.

### 6. 🏛️ College Explorer & Admission Guide
* Verified data for 25+ premier B-Schools:
  * IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore, Mumbai.
  * XLRI Jamshedpur / Delhi, FMS Delhi, SPJIMR Mumbai, SIBM Pune, SCMHRD, NMIMS Mumbai, MDI Gurgaon, IIFT, TISS, etc.
* Real factual data: Median & average CTCs, tuition fees, batch strength, cutoff percentiles, and selection weightage matrices (CAT score vs 10th/12th/Grad vs WAT/PI vs Diversity).
* Step-by-step admission timelines: IIM CAP, XLRI GD/PI, SIU GE-PIWAT, NMIMS CD-PI.

### 7. 🌐 Bilingual (English + Hindi) & Accessibility
* Instant toggle between English and Hindi for labels, navigation, explanations, and instructions.
* High contrast dark/light themes, keyboard navigation support, and WCAG AA color accessibility.

### 8. 📱 Progressive Web App (PWA) & Offline Ready
* Offline caching of formulas, syllabus, vocabulary, and practice questions via built-in Service Worker.
* Installable on Android, iOS, and Desktop as a native standalone app.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **CI/CD** | GitHub Actions (`deploy.yml`, `content-validation.yml`, `link-check.yml`) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Directory Structure

```
mba-entrance-master/
├── .github/
│   └── workflows/
│       ├── deploy.yml               # Automated GitHub Pages CI/CD
│       ├── content-validation.yml   # PR TypeScript & build validation
│       └── link-check.yml           # Automated weekly link health check
├── public/
│   ├── favicon.svg                  # High-res SVG favicon
│   ├── manifest.json                # PWA manifest
│   └── sw.js                        # Offline caching service worker
├── src/
│   ├── components/
│   │   ├── common/                  # StatusBadge, QuestionCard, GlobalSearchModal
│   │   ├── layout/                  # Header, Sidebar, Breadcrumb, MobileBottomNav, Footer
│   │   ├── labs/                    # SpeedLab, RC Lab, DILR Lab, DecisionMakingLab, VocabLab, FormulaMaster
│   │   ├── practice/                # PracticeEngine, MockTestEngine, ErrorNotebookView, FlashcardEngine
│   │   ├── exams/                   # ExamOverview, ExamComparisonTable, SyllabusMasterView
│   │   ├── colleges/                # CollegeExplorerView, AdmissionGuideView
│   │   └── home/                    # HomePage, RoadmapView, StudyPlanner, ExamStrategyView, etc.
│   ├── context/
│   │   └── AppContext.tsx           # Global state (Language, Theme, Router, Bookmarks, Error Log)
│   ├── data/
│   │   ├── exams/                   # cat.ts, xat.ts, snap.ts, nmat.ts, comparison.ts
│   │   ├── syllabus/                # masterSyllabus.ts (QA, VARC, DILR, DM, GK)
│   │   ├── questions/               # questions.json (1,228 verified questions), index.ts
│   │   ├── books/                   # booksData.ts (Arun Sharma, Nishit Sinha, Sarvesh Verma, etc.)
│   │   ├── colleges/                # collegesData.ts (IIM A/B/C/L/K/I/M, XLRI, FMS, SIBM, NMIMS...)
│   │   ├── admission/               # admissionData.ts (CAP, GE-PIWAT, CD-PI, weightages)
│   │   ├── formulae/                # formulaeData.ts (Quant formula repository)
│   │   ├── vocabulary/              # vocabData.ts (High-frequency bilingual word bank)
│   │   ├── current-affairs/         # currentAffairsData.ts (Business, Economy & Banking GK)
│   │   └── updates/                 # notificationsData.ts (Live exam timeline tracker)
│   ├── types/
│   │   └── index.ts                 # Full TypeScript schemas and interfaces
│   ├── App.tsx                      # Primary view router and layout orchestrator
│   └── main.tsx                     # React application entry point
├── scripts/
│   └── generate_questions.cjs       # Question bank generation & validation script
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 💻 Local Development Setup

### Prerequisites
* [Node.js](https://nodejs.org/) v18.0.0 or higher
* `npm` v9.0.0 or higher

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/raghavendra-exp/mba-entrance-master.git
   cd mba-entrance-master
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run type checks & production build:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🛡️ Copyright Compliance & Ethical Standards

* **Zero Piracy Policy**: All recommended books are linked exclusively to verified publishers and legitimate authorized distributors (Amazon, Flipkart, McGraw-Hill, Pearson). No unauthorized PDFs or pirated copies are hosted or distributed.
* **Authentic Data Grounding**: All cutoffs, placement salaries, fees, seat intakes, and selection criteria are grounded in official institutional disclosure documents (NIRF, audited placement reports, official admission policies).
* **Objective Analysis**: Strictly avoids ungrounded subjective coaching hype; presents pure factual side-by-side metrics.

---

## 🤝 Contributing

Contributions to expand syllabus notes, add new practice problems, or update latest notifications are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AddQuantTricks`)
3. Commit your Changes (`git commit -m 'Add Quant speed tricks'`)
4. Push to the Branch (`git push origin feature/AddQuantTricks`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

*Crafted with precision for future Indian business leaders and changemakers.* 🇮🇳
