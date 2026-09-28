import React, { useState } from 'react';
import { AlertCircle, Trash2, CheckCircle2, RotateCcw, Clock, ArrowRight, Brain, Filter } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';

export const ErrorNotebookView: React.FC = () => {
  const { errorNotebook, removeErrorLog, advanceErrorRevision, language, setCurrentPage } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeTestQuestionId, setActiveTestQuestionId] = useState<string | null>(null);

  const filteredErrors = errorNotebook.filter(e => {
    if (filterCategory === 'all') return true;
    return e.mistakeCategory === filterCategory;
  });

  const getQuestion = (qId: string) => questionsData.find(q => q.id === qId);

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'HI' ? 'त्रुटि नोटबुक (गलतियों का विश्लेषण)' : 'Error Notebook & Mistake Analysis'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Personalized repository of every missed question. Classified by root cause mistake category and reviewed using spaced repetition.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-rose-700 dark:text-rose-300 shrink-0">
          <span>Logged Mistakes: </span>
          <strong className="text-sm font-black">{errorNotebook.length}</strong>
        </div>
      </div>

      {/* Mistake Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {[
          { id: 'all', label: `All Errors (${errorNotebook.length})` },
          { id: 'Concept Gap', label: 'Concept Gap' },
          { id: 'Calculation Error', label: 'Calculation Error' },
          { id: 'Misread', label: 'Misread' },
          { id: 'Guess', label: 'Guess' },
          { id: 'Time Pressure', label: 'Time Pressure' },
          { id: 'Wrong Elimination', label: 'Wrong Elimination' },
          { id: 'Question Selection Error', label: 'Selection Error' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterCategory === tab.id
                ? 'bg-rose-600 border-rose-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Errors List */}
      {filteredErrors.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-sm text-slate-700 dark:text-slate-300">
            No logged errors in this category!
          </h3>
          <p className="text-xs max-w-md mx-auto">
            When you miss a question during practice or mock tests, click "Log in Error Notebook" to systematically schedule it for spaced revision.
          </p>
          <button
            onClick={() => setCurrentPage('practice')}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
          >
            Go to Practice Engine
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredErrors.map((err) => {
            const q = getQuestion(err.questionId);
            if (!q) return null;

            return (
              <div
                key={err.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4"
              >
                {/* Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 font-extrabold text-[10px] uppercase">
                      {err.mistakeCategory}
                    </span>
                    <span className="font-mono text-slate-400 text-[11px]">{err.questionId}</span>
                    <span className="text-slate-500">•</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{err.subject} - {err.topic}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Next Revision: {err.nextRevisionDate} (Stage {err.repetitionStage}/6)</span>
                    </span>
                    <button
                      onClick={() => removeErrorLog(err.id)}
                      className="p-1 text-slate-400 hover:text-rose-500 rounded"
                      title="Delete from Notebook"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question snippet */}
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {q.question}
                </p>

                {/* Mistake analysis box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Your Response:</span>
                    <span className="font-mono font-bold text-rose-600 dark:text-rose-400">{err.userAnswer}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Verified Correct Answer:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{err.correctAnswer}</span>
                  </div>
                  {err.userNotes && (
                    <div className="sm:col-span-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Personal Lesson:</span>
                      <p className="text-slate-700 dark:text-slate-300 italic">"{err.userNotes}"</p>
                    </div>
                  )}
                </div>

                {/* Spaced Review Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] text-slate-400">
                    Interval: <strong>{err.repetitionIntervalDays} Days</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => advanceErrorRevision(err.id, false)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Still Confused (Reset to Day 1)
                    </button>
                    <button
                      onClick={() => advanceErrorRevision(err.id, true)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mastered (Advance Interval)</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
