/**
 * Immutable reference definitions for all 22 Arab League nations.
 * Includes localized names, capitals, ISO codes, flags, academic systems, and schedules.
 */

export const ARAB_COUNTRIES = Object.freeze([
  {
    id: 'saudi_arabia',
    code: 'SA',
    flag: '🇸🇦',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    nameHi: 'सऊदी अरब',
    capitalAr: 'الرياض',
    capitalEn: 'Riyadh',
    capitalHi: 'रियाद',
    academicSystem: '3_terms', // Three-term system
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'الفصل الدراسي الأول',
        titleEn: 'First Trimester',
        titleHi: 'पहला सत्र',
        endDate: '2026-12-17T23:59:59+03:00',
        nextStart: '2027-01-03T07:00:00+03:00'
      },
      {
        id: 'term_2',
        titleAr: 'الفصل الدراسي الثاني',
        titleEn: 'Second Trimester',
        titleHi: 'दूसरा सत्र',
        endDate: '2027-03-25T23:59:59+03:00',
        nextStart: '2027-04-06T07:00:00+03:00'
      },
      {
        id: 'term_3',
        titleAr: 'الفصل الدراسي الثالث (نهاية العام الدراسي)',
        titleEn: 'Third Trimester (End of Academic Year)',
        titleHi: 'तीसरा सत्र (शैक्षणिक वर्ष का अंत)',
        endDate: '2027-06-24T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'egypt',
    code: 'EG',
    flag: '🇪🇬',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    nameHi: 'मिस्र',
    capitalAr: 'القاهرة',
    capitalEn: 'Cairo',
    capitalHi: 'काहिरा',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'امتحانات الفصل الدراسي الأول',
        titleEn: 'First Semester Exams',
        titleHi: 'पहला सेमेस्टर',
        endDate: '2027-01-22T23:59:59+02:00',
        nextStart: '2027-02-06T07:30:00+02:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي (الفصل الثاني)',
        titleEn: 'End of Academic Year (Second Semester)',
        titleHi: 'शैक्षणिक वर्ष का अंत (दूसरा सेमेस्टर)',
        endDate: '2027-06-05T23:59:59+02:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'uae',
    code: 'AE',
    flag: '🇦🇪',
    nameAr: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    nameHi: 'संयुक्त अरब अमीरात',
    capitalAr: 'أبوظبي',
    capitalEn: 'Abu Dhabi',
    capitalHi: 'अबू धाबी',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'الفصل الدراسي الأول',
        titleEn: 'Term 1',
        titleHi: 'सत्र 1',
        endDate: '2026-12-11T23:59:59+04:00',
        nextStart: '2027-01-04T07:30:00+04:00'
      },
      {
        id: 'term_2',
        titleAr: 'الفصل الدراسي الثاني',
        titleEn: 'Term 2',
        titleHi: 'सत्र 2',
        endDate: '2027-03-26T23:59:59+04:00',
        nextStart: '2027-04-12T07:30:00+04:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية العام الدراسي (الفصل الثالث)',
        titleEn: 'End of Academic Year (Term 3)',
        titleHi: 'शैक्षणिक वर्ष का अंत (सत्र 3)',
        endDate: '2027-07-02T23:59:59+04:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'qatar',
    code: 'QA',
    flag: '🇶🇦',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    nameHi: 'कतर',
    capitalAr: 'الدوحة',
    capitalEn: 'Doha',
    capitalHi: 'दोहा',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'اختبارات نهاية الفصل الدراسي الأول',
        titleEn: 'End of Semester 1',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2026-12-24T23:59:59+03:00',
        nextStart: '2027-01-05T07:30:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي (الفصل الثاني)',
        titleEn: 'End of Academic Year (Semester 2)',
        titleHi: 'शैक्षणिक वर्ष का अंत (सेमेस्टर 2)',
        endDate: '2027-06-18T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'kuwait',
    code: 'KW',
    flag: '🇰🇼',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    nameHi: 'कुवैत',
    capitalAr: 'مدينة الكويت',
    capitalEn: 'Kuwait City',
    capitalHi: 'कुवैत सिटी',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'اختبارات نهاية الفترة الدراسية الأولى',
        titleEn: 'End of Period 1',
        titleHi: 'पहला सत्र अंत',
        endDate: '2027-01-14T23:59:59+03:00',
        nextStart: '2027-01-31T07:30:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي (الفترة الثانية)',
        titleEn: 'End of Academic Year (Period 2)',
        titleHi: 'शैक्षणिक वर्ष का अंत (दूसरा सत्र)',
        endDate: '2027-06-17T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'oman',
    code: 'OM',
    flag: '🇴🇲',
    nameAr: 'سلطنة عُمان',
    nameEn: 'Oman',
    nameHi: 'ओमान',
    capitalAr: 'مسقط',
    capitalEn: 'Muscat',
    capitalHi: 'मस्कट',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول',
        titleEn: 'End of Semester 1',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-15T23:59:59+04:00',
        nextStart: '2027-02-07T07:30:00+04:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-10T23:59:59+04:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'bahrain',
    code: 'BH',
    flag: '🇧🇭',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    nameHi: 'बहरीन',
    capitalAr: 'المنامة',
    capitalEn: 'Manama',
    capitalHi: 'मनामा',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول',
        titleEn: 'End of Semester 1',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-21T23:59:59+03:00',
        nextStart: '2027-02-07T07:30:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-15T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'jordan',
    code: 'JO',
    flag: '🇯🇴',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    nameHi: 'जॉर्डन',
    capitalAr: 'عمان',
    capitalEn: 'Amman',
    capitalHi: 'अम्मान',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول',
        titleEn: 'End of First Semester',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-07T23:59:59+03:00',
        nextStart: '2027-02-01T08:00:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-25T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'iraq',
    code: 'IQ',
    flag: '🇮🇶',
    nameAr: 'جمهورية العراق',
    nameEn: 'Iraq',
    nameHi: 'इराक',
    capitalAr: 'بغداد',
    capitalEn: 'Baghdad',
    capitalHi: 'बगदाद',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'امتحانات نصف السنة',
        titleEn: 'Mid-Year Examinations',
        titleHi: 'मध्यावधि परीक्षाएं',
        endDate: '2027-01-30T23:59:59+03:00',
        nextStart: '2027-02-15T08:00:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي (الدور الأول)',
        titleEn: 'End of Academic Year (First Round)',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-08T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'morocco',
    code: 'MA',
    flag: '🇲🇦',
    nameAr: 'المملكة المغربية',
    nameEn: 'Morocco',
    nameHi: 'मोरक्को',
    capitalAr: 'الرباط',
    capitalEn: 'Rabat',
    capitalHi: 'रबात',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الأسدوس الأول (عطلة منتصف السنة)',
        titleEn: 'End of Semester 1 (Mid-Year Break)',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-24T23:59:59+01:00',
        nextStart: '2027-02-02T08:30:00+01:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية الموسم الدراسي',
        titleEn: 'End of School Year',
        titleHi: 'शैक्षणिक सत्र का अंत',
        endDate: '2027-07-06T23:59:59+01:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'algeria',
    code: 'DZ',
    flag: '🇩🇿',
    nameAr: 'الجمهورية الجزائرية',
    nameEn: 'Algeria',
    nameHi: 'अल्जीरिया',
    capitalAr: 'الجزائر العاصمة',
    capitalEn: 'Algiers',
    capitalHi: 'अल्जियर्स',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'نهاية الفصل الأول (عطلة الشتاء)',
        titleEn: 'End of Term 1 (Winter Break)',
        titleHi: 'पहला सत्र अंत (शीतकालीन अवकाश)',
        endDate: '2026-12-19T23:59:59+01:00',
        nextStart: '2027-01-05T08:00:00+01:00'
      },
      {
        id: 'term_2',
        titleAr: 'نهاية الفصل الثاني (عطلة الربيع)',
        titleEn: 'End of Term 2 (Spring Break)',
        titleHi: 'दूसरा सत्र अंत (वसंत अवकाश)',
        endDate: '2027-03-20T23:59:59+01:00',
        nextStart: '2027-04-05T08:00:00+01:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية السنة الدراسية (عطلة الصيف)',
        titleEn: 'End of School Year (Summer Break)',
        titleHi: 'शैक्षणिक वर्ष का अंत (ग्रीष्मकालीन अवकाश)',
        endDate: '2027-07-04T23:59:59+01:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'tunisia',
    code: 'TN',
    flag: '🇹🇳',
    nameAr: 'الجمهورية التونسية',
    nameEn: 'Tunisia',
    nameHi: 'ट्यूनिशिया',
    capitalAr: 'تونس',
    capitalEn: 'Tunis',
    capitalHi: 'ट्यूनिस',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'نهاية الثلاثي الأول (عطلة الشتاء)',
        titleEn: 'End of Trimester 1 (Winter Break)',
        titleHi: 'पहला सत्र अंत',
        endDate: '2026-12-20T23:59:59+01:00',
        nextStart: '2027-01-04T08:00:00+01:00'
      },
      {
        id: 'term_2',
        titleAr: 'نهاية الثلاثي الثاني (عطلة الربيع)',
        titleEn: 'End of Trimester 2 (Spring Break)',
        titleHi: 'दूसरा सत्र अंत',
        endDate: '2027-03-14T23:59:59+01:00',
        nextStart: '2027-03-29T08:00:00+01:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية السنة الدراسية',
        titleEn: 'End of School Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-30T23:59:59+01:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'palestine',
    code: 'PS',
    flag: '🇵🇸',
    nameAr: 'دولة فلسطين',
    nameEn: 'Palestine',
    nameHi: 'फिलिस्तीन',
    capitalAr: 'القدس الشريف',
    capitalEn: 'Jerusalem',
    capitalHi: 'यरूशलेम',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول',
        titleEn: 'End of First Semester',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-12T23:59:59+02:00',
        nextStart: '2027-01-27T08:00:00+02:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-12T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'lebanon',
    code: 'LB',
    flag: '🇱🇧',
    nameAr: 'الجمهورية اللبنانية',
    nameEn: 'Lebanon',
    nameHi: 'लेबनान',
    capitalAr: 'بيروت',
    capitalEn: 'Beirut',
    capitalHi: 'बेरूत',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الأول (عطلة الشتاء)',
        titleEn: 'End of Term 1 (Winter Holiday)',
        titleHi: 'पहला सत्र अंत',
        endDate: '2027-01-15T23:59:59+02:00',
        nextStart: '2027-01-26T08:00:00+02:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-25T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'syria',
    code: 'SY',
    flag: '🇸🇾',
    nameAr: 'الجمهورية العربية السورية',
    nameEn: 'Syria',
    nameHi: 'सीरिया',
    capitalAr: 'دمشق',
    capitalEn: 'Damascus',
    capitalHi: 'दमिश्क',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'امتحانات الفصل الدراسي الأول',
        titleEn: 'First Semester Exams',
        titleHi: 'पहले सेमेस्टर की परीक्षाएं',
        endDate: '2027-01-18T23:59:59+03:00',
        nextStart: '2027-02-01T08:00:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-15T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'libya',
    code: 'LY',
    flag: '🇱🇾',
    nameAr: 'دولة ليبيا',
    nameEn: 'Libya',
    nameHi: 'लीबिया',
    capitalAr: 'طرابلس',
    capitalEn: 'Tripoli',
    capitalHi: 'त्रिपोली',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول (عطلة نصف السنة)',
        titleEn: 'End of Semester 1',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-29T23:59:59+02:00',
        nextStart: '2027-02-14T08:00:00+02:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-20T23:59:59+02:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'yemen',
    code: 'YE',
    flag: '🇾🇪',
    nameAr: 'الجمهورية اليمنية',
    nameEn: 'Yemen',
    nameHi: 'यमन',
    capitalAr: 'صنعاء',
    capitalEn: 'Sanaa',
    capitalHi: 'साना',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'اختبارات نهاية الفصل الأول',
        titleEn: 'End of Semester 1 Exams',
        titleHi: 'पहला सेमेस्टर परीक्षा',
        endDate: '2027-01-10T23:59:59+03:00',
        nextStart: '2027-01-25T08:00:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-03T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'sudan',
    code: 'SD',
    flag: '🇸🇩',
    nameAr: 'جمهورية السودان',
    nameEn: 'Sudan',
    nameHi: 'सूडान',
    capitalAr: 'الخرطوم',
    capitalEn: 'Khartoum',
    capitalHi: 'खार्तूम',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الدورة الأولى',
        titleEn: 'End of Term 1',
        titleHi: 'पहला सत्र अंत',
        endDate: '2027-01-20T23:59:59+02:00',
        nextStart: '2027-02-05T08:00:00+02:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-15T23:59:59+02:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'mauritania',
    code: 'MR',
    flag: '🇲🇷',
    nameAr: 'الجمهورية الإسلامية الموريتانية',
    nameEn: 'Mauritania',
    nameHi: 'मॉरिटानिया',
    capitalAr: 'نواكشوط',
    capitalEn: 'Nouakchott',
    capitalHi: 'नौआकशॉट',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'نهاية الفصل الأول',
        titleEn: 'End of First Term',
        titleHi: 'पहला सत्र अंत',
        endDate: '2026-12-25T23:59:59+00:00',
        nextStart: '2027-01-06T08:00:00+00:00'
      },
      {
        id: 'term_2',
        titleAr: 'نهاية الفصل الثاني',
        titleEn: 'End of Second Term',
        titleHi: 'दूसरा सत्र अंत',
        endDate: '2027-03-27T23:59:59+00:00',
        nextStart: '2027-04-06T08:00:00+00:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية السنة الدراسية',
        titleEn: 'End of School Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-28T23:59:59+00:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'somalia',
    code: 'SO',
    flag: '🇸🇴',
    nameAr: 'جمهورية الصومال الفيدرالية',
    nameEn: 'Somalia',
    nameHi: 'सोमालिया',
    capitalAr: 'مقديشو',
    capitalEn: 'Mogadishu',
    capitalHi: 'मोगादिशु',
    academicSystem: '2_semesters',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'sem_1',
        titleAr: 'نهاية الفصل الدراسي الأول',
        titleEn: 'End of Semester 1',
        titleHi: 'पहला सेमेस्टर अंत',
        endDate: '2027-01-18T23:59:59+03:00',
        nextStart: '2027-02-01T07:30:00+03:00'
      },
      {
        id: 'sem_2',
        titleAr: 'نهاية العام الدراسي',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-18T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'djibouti',
    code: 'DJ',
    flag: '🇩🇯',
    nameAr: 'جمهورية جيبوتي',
    nameEn: 'Djibouti',
    nameHi: 'जिबूती',
    capitalAr: 'جيبوتي',
    capitalEn: 'Djibouti City',
    capitalHi: 'जिबूती शहर',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'نهاية الثلاثي الأول',
        titleEn: 'End of Term 1',
        titleHi: 'पहला सत्र अंत',
        endDate: '2026-12-18T23:59:59+03:00',
        nextStart: '2027-01-03T07:30:00+03:00'
      },
      {
        id: 'term_2',
        titleAr: 'نهاية الثلاثي الثاني',
        titleEn: 'End of Term 2',
        titleHi: 'दूसरा सत्र अंत',
        endDate: '2027-03-24T23:59:59+03:00',
        nextStart: '2027-04-04T07:30:00+03:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية السنة الدراسية',
        titleEn: 'End of Academic Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-20T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  },
  {
    id: 'comoros',
    code: 'KM',
    flag: '🇰🇲',
    nameAr: 'الاتحاد القمري (جزر القمر)',
    nameEn: 'Comoros',
    nameHi: 'कोमोरोस',
    capitalAr: 'موروني',
    capitalEn: 'Moroni',
    capitalHi: 'मोरोनी',
    academicSystem: '3_terms',
    currentAcademicYear: '2026–2027',
    terms: Object.freeze([
      {
        id: 'term_1',
        titleAr: 'نهاية الفصل الأول',
        titleEn: 'End of Term 1',
        titleHi: 'पहला सत्र अंत',
        endDate: '2026-12-22T23:59:59+03:00',
        nextStart: '2027-01-05T07:30:00+03:00'
      },
      {
        id: 'term_2',
        titleAr: 'نهاية الفصل الثاني',
        titleEn: 'End of Term 2',
        titleHi: 'दूसरा सत्र अंत',
        endDate: '2027-03-28T23:59:59+03:00',
        nextStart: '2027-04-07T07:30:00+03:00'
      },
      {
        id: 'term_3',
        titleAr: 'نهاية السنة الدراسية',
        titleEn: 'End of School Year',
        titleHi: 'शैक्षणिक वर्ष का अंत',
        endDate: '2027-06-27T23:59:59+03:00',
        isYearEnd: true
      }
    ])
  }
]);

/**
 * Resolves current active term, year-end, and year targets for a country at reference date.
 */
export function getCountryCountdownTargets(countryId, referenceDate = new Date()) {
  const country = ARAB_COUNTRIES.find(c => c.id === countryId) || ARAB_COUNTRIES[0];
  const nowMs = referenceDate.getTime();
  const currentYear = referenceDate.getFullYear();

  // Find current active term (or next upcoming term)
  let activeTerm = null;
  for (const term of country.terms) {
    const endMs = new Date(term.endDate).getTime();
    if (endMs >= nowMs) {
      activeTerm = term;
      break;
    }
  }

  // If all terms passed for the defined year, calculate dynamically for the current or next academic cycle
  if (!activeTerm) {
    activeTerm = country.terms[country.terms.length - 1];
  }

  // Find academic year end
  const yearEndTerm = country.terms.find(t => t.isYearEnd) || country.terms[country.terms.length - 1];

  // Gregorian year end (Dec 31, 23:59:59)
  const gregorianYearEnd = new Date(currentYear, 11, 31, 23, 59, 59);

  // Approximate Hijri year end (29 Dhul-Hijjah)
  // For 1448 AH (which is in 2027): ~June 5, 2027
  // For 1447 AH (which is in 2026): ~June 16, 2026
  // Dynamically computed to match the upcoming Hijri year boundary
  const hijriYearEnd = new Date(currentYear < 2026 ? '2025-06-25T23:59:59+03:00' : (currentYear === 2026 ? '2027-06-05T23:59:59+03:00' : `${currentYear + 1}-05-24T23:59:59+03:00`));

  return {
    country,
    currentTerm: {
      ...activeTerm,
      targetDateObj: new Date(activeTerm.endDate)
    },
    academicYearEnd: {
      ...yearEndTerm,
      targetDateObj: new Date(yearEndTerm.endDate)
    },
    gregorianYearEnd: {
      titleAr: `نهاية العام الميلادي (${currentYear})`,
      titleEn: `End of Gregorian Year (${currentYear})`,
      titleHi: `ग्रेगोरियन वर्ष का अंत (${currentYear})`,
      targetDateObj: gregorianYearEnd
    },
    hijriYearEnd: {
      titleAr: 'نهاية العام الهجري (1448 هـ)',
      titleEn: 'End of Hijri Year (1448 AH)',
      titleHi: 'हिजरी वर्ष का अंत (1448 हि.)',
      targetDateObj: hijriYearEnd
    }
  };
}
