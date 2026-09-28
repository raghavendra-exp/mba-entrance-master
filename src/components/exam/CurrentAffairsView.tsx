import React, { useState } from 'react';
import { Newspaper, ExternalLink, Calendar, ShieldCheck, Tag } from 'lucide-react';
import { currentAffairsData } from '../../data/current-affairs/currentAffairsData';
import { useApp } from '../../context/AppContext';

export const CurrentAffairsView: React.FC = () => {
  const { language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Banking', 'Economy', 'Corporate', 'Finance', 'Tech & AI', 'Business'];

  const filteredNews = currentAffairsData.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Newspaper className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'प्रबंधन एवं व्यावसायिक करंट अफेयर्स' : 'Management & Business Current Affairs'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Curated business developments for XAT General Knowledge (GK), SNAP, NMAT, and MBA interview (WAT/GD/PI) preparation.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl border transition-all capitalize ${
              selectedCategory === cat
                ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-300'
            }`}
          >
            {cat === 'all' ? 'All Updates' : cat}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                  {item.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </span>
              </div>

              <div className="flex items-center gap-1">
                {item.examRelevance.map(ex => (
                  <span key={ex} className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
              {language === 'HI' ? item.headlineHindi : item.headline}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'HI' ? item.summaryHindi : item.summary}
            </p>

            {/* Why Relevant */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs">
              <strong className="text-blue-600 dark:text-blue-400 block mb-0.5">
                Why Relevant for MBA Aspirants:
              </strong>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'HI' ? item.whyRelevantHindi : item.whyRelevant}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Source: {item.source}</span>
              </div>
              <span>Verified: {item.lastVerified}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
