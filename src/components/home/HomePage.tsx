import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Scale, 
  Zap, 
  FileText, 
  Layers, 
  Library, 
  Newspaper, 
  Building2, 
  GraduationCap, 
  Award, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Bookmark,
  Calculator,
  Compass,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ExamId } from '../../types';
import { questionsData } from '../../data/questions';

export const HomePage: React.FC = () => {
  const { language, setSelectedExam, setCurrentPage, setBreadcrumbs } = useApp();

  const handleSelectExam = (exam: ExamId) => {
    setSelectedExam(exam);
    setCurrentPage('exam-detail');
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label: `${exam} Master Module`, labelHindi: `${exam} मास्टर मॉड्यूल`, page: 'exam-detail' }
    ]);
  };

  const handleNavigate = (page: any, label: string, labelHindi: string) => {
    setCurrentPage(page);
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label, labelHindi, page }
    ]);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>INDIA'S AUTHORITATIVE MBA ENTRANCE ECOSYSTEM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {language === 'HI' ? (
              <>कैट, ज़ैट, स्नैप और एनमैट — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">अवधारणा से अंतिम प्रवेश तक</span></>
            ) : (
              <>Prepare for CAT, XAT, SNAP & NMAT — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">From Foundation to Final Admission</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            {language === 'HI'
              ? 'आधिकारिक पाठ्यक्रम, 1,200+ प्रश्न बैंक, प्रामाणिक पिछले वर्ष के प्रश्न (PYQs), अनुभाग-वार फुल मॉक टेस्ट, स्पीड लैब, फॉर्मूला मास्टर और भारत के शीर्ष बी-स्कूलों की जानकारी।'
              : 'Complete preparation, verified PYQs, 1,200+ interactive practice question bank, timed full-length mock tests, specialized labs (Speed, RC, Decision Making), and factual college explorer.'}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-semibold text-slate-200">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase block font-bold">Question Bank</span>
              <span className="text-base font-black text-blue-300 font-mono">{questionsData.length}+ Questions</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase block font-bold">Target Exams</span>
              <span className="text-base font-black text-indigo-300">CAT • XAT • SNAP • NMAT</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase block font-bold">Exam Modes</span>
              <span className="text-base font-black text-emerald-300">9 Practice Modes</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase block font-bold">Accuracy & Trust</span>
              <span className="text-base font-black text-amber-300">100% Official Sourced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Four Primary Exam Master Cards */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {language === 'HI' ? 'चार प्रमुख प्रबंधन प्रवेश परीक्षाएं' : 'Four Core Management Entrance Examinations'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Select an exam to access syllabus mapping, official notifications, section timings, and verified cutoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* CAT */}
          <div 
            onClick={() => handleSelectExam('CAT')}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-black text-base flex items-center justify-center">
                  CAT
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase">
                  IIMs • FMS • SPJIMR
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Common Admission Test
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  VARC (24 Q) • DILR (20 Q) • QA (22 Q)
                </p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                66 Questions in 120 Minutes with strict 40-minute sectional timers and +3 / -1 marking scheme.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>Explore CAT Module</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* XAT */}
          <div 
            onClick={() => handleSelectExam('XAT')}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-purple-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 font-black text-base flex items-center justify-center">
                  XAT
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">
                  XLRI • XIMB • IMT
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  Xavier Aptitude Test
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  VALR (26 Q) • DM (21 Q) • QA-DI (28 Q) • GK
                </p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                210 Minutes comprehensive test featuring the hallmark Decision Making section and analytical essay writing.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
              <span>Explore XAT Module</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* SNAP */}
          <div 
            onClick={() => handleSelectExam('SNAP')}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 font-black text-base flex items-center justify-center">
                  SNAP
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase">
                  SIBM • SCMHRD
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  Symbiosis National Aptitude
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  General English • A&LR • Quant/DI/DS
                </p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                High-speed 60 questions in 60 minutes with NO sectional timing. Candidate may take up to 3 attempts in December.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>Explore SNAP Module</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* NMAT */}
          <div 
            onClick={() => handleSelectExam('NMAT')}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 font-black text-base flex items-center justify-center">
                  NMAT
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 uppercase">
                  NMIMS Mumbai • Somaiya
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                  NMAT by GMAC
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  Language Skills • Quant Skills • Logical Reasoning
                </p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Computer-delivered adaptive test with scaled scores (36-360) and ZERO negative marking over a 70-day window.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>Explore NMAT Module</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Fast Navigation Grid (Additional Cards) */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          {language === 'HI' ? 'अध्ययन उपकरण एवं संसाधन' : 'Preparation Tools & Academic Engines'}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { id: 'comparison', label: 'Exam Comparison', desc: 'Factual matrix of all 4 exams', icon: <Scale className="w-5 h-5 text-blue-500" /> },
            { id: 'practice', label: 'Practice Question Bank', desc: '1,200+ Questions in 9 Modes', icon: <Brain className="w-5 h-5 text-indigo-500" /> },
            { id: 'mock-tests', label: 'Mock Test Engine', desc: 'Timed exam simulations', icon: <FileText className="w-5 h-5 text-amber-500" /> },
            { id: 'speed-lab', label: 'Speed Lab (Mental Math)', desc: 'Fast percentage & fraction drills', icon: <Zap className="w-5 h-5 text-amber-500" /> },
            { id: 'rc-lab', label: 'RC Lab (Speed & WPM)', desc: 'Reading passages with timer', icon: <BookOpen className="w-5 h-5 text-emerald-500" /> },
            { id: 'dm-lab', label: 'XAT Decision Making Lab', desc: 'Ethical & business caselets', icon: <Scale className="w-5 h-5 text-purple-500" /> },
            { id: 'vocab-builder', label: 'MBA Vocabulary Master', desc: 'High-frequency exam words', icon: <Bookmark className="w-5 h-5 text-rose-500" /> },
            { id: 'formula-book', label: 'Quant Formula Master', desc: 'Math formulas & traps', icon: <Calculator className="w-5 h-5 text-blue-500" /> },
            { id: 'colleges', label: 'College Explorer', desc: 'IIMs & top B-schools factual guide', icon: <Building2 className="w-5 h-5 text-emerald-500" /> },
            { id: 'admission', label: 'MBA Admission Guide', desc: 'WAT, GD, PI & CAP process', icon: <GraduationCap className="w-5 h-5 text-indigo-500" /> },
            { id: 'current-affairs', label: 'Business Current Affairs', desc: 'Economy, Banking & Corporate GK', icon: <Newspaper className="w-5 h-5 text-blue-500" /> },
            { id: 'dashboard', label: 'Progress Dashboard', desc: 'Analytics & Weak area engine', icon: <Award className="w-5 h-5 text-purple-500" /> },
          ].map(tool => (
            <button
              key={tool.id}
              onClick={() => handleNavigate(tool.id, tool.label, tool.label)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 inline-block mb-2 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {tool.label}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {tool.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
