import { ExamInfo } from '../../types';

export const xatVersions: Record<string, ExamInfo> = {
  'XAT-2026': {
    id: 'XAT',
    version: 'XAT-2026',
    name: 'XAT 2026',
    fullName: 'Xavier Aptitude Test 2026',
    fullNameHindi: 'जेवियर एप्टीट्यूड टेस्ट 2026 (ज़ैट)',
    conductingBody: 'XLRI Jamshedpur on behalf of XAMI (Xavier Association of Management Institutes)',
    conductingBodyHindi: 'एक्सएलआरआई जमशेदपुर (XAMI की ओर से)',
    examLevel: 'National Level Management Entrance Examination',
    frequency: 'Once a year (First Sunday of January)',
    mode: 'Computer Based Test (Single afternoon session across India)',
    status: 'UPCOMING',
    officialLinks: {
      officialWebsite: 'https://xatonline.in',
      notification: 'https://xatonline.in',
      registration: 'https://xatonline.in',
      syllabus: 'https://xatonline.in',
      admitCard: 'https://xatonline.in',
      result: 'https://xatonline.in',
      scorecard: 'https://xatonline.in',
      admission: 'https://xatonline.in',
      lastVerified: '2026-09-20',
    },
    eligibility: {
      qualification: 'Recognized Bachelor’s degree of minimum three years duration or equivalent in any discipline',
      minimumMarks: 'Pass in Graduation (no strict 50% cutoff for general appearing; university passing rules apply)',
      finalYearEligible: true,
      ageLimit: 'No age limit',
      workExRequired: 'Not mandatory; relevant professional experience valued in XLRI interviews',
      criteriaList: [
        'Recognized Bachelor’s degree of minimum three years duration or equivalent in any discipline.',
        'Candidates completing their final examination by June 10 of the admission year may also apply.',
        'No restriction on the number of attempts or upper age limit.',
        'NRI and foreign candidates can also apply through GMAT / GRE scores within stipulated deadlines.'
      ],
      criteriaListHindi: [
        'किसी भी विषय में न्यूनतम तीन वर्ष की स्नातक डिग्री या समकक्ष योग्यता।',
        'प्रवेश वर्ष के जून तक अपनी अंतिम परीक्षा पूरी करने वाले उम्मीदवार भी आवेदन कर सकते हैं।',
        'प्रयासों की संख्या या अधिकतम आयु सीमा पर कोई प्रतिबंध नहीं है।'
      ]
    },
    pattern: {
      totalQuestions: 95,
      totalDurationMinutes: 210,
      totalMarks: 'Part 1: 75 Marks + Part 2 (Mock Keyboard 5m) + Part 3: GK (25 Q, 25 Marks) & Essay',
      markingScheme: '+1 for correct in Part 1; -0.25 for incorrect; -0.10 for >8 unattempted questions; No negative marking in GK',
      negativeMarkingRule: '-0.25 for wrong answer. A penalty of -0.10 marks per question is deducted for more than 8 consecutive unattempted questions in Part 1. GK has NO negative marking.',
      negativeMarkingRuleHindi: 'गलत उत्तर पर -0.25 अंक। भाग 1 में 8 से अधिक लगातार अनुत्तरित प्रश्नों पर -0.10 अंक प्रति प्रश्न की कटौती होती है। GK में कोई नकारात्मक अंकन नहीं है।',
      sections: [
        {
          name: 'Verbal Ability & Logical Reasoning (VALR)',
          nameHindi: 'मौखिक क्षमता और तार्किक तर्क (VALR)',
          questions: 26,
          durationMinutes: 170, // Shared in Part 1
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'Reading Comprehension, Critical Reasoning, Poem Comprehension, Vocabulary, Analogy',
          description: 'Part of 170-minute Part 1 pool. Candidate can distribute time across VALR, DM, and QA-DI.'
        },
        {
          name: 'Decision Making (DM)',
          nameHindi: 'निर्णय लेना (Decision Making - DM)',
          questions: 21,
          durationMinutes: 170,
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'Ethical dilemmas, Business management caselets, HR disputes, Stakeholder prioritization',
          description: 'The defining and unique section of XAT. Tests nuanced managerial judgment.'
        },
        {
          name: 'Quantitative Aptitude & Data Interpretation (QA-DI)',
          nameHindi: 'मात्रात्मक योग्यता और डेटा व्याख्या (QA-DI)',
          questions: 28,
          durationMinutes: 170,
          marksPerQuestion: 1,
          negativeMarks: 0.25,
          isSectionalTimed: false,
          questionType: 'High-level Quant problems, Tables, Caselets, Graphs, Advanced Geometry & Algebra',
          description: 'Comprehensive evaluation of mathematical rigour and multi-step data interpretation.'
        },
        {
          name: 'General Knowledge (GK) & Essay',
          nameHindi: 'सामान्य ज्ञान (GK) और निबंध',
          questions: 25,
          durationMinutes: 35,
          marksPerQuestion: 1,
          negativeMarks: 0,
          isSectionalTimed: true,
          questionType: '25 GK MCQs (Current Affairs + Static GK) + 1 Analytical Essay prompt',
          description: 'Part 3 (30-35 mins). GK marks are not counted towards XAT percentile for XLRI shortlist, but reviewed during PI.'
        }
      ]
    },
    importantDates: {
      notificationDate: 'Second week of July 2026',
      applicationStart: 'Third week of July 2026',
      applicationEnd: 'Last week of November 2026',
      correctionWindow: 'First week of December 2026',
      admitCardDate: 'Third week of December 2026',
      examDates: 'First Sunday of January 2027 (2:00 PM to 5:30 PM)',
      resultDate: 'Third week of January 2027',
      scorecardValidity: 'Valid for 1 year (Academic Session 2027-2029)',
      lastUpdated: '2026-09-25',
      lastVerified: '2026-09-25'
    },
    admissionSummary: {
      topInstitutes: [
        'XLRI Jamshedpur (BM & HRM)', 'XLRI Delhi-NCR',
        'XIM University (XIMB) Bhubaneswar', 'IMT Ghaziabad',
        'TAPMI Manipal', 'GIM Goa', 'FORE School of Management New Delhi',
        'IRMA Anand', 'MICA Ahmedabad', 'K J Somaiya Institute of Management'
      ],
      selectionStages: [
        'Stage 1: XAT Sectional & Overall Percentile Shortlist (BM & HRM have distinct sectional cutoffs)',
        'Stage 2: Group Discussion (GD) / Personal Interview (PI) + Essay Evaluation',
        'Stage 3: Final Selection based on XAT Score, Interview, Academic Background, Work Experience, and Essay'
      ],
      weightageOverview: 'XLRI gives strong emphasis to Decision Making sectional score and PI communication clarity.'
    },
    historicalCutoffs: [
      { category: 'XLRI BM (Business Management)', percentileScore: 'Overall: 96+ %ile (VALR: 75+, DM: 75+, QA: 85+)', remarks: 'Calls for male engineers; slight relaxations for non-engineers/female candidates' },
      { category: 'XLRI HRM (Human Resource Management)', percentileScore: 'Overall: 93-95+ %ile (VALR: 80+, DM: 75+, QA: 75+)', remarks: 'High weightage on VALR and Decision Making' },
      { category: 'XIMB Bhubaneswar', percentileScore: 'Overall: 90-92+ %ile', remarks: 'Domaiciled Odisha candidates have separate criteria' },
      { category: 'IMT Ghaziabad / GIM Goa / TAPMI', percentileScore: 'Overall: 85-90 %ile', remarks: 'Good profile-based shortlists available' }
    ]
  },

  'XAT-2025': {
    id: 'XAT',
    version: 'XAT-2025',
    name: 'XAT 2025',
    fullName: 'Xavier Aptitude Test 2025',
    fullNameHindi: 'जेवियर एप्टीट्यूड टेस्ट 2025',
    conductingBody: 'XLRI Jamshedpur',
    conductingBodyHindi: 'एक्सएलआरआई जमशेदपुर',
    examLevel: 'National Level',
    frequency: 'Once a year',
    mode: 'CBT (Single Slot)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://xatonline.in',
      notification: 'https://xatonline.in',
      registration: 'https://xatonline.in',
      syllabus: 'https://xatonline.in',
      admitCard: 'https://xatonline.in',
      result: 'https://xatonline.in',
      scorecard: 'https://xatonline.in',
      admission: 'https://xatonline.in',
      lastVerified: '2025-02-01'
    },
    eligibility: {
      qualification: "Bachelor's degree in any discipline",
      minimumMarks: 'Pass marks',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard XLRI eligibility fulfilled.'],
      criteriaListHindi: ['मानक पात्रता मानदंड लागू।']
    },
    pattern: {
      totalQuestions: 95,
      totalDurationMinutes: 210,
      totalMarks: '75 Marks (Part 1) + 25 Marks GK (Part 2) + Essay',
      markingScheme: '+1 / -0.25; -0.10 for >8 unattempted; 0 in GK',
      negativeMarkingRule: '-0.25 in Part 1; -0.10 for >8 unattempted; GK no negative',
      negativeMarkingRuleHindi: '-0.25 भाग 1 में; >8 अनुत्तरित पर -0.10; GK में शून्य नकारात्मक।',
      sections: [
        { name: 'VALR', nameHindi: 'VALR', questions: 26, durationMinutes: 170, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Verbal & LR', description: 'Part 1' },
        { name: 'Decision Making', nameHindi: 'Decision Making', questions: 21, durationMinutes: 170, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Caselets', description: 'Part 1' },
        { name: 'QA & DI', nameHindi: 'QA & DI', questions: 28, durationMinutes: 170, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Quant & DI', description: 'Part 1' },
        { name: 'GK & Essay', nameHindi: 'GK & Essay', questions: 25, durationMinutes: 35, marksPerQuestion: 1, negativeMarks: 0, isSectionalTimed: true, questionType: '25 GK + 1 Essay', description: 'Part 2' }
      ]
    },
    importantDates: {
      notificationDate: 'July 15, 2024',
      applicationStart: 'July 15, 2024',
      applicationEnd: 'December 10, 2024',
      correctionWindow: 'December 15, 2024',
      admitCardDate: 'December 20, 2024',
      examDates: 'January 5, 2025',
      resultDate: 'January 19, 2025',
      scorecardValidity: 'March 31, 2026',
      lastUpdated: '2025-02-01',
      lastVerified: '2025-02-01'
    },
    admissionSummary: {
      topInstitutes: ['XLRI, XIMB, IMT, GIM, TAPMI'],
      selectionStages: ['XAT Score -> GD/PI -> Final Offer'],
      weightageOverview: 'Applied XLRI 2025 admission policy.'
    },
    historicalCutoffs: [
      { category: 'XLRI BM Male Engineer', percentileScore: '96.0%ile (VALR 75, DM 75, QA 86)', remarks: 'BM Program' },
      { category: 'XLRI HRM Male Engineer', percentileScore: '95.0%ile (VALR 80, DM 75, QA 75)', remarks: 'HRM Program' }
    ]
  },

  'XAT-2024': {
    id: 'XAT',
    version: 'XAT-2024',
    name: 'XAT 2024',
    fullName: 'Xavier Aptitude Test 2024',
    fullNameHindi: 'जेवियर एप्टीट्यूड टेस्ट 2024',
    conductingBody: 'XLRI Jamshedpur',
    conductingBodyHindi: 'एक्सएलआरआई जमशेदपुर',
    examLevel: 'National Level',
    frequency: 'Once a year',
    mode: 'CBT (Single Slot)',
    status: 'COMPLETED',
    officialLinks: {
      officialWebsite: 'https://xatonline.in',
      notification: 'https://xatonline.in',
      registration: 'https://xatonline.in',
      syllabus: 'https://xatonline.in',
      admitCard: 'https://xatonline.in',
      result: 'https://xatonline.in',
      scorecard: 'https://xatonline.in',
      admission: 'https://xatonline.in',
      lastVerified: '2024-02-01'
    },
    eligibility: {
      qualification: "Bachelor's degree in any discipline",
      minimumMarks: 'Pass marks',
      finalYearEligible: true,
      ageLimit: 'None',
      workExRequired: 'None',
      criteriaList: ['Standard XLRI eligibility fulfilled.'],
      criteriaListHindi: ['मानक पात्रता मानदंड लागू।']
    },
    pattern: {
      totalQuestions: 95,
      totalDurationMinutes: 210,
      totalMarks: '75 Marks + GK + Essay',
      markingScheme: '+1 / -0.25; -0.10 for >8 unattempted',
      negativeMarkingRule: '-0.25 in Part 1; -0.10 for >8 unattempted',
      negativeMarkingRuleHindi: '-0.25 भाग 1 में; >8 अनुत्तरित पर -0.10',
      sections: [
        { name: 'VALR', nameHindi: 'VALR', questions: 26, durationMinutes: 175, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Verbal & LR', description: 'Part 1' },
        { name: 'Decision Making', nameHindi: 'Decision Making', questions: 22, durationMinutes: 175, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Caselets', description: 'Part 1' },
        { name: 'QA & DI', nameHindi: 'QA & DI', questions: 28, durationMinutes: 175, marksPerQuestion: 1, negativeMarks: 0.25, isSectionalTimed: false, questionType: 'Quant & DI', description: 'Part 1' },
        { name: 'GK & Essay', nameHindi: 'GK & Essay', questions: 25, durationMinutes: 30, marksPerQuestion: 1, negativeMarks: 0, isSectionalTimed: true, questionType: 'GK & Essay', description: 'Part 2' }
      ]
    },
    importantDates: {
      notificationDate: 'July 15, 2023',
      applicationStart: 'July 15, 2023',
      applicationEnd: 'December 10, 2023',
      correctionWindow: 'December 15, 2023',
      admitCardDate: 'December 20, 2023',
      examDates: 'January 7, 2024',
      resultDate: 'January 20, 2024',
      scorecardValidity: 'March 31, 2025',
      lastUpdated: '2024-02-01',
      lastVerified: '2024-02-01'
    },
    admissionSummary: {
      topInstitutes: ['XLRI, XIMB, IMT, GIM, TAPMI'],
      selectionStages: ['XAT Score -> GD/PI -> Final Offer'],
      weightageOverview: 'Applied XLRI 2024 admission policy.'
    },
    historicalCutoffs: [
      { category: 'XLRI BM Male Engineer', percentileScore: '95+ %ile', remarks: 'Cutoff 2024' }
    ]
  }
};
