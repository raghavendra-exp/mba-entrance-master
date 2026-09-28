import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Layers, Brain, Building2, Newspaper, Bookmark, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { questionsData } from '../../data/questions';
import { masterSyllabus } from '../../data/syllabus/masterSyllabus';
import { booksData } from '../../data/books/booksData';
import { collegesData } from '../../data/colleges/collegesData';
import { currentAffairsData } from '../../data/current-affairs/currentAffairsData';
import { vocabData } from '../../data/vocabulary/vocabData';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, language, setCurrentPage, setSelectedExam, setBreadcrumbs } = useApp();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'questions' | 'syllabus' | 'colleges' | 'vocab' | 'books' | 'current-affairs'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const qLower = query.trim().toLowerCase();

  // Results collectors
  const questionResults = qLower ? questionsData.filter(q => 
    q.question.toLowerCase().includes(qLower) || 
    q.topic.toLowerCase().includes(qLower) ||
    q.chapter.toLowerCase().includes(qLower) ||
    (q.questionHindi && q.questionHindi.toLowerCase().includes(qLower)) ||
    q.tags.some(t => t.toLowerCase().includes(qLower))
  ).slice(0, 5) : [];

  const syllabusResults = qLower ? masterSyllabus.flatMap(sub => 
    sub.chapters.flatMap(ch => 
      ch.topics.filter(top => 
        top.name.toLowerCase().includes(qLower) ||
        top.nameHindi.toLowerCase().includes(qLower) ||
        top.conceptNotes.toLowerCase().includes(qLower)
      ).map(top => ({ ...top, subject: sub.name, chapter: ch.name }))
    )
  ).slice(0, 5) : [];

  const collegeResults = qLower ? collegesData.filter(col => 
    col.name.toLowerCase().includes(qLower) ||
    col.shortName.toLowerCase().includes(qLower) ||
    col.location.city.toLowerCase().includes(qLower) ||
    col.location.state.toLowerCase().includes(qLower) ||
    col.examsAccepted.some(e => e.toLowerCase().includes(qLower))
  ).slice(0, 5) : [];

  const vocabResults = qLower ? vocabData.filter(v => 
    v.word.toLowerCase().includes(qLower) ||
    v.meaning.toLowerCase().includes(qLower) ||
    v.meaningHindi.includes(qLower) ||
    v.synonyms.some(s => s.toLowerCase().includes(qLower))
  ).slice(0, 5) : [];

  const bookResults = qLower ? booksData.filter(b => 
    b.title.toLowerCase().includes(qLower) ||
    b.author.toLowerCase().includes(qLower) ||
    b.subject.toLowerCase().includes(qLower)
  ).slice(0, 5) : [];

  const caResults = qLower ? currentAffairsData.filter(ca => 
    ca.headline.toLowerCase().includes(qLower) ||
    ca.summary.toLowerCase().includes(qLower) ||
    ca.category.toLowerCase().includes(qLower)
  ).slice(0, 5) : [];

  return (
    <div 
      onClick={() => setIsSearchOpen(false)}
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-3 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'HI' ? 'कैट, ज़ैट, कॉलेज, प्रश्न, शब्दावली, सूत्र खोजें...' : 'Search CAT, XAT, Questions, Colleges, Syllabus, Vocab...'}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Category Filters */}
        <div className="px-3 sm:px-4 py-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'questions', label: `Questions (${questionResults.length})` },
            { id: 'syllabus', label: `Syllabus (${syllabusResults.length})` },
            { id: 'colleges', label: `Colleges (${collegeResults.length})` },
            { id: 'vocab', label: `Vocab (${vocabResults.length})` },
            { id: 'books', label: `Books (${bookResults.length})` },
            { id: 'current-affairs', label: `News & GK (${caResults.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-3 sm:p-4 overflow-y-auto space-y-4">
          {!query && (
            <div className="py-8 text-center text-slate-400 dark:text-slate-500 text-xs">
              <p>Type to search across 1,200+ Questions, Top B-Schools, Formulae, and Vocab</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Percentages', 'Decision Making', 'IIM Ahmedabad', 'Bayes Theorem', 'Capricious', 'XLRI', 'SNAP Speed'].map(pill => (
                  <button
                    key={pill}
                    onClick={() => setQuery(pill)}
                    className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-[11px]"
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && questionResults.length === 0 && syllabusResults.length === 0 && collegeResults.length === 0 && vocabResults.length === 0 && (
            <div className="py-8 text-center text-slate-400 dark:text-slate-500 text-xs">
              No matching records found for "{query}". Try checking another keyword.
            </div>
          )}

          {/* Questions Section */}
          {(activeCategory === 'all' || activeCategory === 'questions') && questionResults.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-blue-500" />
                <span>Practice Questions & PYQs</span>
              </h3>
              <div className="space-y-1.5">
                {questionResults.map(q => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentPage('practice', { query: q.id });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-start justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                        <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold">
                          {q.exam}
                        </span>
                        <span>{q.subject}</span>
                        <span>•</span>
                        <span>{q.topic}</span>
                      </div>
                      <p className="text-xs text-slate-800 dark:text-slate-200 font-medium line-clamp-2 mt-1">
                        {q.question}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0 mt-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colleges Section */}
          {(activeCategory === 'all' || activeCategory === 'colleges') && collegeResults.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Colleges & B-Schools</span>
              </h3>
              <div className="space-y-1.5">
                {collegeResults.map(col => (
                  <button
                    key={col.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentPage('colleges', { search: col.shortName });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900 dark:text-white">
                          {col.name}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                          Avg: {col.placements.averageCTC}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {col.location.city}, {col.location.state} • Accepts: {col.examsAccepted.join(', ')}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulary Section */}
          {(activeCategory === 'all' || activeCategory === 'vocab') && vocabResults.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-rose-500" />
                <span>MBA Vocabulary Builder</span>
              </h3>
              <div className="space-y-1.5">
                {vocabResults.map(v => (
                  <button
                    key={v.word}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentPage('vocab-builder', { word: v.word });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs text-slate-900 dark:text-white">
                          {v.word}
                        </span>
                        <span className="text-[11px] text-slate-400">{v.pronunciation}</span>
                        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                          {v.meaningHindi}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                        {v.meaning}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Syllabus Section */}
          {(activeCategory === 'all' || activeCategory === 'syllabus') && syllabusResults.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Syllabus Topics</span>
              </h3>
              <div className="space-y-1.5">
                {syllabusResults.map(top => (
                  <button
                    key={top.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentPage('syllabus', { topic: top.id });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <span className="font-bold text-xs text-slate-900 dark:text-white">
                        {top.name} {language === 'HI' && `(${top.nameHindi})`}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {top.subject} • {top.chapter} • {top.estimatedQuestions}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
