import { ExamInfo } from '../../types';

export const snapVersions: Record<string, ExamInfo> = {
  'SNAP-2026': {
    id: 'SNAP',
    version: 'SNAP-2026',
    name: 'SNAP 2026',
    fullName: 'Symbiosis National Aptitude Test 2026',
    fullNameHindi: 'सिम्बायोसिस नेशनल एप्टीट्यूड टेस्ट 2026 (स्नैप)',
    conductingBody: 'Symbiosis International (Deemed University) - SIU Pune',
    conductingBodyHindi: 'सिम्बायोसिस इंटरनेशनल (डीम्ड यूनिवर्सिटी) - एसआईयू पुणे',
    examLevel: 'University Level National Aptitude Test for 16 SIU Institutes',
    frequency: 'Three test dates in December (Candidate may appear up to 3 times; best score considered)',
    mode: 'Computer Based Test (CBT) across ~84 test cities in India (60 minutes speed test)',
    status: 'UPCOMING',
    officialLinks: {
      officialWebsite: 'https://www.snaptest.org',
      notification: 'https://www.snaptest.org',
      registration: 'https://www.snaptest.org',
      syllabus: 'https://www.snaptest.org',
      admitCard: 'https://www.snaptest.org',
      result: 'https://www.snaptest.org',
      scorecard: 'https://www.snaptest.org',
      admission: 'https://www.snaptest.org',
      lastVerified: '2026-09-20',
    },
    eligibility: {
      qualification: 'Graduate from any recognized University / Institution of National Importance with minimum of 50% marks or equivalent grade (45% for SC/ST)',
      minimumMarks: '50% (General/Open), 45% (SC/ST)',
      finalYearEligible: true,
      ageLimit: 'No age limit',
      workExRequired: 'Not mandatory; beneficial for specific programs like SCMHRD Executive/Infrastructure',
      criteriaList: [
        'Graduate from any recognized University with minimum 50% marks or equivalent grade (45% for SC/ST).',
        'Candidates in their final year of graduation can also appear conditionally.',
        'Candidates who have completed qualifying degree from any Foreign University must obtain an equivalence certificate from AIU (Association of Indian Universities).',
        'Candidate can choose to appear for up to three tests for SNAP. If a candidate appears for more than one test, the highest score will be considered for final percentile calculation.'
      ],
      criteriaListHindi: [
        'किसी भी मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 50% अंकों (एससी/एसटी के लिए 45%) के साथ स्नातक।',
        'स्नातक अंतिम वर्ष के छात्र भी आवेदन करने के पात्र हैं।',
        'उम्मीदवार अधिकतम तीन प्रयासों (Test 1, Test 2, Test 3) में भाग ले सकता है; सर्वश्रेष्ठ स्कोर पर विचार किया जाएगा।'
      ]
    },
    pattern: {
      totalQuestions: 60,
      totalDurationMinutes: 60,
      totalMarks: '60 Marks',
      markingScheme: '+1 mark for correct answer; -0.25 negative marks for each incorrect answer',
      negativeMarkingRule: '-0.25 marks (25% penalty) for each incorrect answer. NO sectional time limit — candidates can switch freely between sections.',
      negativeMarkingRuleHindi: 'प्रत्येक गलत उत्तर के लिए 0.25 अंकों की कटौती। कोई सेक्शनल समय सीमा नहीं है — उम्मीदवार स्वतंत्र रूप से सेक्शन बदल सकते हैं।',
      sections: [
        {
          name: 'General English: Reading Comprehension, Verbal Reasoning, Verbal Ability',
          nameHindi: 'सामान्य अंग्रेजी: पठन बोध, मौखिक तर्क, मौखिक क्षमता',
          questions: 15,
          durationMinutes: 60, // Combined 60 mins
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'Vocabulary, Idioms, Grammar, Sentence Correction, Analogies, Short RC passages',
          description: 'High-speed verbal section focusing heavily on vocabulary, parts of speech, and swift usage.'
        },
        {
          name: 'Analytical & Logical Reasoning (A&LR)',
          nameHindi: 'विश्लेषणात्मक और तार्किक तर्क (A&LR)',
          questions: 25,
          durationMinutes: 60,
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'Linear & Circular Arrangements, Blood Relations, Coding-Decoding, Series, Clocks & Calendars, Syllogisms',
          description: 'The highest weightage section in SNAP (25 questions out of 60). Determines the final score trajectory.'
        },
        {
          name: 'Quantitative, Data Interpretation & Data Sufficiency (QA, DI, DS)',
          nameHindi: 'मात्रात्मक, डेटा व्याख्या और डेटा पर्याप्तता',
          questions: 20,
          durationMinutes: 60,
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'Arithmetic, Algebra, Modern Math, Number System, Tables & Pie Charts, Data Sufficiency',
          description: 'Speed-driven direct formulaic and application-oriented quantitative problems.'
        }
      ]
    },
    importantDates: {
      notificationDate: 'First week of August 2026',
      applicationStart: 'Second week of August 2026',
      applicationEnd: 'Fourth week of November 2026',
      correctionWindow: 'Third week of November 2026',
      admitCardDate: 'First week of December 2026 for Test 1; following weeks for Test 2 & 3',
      examDates: 'Test 1: Early Dec 2026 | Test 2: Mid Dec 2026 | Test 3: Late Dec 2026',
      resultDate: 'Second week of January 2027',
      scorecardValidity: 'Valid for Academic Year 2027-2029',
      lastUpdated: '2026-09-25',
      lastVerified: '2026-09-25'
    },
    admissionSummary: {
      topInstitutes: [
        'SIBM (Symbiosis Institute of Business Management) Pune',
        'SCMHRD (Symbiosis Centre for Management & Human Resource Development) Pune',
        'SIIB (Symbiosis Institute of International Business) Pune',
        'SIBM Bangalore', 'SIOM (Operations Management) Nashik',
        'SICSR Pune', 'SIMS Pune (Defence quota)', 'SIDTM Pune'
      ],
      selectionStages: [
        'Stage 1: SNAP Percentile Shortlist for individual Symbiosis Institutes (program-specific)',
        'Stage 2: GE-PIWAT (Group Exercise, Personal Interaction, and Writing Ability Test) conducted in person / hybrid',
        'Stage 3: Composite Merit List (SNAP Score weightage 50%, GE 10%, PI 30%, WAT 10%)'
      ],
      weightageOverview: 'SNAP score accounts for 50% of the final merit list for SIBM Pune and SCMHRD admissions.'
    },
    historicalCutoffs: [
      { category: 'SIBM Pune (MBA Flagship)', percentileScore: '98.5+ %ile (Score: ~41-43+ / 60)', remarks: 'Premier Symbiosis institute; top placement CTCs' },
      { category: 'SCMHRD Pune (MBA / MBA-HR)', percentileScore: '97+ %ile (Score: ~39-41+ / 60)', remarks: 'Renowned for HR, Business Analytics, Infrastructure' },
      { category: 'SIIB Pune (International Business)', percentileScore: '93+ %ile (Score: ~34-36+ / 60)', remarks: 'Specialized in International Business & Agri-business' },
      { category: 'SIBM Bangalore', percentileScore: '90+ %ile (Score: ~32-34+ / 60)', remarks: 'Top urban tech hub MBA' }
    ]
  },

  'SNAP-2025': {
    id: 'SNAP',
    version: 'SNAP-2025',
    name: 'SNAP 2025',
    fullName: 'Symbiosis National Aptitude Test 2025',
    fullNameHindi: 'सिम्बायोसिस नेशनल एप्टीट्यूड टेस्ट 2025',
    conductingBody: 'Symbiosis International (Deemed University)',
    conductingBodyHindi: 'सिम्बायोसिस इंटरनेशनल यूनिवर्सिटी',
    examLevel: 'University / National Level',
    frequency: '3 slots in December',
    mode: 'CBT (60 mins, 60 Qs)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://www.snaptest.org',
      notification: 'https://www.snaptest.org',
      registration: 'https://www.snaptest.org',
      syllabus: 'https://www.snaptest.org',
      admitCard: 'https://www.snaptest.org',
      result: 'https://www.snaptest.org',
      scorecard: 'https://www.snaptest.org',
      admission: 'https://www.snaptest.org',
      lastVerified: '2026-01-15'
    },
    eligibility: {
      qualification: 'Graduate with 50% marks (45% for SC/ST)',
      minimumMarks: '50% General, 45% SC/ST',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard SIU rules applied.'],
      criteriaListHindi: ['मानक एसआईयू पात्रता नियम लागू।']
    },
    pattern: {
      totalQuestions: 60,
      totalDurationMinutes: 60,
      totalMarks: '60 Marks',
      markingScheme: '+1 / -0.25',
      negativeMarkingRule: '-0.25 marks; No sectional timing',
      negativeMarkingRuleHindi: '-0.25 अंक; कोई अनुभागीय समय सीमा नहीं',
      sections: [
        { name: 'General English', nameHindi: 'सामान्य अंग्रेजी', questions: 15, durationMinutes: 60, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Verbal Ability', description: '15 Qs' },
        { name: 'A&LR', nameHindi: 'A&LR', questions: 25, durationMinutes: 60, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Logical Reasoning', description: '25 Qs' },
        { name: 'QA, DI & DS', nameHindi: 'QA, DI & DS', questions: 20, durationMinutes: 60, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Quant & DI', description: '20 Qs' }
      ]
    },
    importantDates: {
      notificationDate: 'August 5, 2025',
      applicationStart: 'August 5, 2025',
      applicationEnd: 'November 22, 2025',
      correctionWindow: 'November 24, 2025',
      admitCardDate: 'December 2, 2025',
      examDates: 'December 8, 15, 21, 2025',
      resultDate: 'January 10, 2026',
      scorecardValidity: 'Valid for 2026 Admissions',
      lastUpdated: '2026-01-15',
      lastVerified: '2026-01-15'
    },
    admissionSummary: {
      topInstitutes: ['SIBM Pune, SCMHRD, SIIB, SIBM Bangalore'],
      selectionStages: ['SNAP Score -> GE-PIWAT -> Merit List'],
      weightageOverview: '50% SNAP + 50% GE-PIWAT.'
    },
    historicalCutoffs: [
      { category: 'SIBM Pune', percentileScore: '98.3%ile', remarks: 'Score ~41.5' },
      { category: 'SCMHRD Pune', percentileScore: '97.1%ile', remarks: 'Score ~39.0' }
    ]
  }
};
