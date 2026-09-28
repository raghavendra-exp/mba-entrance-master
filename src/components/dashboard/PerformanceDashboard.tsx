import React from 'react';
import { Award, Brain, Target, AlertTriangle, RotateCcw, Zap, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';

export const PerformanceDashboard: React.FC = () => {
  const { language, speedLabMetrics, errorNotebook, mockHistory, setCurrentPage, setBreadcrumbs } = useApp();

  // Aggregate stats
  const totalMocks = mockHistory.length;
  const avgMockScore = totalMocks > 0
    ? (mockHistory.reduce((acc, m) => acc + m.totalScore, 0) / totalMocks).toFixed(1)
    : '0';

  const weakTopicCounts: Record<string, number> = {};
  errorNotebook.forEach(err => {
    weakTopicCounts[err.topic] = (weakTopicCounts[err.topic] || 0) + 1;
  });

  const topWeakTopics = Object.entries(weakTopicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Award className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'प्रदर्शन विश्लेषण एवं प्रगति डैशबोर्ड' : 'Performance Analytics & Aspirant Dashboard'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Real-time metrics on mock test performance, speed lab calculation stamina, error notebook revisions, and automated weak area diagnosis.
        </p>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Full Mocks Taken</span>
            <Target className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
            {totalMocks}
          </div>
          <span className="text-[11px] text-slate-500 block">Avg Score: {avgMockScore}</span>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Speed Lab Drills</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
            {speedLabMetrics.attempts}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold block">
            {speedLabMetrics.attempts > 0 ? `${Math.round((speedLabMetrics.correct / speedLabMetrics.attempts) * 100)}% Accuracy` : 'No runs yet'}
          </span>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Logged Mistakes</span>
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">
            {errorNotebook.length}
          </div>
          <span className="text-[11px] text-slate-500 block">In Spaced Revision Queue</span>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Question Bank Size</span>
            <Brain className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
            {questionsData.length}
          </div>
          <span className="text-[11px] text-slate-500 block">Verified & Original</span>
        </div>
      </div>

      {/* Automated Weak-Area Diagnostic Engine */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
              Personalized Weak-Area Recommendation Engine
            </h3>
          </div>
        </div>

        {topWeakTopics.length === 0 ? (
          <p className="text-xs text-slate-500 leading-relaxed">
            No weak topics detected yet. As you solve questions in the Practice Engine or take Mock Tests, the system automatically analyzes your mistakes to curate targeted remedial drills.
          </p>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-slate-500">
              Based on your recent mistake logs, you need reinforcement in the following topics:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {topWeakTopics.map(([topicName, count]) => (
                <div key={topicName} className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white block">
                      {topicName}
                    </span>
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">
                      {count} Logged Mistakes
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentPage('practice', { query: topicName });
                      setBreadcrumbs([
                        { label: 'Home', page: 'home' },
                        { label: 'Dashboard', page: 'dashboard' },
                        { label: `Remedial Drill: ${topicName}`, page: 'practice' }
                      ]);
                    }}
                    className="w-full py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    Generate Drill (20 Qs) →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mock Test History */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          <span>Recent Full Mock Test History</span>
        </h3>

        {mockHistory.length === 0 ? (
          <p className="text-xs text-slate-400 py-4 text-center">
            No mock tests recorded yet. Launch a full simulation from the Mock Test Engine.
          </p>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {mockHistory.map((m) => (
              <div key={m.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                      {m.exam}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      Score: {m.totalScore} / {m.maxScore}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {m.date} • Accuracy: {m.accuracy}% ({m.correctCount} correct, {m.incorrectCount} wrong)
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                  {Math.floor(m.totalTimeSeconds / 60)} mins
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
