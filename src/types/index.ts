// Core Types for MBA Entrance Master India

export type ExamId = 'CAT' | 'XAT' | 'SNAP' | 'NMAT';

export type ExamVersion = 
  | 'CAT-2026' | 'CAT-2025' | 'CAT-2024'
  | 'XAT-2026' | 'XAT-2025' | 'XAT-2024'
  | 'SNAP-2026' | 'SNAP-2025'
  | 'NMAT-2026' | 'NMAT-2025';

export type ExamStatus = 
  | 'UPCOMING'
  | 'APPLICATION OPEN'
  | 'APPLICATION CLOSED'
  | 'EXAMINATION ONGOING'
  | 'RESULT DECLARED'
  | 'ADMISSION PROCESS'
  | 'COMPLETED';

export type SubjectId = 
  | 'VARC' 
  | 'QA' 
  | 'DILR' 
  | 'LR' 
  | 'DM' 
  | 'GK' 
  | 'VALR' 
  | 'QA-DI' 
  | 'GENERAL_ENGLISH' 
  | 'LANGUAGE_SKILLS' 
  | 'QUANTITATIVE_SKILLS' 
  | 'LOGICAL_REASONING';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 
  | 'MCQ' 
  | 'TITA' 
  | 'Caselet' 
  | 'RC' 
  | 'DI' 
  | 'DS' 
  | 'DM';

export type QuestionSourceType = 'VERIFIED PYQ' | 'ORIGINAL' | 'PYQ-STYLE';

export interface OfficialLinks {
  officialWebsite: string;
  notification: string;
  registration: string;
  syllabus: string;
  admitCard: string;
  result: string;
  scorecard: string;
  admission: string;
  lastVerified: string;
}

export interface SectionPattern {
  name: string;
  nameHindi: string;
  questions: number;
  durationMinutes: number;
  marksPerQuestion: number;
  negativeMarks: number;
  isSectionalTimed: boolean;
  questionType: string;
  description: string;
}

export interface ExamInfo {
  id: ExamId;
  version: ExamVersion;
  name: string;
  fullName: string;
  fullNameHindi: string;
  conductingBody: string;
  conductingBodyHindi: string;
  examLevel: string;
  frequency: string;
  mode: string;
  status: ExamStatus;
  officialLinks: OfficialLinks;
  eligibility: {
    qualification: string;
    minimumMarks: string;
    finalYearEligible: boolean;
    ageLimit: string;
    workExRequired: string;
    criteriaList: string[];
    criteriaListHindi: string[];
  };
  pattern: {
    totalQuestions: number;
    totalDurationMinutes: number;
    totalMarks: string;
    markingScheme: string;
    negativeMarkingRule: string;
    negativeMarkingRuleHindi: string;
    sections: SectionPattern[];
  };
  importantDates: {
    notificationDate: string;
    applicationStart: string;
    applicationEnd: string;
    correctionWindow: string;
    admitCardDate: string;
    examDates: string;
    resultDate: string;
    scorecardValidity: string;
    lastUpdated: string;
    lastVerified: string;
  };
  admissionSummary: {
    topInstitutes: string[];
    selectionStages: string[];
    weightageOverview: string;
  };
  historicalCutoffs: {
    category: string;
    percentileScore: string;
    remarks: string;
  }[];
}

export interface Question {
  id: string;
  exam: ExamId | 'ALL';
  subject: string;
  chapter: string;
  topic: string;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  questionHindi?: string;
  passage?: string; // For RC or DM or DILR sets
  passageHindi?: string;
  options?: string[];
  optionsHindi?: string[];
  answer: string;
  explanation: string;
  explanationHindi?: string;
  sourceType: QuestionSourceType;
  year?: string;
  tags: string[];
  decisionFramework?: {
    situation?: string;
    facts?: string[];
    constraints?: string[];
    stakeholders?: string[];
    optionsAnalysis?: string[];
    bestSupported?: string;
    commonTrap?: string;
  };
}

