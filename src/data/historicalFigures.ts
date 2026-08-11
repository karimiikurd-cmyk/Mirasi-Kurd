import { HistoricalFigure } from '../types';

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    id: 'salahaddin-ayyubi',
    name: 'سەلاحەدینی ئەیوبی',
    kurdishName: 'سەلاحەدینی ئەیوبی (سەلاحەدین یووسف ئیبن ئەیوب)',
    alternateNames: ['سەلاحەدین', 'Saladin', 'Al-Nasir Salah al-Din'],
    category: 'پادشا و فەرمانڕەواکان',
    birthYear: '١١٣٧ ز',
    deathYear: '١١٩٣ ز',
    birthDate: '١١٣٧ ز',
    deathDate: '٤ی ئازاری ١١٩٣ ز',
    period: 'سەردەمی ئەیوبییەکان',
    region: 'شام و میسر',
    cityOrPlace: 'تکریت / دیمەشق',
    relatedPlaces: ['تکریت', 'دوین (ئەرمەنستان)', 'قاهیرە', 'دیمەشق', 'قودس'],
    biography: `سەلاحەدین یووسف کۆڕی ئەیوب، دامەزرێنەری دەوڵەتی ئەیوبی و رزگارکەری قودس لە چنگی خاچپەرستان لە جەنگی حەتین (١١٨٧ز). بنەماڵەکەی له هۆزی هەزبانی (ڕەوادی) بوون کە بە بنەچە لە شارۆچکەی دوین لە باکووری کوردستان و ئەرمەنستانەوە هاتبوونە تکریت و پاشان شام.`,
    achievements: [
      'دامەزراندنی دەوڵەتی سەربەخۆی ئەیوبی لە میسر و شام و جەزیرە',
      'ڕزگارکردنەوەی شاری قودس لە دەستی سوپای خاچپەرستان لە ساڵی ١١٨٧ز',
      'یەکخستنەوەی جیهانی ئیسلامی لە میسر، شام، حیجاز و کوردستان',
      'بنیاتنانی قەڵای قاهیرە (قلعة صلاح الدين) و داڕشتنەوەی دیپلۆماسی نێودەوڵەتی'
    ],
    works: [
      'نووسراوە و نامە دیپلۆماسییەکانی سەردەمی ئەیوبی'
    ],
    historicalImportance: 'یەکێک لە گەورەترین و ناسراوترین فەرماندە و فەرمانڕەواکانی مێژووی ڕۆژهەڵاتی ناوەڕاست و جیهان، کە بە دادپەروەری و لێبووردەیی لە بەرامبەر دژبەرانیدا ناوبانگی دەرکردووە.',
    kurdishIdentityStatus: 'بەهێز پشتیوانی دەکرێت',
    disputeNote: 'مێژوونووسانی هاوچەرخی ئەیوبی وەک ئیبن خەلەکان و ئەبو شاما، و توێژەرانی ڕۆژئاوا (وەک ڤلادیمێر مینۆرسکی) بە بەڵگەی بەهێز ئاماژە بە ڕەگوڕێشەی کوردیی بنەماڵەی ئەیوبی لە هۆزی ڕەوادی/هەزبانی دەکەن.',
    sources: [
      {
        title: 'وفيات الأعيان وأنباء أبناء الزمان',
        author: 'ئیبن خەلەکان',
        publication: 'دار صادر - بیروت',
        year: '١٢٧٤ز',
        sourceType: 'کتێب'
      },
      {
        title: 'Studies in Caucasian History: The Kurds in the Middle Ages',
        author: 'Vladimir Minorsky',
        publication: 'Taylor & Francis / Cambridge University Press',
        year: '١٩٥٣',
        sourceType: 'توێژینەوەی ئەکادیمی'
      },
      {
        title: 'الروضتين في أخبار الدولتين النورية والصلاحية',
        author: 'ئەبو شاما ئالمەقدیسی',
        publication: 'مؤسسة الرسالة',
        year: '١٢٦٧ز',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['ibn-khallikan', 'sharafkhan-bidlisi']
  },
  {
    id: 'sharafkhan-bidlisi',
    name: 'شەرەفخانی بدلیسی',
    kurdishName: 'میر شەرەفخانی بدلیسی (١٥٤٣ - ١٦٠٣ ز)',
    alternateNames: ['شەرەفخان', 'Sharaf Khan Bidlisi'],
    category: 'میر و ئەمیرەکان',
    birthYear: '١٥٤٣ ز',
    deathYear: '١٦٠٣ ز',
    birthDate: '٢٥ی ئازاری ١٥٤٣ ز',
    deathDate: '١٦٠٣ ز',
    period: 'سەدەکانی ١٦ و ١٧',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'بدلیس / قوم (ئێران)',
    relatedPlaces: ['بدلیس', 'قوم', 'تەبرێز', 'ئەستەمبوڵ'],
    biography: `میر و مێژوونووسی گەورەی کورد، میری میرنشینی بدلیس. لە ساڵی ١٥٩٧ زانیارییە مێژوویی و جوغرافیاییەکانی گەلی کوردی لە پەڕتووکی نەمری (شەرەفنامە)دا بە زمانی فارسی کۆکردەوە، کە بە یەکەمین ئەنسایکڵۆپیدیای مێژووی میرنشینە کوردەکان دادەنرێت.`,
    achievements: [
      'نووسینی پەڕتووکی مێژوویی «شەرەفنامە» (١٥٩٧ ز)',
      'پاراستنی سەربەخۆیی و ئاوەدانکردنەوەی میرنشینی بدلیس',
      'کۆکردنەوەی مێژووی بنەماڵە و دەسەڵاتدارێتییە کوردەکان لە یەک سەرچاوەدا'
    ],
    works: [
      'شەرەفنامە (تاريخ الدول والإمارات الكردية)'
    ],
    historicalImportance: 'بنیاتنەری مێژوونووسیی نەتەوەیی کورد و سەرچاوەی سەرەکیی سەرجەم لێکۆڵینەوە مێژووییەکانی تایبەت بە کوردستان لە سەدەکانی ناوەڕاستدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شەرەفنامە - مێژووی ماڵباتە کوردییەکان',
        author: 'میر شەرەفخانی بدلیسی',
        publication: 'وەرگێڕانی هەژار موکریانی - چاپخانەی کۆڕی زانیاری کورد',
        year: '١٥٩٧ (وەرگێڕان ١٩٧٢)',
        sourceType: 'کتێب'
      },
      {
        title: 'Agha, Shaikh and State: The Social and Political Structures of Kurdistan',
        author: 'Martin van Bruinessen',
        publication: 'Zed Books',
        year: '١٩٩٢',
        sourceType: 'توێژینەوەی ئەکادیمی'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['salahaddin-ayyubi', 'ahmad-i-khani']
  },
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
      },
      {
        title: 'مێژووی ئەدەبی کوردی',
        author: 'عەلائەدین سەجادی',
        publication: 'چاپخانەی مەعاریف - بەغدا',
        year: '١٩٥٢',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['sharafkhan-bidlisi', 'nali']
  },
  {
    id: 'ibn-khallikan',
    name: 'ئیبن خەلەکان',
    kurdishName: 'ئیبن خەلەکان (شەهابەددین ئەبو العباس)',
    alternateNames: ['Ibn Khallikan', 'ئەبو العباس ئەحمەد ئیبن محەممەد'],
    category: 'زانایان',
    birthYear: '١٢١١ ز',
    deathYear: '١٢٨٢ ز',
    birthDate: '٢٢ی ئەیلوولی ١٢١١ ز',
    deathDate: '٣٠ی تشرینی یەکەمی ١٢٨٢ ز',
    period: 'سەردەمی ناوەڕاست',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'ئەربیل (هەولێر) / دیمەشق',
    relatedPlaces: ['هەولێر', 'موسڵ', 'قاهیرە', 'دیمەشق'],
    biography: `داوەر و مێژوونووس و ژیاننامەنووسی ناوداری سەردەمی ناوەڕاست. لە قەڵای هەولێر لە دایکبووە. نووسەری شاکاری «وفيات الأعيان وأنباء أبناء الزمان»ە کە یەکێکە لە گەورەترین و دەوڵەمەندترین ئەنسایکڵۆپیدیاکانی ژیاننامەی کەسایەتییەکان لە مێژووی ئیسلامیدا.`,
    achievements: [
      'دانانی ئینسایکڵۆپیدیای ژیاننامەی «وفيات الأعيان» لە ٨ بەرگدا',
      'وەرگرتنی پلەی قازی القضاة (دادوەری گشتی) لە دیمەشق و میسر'
    ],
    works: [
      'وفيات الأعيان وأنباء أبناء الزمان'
    ],
    historicalImportance: 'سەرچاوەیەکی بێجێگرەوە بۆ مێژووی زانایان، شاعیران و فەرمانڕەوایانی جیهانی ئیسلامی و کوردستان لە سەدەکانی ناوەڕاستدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'وفيات الأعيان وأنباء أبناء الزمان',
        author: 'ئیبن خەلەکان',
        publication: 'دار صادر - بیروت',
        year: '١٢٧٤ز',
        sourceType: 'ئینسایکڵۆپیدیا'
      },
      {
        title: 'Encyclopaedia of Islam, Second Edition',
        author: 'J.W. Fück',
        publication: 'Brill Publishers',
        year: '١٩٦٥',
        sourceType: 'ئینسایکڵۆپیدیا'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['salahaddin-ayyubi']
  },
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
    biography: `شاعیر، مێژوونووس و هاوسەری خوسرەو خانی ناکام لە میرنشینی ئەردەڵان. یەکەمین ژنە مێژوونووسە لە ڕۆژهەڵاتی ناوەڕاستدا کە پەڕتووکی مێژوویی نووسیبێت («مێژووی ئەردەڵان»). شیعرەکانی بە ڕێزمانی هۆرامی و فارسی تۆمار کراون.`,
    achievements: [
      'نووسینی کتێبی مێژوویی «تاریخ اردلان» لەبارەی میرنشینی ئەردەڵان',
      'دانانی دیوانی شیعر بە زمانەکانی کوردی (هۆرامی) و فارسی',
      'نووسینی پەڕتووکی شەرعی و فیقهی «معجم الملاحة»'
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
        author: 'مەستوورەی ئەردەڵان',
        publication: 'وەرگێڕانی هەژار موکریانی - تاران',
        year: '١٩٨٧',
        sourceType: 'کتێب'
      },
      {
        title: 'دیوانی مەستوورەی ئەردەڵان',
        author: 'بە کۆششی محەممەد عەلی دەستغەیب',
        publication: 'ئەمیر کەبیر - تاران',
        year: '١٩٤٩',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1474939553205-045a557b4474?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['nali', 'khana-qubadi']
  },
  {
    id: 'sheikh-ubaydullah',
    name: 'شێخ عوبەیدوڵڵای نەهری',
    kurdishName: 'شێخ عوبەیدوڵڵای نەهری (١٨٢٦ - ١٨٨٣ ز)',
    alternateNames: ['شێخ عوبەیدوڵڵا', 'Sheikh Ubeydullah of Nehri'],
    category: 'شێخ و زانایان',
    birthYear: '١٨٢٦ ز',
    deathYear: '١٨٨٣ ز',
    birthDate: '١٨٢٦ ز',
    deathDate: '١٨٨٣ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'نەهری (شەمزینان) / مەکە',
    relatedPlaces: ['شەمزینان', 'ورمێ', 'ئەستەمبوڵ', 'مەکە'],
    biography: `سەرکردەی سیاسی و ڕۆحیی کورد لە شەمزینان. لە ساڵی ١٨٨٠دا شۆڕشێکی ڕزگاریخوازیی سەرانسەریی بۆ یەکخستنی کوردستان بەڕێوەبرد و لە نامە دیپلۆماسییەکانیدا بۆ وڵاتانی ئەوروپایی راگەیاند: «نەتەوەی کورد گەلێکی جیاوازە... دەمانوێت کاروباری خۆمان بە دەستی خۆمان بەڕێوە ببەین.»`,
    achievements: [
      'ڕابەرایەتیکردنی شۆڕشی ١٨٨٠ی کوردستان بۆ سەربەخۆیی',
      'داڕشتنی یەکەم داواکاریی فەرمیی دیپلۆماسی بۆ مافی چارەی خۆنووسینی کورد'
    ],
    works: [
      'نامە دیپلۆماسییەکان بۆ کونسوڵەکانی بەریتانیا و ڕووسیا'
    ],
    historicalImportance: 'بنیاتنەری یەکەم بزووتنەوەی ڕێکخراوی سەرتاسەریی ڕزگاریخوازی نەتەوەیی لە مێژووی هاوچەرخی کوردستاندا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'Agha, Shaikh and State',
        author: 'Martin van Bruinessen',
        publication: 'Zed Books - London',
        year: '١٩٩٢',
        sourceType: 'توێژینەوەی ئەکادیمی'
      },
      {
        title: 'کورد و کوردستان',
        author: 'ئەمین زەکی بەگ',
        publication: 'چاپخانەی دار السعادة - ئەستەمبوڵ',
        year: '١٩٣١',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['sheikh-mahmud', 'qazi-muhammad']
  },
  {
    id: 'khana-qubadi',
    name: 'خانای قوبادی',
    kurdishName: 'خانای قوبادی (١٧٠٠ - ١٧٧٥ ز)',
    alternateNames: ['Khana Qubadi'],
    category: 'شاعیران',
    birthYear: '١٧٠٠ ز',
    deathYear: '١٧٧٥ ز',
    period: 'سەدەی ١٨',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'کرماشان / جوانڕۆ',
    relatedPlaces: ['جوانڕۆ', 'دەرنە', 'سنە'],
    biography: `شاعیر و زانای گەورەی دەڤەری هەورامان و جافایەتی. داستانی «شێرین و فەرهاد»ی بە شێوەزاری هۆرامی هۆنیوەتەوە. لە شیعری بەناوبانگیدا داکۆکی لە زمانی کوردی دەکات و دەڵێت: «ڕاستەن مەواچن فارسی شەکەرەن / کوردی جە فارسی بەس شیرینتەرەن».`,
    achievements: [
      'هۆنینەوەی داستانی «شێرین و فەرهاد» بە زمانی کوردی هۆرامی (١٧٤٠ز)',
      'وەرگێڕانی قورئانی پیرۆز بۆ کوردی (یەکێک لە یەکەم وەرگێڕانەکان)'
    ],
    works: [
      'شێرین و فەرهاد',
      'دیوانی خانای قوبادی'
    ],
    historicalImportance: 'خاوەن دەورێکی سەرەکی لە دروستکردنی دەقە ئەدەبییە مەزنەکانی شێوەزاری گورانی/هۆرامی لە سەدەی هەژدەهەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'مێژووی ئەدەبی کوردی',
        author: 'عەلائەدین سەجادی',
        publication: 'بەغدا',
        year: '١٩٥٢',
        sourceType: 'کتێب'
      },
      {
        title: 'شێرین و فەرهادی خانای قوبادی',
        author: 'ساغکردنەوەی محەممەد مەلا کەریم',
        publication: 'کۆڕی زانیاری کورد - بەغدا',
        year: '١٩٧٥',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['mastura-ardalan', 'ahmad-i-khani']
  },
  {
    id: 'nali',
    name: 'نالی (مەلا خدر)',
    kurdishName: 'مەلا خدر ئەحمەدی شاوەیسی (نالی)',
    alternateNames: ['Nali', 'مەلا خدر شاوەییسی'],
    category: 'شاعیران',
    birthYear: '١٨٠٠ ز',
    deathYear: '١٨٥٦ ز',
    period: 'سەدەی ١٩',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'خاکوخۆڵ (شارەزوور) / سلێمانی / ئەستەمبوڵ',
    relatedPlaces: ['شارەزوور', 'سلێمانی', 'شام', 'ئەستەمبوڵ'],
    biography: `بنیاتنەری قوتابخانەی شیعری کلاسیکی کوردی (دیالێکتی سۆرانی) و سەرۆکی ئەڵقەی شاعیرانی بابان (لەگەڵ سالم و کوردی). قەسیدە بەناوبانگەکەی بۆ سلێمانی «قوربانی تۆزی ڕێگاتم...» یەکێکە لە شاکارە نەمەرەکانی ئەدەبی کوردی.`,
    achievements: [
      'دامەزراندنی قوتابخانەی شیعری بابان لە سلێمانی',
      'دەوڵەمەندکردنی زمانی سۆرانی بە تەکنیکی عەرووز و ئەدەبی کلاسیک'
    ],
    works: [
      'دیوانی نالی'
    ],
    historicalImportance: 'باوکی شیعری سۆرانی کلاسیک و گەورەترین شاعیری گەشەپێدەری زمانی سۆرانی لە سەدەی 19دا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی نالی - لێکۆڵینەوە و لێکدانەوە',
        author: 'مەسعود محەممەد',
        publication: 'کۆڕی زانیاری کورد - بەغدا',
        year: '١٩٧٦',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['ahmad-i-khani', 'goran']
  },
  {
    id: 'sheikh-mahmud',
    name: 'شێخ مەحمودی حەفید',
    kurdishName: 'شێخ مەحمودی حەفید (مەلیکی کوردستان)',
    alternateNames: ['Sheikh Mahmud Barzanji', 'شێخ مەحمود'],
    category: 'پادشا و فەرمانڕەواکان',
    birthYear: '١٨٧٨ ز',
    deathYear: '١٩٥٦ ز',
    birthDate: '١٨٧٨ ز',
    deathDate: '٩ی تشرینی یەکەمی ١٩٥٦ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'سلێمانی / بەرزنجە',
    relatedPlaces: ['سلێمانی', 'داریپەرموور', 'بەغدا', 'هیندستان'],
    biography: `ڕابەری بزووتنەوەی نەتەوەیی کورد لە سلێمانی و ڕاگەیەنەری شانشینی کوردستان (١٩١٩ - ١٩٢٢ز). چەندین جار لە بەرامبەر سوپای بەریتانیادا چەکی هەڵگرت و حکومەتی دارولمەلیکی لە سلێمانی دامەزراند.`,
    achievements: [
      'دامەزراندنی شانشینی کوردستان و راگەیاندنی خۆی وەک مەلیکی کوردستان (١٩١٩ ز)',
      'دامەزراندنی یەکەم چاپخانە و ڕۆژنامەی فەرمی کوردی («پێشکەوتن» و «بانگی کوردستان»)'
    ],
    works: [
      'بەیاننامەکانی حکومەتی کوردستان (١٩١٩ - ١٩٢٤)'
    ],
    historicalImportance: 'یەکەمین سەرکردەی کورد لە سەدەی 20دا کە ڕاستەوخۆ دەوڵەت و شانشینی سەربەخۆی کوردستانی لە سلێمانی ڕاگەیاند.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'شۆڕشەکانی شێخ مەحمودی حەفید',
        author: 'کەمال مەزهەر ئەحمەد',
        publication: 'دەزگای ئاراس - هەولێر',
        year: '٢٠٠١',
        sourceType: 'کتێب'
      },
      {
        title: 'Kurdistan: A Modern History',
        author: 'David McDowall',
        publication: 'I.B. Tauris - London',
        year: '١٩٩٦',
        sourceType: 'توێژینەوەی ئەکادیمی'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['qazi-muhammad', 'sheikh-ubaydullah']
  },
  {
    id: 'qazi-muhammad',
    name: 'قازی محەممەد',
    kurdishName: 'پێشەوا قازی محەممەد (١٨٩٣ - ١٩٤٧ ز)',
    alternateNames: ['Qazi Muhammad', 'پێشەوا قازی'],
    category: 'پادشا و فەرمانڕەواکان',
    birthYear: '١٨٩٣ ز',
    deathYear: '١٩٤٧ ز',
    birthDate: '١٨٩٣ ز',
    deathDate: '٣١ی ئازاری ١٩٤٧ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'مەهاباد',
    relatedPlaces: ['مەهاباد', 'تەبرێز', 'تاران'],
    biography: `دامەزرێنەر و سەرۆکی کۆماری کوردستان لە مەهاباد (٢ی ڕێبەندانی ١٣٢٤ش / ٢٢ی کانونی دووەمی ١٩٤٦ز). زانا، دادوەر و سەرکردەیەکی نەتەوەیی خۆشەویست بوو کە ئاڵای کوردستان و قوتابخانەی کوردیی ڕێکخست.`,
    achievements: [
      'ڕاگەیاندنی کۆماری کوردستان لە مەهاباد (١٩٤٦ز)',
      'دابینکردنی خوێندنی فەرمی بە زمانی کوردی و ڕێکخستنی سوپای نەتەوەیی',
      'پاراستنی ئاڵای کوردستان و بەخشینی بە مەلا مصطفی بارزانی'
    ],
    works: [
      'وتار و بەیاننامە مێژوویییەکانی کۆماری مەهاباد'
    ],
    historicalImportance: 'ڕەمزی دادپەروەری و سەربەخۆییخوازیی نەتەوەیی کورد لە مێژووی سەدەی بیستەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'کۆماری کوردستان - مەهاباد ١٩٤٦',
        author: 'ویلیام ئیگڵتۆن',
        publication: 'وەرگێڕانی جەنابی جەلال تاڵەبانی',
        year: '١٩٦٣',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['sheikh-mahmud', 'celadet-bedirxan']
  },
  {
    id: 'celadet-bedirxan',
    name: 'جەلادەت عەلی بەدرخان',
    kurdishName: 'میر جەلادەت عەلی بەدرخان (١٨٩٣ - ١٩٥١ ز)',
    alternateNames: ['Celadet Alî Bedirxan', 'جەلادەت بەدرخان'],
    category: 'نووسەران',
    birthYear: '١٨٩٣ ز',
    deathYear: '١٩٥١ ز',
    birthDate: '١٨٩٣ ز',
    deathDate: '١٥ی تەممووزی ١٩٥١ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی باکوور',
    cityOrPlace: 'ئەستەمبوڵ / دیمەشق / جۆلەمێرگ',
    relatedPlaces: ['ئەستەمبوڵ', 'دیمەشق', 'با کۆپ (سوریا)'],
    biography: `ڕۆشنبیر، زمانەوان و داهێنەری ئەلفوبێی لاتینیی زمانی کوردی (ئەلفوبێی هاوار). گۆڤاری مێژوویی «هاوار»ی لە دیمەشق (١٩٣٢ز) دەرکرد کە بووە بنەمای وەرچەرخانی ڕێزمانی و ئەدەبی هاوچەرخی کوردی.`,
    achievements: [
      'داهێنانی ئەلفوبێی لاتینیی زمانی کوردی (Alfabeya Kurdî a Latînî)',
      'دەرکردنی گۆڤاری «هاوار» (١٩٣٢) و گۆڤاری «ڕۆژا نو»',
      'دانانی پەڕتووکی ڕێزمانی کوردی (Gramera Kurdî)'
    ],
    works: [
      'Gramera Kurdî (ڕێزمانی کوردی)',
      'گۆڤاری هاوار (Hawar)',
      'مستەفا کەمال و کوردستان'
    ],
    historicalImportance: 'باوکی ڕێزمان و ئەلفوبێی هاوچەرخی کوردی لە باکوور و ڕۆژئاوای کوردستان.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'گۆڤاری هاوار (کۆکراوەی ٣٦ ژمارە)',
        author: 'میر جەلادەت بەدرخان',
        publication: 'چاپخانەی تەڕەقی - دیمەشق',
        year: '١٩٣٢-١٩٤٣',
        sourceType: 'سەرچاوەی دیجیتاڵ'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['sharafkhan-bidlisi', 'ibrahim-ahmad']
  },
  {
    id: 'goran',
    name: 'گۆران (عەبدوڵڵا سلێمان)',
    kurdishName: 'عەبدوڵڵا سلێمان (گۆران)',
    alternateNames: ['Goran', 'عەبدوڵڵا گۆران'],
    category: 'شاعیران',
    birthYear: '١٩٠٤ ز',
    deathYear: '١٩٦٢ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'هەڵەبجە / سلێمانی',
    relatedPlaces: ['هەڵەبجە', 'سلێمانی', 'بەغدا'],
    biography: `نوێکەرەوەی شیعری کوردی و باوکی شیعری نوێی ڕوانگە و کێشی بڕگەیی لە کوردستان. شیعری کوردی لە کۆت و زنجیری کێشی عەرووزی عەرەبی ئازاد کرد و گەڕاندیەوە بۆ سەر موزیک و سروشتی ڕەسەنی زمانی کوردی.`,
    achievements: [
      'نوێکردنەوە و ئازادکردنی کێشی شیعری کوردی',
      'دەرکردنی کۆمەڵە شیعری «بەهەشت و یادگار» و «فرمێسک و هونەر»'
    ],
    works: [
      'بەهەشت و یادگار',
      'فرمێسک و هونەر',
      'سروشت و دەروون'
    ],
    historicalImportance: 'باوکی بزووتنەوەی نوێکاری لە شیعری هاوچەرخی کوردیدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی گۆران',
        author: 'عەبدوڵڵا گۆران / پێشەکی د. ئیحسان فوا‌ئاد',
        publication: 'بەغدا',
        year: '١٩٨٠',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1473186578172-c141e3448de2?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['nali', 'ibrahim-ahmad']
  },
  {
    id: 'ibrahim-ahmad',
    name: 'ئیبراهیم ئەحمەد',
    kurdishName: 'ئیبراهیم ئەحمەد (١٩١٤ - ٢٠٠٠ ز)',
    alternateNames: ['Ibrahim Ahmad'],
    category: 'نووسەران',
    birthYear: '١٩١٤ ز',
    deathYear: '٢٠٠٠ ز',
    period: 'سەدەی ٢٠',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'سلێمانی / بەغدا / لەندەن',
    relatedPlaces: ['سلێمانی', 'بەغدا', 'لەندەن'],
    biography: `نووسەر، ڕۆماننووس، پارێزەر و ڕامیاری دیاری کورد. نووسەری یەکەمین ڕۆمانی کوردی سۆرانی «ژانی گەل» (١٩٥٦ز). خاوەنی خزمەتێکی مەزنە لە ڕووناکبیری و ڕۆژنامەگەری کوردیدا (گۆڤاری گەلاوێژ).`,
    achievements: [
      'نووسینی ڕۆمانی مێژوویی «ژانی گەل» (١٩٥٦)',
      'دامەزراندنی گۆڤاری ڕووناکبیری «گەلاوێژ» (١٩٣٩-١٩٤٩)',
      'سەرنووسەری ڕۆژنامەی «کوردستان»'
    ],
    works: [
      'ژانی گەل',
      'کوێرەوەری (کۆمەڵە چیرۆک)',
      'دیوانی دەرکەوتنی دواڕۆژ'
    ],
    historicalImportance: 'پێشەنگی چیرۆکنووسی و ڕۆماننووسیی کوردی سۆرانی و تێکۆشەری ڕووناکبیری.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'ژانی گەل',
        author: 'ئیبراهیم ئەحمەد',
        publication: 'چاپخانەی ئەلحەوادس - بەغدا',
        year: '١٩٧٢',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['goran', 'celadet-bedirxan']
  },
  {
    id: 'cyaxares-medes',
    name: 'کەیئەخسار (کەیخوسرەو / هوڤەخشتەرە)',
    kurdishName: 'کەیئەخساری پادشای مادەکان (٦٢٥ - ٥٨٥ پ.ز)',
    alternateNames: ['Cyaxares', 'هوڤەخشتەرە', 'کەیخوسرەو'],
    category: 'پادشا و فەرمانڕەواکان',
    birthYear: '٦٤٠ پ.ز',
    deathYear: '٥٨٥ پ.ز',
    period: 'سەردەمی کۆن',
    region: 'کوردستانی ڕۆژهەڵات',
    cityOrPlace: 'ئەگباتانا (هەمەدان)',
    relatedPlaces: ['ئەگباتانا', 'نەینەوا', 'سقز (زیویە)'],
    biography: `هێزدارترین پادشای ئیمپراتۆرییەتی مادەکان، کە سوپای ڕێکخراوی مادەکانی دروستکرد و لە ساڵی ٦١٢ پ.ز بە هاوپەیمانی لەگەڵ بابلییەکان توانی ئیمپراتۆرییەتی ئاشووری بڕوخێنێت و نەینەوا بگرێت. مێژوونووسان و زمانیوانانی وەک ڤلادیمێر مینۆرسکی و ڕیزا هێدايەت پەیوەندی مێژوویی و ڕێزمانی نێوان مادەکان و گەلی کورد ڕووندەکەنەوە.`,
    achievements: [
      'ڕوخاندنی ئیمپراتۆرییەتی داگیرکاری ئاشووری لە نەینەوا (٦١٢ پ.ز)',
      'یەکخستنەوەی هۆزەکانی نیشتەجێی زاگرۆس و دروستکردنی گەورەترین ئیمپراتۆرییەتی کۆن'
    ],
    works: [
      'تۆمارە ئاشووری و بابلییەکان لەسەر سوپا و سنوورەکانی ماد'
    ],
    historicalImportance: 'لە ڕوانگەی مێژوونووسی و زمانەوانیی نەتەوەییەوە، ئیمپراتۆرییەتی ماد وەک بنەمای شارستانی و پێکهاتەی نەتەوەیی کوردانی زاگرۆس سەیر دەکرێت.',
    kurdishIdentityStatus: 'ناسراوە بە پەیوەندی بە مێژووی کورد',
    disputeNote: 'لەسەر پەیوەندیی ڕاستەوخۆی ڕەگەزیی مادەکان بە کوردەوە لە نێوان مێژوونووسانی کۆندا ڕای جیاواز هەیە. مێژوونووسانی هاوچەرخ گەلی کورد وەک یەکێک لە نەوە سەرەکییە زمانەوانی و بەرهەمە کەلتوورییەکانی میدییەکان شیکار دەکەن.',
    sources: [
      {
        title: 'The Medes and Kurds: Ethnogenesis and History',
        author: 'Vladimir Minorsky',
        publication: 'Journal of the Royal Central Asian Society',
        year: '١٩٤٠',
        sourceType: 'توێژینەوەی ئەکادیمی'
      },
      {
        title: 'The History of Herodotus',
        author: 'Herodotus',
        publication: 'Penguin Classics',
        year: '٤٤٠ پ.ز',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['salahaddin-ayyubi', 'sharafkhan-bidlisi']
  },
  {
    id: 'sherko-bekas',
    name: 'شێرکۆ بێکەس',
    kurdishName: 'شێرکۆ بێکەس (١٩٤٠ - ٢٠١٣ ز)',
    alternateNames: ['Sherko Bekas', 'شێرکۆ بێکەس'],
    category: 'کەسایەتییە کەلتوورییەکان',
    birthYear: '١٩٤٠ ز',
    deathYear: '٢٠١٣ ز',
    birthDate: '٢ی ئایاری ١٩٤٠ ز',
    deathDate: '٤ی ئابی ٢٠١٣ ز',
    period: 'سەردەمی هاوچەرخ',
    region: 'کوردستانی عێراق',
    cityOrPlace: 'سلێمانی / ستۆکهۆڵم',
    relatedPlaces: ['سلێمانی', 'سوید', 'هەولێر'],
    biography: `شاعیری مەزنی هاوچەرخی کورد و یەکێک لە دامەزرێنەرانی بزووتنەوەی ئەدەبی «ڕوانگە» (١٩٧٠). بردنەوەی خەڵاتی نێودەوڵەتی «توخۆلسکی» لە سوید (١٩٨٨). خاوەنی دەیان شاکاری شیعری و دیوانی نەتەوەیی کە وەرگێڕدراون بۆ چەندین زمانی جیهانی.`,
    achievements: [
      'بردنەوەی خەڵاتی نێودەوڵەتی توخۆلسکی بۆ ئازادی ڕادەربڕین (سوید - ١٩٨٨)',
      'داهێنانی ڕۆمانە-شیعر (Novel-Poem) و پەرەپێدانی ڕوانگە'
    ],
    works: [
      'کۆچی جلی ڕەش',
      'دەربەند پەپوولە',
      'خاچ و مار و ڕۆژژمێری شاعیرێک'
    ],
    historicalImportance: 'ئیمپراتۆری شیعری کوردی لە نیوەی دووەمی سەدەی بيستەم و سەرەتای سەدەی بيست و یەکەمدا.',
    kurdishIdentityStatus: 'پشتڕاستکراو',
    sources: [
      {
        title: 'دیوانی شێرکۆ بێکەس (مجموعه دوانزە بەرگ)',
        author: 'شێرکۆ بێکەس',
        publication: 'دەزگای سەردەم - سلێمانی',
        year: '٢٠٠٩',
        sourceType: 'کتێب'
      }
    ],
    imageResource: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    relatedFigureIds: ['goran', 'ibrahim-ahmad']
  }
];
