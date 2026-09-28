import React, { useState, useEffect, useRef } from 'react';
import { Zap, Play, RotateCcw, Award, CheckCircle2, XCircle, Clock, TrendingUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SpeedProblem {
  prompt: string;
  answer: number;
  options: number[];
  category: 'percentages' | 'fractions' | 'squares' | 'multiplication' | 'di-speed';
}

export const SpeedLab: React.FC = () => {
  const { language, speedLabMetrics, recordSpeedLabRun } = useApp();
  const [drillCategory, setDrillCategory] = useState<'all' | 'percentages' | 'fractions' | 'squares' | 'multiplication' | 'di-speed'>('all');
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(60); // 60 seconds speed drill
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentProblem, setCurrentProblem] = useState<SpeedProblem | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [drillFinished, setDrillFinished] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Generate dynamic speed math problem
  const generateProblem = (): SpeedProblem => {
    const cats: ('percentages' | 'fractions' | 'squares' | 'multiplication' | 'di-speed')[] = 
      drillCategory === 'all' 
        ? ['percentages', 'fractions', 'squares', 'multiplication', 'di-speed']
        : [drillCategory];
    const cat = cats[Math.floor(Math.random() * cats.length)];

    if (cat === 'squares') {
      const num = 11 + Math.floor(Math.random() * 25); // 11 to 35
      const ans = num * num;
      const opts = [ans, ans + 10, ans - 10, ans + 20].sort(() => 0.5 - Math.random());
      return { prompt: `What is (${num})² ?`, answer: ans, options: opts, category: cat };
    } 
    else if (cat === 'percentages') {
      const p = [5, 10, 15, 20, 25, 30, 40, 50, 75][Math.floor(Math.random() * 9)];
      const base = (1 + Math.floor(Math.random() * 20)) * 40; // clean numbers
      const ans = Math.round((p / 100) * base);
      const opts = [ans, ans + 5, ans - 4, ans + 10].sort(() => 0.5 - Math.random());
      return { prompt: `Calculate ${p}% of ${base}`, answer: ans, options: opts, category: cat };
    }
    else if (cat === 'multiplication') {
      const a = 12 + Math.floor(Math.random() * 15);
      const b = 11 + Math.floor(Math.random() * 15);
      const ans = a * b;
      const opts = [ans, ans + 12, ans - 10, ans + 8].sort(() => 0.5 - Math.random());
      return { prompt: `${a} × ${b} = ?`, answer: ans, options: opts, category: cat };
    }
    else if (cat === 'di-speed') {
      const oldVal = 200 + Math.floor(Math.random() * 10) * 50;
      const newVal = oldVal + (oldVal * (10 + Math.floor(Math.random() * 4) * 5)) / 100;
      const ans = Math.round(((newVal - oldVal) / oldVal) * 100);
      const opts = [ans, ans + 5, ans - 5, ans + 10].sort(() => 0.5 - Math.random());
      return { prompt: `DI Growth: From ${oldVal} to ${newVal}. Growth % = ?`, answer: ans, options: opts, category: cat };
    }
    else {
      // fractions
      const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 20];
      const d = denoms[Math.floor(Math.random() * denoms.length)];
      const ans = parseFloat((100 / d).toFixed(2));
      const opts = [ans, parseFloat((ans + 1.25).toFixed(2)), parseFloat((ans - 0.75).toFixed(2)), parseFloat((ans * 1.2).toFixed(2))].sort(() => 0.5 - Math.random());
      return { prompt: `Fraction equivalent of 1/${d} as a percentage:`, answer: ans, options: opts, category: cat };
    }
  };

  const startDrill = () => {
    setScore(0);
    setAttempts(0);
    setStreak(0);
    setTimer(60);
    setDrillFinished(false);
    setIsRunning(true);
    setCurrentProblem(generateProblem());
  };

  useEffect(() => {
    if (isRunning && timer > 0) {
      timerRef.current = setTimeout(() => setTimer(t => t - 1), 1000);
    } else if (isRunning && timer === 0) {
      setIsRunning(false);
      setDrillFinished(true);
      recordSpeedLabRun(attempts, score, 60);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, timer]);

  const handleSelectOption = (opt: number) => {
    if (!currentProblem || !isRunning) return;
    setAttempts(a => a + 1);

    if (opt === currentProblem.answer) {
      setScore(s => s + 1);
      setStreak(st => st + 1);
      setFeedback('correct');
    } else {
      setStreak(0);
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentProblem(generateProblem());
    }, 250);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400">
              <Zap className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'HI' ? 'मैनेजमेंट एंट्रेंस स्पीड लैब' : 'Management Entrance Speed Lab'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Rapid calculation drills for CAT, SNAP & NMAT: Percentages, Fractions, Squares, Multiplication, and DI Growth.
          </p>
        </div>

        {/* Lifetime metrics */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Attempted</span>
            <span className="font-extrabold text-slate-900 dark:text-white">{speedLabMetrics.attempts} Qs</span>
          </div>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Accuracy</span>
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
              {speedLabMetrics.attempts > 0 ? `${Math.round((speedLabMetrics.correct / speedLabMetrics.attempts) * 100)}%` : '0%'}
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      {!isRunning && (
        <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          {[
            { id: 'all', label: 'All Modules' },
            { id: 'percentages', label: 'Percentages' },
            { id: 'fractions', label: 'Fraction to %' },
            { id: 'squares', label: 'Squares (11-35)' },
            { id: 'multiplication', label: 'Speed Multiplication' },
            { id: 'di-speed', label: 'DI Rapid Growth' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setDrillCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                drillCategory === tab.id
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Arena */}
      {!isRunning && !drillFinished ? (
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent bg-white dark:bg-slate-900 rounded-3xl border border-amber-200 dark:border-slate-800 p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Zap className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              60-Second Calculation Blitz
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Solve as many questions as possible in 60 seconds without scratch paper. Develop high-speed intuition for Quant and Data Interpretation.
            </p>
          </div>
          <button
            onClick={startDrill}
            className="px-8 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-amber-500/30 inline-flex items-center gap-2 scale-100 hover:scale-105"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start 60s Speed Run</span>
          </button>
        </div>
      ) : isRunning && currentProblem ? (
        <div className={`bg-white dark:bg-slate-900 rounded-3xl border p-6 sm:p-10 shadow-sm space-y-6 transition-colors ${
          feedback === 'correct' ? 'border-emerald-500 bg-emerald-50/20' : feedback === 'wrong' ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200 dark:border-slate-800'
        }`}>
          {/* Live Progress Bar & Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-200 dark:border-amber-800">
                <Clock className="w-4 h-4" />
                <span>{timer}s</span>
              </span>
              <span className="text-xs font-bold text-slate-500">
                Score: <strong className="text-slate-900 dark:text-white">{score}</strong> / {attempts}
              </span>
            </div>
            {streak > 1 && (
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-white animate-bounce">
                🔥 {streak} Streak!
              </span>
            )}
          </div>

          {/* Problem Display */}
          <div className="text-center py-6 sm:py-10 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-500 block">
              {currentProblem.category}
            </span>
            <div className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono">
              {currentProblem.prompt}
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
            {currentProblem.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt)}
                className="py-4 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white transition-all transform active:scale-95 shadow-xs"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Results Report */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Speed Blitz Completed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {score >= 12 ? 'Outstanding speed! You are performing at CAT 99th percentile speed.' : 'Great effort! Regular daily drills will sharpen your exam split-second instincts.'}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto py-4">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Questions</span>
              <span className="text-xl font-black text-slate-900 dark:text-white">{attempts}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Correct</span>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{score}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Sec / Question</span>
              <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                {attempts > 0 ? (60 / attempts).toFixed(1) : '0'}s
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={startDrill}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-500/20 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Blitz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
