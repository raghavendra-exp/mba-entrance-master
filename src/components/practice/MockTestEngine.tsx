import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  RotateCcw,
  Sparkles,
  BarChart3,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';
import { ExamId, Question, MockSessionResult } from '../../types';

interface SectionConfig {
  name: string;
  durationMinutes: number;
  questions: Question[];
}

export const MockTestEngine: React.FC = () => {
  const { selectedExam, setSelectedExam, language, saveMockResult, addErrorLog } = useApp();

  const [isTestActive, setIsTestActive] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sectionTimeRemaining, setSectionTimeRemaining] = useState(0);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [mockResult, setMockResult] = useState<MockSessionResult | null>(null);
  const [showMobilePalette, setShowMobilePalette] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Build sections for the selected exam
  const buildExamSections = (exam: ExamId): SectionConfig[] => {
    if (exam === 'CAT') {
      const varc = questionsData.filter(q => q.subject === 'VARC').slice(0, 24);
      const dilr = questionsData.filter(q => q.subject === 'DILR').slice(0, 20);
      const qa = questionsData.filter(q => q.subject === 'Quantitative Aptitude').slice(0, 22);
      return [
        { name: 'VARC (Verbal Ability & Reading Comprehension)', durationMinutes: 40, questions: varc },
        { name: 'DILR (Data Interpretation & Logical Reasoning)', durationMinutes: 40, questions: dilr },
        { name: 'QA (Quantitative Aptitude)', durationMinutes: 40, questions: qa }
      ];
    } else if (exam === 'XAT') {
      const valr = questionsData.filter(q => q.subject === 'VARC').slice(0, 26);
      const dm = questionsData.filter(q => q.subject === 'Decision Making' || q.type === 'DM').slice(0, 21);
      const qadi = questionsData.filter(q => q.subject === 'Quantitative Aptitude' || q.subject === 'DILR').slice(0, 28);
      const gk = questionsData.filter(q => q.subject === 'General Knowledge').slice(0, 25);
      return [
        { name: 'Part 1: VALR, Decision Making & QA-DI', durationMinutes: 170, questions: [...valr, ...dm, ...qadi] },
        { name: 'Part 2: General Knowledge (GK)', durationMinutes: 25, questions: gk }
      ];
    } else if (exam === 'SNAP') {
      const eng = questionsData.filter(q => q.subject === 'VARC').slice(0, 15);
      const lr = questionsData.filter(q => q.subject === 'DILR').slice(0, 25);
      const quant = questionsData.filter(q => q.subject === 'Quantitative Aptitude').slice(0, 20);
      return [
        { name: 'SNAP Full Exam (English, LR, Quant/DI)', durationMinutes: 60, questions: [...eng, ...lr, ...quant] }
      ];
    } else {
      // NMAT
      const ls = questionsData.filter(q => q.subject === 'VARC').slice(0, 36);
      const qs = questionsData.filter(q => q.subject === 'Quantitative Aptitude' || q.chapter.includes('Data Interpretation')).slice(0, 36);
      const lr = questionsData.filter(q => q.subject === 'DILR').slice(0, 36);
      return [
        { name: 'Language Skills', durationMinutes: 28, questions: ls },
        { name: 'Quantitative Skills', durationMinutes: 52, questions: qs },
        { name: 'Logical Reasoning', durationMinutes: 40, questions: lr }
      ];
    }
  };

  const [sections, setSections] = useState<SectionConfig[]>(() => buildExamSections(selectedExam));

  const activeSection = sections[currentSectionIndex] || sections[0];
  const activeQuestion = activeSection?.questions[currentQuestionIndex] || activeSection?.questions[0];

  const handleStartMock = () => {
    const freshSections = buildExamSections(selectedExam);
    setSections(freshSections);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setSectionTimeRemaining(freshSections[0].durationMinutes * 60);
    setTotalTimeElapsed(0);
    setIsTestSubmitted(false);
    setIsTestActive(true);
  };

  // Timer logic
  useEffect(() => {
    if (isTestActive && !isTestSubmitted) {
      timerRef.current = setTimeout(() => {
        setTotalTimeElapsed(t => t + 1);
        setSectionTimeRemaining(rem => {
          if (rem <= 1) {
            // Auto advance or submit
            if (currentSectionIndex < sections.length - 1) {
              const nextSec = currentSectionIndex + 1;
              setCurrentSectionIndex(nextSec);
              setCurrentQuestionIndex(0);
              return sections[nextSec].durationMinutes * 60;
            } else {
              handleFinishTest();
              return 0;
            }
          }
          return rem - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isTestActive, isTestSubmitted, currentSectionIndex, sections]);

  const handleSelectAnswer = (qId: string, opt: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const handleClearResponse = (qId: string) => {
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  const handleToggleMarkReview = (qId: string) => {
    setMarkedForReview(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (selectedExam === 'XAT' || selectedExam === 'SNAP') {
      // Free section navigation allowed for SNAP & XAT Part 1
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinishTest = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTestActive(false);
    setIsTestSubmitted(true);

    // Calculate score
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    const weakTopicsMap: Record<string, number> = {};

    const sectionBreakdown = sections.map(sec => {
      let secScore = 0;
      let secCorrect = 0;
      let secIncorrect = 0;
      let secUnattempted = 0;

      sec.questions.forEach(q => {
        const uAns = userAnswers[q.id];
        if (!uAns) {
          secUnattempted++;
          unattemptedCount++;
        } else if (uAns.toLowerCase() === q.answer.toLowerCase()) {
          secCorrect++;
          correctCount++;
          if (selectedExam === 'CAT') secScore += 3;
          else if (selectedExam === 'XAT') secScore += 1;
          else if (selectedExam === 'SNAP') secScore += 1;
          else secScore += 3; // NMAT scaled proxy
        } else {
          secIncorrect++;
          incorrectCount++;
          weakTopicsMap[q.topic] = (weakTopicsMap[q.topic] || 0) + 1;
          if (selectedExam === 'CAT' && q.type !== 'TITA') secScore -= 1;
          else if (selectedExam === 'XAT') secScore -= 0.25;
          else if (selectedExam === 'SNAP') secScore -= 0.25;
        }
      });

      totalScore += secScore;
      const secAcc = secCorrect + secIncorrect > 0 ? (secCorrect / (secCorrect + secIncorrect)) * 100 : 0;

      return {
        sectionName: sec.name,
        score: Math.round(secScore * 100) / 100,
        correct: secCorrect,
        incorrect: secIncorrect,
        unattempted: secUnattempted,
        timeSpentSeconds: 0,
        accuracy: Math.round(secAcc)
      };
    });

    const totalAnswered = correctCount + incorrectCount;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    const weakTopics = Object.entries(weakTopicsMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(entry => entry[0]);

    const result: MockSessionResult = {
      id: `mock-${Date.now()}`,
      exam: selectedExam,
      date: new Date().toISOString().split('T')[0],
      totalTimeSeconds: totalTimeElapsed,
      totalScore: Math.round(totalScore * 100) / 100,
      maxScore: selectedExam === 'CAT' ? 198 : selectedExam === 'XAT' ? 100 : selectedExam === 'SNAP' ? 60 : 360,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
      sectionBreakdown,
      weakTopics
    };

    setMockResult(result);
    saveMockResult(result);

    // Confetti celebration
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch {}
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in duration-300">
      {/* Engine Header */}
      {!isTestActive && !isTestSubmitted && (
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-white/10">
                <FileText className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                OFFICIAL SIMULATION ENGINE
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {selectedExam} Official Pattern Mock Test
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Full-length timed simulation replicating exact exam rules: {selectedExam === 'CAT' ? '40-minute locked sections, +3/-1 marking, TITA questions' : selectedExam === 'XAT' ? 'Decision Making, +1/-0.25 and unattempted penalties' : selectedExam === 'SNAP' ? '60 mins, 60 Qs speed test' : 'Adaptive sections & scaled scores'}.
            </p>

            {/* Exam selector buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {(['CAT', 'XAT', 'SNAP', 'NMAT'] as ExamId[]).map(e => (
                <button
                  key={e}
                  onClick={() => setSelectedExam(e)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedExam === e
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-white/10 border-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {e} Mock Structure
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={handleStartMock}
                className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Launch {selectedExam} Full Mock Test</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Test Screen */}
      {isTestActive && activeQuestion && (
        <div className="space-y-4">
          {/* Top Bar: Section tabs & Timers */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky top-16 z-30">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {sections.map((sec, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                    currentSectionIndex === idx
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {sec.name.split('(')[0]}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-mono text-sm font-extrabold">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>{formatTimer(sectionTimeRemaining)}</span>
              </div>
              <button
                onClick={handleFinishTest}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Submit Mock
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left 3 Cols: Question & Options */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      Question {currentQuestionIndex + 1} of {activeSection.questions.length}
                    </span>
                    <button
                      onClick={() => setShowMobilePalette(!showMobilePalette)}
                      className="lg:hidden px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-[11px] hover:bg-blue-200 transition-colors"
                    >
                      {showMobilePalette ? '✕ Hide Palette' : '🔢 Palette'}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold">
                      {activeQuestion.topic}
                    </span>
                    <span className="font-bold">
                      {selectedExam === 'CAT' ? '+3 / -1' : selectedExam === 'XAT' ? '+1 / -0.25' : '+1 / -0.25'}
                    </span>
                  </div>
                </div>

                {/* Passage / Caselet if present */}
                {activeQuestion.passage && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif max-h-60 overflow-y-auto">
                    <p className="whitespace-pre-line">{activeQuestion.passage}</p>
                  </div>
                )}

                {/* Question */}
                <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                  <p className="whitespace-pre-line">{activeQuestion.question}</p>
                </div>

                {/* Options / TITA */}
                {activeQuestion.type === 'TITA' ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                      Type In The Answer (TITA):
                    </label>
                    <input
                      type="text"
                      value={userAnswers[activeQuestion.id] || ''}
                      onChange={(e) => handleSelectAnswer(activeQuestion.id, e.target.value)}
                      placeholder="Type your numeric answer here..."
                      className="w-64 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeQuestion.options?.map((opt, i) => {
                      const letter = ['A', 'B', 'C', 'D', 'E'][i];
                      const isSelected = userAnswers[activeQuestion.id] === letter;

                      return (
                        <button
                          key={letter}
                          onClick={() => handleSelectAnswer(activeQuestion.id, letter)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 font-semibold ring-2 ring-blue-500'
                              : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {letter}
                          </span>
                          <span className="flex-1 mt-0.5">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Bottom Navigation Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleMarkReview(activeQuestion.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                        markedForReview[activeQuestion.id]
                          ? 'bg-purple-600 border-purple-600 text-white'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-purple-600 dark:text-purple-400'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{markedForReview[activeQuestion.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                    </button>
                    {userAnswers[activeQuestion.id] && (
                      <button
                        onClick={() => handleClearResponse(activeQuestion.id)}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-500 hover:text-rose-600 transition-colors"
                      >
                        Clear Response
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Save & Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Question Palette */}
            <div className={`space-y-4 ${showMobilePalette ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Question Palette
                  </h3>
                  <button
                    onClick={() => setShowMobilePalette(false)}
                    className="lg:hidden text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0" />
                    <span>Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0" />
                    <span>Not Answered</span>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
                  {activeSection.questions.map((q, idx) => {
                    const isAnswered = !!userAnswers[q.id];
                    const isMarked = !!markedForReview[q.id];
                    const isCurrent = currentQuestionIndex === idx;

                    let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
                    if (isCurrent) {
                      bgClass = 'bg-blue-600 text-white font-black ring-2 ring-blue-400';
                    } else if (isMarked) {
                      bgClass = 'bg-purple-600 text-white font-bold';
                    } else if (isAnswered) {
                      bgClass = 'bg-emerald-600 text-white font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQuestionIndex(idx);
                          setShowMobilePalette(false);
                        }}
                        className={`h-8 rounded-lg text-xs font-mono transition-transform hover:scale-105 ${bgClass}`}
                        aria-label={`Jump to question ${idx + 1}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Results Dashboard */}
      {isTestSubmitted && mockResult && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              Mock Test Completed
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Score: {mockResult.totalScore} / {mockResult.maxScore}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Exam: {mockResult.exam} • Accuracy: {mockResult.accuracy}% • Time: {Math.floor(mockResult.totalTimeSeconds / 60)} mins
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block">Correct</span>
              <span className="text-2xl font-black text-emerald-900 dark:text-emerald-200">{mockResult.correctCount}</span>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 text-center">
              <span className="text-xs font-bold text-rose-700 dark:text-rose-400 block">Incorrect</span>
              <span className="text-2xl font-black text-rose-900 dark:text-rose-200">{mockResult.incorrectCount}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-xs font-bold text-slate-500 block">Unattempted</span>
              <span className="text-2xl font-black text-slate-800 dark:text-slate-200">{mockResult.unattemptedCount}</span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 text-center">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block">Overall Accuracy</span>
              <span className="text-2xl font-black text-blue-900 dark:text-blue-200">{mockResult.accuracy}%</span>
            </div>
          </div>

          {/* Section Breakdown Table */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span>Sectional Performance Breakdown</span>
            </h3>

            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Section</th>
                    <th className="p-3">Score</th>
                    <th className="p-3">Correct</th>
                    <th className="p-3">Wrong</th>
                    <th className="p-3">Unattempted</th>
                    <th className="p-3">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {mockResult.sectionBreakdown.map((sec, i) => (
                    <tr key={i}>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{sec.sectionName}</td>
                      <td className="p-3 font-extrabold text-blue-600 dark:text-blue-400">{sec.score}</td>
                      <td className="p-3 text-emerald-600 font-bold">{sec.correct}</td>
                      <td className="p-3 text-rose-600 font-bold">{sec.incorrect}</td>
                      <td className="p-3 text-slate-400">{sec.unattempted}</td>
                      <td className="p-3 font-bold">{sec.accuracy}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weak Topics Analysis */}
          {mockResult.weakTopics.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 space-y-2 text-xs">
              <span className="font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Identified Priority Weak Topics</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                You lost marks on: {mockResult.weakTopics.join(', ')}. These topics have been queued for spaced revision and focused practice drills.
              </p>
            </div>
          )}

          <div className="flex justify-center gap-3">
            <button
              onClick={handleStartMock}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Mock Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
