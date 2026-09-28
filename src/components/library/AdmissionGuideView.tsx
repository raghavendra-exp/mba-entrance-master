import React, { useState } from 'react';
import { GraduationCap, ArrowRight, ShieldCheck, CheckCircle2, FileText, Users, Award } from 'lucide-react';
import { admissionGuides } from '../../data/admission/admissionData';
import { useApp } from '../../context/AppContext';
import { ExamId } from '../../types';

export const AdmissionGuideView: React.FC = () => {
  const { language, selectedExam, setSelectedExam } = useApp();
  const [activeExam, setActiveExam] = useState<ExamId>(selectedExam);

  const guide = admissionGuides[activeExam] || admissionGuides.CAT;

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'एमबीए प्रवेश मार्गदर्शिका (WAT • GD • PI • CAP)' : 'MBA Admission & Selection Guide'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          In-depth breakdown of stage-by-stage selection processes across IIMs (CAP & Direct), XLRI Jamshedpur, Symbiosis GE-PIWAT, and NMIMS CD-PI.
        </p>
      </div>

      {/* Exam Switcher */}
      <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold w-fit">
        {(['CAT', 'XAT', 'SNAP', 'NMAT'] as ExamId[]).map(e => (
          <button
            key={e}
            onClick={() => setActiveExam(e)}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeExam === e
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {e} Route
          </button>
        ))}
      </div>

      {/* Main Guide Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
            Target Institutes
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {guide.targetInstitutes}
          </h2>
        </div>

        {/* Selection Stages Timeline */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-400">
            Stage-by-Stage Selection Roadmap
          </h3>

          <div className="space-y-4">
            {guide.stages.map((stg) => (
              <div 
                key={stg.stageNumber}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {stg.stageNumber}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {language === 'HI' ? stg.titleHindi : stg.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                  {language === 'HI' ? stg.descriptionHindi : stg.description}
                </p>

                {stg.keyTips.length > 0 && (
                  <div className="pl-8 pt-1">
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900 inline-block">
                      💡 Pro-Tip: {stg.keyTips[0]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Composite Score Calculation Formula */}
        <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-2">
          <span className="font-extrabold text-xs uppercase tracking-wider text-blue-800 dark:text-blue-300 block">
            Composite Score Weightage Formula:
          </span>
          <p className="font-mono text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 leading-relaxed">
            {language === 'HI' ? guide.selectionFormulaHindi : guide.selectionFormula}
          </p>
        </div>

        {/* Official Source Notice */}
        <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>{guide.officialSourceNotice}</span>
        </div>
      </div>
    </div>
  );
};
