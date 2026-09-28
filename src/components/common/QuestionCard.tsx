import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  BookmarkCheck, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  BookOpen,
  Scale
} from 'lucide-react';
import { Question } from '../../types';
import { useApp } from '../../context/AppContext';

interface QuestionCardProps {
  question: Question;
  questionNumber?: number;
  showExplanationImmediately?: boolean;
  onAnswerSubmit?: (questionId: string, answer: string, isCorrect: boolean) => void;
  userAnswer?: string;
  isMockMode?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  showExplanationImmediately = true,
  onAnswerSubmit,
  userAnswer: initialUserAnswer,
  isMockMode = false
}) => {
  const { language, bookmarks, toggleBookmark, addErrorLog } = useApp();
  const [selectedOption, setSelectedOption] = useState<string>(initialUserAnswer || '');
  const [titaInput, setTitaInput] = useState<string>(initialUserAnswer || '');
  const [showExplanation, setShowExplanation] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [selectedMistake, setSelectedMistake] = useState<any>('Concept Gap');
  const [userNotes, setUserNotes] = useState('');
  const [errorLoggedSuccess, setErrorLoggedSuccess] = useState(false);

  const isBookmarked = bookmarks.includes(question.id);
  const isAnswered = selectedOption !== '' || (question.type === 'TITA' && titaInput.trim() !== '');

  const isCorrect = question.type === 'TITA'
    ? titaInput.trim().toLowerCase() === question.answer.trim().toLowerCase()
    : selectedOption === question.answer;

  const handleOptionClick = (optLetter: string) => {
    setSelectedOption(optLetter);
    const correct = optLetter === question.answer;
    if (onAnswerSubmit) {
      onAnswerSubmit(question.id, optLetter, correct);
    }
  };

  const handleTitaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titaInput.trim()) return;
    const correct = titaInput.trim().toLowerCase() === question.answer.trim().toLowerCase();
    if (onAnswerSubmit) {
      onAnswerSubmit(question.id, titaInput.trim(), correct);
    }
  };

  const handleLogToErrorNotebook = () => {
    addErrorLog({
      questionId: question.id,
      exam: question.exam === 'ALL' ? 'CAT' : question.exam,
      subject: question.subject,
      chapter: question.chapter,
      topic: question.topic,
      userAnswer: selectedOption || titaInput || 'Unanswered',
      correctAnswer: question.answer,
      mistakeCategory: selectedMistake,
      userNotes: userNotes.trim()
    });
    setErrorLoggedSuccess(true);
    setTimeout(() => {
      setErrorLoggedSuccess(false);
      setShowErrorModal(false);
    }, 1200);
  };

  const getSourceBadgeStyle = (srcType: string) => {
    switch (srcType) {
      case 'VERIFIED PYQ':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300 dark:border-purple-800 font-extrabold';
      case 'PYQ-STYLE':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-800 font-semibold';
      case 'ORIGINAL':
      default:
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 font-medium';
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700">
      {/* Header Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {questionNumber !== undefined && (
            <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center shrink-0">
              {questionNumber}
            </span>
          )}
          <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {question.id}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
            {question.exam}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {question.subject}
          </span>
          <span className="hidden sm:inline-block text-slate-400">•</span>
          <span className="text-slate-600 dark:text-slate-400 font-medium truncate max-w-[160px] sm:max-w-none">
            {question.topic}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Source Tag (VERIFIED PYQ vs ORIGINAL) */}
          <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border ${getSourceBadgeStyle(question.sourceType)}`}>
            {question.sourceType} {question.year && `(${question.year})`}
          </span>

          {/* Difficulty */}
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
            question.difficulty === 'hard'
              ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
              : question.difficulty === 'medium'
              ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
              : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
          }`}>
            {question.difficulty}
          </span>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(question.id)}
            className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Passage / Caselet Context if present */}
      {question.passage && (
        <div className="mb-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
          <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Passage / Caselet Context</span>
          </div>
          <p className="whitespace-pre-line">{question.passage}</p>
        </div>
      )}

      {/* Main Question Text */}
      <div className="mb-4 text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
        <p className="whitespace-pre-line">{question.question}</p>
        {language === 'HI' && question.questionHindi && (
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans border-t border-slate-100 dark:border-slate-800 pt-2">
            {question.questionHindi}
          </p>
        )}
      </div>

      {/* Question Options or TITA Input */}
      {question.type === 'TITA' ? (
        <form onSubmit={handleTitaSubmit} className="mb-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Type In The Answer (TITA) — Non-MCQ:
          </label>
          <div className="flex items-center gap-2 max-w-xs">
            <input
              type="text"
              value={titaInput}
              onChange={(e) => setTitaInput(e.target.value)}
              placeholder="Enter numerical answer..."
              disabled={isAnswered && !isMockMode}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {!isMockMode && (
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="space-y-2 mb-4">
          {question.options?.map((option, idx) => {
            const letter = optionLetters[idx];
            const isSelected = selectedOption === letter;
            const isOptionCorrect = letter === question.answer;

            let optionStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';

            if (!isMockMode && isAnswered) {
              if (isOptionCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
              } else if (isSelected && !isOptionCorrect) {
                optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500';
              }
            } else if (isSelected) {
              optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 font-semibold ring-2 ring-blue-500';
            }

            return (
              <button
                key={letter}
                onClick={() => handleOptionClick(letter)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 text-xs sm:text-sm ${optionStyle}`}
              >
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  {letter}
                </span>
                <span className="flex-1 mt-0.5">{option}</span>
                {!isMockMode && isAnswered && isOptionCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                )}
                {!isMockMode && isAnswered && isSelected && !isOptionCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Action Footer (Explanation Toggle, Report Error to Notebook) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          {!isMockMode && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{showExplanation ? 'Hide Explanation' : 'View Explanation'}</span>
              {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}

          {isAnswered && !isCorrect && !isMockMode && (
            <button
              onClick={() => setShowErrorModal(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Log in Error Notebook</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
          {question.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Explanation Box */}
      {showExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-blue-50/70 dark:bg-slate-800/90 border border-blue-100 dark:border-slate-700 text-xs sm:text-sm space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Step-by-Step Verified Solution</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-[10px]">
              Correct Answer: {question.answer}
            </span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
            {question.explanation}
          </p>

          {/* Decision Making Lab Framework Details */}
          {question.decisionFramework && (
            <div className="mt-3 pt-3 border-t border-blue-200 dark:border-slate-700 space-y-2 text-xs">
              <div className="flex items-center gap-1 font-bold text-purple-700 dark:text-purple-300">
                <Scale className="w-3.5 h-3.5" />
                <span>XAT Managerial Decision Framework Analysis</span>
              </div>
              {question.decisionFramework.situation && (
                <p><strong>Core Dilemma:</strong> {question.decisionFramework.situation}</p>
              )}
              {question.decisionFramework.stakeholders && (
                <p><strong>Key Stakeholders:</strong> {question.decisionFramework.stakeholders.join(' • ')}</p>
              )}
              {question.decisionFramework.commonTrap && (
                <p className="text-amber-700 dark:text-amber-300">
                  <strong>Common Trap:</strong> {question.decisionFramework.commonTrap}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Log Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>Log to Error Notebook</span>
              </h4>
              <button onClick={() => setShowErrorModal(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                Root Cause Mistake Category:
              </label>
              <select
                value={selectedMistake}
                onChange={(e) => setSelectedMistake(e.target.value)}
                className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <option value="Concept Gap">Concept Gap (Didn't know the theorem/formula)</option>
                <option value="Calculation Error">Calculation Error (Arithmetic or sign mistake)</option>
                <option value="Misread">Misread (Overlooked a constraint in question)</option>
                <option value="Guess">Guess (Unsure intuition under pressure)</option>
                <option value="Time Pressure">Time Pressure (Rushed through the problem)</option>
                <option value="Wrong Elimination">Wrong Elimination (Eliminated the correct option)</option>
                <option value="Vocabulary">Vocabulary (Did not know word meaning)</option>
                <option value="Logic Error">Logic Error (Flawed syllogism / premise leap)</option>
                <option value="Question Selection Error">Question Selection Error (Should have skipped)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                Personal Note / Lesson for Revision:
              </label>
              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="What will you do differently next time? e.g. Remember to check if roots are positive..."
                rows={3}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowErrorModal(false)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogToErrorNotebook}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                {errorLoggedSuccess ? 'Saved in Spaced Repetition Queue!' : 'Save Mistake'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
