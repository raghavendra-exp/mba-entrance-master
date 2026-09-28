export interface NotificationItem {
  id: string;
  exam: 'CAT' | 'XAT' | 'SNAP' | 'NMAT';
  title: string;
  titleHindi: string;
  stage: 
    | 'Notification' 
    | 'Registration' 
    | 'Correction' 
    | 'Admit Card' 
    | 'Exam' 
    | 'Answer Key' 
    | 'Result' 
    | 'Scorecard' 
    | 'Interview' 
    | 'Admission';
  date: string;
  status: 'ACTIVE' | 'UPCOMING' | 'CLOSED';
  officialUrl: string;
  summary: string;
  summaryHindi: string;
}

export const notificationsData: NotificationItem[] = [
  {
    id: 'notif-cat-2026-reg',
    exam: 'CAT',
    title: 'CAT 2026 Official Information Bulletin Released by IIMs',
    titleHindi: 'आईआईएम द्वारा कैट 2026 आधिकारिक सूचना बुलेटिन जारी',
    stage: 'Notification',
    date: '2026-07-28',
    status: 'ACTIVE',
    officialUrl: 'https://iimcat.ac.in',
    summary: 'The convening IIM has published the comprehensive CAT 2026 bulletin detailing 170 test cities, eligibility clauses, and online registration schedules commencing August 2026.',
    summaryHindi: 'कैट 2026 का आधिकारिक विवरण पत्र जारी किया गया है जिसमें 170 परीक्षा शहरों, पात्रता और अगस्त 2026 से शुरू होने वाले पंजीकरण का विवरण है।'
  },
  {
    id: 'notif-xat-2026-app',
    exam: 'XAT',
    title: 'XAT 2026 Registration Portal Opened at xatonline.in',
    titleHindi: 'xatonline.in पर ज़ैट 2026 पंजीकरण पोर्टल खुला',
    stage: 'Registration',
    date: '2026-07-15',
    status: 'ACTIVE',
    officialUrl: 'https://xatonline.in',
    summary: 'XLRI Jamshedpur opened online applications for XAT 2026 for admission to BM & HRM programs at XLRI and over 160 participating institutes across India.',
    summaryHindi: 'एक्सएलआरआई जमशेदपुर ने एक्सएलआरआई और भारत के 160 से अधिक संस्थानों में प्रवेश के लिए ज़ैट 2026 के ऑनलाइन आवेदन शुरू किए।'
  },
  {
    id: 'notif-snap-2026-announcement',
    exam: 'SNAP',
    title: 'SNAP 2026 Test Dates Announced for 3 December Slots',
    titleHindi: 'दिसंबर के 3 स्लॉट के लिए स्नैप 2026 परीक्षा तिथियां घोषित',
    stage: 'Notification',
    date: '2026-08-05',
    status: 'ACTIVE',
    officialUrl: 'https://www.snaptest.org',
    summary: 'Symbiosis International (Deemed University) announced the calendar for SNAP 2026 across 84 cities. Candidates can opt for up to 3 test attempts in December.',
    summaryHindi: 'सिम्बायोसिस इंटरनेशनल यूनिवर्सिटी ने 84 शहरों में स्नैप 2026 का शेड्यूल जारी किया। छात्र अधिकतम 3 बार परीक्षा दे सकते हैं।'
  },
  {
    id: 'notif-nmat-2026-scheduling',
    exam: 'NMAT',
    title: 'NMAT 2026 Registration & Exam Scheduling Commences via mba.com',
    titleHindi: 'mba.com पर एनमैट 2026 पंजीकरण और स्लॉट बुकिंग शुरू',
    stage: 'Registration',
    date: '2026-08-01',
    status: 'ACTIVE',
    officialUrl: 'https://www.mba.com/exams/nmat',
    summary: 'GMAC opened the window for NMAT 2026. Aspirants can book exam dates and center slots across the October-December testing window with immediate slot confirmation.',
    summaryHindi: 'जीमैट ने एनमैट 2026 के लिए रजिस्ट्रेशन खोला। छात्र अक्टूबर से दिसंबर के बीच परीक्षा तिथि और केंद्र चुन सकते हैं।'
  }
];
