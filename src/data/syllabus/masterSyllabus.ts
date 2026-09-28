import { SyllabusSubject } from '../../types';

export const masterSyllabus: SyllabusSubject[] = [
  {
    id: 'QA',
    name: 'Quantitative Aptitude (QA)',
    nameHindi: 'मात्रात्मक योग्यता (QA)',
    exams: ['CAT', 'XAT', 'SNAP', 'NMAT'],
    overview: 'Core mathematical foundation testing numerical agility, algebraic manipulation, geometric intuition, and statistical problem-solving.',
    overviewHindi: 'संख्यात्मक चपलता, बीजगणितीय हेरफेर, ज्यामितीय अंतर्ज्ञान और सांख्यिकीय समस्या समाधान का परीक्षण करने वाला मुख्य गणितीय आधार।',
    chapters: [
      {
        id: 'qa-arithmetic',
        name: 'Arithmetic',
        nameHindi: 'अंकगणित',
        topics: [
          {
            id: 'qa-percentages',
            name: 'Percentages & Fraction Equivalents',
            nameHindi: 'प्रतिशत और भिन्न समतुल्य',
            weightagePercentage: 12,
            estimatedQuestions: '2-3 Q in CAT, 2-3 Q in XAT/SNAP/NMAT',
            conceptNotes: 'Foundation for entire arithmetic. Mastery over fraction-to-percentage conversions (1/2 to 1/20), percentage change multiplier (1 ± x/100), and successive percentage changes using formula: a + b + ab/100.',
            conceptNotesHindi: 'संपूर्ण अंकगणित की नींव। भिन्न-से-प्रतिशत रूपांतरण (1/2 से 1/20), प्रतिशत परिवर्तन गुणक, और क्रमिक प्रतिशत परिवर्तन पर महारत।',
            recommendedBooks: ['Arun Sharma Quant (Ch 1)', 'Nishit K Sinha (Ch 3)', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          },
          {
            id: 'qa-profit-loss',
            name: 'Profit, Loss, Discount & Mark-up',
            nameHindi: 'लाभ, हानि, छूट और अंकित मूल्य',
            weightagePercentage: 10,
            estimatedQuestions: '1-2 Q per exam',
            conceptNotes: 'Cost Price (CP), Selling Price (SP), Marked Price (MP). Margin calculation on CP vs SP. Faulty weights and dishonest dealer formulations: Effective Profit% = [(Claimed - Actual) / Actual] x 100.',
            conceptNotesHindi: 'क्रय मूल्य, विक्रय मूल्य, अंकित मूल्य। बेईमान दुकानदार और दोषपूर्ण बाटों पर आधारित प्रश्न।',
            recommendedBooks: ['Arun Sharma Quant', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          },
          {
            id: 'qa-ratio-proportion',
            name: 'Ratio, Proportion & Variations',
            nameHindi: 'अनुपात, समानुपात और भिन्नता',
            weightagePercentage: 8,
            estimatedQuestions: '1-2 Q per exam',
            conceptNotes: 'Direct and Inverse variations (A ∝ B, A ∝ 1/C). Compounded ratios, partnership profit distribution based on Capital x Time investment.',
            conceptNotesHindi: 'प्रत्यक्ष और व्युत्क्रम अनुपात। साझेदारी में लाभ का वितरण = पूंजी x समय।',
            recommendedBooks: ['Arun Sharma Quant', 'Nishit K Sinha'],
            hasPYQs: true
          },
          {
            id: 'qa-averages-mixtures',
            name: 'Averages, Alligations & Mixtures',
            nameHindi: 'औसत, सम्मिश्रण और मिश्रण',
            weightagePercentage: 10,
            estimatedQuestions: '2 Q per exam',
            conceptNotes: 'Weighted Average = (w1*x1 + w2*x2) / (w1 + w2). Alligation cross-rule. Repeated dilution formula: Final Concentration = Initial * (1 - x/V)^n.',
            conceptNotesHindi: 'भारित औसत, मिश्रण का क्रॉस-रूल और बार-बार प्रतिस्थापन सूत्र।',
            recommendedBooks: ['Sarvesh Verma Quantum CAT', 'Arun Sharma Quant'],
            hasPYQs: true
          },
          {
            id: 'qa-time-work',
            name: 'Time, Work, Pipes & Cisterns',
            nameHindi: 'समय, कार्य, पाइप और टंकी',
            weightagePercentage: 10,
            estimatedQuestions: '1-2 Q in CAT, 2 Q in SNAP/NMAT',
            conceptNotes: 'LCM approach to total work units. Men-Days-Hours equivalence (M1*D1*H1*E1 / W1 = M2*D2*H2*E2 / W2). Negative work done by emptying pipes.',
            conceptNotesHindi: 'कुल कार्य का LCM तरीका। कार्य क्षमता और एकांतर कार्य के नियम।',
            recommendedBooks: ['Arun Sharma Quant', 'Nishit K Sinha'],
            hasPYQs: true
          },
          {
            id: 'qa-tsd',
            name: 'Time, Speed & Distance, Races, Boats & Streams',
            nameHindi: 'समय, चाल और दूरी, दौड़, नाव और धारा',
            weightagePercentage: 12,
            estimatedQuestions: '2-3 Q in CAT, 2 Q in XAT/NMAT',
            conceptNotes: 'Relative speed (same direction: u - v; opposite: u + v). Average speed for equal distance = 2uv/(u+v). Linear & Circular tracks, meeting points, escalators, and head-start calculations.',
            conceptNotesHindi: 'सापेक्ष चाल, वृत्ताकार ट्रैक पर पहली मुलाकात और शुरुआती बिंदु पर मुलाकात के सूत्र।',
            recommendedBooks: ['Sarvesh Verma Quantum CAT', 'Arun Sharma Quant'],
            hasPYQs: true
          },
          {
            id: 'qa-interest',
            name: 'Simple & Compound Interest (SI / CI)',
            nameHindi: 'साधारण और चक्रवृद्धि ब्याज',
            weightagePercentage: 6,
            estimatedQuestions: '1 Q in CAT/XAT, 2 Q in SNAP/NMAT',
            conceptNotes: 'SI = PRT/100. CI = P(1 + r/100)^n - P. Difference between CI and SI for 2 years = P*(r/100)^2; for 3 years = P*(r/100)^2 * (3 + r/100). Equal annual installments.',
            conceptNotesHindi: 'साधारण और चक्रवृद्धि ब्याज, 2 और 3 वर्षों के अंतर के सूत्र और समान किस्तें।',
            recommendedBooks: ['Nishit K Sinha', 'Arun Sharma Quant'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'qa-algebra',
        name: 'Algebra',
        nameHindi: 'बीजगणित',
        topics: [
          {
            id: 'qa-linear-quadratic',
            name: 'Linear & Quadratic Equations, Polynomials',
            nameHindi: 'रैखिक और द्विघात समीकरण, बहुपद',
            weightagePercentage: 10,
            estimatedQuestions: '2-3 Q in CAT/XAT',
            conceptNotes: 'Roots of quadratic equation: x = (-b ± √(b² - 4ac))/2a. Sum of roots = -b/a, product = c/a. Sign of roots, nature of discriminant (D > 0, D = 0, D < 0). Descartes Rule of Signs.',
            conceptNotesHindi: 'द्विघात समीकरण के मूल, विविक्तकर (Discriminant) और बहुपदों के गुणनखंड प्रमेय।',
            recommendedBooks: ['Arun Sharma Quant', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          },
          {
            id: 'qa-inequalities-modulus',
            name: 'Inequalities, Modulus & Maxima-Minima',
            nameHindi: 'असमानताएं, मापांक और उच्चिष्ठ-निम्निष्ठ',
            weightagePercentage: 8,
            estimatedQuestions: '2 Q in CAT/XAT',
            conceptNotes: 'Wavy Curve method for inequalities. Modulus inequalities (|x - a| < b). AM >= GM >= HM inequality. Quadratic maxima/minima at x = -b/2a.',
            conceptNotesHindi: 'वेवी कर्व विधि, मापांक समीकरण और AM-GM असमानता द्वारा मान ज्ञात करना।',
            recommendedBooks: ['Arun Sharma Quant', 'Nishit K Sinha'],
            hasPYQs: true
          },
          {
            id: 'qa-functions-graphs',
            name: 'Functions, Graphs & Logarithms',
            nameHindi: 'फलन, ग्राफ और लघुगणक',
            weightagePercentage: 8,
            estimatedQuestions: '2 Q in CAT/XAT',
            conceptNotes: 'Composite functions (f(g(x))), inverse functions, even/odd functions. Logarithm properties: log_a(b) = log_c(b)/log_c(a), log(xy) = log x + log y. Graph shifting f(x ± a).',
            conceptNotesHindi: 'संयुक्त फलन, लघुगणक के मूल नियम और फलनों के ग्राफिकल रूपांतरण।',
            recommendedBooks: ['Sarvesh Verma Quantum CAT', 'Arun Sharma Quant'],
            hasPYQs: true
          },
          {
            id: 'qa-progressions',
            name: 'Progressions & Series (AP, GP, HP, AGP)',
            nameHindi: 'श्रेणियां (AP, GP, HP)',
            weightagePercentage: 8,
            estimatedQuestions: '1-2 Q per exam',
            conceptNotes: 'AP nth term = a + (n-1)d, Sum = n/2[2a + (n-1)d]. GP nth term = a*r^(n-1), Infinite GP Sum = a / (1 - r) for |r| < 1. Sum of first n naturals: n(n+1)/2, squares: n(n+1)(2n+1)/6.',
            conceptNotesHindi: 'समानांतर श्रेणी, गुणोत्तर श्रेणी, अनंत गुणोत्तर श्रेणी का योग और विशेष श्रेणियां।',
            recommendedBooks: ['Nishit K Sinha', 'Arun Sharma Quant'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'qa-geometry',
        name: 'Geometry, Mensuration & Coordinate Geometry',
        nameHindi: 'ज्यामिति, क्षेत्रमिति और निर्देशांक ज्यामिति',
        topics: [
          {
            id: 'qa-triangles-circles',
            name: 'Triangles, Circles, Polygons & Quadrilaterals',
            nameHindi: 'त्रिभुज, वृत्त, बहुभुज और चतुर्भुज',
            weightagePercentage: 12,
            estimatedQuestions: '3-4 Q in CAT/XAT, 2 Q in SNAP/NMAT',
            conceptNotes: 'Similarity and Congruence. Apollonius Theorem, Stewart Theorem. Circle theorems: Tangent-Secant theorem, Inscribed angle theorem, Cyclic quadrilaterals (Ptolemy’s theorem). Centers of triangle (Centroid, Orthocenter, Circumcenter, Incenter).',
            conceptNotesHindi: 'त्रिभुजों की समरूपता, अपोलोनियस प्रमेय, वृत्त के स्पर्शरेखा-छेदकरेखा प्रमेय और चक्रीय चतुर्भुज।',
            recommendedBooks: ['Arun Sharma Quant', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          },
          {
            id: 'qa-mensuration',
            name: 'Solid Geometry & Mensuration (3D)',
            nameHindi: 'क्षेत्रमिति (3D ठोस ज्यामिति)',
            weightagePercentage: 6,
            estimatedQuestions: '1-2 Q per exam',
            conceptNotes: 'Surface area and volume of cylinders, cones, spheres, prisms, pyramids, and frustums. Cutting and melting solid models.',
            conceptNotesHindi: 'सिलेंडर, शंकु, गोला, प्रिज्म और छिन्नक (Frustum) के आयतन और पृष्ठीय क्षेत्रफल।',
            recommendedBooks: ['Nishit K Sinha', 'Arun Sharma Quant'],
            hasPYQs: true
          },
          {
            id: 'qa-coordinate',
            name: 'Coordinate Geometry',
            nameHindi: 'निर्देशांक ज्यामिति',
            weightagePercentage: 4,
            estimatedQuestions: '1 Q per exam',
            conceptNotes: 'Distance formula, Section formula, Area of triangle via coordinates, Slope m = (y2 - y1)/(x2 - x1). Perpendicular distance from point to line: |ax1 + by1 + c| / √(a² + b²).',
            conceptNotesHindi: 'बिंदुओं के बीच की दूरी, रेखा का ढाल, लंबवत दूरी और रेखाओं के प्रतिच्छेदन बिंदु।',
            recommendedBooks: ['Arun Sharma Quant'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'qa-numbers',
        name: 'Number System',
        nameHindi: 'संख्या पद्धति',
        topics: [
          {
            id: 'qa-divisibility-factors',
            name: 'Divisibility, Factors, Multiples & Remainders',
            nameHindi: 'विभाज्यता, गुणनखंड, गुणज और शेषफल',
            weightagePercentage: 8,
            estimatedQuestions: '2 Q in CAT/XAT/SNAP',
            conceptNotes: 'Prime factorization N = p^a * q^b * r^c. Number of factors = (a+1)(b+1)(c+1). Sum of factors. Euler Totient Function, Fermat’s Little Theorem, Wilson’s Theorem, Chinese Remainder Theorem.',
            conceptNotesHindi: 'अभाज्य गुणनखंडन, कुल गुणनखंडों की संख्या, शेषफल प्रमेय (Euler, Fermat) और LCM-HCF संबंध।',
            recommendedBooks: ['Sarvesh Verma Quantum CAT', 'Nishit K Sinha'],
            hasPYQs: true
          },
          {
            id: 'qa-units-digits',
            name: 'Unit Digits, Last Two Digits, Base System',
            nameHindi: 'इकाई अंक, अंतिम दो अंक और बेस सिस्टम',
            weightagePercentage: 4,
            estimatedQuestions: '1 Q per exam',
            conceptNotes: 'Cyclicity of numbers (4-cycle rule). Finding last two digits using binomial expansion or mod 100. Converting numbers between binary, octal, decimal, and hexadecimal bases.',
            conceptNotesHindi: 'इकाई अंक की चक्रीयता, अंतिम दो अंक ज्ञात करने की विधियां और संख्या आधार रूपांतरण।',
            recommendedBooks: ['Arun Sharma Quant', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'qa-modern-math',
        name: 'Modern Mathematics',
        nameHindi: 'आधुनिक गणित',
        topics: [
          {
            id: 'qa-pnc',
            name: 'Permutations & Combinations (P&C)',
            nameHindi: 'क्रमचय और संचय (P&C)',
            weightagePercentage: 8,
            estimatedQuestions: '1-2 Q in CAT/XAT, 2-3 Q in SNAP/NMAT',
            conceptNotes: 'Fundamental counting principle. nPr = n!/(n-r)!, nCr = n!/(r!(n-r)!). Arrangements with repetitions. Circular arrangements (n-1)!. Distribution of identical items into distinct groups (Stars and Bars formula: n+r-1 C r-1). Derangements formula.',
            conceptNotesHindi: 'क्रमचय और संचय के आधारभूत नियम, वृत्ताकार व्यवस्था, समान वस्तुओं का वितरण और डिरेंजमेंट।',
            recommendedBooks: ['Sarvesh Verma Quantum CAT', 'Arun Sharma Quant'],
            hasPYQs: true
          },
          {
            id: 'qa-probability',
            name: 'Probability & Expected Value',
            nameHindi: 'प्रायिकता और संभावित मान',
            weightagePercentage: 6,
            estimatedQuestions: '1-2 Q in CAT/XAT/SNAP',
            conceptNotes: 'Classical probability P(E) = n(E)/n(S). Addition rule P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Conditional probability P(A|B) = P(A ∩ B) / P(B). Bayes Theorem. Binomial probability distribution: nCr * p^r * q^(n-r).',
            conceptNotesHindi: 'सप्रतिबंध प्रायिकता (Conditional Probability), बेयेस प्रमेय और द्विपद वितरण।',
            recommendedBooks: ['Arun Sharma Quant', 'Nishit K Sinha'],
            hasPYQs: true
          },
          {
            id: 'qa-set-theory',
            name: 'Set Theory & Venn Diagrams',
            nameHindi: 'समुच्चय सिद्धांत और वेन आरेख',
            weightagePercentage: 6,
            estimatedQuestions: '1 Q in Quant / Core in DILR',
            conceptNotes: 'Two and Three-set Venn diagrams. n(A ∪ B ∪ C) expansion. Maxima and Minima in set overlaps. Disjoint sets and Cartesian products.',
            conceptNotesHindi: 'दो और तीन समुच्चयों के वेन आरेख, उच्चिष्ठ और निम्निष्ठ मान तथा ओवरलैप गणना।',
            recommendedBooks: ['Arun Sharma Quant', 'Sarvesh Verma Quantum CAT'],
            hasPYQs: true
          }
        ]
      }
    ]
  },
  {
    id: 'VARC',
    name: 'Verbal Ability & Reading Comprehension (VARC / Language)',
    nameHindi: 'मौखिक योग्यता और पठन बोध (VARC)',
    exams: ['CAT', 'XAT', 'SNAP', 'NMAT'],
    overview: 'Evaluates critical textual understanding, authorial intent, logical discourse flow, contextual vocabulary, and grammatical precision.',
    overviewHindi: 'गहन पाठ बोध, लेखक के आशय, तार्किक प्रवाह, प्रासंगिक शब्दावली और व्याकरणिक शुद्धता का मूल्यांकन करता है।',
    chapters: [
      {
        id: 'varc-rc',
        name: 'Reading Comprehension (RC)',
        nameHindi: 'पठन बोध (Reading Comprehension)',
        topics: [
          {
            id: 'varc-rc-main-idea',
            name: 'Central Idea & Primary Purpose',
            nameHindi: 'केंद्रीय विचार और मुख्य उद्देश्य',
            weightagePercentage: 35,
            estimatedQuestions: '4-5 Q in CAT (16 RC Qs total), 6-8 Q in XAT',
            conceptNotes: 'Distinguishing the primary thesis from supporting evidence. Filtering out options that are too narrow, too broad, or contradictory.',
            conceptNotesHindi: 'मुख्य थीसिस को सहायक साक्ष्यों से अलग करना। अति-संकीर्ण या अति-विस्तृत विकल्पों को हटाना।',
            recommendedBooks: ['Arun Sharma & Meenakshi Upadhyay VARC', 'Word Power Made Easy'],
            hasPYQs: true
          },
          {
            id: 'varc-rc-inference',
            name: 'Inference & Critical Deductions',
            nameHindi: 'अनुमान और महत्वपूर्ण निष्कर्ष',
            weightagePercentage: 30,
            estimatedQuestions: '6-8 Q in CAT/XAT',
            conceptNotes: 'An inference is an unstated truth that MUST logically follow from the premises. Beware of extreme words (always, never, definitely) not supported by author.',
            conceptNotesHindi: 'अनुमान वह सच है जो सीधे पाठ से तार्किक रूप से निकलता है। अतिवादी शब्दों से सतर्क रहें।',
            recommendedBooks: ['Arun Sharma VARC', 'Nishit K Sinha Verbal'],
            hasPYQs: true
          },
          {
            id: 'varc-rc-tone',
            name: 'Author’s Tone, Attitude & Style',
            nameHindi: 'लेखक का लहजा, दृष्टिकोण और शैली',
            weightagePercentage: 10,
            estimatedQuestions: '2 Q in CAT/XAT',
            conceptNotes: 'Tones: Objective/Informative, Critical/Derisive, Skeptical, Laudatory/Eulogistic, Sarcastic, Contemplative, Analytical, Dogmatic.',
            conceptNotesHindi: 'लहजे के विभिन्न प्रकार: विश्लेषणात्मक, संशयवादी, व्यंग्यात्मक, आलोचनात्मक, निष्पक्ष।',
            recommendedBooks: ['Arun Sharma VARC'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'varc-va',
        name: 'Verbal Ability & Logic',
        nameHindi: 'मौखिक तर्क और संरचना',
        topics: [
          {
            id: 'varc-parajumbles',
            name: 'Para Jumbles (TITA & MCQ)',
            nameHindi: 'पैरा जम्बल्स (वाक्य क्रम व्यवस्था)',
            weightagePercentage: 12,
            estimatedQuestions: '2-3 Q in CAT/XAT/NMAT',
            conceptNotes: 'Identifying mandatory pairs (Noun-Pronoun, Cause-Effect, Acronym expansion, Chronological cues, Transition words like However, Therefore, Furthermore).',
            conceptNotesHindi: 'अनिवार्य जोड़ों (Mandatory pairs), सर्वनाम संदर्भों और संयोजक शब्दों की पहचान।',
            recommendedBooks: ['Arun Sharma VARC', 'Nishit K Sinha Verbal'],
            hasPYQs: true
          },
          {
            id: 'varc-summary',
            name: 'Paragraph Summary',
            nameHindi: 'अनुच्छेद सारांश (Para Summary)',
            weightagePercentage: 10,
            estimatedQuestions: '2 Q in CAT/XAT',
            conceptNotes: 'Capturing all core points of the paragraph without introducing external assumptions or distorting tone.',
            conceptNotesHindi: 'बाहरी मान्यताओं को जोड़े बिना अनुच्छेद के सभी मुख्य बिंदुओं को सटीक रूप से संक्षेप में प्रस्तुत करना।',
            recommendedBooks: ['Arun Sharma VARC'],
            hasPYQs: true
          },
          {
            id: 'varc-odd-sentence',
            name: 'Odd Sentence Out & Para Completion',
            nameHindi: 'असंगत वाक्य और अनुच्छेद पूर्णता',
            weightagePercentage: 8,
            estimatedQuestions: '2 Q in CAT',
            conceptNotes: 'Finding the sentence that diverges in subject matter, scope, or tone from the unified theme formed by remaining sentences.',
            conceptNotesHindi: 'वह वाक्य खोजना जो शेष वाक्यों द्वारा गठित मुख्य विषय से विषयांतर या स्वर में भिन्न हो।',
            recommendedBooks: ['Arun Sharma VARC'],
            hasPYQs: true
          },
          {
            id: 'varc-critical-reasoning',
            name: 'Critical Reasoning (Strengthen / Weaken / Assumptions)',
            nameHindi: 'क्रिटिकल रीजनिंग (कथन-तर्क, पूर्वधारणाएं)',
            weightagePercentage: 15,
            estimatedQuestions: '3-4 Q in XAT/NMAT',
            conceptNotes: 'Premise + Assumption = Conclusion. Identifying unstated assumptions (Negation test). Finding information that breaks or reinforces the logical bridge.',
            conceptNotesHindi: 'आधार वाक्य + पूर्वधारणा = निष्कर्ष। नेगेशन टेस्ट द्वारा पूर्वधारणा की पुष्टि।',
            recommendedBooks: ['Powerscore Critical Reasoning Bible', 'Arun Sharma VARC'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'varc-grammar-vocab',
        name: 'Grammar & Vocabulary (SNAP & NMAT Focus)',
        nameHindi: 'व्याकरण और शब्दावली',
        topics: [
          {
            id: 'varc-vocab-usage',
            name: 'Synonyms, Antonyms, Analogies & Contextual Usage',
            nameHindi: 'समानार्थी, विलोम, सादृश्य और प्रासंगिक उपयोग',
            weightagePercentage: 15,
            estimatedQuestions: '5-8 Q in SNAP/NMAT',
            conceptNotes: 'Etymology and Latin/Greek root words. High-frequency MBA word lists, nuance in connotation, idioms and phrasal verbs.',
            conceptNotesHindi: 'रूट वर्ड्स (शब्द मूल), उच्च-आवृत्ति एमबीए शब्दावली, मुहावरे और लोकोक्तियां।',
            recommendedBooks: ['Word Power Made Easy by Norman Lewis', 'Wren & Martin'],
            hasPYQs: true
          },
          {
            id: 'varc-grammar-errors',
            name: 'Sentence Correction, Error Spotting, Prepositions',
            nameHindi: 'वाक्य सुधार, त्रुटि पहचान, पूर्वसर्ग (Prepositions)',
            weightagePercentage: 12,
            estimatedQuestions: '4-6 Q in SNAP/NMAT',
            conceptNotes: 'Subject-Verb Agreement, Parallelism, Modifier placements (Dangling modifiers), Pronoun ambiguity, Tenses, Preposition usage.',
            conceptNotesHindi: 'कर्ता-क्रिया समझौता, समानांतरता (Parallelism), संशोधक (Modifiers) और काल (Tenses)।',
            recommendedBooks: ['Wren & Martin English Grammar', 'Nishit K Sinha Verbal'],
            hasPYQs: true
          }
        ]
      }
    ]
  },
  {
    id: 'DILR',
    name: 'Data Interpretation & Logical Reasoning (DILR / LRDI)',
    nameHindi: 'डेटा व्याख्या और तार्किक तर्क (DILR)',
    exams: ['CAT', 'XAT', 'SNAP', 'NMAT'],
    overview: 'Multi-dimensional analytic reasoning based on tabular structures, graphical charts, complex puzzle arrangements, distribution grids, and network models.',
    overviewHindi: 'सारणीबद्ध संरचनाओं, ग्राफिकल चार्ट, जटिल पहेली व्यवस्थाओं और नेटवर्क मॉडल पर आधारित बहुआयामी विश्लेषणात्मक तर्क।',
    chapters: [
      {
        id: 'dilr-di',
        name: 'Data Interpretation (DI)',
        nameHindi: 'डेटा व्याख्या (DI)',
        topics: [
          {
            id: 'dilr-tables-charts',
            name: 'Tables, Bar Charts, Line Graphs & Pie Charts',
            nameHindi: 'तालिकाएं, बार चार्ट, लाइन ग्राफ और पाई चार्ट',
            weightagePercentage: 25,
            estimatedQuestions: '1-2 sets in CAT (5-10 Qs), 6-8 Qs in NMAT/SNAP',
            conceptNotes: 'Rapid percentage calculations, ratios of differences, CAGR estimation, multi-chart cross-referencing, missing data tables.',
            conceptNotesHindi: 'त्वरित प्रतिशत गणना, अनुपातों की तुलना, गुम डेटा तालिकाएं और मिश्रित ग्राफ।',
            recommendedBooks: ['Arun Sharma DILR', 'Nishit K Sinha DILR'],
            hasPYQs: true
          },
          {
            id: 'dilr-caselets',
            name: 'Caselets & Unstructured Data',
            nameHindi: 'केसलेट्स और असंरचित डेटा',
            weightagePercentage: 20,
            estimatedQuestions: '1 set in CAT/XAT',
            conceptNotes: 'Transforming qualitative paragraph text into structured matrix or system of linear equations. Identifying bounding constraints.',
            conceptNotesHindi: 'वर्णनात्मक अनुच्छेदों को व्यवस्थित मैट्रिक्स में बदलना और बाधाओं का विश्लेषण।',
            recommendedBooks: ['Arun Sharma DILR'],
            hasPYQs: true
          },
          {
            id: 'dilr-data-sufficiency',
            name: 'Data Sufficiency (DS)',
            nameHindi: 'डेटा पर्याप्तता (Data Sufficiency)',
            weightagePercentage: 15,
            estimatedQuestions: '3-4 Q in NMAT/SNAP/XAT',
            conceptNotes: 'Determining if Statement 1 alone, Statement 2 alone, both together, or neither is sufficient to uniquely answer the question without solving completely.',
            conceptNotesHindi: 'यह निर्धारित करना कि क्या दिए गए कथन प्रश्न का उत्तर देने के लिए पर्याप्त हैं।',
            recommendedBooks: ['Official NMAT Guide', 'Arun Sharma DILR'],
            hasPYQs: true
          }
        ]
      },
      {
        id: 'dilr-lr',
        name: 'Logical Reasoning (LR)',
        nameHindi: 'तार्किक तर्क (LR)',
        topics: [
          {
            id: 'dilr-arrangements',
            name: 'Linear & Circular Seating Arrangements, Matrix Match',
            nameHindi: 'रैखिक और वृत्ताकार बैठने की व्यवस्था, ग्रिड मिलान',
            weightagePercentage: 25,
            estimatedQuestions: '1-2 sets in CAT, 8-10 Q in SNAP/NMAT',
            conceptNotes: 'Left-Right orientation facing center vs outward. 2D/3D attribute grids (Person, City, Car, Profession). Systematic case branching.',
            conceptNotesHindi: 'केंद्र की ओर और बाहर की ओर मुंह करके बैठने की व्यवस्था, बहु-विशेषता ग्रिड और व्यवस्थित केस शाखाएं।',
            recommendedBooks: ['Arun Sharma DILR', 'R.S. Aggarwal Reasoning'],
            hasPYQs: true
          },
          {
            id: 'dilr-games-tournaments',
            name: 'Games & Tournaments, Scheduling & Optimization',
            nameHindi: 'खेल और प्रतियोगिताएं, शेड्यूलिंग',
            weightagePercentage: 20,
            estimatedQuestions: '1 set in CAT (High frequency since 2017)',
            conceptNotes: 'Round-robin tournaments, Knock-out brackets, Points tables, Goal differences, Seedings, Min-Max score optimizations.',
            conceptNotesHindi: 'राउंड-रॉबिन टूर्नामेंट, नॉकआउट मैच, अंक तालिकाएं और न्यूनतम-अधिकतम स्कोर अनुकूलन।',
            recommendedBooks: ['Arun Sharma DILR'],
            hasPYQs: true
          },
          {
            id: 'dilr-binary-logic',
            name: 'Truth-Teller, Liar & Alternator (Binary Logic)',
            nameHindi: 'सत्यवादी, झूठा और परिवर्तक (बाइनरी लॉजिक)',
            weightagePercentage: 10,
            estimatedQuestions: '1 set in CAT/XAT/SNAP',
            conceptNotes: 'Contradiction testing: assuming person A is truth-teller. Identifying mutually contradictory statements to isolate liars.',
            conceptNotesHindi: 'विरोधाभास परीक्षण: परस्पर विरोधी बयानों की पहचान कर सत्य और झूठ को अलग करना।',
            recommendedBooks: ['Arun Sharma DILR'],
            hasPYQs: true
          },
          {
            id: 'dilr-syllogisms-blood',
            name: 'Syllogisms, Blood Relations, Coding & Series (SNAP/NMAT)',
            nameHindi: 'न्याय वाक्य (Syllogisms), रक्त संबंध, कोडिंग और श्रृंखला',
            weightagePercentage: 20,
            estimatedQuestions: '10-15 Q in SNAP/NMAT',
            conceptNotes: 'Venn diagram method for syllogisms (Some, All, No, Some-Not). Family tree generation with standard gender symbols. Alphanumeric series patterns.',
            conceptNotesHindi: 'सिलोगिज़्म के वेन आरेख, पारिवारिक वृक्ष चार्ट और अक्षर-संख्या श्रृंखला के पैटर्न।',
            recommendedBooks: ['R.S. Aggarwal Verbal & Non-Verbal Reasoning', 'SNAP Guide'],
            hasPYQs: true
          }
        ]
      }
    ]
  },
  {
    id: 'DM',
    name: 'Decision Making (XAT Exclusive)',
    nameHindi: 'निर्णय लेना (XAT विशेष)',
    exams: ['XAT'],
    overview: 'The hallmark section of XAT evaluating holistic managerial judgment, ethical integrity, organizational diplomacy, stakeholder balance, and quantitative business feasibility.',
    overviewHindi: 'XAT का विशिष्ट खंड जो समग्र प्रबंधकीय निर्णय, नैतिक सत्यनिष्ठा, संगठनात्मक कूटनीति, हितधारक संतुलन और व्यावहारिक व्यावसायिक व्यवहार्यता का मूल्यांकन करता है।',
    chapters: [
      {
        id: 'dm-frameworks',
        name: 'Ethical, Business & Workplace Dilemmas',
        nameHindi: 'नैतिक, व्यावसायिक और कार्यस्थल दुविधाएं',
        topics: [
          {
            id: 'dm-ethical-dilemmas',
            name: 'Ethical Dilemmas & Whistleblowing',
            nameHindi: 'नैतिक दुविधाएं और व्हिसलब्लोइंग',
            weightagePercentage: 30,
            estimatedQuestions: '2-3 sets (6-8 Qs in XAT)',
            conceptNotes: 'Balancing legal compliance vs organizational loyalty. Choosing actions that protect fundamental ethics without impulsive destruction of stakeholder goodwill. Avoid purely punitive or overly idealistic extremes.',
            conceptNotesHindi: 'कानूनी अनुपालन बनाम संगठनात्मक निष्ठा। बिना उतावलेपन के नैतिक सिद्धांतों की रक्षा करना।',
            recommendedBooks: ['XAT Decision Making by Gautam Puri', 'Arun Sharma XAT Guide'],
            hasPYQs: true
          },
          {
            id: 'dm-business-caselets',
            name: 'Business Strategy, Marketing & Operational Trade-offs',
            nameHindi: 'व्यावसायिक रणनीति, विपणन और परिचालन व्यापार-बंद',
            weightagePercentage: 35,
            estimatedQuestions: '3 sets (8-9 Qs in XAT)',
            conceptNotes: 'Analyzing profit margins, brand reputation, customer retention, employee morale, and long-term viability. Quantitative calculations on revenue vs cost.',
            conceptNotesHindi: 'लाभ मार्जिन, ब्रांड प्रतिष्ठा, ग्राहक संतुष्टि और दीर्घकालिक व्यवहार्यता का संतुलन।',
            recommendedBooks: ['XAT DM Compendium', 'Past 10 Years XAT Papers'],
            hasPYQs: true
          },
          {
            id: 'dm-hr-conflicts',
            name: 'Workplace Conflict Resolution & Stakeholder Prioritization',
            nameHindi: 'कार्यस्थल संघर्ष समाधान और हितधारक प्राथमिकता',
            weightagePercentage: 35,
            estimatedQuestions: '2-3 sets (6-7 Qs in XAT)',
            conceptNotes: 'Objective fact-finding before taking punitive action. Mediating between conflicting senior and junior team members. Avoiding personal biases.',
            conceptNotesHindi: 'दंडात्मक कार्रवाई से पहले निष्पक्ष तथ्य-खोज। परस्पर विरोधी पक्षों के बीच मध्यस्थता।',
            recommendedBooks: ['XAT Decision Making Official PYQs'],
            hasPYQs: true
          }
        ]
      }
    ]
  },
  {
    id: 'GK',
    name: 'General Awareness & Business Current Affairs',
    nameHindi: 'सामान्य जागरूकता और व्यावसायिक करंट अफेयर्स',
    exams: ['XAT', 'SNAP', 'NMAT'],
    overview: 'Comprehensive coverage of national & global economic developments, corporate mergers, banking policies, startup ecosystems, and constitutional institutions.',
    overviewHindi: 'राष्ट्रीय और वैश्विक आर्थिक विकास, कॉर्पोरेट विलय, बैंकिंग नीतियों, स्टार्टअप पारिस्थितिकी तंत्र और संवैधानिक संस्थानों का व्यापक कवरेज।',
    chapters: [
      {
        id: 'gk-business-economy',
        name: 'Business, Banking & Indian Economy',
        nameHindi: 'व्यवसाय, बैंकिंग और भारतीय अर्थव्यवस्था',
        topics: [
          {
            id: 'gk-monetary-policy',
            name: 'RBI Monetary Policy, Inflation, GDP & Fiscal Deficit',
            nameHindi: 'आरबीआई मौद्रिक नीति, मुद्रास्फीति, जीडीपी और राजकोषीय घाटा',
            weightagePercentage: 35,
            estimatedQuestions: '6-8 Q in XAT GK',
            conceptNotes: 'Repo Rate, Reverse Repo, SDF, CRR, SLR. GDP growth estimates by RBI, IMF, World Bank. Union Budget key allocations and tax slab changes.',
            conceptNotesHindi: 'रेपो रेट, रिवर्स रेपो, सीआरआर, एसएलआर, आरबीआई और आईएमएफ के विकास अनुमान, केंद्रीय बजट।',
            recommendedBooks: ['Manorama Yearbook', 'Economic Survey of India'],
            hasPYQs: true
          },
          {
            id: 'gk-corporate-affairs',
            name: 'Corporate M&A, Unicorns, CEOs & Tech Developments',
            nameHindi: 'कॉर्पोरेट विलय और अधिग्रहण, यूनिकॉर्न, सीईओ और तकनीक',
            weightagePercentage: 35,
            estimatedQuestions: '6-8 Q in XAT GK',
            conceptNotes: 'Major acquisitions, Fortune 500 company leaders, startup valuations, AI advancements, global supply chain developments.',
            conceptNotesHindi: 'प्रमुख कॉर्पोरेट सौदे, बहुराष्ट्रीय कंपनियों के प्रमुख, एआई तकनीक और वैश्विक व्यापार।',
            recommendedBooks: ['The Economic Times / Business Standard'],
            hasPYQs: true
          },
          {
            id: 'gk-static-gk',
            name: 'Static GK: Geography, History, Treaties & Organizations',
            nameHindi: 'स्टैटिक जीके: भूगोल, इतिहास, संधियां और अंतर्राष्ट्रीय संगठन',
            weightagePercentage: 30,
            estimatedQuestions: '8-10 Q in XAT GK',
            conceptNotes: 'UN bodies, WTO, World Bank, IMF, BRICS, G20, ASEAN. Nobel Prizes, Pulitzer Prize, Bharat Ratna. Indian Constitution key articles.',
            conceptNotesHindi: 'संयुक्त राष्ट्र, विश्व बैंक, ब्रिक्स, जी20, नोबेल पुरस्कार, भारत रत्न और संविधान के प्रमुख अनुच्छेद।',
            recommendedBooks: ['Lucent General Knowledge', 'Manorama Yearbook'],
            hasPYQs: true
          }
        ]
      }
    ]
  }
];
