import React, { useState } from 'react';
import { Map, CheckCircle2, Circle, ArrowRight, Brain, FileText, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RoadmapView: React.FC = () => {
  const { language, setCurrentPage, setSelectedExam } = useApp();

  const [completedLevels, setCompletedLevels] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('mba_completed_levels') || '[0, 1]');
    } catch {
      return [0, 1];
    }
  });

  const toggleLevel = (lvl: number) => {
    setCompletedLevels(prev => {
      const next = prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl];
      localStorage.setItem('mba_completed_levels', JSON.stringify(next));
      return next;
    });
  };

  const levels = [
    { level: 0, title: 'Understand the Examination', desc: 'Study the official notification, eligibility, marking scheme, and sectional timings for CAT, XAT, SNAP & NMAT.', cta: 'View Exam Overview', target: 'exam-detail' },
    { level: 1, title: 'Build Foundations', desc: 'Master basic arithmetic operations, tables up to 30, squares, fraction equivalents, and Latin root words in Vocabulary.', cta: 'Launch Speed Lab', target: 'speed-lab' },
    { level: 2, title: 'Concept Building', desc: 'Derive and understand core theorems: Arithmetic percentages, Quadratic roots, Triangles, and Circular arrangements.', cta: 'Open Formula Master', target: 'formula-book' },
    { level: 3, title: 'Chapter Practice', desc: 'Solve 30-50 questions per chapter across Arithmetic, Algebra, Critical Reasoning, and DILR matrices.', cta: 'Practice Engine', target: 'practice' },
    { level: 4, title: 'Mixed Multi-topic Practice', desc: 'Transition from single-topic drills to multi-topic sets where you must decide which mathematical tool to apply.', cta: 'Mixed 100 Practice', target: 'practice' },
    { level: 5, title: 'Verified PYQs (Past Year Papers)', desc: 'Solve authentic CAT, XAT, SNAP past examination papers from 2018 to 2025 under untimed conditions.', cta: 'Filter Verified PYQs', target: 'practice' },
    { level: 6, title: 'Sectional Tests with Sectional Timers', desc: 'Train under strict 40-minute (CAT) and speed (SNAP) sectional constraints to master question selection.', cta: 'Take Sectional Mock', target: 'mock-tests' },
    { level: 7, title: 'Full-Length Mock Examinations', desc: 'Simulate full exam day conditions: 2 hours continuous testing at the exact slot time (8:30 AM, 12:30 PM, or 4:30 PM).', cta: 'Launch Full Mock', target: 'mock-tests' },
    { level: 8, title: 'Root-Cause Error Correction', desc: 'Catalog every mistake in your Error Notebook under Concept Gap, Calculation Error, Misread, or Time Pressure.', cta: 'Review Error Notebook', target: 'error-notebook' },
    { level: 9, title: 'Spaced Repetition & Formula Revision', desc: 'Revise flashcards and formula notebooks using 1-3-7-15-30 day intervals so knowledge remains fresh.', cta: 'Start Spaced Revision', target: 'flashcards' },
    { level: 10, title: 'Final Exam Simulation & Mindset', desc: 'Final taper week: review error notes, confirm exam center checklist, and simulate calming test strategy.', cta: 'Read Exam Strategy', target: 'strategy' }
  ];

  const progressPercentage = Math.round((completedLevels.length / levels.length) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Map className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'जीरो-टू-एग्जाम रोडमैप (Levels 0 से 10)' : 'Zero-to-Exam Roadmap (Levels 0 to 10)'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          The step-by-step master progression from complete beginner to peak exam simulation. Track your milestones.
        </p>
      </div>

      {/* Progress Bar Card */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-700 dark:text-slate-300">Roadmap Completion</span>
          <span className="text-blue-600 dark:text-blue-400 font-mono">{progressPercentage}% ({completedLevels.length} of {levels.length} Milestones)</span>
        </div>
        <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="space-y-3">
        {levels.map((lvl) => {
          const isDone = completedLevels.includes(lvl.level);

          return (
            <div
              key={lvl.level}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDone
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleLevel(lvl.level)}
                  className="mt-0.5 text-slate-400 hover:text-emerald-500 transition-colors shrink-0"
                  title={isDone ? "Mark Incomplete" : "Mark Complete"}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                  )}
                </button>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[10px] uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">
                      Level {lvl.level}
                    </span>
                    <h3 className={`font-bold text-sm sm:text-base ${isDone ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                      {lvl.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {lvl.desc}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage(lvl.target as any)}
                className="self-end sm:self-center px-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors flex items-center gap-1 shrink-0"
              >
                <span>{lvl.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
