import React from 'react';
import { LayoutDashboard, BookOpen, Brain, FileText, Award } from 'lucide-react';
import { useApp, NavPage } from '../../context/AppContext';

export const MobileBottomNav: React.FC = () => {
  const { currentPage, setCurrentPage, language, setBreadcrumbs, selectedExam } = useApp();

  const navItems: { id: NavPage; label: string; labelHindi: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', labelHindi: 'होम', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'exam-detail', label: 'Exams', labelHindi: 'परीक्षाएं', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'practice', label: 'Practice', labelHindi: 'अभ्यास', icon: <Brain className="w-5 h-5" /> },
    { id: 'mock-tests', label: 'Mocks', labelHindi: 'मॉक टेस्ट', icon: <FileText className="w-5 h-5" /> },
    { id: 'dashboard', label: 'Progress', labelHindi: 'प्रगति', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 flex items-center justify-around safe-area-pb"
    >
      {navItems.map((item) => {
        const isActive = currentPage === item.id;
        const label = language === 'HI' ? item.labelHindi : item.label;

        return (
          <button
            key={item.id}
            onClick={() => {
              setCurrentPage(item.id);
              setBreadcrumbs([
                { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
                { label: item.label, labelHindi: item.labelHindi, page: item.id }
              ]);
            }}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-bold scale-105'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
            }`}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="text-[10px] mt-0.5 tracking-tight">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};
