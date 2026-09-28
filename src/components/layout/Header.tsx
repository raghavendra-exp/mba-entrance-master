import React from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  Languages, 
  Menu, 
  X, 
  GraduationCap, 
  History, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ExamId, ExamVersion } from '../../types';

interface HeaderProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen
}) => {
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    selectedExam,
    setSelectedExam,
    selectedVersion,
    setSelectedVersion,
    setIsSearchOpen,
    setCurrentPage,
    setBreadcrumbs
  } = useApp();

  const handleExamSelect = (exam: ExamId) => {
    setSelectedExam(exam);
    const defaultVersion: Record<ExamId, ExamVersion> = {
      CAT: 'CAT-2026',
      XAT: 'XAT-2026',
      SNAP: 'SNAP-2026',
      NMAT: 'NMAT-2026'
    };
    setSelectedVersion(defaultVersion[exam]);
    setCurrentPage('exam-detail');
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label: exam, labelHindi: exam, page: 'exam-detail' }
    ]);
  };

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as ExamVersion;
    setSelectedVersion(val);
    const examFromVer = val.split('-')[0] as ExamId;
    setSelectedExam(examFromVer);
    setCurrentPage('exam-detail');
    setBreadcrumbs([
      { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' },
      { label: `${examFromVer} (${val})`, labelHindi: `${examFromVer} (${val})`, page: 'exam-detail' }
    ]);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Hamburger & Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMobileSidebarOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => {
              setCurrentPage('home');
              setBreadcrumbs([{ label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' }]);
            }}
            className="flex items-center gap-2 text-left group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                  MBA ENTRANCE MASTER
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  INDIA
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 hidden sm:block truncate max-w-[280px]">
                CAT • XAT • SNAP • NMAT Official Ecosystem
              </p>
            </div>
          </button>
        </div>

        {/* Center: Exam Switcher Tabs */}
        <div className="hidden lg:flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          {(['CAT', 'XAT', 'SNAP', 'NMAT'] as ExamId[]).map((exam) => {
            const isActive = selectedExam === exam;
            return (
              <button
                key={exam}
                onClick={() => handleExamSelect(exam)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  isActive
                    ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {exam}
              </button>
            );
          })}
        </div>

        {/* Right: Actions (Version, Search, Language, Theme) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Version Dropdown - shown on lg+ screens */}
          <div className="relative hidden lg:flex items-center">
            <label htmlFor="version-select" className="sr-only">Select Exam Version</label>
            <History className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 absolute left-2 pointer-events-none" />
            <select
              id="version-select"
              value={selectedVersion}
              onChange={handleVersionChange}
              aria-label="Exam Edition and Historical Version Selector"
              className="text-xs font-medium pl-7 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <optgroup label="CAT Versions">
                <option value="CAT-2026">CAT 2026 (Upcoming)</option>
                <option value="CAT-2025">CAT 2025</option>
                <option value="CAT-2024">CAT 2024</option>
              </optgroup>
              <optgroup label="XAT Versions">
                <option value="XAT-2026">XAT 2026 (Upcoming)</option>
                <option value="XAT-2025">XAT 2025</option>
                <option value="XAT-2024">XAT 2024</option>
              </optgroup>
              <optgroup label="SNAP Versions">
                <option value="SNAP-2026">SNAP 2026 (Upcoming)</option>
                <option value="SNAP-2025">SNAP 2025</option>
              </optgroup>
              <optgroup label="NMAT Versions">
                <option value="NMAT-2026">NMAT 2026 (Upcoming)</option>
                <option value="NMAT-2025">NMAT 2025</option>
              </optgroup>
            </select>
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 text-xs transition-colors"
            title="Global Search (Ctrl+K)"
            aria-label="Open Global Search"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden lg:inline-block text-[10px] font-semibold px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold transition-colors"
            title={language === 'EN' ? "Switch to Hindi (हिंदी)" : "Switch to English"}
            aria-label={language === 'EN' ? "Switch interface to Hindi language" : "Switch interface to English language"}
          >
            <Languages className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="text-[11px] sm:text-xs">{language === 'EN' ? 'हिन्दी' : 'EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300 transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
