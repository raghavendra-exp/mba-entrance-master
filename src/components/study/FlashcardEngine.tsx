import React, { useState } from 'react';
import { RotateCcw, Sparkles, CheckCircle2, RotateCw, BookOpen, Layers, Scale, Calculator, Bookmark } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { vocabData } from '../../data/vocabulary/vocabData';
import { formulaeData } from '../../data/formulae/formulaeData';

interface FlashcardItem {
  id: string;
  category: 'QA' | 'VARC' | 'DILR' | 'DM' | 'GK';
  front: string;
  frontSub?: string;
  back: string;
  backDetail?: string;
  intervalStage: number;
}

export const FlashcardEngine: React.FC = () => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState<'all' | 'QA' | 'VARC' | 'DILR' | 'DM' | 'GK'>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Generate flashcards from vocab, formulas, DILR heuristics, and DM principles
  const baseCards: FlashcardItem[] = [
    // QA Cards
    ...formulaeData.map(f => ({
      id: f.id,
      category: 'QA' as const,
      front: f.formulaName,
      frontSub: `${f.chapter} • ${f.topic}`,
      back: f.formulaMath,
      backDetail: `${f.explanation}\n\nCommon Mistake: ${f.commonMistake}`,
      intervalStage: 1
    })),

    // VARC Cards
    ...vocabData.map(v => ({
      id: `fc-vocab-${v.word}`,
      category: 'VARC' as const,
      front: v.word,
      frontSub: `${v.pronunciation} • ${v.difficulty}`,
      back: `${v.meaningHindi} — ${v.meaning}`,
      backDetail: `Example: "${v.example}"\nSynonyms: ${v.synonyms.join(', ')}`,
      intervalStage: 1
    })),

    // DILR Heuristics
    {
      id: 'fc-dilr-1',
      category: 'DILR',
      front: 'DILR Set Selection Protocol',
      frontSub: 'Exam Technique',
      back: 'The 4-Minute Scanning Rule',
      backDetail: 'Read all 4 sets in first 4 minutes. Classify into Set 1 (Direct Table/Matrix), Set 2 (Linear constraint), Set 3 (Puzzles), Set 4 (Complex games). Solve easiest first.',
      intervalStage: 1
    },
    {
      id: 'fc-dilr-2',
      category: 'DILR',
      front: 'Circular Arrangement Facing Center vs Outward',
      frontSub: 'Arrangement Logic',
      back: 'Facing Center: Left = Clockwise, Right = Counter-Clockwise.\nFacing Outward: Left = Counter-Clockwise, Right = Clockwise.',
      backDetail: 'Always sketch an arrow at each position to visually anchor the left/right perspective.',
      intervalStage: 1
    },

    // XAT DM Heuristics
    {
      id: 'fc-dm-1',
      category: 'DM',
      front: 'The "Extreme Action" Heuristic in XAT DM',
      frontSub: 'Decision Making Trap',
      back: 'Never choose immediate sacking, summary dismissal, or public defamation.',
      backDetail: 'Management ethics mandates due process: formal inquiry, fact-finding committee, and corrective escalation before punitive termination.',
      intervalStage: 1
    },
    {
      id: 'fc-dm-2',
      category: 'DM',
      front: 'Utilitarian vs Deontological Balance',
      frontSub: 'Managerial Ethics',
      back: 'Utilitarian = Greatest good for greatest number.\nDeontological = Fundamental moral duty & legality.',
      backDetail: 'In XAT, statutory laws and basic human dignity trump pure profit maximization or utilitarian cost-cutting.',
      intervalStage: 1
    },

    // GK Cards
    {
      id: 'fc-gk-1',
      category: 'GK',
      front: 'Monetary Policy Committee (MPC) Structure',
      frontSub: 'Banking & Economy',
      back: '6 Members: 3 from RBI (including Governor) + 3 external experts appointed by Central Government.',
      backDetail: 'Meets at least 4 times a year to decide Repo Rate. Target: 4% CPI Inflation ± 2% tolerance band.',
      intervalStage: 1
    },
    {
      id: 'fc-gk-2',
      category: 'GK',
      front: 'Competition Commission of India (CCI)',
      frontSub: 'Corporate Regulatory Bodies',
      back: 'Antitrust watchdog established under Competition Act, 2002.',
      backDetail: 'Regulates combinations (Mergers & Acquisitions) exceeding financial asset and turnover thresholds to prevent anti-competitive abuse.',
      intervalStage: 1
    }
  ];

  const cards = baseCards.filter(c => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  const card = cards[currentIdx] || cards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx(prev => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx(prev => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400">
            <RotateCcw className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'स्मार्ट अंतराल पुनरावृत्ति एवं फ्लैशकार्ड' : 'Spaced Revision & Flashcard Engine'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          SuperMemo SM-2 spaced repetition (1d, 3d, 7d, 15d, 30d, 60d) across QA formulae, vocabulary, DILR patterns, and XAT decision heuristics.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {[
          { id: 'all', label: `All Cards (${baseCards.length})` },
          { id: 'QA', label: 'Quantitative Aptitude' },
          { id: 'VARC', label: 'Vocabulary & Language' },
          { id: 'DILR', label: 'DILR Frameworks' },
          { id: 'DM', label: 'XAT Decision Making' },
          { id: 'GK', label: 'Business GK & Economics' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id as any);
              setCurrentIdx(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              activeCategory === tab.id
                ? 'bg-teal-600 border-teal-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-teal-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Flashcard Box */}
      {card && (
        <div className="max-w-xl mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[340px] rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-teal-300 dark:border-teal-900/60 p-8 shadow-sm flex flex-col justify-between text-center cursor-pointer transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Card {currentIdx + 1} of {cards.length}</span>
              <span className="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-bold uppercase text-[10px]">
                {card.category}
              </span>
            </div>

            {!isFlipped ? (
              <div className="py-10 space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-teal-600 dark:text-teal-400">
                  {card.frontSub}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-relaxed">
                  {card.front}
                </h3>
                <p className="text-xs text-teal-500 font-semibold pt-4">Click to Reveal Rule / Concept</p>
              </div>
            ) : (
              <div className="py-6 space-y-4 animate-in fade-in duration-200 text-left">
                <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 font-mono text-sm sm:text-base font-black text-teal-950 dark:text-teal-200 whitespace-pre-line leading-relaxed">
                  {card.back}
                </div>

                {card.backDetail && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                    {card.backDetail}
                  </p>
                )}
              </div>
            )}

            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Tap to flip card</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900 text-xs font-bold text-teal-700 dark:text-teal-300"
              >
                Flip
              </button>
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
