import React, { useState } from 'react';
import { Bell, ExternalLink, Calendar, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { notificationsData } from '../../data/updates/notificationsData';
import { useApp } from '../../context/AppContext';
import { ExamId } from '../../types';

export const NotificationTracker: React.FC = () => {
  const { language } = useApp();
  const [filterExam, setFilterExam] = useState<string>('all');

  const filtered = notificationsData.filter(n => {
    if (filterExam !== 'all' && n.exam !== filterExam) return false;
    return true;
  });

  const stages = [
    'Notification',
    'Registration',
    'Correction',
    'Admit Card',
    'Exam',
    'Answer Key',
    'Result',
    'Scorecard',
    'Interview',
    'Admission'
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Bell className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'आधिकारिक अधिसूचना एवं माइलस्टोन ट्रैकर' : 'Official Notification & Milestone Tracker'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Live stage-by-stage tracking across CAT, XAT, SNAP & NMAT application portals, admit cards, and result releases.
        </p>
      </div>

      {/* 10-Stage Visual Pipeline */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
          Lifecycle Progression Pipeline
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-[11px] font-bold">
          {stages.map((stg, i) => (
            <React.Fragment key={stg}>
              <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                {i + 1}. {stg}
              </span>
              {i < stages.length - 1 && (
                <span className="text-slate-300 dark:text-slate-600">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Exam Filter */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        {['all', 'CAT', 'XAT', 'SNAP', 'NMAT'].map(e => (
          <button
            key={e}
            onClick={() => setFilterExam(e)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterExam === e
                ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-300'
            }`}
          >
            {e === 'all' ? 'All Notifications' : `${e} Alerts`}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">
                  {item.exam}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {item.stage} Stage
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
              {language === 'HI' ? item.titleHindi : item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'HI' ? item.summaryHindi : item.summary}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">
                Official Examination Authority Bulletin
              </span>

              <a
                href={item.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors inline-flex items-center gap-1 shadow-xs"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
