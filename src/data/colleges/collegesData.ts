import { CollegeInfo } from '../../types';

export const collegesData: CollegeInfo[] = [
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad',
    shortName: 'IIM Ahmedabad',
    program: 'Post Graduate Programme in Management (PGP) / PGP-FABM',
    examsAccepted: ['CAT'],
    location: { city: 'Ahmedabad', state: 'Gujarat' },
    type: 'Public / Government',
    officialWebsite: 'https://www.iima.ac.in',
    admissionPortal: 'https://www.iima.ac.in/academics/pgp/admissions',
    fees: '₹ 25.00 Lakhs (Approx for 2 years)',
    seats: '400+ Seats',
    accreditation: 'EQUIS, AACSB Accredited; NIRF Rank #1 Management',
    nirfRank: 1,
    placements: {
      averageCTC: '₹ 34.36 LPA',
      medianCTC: '₹ 31.50 LPA',
      highestCTC: '₹ 1.15 CPA (Domestic) / $140,000+ (Intl)',
      year: '2024-2025',
      topRecruiters: ['McKinsey & Company', 'Boston Consulting Group', 'Bain & Co', 'Goldman Sachs', 'Tata Sons', 'Adani Group']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: '80%ile Minimum Eligibility / Effective Call Cutoff: 99.5+ %ile', sectionalCutoffs: '70%ile minimum in each section' }
    ],
    selectionCriteria: {
      catXatWeightage: '65% (AWR/CAT shortlisting) / 25% (Final selection)',
      watPiWeightage: '50% (PI: 40%, AWT: 10%)',
      academicWeightage: 'Application Rating (10th: 10%, 12th: 10%, Grad: 10%)',
      workExperienceWeightage: 'Up to 10 points based on duration and role relevance',
      genderDiversityWeightage: 'Integrated via Academic Discipline Category (AC-1 to AC-6 rating normalization)'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'iim-bangalore',
    name: 'Indian Institute of Management Bangalore',
    shortName: 'IIM Bangalore',
    program: 'Post Graduate Programme in Management (PGP) / PGP-BA',
    examsAccepted: ['CAT'],
    location: { city: 'Bengaluru', state: 'Karnataka' },
    type: 'Public / Government',
    officialWebsite: 'https://www.iimb.ac.in',
    admissionPortal: 'https://www.iimb.ac.in/pgp-admission-process',
    fees: '₹ 24.50 Lakhs (Approx for 2 years)',
    seats: '520+ Seats (including PGP-BA)',
    accreditation: 'EQUIS Accredited; NIRF Rank #2 Management',
    nirfRank: 2,
    placements: {
      averageCTC: '₹ 35.31 LPA',
      medianCTC: '₹ 32.50 LPA',
      highestCTC: '₹ 1.20 CPA',
      year: '2024-2025',
      topRecruiters: ['Oliver Wyman', 'Strategy&', 'Accenture Strategy', 'J.P. Morgan', 'Microsoft', 'Amazon']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: '85%ile Minimum / Effective Call: 99.4+ %ile', sectionalCutoffs: 'VARC: 80, DILR: 75, QA: 75' }
    ],
    selectionCriteria: {
      catXatWeightage: '55% in pre-PI / 25% in final selection',
      watPiWeightage: 'Personal Interview 40% + WAT 10%',
      academicWeightage: 'High academic emphasis (10th: 10%, 12th: 10%, Grad: 10%)',
      workExperienceWeightage: '10% in pre-PI and final criteria',
      genderDiversityWeightage: '5% gender diversity score'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'iim-calcutta',
    name: 'Indian Institute of Management Calcutta',
    shortName: 'IIM Calcutta',
    program: 'Master of Business Administration (MBA)',
    examsAccepted: ['CAT'],
    location: { city: 'Kolkata', state: 'West Bengal' },
    type: 'Public / Government',
    officialWebsite: 'https://www.iimcal.ac.in',
    admissionPortal: 'https://www.iimcal.ac.in/programs/mba/admission',
    fees: '₹ 27.00 Lakhs (Approx for 2 years)',
    seats: '460+ Seats',
    accreditation: 'Triple Crown (AACSB, AMBA, EQUIS); NIRF Rank #3 Management',
    nirfRank: 3,
    placements: {
      averageCTC: '₹ 35.07 LPA',
      medianCTC: '₹ 33.67 LPA',
      highestCTC: '₹ 1.20 CPA',
      year: '2024-2025',
      topRecruiters: ['Avendus Capital', 'Morgan Stanley', 'Barclays', 'Bain & Co', 'EY-Parthenon', 'HUL']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: '85%ile Minimum / Effective: 99.6+ %ile', sectionalCutoffs: 'VARC: 80, DILR: 80, QA: 75' }
    ],
    selectionCriteria: {
      catXatWeightage: '56% (Pre-PI) / 30% (Final selection)',
      watPiWeightage: 'Personal Interview 48% + WAT 8%',
      academicWeightage: '10th & 12th Marks (Graduation marks not evaluated post-2022 policy update)',
      workExperienceWeightage: '8% in final stage',
      genderDiversityWeightage: '4 points for female/transgender candidates in pre-PI'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'xlri-jamshedpur',
    name: 'XLRI Xavier School of Management Jamshedpur',
    shortName: 'XLRI Jamshedpur',
    program: 'PGDM (Business Management) & PGDM (Human Resource Management)',
    examsAccepted: ['XAT'],
    location: { city: 'Jamshedpur', state: 'Jharkhand' },
    type: 'Private',
    officialWebsite: 'https://www.xlri.ac.in',
    admissionPortal: 'https://www.xatonline.in',
    fees: '₹ 26.50 Lakhs (Approx for 2 years)',
    seats: '360 Seats (180 BM + 180 HRM) + 120 (Delhi-NCR)',
    accreditation: 'AACSB, AMBA Accredited; Premier Private B-School in India',
    nirfRank: 9,
    placements: {
      averageCTC: '₹ 32.70 LPA',
      medianCTC: '₹ 30.00 LPA',
      highestCTC: '₹ 75.00 LPA',
      year: '2024-2025',
      topRecruiters: ['ITC', 'Procter & Gamble', 'TAS', 'Bain & Company', 'Standard Chartered', 'Marico']
    },
    cutoffs: [
      { exam: 'XAT', generalPercentile: 'BM: 96+ %ile (VALR: 75+, DM: 75+, QA: 85+) | HRM: 93-95+ %ile (VALR: 80+, DM: 75+, QA: 75+)' }
    ],
    selectionCriteria: {
      catXatWeightage: 'XAT Percentile ~50% weight in PI shortlisting',
      watPiWeightage: 'Personal Interview + GD/Essay evaluation ~40-50%',
      academicWeightage: 'Past academic records evaluated holistically',
      workExperienceWeightage: 'Considered during interview assessment',
      genderDiversityWeightage: 'Gender diversity reflected in balanced cutoffs'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'fms-delhi',
    name: 'Faculty of Management Studies, University of Delhi',
    shortName: 'FMS Delhi',
    program: 'Master of Business Administration (Full Time)',
    examsAccepted: ['CAT'],
    location: { city: 'New Delhi', state: 'Delhi' },
    type: 'University Department',
    officialWebsite: 'https://www.fms.edu',
    admissionPortal: 'https://www.fms.edu/admissions',
    fees: '₹ 2.00 Lakhs (Approx for 2 years — Highest ROI in India)',
    seats: '251 + Supernumerary Seats',
    accreditation: 'University of Delhi; Top Tier-1 Institute',
    nirfRank: 35,
    placements: {
      averageCTC: '₹ 34.10 LPA',
      medianCTC: '₹ 31.00 LPA',
      highestCTC: '₹ 1.23 CPA',
      year: '2024-2025',
      topRecruiters: ['Amazon', 'Google', 'HUL', 'Bain & Co', 'Boston Consulting Group', 'Microsoft', 'TAS']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: 'Overall Composite Cutoff: 99.4+ %ile', sectionalCutoffs: 'VARC: 40% weight, QA: 30% weight, DILR: 30% weight in CAT calculation' }
    ],
    selectionCriteria: {
      catXatWeightage: '50% (CAT score computed with heavy VARC weightage)',
      watPiWeightage: 'Personal Interview 30% + Extempore 5%',
      academicWeightage: 'Class 10th (10%) + Class 12th (10%)',
      workExperienceWeightage: 'Not formally weighted in score formula',
      genderDiversityWeightage: '5 extra marks for women candidates in composite score'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'sibm-pune',
    name: 'Symbiosis Institute of Business Management Pune',
    shortName: 'SIBM Pune',
    program: 'MBA (Flagship) & MBA (Innovation & Entrepreneurship)',
    examsAccepted: ['SNAP'],
    location: { city: 'Pune', state: 'Maharashtra' },
    type: 'Private',
    officialWebsite: 'https://www.sibm.edu',
    admissionPortal: 'https://www.snaptest.org',
    fees: '₹ 24.20 Lakhs (Approx for 2 years)',
    seats: '180 + 30 (I&E) Seats',
    accreditation: 'NAAC A++ Accredited SIU; NIRF Rank #17',
    nirfRank: 17,
    placements: {
      averageCTC: '₹ 28.16 LPA',
      medianCTC: '₹ 26.00 LPA',
      highestCTC: '₹ 49.00 LPA',
      year: '2024-2025',
      topRecruiters: ['Accenture', 'Barclays', 'Cipla', 'Godrej', 'ITC', 'Nestle', 'PwC']
    },
    cutoffs: [
      { exam: 'SNAP', generalPercentile: '98.5+ %ile (Scaled score ~42+ out of 60)', sectionalCutoffs: 'No sectional cutoff in SNAP' }
    ],
    selectionCriteria: {
      catXatWeightage: '50% SNAP Percentile Score',
      watPiWeightage: 'Personal Interaction (PI) 30% + Group Exercise (GE) 10% + WAT 10%',
      academicWeightage: 'Academic background reviewed during PI',
      workExperienceWeightage: 'Evaluated during Personal Interaction',
      genderDiversityWeightage: 'SIU institutional norms'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'scmhrd-pune',
    name: 'Symbiosis Centre for Management & Human Resource Development',
    shortName: 'SCMHRD Pune',
    program: 'MBA (HR, Marketing, Finance, Ops), MBA (Business Analytics), MBA (Infrastructure)',
    examsAccepted: ['SNAP'],
    location: { city: 'Pune', state: 'Maharashtra' },
    type: 'Private',
    officialWebsite: 'https://www.scmhrd.edu',
    admissionPortal: 'https://www.snaptest.org',
    fees: '₹ 23.80 Lakhs (Approx for 2 years)',
    seats: '180 (Core) + 90 (BA) + 60 (IDM) Seats',
    accreditation: 'AACSB Member; NAAC A++ (SIU)',
    nirfRank: 20,
    placements: {
      averageCTC: '₹ 23.71 LPA',
      medianCTC: '₹ 22.00 LPA',
      highestCTC: '₹ 38.00 LPA',
      year: '2024-2025',
      topRecruiters: ['Colgate-Palmolive', 'DE Shaw', 'Reliance', 'Optum', 'Flipkart', 'Deloitte']
    },
    cutoffs: [
      { exam: 'SNAP', generalPercentile: '97+ %ile (Score ~39.5-41 / 60)', sectionalCutoffs: 'No sectional cutoffs' }
    ],
    selectionCriteria: {
      catXatWeightage: '50% SNAP Score',
      watPiWeightage: 'GE-PIWAT 50% (PI: 30%, GE: 10%, WAT: 10%)',
      academicWeightage: 'Profile evaluated in PI',
      workExperienceWeightage: 'Special consideration in Infrastructure & Analytics programs',
      genderDiversityWeightage: 'Standard SIU policy'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'nmims-mumbai',
    name: 'NMIMS School of Business Management Mumbai',
    shortName: 'NMIMS Mumbai',
    program: 'MBA (Core) & MBA (Human Resources)',
    examsAccepted: ['NMAT'],
    location: { city: 'Mumbai', state: 'Maharashtra' },
    type: 'Private',
    officialWebsite: 'https://sbm.nmims.edu',
    admissionPortal: 'https://www.nmims.edu/admissions',
    fees: '₹ 24.00 Lakhs (Approx for 2 years)',
    seats: '600 (MBA Core) + 120 (MBA HR) Seats',
    accreditation: 'AACSB Accredited; NIRF Rank #21',
    nirfRank: 21,
    placements: {
      averageCTC: '₹ 26.63 LPA',
      medianCTC: '₹ 24.50 LPA',
      highestCTC: '₹ 67.80 LPA',
      year: '2024-2025',
      topRecruiters: ['Goldman Sachs', 'Credit Suisse', 'ITC', 'L’Oreal', 'KPMG', 'Whirlpool']
    },
    cutoffs: [
      { exam: 'NMAT', generalPercentile: 'Scaled Score: 232+ / 360 (Only 1st Attempt considered for Mumbai)', sectionalCutoffs: 'Language Skills: 74+, Quantitative Skills: 70+, Logical Reasoning: 72+' }
    ],
    selectionCriteria: {
      catXatWeightage: 'NMAT by GMAC Scaled Score (Pre-stage qualifier)',
      watPiWeightage: 'Competency Discussion & Personal Interview (CD-PI) + Watson Glaser Test',
      academicWeightage: '10th, 12th, and Graduation marks considered in final merit',
      workExperienceWeightage: '2+ years work experience carries formal credit',
      genderDiversityWeightage: 'Diversity factor integrated into CD-PI evaluation'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'spjimr-mumbai',
    name: 'S.P. Jain Institute of Management and Research',
    shortName: 'SPJIMR Mumbai',
    program: 'PGDM (Finance, Information Management, Marketing, Operations)',
    examsAccepted: ['CAT', 'XAT'],
    location: { city: 'Mumbai', state: 'Maharashtra' },
    type: 'Private',
    officialWebsite: 'https://www.spjimr.org',
    admissionPortal: 'https://www.spjimr.org/pgdm/admissions',
    fees: '₹ 22.50 Lakhs (Approx for 2 years)',
    seats: '360 Seats',
    accreditation: 'AACSB, AMBA Accredited; Financial Times Global Top 40',
    nirfRank: 16,
    placements: {
      averageCTC: '₹ 33.00 LPA',
      medianCTC: '₹ 31.50 LPA',
      highestCTC: '₹ 81.00 LPA',
      year: '2024-2025',
      topRecruiters: ['Boston Consulting Group', 'Hindustan Unilever', 'Tata Administrative Services', 'GEP', 'Nomura']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: 'Profile-based call: 85+ %ile | Score-based call: 96-98+ %ile', sectionalCutoffs: '75%ile minimum in each section' },
      { exam: 'XAT', generalPercentile: 'Profile-based call: 85+ %ile | Score-based: 95+ %ile', sectionalCutoffs: '75%ile minimum in each section' }
    ],
    selectionCriteria: {
      catXatWeightage: 'Pre-interview qualifier',
      watPiWeightage: 'Two Rounds of Personal Interviews (PI-1 & PI-2) evaluating values and ethics',
      academicWeightage: 'Extensive profile evaluation (Consistent academic excellence 10th/12th/Grad)',
      workExperienceWeightage: 'Specialization-relevant professional accomplishments',
      genderDiversityWeightage: 'Strong emphasis on holistic diversity and social contribution'
    },
    lastVerified: '2026-09-20'
  },
  {
    id: 'mdi-gurgaon',
    name: 'Management Development Institute Gurgaon',
    shortName: 'MDI Gurgaon',
    program: 'PGDM, PGDM-HRM, PGDM-International Business',
    examsAccepted: ['CAT'],
    location: { city: 'Gurugram', state: 'Haryana' },
    type: 'Private',
    officialWebsite: 'https://www.mdi.ac.in',
    admissionPortal: 'https://www.mdi.ac.in/admission',
    fees: '₹ 25.00 Lakhs (Approx for 2 years)',
    seats: '420+ Seats',
    accreditation: 'AMBA, AACSB Accredited; NIRF Rank #11',
    nirfRank: 11,
    placements: {
      averageCTC: '₹ 27.67 LPA',
      medianCTC: '₹ 26.13 LPA',
      highestCTC: '₹ 63.30 LPA',
      year: '2024-2025',
      topRecruiters: ['Deloitte', 'PwC', 'JPMorgan Chase', 'Google', 'Johnson & Johnson', 'Maruti Suzuki']
    },
    cutoffs: [
      { exam: 'CAT', generalPercentile: '94-96+ %ile with sectional balance', sectionalCutoffs: 'Balanced performance required across all 3 sections' }
    ],
    selectionCriteria: {
      catXatWeightage: 'CAT Percentile ~50% weight',
      watPiWeightage: 'Personal Interview 30% + WAT 10%',
      academicWeightage: '10th, 12th, and Graduation marks (10%)',
      workExperienceWeightage: 'Structured work experience marks (up to 10%)',
      genderDiversityWeightage: 'Diversity credit awarded in pre-interview stage'
    },
    lastVerified: '2026-09-20'
  }
];
