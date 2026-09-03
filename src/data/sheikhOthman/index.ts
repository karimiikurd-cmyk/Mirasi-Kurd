import { SheikhOthmanWork } from './types';
import { sheikhDirectPoems } from './sheikhPoems';
import { sheikhMarathiKurdish } from './marathiKurdish';
import { sheikhMarathiFarsiArabic } from './marathiFarsiArabic';
import { sheikhTafsirTeen } from './tafsirTeen';
import { sheikhHistoryAndLetters } from './historyAndLetters';
import { sheikhSirajAlQulubWorks } from './sirajAlQulubText';
import { sheikhFourTreatises } from './fourTreatises';
import { sheikhHistoricalLettersFull } from './historicalLettersFull';
import { sheikhSirajMunirKaramat } from './sirajMunirKaramat';

export * from './types';
export {
  sheikhDirectPoems,
  sheikhMarathiKurdish,
  sheikhMarathiFarsiArabic,
  sheikhTafsirTeen,
  sheikhHistoryAndLetters,
  sheikhSirajAlQulubWorks,
  sheikhFourTreatises,
  sheikhHistoricalLettersFull,
  sheikhSirajMunirKaramat
};

// ================= 1. بەرهەم و دەقەکانی پەڕتووکی «سراج القلوب» (دەق، بیرەوەرییەکان، چوار رسالە، نامە دەستنووسەکان) =================
export const SIRAJ_AL_QULUB_WORKS: SheikhOthmanWork[] = [
  ...sheikhSirajAlQulubWorks,
  ...sheikhFourTreatises,
  ...sheikhHistoricalLettersFull
];

export const SIRAJ_AL_QULUB_SECTIONS = [
  {
    id: 'all',
    title: 'تەواوی پەڕتووکی سراج القلوب',
    description: 'دەقی تەواوی سراج القلوب، چوار رسالەی عیرفانی و نامە مێژووییەکان',
    count: SIRAJ_AL_QULUB_WORKS.length
  },
  {
    id: 'siraj-memoirs',
    title: 'دەق و بیرەوەرییەکانی سراج القلوب',
    description: 'پێشەکی و تەقریزەکان، بەشارەت و زەمانی حەزرەتی ضیاءالدین، بیرەوەرییەکانی دووڕۆ و بیارە، کەرامات و ڕووداوەکان',
    count: sheikhSirajAlQulubWorks.length
  },
  {
    id: 'treatises',
    title: 'چوار رسالەکەی حەزرەتی شێخ',
    description: 'شُهُبٌ ثاقِبَة، ئامۆژگاری بۆ ئەهلی تەریقەت، ڕابیتە و ئاداب بۆ دەستپێکەران، وەڵامی شێخ نزیهی لوبنانی',
    count: sheikhFourTreatises.length
  },
  {
    id: 'letters-historical',
    title: 'نامە و بەڵگەنامە مێژووییەکان',
    description: 'نامەکانی حەزرەتی شێخ بۆ عولەمای کورد و میسر و عێراق، نامەکانی شێخ عەلائەدین، شێخ حوسامەدین و عەللامە مودەڕڕیس',
    count: sheikhHistoricalLettersFull.length
  }
];

// ================= 2. بەرهەمەکانی پەڕتووکی یادنامەی «بر پهنه یاد» (ئەشعار، مرثیە و تەفسیری تین) =================
export const BAR_PAHNAYE_YAD_WORKS: SheikhOthmanWork[] = [
  ...sheikhDirectPoems,
  ...sheikhMarathiKurdish,
  ...sheikhMarathiFarsiArabic,
  ...sheikhTafsirTeen,
  ...sheikhHistoryAndLetters
];

