import rawQuestions from './questions.json';
import { Question, ExamId, SubjectId, Difficulty, QuestionSourceType, QuestionType } from '../../types';

export const questionsData: Question[] = rawQuestions as Question[];

export interface QuestionFilters {
  exam?: ExamId | 'ALL';
  subject?: string;
  chapter?: string;
  topic?: string;
  difficulty?: Difficulty;
  type?: QuestionType;
  sourceType?: QuestionSourceType;
  searchQuery?: string;
}

export function filterQuestions(filters: QuestionFilters): Question[] {
  return questionsData.filter(q => {
    if (filters.exam && filters.exam !== 'ALL' && q.exam !== 'ALL' && q.exam !== filters.exam) {
      return false;
    }
    if (filters.subject && q.subject !== filters.subject) {
      return false;
    }
    if (filters.chapter && q.chapter !== filters.chapter) {
      return false;
    }
    if (filters.topic && q.topic !== filters.topic) {
      return false;
    }
    if (filters.difficulty && q.difficulty !== filters.difficulty) {
      return false;
    }
    if (filters.type && q.type !== filters.type) {
      return false;
    }
    if (filters.sourceType && q.sourceType !== filters.sourceType) {
      return false;
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(query);
      const matchTopic = q.topic.toLowerCase().includes(query);
      const matchChapter = q.chapter.toLowerCase().includes(query);
      const matchTags = q.tags.some(t => t.toLowerCase().includes(query));
      if (!matchQ && !matchTopic && !matchChapter && !matchTags) {
        return false;
      }
    }
    return true;
  });
}

export function getQuestionCountsBySubject(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const q of questionsData) {
    counts[q.subject] = (counts[q.subject] || 0) + 1;
  }
  return counts;
}

export function getQuestionCountsByExam(): Record<string, number> {
  const counts: Record<string, number> = {
    CAT: 0,
    XAT: 0,
    SNAP: 0,
    NMAT: 0,
    TOTAL: questionsData.length
  };
  for (const q of questionsData) {
    if (q.exam === 'ALL') {
      counts.CAT++;
      counts.XAT++;
      counts.SNAP++;
      counts.NMAT++;
    } else if (counts[q.exam] !== undefined) {
      counts[q.exam]++;
    }
  }
  return counts;
}

export function getRandomQuestions(count: number, filters?: QuestionFilters): Question[] {
  const pool = filters ? filterQuestions(filters) : questionsData;
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
