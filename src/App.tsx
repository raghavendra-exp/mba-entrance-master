import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Breadcrumb } from './components/layout/Breadcrumb';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';

// Views
import { HomePage } from './components/home/HomePage';
import { ExamOverview } from './components/exam/ExamOverview';
import { ExamComparisonTable } from './components/exam/ExamComparisonTable';
import { SyllabusMasterView } from './components/study/SyllabusMasterView';
import { PracticeEngine } from './components/practice/PracticeEngine';
import { MockTestEngine } from './components/practice/MockTestEngine';
import { SpeedLab } from './components/labs/SpeedLab';
import { ReadingComprehensionLab } from './components/labs/ReadingComprehensionLab';
import { DecisionMakingLab } from './components/labs/DecisionMakingLab';
import { DilrLab } from './components/labs/DilrLab';
import { VocabularyLab } from './components/labs/VocabularyLab';
import { FormulaMaster } from './components/study/FormulaMaster';
import { BookLibraryView } from './components/library/BookLibraryView';
import { CollegeExplorerView } from './components/library/CollegeExplorerView';
import { AdmissionGuideView } from './components/library/AdmissionGuideView';
import { ErrorNotebookView } from './components/practice/ErrorNotebookView';
import { FlashcardEngine } from './components/study/FlashcardEngine';
import { StudyPlanner } from './components/study/StudyPlanner';
import { RoadmapView } from './components/study/RoadmapView';
import { ExamStrategyView } from './components/study/ExamStrategyView';
import { PerformanceDashboard } from './components/dashboard/PerformanceDashboard';
import { CurrentAffairsView } from './components/exam/CurrentAffairsView';
import { NotificationTracker } from './components/exam/NotificationTracker';

const MainLayout: React.FC = () => {
  const { currentPage } = useApp();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'exam-detail':
        return <ExamOverview />;
      case 'comparison':
        return <ExamComparisonTable />;
      case 'syllabus':
        return <SyllabusMasterView />;
      case 'practice':
        return <PracticeEngine />;
      case 'mock-tests':
        return <MockTestEngine />;
      case 'speed-lab':
        return <SpeedLab />;
      case 'rc-lab':
        return <ReadingComprehensionLab />;
      case 'dm-lab':
        return <DecisionMakingLab />;
      case 'dilr-lab':
        return <DilrLab />;
      case 'vocab-builder':
        return <VocabularyLab />;
      case 'formula-book':
        return <FormulaMaster />;
      case 'books':
        return <BookLibraryView />;
      case 'colleges':
        return <CollegeExplorerView />;
      case 'admission':
        return <AdmissionGuideView />;
      case 'error-notebook':
        return <ErrorNotebookView />;
      case 'flashcards':
        return <FlashcardEngine />;
      case 'study-planner':
        return <StudyPlanner />;
      case 'roadmap':
        return <RoadmapView />;
      case 'strategy':
        return <ExamStrategyView />;
      case 'dashboard':
        return <PerformanceDashboard />;
      case 'current-affairs':
        return <CurrentAffairsView />;
      case 'notifications':
        return <NotificationTracker />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      <Breadcrumb />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-10">
          {renderCurrentView()}
        </main>
      </div>

      <Footer />
      <MobileBottomNav />
      <GlobalSearchModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
