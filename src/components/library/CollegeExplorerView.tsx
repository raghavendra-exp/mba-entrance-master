import React, { useState } from 'react';
import { Building2, Search, ExternalLink, MapPin, Award, Scale, ChevronDown, CheckCircle2 } from 'lucide-react';
import { collegesData } from '../../data/colleges/collegesData';
import { CollegeInfo, ExamId } from '../../types';
import { useApp } from '../../context/AppContext';

export const CollegeExplorerView: React.FC = () => {
  const { language, pageParams } = useApp();
  const [filterExam, setFilterExam] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(pageParams.search || '');
  const [compareColleges, setCompareColleges] = useState<CollegeInfo[]>([]);

  const filteredColleges = collegesData.filter(c => {
    if (filterExam !== 'all' && !c.examsAccepted.includes(filterExam as any)) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.location.city.toLowerCase().includes(q) ||
        c.location.state.toLowerCase().includes(q) ||
        c.program.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleCompare = (col: CollegeInfo) => {
    if (compareColleges.some(c => c.id === col.id)) {
      setCompareColleges(prev => prev.filter(c => c.id !== col.id));
    } else {
      if (compareColleges.length >= 3) {
        alert('You can compare a maximum of 3 colleges simultaneously.');
        return;
      }
      setCompareColleges(prev => [...prev, col]);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400">
            <Building2 className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'टॉप एमबीए कॉलेज एवं बी-स्कूल एक्सप्लोरर' : 'Top MBA College & B-School Explorer'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Strictly verified factual information on India's premier B-schools (IIMs, XLRI, FMS, SPJIMR, SIBM, NMIMS): cutoffs, placement CTCs, fees, and admission criteria.
        </p>
      </div>

      {/* Side-by-Side Comparison Panel if 2+ selected */}
      {compareColleges.length >= 2 && (
        <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border-2 border-blue-300 dark:border-blue-800 shadow-md space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Factual Side-by-Side College Comparison ({compareColleges.length} Selected)
              </h3>
            </div>
            <button
              onClick={() => setCompareColleges([])}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              Clear Comparison
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800 text-slate-700 dark:text-slate-200">
                  <th className="p-3 w-1/4">Metric</th>
                  {compareColleges.map(c => (
                    <th key={c.id} className="p-3 font-bold text-blue-700 dark:text-blue-300">{c.shortName}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 dark:divide-blue-900 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-slate-500">Exams Accepted</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3 font-mono font-bold">{c.examsAccepted.join(', ')}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-500">Average Placement CTC</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3 font-extrabold text-emerald-600 dark:text-emerald-400">{c.placements.averageCTC}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-500">Median Placement CTC</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3 font-bold">{c.placements.medianCTC}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-500">Tuition Fees (Approx)</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3 font-bold">{c.fees}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-500">Cutoffs (General)</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3">{c.cutoffs[0]?.generalPercentile}</td>)}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-500">Location</td>
                  {compareColleges.map(c => <td key={c.id} className="p-3">{c.location.city}, {c.location.state}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none text-xs font-semibold">
          {['all', 'CAT', 'XAT', 'SNAP', 'NMAT'].map(e => (
            <button
              key={e}
              onClick={() => setFilterExam(e)}
              className={`px-3 py-1.5 rounded-xl uppercase transition-all ${
                filterExam === e
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {e === 'all' ? 'All Institutes' : `Accepts ${e}`}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search B-school by name or city..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Colleges List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredColleges.map((c) => {
          const isComparing = compareColleges.some(item => item.id === c.id);

          return (
            <div
              key={c.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {c.type} {c.nirfRank && `• NIRF #${c.nirfRank}`}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                      {c.name}
                    </h3>
                  </div>

                  <button
                    onClick={() => toggleCompare(c)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold uppercase transition-all ${
                      isComparing
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {isComparing ? 'Comparing' : '+ Compare'}
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{c.location.city}, {c.location.state}</span>
                  <span>•</span>
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
                    {c.examsAccepted.join(' / ')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Average CTC</span>
                    <span className="font-black text-sm text-emerald-600 dark:text-emerald-400">
                      {c.placements.averageCTC}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Approx 2-Yr Fees</span>
                    <span className="font-black text-sm text-slate-900 dark:text-white">
                      {c.fees.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Cutoff & Shortlisting criteria */}
                <div className="space-y-1 text-xs pt-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">Cutoff Benchmark:</span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {c.cutoffs[0]?.generalPercentile}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={c.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={c.admissionPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors inline-flex items-center gap-1 shadow-xs"
                >
                  <span>Admission Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
