import React, { useState } from 'react';
import { Library, ExternalLink, Star, ShieldCheck, CheckCircle2, Search, Filter } from 'lucide-react';
import { booksData } from '../../data/books/booksData';
import { useApp } from '../../context/AppContext';

export const BookLibraryView: React.FC = () => {
  const { language, selectedExam, setCurrentPage, setBreadcrumbs } = useApp();
  const [filterExam, setFilterExam] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.filter(b => {
    if (filterExam !== 'all' && !b.exams.includes(filterExam as any)) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.subject.toLowerCase().includes(q) ||
        b.syllabusCoverage.some(s => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Library className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'प्रमाणिक प्रबंधन प्रवेश पुस्तक पुस्तकालय' : 'Management Entrance Book Library'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Curated repository of reputable, legitimate books for CAT, XAT, SNAP & NMAT. Mapped directly to syllabus chapters with official verified vendor links.
        </p>
      </div>

      {/* Trust Notice */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Strict Copyright Compliance Policy:</strong> We do not host, distribute, or link to pirated PDFs, illegal telegram channels, or copyright-infringing downloads. All book links direct users to legitimate commercial bookstores and official publishers.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none text-xs font-semibold">
          {['all', 'CAT', 'XAT', 'SNAP', 'NMAT'].map(e => (
            <button
              key={e}
              onClick={() => setFilterExam(e)}
              className={`px-3 py-1.5 rounded-xl uppercase transition-all ${
                filterExam === e
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {e === 'all' ? 'All Exams' : e}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search book or author..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBooks.map((b) => (
          <div
            key={b.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  {b.exams.map(ex => (
                    <span key={ex} className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-extrabold text-[10px]">
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{b.rating}</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  By <strong>{b.author}</strong> • {b.publisher} ({b.edition})
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'HI' ? b.purposeHindi : b.purpose}
              </p>

              {/* Coverage & Difficulty */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Level:</span>
                  <span>{b.difficulty}</span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {b.syllabusCoverage.map(topic => (
                    <span key={topic} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                Official Marketplace: <strong>{b.platform}</strong>
              </span>

              <a
                href={b.legitimateUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>View on {b.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
