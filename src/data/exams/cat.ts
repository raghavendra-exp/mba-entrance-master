import { ExamInfo } from '../../types';

export const catVersions: Record<string, ExamInfo> = {
  'CAT-2026': {
    id: 'CAT',
    version: 'CAT-2026',
    name: 'CAT 2026',
    fullName: 'Common Admission Test 2026',
    fullNameHindi: 'कॉमन एडमिशन टेस्ट 2026 (कैट)',
    conductingBody: 'Rotating Indian Institute of Management (IIM Kozhikode / IIM Calcutta cycle)',
    conductingBodyHindi: 'रोटेटिंग भारतीय प्रबंधन संस्थान (आईआईएम चक्र)',
    examLevel: 'National Level Postgraduate Entrance Examination',
    frequency: 'Once a year (Last Sunday of November)',
    mode: 'Computer Based Test (CBT) across ~170 cities in 3 sessions',
    status: 'UPCOMING',
    officialLinks: {
      officialWebsite: 'https://iimcat.ac.in',
      notification: 'https://iimcat.ac.in',
      registration: 'https://iimcat.ac.in',
      syllabus: 'https://iimcat.ac.in',
      admitCard: 'https://iimcat.ac.in',
      result: 'https://iimcat.ac.in',
      scorecard: 'https://iimcat.ac.in',
      admission: 'https://iimcat.ac.in',
      lastVerified: '2026-09-20',
    },
    eligibility: {
      qualification: "Bachelor's Degree in any discipline with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD)",
      minimumMarks: '50% (General/EWS/NC-OBC), 45% (SC/ST/PwD)',
      finalYearEligible: true,
      ageLimit: 'No age limit',
      workExRequired: 'Not mandatory; rewarded in shortlisting criteria at many IIMs',
      criteriaList: [
        'Candidate must hold a Bachelor’s degree, with at least 50% marks or equivalent CGPA (45% in case of SC, ST and PwD categories) awarded by any recognized university or educational institution.',
        'Candidates appearing for the final year of Bachelor’s degree/equivalent qualification examination and those who have completed degree requirements and are awaiting results can also apply.',
        'Candidates with CA/CS/ICWA degree are also eligible with requisite percentage.',
        'Reservation follows Government of India norms (15% SC, 7.5% ST, 27% NC-OBC, 10% EWS, 5% PwD).'
      ],
      criteriaListHindi: [
        'उम्मीदवार के पास किसी भी मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 50% अंकों (एससी/एसटी/पीडब्ल्यूडी के लिए 45%) के साथ स्नातक डिग्री होनी चाहिए।',
        'स्नातक अंतिम वर्ष के छात्र भी परीक्षा के लिए आवेदन करने के पात्र हैं।',
        'सीए/सीएस/आईसीडब्ल्यूए उत्तीर्ण उम्मीदवार भी पात्र हैं।',
        'आरक्षण भारत सरकार के मानकों (15% SC, 7.5% ST, 27% NC-OBC, 10% EWS, 5% PwD) के अनुसार लागू होता है।'
      ]
    },
    pattern: {
      totalQuestions: 66,
      totalDurationMinutes: 120,
      totalMarks: '198 Marks',
      markingScheme: '+3 marks for correct MCQ/TITA, -1 mark for wrong MCQ, 0 for wrong TITA',
      negativeMarkingRule: '-1 mark for each incorrect MCQ; NO negative marking for non-MCQ (Type In The Answer - TITA) questions.',
      negativeMarkingRuleHindi: 'गलत बहुविकल्पीय प्रश्न (MCQ) के लिए -1 अंक; गैर-MCQ (TITA) प्रश्नों के लिए कोई नकारात्मक अंकन नहीं।',
      sections: [
        {
          name: 'Verbal Ability & Reading Comprehension (VARC)',
          nameHindi: 'मौखिक योग्यता और पठन बोध (VARC)',
          questions: 24,
          durationMinutes: 40,
          marksPerQuestion: 3,
          negativeMarks: 1,
          isSectionalTimed: true,
          questionType: 'MCQs (16 RC questions across 4 passages) + 8 Verbal Ability (Para Jumbles, Summary, Odd Sentence, Completion)',
          description: 'Strictly timed 40 minutes. Candidate cannot move to other sections during this time.'
        },
        {
          name: 'Data Interpretation & Logical Reasoning (DILR)',
          nameHindi: 'डेटा व्याख्या और तार्किक तर्क (DILR)',
          questions: 20,
          durationMinutes: 40,
          marksPerQuestion: 3,
          negativeMarks: 1,
          isSectionalTimed: true,
          questionType: '4 sets of 5 questions each (MCQ and TITA mix)',
          description: 'Complex problem-solving based on puzzles, games, charts, matrices, and distributions.'
        },
        {
          name: 'Quantitative Aptitude (QA)',
          nameHindi: 'मात्रात्मक योग्यता (QA)',
          questions: 22,
          durationMinutes: 40,
          marksPerQuestion: 3,
          negativeMarks: 1,
          isSectionalTimed: true,
          questionType: 'Arithmetic, Algebra, Geometry, Modern Math, Number System (MCQ & TITA)',
          description: 'Tests analytical accuracy, core mathematical concepts, and problem-solving agility.'
        }
      ]
    },
    importantDates: {
      notificationDate: 'Last week of July 2026 (Verified official window)',
      applicationStart: 'First week of August 2026',
      applicationEnd: 'Third week of September 2026 (5:00 PM)',
      correctionWindow: 'Fourth week of September 2026',
      admitCardDate: 'Last week of October 2026 till exam day',
      examDates: 'Last Sunday of November 2026 (3 Slots: Morning, Afternoon, Evening)',
      resultDate: 'First week of January 2027',
      scorecardValidity: 'Valid till December 31, 2027',
      lastUpdated: '2026-09-25',
      lastVerified: '2026-09-25'
    },
    admissionSummary: {
      topInstitutes: [
        'IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'IIM Lucknow',
        'IIM Kozhikode', 'IIM Indore', 'IIM Mumbai (formerly NITIE)',
        'FMS Delhi (University of Delhi)', 'SPJIMR Mumbai', 'MDI Gurgaon',
        'DMS IIT Delhi', 'SJMSOM IIT Bombay', 'DoMS IIT Madras'
      ],
      selectionStages: [
        'Stage 1: Shortlisting based on CAT Sectional & Overall Percentiles + Academic profile (10th, 12th, Graduation)',
        'Stage 2: Analytical Writing Test (AWT) / Writing Ability Test (WAT) + Personal Interview (PI)',
        'Stage 3: Final Merit Composite Score generation based on CAT (30-50%), PI (30-40%), WAT (10%), Academics (10-15%), Work Ex (5-10%), and Gender/Academic Diversity'
      ],
      weightageOverview: 'Each IIM publishes its independent admission policy annually with differentiated criteria for sectional cutoff and academic history weightage.'
    },
    historicalCutoffs: [
      { category: '99+ Percentile', percentileScore: 'Score: ~76-82 / 198', remarks: 'Calls from IIM A, B, C, L, K, I and FMS Delhi' },
      { category: '95-98 Percentile', percentileScore: 'Score: ~55-70 / 198', remarks: 'Calls from New & Baby IIMs, MDI, SPJIMR profile, IITs' },
      { category: '90-95 Percentile', percentileScore: 'Score: ~45-54 / 198', remarks: 'CAP (Common Admission Process) IIMs, GIM, TAPMI, FORE' },
      { category: '80-90 Percentile', percentileScore: 'Score: ~35-44 / 198', remarks: 'GLIM, Lal Bahadur Shastri, Great Lakes, B-schools' }
    ]
  },

  'CAT-2025': {
    id: 'CAT',
    version: 'CAT-2025',
    name: 'CAT 2025',
    fullName: 'Common Admission Test 2025',
    fullNameHindi: 'कॉमन एडमिशन टेस्ट 2025',
    conductingBody: 'Indian Institute of Management Kozhikode',
    conductingBodyHindi: 'आईआईएम कोझिकोड',
    examLevel: 'National Level',
    frequency: 'Once a year',
    mode: 'Computer Based Test (3 Slots)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://iimcat.ac.in',
      notification: 'https://iimcat.ac.in',
      registration: 'https://iimcat.ac.in',
      syllabus: 'https://iimcat.ac.in',
      admitCard: 'https://iimcat.ac.in',
      result: 'https://iimcat.ac.in',
      scorecard: 'https://iimcat.ac.in',
      admission: 'https://iimcat.ac.in',
      lastVerified: '2026-01-15'
    },
    eligibility: {
      qualification: "Graduation with 50% marks (45% for SC/ST/PwD)",
      minimumMarks: '50% General, 45% Reserved',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard IIM eligibility criteria maintained.'],
      criteriaListHindi: ['मानक आईआईएम पात्रता मानदंड लागू रहे।']
    },
    pattern: {
      totalQuestions: 66,
      totalDurationMinutes: 120,
      totalMarks: '198 Marks',
      markingScheme: '+3 / -1 for MCQ, 0 for TITA',
      negativeMarkingRule: '-1 for wrong MCQ; No negative marking for TITA',
      negativeMarkingRuleHindi: 'MCQ में गलत उत्तर पर -1; TITA में कोई कटौती नहीं।',
      sections: [
        { name: 'VARC', nameHindi: 'VARC', questions: 24, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: '16 RC + 8 VA', description: '4 passages' },
        { name: 'DILR', nameHindi: 'DILR', questions: 20, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: '4 sets x 5 questions', description: 'Analytical sets' },
        { name: 'QA', nameHindi: 'QA', questions: 22, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: 'Arithmetic, Algebra, etc.', description: 'Quant problems' }
      ]
    },
    importantDates: {
      notificationDate: 'July 28, 2025',
      applicationStart: 'August 1, 2025',
      applicationEnd: 'September 20, 2025',
      correctionWindow: 'September 25-27, 2025',
      admitCardDate: 'November 5, 2025',
      examDates: 'November 30, 2025',
      resultDate: 'December 21, 2025',
      scorecardValidity: 'December 31, 2026',
      lastUpdated: '2026-01-10',
      lastVerified: '2026-01-10'
    },
    admissionSummary: {
      topInstitutes: ['21 IIMs, FMS, SPJIMR, MDI, IITs'],
      selectionStages: ['CAT Scorecard -> WAT/PI Shortlist -> Final Offer'],
      weightageOverview: 'Official CAP and individual IIM selection criteria applied.'
    },
    historicalCutoffs: [
      { category: '99.5+ Percentile', percentileScore: 'Score: ~84 / 198', remarks: 'IIM A, B, C interviews' },
      { category: '95+ Percentile', percentileScore: 'Score: ~56 / 198', remarks: 'New IIMs & Top Tier-1' }
    ]
  },

  'CAT-2024': {
    id: 'CAT',
    version: 'CAT-2024',
    name: 'CAT 2024',
    fullName: 'Common Admission Test 2024',
    fullNameHindi: 'कॉमन एडमिशन टेस्ट 2024',
    conductingBody: 'Indian Institute of Management Calcutta',
    conductingBodyHindi: 'आईआईएम कलकत्ता',
    examLevel: 'National Level',
    frequency: 'Once a year',
    mode: 'Computer Based Test (3 Slots)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://iimcat.ac.in',
      notification: 'https://iimcat.ac.in',
      registration: 'https://iimcat.ac.in',
      syllabus: 'https://iimcat.ac.in',
      admitCard: 'https://iimcat.ac.in',
      result: 'https://iimcat.ac.in',
      scorecard: 'https://iimcat.ac.in',
      admission: 'https://iimcat.ac.in',
      lastVerified: '2025-01-15'
    },
    eligibility: {
      qualification: "Graduation with 50% marks (45% for SC/ST/PwD)",
      minimumMarks: '50% General, 45% Reserved',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard IIM eligibility criteria maintained.'],
      criteriaListHindi: ['मानक पात्रता मानदंड लागू रहे।']
    },
    pattern: {
      totalQuestions: 66,
      totalDurationMinutes: 120,
      totalMarks: '198 Marks',
      markingScheme: '+3 / -1 for MCQ, 0 for TITA',
      negativeMarkingRule: '-1 for wrong MCQ; No negative marking for TITA',
      negativeMarkingRuleHindi: 'MCQ में गलत उत्तर पर -1; TITA में कोई कटौती नहीं।',
      sections: [
        { name: 'VARC', nameHindi: 'VARC', questions: 24, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: '16 RC + 8 VA', description: '4 passages' },
        { name: 'DILR', nameHindi: 'DILR', questions: 20, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: '4 sets x 5 questions', description: 'Analytical sets' },
        { name: 'QA', nameHindi: 'QA', questions: 22, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 1, isSectionalTimed: true, questionType: 'Arithmetic, Algebra, etc.', description: 'Quant problems' }
      ]
    },
    importantDates: {
      notificationDate: 'July 28, 2024',
      applicationStart: 'August 1, 2024',
      applicationEnd: 'September 20, 2024',
      correctionWindow: 'September 27-30, 2024',
      admitCardDate: 'November 5, 2024',
      examDates: 'November 24, 2024',
      resultDate: 'December 19, 2024',
      scorecardValidity: 'December 31, 2025',
      lastUpdated: '2025-01-10',
      lastVerified: '2025-01-10'
    },
    admissionSummary: {
      topInstitutes: ['21 IIMs, FMS, SPJIMR, MDI, IITs'],
      selectionStages: ['CAT Exam -> WAT/PI Calls -> Composite Score Merit List'],
      weightageOverview: 'Official CAP criteria applied.'
    },
    historicalCutoffs: [
      { category: '99+ Percentile', percentileScore: 'Score: ~78 / 198', remarks: 'IIM A, B, C, L, FMS' }
    ]
  }
};
