import React, { useState } from 'react';
import { Layers, PieChart, Table, Trophy, Users, CheckCircle2, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';
import { QuestionCard } from '../common/QuestionCard';

export const DilrLab: React.FC = () => {
  const { language } = useApp();
  const [filterType, setFilterType] = useState<'all' | 'di' | 'lr' | 'caselet'>('all');

  const dilrQuestions = questionsData.filter(q => q.subject === 'DILR');

  const filtered = dilrQuestions.filter(q => {
    if (filterType === 'all') return true;
    if (filterType === 'di') return q.chapter.toLowerCase().includes('data interpretation') || q.type === 'DI';
    if (filterType === 'lr') return q.chapter.toLowerCase().includes('logical reasoning');
    if (filterType === 'caselet') return q.type === 'Caselet' || q.passage;
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400">
            <Layers className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'डीआईएलआर लैब (डेटा व्याख्या और तार्किक तर्क)' : 'Data Interpretation & Logical Reasoning (DILR) Lab'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Master set selection, matrix arrangements, games & tournaments, and multi-chart tabular synthesis.
        </p>
      </div>

      {/* Set Strategy Quick Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-500 block mb-1">
            Golden Rule: Set Selection
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Spend the first 4 minutes scanning all 4 sets in CAT. Solve the 2 most structured sets first to lock in 99%ile accuracy.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-500 block mb-1">
            Branching Cases Early
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            When multiple arrangements are possible, create Case 1 & Case 2 side-by-side rather than doing mental trial and error.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500 block mb-1">
            Know When to Exit
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have spent 12 minutes on a set without completing the core grid, cut losses and transition immediately to the next set.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          {[
            { id: 'all', label: `All DILR (${dilrQuestions.length})` },
            { id: 'caselet', label: 'Multi-Question Caselets' },
            { id: 'di', label: 'Data Interpretation (Charts & Tables)' },
            { id: 'lr', label: 'Logical Puzzles & Seating' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <strong className="text-slate-900 dark:text-white">{filtered.length}</strong> Questions
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {filtered.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            questionNumber={idx + 1}
            showExplanationImmediately={true}
          />
        ))}
      </div>
    </div>
  );
};
