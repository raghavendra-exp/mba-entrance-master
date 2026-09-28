import React from 'react';
import { Scale, Check, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { examComparisonData } from '../../data/exams/comparison';
import { useApp } from '../../context/AppContext';

export const ExamComparisonTable: React.FC = () => {
  const { language, setSelectedExam, setCurrentPage, setBreadcrumbs } = useApp();

  const handleSelectExam = (exam: 'CAT' | 'XAT' | 'SNAP' | 'NMAT') => {
    setSelectedExam(exam);
    setCurrentPage('exam-detail');
    setBreadcrumbs([
      { label: 'Home', page: 'home' },
      { label: `${exam} Master Module`, page: 'exam-detail' }
    ]);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Scale className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'कैट • ज़ैट • स्नैप • एनमैट आधिकारिक तुलना तालिका' : 'CAT • XAT • SNAP • NMAT Official Comparison Matrix'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Strictly verified factual parameter comparison across India's top 4 national MBA entrance exams.
        </p>
      </div>

      <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-extrabold">
                <th className="p-4 sm:p-5 w-1/5 min-w-[140px] uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'HI' ? 'विशेषता / पैरामीटर' : 'Feature / Parameter'}
                </th>
                <th className="p-4 sm:p-5 w-1/5 min-w-[160px]">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-black text-base">CAT</span>
                    <button 
                      onClick={() => handleSelectExam('CAT')}
                      className="text-[10px] font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 underline"
                    >
                      Explore
                    </button>
                  </div>
                </th>
                <th className="p-4 sm:p-5 w-1/5 min-w-[160px]">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 dark:text-purple-400 font-black text-base">XAT</span>
                    <button 
                      onClick={() => handleSelectExam('XAT')}
                      className="text-[10px] font-bold text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 underline"
                    >
                      Explore
                    </button>
                  </div>
                </th>
                <th className="p-4 sm:p-5 w-1/5 min-w-[160px]">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 dark:text-emerald-400 font-black text-base">SNAP</span>
                    <button 
                      onClick={() => handleSelectExam('SNAP')}
                      className="text-[10px] font-bold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 underline"
                    >
                      Explore
                    </button>
                  </div>
                </th>
                <th className="p-4 sm:p-5 w-1/5 min-w-[160px]">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 dark:text-amber-400 font-black text-base">NMAT</span>
                    <button 
                      onClick={() => handleSelectExam('NMAT')}
                      className="text-[10px] font-bold text-slate-500 hover:text-amber-600 dark:hover:text-amber-400 underline"
                    >
                      Explore
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {examComparisonData.map((row, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">
                    {language === 'HI' ? row.featureHindi : row.feature}
                  </td>
                  <td className="p-4 sm:p-5 whitespace-pre-line leading-relaxed">
                    {row.feature === 'Official Website' ? (
                      <a href={row.cat} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 hover:underline">
                        <span>iimcat.ac.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      row.cat
                    )}
                  </td>
                  <td className="p-4 sm:p-5 whitespace-pre-line leading-relaxed">
                    {row.feature === 'Official Website' ? (
                      <a href={row.xat} target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1 hover:underline">
                        <span>xatonline.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      row.xat
                    )}
                  </td>
                  <td className="p-4 sm:p-5 whitespace-pre-line leading-relaxed">
                    {row.feature === 'Official Website' ? (
                      <a href={row.snap} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 hover:underline">
                        <span>snaptest.org</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      row.snap
                    )}
                  </td>
                  <td className="p-4 sm:p-5 whitespace-pre-line leading-relaxed">
                    {row.feature === 'Official Website' ? (
                      <a href={row.nmat} target="_blank" rel="noreferrer" className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1 hover:underline">
                        <span>mba.com/nmat</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      row.nmat
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
