import React from 'react';
import { ShieldCheck, ExternalLink, Heart, Scale } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { language, setCurrentPage, setSelectedExam, setBreadcrumbs } = useApp();

  const handleExamClick = (exam: 'CAT' | 'XAT' | 'SNAP' | 'NMAT') => {
    setSelectedExam(exam);
    setCurrentPage('exam-detail');
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label: exam, page: 'exam-detail' }
    ]);
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 py-10 px-4 sm:px-6 lg:px-8 mt-16 text-xs no-print">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Col 1: Brand & Mission */}
        <div className="md:col-span-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              MBA
            </div>
            <span className="font-extrabold text-sm text-slate-900 dark:text-white tracking-tight">
              MBA ENTRANCE MASTER
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">
            {language === 'HI'
              ? 'कैट, ज़ैट, स्नैप और एनमैट के लिए भारत का संपूर्ण, प्रामाणिक और ओपन-एक्सेस तैयारी इकोसिस्टम।'
              : 'Complete, authoritative, open-access preparation ecosystem for CAT, XAT, SNAP & NMAT — from foundation concepts to final B-school admissions.'}
          </p>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 pt-1">
            <a 
              href="https://github.com/raghavendra-exp/mba-entrance-master" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Col 2: Official Exam Portals */}
        <div className="space-y-2">
          <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
            {language === 'HI' ? 'आधिकारिक परीक्षा पोर्टल' : 'Official Portals'}
          </h2>
          <ul className="space-y-1.5">
            <li>
              <a href="https://iimcat.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>CAT Official (iimcat.ac.in)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <a href="https://xatonline.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>XAT Official (xatonline.in)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <a href="https://www.snaptest.org" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>SNAP Official (snaptest.org)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <a href="https://www.mba.com/exams/nmat" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>NMAT by GMAC (mba.com)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Core Interactive Labs */}
        <div className="space-y-2">
          <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
            {language === 'HI' ? 'इंटरैक्टिव लैब्स' : 'Interactive Labs'}
          </h2>
          <ul className="space-y-1.5">
            <li>
              <button onClick={() => setCurrentPage('speed-lab')} className="hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors">
                Speed Lab (Mental Math Drills)
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('rc-lab')} className="hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors">
                RC Lab (Speed & Inference)
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('dm-lab')} className="hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors">
                XAT Decision Making Lab
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('vocab-builder')} className="hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors">
                MBA Vocabulary Master
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('formula-book')} className="hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors">
                Quant Formula Master
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Trust & Transparency */}
        <div className="space-y-2">
          <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Official Source Trust</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
            All exam dates, fees, syllabus guidelines, and eligibility criteria are mapped directly to official conveners. We maintain full version history across 2024, 2025, and 2026 cycles.
          </p>
          <div className="pt-1">
            <span className="inline-block px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-semibold text-[10px] border border-emerald-200 dark:border-emerald-800">
              100% Free & Open-Access
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
        <p>
          © 2026-2027 MBA Entrance Master India. Crafted with precision for India’s MBA aspirants.
        </p>
        <div className="flex items-center gap-4">
          <span>Non-Commercial Educational Platform</span>
          <span>•</span>
          <span>Deployable via GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
};
