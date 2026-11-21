/**
 * Immutable greeting card templates, themes, presets, and geometric ornaments.
 * Structured with Object.freeze for data integrity.
 */

export const CARD_OCCASIONS = Object.freeze([
  {
    id: 'ramadan',
    titleKey: 'cardOccasionRamadan',
    defaultTheme: 'emerald_gold',
    icon: 'Moon',
    presets: Object.freeze({
      ar: Object.freeze([
        'مبارك عليكم شهر رمضان المبارك، تقبل الله منا ومنكم صالح الأعمال وجعله شهر خير وبركة ورحمة.',
        'أعاده الله عليكم باليمن والإيمان والسلامة والإسلام، ورزقكم فيه القبول والمغفرة والعتق من النيران.',
        'رمضان يجمعنا على الخير والمحبة، كل عام وأنتم وعائلتكم الكريمة بألف خير وصحة وسعادة.',
        'نسأل الله لكم في هذا الشهر الفضيل قلباً مطمئناً، ودعاءً مستجاباً، وذنباً مغفوراً، وعملاً متقبلاً.'
      ]),
      en: Object.freeze([
        'Wishing you and your family a blessed and peaceful Ramadan. May Allah shower your home with blessings, grace, and serenity.',
        'May this holy month bring you immense joy, spiritual peace, and answered prayers. Ramadan Mubarak!',
        'May the divine light of Ramadan illuminate your path and lead you towards endless prosperity and virtue.',
        'Sending heartfelt prayers for your peace, health, and happiness during this sacred month of mercy and contemplation.'
      ]),
      hi: Object.freeze([
        'आपको और आपके परिवार को रमज़ान मुबारक। अल्लाह आपकी सभी इबादतें और दुआएं क़ुबूल फरमाए।',
        'यह पवित्र महीना आपके जीवन में शांति, समृद्धि और खुशियां लेकर आए। रमज़ان की दिली मुबारकबाद!',
        'रमज़ान के इस मुकद्दस महीने में आपके और आपके अपनों के लिए अमन और रहमत की दुआएं।'
      ])
    })
  },
  {
    id: 'eid_fitr',
    titleKey: 'cardOccasionEidFitr',
    defaultTheme: 'gold_sunset',
    icon: 'Sparkles',
    presets: Object.freeze({
      ar: Object.freeze([
        'عيد فطر مبارك وسعيد، تقبل الله طاعاتكم وصيامكم، وأتم عليكم بهجة العيد بالمسرات والبركات.',
        'كل عام وأنتم بخير، عساكم من عواده، وجعل الله أيامكم كلها أعياداً وأفراحاً دائمة.',
        'يطيب لي بمناسبة عيد الفطر المبارك أن أتقدم إليكم بأسمى آيات التهاني والتبريكات، سائلاً المولى أن يديم عليكم نعمة الصحة والعافية.',
        'فرحة العيد تكتمل بقرب الأحبة، عيدكم مبارك وكل عام وأنتم في سعادة وهناء.'
      ]),
      en: Object.freeze([
        'Eid Mubarak! Wishing you and your loved ones days filled with joy, laughter, and divine blessings.',
        'May the joy of Eid al-Fitr warm your heart and bring peace, prosperity, and success to your home.',
        'Warmest greetings on this joyous festival of Eid. May your fasting and good deeds be accepted.',
        'May this festive occasion bring countless moments of harmony, health, and everlasting contentment.'
      ]),
      hi: Object.freeze([
        'ईद-उल-फ़ित्र की बहुत-बहुत मुबारकबाद! आपकी ज़िंदगी में खुशियों की बहार हमेशा बनी रहे।',
        'अल्लाह आपकी हर जायज़ दुआ क़ुबूल करे और आपके घर में खुशहाली आए। ईद मुबारक!',
        'ईद का यह पाक त्योहार आपके परिवार में प्यार, शांति और अमन लेकर आए।'
      ])
    })
  },
  {
    id: 'eid_adha',
    titleKey: 'cardOccasionEidAdha',
    defaultTheme: 'midnight_gold',
    icon: 'Sun',
    presets: Object.freeze({
      ar: Object.freeze([
        'عيد أضحى مبارك، تقبل الله منا ومنكم صالح الأعمال والدعوات، وجعل أيامكم عامرة بالخير والمسرات.',
        'بأرق العبارات وأصدق المشاعر أهنئكم بحلول عيد الأضحى المبارك، كل عام وأنتم إلى الله أقرب.',
        'عيدكم مبارك، أعاده الله عليكم وعلى الأمة الإسلامية باليمن والبركات والأمن والرخاء.',
        'تقبل الله طاعاتكم، وغفر ذنوبكم، وجعل عيدكم فرحة وسلاماً وبركة تنير قلوبكم.'
      ]),
      en: Object.freeze([
        'Eid Al-Adha Mubarak! May the spirit of sacrifice and devotion inspire peace and joy in your life.',
        'Wishing you and your family a blessed Eid full of divine grace, cherished moments, and heartfelt smiles.',
        'May the blessings of Eid al-Adha bring unity, prosperity, and divine favor to you and your home.',
        'May your prayers be accepted and your days be bright with hope, faith, and infinite happiness.'
      ]),
      hi: Object.freeze([
        'ईद-उल-अज़हा की दिली मुबारकबाद! यह ईद आपके और आपके परिवार के लिए अमन और खुशियां लाए।',
        'त्याग और समर्पण का यह पावन पर्व आपके जीवन को सुख और शांति से भर दे। ईद मुबारक!',
        'अल्लाह आपके जीवन को खुशियों, बरकतों और कामयाबी से नवाज़े। बकरा ईद मुबारक!'
      ])
    })
  },
  {
    id: 'academic_success',
    titleKey: 'cardOccasionAcademic',
    defaultTheme: 'azure_platinum',
    icon: 'GraduationCap',
    presets: Object.freeze({
      ar: Object.freeze([
        'ألف مبروك النجاح والتفوق! ثمرة الجد والاجتهاد تتوج اليوم بأبهى المراتب، ومن نجاح إلى نجاح دائم بإذن الله.',
        'تهانينا القلبية بمناسبة النجاح الباهر، فخورون بإنجازكم ونسأل الله لكم مستقبلاً زاهراً مليئاً بالعطاء.',
        'لكل مجتهد نصيب، ومبارك عليكم حصاد التعب والتميز في هذا العام الدراسي، وإلى مزيد من القمم.',
        'بكل فخر واعتزاز، نبارك لكم هذا الإنجاز الدراسي المشرف، متمنين لكم مسيرة علمية وعملية متألقة.'
      ]),
      en: Object.freeze([
        'Warmest congratulations on your outstanding academic success! Your perseverance and dedication have paid off.',
        'So proud of your great accomplishment! May this milestone be the beginning of an inspiring journey.',
        'Congratulations on your exams and graduation! Wishing you brilliant success in all future pursuits.',
        'Hard work always leads to excellence. Bravo on your achievement and keep shining bright!'
      ]),
      hi: Object.freeze([
        'शानदार शैक्षणिक सफलता पर हार्दिक बधाई! आपकी कड़ी मेहनत और लगन का यह खूबसूरत नतीजा है।',
        'आपकी इस महान उपलब्धि पर हमें गर्व है। भविष्य की हर नई शुरुआत के लिए ढेर सारी शुभकामनाएं!',
        'सफलता की यह नई सीढ़ी आपके जीवन में नए अवसरों के द्वार खोले। बहुत-बहुत बधाई!'
      ])
    })
  },
  {
    id: 'new_year',
    titleKey: 'cardOccasionNewYear',
    defaultTheme: 'minimal_monochrome',
    icon: 'Calendar',
    presets: Object.freeze({
      ar: Object.freeze([
        'كل عام وأنتم بخير بمناسبة حلول العام الجديد، نسأل الله أن يجعله عام خير وتحقيق للأمنيات والسلام.',
        'عام جديد يشرق بأمل متجدد وفرص أجمل، دمتم ودامت أيامكم في سعادة وصحة وعافية.',
        'مع إطلالة العام الجديد، أبعث إليكم بأصدق الأمنيات بعام مليء بالنجاح والبركة وراحة البال.'
      ]),
      en: Object.freeze([
        'Happy New Year! May this coming year be abundant in peace, health, joy, and fulfilled dreams.',
        'Wishing you 365 days of good health, growth, triumph, and memorable moments with loved ones.',
        'May the dawn of the new year bring a clean slate full of inspiring opportunities and happiness.'
      ]),
      hi: Object.freeze([
        'नव वर्ष की हार्दिक शुभकामनाएं! नया साल आपके जीवन में सुख, शांति और समृद्धि लेकर आए।',
        'आने वाला साल आपके लिए नई उम्मीदें, नई खुशियां और अपार सफलता लाए। नया साल मुबारक!',
        'नए साल का हर दिन आपके लिए खुशियों से भरा हो और आपके सारे सपने सच हों।'
      ])
    })
  }
]);

