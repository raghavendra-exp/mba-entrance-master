import React, { useState } from 'react';
import { Scale, ShieldAlert, Users, Compass, HelpCircle, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';
import { QuestionCard } from '../common/QuestionCard';

export const DecisionMakingLab: React.FC = () => {
  const { language } = useApp();
  const [filterTopic, setFilterTopic] = useState<'all' | 'ethical' | 'business' | 'workplace'>('all');

  const dmQuestions = questionsData.filter(q => q.subject === 'Decision Making' || q.type === 'DM');

  const filtered = dmQuestions.filter(q => {
    if (filterTopic === 'all') return true;
    if (filterTopic === 'ethical') return q.topic.toLowerCase().includes('ethical') || q.chapter.toLowerCase().includes('ethical');
    if (filterTopic === 'business') return q.topic.toLowerCase().includes('business') || q.topic.toLowerCase().includes('strategy');
    if (filterTopic === 'workplace') return q.topic.toLowerCase().includes('workplace') || q.topic.toLowerCase().includes('conflict') || q.topic.toLowerCase().includes('hr');
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 text-white border border-purple-800/50 shadow-xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-400/30">
            <Scale className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
            XAT EXCLUSIVE MASTER LAB
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'HI' ? 'ज़ैट डिसीजन मेकिंग लैब' : 'XAT Decision Making Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Master the signature section of XLRI Jamshedpur entrance examination. Learn to balance corporate fiduciary duty, ethical compliance, fairness, and stakeholder trade-offs.
          </p>
        </div>

        {/* Core Decision Framework Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-extrabold text-purple-300 block mb-0.5">1. Fact vs Emotion</span>
            <span className="text-[11px] text-slate-300">Base judgment purely on stated facts, not assumptions.</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-extrabold text-blue-300 block mb-0.5">2. Multi-Stakeholder</span>
            <span className="text-[11px] text-slate-300">Balance owners, customers, employees, and society.</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-extrabold text-amber-300 block mb-0.5">3. Avoid Extremes</span>
            <span className="text-[11px] text-slate-300">Reject hasty termination or sweeping punitive actions.</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-extrabold text-emerald-300 block mb-0.5">4. Due Process</span>
            <span className="text-[11px] text-slate-300">Conduct fair inquiries before reaching conclusions.</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          {[
            { id: 'all', label: `All Caselets (${dmQuestions.length})` },
            { id: 'ethical', label: 'Ethical Dilemmas' },
            { id: 'business', label: 'Business Strategy' },
            { id: 'workplace', label: 'Workplace & HR Conflicts' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterTopic(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterTopic === tab.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Showing <strong className="text-slate-900 dark:text-white">{filtered.length}</strong> Decision Scenarios
        </div>
      </div>

      {/* Caselets List */}
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
