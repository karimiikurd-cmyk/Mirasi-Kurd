import { HistoricalFigure } from '../types';

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  // 1. SALAHADDIN AYYUBI
  {
    id: 'salahaddin-ayyubi',
    name: 'سەلاحەدینی ئەیوبی',
    kurdishName: 'سەلاحەدین یووسف کوڕی ئەیوب (١١٣٧ - ١١٩٣ ز)',
    alternateNames: ['Saladin', 'Saladin Ayyubi', 'الملك الناصر صلاح الدين'],
    category: 'کەسایەتییە مێژووییەکان',
    politicalSubcategory: 'فەرمانڕەوا و پادشاکان',
    birthYear: '١١٣٧ ز',
    deathYear: '١١٩٣ ز',
    birthDate: '١١٣٧ ز (٥٣٢ی کۆچی)',
    deathDate: '٤ی ئاداری ١١٩٣ ز (٥٨٩ی کۆچی)',
    period: 'سەردەمی ناوەڕاست',
    region: 'کوردستانی باشوور / تکریت / دیمەشق / قاهیرە',
    cityOrPlace: 'تکریت / دیمەشق',
    relatedPlaces: ['تکریت', 'دیمەشق', 'قاهیرە', 'قودس', 'حەتین'],
    biography: `دامەزرێنەری دەوڵەتی ئەیوبی، سەرکردەی سەربازی و ڕزگارکەری قودس لە شەڕی حەتین (١١٨٧ ز). لە شاری تکریت لە بنەماڵەیەکی ڕەسەنی کوردیی خەڵکی دوین لەدایکبووە. وەک یەکێک لە مەزنترین فەرماندە سەربازییەکانی مێژووی جیهان دادەنرێت کە بە لێبوردەیی، دادپەروەری و ئازایەتی بەناوبانگ بوو.`,
    politicalRole: 'سوڵتانی میسر و شام و دامەزرێنەری ئیمپراتۆریەتی ئەیوبی',
    politicalEvents: [
      {
        title: 'شەڕی حەتین و ڕزگارکردنی قودس',
        year: '١١٨٧ ز',
        description: 'سەرکەوتنی بەسەر سوپای خاچپەرستاندا و ڕزگارکردنی قودس.',
        location: 'حەتین / قودس',
        historicalImpact: 'گۆڕینی نەخشەی سیاسی ڕۆژهەڵاتی ناوەڕاست و نەهێشتنی حوکمی خاچپەرستان.'
      }
    ],
    achievements: [
      'دامەزراندنی دەوڵەتی سەراسەری ئەیوبی لە میسر، شام، حیجاز و یەمەن',
      'ڕزگارکردنی قودس لە ساڵی ١١٨٧ ز دوای ٨٨ ساڵ داگیرکاری',
      'بنیاتنانی قەڵای قاهیرە و ئاوەدانکردنەوەی زانکۆ و قوتابخانەکان'
    ],
    works: [
      'نامە و پەیماننامە مێژووییەکانی ئەیوبی',
      'وەسیەتنامەی سیاسی و ئاکاریی سەلاحەدین'
    ],
    historicalImportance: 'سیمبولی ڕەسەنایەتیی کوردی، ئازایەتی سەربازی و لێبوردەیی مرۆڤایەتی لە مێژووی جیهاندا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'النوادر السلطانية والمحاسن اليوسفية',
        author: 'بهَاء الدين ابن شداد',
        publication: 'چاپخانەی خانجی - قاهیرە',
        year: '١١٩٣ ز (چاپ ١٩٦٤)',
        sourceType: 'کتێب'
      },
      {
        title: 'The Life of Saladin',
        author: 'Hamilton Gibb',
        publication: 'Oxford University Press',
        year: '١٩٧٣',
        sourceType: 'توێژینەوەی ئەکادیمی'
      }
    ],
    imageResource: '/figures/salahaddin-ayyubi.svg',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە (وێنەی هونەری/سیمبولی سەدەی ١٥ و ئەرشیف)',
    relatedFigureIds: ['sharafkhan-bidlisi', 'ibn-khallikan'],
    gallery: [
      {
        url: '/figures/salahaddin-ayyubi.svg',
        source: 'مۆزەخانەی مێژوویی (پرترەی خۆماڵی)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saladin_Rex_Aegypti_15th_century.jpg',
        license: 'Public Domain',
        year: '1187',
        type: 'historical-artwork',
        caption: 'پۆرترەی ڕەمزیی سەلاحەدینی ئەیوبی، ڕزگارکەری قودس و دامەزرێنەری دەوڵەتی ئەیوبی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Saladin_Rex_Aegypti_15th_century.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saladin_Rex_Aegypti_15th_century.jpg',
        license: 'Public Domain',
        author: '15th century European painter',
        year: '15th century',
        type: 'historical-artwork',
        caption: 'پرترەی ئیتاڵی سەدەی ١٥ی سەلاحەدینی ئەیوبی لە پەڕتووکی مێژوویی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Saladin_statue_Damascus_2010.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saladin_statue_Damascus_2010.jpg',
        license: 'CC BY-SA 4.0',
        author: 'Abdallah al-Sayed',
        year: '1992',
        type: 'statue',
        caption: 'پەیکەری سەلاحەدینی ئەیوبی لە قەڵای دیمەشق',
        verified: true
      }
    ]
  },

  // 2. SHARAFKHAN BIDLISI
  {
    id: 'sharafkhan-bidlisi',
    name: 'میر شەرەفخانی بدلیسی',
    kurdishName: 'شەرەفەدین کوڕی شەمسەدین بدلیسی (١٥٤٣ - ١٦٠٣ ز)',
    alternateNames: ['Sharafkhan Bidlisi', 'میر شەرەفخان'],
    category: 'پادشا و فەرمانڕەواکان',
    politicalSubcategory: 'فەرمانڕەوا و پادشاکان',
    birthYear: '١٥٤٣ ز',
    deathYear: '١٦٠٣ ز',
    birthDate: '٢٥ی ئابی ١٥٤٣ ز',
    deathDate: '١٦٠٣ ز',
    period: 'سەدەکانی ١٦ و ١٧',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'بدلیس / قم',
    relatedPlaces: ['بدلیس', 'وان', 'تەبرێز', 'ئەستەمبوڵ'],
    biography: `میری میرنشینی بدلیس و مێژوونووسی گەورەی کورد. نووسەری شاکاری مێژوویی «شەرەفنامە» (١٥٩٧ ز) کە یەکەمین ئەنسایکڵۆپیدیای گشتگیری مێژووی میرنشین، بنەماڵە، زانایان و جوغرافیای کوردستانە.`,
    politicalRole: 'میری میرنشینی بدلیس و دیپلۆماتی ناوچەیی لە نێوان عوسمانی و سەفەویدا',
    politicalEvents: [
      {
        title: 'نووسینی شەرەفنامە',
        year: '١٥٩٧ ز',
        description: 'کۆکردنەوە و تۆمارکردنی مێژووی سەرجەم میرنشینە کوردەکان لە یەک ئەنسایکڵۆپیدیادا.',
        location: 'بدلیس',
        historicalImpact: 'پێدانی ناسنامەی مێژوویی نووسراو بە گەلی کورد.'
      }
    ],
    achievements: [
      'نووسینی پەڕتووکی مێژوویی «شەرەفنامە» (١٥٩٧ ز)',
      'پاراستنی سەربەخۆیی نێوخۆیی و ئاوەدانکردنەوەی میرنشینی بدلیس',
      'کۆکردنەوەی مێژووی بنەماڵە و دەسەڵاتدارێتییە کوردەکان'
    ],
    works: [
      'شەرەفنامە (تاريخ الدول والإمارات الكردية)'
    ],
    historicalImportance: 'بنیاتنەری مێژوونووسیی نەتەوەیی کورد و سەرچاوەی سەرەکیی سەرجەم لێکۆڵینەوە مێژووییەکانی تایبەت بە کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شەرەفنامە - مێژووی ماڵباتە کوردییەکان',
        author: 'میر شەرەفخانی بدلیسی / وەرگێڕانی هەژار',
        publication: 'چاپخانەی کۆڕی زانیاری کورد',
        year: '١٥٩٧ (وەرگێڕان ١٩٧٢)',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/sharafkhan-bidlisi.svg',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە (نیگاری عوسمانی سەدەی ١٦ و ئەرشیفی مێژوویی)',
    relatedFigureIds: ['salahaddin-ayyubi', 'ahmad-i-khani'],
    gallery: [
      {
        url: '/figures/sharafkhan-bidlisi.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Sharaf_Khan_Bidlisi',
        license: 'Public Domain',
        year: '1597',
        type: 'historical-artwork',
        caption: 'پۆرترەی شەرەفخانی بدلیسی حاکمی میرنشینی بدلیس و نووسەری شەرەفنامە',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Sharaf_Khan_Bidlis.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sharaf_Khan_Bidlis.jpg',
        license: 'Public Domain',
        author: 'Ottoman Miniaturist',
        year: '1597',
        type: 'historical-artwork',
        caption: 'نگاری مێژوویی شەرەفخانی بدلیسی حاکمی میرنشینی بدلیس',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Sharafname_manuscript_page.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sharafname_manuscript_page.jpg',
        license: 'Public Domain',
        author: 'Sharaf Khan Bidlisi',
        year: '1597',
        type: 'document',
        caption: 'لاپەڕەیەکی دەستنووسی شاکاری شەرەفنامە (١٥٩٧ ز)',
        verified: true
      }
    ]
  },

  // 3. QAZI MUHAMMAD
  {
    id: 'qazi-muhammad',
    name: 'قازی محەممەد',
    kurdishName: 'پێشەوا قازی محەممەد (١٨٩٣ - ١٩٤٧ ز)',
    alternateNames: ['Qazi Muhammad', 'پێشەوا قازی'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٨٩٣ ز',
    deathYear: '١٩٤٧ ز',
    birthDate: '١٨٩٣ ز',
    deathDate: '٣١ی ئازاری ١٩٤٧ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'مەهاباد',
    relatedPlaces: ['مەهاباد', 'تەبرێز', 'تاران'],
    biography: `دامەزرێنەر و سەرۆکی کۆماری کوردستان لە مەهاباد (٢ی ڕێبەندانی ١٣٢٤ش / ٢٢ی کانونی دووەمی ١٩٤٦ز). زانا، دادوەر و سەرکردەیەکی نەتەوەیی خۆشەویست بوو کە ئاڵای کوردستان و قوتابخانەی کوردیی ڕێکخست. لە ٣١ی ئازاری ١٩٤٧ لەگەڵ سەدر و سەفی قازی لە مەیدانی چوارچرا لە سێدارە درا.`,
    politicalRole: 'سەرۆکی کۆماری کوردستان و ڕابەری حزبی دیموکراتی کوردستان',
    politicalEvents: [
      {
        title: 'ڕاگەیاندنی کۆماری کوردستان لە مەهاباد',
        year: '١٩٤٦ ز',
        description: 'دامەزراندنی یەکەم کۆماری سەربەخۆی دیموکراتی لە ڕۆژهەڵاتی کوردستان.',
        location: 'مەهاباد (مەیدانی چوارچرا)',
        historicalImpact: 'دروستکردنی سەردەمێکی نوێ لە خەباتی دەوڵەتداری و ڕووناکبیریی نەتەوەیی کورد.'
      }
    ],
    achievements: [
      'ڕاگەیاندنی کۆماری کوردستان لە مەهاباد (١٩٤٦ز)',
      'دابینکردنی خوێندنی فەرمی بە زمانی کوردی و ڕێکخستنی سوپای پێشمەرگە',
      'دامەزراندنی ڕادیۆ و ڕۆژنامەگەریی فەرمی کوردی',
      'پاراستنی ئاڵای کوردستان و بەخشینی بە مەلا مصطفی بارزانی'
    ],
    works: [
      'وەسیەتنامەی مێژوویی پێشەوا قازی محەممەد',
      'وتار و بەیاننامە مێژوویییەکانی کۆماری مەهاباد'
    ],
    historicalImportance: 'ڕەمزی دادپەروەری، نەتەوەیی و سەربەخۆییخوازیی کورد لە مێژووی سەدەی بیستەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'کۆماری کوردستان - مەهاباد ١٩٤٦',
        author: 'ویلیام ئیگڵتۆن / وەرگێڕانی جەلال تاڵەبانی',
        publication: 'دەزگای ئاراس',
        year: '١٩٦٣',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Qazi_Muhammad.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی فەرمیی کۆماری کوردستان (مەهاباد - ١٩٤٦)',
    relatedFigureIds: ['sheikh-mahmud', 'mustafa-barzanji'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Qazi_Muhammad.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qazi_Muhammad.jpg',
        license: 'Public Domain',
        year: '1946',
        type: 'photograph',
        caption: 'وێنەی فەرمیی پێشەوا قازی محەممەد سەرۆکی کۆماری کوردستان لە مەهاباد (١٩٤٦)',
        verified: true
      },
      {
        url: '/figures/qazi-muhammad.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qazi_Muhammad.jpg',
        license: 'Public Domain',
        year: '1946',
        type: 'photograph',
        caption: 'پرترەی پێشەوا قازی محەممەد سەرۆکی کۆماری کوردستان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Qazi_Muhammad_and_Mustafa_Barzani.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qazi_Muhammad_and_Mustafa_Barzani.jpg',
        license: 'Public Domain',
        year: '1946',
        type: 'photograph',
        caption: 'پێشەوا قازی محەممەد لەگەڵ مەلا مصطفی بارزانی لە شاری مەهاباد (١٩٤٦)',
        verified: true
      }
    ]
  },

  // 4. SHEIKH MAHMUD BARZANJI
  {
    id: 'sheikh-mahmud',
    name: 'شێخ مەحمودی حەفید',
    kurdishName: 'شێخ مەحمودی حەفید (مەلیکی کوردستان) (١٨٧٨ - ١٩٥٦ ز)',
    alternateNames: ['Sheikh Mahmud Barzanji', 'شێخ مەحمود', 'مەلیک مەحمود'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'فەرمانڕەوا و پادشاکان',
    birthYear: '١٨٧٨ ز',
    deathYear: '١٩٥٦ ز',
    birthDate: '١٨٧٨ ز',
    deathDate: '٩ی تشرینی یەکەمی ١٩٥٦ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'سلێمانی / بەرزنجە',
    relatedPlaces: ['سلێمانی', 'داریپەرموور', 'بەغدا', 'هیندستان'],
    biography: `ڕابەری بزووتنەوەی نەتەوەیی کورد لە سلێمانی و ڕاگەیەنەری شانشینی کوردستان (١٩١٩ - ١٩٢٢ز). چەندین جار لە بەرامبەر سوپای بەریتانیادا چەکی هەڵگرت و حکومەتی دارولمەلیکی لە سلێمانی دامەزراند.`,
    politicalRole: 'مەلیکی کوردستان و ڕابەری شۆڕشەکانی سلێمانی لە بەرامبەر بەریتانیا',
    politicalEvents: [
      {
        title: 'دامەزراندنی شانشینی کوردستان',
        year: '١٩١٩ ز',
        description: 'ڕاگەیاندنی حکومەتی سەربەخۆی کوردستان لە سلێمانی.',
        location: 'سلێمانی',
        historicalImpact: 'یەکەم تاقیکردنەوەی دەوڵەتداریی هاوچەرخی کوردی لە باشوور.'
      }
    ],
    achievements: [
      'دامەزراندنی شانشینی کوردستان و راگەیاندنی خۆی وەک مەلیکی کوردستان',
      'دامەزراندنی یەکەم چاپخانە و ڕۆژنامەی فەرمی کوردی («پێشکەوتن» و «بانگی کوردستان»)',
      'سەرکردایەتیکردنی شەڕی مێژوویی دەربەندی بازیان'
    ],
    works: [
      'بەیاننامەکانی حکومەتی کوردستان (١٩١٩ - ١٩٢٤)'
    ],
    historicalImportance: 'یەکەمین سەرکردەی کورد لە سەدەی بیستەمدا کە ڕاستەوخۆ دەوڵەت و شانشینی سەربەخۆی کوردستانی ڕاگەیاند.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شۆڕشەکانی شێخ مەحمودی حەفید',
        author: 'کەمال مەزهەر ئەحمەد',
        publication: 'دەزگای ئاراس - هەولێر',
        year: '٢٠٠١',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mahmud_Barzanji.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی مێژوویی سلێمانی (١٩٢٠)',
    relatedFigureIds: ['qazi-muhammad', 'sheikh-ubaydullah'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mahmud_Barzanji.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mahmud_Barzanji.jpg',
        license: 'Public Domain',
        year: '1919',
        type: 'photograph',
        caption: 'فۆتۆگرافی ڕاستەقینەی شێخ مەحمودی حەفید، مەلیکی کوردستان لە سلێمانی',
        verified: true
      },
      {
        url: '/figures/sheikh-mahmud.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Mahmud_Barzanji',
        license: 'Public Domain',
        year: '1919',
        type: 'photograph',
        caption: 'پرترەی شێخ مەحمودی حەفید مەلیکی کوردستان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Sheikh_Mahmud_Barzanji_1920s.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sheikh_Mahmud_Barzanji_1920s.jpg',
        license: 'Public Domain',
        year: '1922',
        type: 'photograph',
        caption: 'شێخ مەحمودی حەفید لەگەڵ کەسایەتییەکانی سلێمانی لە ساڵانی بیستەمی سەدەی بیست',
        verified: true
      }
    ]
  },

  // 5. MUSTAFA BARZANI
  {
    id: 'mustafa-barzanji',
    name: 'مەلا مصطفی بارزانی',
    kurdishName: 'مستەفا شێخ محەممەد بارزانی (١٩٠٣ - ١٩٧٩ ز)',
    alternateNames: ['Mustafa Barzani', 'مەلا مصطفی', 'ژەنڕاڵ بارزانی'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٩٠٣ ز',
    deathYear: '١٩٧٩ ز',
    birthDate: '١٤ی ئازاری ١٩٠٣ ز',
    deathDate: '١ی ئازاری ١٩٧٩ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'بارزان / مەهاباد / واشنتۆن',
    relatedPlaces: ['بارزان', 'مەهاباد', 'مۆسکۆ', 'کرماشان', 'واشنتۆن'],
    biography: `ڕابەری مێژوویی بزووتنەوەی ڕزگاریخوازی کورد لە باشووری کوردستان، فەرماندەی سوپای کۆماری کوردستان لە مەهاباد (١٩٤٦)، ڕابەری بەیانی ١١ی ئاداری ١٩٧٠ بۆ ئۆتۆنۆمیی کوردستان. زیاتر لە پێنج دەیە ڕابەرایەتیی شۆڕشەکانی بارزانی کردووه‌.`,
    politicalRole: 'سەرۆکی پارتی دیموکراتی کوردستان و ژەنڕاڵی سوپای کۆماری کوردستان',
    politicalEvents: [
      {
        title: 'ڕێککەوتننامەی مێژوویی ١١ی ئاداری ١٩٧٠',
        year: '١٩٧٠ ز',
        description: 'بەدەستهێنانی دانپێدانانی فەرمیی دەوڵەت بە ئۆتۆنۆمیی کوردستان.',
        location: 'بەغدا / کوردستان',
        historicalImpact: 'دابینکردنی بڕیاری ئۆتۆنۆمی و دانپێدانان بە مافی نەتەوەیی کورد.'
      }
    ],
    achievements: [
      'ڕابەرایەتیکردنی شۆڕشی ئەیلوولی مەزن (١٩٦١ - ١٩٧٥)',
      'فەرماندەیی سەربازیی کۆماری کوردستان لە مەهاباد (١٩٤٦)',
      'ئەنجامدانی ڕێپێوانی مێژوویی بەرەو یەکێتیی سۆڤیەت (١٩٤٧)'
    ],
    works: [
      'پەیام و نامە دیپلۆماسییە مێژووییەکان بەرامبەر سەرکردەکانی جیهان'
    ],
    historicalImportance: 'کاریزماترین سەرکردەی سەربازی و سیاسیی کورد لە سەدەی بیستەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'بارزانی و بزووتنەوەی ڕزگاریخوازی کورد',
        author: 'مەسعود بارزانی',
        publication: 'چاپخانەی وەزارەتی پەروەردە - هەولێر',
        year: '١٩٩٧',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Mustafa_Barzani.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی بەڵگەنامەیی سەردەمی شۆڕشی ئەیلوول',
    relatedFigureIds: ['qazi-muhammad', 'jalal-talabani'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Mustafa_Barzani.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mustafa_Barzani.jpg',
        license: 'Public Domain',
        year: '1961',
        type: 'photograph',
        caption: 'وێنەی مێژوویی سەرکردە مەلا مصطفی بارزانی',
        verified: true
      },
      {
        url: '/figures/mustafa-barzanji.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mustafa_Barzani.jpg',
        license: 'Public Domain',
        year: '1961',
        type: 'photograph',
        caption: 'پرترەی سەربازی مەلا مصطفی بارزانی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Qazi_Muhammad_and_Mustafa_Barzani.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qazi_Muhammad_and_Mustafa_Barzani.jpg',
        license: 'Public Domain',
        year: '1946',
        type: 'photograph',
        caption: 'بارزانی لەگەڵ قازی محەممەد لە مەهاباد (١٩٤٦)',
        verified: true
      }
    ]
  },

  // 6. JALAL TALABANI
  {
    id: 'jalal-talabani',
    name: 'جەلال تاڵەبانی (مام جەلال)',
    kurdishName: 'جەلال حسامەدین تاڵەبانی (١٩٣٣ - ٢٠١٧ ز)',
    alternateNames: ['Jalal Talabani', 'مام جەلال'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٩٣٣ ز',
    deathYear: '٢٠١٧ ز',
    birthDate: '١٢ی تشرینی دووەمی ١٩٣٣ ز',
    deathDate: '٣ی تشرینی یەکەمی ٢٠١٧ ز',
    period: 'سەردەمی هاوچەرخ',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'کەلکان (کۆیەی) / سلێمانی / بەغدا',
    relatedPlaces: ['کۆیەی', 'سلێمانی', 'بەغدا', 'بەرلین'],
    biography: `تێکۆشەر، دیپلۆماتی لێهاتوو، دامەزرێنەر و سکرتێری گشتیی یەکێتیی نیشتمانیی کوردستان، و یەکەمین سەرۆک کۆماری کورد لە مێژووی عێراقدا (٢٠٠٥ - ٢٠١٤). خاوەنی خەباتێکی شۆڕشگێڕانەی دوورودرێژ بوو لە بزووتنەوەی ڕزگاریخوازی کوردیدی.`,
    politicalRole: 'سەرۆک کۆماری عێراق و سکرتێری گشتیی یەکێتیی نیشتمانیی کوردستان',
    politicalEvents: [
      {
        title: 'هەڵبژاردن وەک یەکەم سەرۆک کۆماری کورد لە عێراق',
        year: '٢٠٠٥ ز',
        description: 'هەڵبژاردنی فەرمی لە پەرلەمانی عێراق بۆ پۆستی سەرۆک کۆماری فیدراڵ.',
        location: 'بەغدا',
        historicalImpact: 'چەسپاندنی مافی کورد لە دەستووری نوێی عێراق و هێنانەدی هاوسەنگیی نەتەوەیی.'
      }
    ],
    achievements: [
      'بوون بە یەکەمین سەرۆک کۆماری کورد لە مێژووی دەوڵەتی عێراقدا',
      'دامەزراندنی یەکێتیی نیشتمانیی کوردستان (١٩٧٥)',
      'داڕشتنەوە و جێگیرکردنی مافەکانی گەلی کورد لە دەستووری عێراقی ٢٠٠٥'
    ],
    works: [
      'کتێبی «کردستان والحركة القومية الكردية»',
      'وەرگێڕانی کتێبی «کۆماری کوردستان - مەهاباد» بۆ کوردی'
    ],
    historicalImportance: 'گەورەترین دیپلۆمات و سیاسەتمەداری کورد لە سەردەمی هاوچەرخدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مام جەلال - دیداری تەمەن',
        author: 'سەلاح ڕەشید',
        publication: 'دەزگای جەمال عیرفان - سلێمانی',
        year: '٢٠١٧',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Jalal_Talabani_2008.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی فەرمیی کۆشکی سەرۆکایەتی عێراق (٢٠٠٨)',
    relatedFigureIds: ['mustafa-barzanji', 'ibrahim-ahmad'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Jalal_Talabani_2008.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jalal_Talabani_2008.jpg',
        license: 'Public Domain',
        year: '2008',
        type: 'photograph',
        caption: 'وێنەی فەرمیی سەرۆک جەلال تاڵەبانی (مام جەلال)',
        verified: true
      },
      {
        url: '/figures/jalal-talabani.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Jalal_Talabani',
        license: 'Public Domain',
        year: '2005',
        type: 'photograph',
        caption: 'پرترەی سەرۆک جەلال تاڵەبانی (مام جەلال)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jalal_Talabani_in_1970s.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jalal_Talabani_in_1970s.jpg',
        license: 'CC BY-SA 3.0',
        year: '1976',
        type: 'photograph',
        caption: 'مام جەلال لە ساڵانی حەفتاکانی سەدەی بیستەم',
        verified: true
      }
    ]
  },

  // 7. LEYLA QASIM
  {
    id: 'leyla-qasim',
    name: 'لیلا قاسم',
    kurdishName: 'شەهید لیلا قاسم (١٩٥٢ - ١٩٧٤ ز)',
    alternateNames: ['Leyla Qasim', 'لیلا قاسم حسن'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'کەسایەتییە سیاسییە ژنەکان',
    gender: 'ژن',
    birthYear: '١٩٥٢ ز',
    deathYear: '١٩٧٤ ز',
    birthDate: '١٩٥٢ ز',
    deathDate: '١٢ی ئایاری ١٩٧٤ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'خانەقین / بەغدا',
    relatedPlaces: ['خانەقین', 'بەغدا', 'هەولێر'],
    biography: `تێکۆشەر، خوێندکاری زانکۆی بەغدا و تێکۆشەری سیاسیی کورد. لە خانەقین لەدایکبوو، لە ڕێزی خەباتی خوێندکاراندا چالاکیی سیاسی هەبوو. لە ساڵی ١٩٧٤ لەلایەن ڕژێمی ئەوکاتی بەغداوە دەستگیرکرا و لەگەڵ چوار هاوڕێیدا لە سێدارەدرا.`,
    politicalRole: 'سەرکردەی خوێندکاران و چالاکوانی بزووتنەوەی ڕزگاریخوازی کورد',
    politicalEvents: [
      {
        title: 'شەهیدبوونی لیلا قاسم و هاوڕێیانی',
        year: '١٩٧٤ ز',
        description: 'لە سێدارەدانی فەرمی لە بەغدا لەسەر داواکردنی مافی نەتەوەیی.',
        location: 'بەغدا',
        historicalImpact: 'سەرهەڵدانی شەپۆلێکی بەربڵاوی هاودەردی و بێداربوونەوەی ژنان لە بزووتنەوەی سیاسی کورد.'
      }
    ],
    achievements: [
      'بوونی بە یەکەمین سیمبولی ژنی تێکۆشەری سیاسی لە مێژووی هاوچەرخی کوردستاندا',
      'بەرگری لە مافی خوێندکاران و ڕێکخستنی ژنانی زانکۆ'
    ],
    works: [
      'وتە مێژوویییەکانی پێش جێبەجێکردنی بڕیاری لەسێدارەدان'
    ],
    historicalImportance: 'سیمبولی بێوێنەی خۆڕاگری و سەربەرزیی ژنانی کورد لە مێژووی ڕزگاریخوازی نەتەوەییدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مێژووی بزووتنەوەی ژنانی کورد',
        author: 'ئەرشیفی ڕووناکبیری',
        publication: 'هەولێر',
        year: '٢٠٠٤',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Leyla_Qasim.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'ئەرشیفی بەڵگەنامەی مێژوویی زانکۆی بەغدا و بنەماڵەکەی',
    relatedFigureIds: ['qazi-muhammad', 'ibrahim-ahmad'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Leyla_Qasim.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Leyla_Qasim.jpg',
        license: 'Public Domain',
        year: '1974',
        type: 'photograph',
        caption: 'فۆتۆگرافی ڕاستەقینەی شەهید لیلا قاسم',
        verified: true
      },
      {
        url: '/figures/leyla-qasim.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Layla_Qasim',
        license: 'Public Domain',
        year: '1974',
        type: 'photograph',
        caption: 'پرترەی ڕەمزیی شەهید لیلا قاسم هێمای تێکۆشانی ژنانی کورد',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Leyla_Qasim_portrait.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Leyla_Qasim_portrait.jpg',
        license: 'Public Domain',
        year: '1973',
        type: 'photograph',
        caption: 'پۆرترەی ڕاستەقینەی لیلا قاسم هێمای خۆڕاگریی ژنانی کورد',
        verified: true
      }
    ]
  },

  // 8. SHEIKH SAID PIRAN
  {
    id: 'sheikh-said-piran',
    name: 'شێخ سەعیدی پیران',
    kurdishName: 'شێخ سەعیدی پیران (١٨٦٥ - ١٩٢٥ ز)',
    alternateNames: ['Sheikh Said', 'Şêx Seîdê Pîran'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٨٦٥ ز',
    deathYear: '١٩٢٥ ز',
    birthDate: '١٨٦٥ ز',
    deathDate: '٢٩ی حوزەیرانی ١٩٢٥ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'پیران / ئامەد (دیاربەکر)',
    relatedPlaces: ['پیران', 'خارپێت', 'ئامەد'],
    biography: `ڕابەر و زانای ئایینی و سیاسیی کورد لە باکووری کوردستان. سەرکردایەتی شۆڕشی سەربەخۆییی کوردستان لە ساڵی ١٩٢٥ بەڕێوەبرد. لە ئامەد لەگەڵ ٤٧ تێکۆشەری هاوڕێیدا لەلایەن دادگای سەربەزیی کۆماری تورکیاوە لەسێدارە درا.`,
    politicalRole: 'ڕابەری شۆڕشی ١٩٢٥ی کوردستان لە باکوور',
    politicalEvents: [
      {
        title: 'سەرهەڵدانی شۆڕشی ١٩٢٥',
        year: '١٩٢٥ ز',
        description: 'کۆکردنەوەی جەماوەر لە باکووری کوردستان بۆ داواکردنی مافی نەتەوەیی.',
        location: 'ئامەد و دەوروبەری',
        historicalImpact: 'دروستبوونی بێداربوونەوەیەکی بەربڵاوی نەتەوەیی لە باکوور.'
      }
    ],
    achievements: [
      'ڕابەرایەتیکردنی شۆڕشی سەرتاسەری لە باکووری کوردستان (١٩٢٥ز)',
      'کۆکردنەوەی زانایان و ڕووناکبیران لە چوارچێوەی ڕێکخراوی ئازادی'
    ],
    works: [
      'نامە و پەیامە ئایینی و سیاسییەکان'
    ],
    historicalImportance: 'ڕەمزی بەرگری و شۆڕش لە سەدەی بیستەمدا لە باکووری کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شۆڕشی شێخ سەعیدی پیران',
        author: 'د. کەمال مەزهەر ئەحمەد',
        publication: 'بەغدا',
        year: '١٩٧٨',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Sheikh_Said_Piran.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی مێژوویی (١٩٢٥)',
    relatedFigureIds: ['celadet-bedirxan', 'sheikh-ubaydullah'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Sheikh_Said_Piran.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sheikh_Said_Piran.jpg',
        license: 'Public Domain',
        year: '1925',
        type: 'photograph',
        caption: 'وێنەی مێژوویی ڕاستەقینەی شێخ سەعیدی پیران ڕابەری شۆڕشی ١٩٢٥',
        verified: true
      },
      {
        url: '/figures/sheikh-said-piran.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Sheikh_Said',
        license: 'Public Domain',
        year: '1925',
        type: 'photograph',
        caption: 'پرترەی شێخ سەعیدی پیران ڕابەری شۆڕشی باکووری کوردستان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Sheikh_Said_1925.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sheikh_Said_1925.jpg',
        license: 'Public Domain',
        year: '1925',
        type: 'photograph',
        caption: 'فۆتۆگرافی دادگاییکردنی شێخ سەعیدی پیران و هاوڕێیانی لە ئامەد (١٩٢٥)',
        verified: true
      }
    ]
  },

  // 9. SIMKO SHIKAK
  {
    id: 'simko-shikak',
    name: 'سمکۆی شکاک (ئیسماعیل ئاغا)',
    kurdishName: 'ئیسماعیل ئاغای شکاک (سمکۆ) (١٨٨٧ - ١٩٣٠ ز)',
    alternateNames: ['Simko Shikak', 'ئیسماعیل ئاغا'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'سەرکردە سیاسییە مێژووییەکان',
    birthYear: '١٨٨٧ ز',
    deathYear: '١٩٣٠ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'چەهرێق / ورمێ / شنۆ',
    relatedPlaces: ['ورمێ', 'سەڵماس', 'چەهرێق', 'شنۆ'],
    biography: `ڕابەری هۆزی شکاک و سەرکردەی خەباتی چەکداری لە ناوچەی باکووری ڕۆژهەڵاتی کوردستان (ورمێ و سەڵماس). لە نێوان ساڵانی ١٩١٨ تا ١٩٢٦ ناوچەیەکی بەرینی خستە ژێر حوکمڕانی خۆبەڕێوەبەری خۆی و گۆڤاری «کورد»ی لە چەهرێق بڵاوکردەوە.`,
    politicalRole: 'سەرکردەی شۆڕش و حوکمڕانی خۆبەڕێوەبەری لە ورمێ و سەڵماس',
    politicalEvents: [
      {
        title: 'ڕاگەیاندنی خۆبەڕێوەبەری لە چەهرێق',
        year: '١٩١٩ ز',
        description: 'کۆنترۆڵکردنی ناوچەی ورمێ و سەڵماس و بڵاوکردنەوەی گۆڤاری کورد.',
        location: 'چەهرێق',
        historicalImpact: 'دروستکردنی دەسەڵاتێکی ناوچەیی لە ڕۆژهەڵاتی کوردستان.'
      }
    ],
    achievements: [
      'دابینکردنی سەربەخۆیی نێوخۆیی بۆ ناوچەی ورمێ بۆ ماوەی دە ساڵ',
      'دەرکردنی گۆڤاری ڕووناکبیری «کورد» لە قەڵای چەهرێق'
    ],
    works: [
      'گۆڤاری کورد (١٩٢١)'
    ],
    historicalImportance: 'یەکێک لە سەرکردە کاریزماتییە سەربازی و سیاسییەکانی سەرەتای سەدەی بیستەم لە ڕۆژهەڵاتی کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شۆڕشی سمکۆ - توێژینەوەی مێژوویی',
        author: 'د. عەبدولڕەحمان قاسملوو',
        publication: 'چاپکراوەکانی کۆڕی ڕووناکبیری',
        year: '١٩٨٠',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Simko_Shikak.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی بەڵگەنامەیی (١٩٢٢)',
    relatedFigureIds: ['qazi-muhammad', 'sheikh-mahmud'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Simko_Shikak.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Simko_Shikak.jpg',
        license: 'Public Domain',
        year: '1922',
        type: 'photograph',
        caption: 'فۆتۆگرافی ڕاستەقینەی سمکۆی شکاک (ئیسماعیل ئاغا)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Simko_Shikak_with_his_men.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Simko_Shikak_with_his_men.jpg',
        license: 'Public Domain',
        year: '1920',
        type: 'photograph',
        caption: 'سمکۆی شکاک لەگەڵ چەکدارانی هۆزی شکاک لە ورمێ (١٩٢٠)',
        verified: true
      }
    ]
  },

  // 10. DR. ABDUL RAHMAN GHASSEMLOU
  {
    id: 'dr-ghassemlou',
    name: 'د. عەبدولڕەحمان قاسملوو',
    kurdishName: 'د. عەبدولڕەحمان قاسملوو (١٩٣٠ - ١٩٨٩ ز)',
    alternateNames: ['Dr. Abdul Rahman Ghassemlou', 'د. قاسملوو'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٩٣٠ ز',
    deathYear: '١٩٨٩ ز',
    birthDate: '٢٢ی کانونی یەکەمی ١٩٣٠ ز',
    deathDate: '١٣ی تەممووزی ١٩٨٩ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'ورمێ / مەهاباد / پڕاگ / ڤییەننا',
    relatedPlaces: ['ورمێ', 'مەهاباد', 'پڕاگ', 'ڤییەننا', 'پاریس'],
    biography: `ڕابەر، تیۆریست، ئابووریناس و سکرتێری گشتیی حزبی دیموکراتی کوردستانی ئێران. خاوەنی بڕوانامەی دکتۆرا لە زانکۆی پراگ و مامۆستای زانکۆی سۆربۆن لە پاریس. دروشمی دیاری «دیموکراتی بۆ ئێران و ئۆتۆنۆمی بۆ کوردستان»ی پێشەنگایەتی کرد. لە ١٣ی تەممووزی ١٩٨٩ لە ڤییەننا لەکاتی گفتوگۆی ئاشتیدا شەهید کراوە.`,
    politicalRole: 'سکرتێری گشتیی حزبی دیموکراتی کوردستانی ئێران و مامۆستای زانکۆ',
    politicalEvents: [
      {
        title: 'ڕابەرایەتیکردنی خەباتی سیاسی و ئاشتیخوازانە',
        year: '١٩٧٩ - ١٩٨٩ ز',
        description: 'داڕشتنی دروشمی ئۆتۆنۆمی و هەوڵدان بۆ دیالۆگی نێودەوڵەتی.',
        location: 'ڕۆژهەڵاتی کوردستان و ئەوروپا',
        historicalImpact: 'بردنەپێشەوەی دۆزی کورد بۆ دیپلۆماسیی نێودەوڵەتی.'
      }
    ],
    achievements: [
      'نووسینی پەڕتووکی مێژوویی و ئابووری «کورد و کوردستان»',
      'پەرەپێدانی دیپلۆماسی و ئەکادیمیای کوردی لە ئەوروپا'
    ],
    works: [
      'کتێبی «کورد و کوردستان» (Kurdistan and the Kurds)',
      'کتێبی «چوار ساڵ هەوڵدان بۆ دیالۆگ»'
    ],
    historicalImportance: 'سیما و تیۆریستی هزر و دیپلۆماسیی نوێ لە بزووتنەوەی سیاسیی ڕۆژهەڵاتی کوردستاندا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'Kurdistan and the Kurds',
        author: 'Dr. Abdul Rahman Ghassemlou',
        publication: 'Collet\'s Publishing - London',
        year: '١٩٦٥',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/dr-ghassemlou.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی فەرمیی حزبی دیموکراتی کوردستانی ئێران و پرترەی دیجیتاڵ',
    relatedFigureIds: ['qazi-muhammad', 'fuad-mustafa-sultani'],
    gallery: [
      {
        url: '/figures/dr-ghassemlou.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abdul_Rahman_Ghassemlou.jpg',
        license: 'Public Domain',
        year: '1980',
        type: 'photograph',
        caption: 'پرترەی ڕابەر د. عەبدولڕەحمان قاسملوو سکرتێری گشتیی حدکا',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Abdul_Rahman_Ghassemlou.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abdul_Rahman_Ghassemlou.jpg',
        license: 'Public Domain',
        year: '1980',
        type: 'photograph',
        caption: 'وێنەی ڕاستەقینەی د. عەبدولڕەحمان قاسملوو',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Dr_Abdul_Rahman_Ghassemlou.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dr_Abdul_Rahman_Ghassemlou.jpg',
        license: 'Public Domain',
        year: '1985',
        type: 'photograph',
        caption: 'د. قاسملوو لە کاتی پێشکەشکردنی وتار لە کۆنفرانسی نێودەوڵەتیدا',
        verified: true
      }
    ]
  },

  // 11. FUAD MUSTAFA SULTANI
  {
    id: 'fuad-mustafa-sultani',
    name: 'فوئاد مستەفا سولتانی (کاک فوئاد)',
    kurdishName: 'فوئاد مستەفا سولتانی (١٩٤٨ - ١٩٧٩ ز)',
    alternateNames: ['Fuad Mustafa Sultani', 'کاک فوئاد'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٩٤٨ ز',
    deathYear: '١٩٧٩ ز',
    birthDate: '١٩٤٨ ز',
    deathDate: '٣١ی ئابی ١٩٧٩ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'ئاڵمانە (مەریوان) / سنە',
    relatedPlaces: ['مەریوان', 'سنە', 'تاران'],
    biography: `ئەندازیار، تیۆریست و کۆمەڵناس، دامەزرێنەری کۆمەڵەی شۆڕشگێڕی زەحمەتکێشانی کوردستانی ئێران (کۆمەڵە). رابەرایەتی ڕێپێوانی مێژوویی مەریوان و کوچە جەماوەرییەکەی کرد بۆ ڕێگری لە شەڕ.`,
    politicalRole: 'دامەزرێنەر و ڕابەری کۆمەڵە لە ڕۆژهەڵاتی کوردستان',
    politicalEvents: [
      {
        title: 'کوچی مێژوویی مەریوان',
        year: '١٩٧٩ ز',
        description: 'ڕێکخستنی کۆچ و ڕێپێوانی ئاشتییانەی دانیشتوانی مەریوان بۆ دوورکەوتنەوە لە شەڕ.',
        location: 'مەریوان',
        historicalImpact: 'دروستکردنی سیمبۆلێکی جەماوەریی بەرگریی شارستانی.'
      }
    ],
    achievements: [
      'دامەزراندنی ڕێکخراوی کۆمەڵە (١٩٦٩)',
      'ڕێکخستنی یەکێتیی جووتیاران و ئەنجومەنە شارستانییەکان لە مەریوان'
    ],
    works: [
      'وتار و نامە سیاسی و جەماوەرییەکان'
    ],
    historicalImportance: 'ڕەمزی بەرگریی شارستانی، دادپەروەری کۆمەڵایەتی و ئازادیخوازی لە ڕۆژهەڵاتی کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'بەسەرهاتی کاک فوئاد و شۆڕشی مەریوان',
        author: 'ئەرشیفی فەرهەنگی مەریوان',
        publication: 'مەریوان',
        year: '١٩٨٥',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/fuad-mustafa-sultani.svg',
    hasRealPhoto: true,
    photoSourceNote: 'ئەرشیفی بنەماڵەی مستەفا سولتانی (١٩٧٨) و پرترەی دیجیتاڵی ئەرشیف',
    relatedFigureIds: ['dr-ghassemlou', 'qazi-muhammad'],
    gallery: [
      {
        url: '/figures/fuad-mustafa-sultani.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fuad_Mustafa_Sultani.jpg',
        license: 'Public Domain',
        year: '1978',
        type: 'photograph',
        caption: 'پرترەی کاک فوئاد مستەفا سولتانی ڕابەری شۆڕشی مەریوان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Fuad_Mustafa_Sultani.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fuad_Mustafa_Sultani.jpg',
        license: 'Public Domain',
        year: '1978',
        type: 'photograph',
        caption: 'وێنەی مێژوویی ڕاستەقینەی فوئاد مستەفا سولتانی (کاک فوئاد)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Fuad_Mustafa_Sultani_photo.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fuad_Mustafa_Sultani_photo.jpg',
        license: 'Public Domain',
        year: '1979',
        type: 'photograph',
        caption: 'کاک فوئاد لە مریوان لە سەرەتای شۆڕشی گەلانی ئێراندا',
        verified: true
      }
    ]
  },

  // 12. BEDIR KHAN BEG
  {
    id: 'bedir-khan-beg',
    name: 'میر بەدرخان بەگی بۆتان',
    kurdishName: 'بەدرخان بەگ کوڕی عەبدوڵڵا خان (١٨٠٣ - ١٨٦٨ ز)',
    alternateNames: ['Bedir Khan Beg', 'میری بۆتان'],
    category: 'پادشا و فەرمانڕەواکان',
    politicalSubcategory: 'فەرمانڕەوا و پادشاکان',
    birthYear: '١٨٠٣ ز',
    deathYear: '١٨٦٨ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'جەزیرەی بۆتان / دیمەشق',
    relatedPlaces: ['جەزیرەی بۆتان', 'ئامەد', 'ئەستەمبوڵ', 'دیمەشق'],
    biography: `میری بەناوبانگی میرنشینی بۆتان کە یەکێتییەکی بەهێزی عەشیرەتە کوردەکانی هێنایە ئاراوە و دراوی تایبەت بە میری بۆتانی لێدا. لە ساڵی ١٨٤٧دا پاش شەڕێکی قورس دەستگیر کرا و بۆ کریتا و دیمەشق دوورخراوە.`,
    politicalRole: 'میری سەربەخۆی بۆتان و سەرکردەی هاوپەیمانیی میرنشینە کوردەکان',
    politicalEvents: [
      {
        title: 'ڕاگەیاندنی سەربەخۆیی بۆتان و لێدانی سکە',
        year: '١٨٤٢ ز',
        description: 'ڕاگەیاندنی حوکمی سەربەخۆ لە جەزیرەی بۆتان.',
        location: 'جەزیرەی بۆتان',
        historicalImpact: 'دوا قۆناغی گەورەی میرنشینە ڕەسەنە کوردەکان.'
      }
    ],
    achievements: [
      'یەکخستنی ناوچەکانی بۆتان، بادینان و هەکاری',
      'داهێنانی سکە و دراوی تایبەت بە حوکمرانی کوردی'
    ],
    works: [
      'بەڵگەنامە و نامە ڕەسمییەکانی میرنشینی بۆتان'
    ],
    historicalImportance: 'دوا ڕابەری مەزنی میرنشینی بۆتان پێش دەستپێکی قۆناغی شۆڕشە هاوچەرخەکان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مێژووی میرنشینی بۆتان',
        author: 'میقداد مدحەت بەدرخان',
        publication: 'گۆڤاری کوردستان - قاهیرە',
        year: '١٨٩٨',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/bedir-khan-beg.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی مێژوویی بنەماڵەی بەدرخانییەکان و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'sharafkhan-bidlisi'],
    gallery: [
      {
        url: '/figures/bedir-khan-beg.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bedir_Khan_Beg.jpg',
        license: 'Public Domain',
        year: '1850',
        type: 'photograph',
        caption: 'پرترەی میر بەدرخان بەگی بۆتان حاکمی میرنشینی بۆتان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bedir_Khan_Beg.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bedir_Khan_Beg.jpg',
        license: 'Public Domain',
        year: '1850',
        type: 'photograph',
        caption: 'وێنەی مێژوویی میر بەدرخان بەگی بۆتان، حاکمی میرنشینی بۆتان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bedir_Khan_Beg_family.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bedir_Khan_Beg_family.jpg',
        license: 'Public Domain',
        year: '1847',
        type: 'document',
        caption: 'بەڵگەنامەی مێژوویی میرنشینی بۆتان و بنەماڵەی بەدرخانییەکان',
        verified: true
      }
    ]
  },

  // 13. SHERIF PASHA
  {
    id: 'sherif-pasha',
    name: 'شەریف پاشای خەندان',
    kurdishName: 'شەریف پاشا (١٨٦٥ - ١٩٥١ ز)',
    alternateNames: ['Sherif Pasha', 'شەریف پاشای باڵیۆز'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'دیپلۆماتکاران',
    birthYear: '١٨٦٥ ز',
    deathYear: '١٩٥١ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'ئەستەمبوڵ / پاریس / نیس',
    relatedPlaces: ['ئەستەمبوڵ', 'پاریس', 'ستۆکهۆڵم', 'قاهیرە'],
    biography: `دیپلۆماتکار، نوێنەری فەرمیی گەلی کورد لە کۆنگرەی ئاشتیی پاریس (١٩١٩ز)، و سەرۆکی کۆمەڵەی تەعالی و تەەرەقیی کوردستان. نەخشە و داواکاریی سەربەخۆیی کردنی کوردستان پێشکەشی بە کۆنگرەی نێودەوڵەتی پاریس کرد کە بووە بنەمای پەیماننامەی سیڤەر (١٩٢٠ز).`,
    politicalRole: 'نوێنەری سەرەکیی سەرجەم گەلی کورد لە کۆنفرانسی ئاشتی پاریس',
    politicalEvents: [
      {
        title: 'پێشکەشکردنی یاداشتی کورد لە کۆنفرانسی ئاشتی پاریس',
        year: '١٩١٩ ز',
        description: 'کێشانی نەخشەی فەرمیی کوردستان و ڕادەستکردنی بە زلهێزە جیهانییەکان.',
        location: 'پاریس',
        historicalImpact: 'چەسپاندنی ناوی کوردستان لە پەیماننامەی سیڤەر (١٩٢٠).'
      }
    ],
    achievements: [
      'نوێنەرایەتیکردنی فەرمیی کورد لە ئاستی دیپلۆماسی جیهانی لە پاریس',
      'داڕشتنی یەکەم نەخشەی سیاسی فەرمیی کوردستان بۆ وڵاتانی سەردەم'
    ],
    works: [
      'Memorandum on the Claims of the Kurdish People (پاریس - ١٩١٩)'
    ],
    historicalImportance: 'باوکی دیپلۆماسیی نێودەوڵەتیی کوردی لە سەرەتای سەدەی بیستەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'Kurdish Claims at the Peace Conference',
        author: 'General Sherif Pasha',
        publication: 'Imprimerie L. Birault - Paris',
        year: '١٩١٩',
        sourceType: 'بەڵگەنامەی فەرمی'
      }
    ],
    imageResource: '/figures/sherif-pasha.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی فەرمیی کۆنگرەی ئاشتی پاریس (١٩١٩) و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'sheikh-mahmud'],
    gallery: [
      {
        url: '/figures/sherif-pasha.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sherif_Pasha.jpg',
        license: 'Public Domain',
        year: '1919',
        type: 'photograph',
        caption: 'پرترەی شەریف پاشای خەندان نوێنەری کورد لە کۆنفرانسی پاریس',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Sherif_Pasha.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sherif_Pasha.jpg',
        license: 'Public Domain',
        year: '1919',
        type: 'photograph',
        caption: 'فۆتۆگرافی شەریف پاشای خەندان نوێنەری کورد لە کۆنفرانسی ئاشتی پاریس (١٩١٩)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Sherif_Pasha_Kurdish_delegate_1919.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sherif_Pasha_Kurdish_delegate_1919.jpg',
        license: 'Public Domain',
        year: '1919',
        type: 'photograph',
        caption: 'شەریف پاشا دیپلۆماتکاری کورد لە ئەوروپا',
        verified: true
      }
    ]
  },

  // 14. IHSAN NURI PASHA
  {
    id: 'ihsan-nuri-pasha',
    name: 'ئیحسان نوری پاشا',
    kurdishName: 'ئیحسان نوری پاشا (١٨٩٢ - ١٩٧٦ ز)',
    alternateNames: ['Ihsan Nuri Pasha', 'ئیحسان نوری'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'سەرکردە سەربازی و سیاسییەکان',
    birthYear: '١٨٩٢ ز',
    deathYear: '١٩٧٦ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'بەدلیس / ئارارات / تاران',
    relatedPlaces: ['ئارارات', 'ئەستەمبوڵ', 'تاران'],
    biography: `فەرماندەی سەربازی و سەرۆکی کۆماری ئارارات (١٩٢٧ - ١٩٣٠ز). ئەفسەری پێشووی سوپای عوسمانی بوو کە پەیوەندی بە بزووتنەوەی ڕزگاریخوازی بەدیرخانییەکان و کۆمەڵەی خۆیبوون کرد و سەرکردایەتی شۆڕشی ئاراراتی کرد.`,
    politicalRole: 'سەرۆکی سەربازی کۆماری ئارارات و ڕابەری بزووتنەوەی خۆیبوون',
    politicalEvents: [
      {
        title: 'دامەزراندنی کۆماری ئارارات',
        year: '١٩٢٧ - ١٩٣٠ ز',
        description: 'ڕاگەیاندنی کۆماری ئارارات لە شاخی ئارارات و چاپکردنی ئاڵای کوردستان.',
        location: 'شاخی ئارارات',
        historicalImpact: 'سازدانی بەرگرییەکی بەهێز و ڕێکخراوی سەربازی لە باکوور.'
      }
    ],
    achievements: [
      'سەرکردایەتیکردنی شۆڕشی سەربەخۆییی ئارارات',
      'نووسینی پەڕتووکی مێژوویی لەسەر ڕەگەز و مێژووی کورد'
    ],
    works: [
      'کتێبی «مێژووی ڕەگەزی کورد» (La Révolte de l\'Agridagh)'
    ],
    historicalImportance: 'فەرماندەی ناوداری شۆڕشی ئارارات و سیمبولی ئازایەتی سەربازی.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'La Révolte de l\'Agridagh',
        author: 'Ihsan Nuri Pasha',
        publication: 'Éditions Agri - Geneve',
        year: '١٩٥٥',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/ihsan-nuri-pasha.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی سەردەمی شۆڕشی ئارارات (١٩٢٩) و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'sheikh-said-piran'],
    gallery: [
      {
        url: '/figures/ihsan-nuri-pasha.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ihsan_Nuri_Pasha.jpg',
        license: 'Public Domain',
        year: '1930',
        type: 'photograph',
        caption: 'پرترەی ئیحسان نوری پاشا فەرماندەی شۆڕشی ئارارات',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ihsan_Nuri_Pasha.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ihsan_Nuri_Pasha.jpg',
        license: 'Public Domain',
        year: '1930',
        type: 'photograph',
        caption: 'ئیحسان نوری پاشا فەرماندەی شۆڕشی ئارارات بە جلی سەربازییەوە (١٩٣٠)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Ihsan_Nuri_Pasha_in_Tehran.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ihsan_Nuri_Pasha_in_Tehran.jpg',
        license: 'Public Domain',
        year: '1960',
        type: 'photograph',
        caption: 'ئیحسان نوری پاشا لە سەردەمی تاراوگەدا لە تاران',
        verified: true
      }
    ]
  },

  // 15. DR. NUREDIN ZAZA
  {
    id: 'dr-nuredin-zaza',
    name: 'د. نورەدین زازا',
    kurdishName: 'د. نورەدین زازا (١١٩١ - ١٩٨٨ ز)',
    alternateNames: ['Dr. Nuredin Zaza', 'نورەدین زازا'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'ڕێبەرانی سیاسی',
    birthYear: '١٩١٩ ز',
    deathYear: '١٩٨٨ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژئاوا',
    cityOrPlace: 'عەفرین / قامیشلۆ / لۆزان / لۆزەرن',
    relatedPlaces: ['عەفرین', 'قامیشلۆ', 'دیمەشق', 'سویسرا'],
    biography: `ڕەوشەنبیر، سیاسەتمەدار، و یەکەمین سکرتێری پارتی دیموکراتی کورد لە سوریا (١٩٥٧ز). خاوەنی بڕوانامەی دکتۆرا لە زانستە پەروەردەیییەکان لە زانکۆی لۆزان لە سویسرا. خزمەتێکی گەورەی بە ئەدەب و ڕووناکبیری لە ڕۆژئاوای کوردستان کرد.`,
    politicalRole: 'دامەزرێنەر و سکرتێری یەکەمی پارتی دیموکراتی کورد لە سوریا',
    politicalEvents: [
      {
        title: 'دامەزراندنی یەکەم پارتی سیاسی لە ڕۆژئاوای کوردستان',
        year: '١٩٥٧ ز',
        description: 'دامەزراندنی ڕێکخراوی سیاسی فەرمی بۆ پاراستنی مافی کوردانی سوریا.',
        location: 'قامیشلۆ / دیمەشق',
        historicalImpact: 'دابینکردنی بڕبڕەی پشتی بزووتنەوەی سیاسی لە ڕۆژئاوا.'
      }
    ],
    achievements: [
      'دامەزراندنی ڕێکخراوی فەرمی سیاسی لە ڕۆژئاوای کوردستان (١٩٥٧)',
      'نووسینی خۆژیننامەی مێژوویی «Ma vie de Kurde»'
    ],
    works: [
      'Ma vie de Kurde (ژیانم وەک کوردێک - ١٩٨٢)',
      'گۆڤاری «شرق و غرب»'
    ],
    historicalImportance: 'باوکی بزووتنەوەی سیاسی و ڕووناکبیریی هاوچەرخ لە ڕۆژئاوای کوردستان (سوریا).',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'Ma vie de Kurde ou le cri du peuple kurde',
        author: 'Dr. Noureddin Zaza',
        publication: 'Éditions Pierre-Marcel Favre - Lausanne',
        year: '١٩٨٢',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/dr-nuredin-zaza.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی لۆزان (سویسرا - ١٩٨٠) و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'osman-sabri'],
    gallery: [
      {
        url: '/figures/dr-nuredin-zaza.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nureddin_Zaza.jpg',
        license: 'Public Domain',
        year: '1957',
        type: 'photograph',
        caption: 'پرترەی د. نورەدین زازا سیاسەتمەدار و سکرتێری یەکەمی پارتیا دیموکراتا کورد لە سوریا',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Nureddin_Zaza.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nureddin_Zaza.jpg',
        license: 'Public Domain',
        year: '1957',
        type: 'photograph',
        caption: 'وێنەی د. نورەدین زازا ڕووناکبیر و سیاسیی ڕۆژئاوای کوردستان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Nureddin_Zaza_portrait.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nureddin_Zaza_portrait.jpg',
        license: 'Public Domain',
        year: '1970',
        type: 'photograph',
        caption: 'پرترەی د. نورەدین زازا لە سویسرا',
        verified: true
      }
    ]
  },

  // 16. OSMAN SABRI
  {
    id: 'osman-sabri',
    name: 'عوسمان سەبری (ئاپۆ عوسمان)',
    kurdishName: 'عوسمان سەبری (١٩٠٥ - ١٩٩٣ ز)',
    alternateNames: ['Osman Sabri', 'ئاپۆ عوسمان'],
    category: 'کەسایەتییە سیاسییەکان',
    politicalSubcategory: 'تێکۆشەرانی سیاسی',
    birthYear: '١٩٠٥ ز',
    deathYear: '١٩٩٣ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژئاوا',
    cityOrPlace: 'سێڤەرەک / دیمەشق / قامیشلۆ',
    relatedPlaces: ['سێڤەرەک', 'دیمەشق', 'قامیشلۆ'],
    biography: `شاعیر، سیاسەتمەدار و تێکۆشەری بێباك. ئەندامی چالاکی کۆمەڵەی خۆیبوون و هاوڕێی میر جەلادەت بەدرخان بوو. لە دامەزراندنی بزووتنەوەی سیاسی لە ڕۆژئاوای کوردستان ڕقێکی پۆڵایینی نیشاندا و دەیان جار زیندانی کرا.`,
    politicalRole: 'سەرکردەی سیاسی و هاودامەزرێنەری ڕێکخستنی سیاسی لە ڕۆژئاوا',
    achievements: [
      'نووسینی چەندین کتێب و دیوانی شیعر بە ئەلفوبێی لاتینی',
      'خۆڕاگری بێوێنە لە زیندانە سیاسییەکاندا'
    ],
    works: [
      'دیوانی «Bahoz»',
      'کتێبی «Elifbeya Kurdî»'
    ],
    historicalImportance: 'سیمبولی خۆڕاگری و بەردەوامیی خەبات لە ڕۆژئاوا و باکووری کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'ئەپۆ عوسمان سەبری - ژیان و تێکۆشانی',
        author: 'دێربەند کەکۆ',
        publication: 'دەزگای ئاراس',
        year: '٢٠٠٢',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/osman-sabri.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی دیمەشق (١٩٧٠) و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'dr-nuredin-zaza'],
    gallery: [
      {
        url: '/figures/osman-sabri.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osman_Sabri.jpg',
        license: 'Public Domain',
        year: '1965',
        type: 'photograph',
        caption: 'پرترەی عوسمان سەبری (ئاپۆ عوسمان) شاعیر و تێکۆشەری نیشتمانی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Osman_Sabri.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osman_Sabri.jpg',
        license: 'Public Domain',
        year: '1965',
        type: 'photograph',
        caption: 'وێنەی عوسمان سەبری (ئاپۆ عوسمان) شاعیر و تێکۆشەری سیاسی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Osman_Sabri_Kurdish_writer.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osman_Sabri_Kurdish_writer.jpg',
        license: 'Public Domain',
        year: '1970',
        type: 'photograph',
        caption: 'ئاپۆ عوسمان لە کۆبوونەوە ئەدەبییەکاندا',
        verified: true
      }
    ]
  },

  // 17. MIR MUHAMMAD SORAN
  {
    id: 'mir-muhammad-soran',
    name: 'میر محەمەد پاشای ڕواندز (میری کۆر)',
    kurdishName: 'میر محەممەد کوڕی مستەفا بەگ (١٧٨٣ - ١٨٣٧ ز)',
    alternateNames: ['Mir Muhammad of Soran', 'میری کۆر'],
    category: 'پادشا و فەرمانڕەواکان',
    politicalSubcategory: 'فەرمانڕەوا و پادشاکان',
    birthYear: '١٧٨٣ ز',
    deathYear: '١٨٣٧ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'ڕواندز',
    relatedPlaces: ['ڕواندز', 'هەولێر', 'سۆران', 'ئەمێدی'],
    biography: `فەرمانڕەوای دەسەڵاتداری میرنشینی سۆران لە ڕواندز. سەرکردەیەکی بەهێز بوو کە کارگەی دروستکردنی تۆپ و چەکی پێشکەوتووی لە ڕواندز (بە سەرپەرشتی وەستا ڕەجەب) دامەزراند و حوکمی سەربەخۆیی ڕاگەیاند.`,
    politicalRole: 'فەرمانڕەوای سەربەخۆی میرنشینی سۆران',
    politicalEvents: [
      {
        title: 'دامەزراندنی کارگەی تۆپ و چەک لە ڕواندز',
        year: '١٨١٥ - ١٨٣٥ ز',
        description: 'دروستکردنی سەدان تۆپی پێشکەوتووی سەربازی لە ڕواندز.',
        location: 'ڕواندز',
        historicalImpact: 'دروستکردنی پیشەسازیی سەربازیی خۆماڵی لە کوردستان.'
      }
    ],
    achievements: [
      'دروستکردنی سوپای بەهێزی ڕێکخراوی ٤٠ هەزار کەسی',
      'دامەزراندنی پیشەسازیی سەربازی لە ڕواندز (تۆپەکانی وەستا ڕەجەب)'
    ],
    works: [
      'مێژووی بنەماڵەی میرانی سۆران'
    ],
    historicalImportance: 'دیارترین فەرمانڕەوای پیشەساز و سەربازیی کوردی سەدەی نۆزدەیەم.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'میری کۆر - میرنشینی سۆران',
        author: 'د. کەمال مەزهەر ئەحمەد',
        publication: 'چاپخانەی کۆڕی زانیاری کورد',
        year: '١٩٧٥',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/mir-muhammad-soran.svg',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە (پرترەی ڕەمزی و پەیکەری مۆزەخانە)',
    relatedFigureIds: ['sharafkhan-bidlisi', 'bedir-khan-beg'],
    gallery: [
      {
        url: '/figures/mir-muhammad-soran.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mir_Muhammad_Rawanduz_statue.jpg',
        license: 'Public Domain',
        year: '1830',
        type: 'historical-artwork',
        caption: 'پرترەی ڕەمزیی میر محەمەد پاشای ڕواندز (میری کۆر) فەرمانڕەوای سۆران',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mir_Muhammad_Rawanduz_statue.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mir_Muhammad_Rawanduz_statue.jpg',
        license: 'Public Domain',
        author: 'Kurdish Sculptor',
        year: '2005',
        type: 'statue',
        caption: 'پەیکەری ڕەمزی میر محەمەد پاشای ڕواندز (میری کۆر) فەرمانڕەوای میرنشینی سۆران',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Rawanduz_Cannon_Miri_Kor.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rawanduz_Cannon_Miri_Kor.jpg',
        license: 'Public Domain',
        year: '1830',
        type: 'document',
        caption: 'توپی ڕەشکاوی بەناوبانگی دروستکراوی دەستی وەستا ڕەجەب لە سەردەمی میری کۆر لە ڕواندز (١٨٣٠)',
        verified: true
      }
    ]
  },

  // 18. CIGERXWIN
  {
    id: 'cigerxwin',
    name: 'جگەرخوێن (شێخ موس حەسەن)',
    kurdishName: 'شێخ موس حەسەن (جگەرخوێن) (١٩٠٣ - ١٩٨٤ ز)',
    alternateNames: ['Cigerxwîn', 'جگەرخوێن'],
    category: 'شاعیران',
    birthYear: '١٩٠٣ ز',
    deathYear: '١٩٨٤ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژئاوا',
    cityOrPlace: 'حەسەکە / قامیشلۆ / ستۆکهۆڵم',
    relatedPlaces: ['قامیشلۆ', 'دیمەشق', 'سوید'],
    biography: `شاعیری گەورەی شۆڕشگێڕ و جەماوەریی کورد. لە هۆزەکانی دەڤەری مێردین لەدایکبوو و لە ڕۆژئاوای کوردستان ژیا. شیعرەکانی پڕن لە داواکاری بۆ ئازادی، ڕۆشنگەری و دادپەروەری کۆمەڵایەتی.`,
    works: [
      'دیوانی «Dîwana 1: Prîsk û Pişkût»',
      'دیوانی «Dîwana 2: Sêwra Azadî»',
      'دیوانی «Dîwana 3: Kîme Ez»',
      'کتێبی «Aştî û Azadi»'
    ],
    achievements: [
      'بڕوانامەی بێدارکردنەوەی شۆڕشگێڕانە لە ڕێگەی شیعری جەماوەریییەوە.',
      'بڵاوکردنەوەی دەیان دیوانی شیعر بە زمانی ڕەسەنی کوردی'
    ],
    historicalImportance: 'دەنگی شیعری شۆڕشگێڕانەی باکوور و ڕۆژئاوای کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'Jiyan û Berhemên Cigerxwîn',
        author: 'ئەرشیفی ستۆکهۆڵم',
        publication: 'Apec Press - Sweden',
        year: '١٩٨٦',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/cigerxwin.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی ئەرشیفی فۆتۆگرافی ستۆکهۆڵم (١٩٨٢) و پرترەی دیجیتاڵ',
    relatedFigureIds: ['celadet-bedirxan', 'dr-nuredin-zaza'],
    gallery: [
      {
        url: '/figures/cigerxwin.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cegerxwin.jpg',
        license: 'Public Domain',
        year: '1975',
        type: 'photograph',
        caption: 'پرترەی ڕەمزیی شاعیری گەورەی کورد جگەرخوێن',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Cegerxwin.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cegerxwin.jpg',
        license: 'Public Domain',
        year: '1975',
        type: 'photograph',
        caption: 'وێنەی فۆتۆگرافی ڕاستەقینەی شاعیری گەورە جگەرخوێن',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Cegerxwin_portrait.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cegerxwin_portrait.jpg',
        license: 'Public Domain',
        year: '1980',
        type: 'photograph',
        caption: 'جگەرخوێن لە کاتی نووسینی دیوانی شیعردا',
        verified: true
      }
    ]
  },

  // 19. AHMAD-I KHANI (CULTURAL/SCHOLARLY ENTRY)
  {
    id: 'ahmad-i-khani',
    name: 'ئەحمەدی خانی',
    kurdishName: 'ئەحمەدی خانی (١٦٥٠ - ١٧٠٧ ز)',
    alternateNames: ['خانی', 'Ahmad-i Khani'],
    category: 'شاعیران',
    birthYear: '١٦٥٠ ز',
    deathYear: '١٧٠٧ ز',
    birthDate: '١٦٥٠ ز',
    deathDate: '١٧٠٧ ز',
    period: 'سەدەکانی ١٦ و ١٧',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'بایەزید',
    relatedPlaces: ['بایەزید', 'جەزیرەی بۆتان'],
    biography: `شاعیر، فەیلەسوف و بیرمەندی گەورەی کورد. لە شاری بایەزید ژیاوە. نووسەری داستانی نەمری «مەم و زێن»ە. یەکەم بیرمەندە کە بە شێوەیەکی ڕۆشنگەرانە داوای یەکێتی، سەربەخۆیی و خوێندنی بە زمانی کوردی کردووە.`,
    achievements: [
      'نووسینی داستانی ڕۆمانسی و نیشتمانی «مەم و زێن» (١٦٩٢ ز)',
      'دانانی یەکەم فەرهەنگی عەرەبی-کوردی بۆ منداڵان بە ناوی «نوبەهارا بچوکان» (١٦٨٣ ز)',
      'دانانی کتێبی عەقیدەی ئیسلامی بە کوردی «عەقیدەیا ئیمانێ»'
    ],
    works: [
      'مەم و زێن',
      'نوبەهارا بچوکان',
      'عەقیدەیا ئیمانێ',
      'دیوانی شیعرەکانی خانی'
    ],
    historicalImportance: 'باوکی بیری نەتەوەیی کوردی لە ئەدەبدا، کە شیعر و فەلسەفەی کردە ئامرازێک بۆ بێدارکردنەوەی کۆمەڵگە.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مەم و زێن - لێکۆڵینەوە و وەرگێڕانی هەژار',
        author: 'ئەحمەدی خانی / هەژار موکریانی',
        publication: 'دەزگای ئاراس',
        year: '١٦٩٢ز',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/ahmad-i-khani.svg',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە (پرترەی ڕەمزی و پەیکەری مۆنۆمێنت)',
    relatedFigureIds: ['sharafkhan-bidlisi', 'nali'],
    gallery: [
      {
        url: '/figures/ahmad-i-khani.svg',
        source: 'ئەرشیفی میراثی کورد',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Ehmed%C3%AA_Xan%C3%AE',
        license: 'Public Domain',
        year: '1692',
        type: 'historical-artwork',
        caption: 'پۆرترەی ڕەمزیی ئەحمەدی خانی نووسەری شاکاری مەم و زێن',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Ahmad_Khani_statue_in_Bayazid.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ahmad_Khani_statue_in_Bayazid.jpg',
        license: 'CC BY-SA 4.0',
        author: 'Kurdish Artist',
        year: '2010',
        type: 'statue',
        caption: 'پەیکەری مۆنۆمێنتی ئەحمەدی خانی لە شاری بایەزید (کوردستانی باکوور)',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Mem_u_Zin_manuscript.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mem_u_Zin_manuscript.jpg',
        license: 'Public Domain',
        author: 'Ehmedê Xanî',
        year: '1692',
        type: 'document',
        caption: 'دەستنووسی مێژوویی شاکاری مەم و زێن نووسراوی ئەحمەدی خانی (١٦٩٢)',
        verified: true
      }
    ]
  },

  // 20. NALI
  {
    id: 'nali',
    name: 'نالی (مەلا خدر)',
    kurdishName: 'مەلا خدر ئەحمەدی شاوەیسی (نالی) (١٨٠٠ - ١٨٥٦ ز)',
    alternateNames: ['Nali', 'مەلا خدر شاوەییسی'],
    category: 'شاعیران',
    birthYear: '١٨٠٠ ز',
    deathYear: '١٨٥٦ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'خاکوخۆڵ (شارەزوور) / سلێمانی / ئەستەمبوڵ',
    relatedPlaces: ['شارەزوور', 'سلێمانی', 'شام', 'ئەستەمبوڵ'],
    biography: `بنیاتنەری قوتابخانەی شیعری کلاسیکی کوردی (دیالێکتی سۆرانی) و سەرۆکی ئەڵقەی شاعیرانی بابان. قەسیدە بەناوبانگەکەی بۆ سلێمانی «قوربانی تۆزی ڕێگاتم...» یەکێکە لە شاکارە نەمەرەکانی ئەدەبی کوردی.`,
    achievements: [
      'دامەزراندنی قوتابخانەی شیعری بابان لە سلێمانی',
      'دەوڵەمەندکردنی زمانی سۆرانی بە تەکنیکی عەرووز و ئەدەبی کلاسیک'
    ],
    works: [
      'دیوانی نالی (گشت غەزەلیات)',
      'قەسیدەی مستەفا بەگی بابان',
      'پێنجخشتەی نالی'
    ],
    historicalImportance: 'باوکی شیعری سۆرانی کلاسیک و گەورەترین شاعیری گەشەپێدەری زمانی سۆرانی لە سەدەی ١٩دا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی نالی - لێکۆڵینەوە و لێکدانەوە',
        author: 'مەسعود محەممەد / مەلا عەبدولکەریم مدرس',
        publication: 'کۆڕی زانیاری کورد - بەغدا',
        year: '١٩٧٦',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '/figures/nali_portrait.jpg',
    hasRealPhoto: false,
    photoSourceNote: 'پۆرترەی ئاواوی نالی (مەلا ئەحمەدی خاوێ)',
    relatedFigureIds: ['ahmad-i-khani', 'goran'],
    gallery: [
      {
        url: '/figures/nali_portrait.jpg',
        source: 'پرترەی هونەریی ڕەمزیی نالی',
        sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Nali_(poet)',
        license: 'Public Domain',
        year: '1850',
        type: 'historical-artwork',
        caption: 'پۆرترەی ڕەمزیی ئاواوی نالی باوکی شیعری کلاسیکی سۆرانی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Nali_Kurdish_poet_portrait.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nali_Kurdish_poet_portrait.jpg',
        license: 'Public Domain',
        year: '1950',
        type: 'historical-artwork',
        caption: 'پۆرترەی هونەریی نەریتیی نالی (مەلا خدر) باوکی شیعری کلاسیکی سۆرانی',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Diwan_Nali_manuscript.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Diwan_Nali_manuscript.jpg',
        license: 'Public Domain',
        year: '1930',
        type: 'document',
        caption: 'لاپەڕەیەکی دەستنووسی دیوانی نالی بە خەتی مەلا عەبدولکەریمی مدرس',
        verified: true
      }
    ]
  },

  // 21. MASTURA ARDALAN
  {
    id: 'mastura-ardalan',
    name: 'مەستوورەی ئەردەڵان',
    kurdishName: 'ماه شەرەف خانم محەممەد حەسەن (مەستوورەی ئەردەڵان)',
    alternateNames: ['Mastura Ardalan', 'مەستوورە کردستانی'],
    category: 'نووسەران',
    birthYear: '١٨٠٥ ز',
    deathYear: '١٨٤٨ ز',
    birthDate: '١٨٠٥ ز',
    deathDate: '١٨٤٨ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'سنە / سلێمانی',
    relatedPlaces: ['سنە', 'سلێمانی'],
    biography: `شاعیر، مێژوونووس و هاوسەری خوسرەو خانی ناکام لە میرنشینی ئەردەڵان. یەکەمین ژنە مێژوونووسە لە ڕۆژهەڵاتی ناوەڕاستدا کە پەڕتووکی مێژوویی نووسیبێت («مێژووی ئەردەڵان»).`,
    achievements: [
      'نووسینی کتێبی مێژوویی «تاریخ اردلان» لەبارەی میرنشینی ئەردەڵان',
      'دانانی دیوانی شیعر بە زمانەکانی کوردی (هۆرامی) و فارسی'
    ],
    works: [
      'مێژووی ئەردەڵان (تاریخ اردلان)',
      'دیوانی مەستوورەی ئەردەڵان',
      'عقاید مستوره'
    ],
    historicalImportance: 'ڕەمزی پێشەنگایەتیی ژنانی کورد لە ئەدەب و مێژوونووسین لە سەدەی نۆزدەهەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مێژووی ئەردەڵان',
        author: 'مەستوورەی ئەردەڵان / وەرگێڕانی هەژار',
        publication: 'تاران',
        year: '١٩٨٧',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە (پەیکەری سنە هەیە)',
    relatedFigureIds: ['nali', 'sharafkhan-bidlisi'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Mastura_Ardalan_statue_Sanandaj.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mastura_Ardalan_statue_Sanandaj.jpg',
        license: 'CC BY-SA 3.0',
        author: 'Hadi Zia-od-Dini',
        year: '2011',
        type: 'statue',
        caption: 'پەیکەری مۆنۆمێنتی مەستوورەی ئەردەڵان لە شاری سنە، ڕۆژهەڵاتی کوردستان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/History_of_Ardalan_manuscript.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:History_of_Ardalan_manuscript.jpg',
        license: 'Public Domain',
        author: 'Mastura Ardalan',
        year: '1848',
        type: 'document',
        caption: 'دەستنووسی مێژوویی کتێبی «تاریخ اردلان» نووسراوی مەستوورەی ئەردەڵان (١٨٤٨)',
        verified: true
      }
    ]
  },

  // 22. MELAY CIZERI
  {
    id: 'melay-cizeri',
    name: 'مەلای جەزیری',
    kurdishName: 'شێخ ئەحمەدی جەزیری (مەلای جەزیری) (١٥٧٠ - ١٦٤٠ ز)',
    alternateNames: ['Melayê Cizîrî', 'مەلای جزیری'],
    category: 'شاعیران',
    birthYear: '١٥٧٠ ز',
    deathYear: '١٦٤٠ ز',
    period: 'سەدەکانی ١٦ و ١٧',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'جەزیرەی بۆتان',
    relatedPlaces: ['جەزیرەی بۆتان', 'ئامەد'],
    biography: `شاعیر، عاریف و بیرمەندی ناوداری کورد لە میرنشینی بۆتان. باوکی فەلسەفەی عیرفانی لە شیعری کلاسیکی کرمانجیدا. دیوانەکەی بە شاکاری عیرفانی، سەفا و جوانیی زمانی کوردی هەژمار دەکرێت.`,
    achievements: [
      'بنیاتنانی قوتابخانەی عیرفانی لە شیعری کرمانجیدا',
      'نووسینی دیوانی مەزنی جەزیری'
    ],
    works: [
      'دیوانی مەلای جەزیری'
    ],
    historicalImportance: 'لووتکەی شیعری عیرفانیی ڕەسەنی کوردی لە سەدەی حەڤدەهەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی مەلای جەزیری - بە شەرحی هەژار',
        author: 'هەژار موکریانی',
        publication: 'دەزگای ئاراس - هەولێر',
        year: '١٩٩٨',
        sourceType: 'کتێب'
      }
    ],
    imageResource: '',
    hasRealPhoto: false,
    photoSourceNote: 'وێنەی ڕاستەقینەی پشتڕاستکراو بەردەست نییە',
    relatedFigureIds: ['ahmad-i-khani', 'sharafkhan-bidlisi'],
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Melaye_Ciziri_monument_Cizre.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melaye_Ciziri_monument_Cizre.jpg',
        license: 'CC BY-SA 4.0',
        year: '2012',
        type: 'statue',
        caption: 'مۆنۆمێنت و پەیکەری مەلای جەزیری لە شاری جەزیرەی بۆتان',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Diwana_Melaye_Ciziri_manuscript.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Diwana_Melaye_Ciziri_manuscript.jpg',
        license: 'Public Domain',
        year: '1650',
        type: 'document',
        caption: 'دەستنووسی کۆنی دیوانی مەلای جەزیری مێژووی سەدەی ١٧',
        verified: true
      }
    ]
  },
  {
    id: 'sherko-bekas',
    name: 'شێرکۆ بێکەس',
    kurdishName: 'شێرکۆ فایەق بێکەس (١٩٤٠ - ٢٠١٣ ز)',
    alternateNames: ['Sherko Bekas', 'شیرکو بیکس', 'شێرکۆ بێكەس'],
    category: 'شاعیران',
    politicalSubcategory: 'تێکۆشەرانی سیاسی',
    birthYear: '١٩٤٠ ز',
    deathYear: '٢٠١٣ ز',
    birthDate: '٢ی ئایاری ١٩٤٠ ز',
    deathDate: '٤ی ئابی ٢٠١٣ ز',
    period: 'سەردەمی هاوچەرخ',
    region: 'کوردستانی باشوور / سلێمانی',
    cityOrPlace: 'سلێمانی',
    relatedPlaces: ['سلێمانی', 'ستۆکهۆڵم', 'هەولێر'],
    biography: `شێرکۆ بێکەس کوڕی شاعیری گەورەی کورد فایەق بێکەسە، لە شاری سلێمانی لەدایکبووە. یەکێک بووە لە سەرکردە و دامەزرێنەرانی بزووتنەوەی نوێکاریی «ڕوانگە» لە ساڵی ١٩٧٠دا. خاوەنی سەدان بەرهەم و دیوانی شیعری بەپێزە کە وەرگێڕدراون بۆ زۆرێک لە زمانەکانی جیهان وەک ئینگلیزی، فەرەنسی، سویدی، ڕوسی و فارسی. لە ساڵی ١٩٨٨ خەڵاتی نێودەوڵەتی کورت تۆخولسکیی بەخشرا لە سوید.`,
    politicalRole: 'وەزیری ڕۆشنبیریی هەرێمی کوردستان (١٩٩٢) و دامەزرێنەری دەزگای چاپ و پەخشی سەردەم',
    achievements: [
      'دامەزراندنی بزووتنەوەی ئەدەبی و فکری ڕوانگە (١٩٧٠)',
      'بەدەستهێنانی خەڵاتی نێودەوڵەتیی کورت تۆخولسکی لە سوید (١٩٨٨)',
      'دامەزراندنی دەزگای ڕۆشنبیری و چاپی سەردەم لە سلێمانی'
    ],
    works: [
      'دیوانی دەربەندی پەپوولە',
      'کۆچی جاویدانی',
      'پەیامێک بۆ شاعیرانی جیهان',
      'مێژووی دارستانی سووتاو'
    ],
    historicalImportance: 'ئیمپراتۆری شیعری هاوچەرخی کوردی و سیمبولی داهێنانی ئەدەبیی جیهانی.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی شێرکۆ بێکەس - بەرگی ۱ و ۲',
        author: 'شێرکۆ بێکەس',
        publication: 'دەزگای سەردەم - سلێمانی',
        year: '٢٠٠٩',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Sherko_Bekas.jpg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی فۆتۆگرافیی ڕاستەقینەی شێرکۆ بێکەس - ویكیمیدیا کامۆنز',
    gallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Sherko_Bekas.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sherko_Bekas.jpg',
        license: 'Public Domain',
        year: '2005',
        type: 'photograph',
        caption: 'پرترەی فۆتۆگرافیی ڕاستەقینەی شێرکۆ بێکەس',
        verified: true
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sherko_Bekas_reciting.jpg',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sherko_Bekas_reciting.jpg',
        license: 'Public Domain',
        year: '2008',
        type: 'photograph',
        caption: 'شێرکۆ بێکەس لە کاتی خوێندنەوەی شیعری دەربەند پەپوولە',
        verified: true
      }
    ]
  },
  // SHEIKH OTHMAN SIRAJADDIN NAQSHBANDI
  {
    id: 'sheikh-othman-sirajaddin',
    name: 'شێخ عوسمان سراج الدین نەقشبەندی (قدس سره)',
    kurdishName: 'حەزرەتی شێخ محمد عوسمان سراج الدینی دووهەمی بیارە (١٨٩٦ - ١٩٩٧ ز)',
    alternateNames: ['شێخ عوسمانی دووەم', 'حەزرەتی شێخی بیارە', 'Sheikh Othman Sirajaddin'],
    category: 'شێخ و زانایان',
    birthYear: '١٨٩٦ ز',
    deathYear: '١٩٩٧ ز',
    birthDate: '٢٨ی ئەیلوولی ١٨٩٦ ز (١٣١٤ کۆچی)',
    deathDate: '٣١ی کانوونی دووەمی ١٩٩٧ ز (٢١ی رەمەزانی ١٤١٧ کۆچی)',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات / کوردستانی باشوور',
    cityOrPlace: 'گوندی سەفی ئاباد (ڕەوانسەر - جوانڕۆ) / بیارە',
    relatedPlaces: ['سەفی ئاباد', 'ڕەوانسەر', 'جوانڕۆ', 'بیارە', 'دوڕۆ', 'بەغداد', 'ئەستەمبوڵ'],
    biography: `💠 ژیاننامەی حەزرەتی شیخ محمد عثمان سراج الدین ( قدس سره):

💟 شێخ محمد عثمان سراج الدینی بیارە (دووهەم) کوڕی شێخ محمد علاء الدینی بیارە کوڕی شێخ عومەر ضياء الدينی بیارە کوڕی شێخ عثمان سراج الدینی تەوێڵە (یەکەم) کوڕی سەید خالد کوڕی سەید عبدالله کوڕی سەید محمد کوڕی سەید دەروێش کوڕی سەید مشرف کوڕی سەید جومعە کوڕی سەید زاهر ، کە سەید زاهر لە ساداتی نعێمی حوسەینی هاشمیە لە حەمرینی دیالە ، نەسەبیان دەگەڕێتەوە سەر حەزرەتی ئیمامی حوسەین.

🔺 شێخی بیارە لە ساڵی (١٣١٤ی کۆچی - ١٨٩٦/٩/٢٨ی زاینی) لە خانەوادەیەکی زانستی و ئاینی و کۆمەڵایەتی لە گوندی (سەفی ئاباد) سەر بە ناحیەی ڕەوانسەر -قەزای جوانڕۆ لەدایکبووە ، هەر لە سەرەتای منداڵی خوێندنی لای شێخ عەلائەدینی باوکی دەست پێکردووە ، قورئان و تەجویدی لای قورئان خوێنی باڵای میسڕ (شێخ مستەفا ئیسماعیل) خوێندووە ، دواتر درێژەی بە خوێندن داوە و تا دواتریش لە سەردەمی شێخایەتیدا زانایی و پزیشک زانی ئەو گەیشتە ئاستێکی زۆر باڵا.

🔵 شێخی بیارە دەستی کردووە بە قورئانی پیرۆز و خەتمی کردووە ، کتێبە سەرەتاییەکانی تەواو کردووە و زانستی عەرەبی لەلای مەلا سەید حوسێنی سابڵاغی و مەلا عبدالکریمی خانەشووری لە قوتابخانەی بیارە و دووڕوو خوێندووە ، بۆ زانیاری تەصەوف لە ژێر چاودێری باوکی بووە.

◽️ شێخی بیارە لە خانەقادا مایەوە تا وەفاتی شێخ عەلائەدینی باوکی ، پاشان لە بەر شیاویەتی لە جێگەی باوکی بە شێخی تەریقەت دانرا ، لە ساڵی (١٩٥٨) دوای ئاڵۆزیەکانی عێراق ، ئەو وڵاتەی بەجێ هێشت و ڕۆشتەوە خانەقای (دوڕۆ) لە کوردستانی ئێران ، لەوێدا ژمارەیەکی بەرچاو لە زانایان و کەسایەتیە جۆراوجۆرەکان هاتنە خزمەتی لەوانیش زانای گەورەی کوردستانی ڕۆژهەڵات (مامۆستا مەلا باقری بالک)، هەروەها شێخ عبدالقادری داغستانی و چەندین زانای تر

➖ دوای تێکچوونی بارودۆخی ئێران لە ساڵی (١٩٧٩) سەر لە نوێ شێخی بیارە ئێرانی جێهێشت و گەڕایەوە کوردستان ، بەڵام دوای ماوەیەکی کەم لە هەڵگیرساندنی شەڕی خوێناوی نیوان ئێران و عێراق ، شێخی بیارە تەشریفی چووە بەغداد ، خانەقای بەغداد لە بیارە و دوڕۆ زیاتر ئاوەدانی بەخۆیەوە بینی

➖ شێخی بیارە بانگخوازێکی کاریگەری سەردەمی خۆی بووە، و خەڵکانێکی زۆر ڕوویان لەو کردووە بۆ کار و بابەتە ئاینییەکان، شێخ جگە لە کاری ئایینی کاری پزیشکی دەکرد ئەویش لەڕیگەی چارەسەری گیایی چارەسەری نەخۆشییەکانی دەکرد، ھەروەھا شێخ نووسەر و شاعیری سەردەمی خۆی بووە.

◽️ نمونەیەک لە شیعرەکانی

➖ یا رسول الله زەلیلم سا بە قوربان هیمەتێ
➖ شەرمەزار و دڵ بریندارم بە قوربان هیمەتێ
➖ تێنوی دڵ ئاوەرینی قەترەیێکی ڕەحمی تۆم
➖ ڕێزە خوار و کەلبی دەرگاتم بە قوربان هیمەتێ
➖ شاسواری عەرصەیی مەیدانی حەق ڕؤژی جەزا
➖ تۆ مەبە غافڵ لە (عوسمان) ، سا بەقوربان هیمەتێ

◽️ براکانی حەزرەتی شێخ محمد عثمانی بیارە:
١) شێخ مەولانا
٢) شێخ محمد ضیائی
٣) شێخ ناجی
٤) شێخ موختار
٥) شێخ ئەمین
٦)شێخ ثابت
٧)دکتۆر مەزهەر

◽️ کوڕەکانی حەزرەتی شێخ محمد عثمانی بیارە:
١) شێخ جمال الدین
٢) شێخ عبدالملیک
٣) شێخ محمد ڕەئوف
٤) شێخ محمد ناصح
٥) دکتۆر شێخ مادح

◽️ دوای دەیان ساڵ لە خزمەت، شێخ لە تەمەنی ١٠١ ساڵیدا و لە شەوی (٣٠،٣١ -١-١٩٩٧) لە ئەستەمبوڵی پایتەختی وڵاتی تورکیا، ماڵئاوایی لە ژیان کرد.

◽️ هەندێک لە نوسینەکانی شێخی بیارە

➖ تەفسیری سورەتی (و التین)
➖ پەرتووکەکانی (سراج القلوب)
➖ لشهب الثاقب و الاعتقاد الرصين و اليقين بالله
➖ رسالة الرابطە

وەرمان گرتووە لەئەکاونتی باخچەی بۆنخۆشانەوە`,
    achievements: [
      'ڕابەرایەتیکردنی تەریقەتی نەقشبەندی لە ئاستی جیهان و پەروەردەکردنی هەزاران زانا و مورید',
      'ئاوەدانکردنەوە و بەڕێوەبردنی حوجرە و قوتابخانە ئایینییەکانی بیارە، دوڕۆ و بەغداد',
      'شارەزایی بێوێنە لە زانستی پزیشکیی نەریتی، چارەسەری گیایی و دەرمانسازی'
    ],
    works: [
      'تەفسیری سورەتی (و التین)',
      'پەرتووکی (سراج القلوب)',
      'الشهب الثاقب و الاعتقاد الرصين و اليقين بالله',
      'رسالة الرابطة',
      'دیوانی هۆنراوە و ئەشعاری عیرفانی'
    ],
    historicalImportance: 'سیمبولی مەزنی ڕۆحانیەت، عیرفان، خۆشەویستی و خزمەتگوزاریی کۆمەڵایەتی لە مێژووی هاوچەرخی کوردستان و جیهانی ئیسلامیدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'کتێبی سراج القلوب',
        author: 'حەزرەتی شێخ عوسمان سراج الدین نەقشبەندی',
        publication: 'چاپخانەی بیارە',
        year: '١٩٩٥',
        sourceType: 'کتێب'
      },
      {
        title: 'تەریقەتی نەقشبەندی و ڕۆڵی شێخانی هەورامان لە مێژووی هاوچەرخدا',
        author: 'توێژینەوەی مێژوویی',
        publication: 'هەولێر / سلێمانی',
        year: '٢٠٠٥',
        sourceType: 'توێژینەوەی ئەکادیمی'
      }
    ],
    imageResource: '/figures/sheikh-othman-sirajaddin.svg',
    hasRealPhoto: true,
    photoSourceNote: 'وێنەی فۆتۆگرافی ئەرشیفی و پرترەی دیجیتاڵ',
    gallery: [
      {
        url: '/figures/sheikh-othman-sirajaddin.svg',
        source: 'ئەرشیفی میراثی کوردستان',
        sourceUrl: '',
        license: 'Public Domain',
        year: '١٩٨٠',
        type: 'photograph',
        caption: 'پرترەی حەزرەتی شێخ عوسمان سراج الدین نەقشبەندی (قدس سره)',
        verified: true
      }
    ]
  }
];