export const CARD_THEMES = Object.freeze([
  {
    id: 'emerald_gold',
    nameKey: 'themeEmeraldGold',
    bgGradient: 'from-[#062c1d] via-[#0b3d29] to-[#041a11]',
    textColor: '#ffffff',
    accentColor: '#d4af37', // metallic gold
    secondaryAccent: '#f3e5ab',
    borderColor: '#d4af37',
    ornamentColor: '#d4af37',
    badgeBg: 'bg-emerald-950/60 border-amber-400/40 text-amber-300',
    canvasBg: ['#062c1d', '#0b3d29', '#041a11'],
    canvasGold: '#d4af37',
    canvasText: '#ffffff',
    canvasSubtext: '#d1fae5'
  },
  {
    id: 'midnight_gold',
    nameKey: 'themeMidnightGold',
    bgGradient: 'from-[#090d16] via-[#101b33] to-[#05080f]',
    textColor: '#ffffff',
    accentColor: '#f1c40f',
    secondaryAccent: '#e0e7ff',
    borderColor: '#e2b024',
    ornamentColor: '#f1c40f',
    badgeBg: 'bg-indigo-950/60 border-amber-300/40 text-amber-200',
    canvasBg: ['#090d16', '#101b33', '#05080f'],
    canvasGold: '#f1c40f',
    canvasText: '#ffffff',
    canvasSubtext: '#cbd5e1'
  },
  {
    id: 'gold_sunset',
    nameKey: 'themeGoldSunset',
    bgGradient: 'from-[#2b1008] via-[#451e11] to-[#1a0804]',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
    secondaryAccent: '#fed7aa',
    borderColor: '#f59e0b',
    ornamentColor: '#fbbf24',
    badgeBg: 'bg-amber-950/60 border-amber-400/40 text-amber-200',
    canvasBg: ['#2b1008', '#451e11', '#1a0804'],
    canvasGold: '#fbbf24',
    canvasText: '#ffffff',
    canvasSubtext: '#fed7aa'
  },
  {
    id: 'azure_platinum',
    nameKey: 'themeAzurePlatinum',
    bgGradient: 'from-[#08203e] via-[#0d3461] to-[#051326]',
    textColor: '#ffffff',
    accentColor: '#60a5fa',
    secondaryAccent: '#e2e8f0',
    borderColor: '#93c5fd',
    ornamentColor: '#60a5fa',
    badgeBg: 'bg-blue-950/60 border-blue-400/40 text-blue-200',
    canvasBg: ['#08203e', '#0d3461', '#051326'],
    canvasGold: '#60a5fa',
    canvasText: '#ffffff',
    canvasSubtext: '#e2e8f0'
  },
  {
    id: 'minimal_monochrome',
    nameKey: 'themeMinimalMonochrome',
    bgGradient: 'from-[#171717] via-[#262626] to-[#0a0a0a]',
    textColor: '#ffffff',
    accentColor: '#e5e5e5',
    secondaryAccent: '#a3a3a3',
    borderColor: '#737373',
    ornamentColor: '#e5e5e5',
    badgeBg: 'bg-neutral-900 border-neutral-700 text-neutral-200',
    canvasBg: ['#171717', '#262626', '#0a0a0a'],
    canvasGold: '#e5e5e5',
    canvasText: '#ffffff',
    canvasSubtext: '#a3a3a3'
  }
]);

export const CARD_FONTS = Object.freeze([
  { id: 'amiri', nameAr: 'أميري الكلاسيكي (عربي أصيل)', nameEn: 'Amiri Traditional', fontAr: '"Amiri", serif', fontEn: 'serif' },
  { id: 'alexandria', nameAr: 'الإسكندرية المعاصر (أنيق وحديث)', nameEn: 'Alexandria Modern', fontAr: '"Alexandria", sans-serif', fontEn: '"Outfit", sans-serif' },
  { id: 'cairo', nameAr: 'القاهرة المتناسق (واضح وبارز)', nameEn: 'Cairo Bold', fontAr: '"Cairo", sans-serif', fontEn: '"Inter", sans-serif' }
]);
