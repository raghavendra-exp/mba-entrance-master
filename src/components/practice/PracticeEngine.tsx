import React, { useState, useMemo } from 'react';
import { 
  Brain, 
  Filter, 
  Sparkles, 
  RotateCcw, 
  Zap, 
  Award, 
  CheckCircle2, 
  SlidersHorizontal,
  BookmarkCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData, QuestionFilters, filterQuestions } from '../../data/questions';
import { QuestionCard } from '../common/QuestionCard';
import { Question, ExamId, Difficulty, QuestionSourceType } from '../../types';

export type PracticeMode = 
  | 'QUICK_10'
  | 'TOPIC_20'
  | 'CHAPTER_30'
  | 'SUBJECT_50'
  | 'MIXED_100'
  | 'PYQ_MODE'
  | 'WEAK_AREA'
  | 'SPEED_MODE'
  | 'EXAM_MODE';

export const PracticeEngine: React.FC = () => {
  const { language, selectedExam, errorNotebook, pageParams } = useApp();

  const [activeMode, setActiveMode] = useState<PracticeMode>('QUICK_10');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'ALL'>('ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<QuestionSourceType | 'ALL'>('ALL');
  const [searchFilter, setSearchFilter] = useState<string>(pageParams.query || '');
  const [userScore, setUserScore] = useState<{ total: number; correct: number }>({ total: 0, correct: 0 });

  // Compute filtered questions based on active mode & filters
  const currentQuestions = useMemo(() => {
    let pool = [...questionsData];

    // Mode-specific base filtering
    if (activeMode === 'PYQ_MODE') {
      pool = pool.filter(q => q.sourceType === 'VERIFIED PYQ');
    } else if (activeMode === 'WEAK_AREA') {
      const weakTopics = new Set(errorNotebook.map(e => e.topic));
      if (weakTopics.size > 0) {
        pool = pool.filter(q => weakTopics.has(q.topic));
      }
    } else if (activeMode === 'EXAM_MODE') {
      pool = pool.filter(q => q.exam === selectedExam || q.exam === 'ALL');
    }

    // Secondary filters
    if (selectedSubject !== 'ALL') {
      pool = pool.filter(q => q.subject === selectedSubject);
    }
    if (selectedDifficulty !== 'ALL') {
      pool = pool.filter(q => q.difficulty === selectedDifficulty);
    }
    if (selectedSourceType !== 'ALL') {
      pool = pool.filter(q => q.sourceType === selectedSourceType);
    }
    if (searchFilter) {
      const qLower = searchFilter.toLowerCase();
      pool = pool.filter(q => 
        q.question.toLowerCase().includes(qLower) ||
        q.id.toLowerCase().includes(qLower) ||
        q.topic.toLowerCase().includes(qLower) ||
        q.tags.some(t => t.toLowerCase().includes(qLower))
      );
    }

    // Limit by mode count
    const limitMap: Record<PracticeMode, number> = {
      QUICK_10: 10,
      TOPIC_20: 20,
      CHAPTER_30: 30,
      SUBJECT_50: 50,
      MIXED_100: 100,
      PYQ_MODE: 30,
      WEAK_AREA: 20,
      SPEED_MODE: 15,
      EXAM_MODE: 25
    };

    return pool.slice(0, limitMap[activeMode]);
  }, [activeMode, selectedSubject, selectedDifficulty, selectedSourceType, searchFilter, selectedExam, errorNotebook]);

  const handleAnswerSubmit = (qId: string, answer: string, isCorrect: boolean) => {
    setUserScore(prev => ({
      total: prev.total + 1,
      correct: isCorrect ? prev.correct + 1 : prev.correct
    }));
  };

  const handleResetSession = () => {
    setUserScore({ total: 0, correct: 0 });
  };

  const modesConfig: { id: PracticeMode; label: string; count: string; desc: string }[] = [
    { id: 'QUICK_10', label: 'Quick 10', count: '10 Qs', desc: 'Fast 10-minute warm-up session' },
    { id: 'TOPIC_20', label: 'Topic 20', count: '20 Qs', desc: 'Focused chapter & topic drill' },
    { id: 'CHAPTER_30', label: 'Chapter 30', count: '30 Qs', desc: 'Comprehensive chapter test' },
    { id: 'SUBJECT_50', label: 'Subject 50', count: '50 Qs', desc: 'Sectional mastery endurance test' },
    { id: 'MIXED_100', label: 'Mixed 100', count: '100 Qs', desc: 'Full spectrum multi-subject marathon' },
    { id: 'PYQ_MODE', label: 'Verified PYQs', count: 'Past Years', desc: 'Actual historical CAT/XAT/SNAP/NMAT questions' },
    { id: 'WEAK_AREA', label: 'Weak Areas', count: 'Personalized', desc: 'Generated from your Error Notebook mistakes' },
    { id: 'EXAM_MODE', label: `${selectedExam} Mode`, count: 'Pattern', desc: `${selectedExam}-aligned question distribution` },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
              <Brain className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'HI' ? 'अभ्यास प्रश्न इंजन' : 'Practice Question Engine'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Database of 1,200+ authentic MBA entrance questions with 9 tailored practice modes, step-by-step verified explanations, and Error Notebook sync.
          </p>
        </div>

        {/* Live Scorecard Tracker */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Session Solved</span>
            <span className="font-extrabold text-slate-900 dark:text-white">
              {userScore.correct} / {userScore.total}
            </span>
          </div>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Session Accuracy</span>
            <span className="font-extrabold text-blue-600 dark:text-blue-400">
              {userScore.total > 0 ? `${Math.round((userScore.correct / userScore.total) * 100)}%` : '0%'}
            </span>
          </div>
          <button
            onClick={handleResetSession}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Reset Session Score"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Practice Modes Carousel / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {modesConfig.map(mode => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`p-3 rounded-2xl text-left border transition-all ${
              activeMode === mode.id
                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                activeMode === mode.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                {mode.count}
              </span>
            </div>
            <div className="font-bold text-xs sm:text-sm">{mode.label}</div>
            <p className={`text-[10px] mt-0.5 line-clamp-1 ${activeMode === mode.id ? 'text-blue-100' : 'text-slate-400'}`}>
              {mode.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium focus:outline-none"
          >
            <option value="ALL">All Subjects</option>
            <option value="Quantitative Aptitude">Quantitative Aptitude</option>
            <option value="VARC">VARC / Language</option>
            <option value="DILR">DILR / Reasoning</option>
            <option value="Decision Making">Decision Making (XAT)</option>
            <option value="General Knowledge">General Knowledge</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium focus:outline-none"
          >
            <option value="ALL">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard (CAT 99%ile)</option>
          </select>

          {/* Source Type Filter */}
          <select
            value={selectedSourceType}
            onChange={(e) => setSelectedSourceType(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium focus:outline-none"
          >
            <option value="ALL">All Sources</option>
            <option value="VERIFIED PYQ">Verified PYQs</option>
            <option value="ORIGINAL">Original Practice</option>
            <option value="PYQ-STYLE">PYQ-Style Practice</option>
          </select>
        </div>

        <div className="text-slate-500 font-medium">
          Loaded <strong className="text-slate-900 dark:text-white">{currentQuestions.length}</strong> Questions in Session
        </div>
      </div>

      {/* Questions Stack */}
      <div className="space-y-4">
        {currentQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 space-y-2">
            <p>No questions found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedSubject('ALL');
                setSelectedDifficulty('ALL');
                setSelectedSourceType('ALL');
                setSearchFilter('');
              }}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          currentQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              questionNumber={idx + 1}
              showExplanationImmediately={true}
              onAnswerSubmit={handleAnswerSubmit}
            />
          ))
        )}
      </div>
    </div>
  );
};
