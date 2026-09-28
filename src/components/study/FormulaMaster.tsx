import React, { useState } from 'react';
import { Calculator, Search, AlertTriangle, CheckCircle, ExternalLink, BookOpen, Sparkles } from 'lucide-react';
import { formulaeData } from '../../data/formulae/formulaeData';
import { useApp } from '../../context/AppContext';

export const FormulaMaster: React.FC = () => {
  const { language, setCurrentPage, setBreadcrumbs } = useApp();
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const chapters = ['all', 'Arithmetic', 'Algebra', 'Geometry', 'Number System', 'Modern Mathematics'];

  const filteredFormulae = formulaeData.filter(f => {
    if (selectedChapter !== 'all' && f.chapter !== selectedChapter) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        f.formulaName.toLowerCase().includes(q) ||
        f.topic.toLowerCase().includes(q) ||
        f.explanation.toLowerCase().includes(q) ||
        f.formulaMath.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Calculator className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'मात्रात्मक योग्यता सूत्र मास्टर' : 'Management Quant Formula Master'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Exhaustive formula handbook for CAT, XAT, SNAP & NMAT with validity conditions, worked examples, and common student traps.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none text-xs font-semibold">
          {chapters.map(ch => (
            <button
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`px-3 py-1.5 rounded-xl capitalize whitespace-nowrap transition-all ${
                selectedChapter === ch
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {ch === 'all' ? 'All Formulas' : ch}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search theorem or formula..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulae.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                  {item.chapter} • {item.topic}
                </span>
                <button
                  onClick={() => {
                    setCurrentPage('practice', { query: item.topic });
                    setBreadcrumbs([
                      { label: 'Home', page: 'home' },
                      { label: 'Formula Master', page: 'formula-book' },
                      { label: `Practice ${item.topic}`, page: 'practice' }
                    ]);
                  }}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Practice Questions</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {item.formulaName}
              </h3>

              {/* Math Equation Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono text-xs sm:text-sm font-black text-blue-700 dark:text-blue-300 whitespace-pre-line leading-relaxed">
                {item.formulaMath}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'HI' ? item.explanationHindi : item.explanation}
              </p>

              {/* Conditions & Example */}
              <div className="space-y-2 text-xs pt-1">
                <div className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Conditions:</strong> {item.conditions}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 text-[11px] leading-relaxed">
                  <strong>Example:</strong> {item.example}
                </div>
              </div>
            </div>

            {/* Common Trap */}
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Common Student Mistake:</strong> {item.commonMistake}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
