import React, { useState } from 'react';
import { Bookmark, Sparkles, Volume2, ArrowRight, RotateCw, CheckCircle2, HelpCircle } from 'lucide-react';
import { vocabData } from '../../data/vocabulary/vocabData';
import { useApp } from '../../context/AppContext';

export const VocabularyLab: React.FC = () => {
  const { language } = useApp();
  const [activeMode, setActiveMode] = useState<'cards' | 'flashcard' | 'quiz'>('cards');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const filteredWords = vocabData.filter(w => {
    if (filterDifficulty === 'all') return true;
    return w.difficulty === filterDifficulty;
  });

  const currentWord = filteredWords[currentIndex] || vocabData[0];

  const handleNextWord = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredWords.length);
  };

  const handlePrevWord = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400">
              <Bookmark className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'HI' ? 'एमबीए शब्दावली मास्टर' : 'MBA Vocabulary Builder'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            High-frequency words for CAT RC, XAT Critical Reasoning, and SNAP/NMAT Speed Verbal sections with bilingual meanings and flashcards.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveMode('cards')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeMode === 'cards' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Word Cards
          </button>
          <button
            onClick={() => {
              setActiveMode('flashcard');
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeMode === 'flashcard' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Flashcard Mode
          </button>
        </div>
      </div>

      {/* Difficulty Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {[
          { id: 'all', label: `All Words (${vocabData.length})` },
          { id: 'High-Frequency CAT', label: 'High-Frequency CAT' },
          { id: 'Advanced XAT', label: 'Advanced XAT' },
          { id: 'Speed SNAP', label: 'Speed SNAP' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setFilterDifficulty(tab.id);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterDifficulty === tab.id
                ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Flashcard Flip Mode */}
      {activeMode === 'flashcard' && currentWord ? (
        <div className="max-w-xl mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[320px] rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-rose-300 dark:border-rose-900/60 p-8 shadow-sm flex flex-col justify-between text-center cursor-pointer transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Card {currentIndex + 1} of {filteredWords.length}</span>
              <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold">
                {currentWord.difficulty}
              </span>
            </div>

            {!isFlipped ? (
              <div className="py-10 space-y-3">
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {currentWord.word}
                </h3>
                <p className="text-sm font-mono text-slate-500">{currentWord.pronunciation}</p>
                <p className="text-xs text-rose-500 font-semibold pt-4">Click / Tap to Reveal Meaning & Context</p>
              </div>
            ) : (
              <div className="py-6 space-y-4 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xl sm:text-2xl font-bold text-rose-600 dark:text-rose-400">
                    {currentWord.meaningHindi}
                  </span>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">
                    {currentWord.meaning}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-400 italic">
                  "{currentWord.example}"
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  {currentWord.synonyms.slice(0, 3).map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Tap card to flip</span>
            </div>
          </div>

          {/* Flashcard Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevWord}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              ← Previous Card
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-bold text-rose-700 dark:text-rose-300"
            >
              Flip Card
            </button>
            <button
              onClick={handleNextWord}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
            >
              Next Card →
            </button>
          </div>
        </div>
      ) : (
        /* Grid of Word Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWords.map((v) => (
            <div
              key={v.word}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                    {v.word}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-0.5">
                    <span>{v.pronunciation}</span>
                    <span>•</span>
                    <span className="font-bold text-rose-600 dark:text-rose-400 font-sans">
                      {v.meaningHindi}
                    </span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                  {v.difficulty}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {v.meaning}
              </p>

              {/* Contextual Sentence */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block not-italic mb-0.5">Exam Context Example:</strong>
                "{v.example}"
              </div>

              {/* Synonyms & Antonyms */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                    Synonyms
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {v.synonyms.map(syn => (
                      <span key={syn} className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[11px]">
                        {syn}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block mb-1">
                    Antonyms
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {v.antonyms.map(ant => (
                      <span key={ant} className="px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-[11px]">
                        {ant}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
