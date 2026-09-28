export interface AdmissionRoute {
  exam: string;
  targetInstitutes: string;
  stages: {
    stageNumber: number;
    title: string;
    titleHindi: string;
    description: string;
    descriptionHindi: string;
    keyTips: string[];
  }[];
  selectionFormula: string;
  selectionFormulaHindi: string;
  officialSourceNotice: string;
}

export const admissionGuides: Record<string, AdmissionRoute> = {
  CAT: {
    exam: 'CAT (Common Admission Test)',
    targetInstitutes: '21 IIMs (Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore, Mumbai, etc.) + FMS, SPJIMR, MDI, IITs',
    stages: [
      {
        stageNumber: 1,
        title: 'Sectional & Overall CAT Percentile Shortlisting',
        titleHindi: 'अनुभागीय और समग्र कैट पर्सेंटाइल शॉर्टलिस्टिंग',
        description: 'Every IIM specifies both sectional cutoffs (typically 70-85%ile depending on category and institute) and overall cutoff. For older IIMs (BLACKI), effective call cutoffs range between 98.5%ile to 99.8%ile depending on academic profile and gender diversity points.',
        descriptionHindi: 'प्रत्येक आईआईएम अनुभागीय कटऑफ और समग्र कटऑफ दोनों निर्दिष्ट करता है। पुराने आईआईएम के लिए प्रभावी कॉल कटऑफ अकादमिक प्रोफाइल के आधार पर 98.5 से 99.8 पर्सेंटाइल के बीच होती है।',
        keyTips: ['Ensure no section is neglected: a 99.8%ile overall with 68%ile in Quant will disqualify you from almost all premier IIMs.']
      },
      {
        stageNumber: 2,
        title: 'Analytical Writing Test (AWT) / Writing Ability Test (WAT)',
        titleHindi: 'राइटिंग एबिलिटी टेस्ट (WAT)',
        description: 'Candidates are provided a 15 to 30 minute writing prompt on socio-economic dilemmas, abstract statements, or current corporate issues. Evaluates structure, clarity of logic, nuance, and grammatical coherence.',
        descriptionHindi: 'उम्मीदवारों को सामाजिक-आर्थिक दुविधाओं या समकालीन मुद्दों पर 15 से 30 मिनट का निबंध लिखने को दिया जाता है।',
        keyTips: ['Use the PESTLE framework (Political, Economic, Social, Technological, Legal, Environmental) for multi-dimensional perspectives.']
      },
      {
        stageNumber: 3,
        title: 'Personal Interview (PI)',
        titleHindi: 'व्यक्तिगत साक्षात्कार (PI)',
        description: 'Conducted by a panel of 2 to 3 professors and industry alumni. Assesses graduation academics, work experience depth, business awareness, managerial ethics, and mental resilience under pressure.',
        descriptionHindi: 'प्रोफेसरों और पूर्व छात्रों के पैनल द्वारा आयोजित। यह स्नातक विषयों, कार्य अनुभव और व्यापार जागरूकता का परीक्षण करता है।',
        keyTips: ['Master your undergraduate project and 2-3 core subjects. Be completely honest about knowledge gaps without guessing.']
      },
      {
        stageNumber: 4,
        title: 'Common Admission Process (CAP) for New & Baby IIMs',
        titleHindi: 'न्यू और बेबी आईआईएम के लिए कॉमन एडमिशन प्रोसेस (CAP)',
        description: 'New and Baby IIMs (such as IIM Kashipur, Raipur, Ranchi, Trichy, Udaipur, Bodh Gaya, Jammu, Sambalpur, Sirmaur) conduct a centralized single WAT-PI round coordinated on rotation by one of the participating IIMs.',
        descriptionHindi: 'नए और बेबी आईआईएम एक केंद्रीकृत एकल WAT-PI दौर आयोजित करते हैं जिसे CAP कहा जाता है।',
        keyTips: ['A single high-scoring CAP interview unlocks multiple admission offers simultaneously.']
      }
    ],
    selectionFormula: 'Composite Score = (CAT Score * 0.30 to 0.50) + (PI * 0.30 to 0.40) + (WAT * 0.10) + (Class 10th/12th/Grad * 0.10 to 0.15) + (Work Experience * 0.05 to 0.10) + (Diversity Points: 0.05)',
    selectionFormulaHindi: 'कंपोजिट स्कोर = कैट स्कोर (30-50%) + पीआई (30-40%) + वाट (10%) + अकादमिक अंक (10-15%) + कार्य अनुभव (5-10%) + विविधता अंक (5%)',
    officialSourceNotice: 'Each IIM publishes its definitive admission policy on its respective official website. Always check the official institute portal for the current year.'
  },
  XAT: {
    exam: 'XAT (Xavier Aptitude Test)',
    targetInstitutes: 'XLRI Jamshedpur (BM & HRM), XLRI Delhi-NCR, XIMB Bhubaneswar, IMT Ghaziabad, TAPMI, GIM, FORE',
    stages: [
      {
        stageNumber: 1,
        title: 'Sectional Shortlisting for BM & HRM Programs',
        titleHindi: 'बीएम और एचआरएम कार्यक्रमों के लिए अनुभागीय शॉर्टलिस्टिंग',
        description: 'XLRI releases distinct cutoffs for Business Management (BM) and Human Resource Management (HRM). BM has a higher Quant cutoff (85+ %ile) while HRM places equal or higher weight on VALR and Decision Making. Decision Making sectional score is non-negotiable.',
        descriptionHindi: 'एक्सएलआरआई बीएम और एचआरएम के लिए अलग कटऑफ जारी करता है। बीएम में क्वांट कटऑफ अधिक होता है जबकि एचआरएम में वीएएलआर और डिसीजन मेकिंग पर जोर होता है।',
        keyTips: ['Scoring above the 75th percentile in Decision Making is essential for an XLRI interview call.']
      },
      {
        stageNumber: 2,
        title: 'Essay Evaluation & Group Discussion / Personal Interview',
        titleHindi: 'निबंध मूल्यांकन और साक्षात्कार (GD-PI)',
        description: 'Your XAT analytical essay written during the exam is thoroughly scrutinized by the interview panel. The interview focuses heavily on ethics, case resolution, and practical managerial decision scenarios.',
        descriptionHindi: 'परीक्षा के दौरान लिखा गया आपका विश्लेषणात्मक निबंध साक्षात्कार पैनल द्वारा गहराई से जांचा जाता है।',
        keyTips: ['Maintain absolute ethical consistency between your XAT Decision Making reasoning and your spoken answers during PI.']
      }
    ],
    selectionFormula: 'Final Selection = XAT Score (~50%) + Personal Interview & Essay (~40%) + Academic Records & Work Experience (~10%)',
    selectionFormulaHindi: 'अंतिम चयन = ज़ैट स्कोर (~50%) + साक्षात्कार एवं निबंध (~40%) + अकादमिक रिकॉर्ड एवं कार्य अनुभव (~10%)',
    officialSourceNotice: 'Refer to xatonline.in and xlri.ac.in for verified cutoff announcements and selection schedules.'
  },
  SNAP: {
    exam: 'SNAP (Symbiosis National Aptitude Test)',
    targetInstitutes: '16 Symbiosis Institutes including SIBM Pune, SCMHRD Pune, SIIB Pune, SIBM Bangalore, SIOM Nashik',
    stages: [
      {
        stageNumber: 1,
        title: 'SNAP Percentile Shortlist by Individual SIU Institutes',
        titleHindi: 'एसआईयू संस्थानों द्वारा व्यक्तिगत स्नैप पर्सेंटाइल शॉर्टलिस्ट',
        description: 'There are NO sectional cutoffs in SNAP! Only your overall percentile score is used to shortlist candidates for individual institutes you applied to.',
        descriptionHindi: 'स्नैप में कोई अनुभागीय कटऑफ नहीं है! केवल आपका समग्र पर्सेंटाइल स्कोर ही शॉर्टलिस्टिंग के लिए उपयोग किया जाता है।',
        keyTips: ['For SIBM Pune, aim for 98.5+ %ile (42+ marks); for SCMHRD, aim for 97+ %ile.']
      },
      {
        stageNumber: 2,
        title: 'GE-PIWAT (Group Exercise, Personal Interaction & Writing Ability Test)',
        titleHindi: 'GE-PIWAT प्रक्रिया',
        description: 'Conducted in Pune / hybrid. The Group Exercise (GE) involves collaborative case solving or role plays. The Personal Interaction (PI) is intensive and values-oriented.',
        descriptionHindi: 'समूह अभ्यास (GE) में सहयोगी केस समाधान या रोल प्ले शामिल हैं। व्यक्तिगत बातचीत (PI) गहन होती है।',
        keyTips: ['Demonstrate collaborative leadership in Group Exercise; avoid dominating without letting peers speak.']
      }
    ],
    selectionFormula: 'Final Composite Score = SNAP Score (scaled to 50 marks, 50% weight) + Group Exercise (10 marks, 10% weight) + Personal Interaction (30 marks, 30% weight) + WAT (10 marks, 10% weight) = 100 Marks',
    selectionFormulaHindi: 'अंतिम कंपोजिट स्कोर = स्नैप स्कोर (50%) + ग्रुप एक्सरसाइज (10%) + पर्सनल इंटरेक्शन (30%) + वाट (10%) = 100 अंक',
    officialSourceNotice: 'Check snaptest.org and individual institute websites (sibm.edu, scmhrd.edu) for verified admission updates.'
  },
  NMAT: {
    exam: 'NMAT by GMAC',
    targetInstitutes: 'NMIMS School of Business Management (Mumbai, Bengaluru, Hyderabad, Navi Mumbai, Indore), K J Somaiya, XIM University, SDA Bocconi',
    stages: [
      {
        stageNumber: 1,
        title: 'Scaled Score Shortlisting with Sectional Minimums',
        titleHindi: 'अनुभागीय न्यूनतम अंकों के साथ स्केल्ड स्कोर शॉर्टलिस्टिंग',
        description: 'NMIMS Mumbai requires qualifying in BOTH overall scaled score (typically 232+ out of 360) and sectional minimums across Language, Quant, and LR. CRITICAL RULE: NMIMS Mumbai ONLY accepts the candidate’s first attempt score!',
        descriptionHindi: 'एनएमआईएमएस मुंबई को समग्र स्कोर (232+) और अनुभागीय न्यूनतम दोनों में उत्तीर्ण होना आवश्यक है। महत्वपूर्ण नियम: एनएमआईएमएस मुंबई केवल पहले प्रयास के स्कोर को स्वीकार करता है!',
        keyTips: ['Treat your very first attempt as your final attempt for NMIMS Mumbai flagship MBA.']
      },
      {
        stageNumber: 2,
        title: 'Competency-based Discussion (CD), Watson Glaser Test & Personal Interview (PI)',
        titleHindi: 'योग्यता-आधारित चर्चा (CD) और व्यक्तिगत साक्षात्कार (PI)',
        description: 'Candidates appear for the Watson Glaser Critical Thinking appraisal, followed by Competency-based discussion on business scenarios and Personal Interview.',
        descriptionHindi: 'उम्मीदवार वाटसन ग्लेज़र क्रिटिकल थिंकिंग टेस्ट, योग्यता-आधारित चर्चा और व्यक्तिगत साक्षात्कार में उपस्थित होते हैं।',
        keyTips: ['Practice critical thinking deduction and premise-conclusion logic tests.']
      }
    ],
    selectionFormula: 'Composite Selection = NMAT Scaled Score + CD/PI Score + Watson Glaser Critical Thinking Score + Academic Profile + Work Experience',
    selectionFormulaHindi: 'कंपोजिट चयन = एनमैट स्केल्ड स्कोर + सीडी/पीआई स्कोर + वाटसन ग्लेज़र टेस्ट + अकादमिक प्रोफाइल + कार्य अनुभव',
    officialSourceNotice: 'Verify admission criteria on mba.com/exams/nmat and sbm.nmims.edu.'
  }
};
