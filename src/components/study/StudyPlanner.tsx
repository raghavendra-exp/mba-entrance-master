import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, BookOpen, Brain, FileText, ArrowRight, UserCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ExamId } from '../../types';

export const StudyPlanner: React.FC = () => {
  const { language, selectedExam, setSelectedExam } = useApp();

  const [targetExam, setTargetExam] = useState<ExamId>(selectedExam);
  const [profileType, setProfileType] = useState<'student' | 'working'>('student');
  const [dailyHours, setDailyHours] = useState<number>(3);
  const [prepLevel, setPrepLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [weakSection, setWeakSection] = useState<'QA' | 'VARC' | 'DILR' | 'DM'>('QA');
  const [planGenerated, setPlanGenerated] = useState(true);

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
            <Calendar className="w-5 h-5" />
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {language === 'HI' ? 'व्यक्तिगत अध्ययन योजनाकार' : 'Interactive Study Planner'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Generate an intelligent, day-by-day and week-by-week study roadmap calibrated to your target exam, available hours, and student/working professional status.
        </p>
      </div>

      {/* Input Configuration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-5">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Step 1: Your Aspirant Profile & Parameters
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Target Exam */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Target Entrance Exam:</label>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value as ExamId)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="CAT">CAT 2026 (IIM Focus)</option>
              <option value="XAT">XAT 2026 (XLRI & DM Focus)</option>
              <option value="SNAP">SNAP 2026 (SIBM Speed Focus)</option>
              <option value="NMAT">NMAT 2026 (NMIMS Adaptive)</option>
            </select>
          </div>

          {/* Profile */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Candidate Status:</label>
            <select
              value={profileType}
              onChange={(e) => setProfileType(e.target.value as any)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="student">Full-time College Student</option>
              <option value="working">Working Professional (9-to-6)</option>
            </select>
          </div>

          {/* Daily Hours */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Daily Study Hours:</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="2"
                max="8"
                step="1"
                value={dailyHours}
                onChange={(e) => setDailyHours(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="font-extrabold text-blue-600 dark:text-blue-400 font-mono w-12 text-right">
                {dailyHours} hrs
              </span>
            </div>
          </div>

          {/* Weak Section */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Primary Focus / Weak Area:</label>
            <select
              value={weakSection}
              onChange={(e) => setWeakSection(e.target.value as any)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="QA">Quantitative Aptitude</option>
              <option value="VARC">Reading Comprehension & VA</option>
              <option value="DILR">Data Interpretation & LR Puzzles</option>
              <option value="DM">Decision Making (XAT)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generated Roadmap Display */}
      {planGenerated && (
        <div className="space-y-6">
          {/* Daily Schedule Structure */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Your Recommended Daily Routine ({dailyHours} Hours Target)
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                {profileType === 'working' ? 'Working Professional Plan' : 'Student Study Routine'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <span className="font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider text-[10px]">
                  Morning Slot ({profileType === 'working' ? '6:30 AM - 8:00 AM' : '8:00 AM - 10:00 AM'})
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white">VARC & Editorial Mastery</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Read 2 long-form essays (Aeon, The Hindu, Project Syndicate). Solve 2 RC passages and 10 high-frequency flashcard words.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[10px]">
                  Midday / Break Slot (30 Mins)
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white">Speed Lab & Mental Math Drills</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Execute 3 x 60-second speed blitz drills in the Speed Lab: fraction conversions, squares, and percentage multipliers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[10px]">
                  Evening Slot ({profileType === 'working' ? '8:30 PM - 10:30 PM' : '6:00 PM - 8:30 PM'})
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white">{weakSection} Core Practice & Error Log</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Solve 20 chapter-specific questions in {weakSection}. Immediately tag incorrect problems in the Error Notebook for spaced revision.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Phase Master Roadmap */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Comprehensive 4-Phase Exam Calendar</span>
            </h3>

            <div className="space-y-3">
              {[
                {
                  phase: 'Phase 1: Conceptual Foundation & Formulae',
                  duration: 'Months 1 to 3',
                  tasks: 'Complete Arithmetic, Algebra basics, Grammar rules, and 250+ Vocabulary words. Solve Level-1 book exercises.'
                },
                {
                  phase: 'Phase 2: Chapter-wise Practice & DILR Sets',
                  duration: 'Months 4 to 5',
                  tasks: 'Advance to Level-2 problems. Master Games & Tournaments, Seating Arrangements, Geometry, and XAT Decision Making frameworks.'
                },
                {
                  phase: 'Phase 3: Verified PYQs & Sectional Tests',
                  duration: 'Months 6 to 7',
                  tasks: 'Solve all official past papers (2018-2025). Take 2 sectional tests weekly per subject to build time discipline.'
                },
                {
                  phase: 'Phase 4: Full Mocks, Error Correction & Final Simulation',
                  duration: 'Final 8 to 10 Weeks',
                  tasks: 'Take 2 full-length mocks weekly during official exam slot hours. Dedicate 4 hours to in-depth mistake analysis per mock.'
                }
              ].map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white block">{p.phase}</span>
                    <p className="text-slate-600 dark:text-slate-400">{p.tasks}</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-extrabold shrink-0 self-start sm:self-center">
                    {p.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
