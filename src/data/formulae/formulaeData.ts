import { FormulaItem } from '../../types';

export const formulaeData: FormulaItem[] = [
  // Arithmetic
  {
    id: 'f-successive-percentage',
    subject: 'Quantitative Aptitude',
    chapter: 'Arithmetic',
    topic: 'Percentages',
    formulaName: 'Successive Percentage Change Formula',
    formulaMath: 'Net % Change = a + b + (a * b) / 100',
    explanation: 'Used when an entity undergoes two consecutive percentage changes of a% and b%. Positive sign for increase, negative sign for decrease or discount.',
    explanationHindi: 'जब किसी वस्तु के मूल्य में लगातार दो बार a% और b% का परिवर्तन होता है। वृद्धि के लिए धनात्मक और छूट/कमी के लिए ऋणात्मक चिह्न का प्रयोग करें।',
    conditions: 'Applies to successive changes on the same base. For three changes (a, b, c), apply pairwise.',
    example: 'A price is increased by 20% and then decreased by 10%. Net Change = 20 - 10 + (20 * -10)/100 = 10 - 2 = +8% increase.',
    commonMistake: 'Adding them linearly (20 - 10 = 10%) without accounting for the altered intermediary base value.'
  },
  {
    id: 'f-faulty-weights',
    subject: 'Quantitative Aptitude',
    chapter: 'Arithmetic',
    topic: 'Profit & Loss',
    formulaName: 'Dishonest Dealer & Faulty Weights',
    formulaMath: 'Gain % = [(True Value - False Value) / False Value] * 100',
    explanation: 'Calculates the true percentage profit earned by a merchant selling goods at nominal cost price while using underweight measures.',
    explanationHindi: 'लागत मूल्य पर सामान बेचते हुए कम तौलने वाले बेईमान दुकानदार का वास्तविक लाभ प्रतिशत।',
    conditions: 'Selling price per unit weight must equal claimed cost price per unit weight.',
    example: 'Merchant uses a 900g weight instead of 1000g. Profit % = [(1000 - 900) / 900] * 100 = 100/9 = 11.11%.',
    commonMistake: 'Dividing by the true weight 1000 instead of the actual goods surrendered (false weight 900).'
  },
  {
    id: 'f-repeated-dilution',
    subject: 'Quantitative Aptitude',
    chapter: 'Arithmetic',
    topic: 'Mixtures & Alligations',
    formulaName: 'Repeated Dilution / Replacement Formula',
    formulaMath: 'Final Quantity of Liquid A = Initial Quantity * (1 - x / V)^n',
    explanation: 'From a vessel containing V litres of pure liquid A, x litres are drawn out and replaced with liquid B, and this process is repeated n times.',
    explanationHindi: 'एक बर्तन से जिसमें V लीटर शुद्ध द्रव A है, x लीटर निकाला जाता है और पानी से बदला जाता है, तथा यह प्रक्रिया n बार दोहराई जाती है।',
    conditions: 'Equal volume x removed and substituted each turn; total vessel volume V remains constant.',
    example: 'V = 80 L pure milk, 8 L drawn and replaced with water twice (n = 2). Final Milk = 80 * (1 - 8/80)^2 = 80 * (0.9)^2 = 80 * 0.81 = 64.8 L.',
    commonMistake: 'Subtracting x*n directly without compounding the declining concentration ratio.'
  },
  {
    id: 'f-average-speed-equal-distance',
    subject: 'Quantitative Aptitude',
    chapter: 'Arithmetic',
    topic: 'Time, Speed & Distance',
    formulaName: 'Harmonic Mean Average Speed for Equal Distances',
    formulaMath: 'Average Speed = 2 * u * v / (u + v)',
    explanation: 'When a journey of equal distance is covered at speed u on the forward leg and speed v on the return leg.',
    explanationHindi: 'जब समान दूरी की यात्रा जाने में u गति से और लौटने में v गति से तय की जाती है।',
    conditions: 'Distance traveled in each segment MUST be strictly equal. If time intervals are equal, arithmetic mean (u+v)/2 applies.',
    example: 'Driving 60 km at 30 km/h and returning 60 km at 60 km/h: Avg Speed = 2 * 30 * 60 / (30 + 60) = 3600 / 90 = 40 km/h.',
    commonMistake: 'Blindly averaging speeds: (30 + 60)/2 = 45 km/h, which is wrong because more time was spent at the slower speed.'
  },
  {
    id: 'f-ci-si-difference',
    subject: 'Quantitative Aptitude',
    chapter: 'Arithmetic',
    topic: 'Simple & Compound Interest',
    formulaName: 'Difference between CI and SI for 2 & 3 Years',
    formulaMath: 'For 2 years: Diff₂ = P * (R / 100)²\nFor 3 years: Diff₃ = P * (R / 100)² * (3 + R / 100)',
    explanation: 'Direct evaluation of the interest-on-interest accrual difference between compound and simple interest at principal P and rate R%.',
    explanationHindi: 'मूलधन P और दर R% पर 2 और 3 वर्षों के लिए चक्रवृद्धि ब्याज और साधारण ब्याज के बीच का सीधा अंतर सूत्र।',
    conditions: 'Compounding frequency must be annual, and interest rate constant across years.',
    example: 'P = ₹ 10,000, R = 10%, n = 2 years: Diff = 10,000 * (10/100)² = 10,000 * 0.01 = ₹ 100.',
    commonMistake: 'Forgetting to multiply by (3 + R/100) for the 3-year case.'
  },

  // Algebra
  {
    id: 'f-quadratic-roots-discriminant',
    subject: 'Quantitative Aptitude',
    chapter: 'Algebra',
    topic: 'Quadratic Equations',
    formulaName: 'Roots and Discriminant Analysis of ax² + bx + c = 0',
    formulaMath: 'x = (-b ± √(b² - 4ac)) / (2a)\nSum of roots: α + β = -b/a\nProduct of roots: αβ = c/a\nDiscriminant: D = b² - 4ac',
    explanation: 'D > 0: Real & distinct roots; D = 0: Real & equal roots; D < 0: Complex conjugate roots; D is a perfect square (with rational coefficients): Rational roots.',
    explanationHindi: 'द्विघात समीकरण के मूल, मूलों का योग, मूलों का गुणनफल और विविक्तकर (Discriminant) की प्रकृति।',
    conditions: 'Coefficient a ≠ 0.',
    example: 'For 2x² - 7x + 3 = 0: α + β = 7/2 = 3.5, αβ = 3/2 = 1.5. D = 49 - 24 = 25 (Roots: 3 and 0.5).',
    commonMistake: 'Missing the negative sign in the sum of roots formula (-b/a).'
  },
  {
    id: 'f-am-gm-inequality',
    subject: 'Quantitative Aptitude',
    chapter: 'Algebra',
    topic: 'Inequalities & Maxima-Minima',
    formulaName: 'Arithmetic Mean - Geometric Mean (AM ≥ GM) Inequality',
    formulaMath: '(x₁ + x₂ + ... + xₙ) / n ≥ ⁿ√(x₁ * x₂ * ... * xₙ)',
    explanation: 'Fundamental theorem used to find the minimum value of a sum when the product is constant, or maximum value of a product when the sum is constant.',
    explanationHindi: 'धनात्मक संख्याओं के लिए समांतर माध्य हमेशा गुणोत्तर माध्य से बड़ा या उसके बराबर होता है।',
    conditions: 'Valid ONLY for positive real numbers (xᵢ > 0). Equality holds if and only if x₁ = x₂ = ... = xₙ.',
    example: 'Find minimum value of x + 16/x for x > 0. By AM-GM: (x + 16/x)/2 ≥ √(x * 16/x) = √16 = 4 => x + 16/x ≥ 8.',
    commonMistake: 'Applying AM-GM without ensuring that all variables are strictly positive.'
  },
  {
    id: 'f-logarithm-change-base',
    subject: 'Quantitative Aptitude',
    chapter: 'Algebra',
    topic: 'Logarithms',
    formulaName: 'Change of Base & Power Rules of Logarithms',
    formulaMath: 'log_a(b) = log_c(b) / log_c(a)\nlog_a(b^k) = k * log_a(b)\nlog_(a^m)(b) = (1/m) * log_a(b)\na^(log_a(x)) = x',
    explanation: 'Key identities for simplifying transcendental and exponential algebraic equations in CAT and XAT.',
    explanationHindi: 'लघुगणक के आधार परिवर्तन और घातांक नियम।',
    conditions: 'Base a > 0, a ≠ 1; Argument b > 0; New base c > 0, c ≠ 1.',
    example: 'Evaluate log₈(32): 8 = 2³, 32 = 2⁵ => log_(2³)(2⁵) = (5/3) * log₂(2) = 5/3.',
    commonMistake: 'Confusing log(x + y) with log(x) + log(y). Remember: log(xy) = log(x) + log(y).'
  },

  // Geometry
  {
    id: 'f-apollonius-theorem',
    subject: 'Quantitative Aptitude',
    chapter: 'Geometry',
    topic: 'Triangles',
    formulaName: 'Apollonius Theorem (Median Length of a Triangle)',
    formulaMath: 'AB² + AC² = 2 * (AD² + BD²)',
    explanation: 'Relates the length of the median AD to the lengths of the sides of triangle ABC where D is the midpoint of BC (BD = CD = BC/2).',
    explanationHindi: 'त्रिभुज की माध्यिका की लंबाई और भुजाओं के वर्गों के योग के बीच का संबंध (अपोलोनियस प्रमेय)।',
    conditions: 'AD must be a median (bisects the opposite side BC into equal halves).',
    example: 'In triangle ABC, AB = 5, AC = 7, BC = 8. Then BD = 4. 5² + 7² = 2*(AD² + 4²) => 25 + 49 = 2*(AD² + 16) => 74/2 = 37 => AD² = 21 => AD = √21.',
    commonMistake: 'Applying Apollonius theorem to angle bisectors or altitudes instead of medians.'
  },
  {
    id: 'f-tangent-secant-theorem',
    subject: 'Quantitative Aptitude',
    chapter: 'Geometry',
    topic: 'Circles',
    formulaName: 'Tangent-Secant and Intersecting Chords Power of a Point',
    formulaMath: 'PT² = PA * PB  (for Tangent PT and Secant PAB)\nPA * PB = PC * PD  (for two intersecting secants or internal chords)',
    explanation: 'Power of point P with respect to a circle. Holds true whether the chords intersect inside the circle or outside the circle.',
    explanationHindi: 'स्पर्शरेखा-छेदकरेखा प्रमेय: बाहरी बिंदु P से वृत्त पर खींची गई स्पर्शरेखा PT का वर्ग = PA * PB।',
    conditions: 'P is the common intersection point. Points A and B lie on the circle along the secant line.',
    example: 'PT is tangent of length 6. A secant from P intersects the circle at A and B. If PA = 4, find PB: 6² = 4 * PB => 36 = 4 * PB => PB = 9. Chord AB = 9 - 4 = 5.',
    commonMistake: 'Multiplying PA by AB instead of PA by the entire segment PB.'
  },

  // Number System
  {
    id: 'f-number-of-factors',
    subject: 'Quantitative Aptitude',
    chapter: 'Number System',
    topic: 'Factors & Divisibility',
    formulaName: 'Total Number and Sum of Factors of N',
    formulaMath: 'If N = pᵃ * qᵇ * rᶜ (where p, q, r are distinct primes):\nTotal Factors = (a + 1)(b + 1)(c + 1)\nSum of Factors = [(pᵃ⁺¹ - 1)/(p - 1)] * [(qᵇ⁺¹ - 1)/(q - 1)] * [(rᶜ⁺¹ - 1)/(r - 1)]',
    explanation: 'Derived from counting the possible powers of each prime factor that can divide N.',
    explanationHindi: 'अभाज्य गुणनखंडन के माध्यम से किसी संख्या के कुल भाजकों की संख्या और उनका योग ज्ञात करना।',
    conditions: 'p, q, r MUST be prime numbers. Base factorization must be fully reduced to primes.',
    example: 'N = 72 = 2³ * 3². Total Factors = (3 + 1)(2 + 1) = 4 * 3 = 12 factors.',
    commonMistake: 'Factoring into composite bases (e.g. 72 = 8 * 9) and using powers without reducing 8 to 2³ and 9 to 3².'
  },

  // Modern Math
  {
    id: 'f-circular-permutations',
    subject: 'Quantitative Aptitude',
    chapter: 'Modern Mathematics',
    topic: 'Permutations & Combinations',
    formulaName: 'Circular Permutations & Necklaces',
    formulaMath: 'Distinct objects around a circle = (n - 1)!\nNecklace / Garland (clockwise and counter-clockwise identical) = (n - 1)! / 2',
    explanation: 'Fixing one object to break rotational symmetry eliminates n rotational equivalences: n! / n = (n-1)!',
    explanationHindi: 'वृत्ताकार व्यवस्था में n वस्तुओं के विन्यास = (n-1)! तथा माला या हार के लिए (n-1)! / 2।',
    conditions: 'Arrangements are on a closed circular loop without distinguished start/end seats.',
    example: 'Seating 6 delegates around a round table: (6 - 1)! = 5! = 120 ways.',
    commonMistake: 'Using (n-1)! for circular arrangements where seats are already numbered or named.'
  },
  {
    id: 'f-derangements-formula',
    subject: 'Quantitative Aptitude',
    chapter: 'Modern Mathematics',
    topic: 'Permutations & Combinations',
    formulaName: 'Derangements Formula (No Item in Original Position)',
    formulaMath: '!n = n! * [1 - 1/1! + 1/2! - 1/3! + 1/4! - ... + (-1)ⁿ/n!]',
    explanation: 'Number of permutations of n items such that none of the items appears in its originally assigned place (e.g. letters in envelopes).',
    explanationHindi: 'डिरेंजमेंट सूत्र: n वस्तुओं को इस प्रकार व्यवस्थित करना कि कोई भी वस्तु अपने मूल स्थान पर न आए।',
    conditions: 'Values: !1 = 0, !2 = 1, !3 = 2, !4 = 9, !5 = 44, !6 = 265.',
    example: '4 letters addressed to 4 people placed in 4 envelopes so that NO letter goes to the correct recipient: !4 = 9 ways.',
    commonMistake: 'Attempting to calculate via brute-force combinations during an exam. Memorize !3=2, !4=9, !5=44.'
  },
  {
    id: 'f-bayes-theorem',
    subject: 'Quantitative Aptitude',
    chapter: 'Modern Mathematics',
    topic: 'Probability',
    formulaName: 'Bayes Theorem for Conditional Inverse Probability',
    formulaMath: 'P(Aᵢ|B) = [P(B|Aᵢ) * P(Aᵢ)] / [∑ P(B|Aⱼ) * P(Aⱼ)]',
    explanation: 'Calculates the updated probability of hypothesis Aᵢ having occurred given that evidence B has been observed.',
    explanationHindi: 'बेयेस प्रमेय: दी गई घटना B के घटित होने के बाद मूल घटना Aᵢ की प्रायिकता का अद्यतन।',
    conditions: 'A₁, A₂, ... form a mutually exclusive and exhaustive partition of the sample space.',
    example: 'Determining the likelihood a defective bulb came from Factory 1 vs Factory 2 based on known defect production rates.',
    commonMistake: 'Inverting P(A|B) and P(B|A) without normalizing against total probability in the denominator.'
  }
];
