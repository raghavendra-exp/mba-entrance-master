export interface ExamComparisonRow {
  feature: string;
  featureHindi: string;
  cat: string;
  xat: string;
  snap: string;
  nmat: string;
}

export const examComparisonData: ExamComparisonRow[] = [
  {
    feature: 'Conducting Body',
    featureHindi: 'आयोजक संस्था',
    cat: 'Rotational Indian Institute of Management (IIMs)',
    xat: 'XLRI Jamshedpur on behalf of XAMI',
    snap: 'Symbiosis International (Deemed University) - SIU',
    nmat: 'Graduate Management Admission Council (GMAC)'
  },
  {
    feature: 'Exam Level',
    featureHindi: 'परीक्षा का स्तर',
    cat: 'National Level (Premier IIMs & 100+ Top B-Schools)',
    xat: 'National Level (XLRI & 160+ Associate B-Schools)',
    snap: 'University / National Level (16 Symbiosis Institutes)',
    nmat: 'National & Global Level (NMIMS & 40+ Partner B-Schools)'
  },
  {
    feature: 'Sections',
    featureHindi: 'अनुभाग (Sections)',
    cat: '3 Sections:\n1. VARC (24 Q)\n2. DILR (20 Q)\n3. QA (22 Q)',
    xat: 'Part 1: VALR (26 Q), DM (21 Q), QA-DI (28 Q)\nPart 2: Mock Keyboard (5m)\nPart 3: GK (25 Q) & Essay',
    snap: '3 Sections:\n1. General English (15 Q)\n2. A&LR (25 Q)\n3. QA, DI & DS (20 Q)',
    nmat: '3 Sections:\n1. Language Skills (36 Q)\n2. Quantitative Skills (36 Q)\n3. Logical Reasoning (36 Q)'
  },
  {
    feature: 'Duration',
    featureHindi: 'समय अवधि',
    cat: '120 Minutes (40 mins strictly per section)',
    xat: '210 Minutes (170 mins for Part 1 + 5 mins keyboard + 35 mins GK & Essay)',
    snap: '60 Minutes total (Speed test; NO sectional time limits)',
    nmat: '120 Minutes (Language: 28m, Quant: 52m, LR: 40m - sectional timers)'
  },
  {
    feature: 'Total Questions',
    featureHindi: 'कुल प्रश्न',
    cat: '66 Questions',
    xat: '95 Questions + 1 Essay prompt',
    snap: '60 Questions',
    nmat: '108 Questions'
  },
  {
    feature: 'Marking Scheme',
    featureHindi: 'अंकन योजना',
    cat: '+3 marks for correct MCQ/TITA',
    xat: '+1 mark for correct in Part 1; GK 1 mark each',
    snap: '+1 mark for correct answer',
    nmat: 'Scaled Score: 36 to 360 (12 to 120 per section)'
  },
  {
    feature: 'Negative Marking',
    featureHindi: 'नकारात्मक अंकन',
    cat: '-1 mark for incorrect MCQ; 0 for Non-MCQ TITA',
    xat: '-0.25 mark for incorrect; -0.10 for >8 unattempted; 0 in GK',
    snap: '-0.25 mark (25% deduction) for incorrect answers',
    nmat: 'NO NEGATIVE MARKING (Candidates should attempt all)'
  },
  {
    feature: 'Permitted Attempts',
    featureHindi: 'अनुमत प्रयास',
    cat: 'Once per academic year',
    xat: 'Once per academic year',
    snap: 'Up to 3 attempts in December window (Best percentile used)',
    nmat: 'Up to 3 attempts (1 Main + 2 Retakes with 15-day gap)'
  },
  {
    feature: 'Section Switching',
    featureHindi: 'अनुभाग परिवर्तन',
    cat: 'NO (Locked sequential 40-minute sections)',
    xat: 'YES within Part 1 (candidate can freely switch between VALR, DM, QA-DI)',
    snap: 'YES (Candidate can freely switch anytime during 60 minutes)',
    nmat: 'Candidate chooses section order before start; locked during section'
  },
  {
    feature: 'Exam Delivery Mode',
    featureHindi: 'परीक्षा मोड',
    cat: 'Computer Based Test (3 Slots on Sunday)',
    xat: 'Computer Based Test (Single afternoon slot)',
    snap: 'Computer Based Test (Spread across 3 dates in Dec)',
    nmat: 'Computer Delivered Adaptive Test (70+ day window)'
  },
  {
    feature: 'Flagship Admission Route',
    featureHindi: 'प्रमुख प्रवेश संस्थान',
    cat: '21 IIMs, FMS Delhi, SPJIMR, MDI, IIT DoMS, JBIMS',
    xat: 'XLRI Jamshedpur (BM & HRM), XLRI Delhi-NCR, XIMB, IMT',
    snap: 'SIBM Pune, SCMHRD Pune, SIIB, SIBM Bangalore',
    nmat: 'NMIMS Mumbai, K J Somaiya, XIM University, SDA Bocconi'
  },
  {
    feature: 'Official Website',
    featureHindi: 'आधिकारिक वेबसाइट',
    cat: 'https://iimcat.ac.in',
    xat: 'https://xatonline.in',
    snap: 'https://www.snaptest.org',
    nmat: 'https://www.mba.com/exams/nmat'
  }
];