export interface SyllabusTopic {
  id: string;
  name: string;
  nameHindi: string;
  weightagePercentage: number;
  estimatedQuestions: string;
  conceptNotes: string;
  conceptNotesHindi: string;
  recommendedBooks: string[];
  hasPYQs: boolean;
}

export interface SyllabusChapter {
  id: string;
  name: string;
  nameHindi: string;
  topics: SyllabusTopic[];
}

export interface SyllabusSubject {
  id: SubjectId;
  name: string;
  nameHindi: string;
  exams: ExamId[];
  overview: string;
  overviewHindi: string;
  chapters: SyllabusChapter[];
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: string;
  exams: ExamId[];
  subject: string;
  difficulty: string;
  purpose: string;
  purposeHindi: string;
  syllabusCoverage: string[];
  legitimateUrl: string;
  platform: 'Amazon' | 'Flipkart' | 'Publisher' | 'Google Books' | 'Official';
  rating: number;
  mappedChapters: string[];
}

export interface CollegeInfo {
  id: string;
  name: string;
  shortName: string;
  program: string;
  examsAccepted: ExamId[];
  location: {
    city: string;
    state: string;
  };
  type: 'Public / Government' | 'Private' | 'University Department';
  officialWebsite: string;
  admissionPortal: string;
  fees: string;
  seats: string;
  accreditation: string;
  nirfRank?: number;
  placements: {
    averageCTC: string;
    medianCTC: string;
    highestCTC: string;
    year: string;
    topRecruiters: string[];
  };
  cutoffs: {
    exam: ExamId;
    generalPercentile: string;
    sectionalCutoffs?: string;
  }[];
  selectionCriteria: {
    catXatWeightage: string;
    watPiWeightage: string;
    academicWeightage: string;
    workExperienceWeightage: string;
    genderDiversityWeightage: string;
  };
  lastVerified: string;
}

export interface CurrentAffairItem {
  id: string;
  date: string;
  category: 'Business' | 'Economy' | 'Banking' | 'Finance' | 'Corporate' | 'Startups' | 'Tech & AI' | 'Government Policy' | 'International Business' | 'Awards & Appointments';
  headline: string;
  headlineHindi: string;
  summary: string;
  summaryHindi: string;
  whyRelevant: string;
  whyRelevantHindi: string;
  examRelevance: ExamId[];
  source: string;
  lastVerified: string;
}

export interface VocabItem {
  word: string;
  pronunciation: string;
  meaning: string;
  meaningHindi: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
  context: string;
  difficulty: 'High-Frequency CAT' | 'Advanced XAT' | 'Speed SNAP';
  relatedWords: string[];
}

export interface FormulaItem {
  id: string;
  subject: string;
  chapter: string;
  topic: string;
  formulaName: string;
  formulaMath: string;
  explanation: string;
  explanationHindi: string;
  conditions: string;
  example: string;
  commonMistake: string;
}

export interface ErrorLogItem {
  id: string;
  questionId: string;
  exam: ExamId;
  subject: string;
  chapter: string;
  topic: string;
  userAnswer: string;
  correctAnswer: string;
  mistakeCategory: 
    | 'Concept Gap' 
    | 'Calculation Error' 
    | 'Misread' 
    | 'Guess' 
    | 'Time Pressure' 
    | 'Wrong Elimination' 
    | 'Vocabulary' 
    | 'Logic Error' 
    | 'Question Selection Error';
  userNotes: string;
  dateLogged: string;
  nextRevisionDate: string;
  repetitionIntervalDays: number;
  repetitionStage: number; // 1, 3, 7, 15, 30, 60
}

export interface MockSessionResult {
  id: string;
  exam: ExamId;
  date: string;
  totalTimeSeconds: number;
  totalScore: number;
  maxScore: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  accuracy: number;
  sectionBreakdown: {
    sectionName: string;
    score: number;
    correct: number;
    incorrect: number;
    unattempted: number;
    timeSpentSeconds: number;
    accuracy: number;
  }[];
  weakTopics: string[];
}
