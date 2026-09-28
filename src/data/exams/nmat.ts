import { ExamInfo } from '../../types';

export const nmatVersions: Record<string, ExamInfo> = {
  'NMAT-2026': {
    id: 'NMAT',
    version: 'NMAT-2026',
    name: 'NMAT by GMAC 2026',
    fullName: 'NMAT by GMAC 2026 (Graduate Management Admission Council)',
    fullNameHindi: 'एनमैट बाय जीमैट 2026 (NMAT by GMAC)',
    conductingBody: 'Graduate Management Admission Council (GMAC)',
    conductingBodyHindi: 'ग्रेजुएट मैनेजमेंट एडमिशन काउंसिल (जीमैट)',
    examLevel: 'National & International MBA Assessment Test',
    frequency: 'Long testing window from October to December (up to 3 attempts with 15-day gap)',
    mode: 'Computer Delivered Adaptive Testing at test centers or securely proctored Online at Home',
    status: 'UPCOMING',
    officialLinks: {
      officialWebsite: 'https://www.mba.com/exams/nmat',
      notification: 'https://www.mba.com/exams/nmat',
      registration: 'https://www.mba.com/exams/nmat',
      syllabus: 'https://www.mba.com/exams/nmat',
      admitCard: 'https://www.mba.com/exams/nmat',
      result: 'https://www.mba.com/exams/nmat',
      scorecard: 'https://www.mba.com/exams/nmat',
      admission: 'https://www.mba.com/exams/nmat',
      lastVerified: '2026-09-20',
    },
    eligibility: {
      qualification: 'Bachelor’s degree (10+2+3/4) in any discipline from a recognized University with minimum 50% marks in aggregate',
      minimumMarks: '50% marks in aggregate in Bachelor’s degree (specific programs may require 50% in first attempt)',
      finalYearEligible: true,
      ageLimit: 'No age limit',
      workExRequired: 'Not required, but 2+ years of relevant industry experience receives credit at NMIMS',
      criteriaList: [
        'Bachelor’s Degree in any discipline from a recognized University with at least 50% marks in aggregate.',
        'Candidates in the final year of the bachelor’s degree can apply, provided their passing degree certificate is submitted by the admission cut-off date.',
        'Candidates are allowed a maximum of three attempts in an exam testing cycle (1 Main Exam + 2 Retakes), with a mandatory 15-day gap between subsequent attempts.',
        'Candidate can select the preferred order of sections at the beginning of the test.'
      ],
      criteriaListHindi: [
        'मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में न्यूनतम 50% कुल अंकों के साथ स्नातक डिग्री।',
        'स्नातक अंतिम वर्ष के छात्र भी आवेदन करने के पात्र हैं।',
        'उम्मीदवार एक परीक्षण चक्र में अधिकतम 3 प्रयासों (1 मुख्य परीक्षा + 2 रीटेक) की अनुमति रखते हैं (प्रयासों के बीच 15 दिन का अनिवार्य अंतर)।',
        'उम्मीदवार परीक्षा की शुरुआत में अनुभागों (Sections) का अपना पसंदीदा क्रम चुन सकते हैं।'
      ]
    },
    pattern: {
      totalQuestions: 108,
      totalDurationMinutes: 120,
      totalMarks: 'Scaled Score: 36 to 360 (12 to 120 per section)',
      markingScheme: 'Scaled computer-adaptive scoring. NO NEGATIVE MARKING for incorrect answers.',
      negativeMarkingRule: 'NO NEGATIVE MARKING! Candidates should attempt all questions. Questions must be submitted before moving to the next question (cannot return to previous question once submitted in adaptive mode).',
      negativeMarkingRuleHindi: 'कोई नकारात्मक अंकन नहीं! उम्मीदवार को सभी प्रश्नों का प्रयास करना चाहिए। कंप्यूटर अनुकूली (Adaptive) परीक्षण में एक बार आगे बढ़ने के बाद पिछले प्रश्न पर वापस नहीं लौटा जा सकता।',
      sections: [
        {
          name: 'Language Skills',
          nameHindi: 'भाषा कौशल (Language Skills)',
          questions: 36,
          durationMinutes: 28,
          marksPerQuestion: 3, // Scaled score 12-120
          negativeMarks: 0,
          isSectionalTimed: true,
          questionType: 'Reading Comprehension passages, Para Forming, Error Identification, Prepositions & Fill in the Blanks, Word Meanings',
          description: '28 minutes for 36 questions (~46 seconds per question). Speed and grammatical precision are vital.'
        },
        {
          name: 'Quantitative Skills',
          nameHindi: 'मात्रात्मक कौशल (Quantitative Skills)',
          questions: 36,
          durationMinutes: 52,
          marksPerQuestion: 3, // Scaled score 12-120
          negativeMarks: 0,
          isSectionalTimed: true,
          questionType: 'Arithmetic, Modern Math, Number Properties, Algebra, Geometry, Data Interpretation (Tables, Graphs, Caselets), Data Sufficiency',
          description: '52 minutes for 36 questions (~86 seconds per question). Strong emphasis on DI sets and speed calculations.'
        },
        {
          name: 'Logical Reasoning',
          nameHindi: 'तार्किक तर्क (Logical Reasoning)',
          questions: 36,
          durationMinutes: 40,
          marksPerQuestion: 3, // Scaled score 12-120
          negativeMarks: 0,
          isSectionalTimed: true,
          questionType: 'Critical Reasoning (Statement-Assumption, Course of Action, Strong/Weak Arguments, Cause-Effect) + Analytical Puzzles, Syllogisms',
          description: '40 minutes for 36 questions (~66 seconds per question). Equal mix of verbal critical reasoning and analytical puzzles.'
        }
      ]
    },
    importantDates: {
      notificationDate: 'First week of August 2026',
      applicationStart: 'First week of August 2026',
      applicationEnd: 'Second week of October 2026',
      correctionWindow: 'Third week of October 2026',
      admitCardDate: 'Immediately upon exam scheduling via mba.com dashboard',
      examDates: 'Exam Delivery Window: Mid October 2026 to Mid December 2026',
      resultDate: 'Unofficial score visible immediately after test; Official Scaled Scorecard within 48 hours',
      scorecardValidity: 'Valid for Academic Year 2027-2028',
      lastUpdated: '2026-09-25',
      lastVerified: '2026-09-25'
    },
    admissionSummary: {
      topInstitutes: [
        'NMIMS School of Business Management Mumbai (MBA & MBA HR)',
        'NMIMS Bengaluru, Hyderabad, Navi Mumbai, Indore',
        'K J Somaiya Institute of Management Mumbai',
        'XIM University Bhubaneswar (School of Human Resource Management)',
        'SDA Bocconi Asia Center Mumbai',
        'TAPMI Manipal (for selected programs)',
        'SPJIMR Mumbai (for Global Management Program)',
        'SOIL Institute of Management Gurgaon'
      ],
      selectionStages: [
        'Stage 1: NMAT Scaled Score Shortlisting (NMIMS requires qualifying in both overall score and individual sectional cutoffs; only first attempt score accepted by NMIMS Mumbai)',
        'Stage 2: NMIMS CD-PI (Competency-based Discussion & Personal Interview) + Watson Glaser Critical Thinking Test',
        'Stage 3: Final Composite Merit List'
      ],
      weightageOverview: 'NMIMS Mumbai strictly considers only the candidate’s first attempt score for flagship MBA program calls.'
    },
    historicalCutoffs: [
      { category: 'NMIMS Mumbai (MBA Flagship)', percentileScore: 'Scaled Score: 232-235+ / 360 (LS: 74+, QS: 70+, LR: 72+)', remarks: 'Premier campus; individual sectional cutoffs mandatory' },
      { category: 'NMIMS Mumbai (MBA HR)', percentileScore: 'Scaled Score: 224-228+ / 360', remarks: 'High focus on Language & Reasoning sectional scores' },
      { category: 'NMIMS Bengaluru / Hyderabad', percentileScore: 'Scaled Score: 220-224+ / 360', remarks: 'Good ROI and specialized executive focus' },
      { category: 'K J Somaiya Mumbai', percentileScore: 'Scaled Score: 222-225+ / 360', remarks: 'Accepted along with CAT/XAT' },
      { category: 'XIM University (HRM)', percentileScore: 'Scaled Score: 215-220+ / 360', remarks: 'Leading HR specialization' }
    ]
  },

  'NMAT-2025': {
    id: 'NMAT',
    version: 'NMAT-2025',
    name: 'NMAT by GMAC 2025',
    fullName: 'NMAT by GMAC 2025',
    fullNameHindi: 'एनमैट बाय जीमैट 2025',
    conductingBody: 'Graduate Management Admission Council (GMAC)',
    conductingBodyHindi: 'जीमैट (GMAC)',
    examLevel: 'National Level',
    frequency: 'Testing window (Oct - Dec)',
    mode: 'Computer Adaptive Test (120 mins, 108 Qs)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://www.mba.com/exams/nmat',
      notification: 'https://www.mba.com/exams/nmat',
      registration: 'https://www.mba.com/exams/nmat',
      syllabus: 'https://www.mba.com/exams/nmat',
      admitCard: 'https://www.mba.com/exams/nmat',
      result: 'https://www.mba.com/exams/nmat',
      scorecard: 'https://www.mba.com/exams/nmat',
      admission: 'https://www.mba.com/exams/nmat',
      lastVerified: '2026-01-10'
    },
    eligibility: {
      qualification: "Bachelor's degree with 50% aggregate",
      minimumMarks: '50% aggregate',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard GMAC rules applied.'],
      criteriaListHindi: ['मानक पात्रता लागू।']
    },
    pattern: {
      totalQuestions: 108,
      totalDurationMinutes: 120,
      totalMarks: '36-360 Scaled',
      markingScheme: 'Adaptive, No Negative Marking',
      negativeMarkingRule: 'No negative marking',
      negativeMarkingRuleHindi: 'कोई नकारात्मक अंकन नहीं',
      sections: [
        { name: 'Language Skills', nameHindi: 'Language Skills', questions: 36, durationMinutes: 28, marksPerQuestion: 3, negativeMarks: 0, isSectionalTimed: true, questionType: 'Verbal', description: '28m' },
        { name: 'Quantitative Skills', nameHindi: 'Quantitative Skills', questions: 36, durationMinutes: 52, marksPerQuestion: 3, negativeMarks: 0, isSectionalTimed: true, questionType: 'Quant & DI', description: '52m' },
        { name: 'Logical Reasoning', nameHindi: 'Logical Reasoning', questions: 36, durationMinutes: 40, marksPerQuestion: 3, negativeMarks: 0, isSectionalTimed: true, questionType: 'LR & CR', description: '40m' }
      ]
    },
    importantDates: {
      notificationDate: 'August 1, 2025',
      applicationStart: 'August 1, 2025',
      applicationEnd: 'October 10, 2025',
      correctionWindow: 'October 12-14, 2025',
      admitCardDate: 'Immediately upon booking',
      examDates: 'October 15 to December 20, 2025',
      resultDate: 'Immediate unofficial; 48hr official',
      scorecardValidity: 'Valid for 2026 admissions',
      lastUpdated: '2026-01-10',
      lastVerified: '2026-01-10'
    },
    admissionSummary: {
      topInstitutes: ['NMIMS Mumbai, K J Somaiya, XIMB HRM, SDA Bocconi'],
      selectionStages: ['NMAT Scorecard -> CD-PI -> Final Merit'],
      weightageOverview: 'Only 1st attempt considered by NMIMS Mumbai.'
    },
    historicalCutoffs: [
      { category: 'NMIMS Mumbai Flagship', percentileScore: 'Score: 232+ (LS 74, QS 70, LR 71)', remarks: 'Cutoff 2025' }
    ]
  }
};
