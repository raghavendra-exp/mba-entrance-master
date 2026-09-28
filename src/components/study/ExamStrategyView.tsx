import React, { useState } from 'react';
import { Compass, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ExamId } from '../../types';

export const ExamStrategyView: React.FC = () => {
  const { language, selectedExam, setSelectedExam } = useApp();
  const [activeExam, setActiveExam] = useState<ExamId>(selectedExam);

  const strategies: Record<ExamId, {
    title: string;
    subtitle: string;
    phases: { name: string; tips: string[] }[];
    sectionApproach: { section: string; timing: string; target: string; approach: string }[];
    goldenRules: string[];
    finalWeekPlan: string[];
  }> = {
    CAT: {
      title: 'CAT 99th Percentile Master Strategy',
      subtitle: '3 Sections x 40 Minutes = 120 Minutes strict discipline. Accuracy over attempt count.',
      phases: [
        { name: 'Phase 1: Conceptual Foundation (Jan - May)', tips: ['Build formula intuition in Arithmetic and Algebra.', 'Read 1 editorial daily from Aeon / Project Syndicate.', 'Solve basic level-1 exercises without looking at solutions.'] },
        { name: 'Phase 2: Practice & Past Papers (June - Aug)', tips: ['Solve all verified CAT papers from 2017 to 2024.', 'Classify every problem into Round 1 (Immediate), Round 2 (Solveable), Round 3 (Leave).', 'Master Games & Tournaments and Seating arrangements.'] },
        { name: 'Phase 3: Mock Testing & Error Logging (Sept - Nov)', tips: ['Take 25-30 full length mocks at your exact allocated exam slot.', 'Dedicate 3 to 4 hours analyzing every mock test.', 'Log every mistake in your Error Notebook under root cause category.'] }
      ],
      sectionApproach: [
        { section: 'VARC (24 Questions - 40 Mins)', timing: '24 mins for 4 RC passages + 16 mins for 8 VA questions', target: 'Attempt 16-18 Qs with 85%+ accuracy', approach: 'Eliminate options using extreme word traps (always, never, definitely). Do Para Jumbles and Summary carefully.' },
        { section: 'DILR (20 Questions - 40 Mins)', timing: 'Spend first 4 mins scanning all 4 sets; 18 mins per chosen set', target: 'Solve 2 complete sets (10 Qs) for 98+ percentile', approach: 'Set selection is everything. Pick the 2 most structured tabular/matrix sets first. If stuck for 10 mins, abandon and switch.' },
        { section: 'QA (22 Questions - 40 Mins)', timing: 'Round 1: 15 mins (easy sitters) | Round 2: 20 mins (moderate) | Round 3: 5 mins', target: 'Attempt 12-14 Qs with 90%+ accuracy', approach: 'Never get ego-trapped by a difficult question. Arithmetic (8 Qs) + Algebra (7 Qs) together form 70% of the paper.' }
      ],
      goldenRules: [
        'CAT is a test of REJECTION, not selection. Leaving a deceptive time-consuming question is as valuable as solving an easy one.',
        'Negative marking (-1 mark) penalizes wild guessing. Use TITA non-MCQ questions freely since they carry zero negative marks.',
        'Sectional cutoffs are mandatory for older IIMs (typically 75-80%ile in each section). Do not sacrifice one section for another.'
      ],
      finalWeekPlan: [
        'Taper down mock testing 4 days prior to exam day.',
        'Review the Formula Master book and Error Notebook personal lessons.',
        'Align your circadian rhythm: wake up early and practice cognitive focus during your slot time.'
      ]
    },

    XAT: {
      title: 'XAT Strategic Playbook (XLRI Jamshedpur Focus)',
      subtitle: '210 Minutes comprehensive test. Master Decision Making and balanced Part 1 time management.',
      phases: [
        { name: 'Phase 1: Decision Making Foundations', tips: ['Understand ethical frameworks: utilitarianism vs deontological duty.', 'Solve past 10 years official XAT Decision Making caselets.', 'Learn to spot extreme or emotionally biased options.'] },
        { name: 'Phase 2: High-Difficulty Quant & VALR', tips: ['XAT Quant has a higher geometry and algebra complexity than CAT.', 'Practice poem comprehension and critical reasoning inference.', 'Learn to solve multi-page DI caselets with arithmetic calculations.'] }
      ],
      sectionApproach: [
        { section: 'VALR (26 Qs - Part 1 Pool)', timing: 'Suggested: 50-55 Minutes', target: '15-17 Questions', approach: 'Critical reasoning and nuanced reading. Read each paragraph carefully to grasp underlying philosophical metaphors.' },
        { section: 'Decision Making (21 Qs - Part 1 Pool)', timing: 'Suggested: 50-55 Minutes', target: '14-16 Questions (Crucial for XLRI cutoff)', approach: 'Focus on multi-stakeholder balance. Choose solutions that protect ethics, follow due inquiry process, and sustain business viability.' },
        { section: 'QA-DI (28 Qs - Part 1 Pool)', timing: 'Suggested: 60-65 Minutes', target: '14-16 Questions', approach: 'Higher level of math difficulty. Look for direct arithmetic and geometry problems before attacking dense DI caselets.' },
        { section: 'GK & Essay (Part 2 - 35 Mins)', timing: '25 GK Qs (15 mins) + 1 Essay (20 mins)', target: '15+ GK Qs; Well-structured Essay', approach: 'GK has NO negative marking. Essay is evaluated for candidates shortlisted for interview; use clear arguments and balanced structure.' }
      ],
      goldenRules: [
        'Beware of the unattempted question penalty! A deduction of -0.10 marks applies for more than 8 consecutive unattempted questions in Part 1.',
        'Decision Making sectional cutoff is strictly enforced by XLRI (typically 75+ %ile for BM and HRM). Never neglect DM.',
        'Part 1 allows free section switching. Manage your 170-minute pool prudently between VALR, DM, and QA-DI.'
      ],
      finalWeekPlan: [
        'Review recent business news, corporate acquisitions, and RBI policies for XAT GK.',
        'Practice writing 2 essays under 20-minute timed conditions.',
        'Review Decision Making heuristic principles.'
      ]
    },

    SNAP: {
      title: 'SNAP Speed Strategy (SIBM Pune & SCMHRD)',
      subtitle: '60 Questions in 60 Minutes. 1 Minute per question. The ultimate speed and accuracy contest.',
      phases: [
        { name: 'Phase 1: Speed Arithmetic & Formulae', tips: ['Memorize fraction-percentage equivalents (1/2 to 1/20) and squares up to 35.', 'Solve direct formula-based quant problems in under 45 seconds.'] },
        { name: 'Phase 2: High-Velocity Analytical Reasoning', tips: ['Blood relations, Coding-decoding, Series, and Arrangements must be second nature.', 'Vocabulary and grammar analogies should take 15 seconds per question.'] }
      ],
      sectionApproach: [
        { section: 'General English (15 Questions)', timing: 'Target: 10-12 Minutes', target: '12-14 Attempts', approach: 'Fast vocabulary, idioms, grammar error spotting. No long RC passages; pure speed verbal.' },
        { section: 'Analytical & Logical Reasoning (25 Questions)', timing: 'Target: 25-28 Minutes', target: '20-22 Attempts (Highest weightage section)', approach: 'Highest marks in the paper. Solve standalone reasoning problems quickly; skip multi-step complex puzzles.' },
        { section: 'QA, DI & DS (20 Questions)', timing: 'Target: 20-22 Minutes', target: '15-17 Attempts', approach: 'Direct arithmetic and speed DI calculations. Avoid lengthy equations; use option substitution.' }
      ],
      goldenRules: [
        'There are NO sectional time limits in SNAP! You can jump between sections anytime.',
        'Target 42+ marks out of 60 for SIBM Pune (98.5+ %ile) and 40+ for SCMHRD (97+ %ile).',
        'If a question takes more than 75 seconds, GUESS intelligently or SKIP immediately. Time is your primary constraint.'
      ],
      finalWeekPlan: [
        'Take daily 60-minute mock speed runs in the Speed Lab.',
        'Review high-frequency vocabulary, idioms, and foreign phrases.',
        'Double-check admit card and slot reporting guidelines.'
      ]
    },

    NMAT: {
      title: 'NMAT by GMAC Computer-Adaptive Strategy',
      subtitle: '108 Questions in 120 Minutes. Computer-adaptive difficulty with scaled scores 36 to 360.',
      phases: [
        { name: 'Phase 1: Section Order Selection', tips: ['Choose your preferred section order wisely before the test starts. Put your strongest section first to build confidence.'] },
        { name: 'Phase 2: Question Pacing & Zero Negative Marking', tips: ['There is NO negative marking in NMAT. You MUST attempt every single question.', 'You cannot return to previous questions in computer adaptive delivery; confirm each answer before clicking Next.'] }
      ],
      sectionApproach: [
        { section: 'Language Skills (36 Qs - 28 Mins)', timing: 'Strictly 28 Minutes (~46 secs/Q)', target: '36 Attempts (Target Scaled Score: 74+)', approach: 'Swift sentence completion, prepositions, error identification. Read RCs briskly with focused skimming.' },
        { section: 'Quantitative Skills (36 Qs - 52 Mins)', timing: 'Strictly 52 Minutes (~86 secs/Q)', target: '36 Attempts (Target Scaled Score: 70+)', approach: 'Significant Data Interpretation sets and modern math. Solve calculation-heavy sets with approximation.' },
        { section: 'Logical Reasoning (36 Qs - 40 Mins)', timing: 'Strictly 40 Minutes (~66 secs/Q)', target: '36 Attempts (Target Scaled Score: 72+)', approach: 'Balanced mix of verbal critical reasoning (Statement-Assumption, Course of Action) and analytical puzzles.' }
      ],
      goldenRules: [
        'NMIMS Mumbai flagship MBA accepts ONLY your FIRST attempt score! Treat Attempt 1 as your final performance.',
        'Sectional scaled cutoffs are mandatory at NMIMS Mumbai (Language: ~74, Quant: ~70, LR: ~72; Overall: 232+).',
        'Never leave any question unattempted. If the section timer has 30 seconds left, mark all remaining questions.'
      ],
      finalWeekPlan: [
        'Practice with the Official GMAC guide retired questions.',
        'Simulate section-wise timing on computer interface.',
        'Review critical reasoning assumption frameworks.'
      ]
    }
  };

  const currentStrat = strategies[activeExam];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Compass className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'परीक्षा विशिष्ट रणनीति मार्गदर्शिका' : 'Official Exam-Specific Strategy Guides'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Tailored tactical playbooks for CAT, XAT, SNAP & NMAT: sectional pacing, question selection, and final week preparation.
        </p>
      </div>

      {/* Exam Switcher Tabs */}
      <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold w-fit">
        {(['CAT', 'XAT', 'SNAP', 'NMAT'] as ExamId[]).map(e => (
          <button
            key={e}
            onClick={() => setActiveExam(e)}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeExam === e
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {e} Playbook
          </button>
        ))}
      </div>

      {/* Main Strategy Guide Content */}
      <div className="space-y-6">
        {/* Hero Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {currentStrat.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {currentStrat.subtitle}
          </p>
        </div>

        {/* Section Approach Cards */}
        <div className="space-y-3">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-[11px] text-slate-400">
            Sectional Tactics & Time Allocation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentStrat.sectionApproach.map((sec, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <span className="font-black text-sm text-blue-600 dark:text-blue-400 block">
                  {sec.section}
                </span>
                <div className="space-y-1 text-xs">
                  <div className="text-slate-500">
                    <strong>Pacing:</strong> {sec.timing}
                  </div>
                  <div className="text-slate-500">
                    <strong>Benchmark:</strong> {sec.target}
                  </div>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                  {sec.approach}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Golden Rules */}
        <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-3xl border border-amber-200 dark:border-amber-800/60 space-y-3">
          <h3 className="font-bold text-sm text-amber-900 dark:text-amber-200 uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Non-Negotiable Golden Execution Rules</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            {currentStrat.goldenRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Week Plan */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Final 7-Day Exam Countdown Plan</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {currentStrat.finalWeekPlan.map((plan, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{plan}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
