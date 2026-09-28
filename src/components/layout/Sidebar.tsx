import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Scale, 
  FileText, 
  Brain, 
  Zap, 
  Calculator, 
  Bookmark, 
  Newspaper, 
  Building2, 
  GraduationCap, 
  AlertCircle, 
  RotateCcw, 
  Calendar, 
  Map, 
  Compass, 
  Bell, 
  Layers, 
  Library,
  BookCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp, NavPage } from '../../context/AppContext';
import { ExamId } from '../../types';

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
}

interface NavItemConfig {
  id: NavPage;
  label: string;
  labelHindi: string;
  icon: React.ReactNode;
  badge?: string | number;
  category: 'core' | 'prep' | 'labs' | 'resources' | 'revision';
}

export const Sidebar: React.FC<SidebarProps> = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen
}) => {
  const {
    currentPage,
    setCurrentPage,
    language,
    selectedExam,
    setSelectedExam,
    setBreadcrumbs,
    errorNotebook
  } = useApp();

  const navItems: NavItemConfig[] = [
    // Core
    { id: 'home', label: 'Dashboard Home', labelHindi: 'डैशबोर्ड मुख्य पृष्ठ', icon: <LayoutDashboard className="w-4 h-4" />, category: 'core' },
    { id: 'dashboard', label: 'Performance Analytics', labelHindi: 'प्रदर्शन विश्लेषण', icon: <Award className="w-4 h-4" />, category: 'core' },
    { id: 'exam-detail', label: `${selectedExam} Master Module`, labelHindi: `${selectedExam} मास्टर मॉड्यूल`, icon: <BookOpen className="w-4 h-4" />, category: 'core' },
    { id: 'comparison', label: 'Exam Comparison', labelHindi: 'परीक्षा तुलना तालिका', icon: <Scale className="w-4 h-4" />, category: 'core' },
    { id: 'syllabus', label: 'Syllabus Master', labelHindi: 'पाठ्यक्रम मास्टर', icon: <Layers className="w-4 h-4" />, category: 'core' },

    // Prep & Testing
    { id: 'practice', label: 'Practice Question Bank', labelHindi: 'अभ्यास प्रश्न बैंक', icon: <Brain className="w-4 h-4" />, badge: '1,200+', category: 'prep' },
    { id: 'mock-tests', label: 'Mock Test Engine', labelHindi: 'मॉक टेस्ट इंजन', icon: <FileText className="w-4 h-4" />, category: 'prep' },
    { id: 'study-planner', label: 'Custom Study Planner', labelHindi: 'कस्टम अध्ययन योजनाकार', icon: <Calendar className="w-4 h-4" />, category: 'prep' },
    { id: 'roadmap', label: 'Zero-to-Exam Roadmap', labelHindi: 'जीरो-टू-एग्जाम रोडमैप', icon: <Map className="w-4 h-4" />, category: 'prep' },
    { id: 'strategy', label: 'Exam Strategy Guides', labelHindi: 'परीक्षा रणनीति मार्गदर्शिका', icon: <Compass className="w-4 h-4" />, category: 'prep' },

    // Specialized Labs
    { id: 'speed-lab', label: 'Speed Lab (Mental Math)', labelHindi: 'स्पीड लैब (गणना गति)', icon: <Zap className="w-4 h-4 text-amber-500" />, category: 'labs' },
    { id: 'rc-lab', label: 'RC Lab (Speed & WPM)', labelHindi: 'आरसी लैब (पठन बोध)', icon: <BookCheck className="w-4 h-4 text-emerald-500" />, category: 'labs' },
    { id: 'dilr-lab', label: 'DILR Lab (Puzzles & Sets)', labelHindi: 'डीआईएलआर लैब (पहेलियां)', icon: <Layers className="w-4 h-4 text-indigo-500" />, category: 'labs' },
    { id: 'dm-lab', label: 'XAT Decision Making Lab', labelHindi: 'ज़ैट डिसीजन मेकिंग लैब', icon: <Scale className="w-4 h-4 text-purple-500" />, badge: 'XAT', category: 'labs' },
    { id: 'vocab-builder', label: 'MBA Vocabulary Master', labelHindi: 'शब्दावली बिल्डर', icon: <Bookmark className="w-4 h-4 text-rose-500" />, category: 'labs' },
    { id: 'formula-book', label: 'Quant Formula Master', labelHindi: 'मात्रात्मक सूत्र मास्टर', icon: <Calculator className="w-4 h-4 text-blue-500" />, category: 'labs' },

    // Revision & Memory
    { 
      id: 'error-notebook', 
      label: 'Error Notebook', 
      labelHindi: 'त्रुटि नोटबुक (गलतियां)', 
      icon: <AlertCircle className="w-4 h-4 text-rose-500" />, 
      badge: errorNotebook.length > 0 ? errorNotebook.length : undefined, 
      category: 'revision' 
    },
    { id: 'flashcards', label: 'Spaced Revision Engine', labelHindi: 'अंतराल पुनरावृत्ति (Flashcards)', icon: <RotateCcw className="w-4 h-4 text-teal-500" />, category: 'revision' },

    // Information & College Ecosystem
    { id: 'books', label: 'Legitimate Book Library', labelHindi: 'प्रमाणिक पुस्तक पुस्तकालय', icon: <Library className="w-4 h-4" />, category: 'resources' },
    { id: 'colleges', label: 'College Explorer', labelHindi: 'कॉलेज एक्सप्लोरर (आईआईएम/टॉप B-Schools)', icon: <Building2 className="w-4 h-4" />, category: 'resources' },
    { id: 'admission', label: 'MBA Admission Guide', labelHindi: 'एमबीए प्रवेश गाइड (WAT/PI/CAP)', icon: <GraduationCap className="w-4 h-4" />, category: 'resources' },
    { id: 'current-affairs', label: 'Business Current Affairs', labelHindi: 'व्यावसायिक करंट अफेयर्स & GK', icon: <Newspaper className="w-4 h-4" />, category: 'resources' },
    { id: 'notifications', label: 'Official Notification Tracker', labelHindi: 'अधिसूचना ट्रैकर', icon: <Bell className="w-4 h-4" />, category: 'resources' },
  ];

  const handleNav = (item: NavItemConfig) => {
    setCurrentPage(item.id);
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label: item.label, labelHindi: item.labelHindi, page: item.id }
    ]);
    setIsMobileSidebarOpen(false);
  };

  const categories = [
    { key: 'core', title: 'EXAMINATION CORE', titleHindi: 'परीक्षा मुख्य' },
    { key: 'prep', title: 'PREPARATION & TESTING', titleHindi: 'तैयारी एवं मॉक' },
    { key: 'labs', title: 'INTERACTIVE SKILL LABS', titleHindi: 'इंटरैक्टिव लैब्स' },
    { key: 'revision', title: 'MEMORY & ERROR ANALYSIS', titleHindi: 'रिवीजन और गलतियां' },
    { key: 'resources', title: 'ADMISSIONS & RESOURCES', titleHindi: 'संसाधन एवं प्रवेश' }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-16 left-0 z-50 lg:z-30 h-full lg:h-[calc(100vh-4rem)] w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 overflow-y-auto ${
          isMobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-3 space-y-5">
          {/* Mobile Header with Close Button */}
          <div className="flex items-center justify-between lg:hidden pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">Navigation Menu</span>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close Navigation Menu"
            >
              <CheckCircle2 className="w-4 h-4 hidden" />
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">✕ Close</span>
            </button>
          </div>

          {/* Fast Exam Switcher Banner */}
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-blue-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                {language === 'HI' ? 'सक्रिय परीक्षा' : 'TARGET EXAM'}
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-extrabold rounded bg-blue-600 text-white">
                {selectedExam}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {(['CAT', 'XAT', 'SNAP', 'NMAT'] as ExamId[]).map((exam) => (
                <button
                  key={exam}
                  onClick={() => {
                    setSelectedExam(exam);
                    setCurrentPage('exam-detail');
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`py-1 text-xs font-bold rounded-lg border transition-all ${
                    selectedExam === exam
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Groups */}
          {categories.map((cat) => (
            <div key={cat.key} className="space-y-1">
              <h2 className="px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {language === 'HI' ? cat.titleHindi : cat.title}
              </h2>
              {navItems
                .filter((item) => item.category === cat.key)
                .map((item) => {
                  const isActive = currentPage === item.id;
                  const label = language === 'HI' ? item.labelHindi : item.label;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                          {item.icon}
                        </span>
                        <span className="truncate">{label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>

        {/* Footer meta */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Official Syllabus Aligned</span>
          </div>
          <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
            CAT • XAT • SNAP • NMAT 2026-27
          </p>
        </div>
      </aside>
    </>
  );
};
