import React, { useState } from 'react';
import { Layers, BookOpen, Brain, ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { masterSyllabus } from '../../data/syllabus/masterSyllabus';
import { useApp } from '../../context/AppContext';
import { SubjectId, ExamId } from '../../types';

export const SyllabusMasterView: React.FC = () => {
  const { language, selectedExam, setCurrentPage, setBreadcrumbs, pageParams } = useApp();
  const [activeSubject, setActiveSubject] = useState<SubjectId>('QA');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const subject = masterSyllabus.find(s => s.id === activeSubject) || masterSyllabus[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Layers className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'संपूर्ण प्रबंधन प्रवेश पाठ्यक्रम मास्टर' : 'Complete Management Entrance Syllabus Master'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Official topic hierarchy with estimated question weightages, concept notes, recommended standard textbooks, and direct practice links.
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
        {masterSyllabus.map(sub => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border ${
              activeSubject === sub.id
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-300'
            }`}
          >
            {language === 'HI' ? sub.nameHindi : sub.name}
          </button>
        ))}
      </div>

      {/* Overview Banner */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Section Scope & Academic Philosophy
        </span>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {language === 'HI' ? subject.overviewHindi : subject.overview}
        </p>
      </div>

      {/* Chapters & Topics Accordion List */}
      <div className="space-y-4">
        {subject.chapters.map((ch) => {
          const isExpanded = expandedChapter === ch.id || expandedChapter === null;

          return (
            <div
              key={ch.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setExpandedChapter(isExpanded && expandedChapter !== null ? null : ch.id)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    {language === 'HI' ? ch.nameHindi : ch.name}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {ch.topics.length} Micro-Topics Structured
                  </span>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {isExpanded && (
                <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ch.topics.map(top => (
                      <div
                        key={top.id}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold">
                              {top.weightagePercentage}% Section Weightage
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">
                              {top.estimatedQuestions}
                            </span>
                          </div>

                          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                            {language === 'HI' ? top.nameHindi : top.name}
                          </h4>

                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {language === 'HI' ? top.conceptNotesHindi : top.conceptNotes}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                          <span className="text-[10px] text-slate-400 truncate max-w-[150px]">
                            {top.recommendedBooks[0]}
                          </span>

                          <button
                            onClick={() => {
                              setCurrentPage('practice', { query: top.name });
                              setBreadcrumbs([
                                { label: 'Home', page: 'home' },
                                { label: 'Syllabus', page: 'syllabus' },
                                { label: top.name, page: 'practice' }
                              ]);
                            }}
                            className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            <span>Practice ({top.name})</span>
                            <Brain className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