export const BAR_PAHNAYE_YAD_SECTIONS = [
  {
    id: 'all',
    title: 'تەواوی یادنامەی بر پهنه یاد',
    description: 'کۆی شیعرەکان، مرثیەکان، تەفسیری تین و مێژووی تەریقەت',
    count: BAR_PAHNAYE_YAD_WORKS.length
  },
  {
    id: 'poems',
    title: 'شیعرەکانی حەزرەتی شێخ و مەولانا',
    description: 'قەسیدە و هۆنراوەکانی حەزرەتی شێخ عوسمان و شێخ مەولانا خالید و پەندنامەی کوردی',
    count: sheikhDirectPoems.length
  },
  {
    id: 'marathi-kurdish',
    title: 'مرثیە و شیوەنە کوردییەکان',
    description: 'شیوەن و قەسیدەکانی شاعیرانی ناوداری کوردستان (هەورامی و سۆرانی)',
    count: sheikhMarathiKurdish.length
  },
  {
    id: 'marathi-fa-ar',
    title: 'مرثیە و شیعرە فارسی و عەرەبییەکان',
    description: 'مرثیە و شیعرەکانی شاعیرانی ئێران و عەرەب بە فارسی و عەرەبی',
    count: sheikhMarathiFarsiArabic.length
  },
  {
    id: 'tafsir',
    title: 'تەفسیری سوورەی مبارەکی تین',
    description: 'دەقی تەواوی تەفسیری عیرفانی و فەلسەفیی سوورەی تین',
    count: sheikhTafsirTeen.length
  },
  {
    id: 'tariqa-history',
    title: 'مێژووی تەریقەت و نامەی عیرفانی',
    description: 'خشتەی مێژوویی ١٠ ڕابەری گەورەی تەریقەت و نامەی عیرفانیی حەزرەتی شێخ',
    count: sheikhHistoryAndLetters.length
  }
];

// ================= 3. بەرهەمەکانی پەڕتووکی «سراج منیر» (٥٥ کەرامات و بەسەرهاتی پیر) =================
export const SIRAJ_MUNIR_WORKS: SheikhOthmanWork[] = [
  ...sheikhSirajMunirKaramat
];

export const SIRAJ_MUNIR_SECTIONS = [
  {
    id: 'all',
    title: 'تەواوی پەڕتووکی «سراجِ منیر»',
    description: 'دەقی ٥٥ کەراماتی حەزرەتی شێخ، بەسەرهاتی تەمەسسوکی کاتب، و بەڵگەنامەی شەرعی',
    count: SIRAJ_MUNIR_WORKS.length
  },
  {
    id: 'intro-and-allegiance',
    title: 'دیباچە و تەمەسسوکی کاتب',
    description: 'دیباچەی سراج منیر، پێناسەی پیر، عەلی عیرفان، مەلاباقری باڵک و ئیلهامی چوار لەقەبەکە',
    count: 2
  },
  {
    id: 'karamat-hawraman',
    title: 'کەراماتی هەورامان و ڕۆژهەڵات (١-١٥)',
    description: 'کۆساڵان، ژیوای، دەفعی سن، پلنگ، مەحموودئاوا، تونێلی دەربەندیخان و ڕزگاربوون لە کەوتنەخوارەوە',
    count: 2
  },
  {
    id: 'karamat-spiritual',
    title: 'ئەسرار و کەراماتی ڕۆحانی (١٦-٢٥)',
    description: 'عروجی نەفس لە سەرووی عەرش، ٢٠ بازنەی ویلایەت، مەلا ئەحمەد ئیمام، و بینینی صوڕەتی میسالی',
    count: 1
  },
  {
    id: 'karamat-disciples',
    title: 'کەراماتی موریدان و دەوروبەر (٢٦-٣٥)',
    description: 'زیکری قەلبی فەقێ خەلیل، هانای تاڵش، درێژبوونی دارەکانی پردی دووڕۆ، و قسەکردنی بەرد',
    count: 1
  },
  {
    id: 'karamat-international',
    title: 'کەراماتی نێودەوڵەتی و پاراستن (٣٦-٥٥)',
    description: 'کەشتیی بەڕازیل لە لوبنان، فڕۆکەی حەجاج، ڕزگاربوون لە ئێعدام و تێرۆر، و کانیی وەیسی قەرەنی',
    count: 2
  },
  {
    id: 'tasawwuf-defense',
    title: 'توێژینەوەی شەرعی و قورئانی',
    description: 'بەڵگەنامەی ئایەت و حەدیس لەسەر کەراماتی ئەولیا و وەڵامدانەوەی مونکیران لە لایەن مامۆستا فەنایی',
    count: 1
  }
];

export const ALL_SHEIKH_OTHMAN_WORKS: SheikhOthmanWork[] = [
  ...SIRAJ_AL_QULUB_WORKS,
  ...BAR_PAHNAYE_YAD_WORKS,
  ...SIRAJ_MUNIR_WORKS
];

export const SHEIKH_OTHMAN_SECTIONS = [
  ...SIRAJ_AL_QULUB_SECTIONS,
  ...BAR_PAHNAYE_YAD_SECTIONS.filter(s => s.id !== 'all'),
  ...SIRAJ_MUNIR_SECTIONS.filter(s => s.id !== 'all')
];



