import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExamId, ExamVersion, ErrorLogItem, MockSessionResult } from '../types';

export type NavPage = 
  | 'home'
  | 'exam-detail'
  | 'comparison'
  | 'syllabus'
  | 'practice'
  | 'mock-tests'
  | 'rc-lab'
  | 'dilr-lab'
  | 'dm-lab'
  | 'speed-lab'
  | 'vocab-builder'
  | 'formula-book'
  | 'books'
  | 'current-affairs'
  | 'colleges'
  | 'admission'
  | 'error-notebook'
  | 'flashcards'
  | 'study-planner'
  | 'roadmap'
  | 'strategy'
  | 'dashboard'
  | 'notifications';

export interface BreadcrumbItem {
  label: string;
  labelHindi?: string;
  page: NavPage;
  params?: Record<string, string>;
}

interface AppContextType {
  language: 'EN' | 'HI';
  setLanguage: (lang: 'EN' | 'HI') => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  currentPage: NavPage;
  setCurrentPage: (page: NavPage, params?: Record<string, string>) => void;
  pageParams: Record<string, string>;
  selectedExam: ExamId;
  setSelectedExam: (exam: ExamId) => void;
  selectedVersion: ExamVersion;
  setSelectedVersion: (version: ExamVersion) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (crumbs: BreadcrumbItem[]) => void;
  bookmarks: string[];
  toggleBookmark: (questionId: string) => void;
  errorNotebook: ErrorLogItem[];
  addErrorLog: (item: Omit<ErrorLogItem, 'id' | 'dateLogged' | 'nextRevisionDate' | 'repetitionIntervalDays' | 'repetitionStage'>) => void;
  removeErrorLog: (id: string) => void;
  advanceErrorRevision: (id: string, success: boolean) => void;
  mockHistory: MockSessionResult[];
  saveMockResult: (result: MockSessionResult) => void;
  speedLabMetrics: {
    attempts: number;
    correct: number;
    totalSeconds: number;
  };
  recordSpeedLabRun: (attemptCount: number, correctCount: number, seconds: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'EN' | 'HI'>(() => {
    return (localStorage.getItem('mba_lang') as 'EN' | 'HI') || 'EN';
  });

  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('mba_theme') as 'light' | 'dark' | 'system') || 'system';
  });

  const [currentPage, setCurrentPageState] = useState<NavPage>('home');
  const [pageParams, setPageParams] = useState<Record<string, string>>({});
  const [selectedExam, setSelectedExam] = useState<ExamId>('CAT');
  const [selectedVersion, setSelectedVersion] = useState<ExamVersion>('CAT-2026');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Home', labelHindi: 'मुख्य पृष्ठ', page: 'home' }
  ]);

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('mba_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  const [errorNotebook, setErrorNotebook] = useState<ErrorLogItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('mba_errors') || '[]');
    } catch {
      return [];
    }
  });

  const [mockHistory, setMockHistory] = useState<MockSessionResult[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('mba_mock_history') || '[]');
    } catch {
      return [];
    }
  });

  const [speedLabMetrics, setSpeedLabMetrics] = useState<{ attempts: number; correct: number; totalSeconds: number }>(() => {
    try {
      return JSON.parse(localStorage.getItem('mba_speed_metrics') || '{"attempts":0,"correct":0,"totalSeconds":0}');
    } catch {
      return { attempts: 0, correct: 0, totalSeconds: 0 };
    }
  });

  // Apply dark mode
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const setLanguage = (lang: 'EN' | 'HI') => {
    setLanguageState(lang);
    localStorage.setItem('mba_lang', lang);
  };

  const setTheme = (t: 'light' | 'dark' | 'system') => {
    setThemeState(t);
    localStorage.setItem('mba_theme', t);
  };

  const setCurrentPage = (page: NavPage, params: Record<string, string> = {}) => {
    setCurrentPageState(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (qId: string) => {
    setBookmarks(prev => {
      const next = prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId];
      localStorage.setItem('mba_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const addErrorLog = (item: Omit<ErrorLogItem, 'id' | 'dateLogged' | 'nextRevisionDate' | 'repetitionIntervalDays' | 'repetitionStage'>) => {
    const now = new Date();
    const nextDate = new Date();
    nextDate.setDate(now.getDate() + 1); // 1 Day default spaced revision

    const newError: ErrorLogItem = {
      ...item,
      id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      dateLogged: now.toISOString().split('T')[0],
      nextRevisionDate: nextDate.toISOString().split('T')[0],
      repetitionIntervalDays: 1,
      repetitionStage: 1
    };

    setErrorNotebook(prev => {
      const existing = prev.filter(e => e.questionId !== item.questionId);
      const updated = [newError, ...existing];
      localStorage.setItem('mba_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const removeErrorLog = (id: string) => {
    setErrorNotebook(prev => {
      const updated = prev.filter(e => e.id !== id);
      localStorage.setItem('mba_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const advanceErrorRevision = (id: string, success: boolean) => {
    const intervals = [1, 3, 7, 15, 30, 60];
    setErrorNotebook(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const nextStage = success ? Math.min(item.repetitionStage + 1, intervals.length - 1) : 0;
          const nextInterval = intervals[nextStage];
          const nextDate = new Date();
          nextDate.setDate(nextDate.getDate() + nextInterval);
          return {
            ...item,
            repetitionStage: nextStage,
            repetitionIntervalDays: nextInterval,
            nextRevisionDate: nextDate.toISOString().split('T')[0]
          };
        }
        return item;
      });
      localStorage.setItem('mba_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const saveMockResult = (result: MockSessionResult) => {
    setMockHistory(prev => {
      const updated = [result, ...prev];
      localStorage.setItem('mba_mock_history', JSON.stringify(updated));
      return updated;
    });
  };

  const recordSpeedLabRun = (attemptCount: number, correctCount: number, seconds: number) => {
    setSpeedLabMetrics(prev => {
      const updated = {
        attempts: prev.attempts + attemptCount,
        correct: prev.correct + correctCount,
        totalSeconds: prev.totalSeconds + seconds
      };
      localStorage.setItem('mba_speed_metrics', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        currentPage,
        setCurrentPage,
        pageParams,
        selectedExam,
        setSelectedExam,
        selectedVersion,
        setSelectedVersion,
        isSearchOpen,
        setIsSearchOpen,
        breadcrumbs,
        setBreadcrumbs,
        bookmarks,
        toggleBookmark,
        errorNotebook,
        addErrorLog,
        removeErrorLog,
        advanceErrorRevision,
        mockHistory,
        saveMockResult,
        speedLabMetrics,
        recordSpeedLabRun
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
