import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp, BreadcrumbItem, NavPage } from '../../context/AppContext';

export const Breadcrumb: React.FC = () => {
  const { breadcrumbs, setCurrentPage, language } = useApp();

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  const handleClick = (item: BreadcrumbItem, index: number) => {
    if (index === breadcrumbs.length - 1) return;
    setCurrentPage(item.page, item.params);
  };

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className="w-full bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 px-4 py-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none"
    >
      <ol className="flex items-center space-x-1.5 min-w-max">
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const displayLabel = language === 'HI' && crumb.labelHindi ? crumb.labelHindi : crumb.label;

          return (
            <li key={idx} className="flex items-center space-x-1.5">
              {idx === 0 ? (
                <button
                  onClick={() => handleClick(crumb, idx)}
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>{displayLabel}</span>
                </button>
              ) : (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
                  {isLast ? (
                    <span 
                      aria-current="page"
                      className="font-semibold text-blue-600 dark:text-blue-400 max-w-[200px] truncate"
                    >
                      {displayLabel}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleClick(crumb, idx)}
                      className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors max-w-[150px] truncate"
                    >
                      {displayLabel}
                    </button>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
