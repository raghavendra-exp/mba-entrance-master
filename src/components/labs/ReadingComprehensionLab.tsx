import React, { useState, useEffect } from 'react';
import { BookCheck, Clock, Eye, Sparkles, CheckCircle2, ChevronRight, BarChart2, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';
import { QuestionCard } from '../common/QuestionCard';

export const ReadingComprehensionLab: React.FC = () => {
  const { language } = useApp();
  
  // Filter all RC questions
  const rcQuestions = questionsData.filter(q => q.type === 'RC' && q.passage);
  
  // Group by unique passage
  const passagesMap: Record<string, typeof rcQuestions> = {};
  for (const q of rcQuestions) {
    if (q.passage) {
      if (!passagesMap[q.passage]) {
        passagesMap[q.passage] = [];
      }
      passagesMap[q.passage].push(q);
    }
  }

  const passageKeys = Object.keys(passagesMap);
  const [selectedPassageIndex, setSelectedPassageIndex] = useState(0);
  const [readingTimerSeconds, setReadingTimerSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(true);
  const [readingFinished, setReadingFinished] = useState(false);
  const [wpm, setWpm] = useState<number | null>(null);

  const activePassageText = passageKeys[selectedPassageIndex] || '';
  const currentQuestions = passagesMap[activePassageText] || [];

  // Word count of active passage
  const wordCount = activePassageText.split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isReadingActive && !readingFinished) {
      interval = setInterval(() => {
        setReadingTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isReadingActive, readingFinished]);

  const handleFinishReading = () => {
    setReadingFinished(true);
    setIsReadingActive(false);
    const minutes = Math.max(readingTimerSeconds / 60, 0.1);
    const computedWpm = Math.round(wordCount / minutes);
    setWpm(computedWpm);
  };

  const handleSelectNewPassage = (idx: number) => {
    setSelectedPassageIndex(idx);
    setReadingTimerSeconds(0);
    setIsReadingActive(true);
    setReadingFinished(false);
    setWpm(null);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Lab Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400">
            <BookCheck className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'रीडिंग कॉम्प्रिहेंशन लैब (WPM & इन्फेरेंस)' : 'Reading Comprehension (RC) Lab'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Measure reading speed (WPM), analyze authorial tone and thesis structure, and practice elimination strategies for CAT & XAT.
        </p>
      </div>

      {/* Passage Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {passageKeys.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectNewPassage(idx)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedPassageIndex === idx
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-emerald-400'
            }`}
          >
            Passage #{idx + 1} ({passagesMap[p]?.[0]?.topic || 'Contemporary RC'})
          </button>
        ))}
      </div>

      {/* Reading Telemetry Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Length</span>
          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
            {wordCount} Words
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Reading Time</span>
          <span className="font-extrabold text-sm sm:text-base text-blue-600 dark:text-blue-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{Math.floor(readingTimerSeconds / 60)}m {readingTimerSeconds % 60}s</span>
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Reading Speed (WPM)</span>
          <span className="font-extrabold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
            {wpm ? `${wpm} WPM` : 'Reading in progress...'}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">CAT Target WPM</span>
          <span className="font-extrabold text-sm sm:text-base text-purple-600 dark:text-purple-400">
            250 - 300 WPM
          </span>
        </div>
      </div>

      {/* Main Passage Reading Panel */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 uppercase">
              {currentQuestions[0]?.topic || 'RC Context'}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-semibold text-slate-500">
              {currentQuestions.length} Questions Attached
            </span>
          </div>

          {!readingFinished ? (
            <button
              onClick={handleFinishReading}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finished Reading (Calculate WPM)</span>
            </button>
          ) : (
            <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800">
              Speed: {wpm} Words Per Minute
            </span>
          )}
        </div>

        {/* Text */}
        <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-serif whitespace-pre-line">
          {activePassageText}
        </div>

        {/* Analytical Strategy Guide for this Passage */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
          <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Passage Deconstruction & Elimination Framework</span>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-600 dark:text-slate-400">
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block">Thesis / Main Idea:</strong>
              Identify the author’s primary motive (questioning orthodox theory or offering synthesis).
            </div>
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block">Tone:</strong>
              Analytical, balanced, non-dogmatic, and critically nuanced.
            </div>
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block">Traps in Options:</strong>
              Beware of extreme modifiers (invariably, completely, impossible) unsupported in text.
            </div>
          </div>
        </div>
      </div>

      {/* Associated Questions List */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>Passage Comprehension Questions</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
            {currentQuestions.length}
          </span>
        </h3>

        <div className="space-y-4">
          {currentQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              questionNumber={idx + 1}
              showExplanationImmediately={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
