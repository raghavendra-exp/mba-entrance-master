import React from 'react';
import { 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  GraduationCap, 
  AlertCircle, 
  TrendingUp,
  Brain,
  Layers,
  Library
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { catVersions } from '../../data/exams/cat';
import { xatVersions } from '../../data/exams/xat';
import { snapVersions } from '../../data/exams/snap';
import { nmatVersions } from '../../data/exams/nmat';
import { StatusBadge } from '../common/StatusBadge';
import { ExamInfo } from '../../types';

export const ExamOverview: React.FC = () => {
  const { selectedExam, selectedVersion, language, setCurrentPage, setBreadcrumbs } = useApp();

  const getExamData = (): ExamInfo => {
    if (selectedExam === 'CAT') return catVersions[selectedVersion] || catVersions['CAT-2026'];
    if (selectedExam === 'XAT') return xatVersions[selectedVersion] || xatVersions['XAT-2026'];
    if (selectedExam === 'SNAP') return snapVersions[selectedVersion] || snapVersions['SNAP-2026'];
    return nmatVersions[selectedVersion] || nmatVersions['NMAT-2026'];
  };

  const exam = getExamData();

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={exam.status} />
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/10 text-blue-200 border border-white/10">
                Edition: {exam.version}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified: {exam.officialLinks.lastVerified}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {language === 'HI' ? exam.fullNameHindi : exam.fullName}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {exam.conductingBody} • {exam.mode}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{exam.pattern.totalDurationMinutes} Minutes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{exam.pattern.totalQuestions} Questions</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{exam.pattern.totalMarks}</span>
              </div>
            </div>
          </div>

          {/* Quick CTA Card */}
          <div className="flex flex-col gap-2.5 sm:w-64 shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Direct Preparation Links
            </span>
            <button
              onClick={() => {
                setCurrentPage('practice', { exam: exam.id });
                setBreadcrumbs([
                  { label: 'Home', page: 'home' },
                  { label: exam.name, page: 'exam-detail' },
                  { label: 'Practice', page: 'practice' }
                ]);
              }}
              className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
            >
              <Brain className="w-4 h-4" />
              <span>Practice Questions</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage('mock-tests', { exam: exam.id });
                setBreadcrumbs([
                  { label: 'Home', page: 'home' },
                  { label: exam.name, page: 'exam-detail' },
                  { label: 'Mock Test', page: 'mock-tests' }
                ]);
              }}
              className="w-full py-2 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Take Full Mock Test</span>
            </button>
            <a
              href={exam.officialLinks.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-emerald-500/30"
            >
              <span>Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Pattern & Section Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'HI' ? 'परीक्षा पैटर्न एवं अनुभाग विभाजन' : 'Official Exam Pattern & Section Breakdown'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verified marking rules and section durations for {exam.version}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exam.pattern.sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                    Section {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {sec.durationMinutes} Mins
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {language === 'HI' && sec.nameHindi ? sec.nameHindi : sec.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {sec.questionType}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{sec.questions} Questions</span>
                <span>
                  {sec.isSectionalTimed ? 'Strict Section Timer' : 'Flexible Section Time'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Marking Scheme Alert */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">
              {language === 'HI' ? 'अंकन एवं नकारात्मक अंकन नियम' : 'Official Marking & Negative Marking Rules'}:
            </span>
            <p className="leading-relaxed">
              {language === 'HI' ? exam.pattern.negativeMarkingRuleHindi : exam.pattern.negativeMarkingRule}
            </p>
          </div>
        </div>
      </div>

      {/* Official Dates & Milestones Tracker */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          {language === 'HI' ? 'महत्वपूर्ण तिथियां एवं आधिकारिक शेड्यूल' : 'Important Dates & Milestone Tracker'}
        </h2>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
            {[
              { label: 'Notification Release', val: exam.importantDates.notificationDate },
              { label: 'Registration Window Opens', val: exam.importantDates.applicationStart },
              { label: 'Registration Closes', val: exam.importantDates.applicationEnd },
              { label: 'Application Correction Window', val: exam.importantDates.correctionWindow },
              { label: 'Admit Card Download', val: exam.importantDates.admitCardDate },
              { label: 'Examination Window / Date', val: exam.importantDates.examDates, highlight: true },
              { label: 'Result Declaration', val: exam.importantDates.resultDate },
              { label: 'Scorecard Validity', val: exam.importantDates.scorecardValidity }
            ].map((row, i) => (
              <div key={i} className={`p-3.5 sm:px-6 flex items-center justify-between ${row.highlight ? 'bg-blue-50/60 dark:bg-blue-950/30' : ''}`}>
                <span className="font-medium text-slate-600 dark:text-slate-400">
                  {row.label}
                </span>
                <span className={`font-semibold ${row.highlight ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-900 dark:text-white'}`}>
                  {row.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          {language === 'HI' ? 'पात्रता मानदंड' : 'Official Eligibility Criteria'}
        </h2>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {(language === 'HI' ? exam.eligibility.criteriaListHindi : exam.eligibility.criteriaList).map((crit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{crit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Historical Score vs Percentile Benchmarks */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <span>{language === 'HI' ? 'ऐतिहासिक कटऑफ और पर्सेंटाइल विश्लेषण' : 'Historical Cutoffs & Percentile Benchmarks'}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exam.historicalCutoffs.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                {item.category}
              </span>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1">
                {item.percentileScore}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {item.remarks}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Participating Colleges */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-500" />
            <span>{language === 'HI' ? 'प्रमुख प्रवेश संस्थान' : 'Premier Accepting Institutes'}</span>
          </h2>
          <button
            onClick={() => {
              setCurrentPage('colleges');
              setBreadcrumbs([{ label: 'Home', page: 'home' }, { label: 'College Explorer', page: 'colleges' }]);
            }}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Explore all B-Schools →
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {exam.admissionSummary.topInstitutes.map((inst, i) => (
            <span 
              key={i}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              {inst}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
