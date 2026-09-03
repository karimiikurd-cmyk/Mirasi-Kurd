export type CategoryType = 
  | 'شێخ و زانایان'
  | 'شاعیران'
  | 'نووسەران'
  | 'کەسایەتییە مێژوویی و کەلتوورییەکان'
  | 'چیرۆک و ئەفسانەکان'
  | 'ئەدەب و هونەر'
  | 'کەسایەتییە سیاسییەکان';

export type HistoricalCategoryType =
  | 'شاعیران'
  | 'نووسەران'
  | 'شێخ و زانایان'
  | 'فەرمانڕەواکان'
  | 'میر و ئەمیرەکان'
  | 'فەرماندەکان'
  | 'زانایان'
  | 'کەسایەتییە کەلتوورییەکان'
  | 'کەسایەتییە مێژووییەکان'
  | 'هونەرمەندان'
  | 'ڕۆشنبیران'
  | 'کەسایەتییە سیاسییەکان'
  | 'پادشا و فەرمانڕەواکان'
  | 'سەرباز و فەرماندەکان';

export type PoliticalSubcategoryType =
  | 'فەرمانڕەوا و میرە کۆنەکان'
  | 'فەرمانڕەوا و پادشاکان'
  | 'فەرمانڕەوا و میرەکان'
  | 'سەرکردە سیاسییە مێژووییەکان'
  | 'سەرکردە سەربازی و سیاسییەکان'
  | 'ڕێبەرانی سیاسی'
  | 'دیپلۆماتەکان'
  | 'دیپلۆماتکاران'
  | 'نوێنەرانی سیاسی'
  | 'کەسایەتییە سیاسییە هاوچەرخەکان'
  | 'دامەزرێنەر و سەرکردەی ڕێکخراوە سیاسییەکان'
  | 'کەسایەتییە سیاسییە ژنەکان'
  | 'کەسایەتییە سیاسییە مێژووییە ژنەکان'
  | 'تێکۆشەرانی سیاسی';

export type HistoricalPeriodType =
  | 'سەردەمی کۆن'
  | 'سەردەمی ناوەڕاست'
  | 'سەردەمی ئەیوبییەکان'
  | 'سەدەی ١٦'
  | 'سەدەی ١٧'
  | 'سەدەکانی ١٦ و ١٧'
  | 'سەدەی ١٨'
  | 'سەدەی ١٩'
  | 'سەدەی ٢٠'
  | 'سەردەمی هاوچەرخ';

export type SourceStatusType =
  | 'پشتڕاستکراو'
  | 'بەهێز پشتیوانی دەکرێت'
  | 'لە سەرچاوەکاندا جیاوازی هەیە'
  | 'ناسراوە بە پەیوەندی بە مێژووی کورد'
  | 'پێویستی بە لێکۆڵینەوەی زیاتر هەیە'
  | 'سەرچاوەی بەهێز'
  | 'نادیار';

export type SourceType =
  | 'کتێب'
  | 'دانیشتوانی زانستی'
  | 'فەرهەنگی مێژوویی'
  | 'ئینسایکڵۆپیدیا'
  | 'توێژینەوەی ئەکادیمی'
  | 'سەرچاوەی دیجیتاڵ'
  | 'بەڵگەنامەی مێژوویی'
  | 'بەڵگەنامەی فەرمی';

export interface SourceItem {
  title: string;
  author?: string;
  publication?: string;
  year?: string;
  url?: string;
  sourceType: SourceType;
}

export interface PoliticalEvent {
  id?: string;
  title: string;
  year: string;
  description: string;
  location?: string;
  historicalImpact?: string;
}

export interface HistoricalFigureImage {
  url: string;
  thumbnailUrl?: string;
  source: string;
  sourceUrl: string;
  license?: string;
  author?: string;
  year?: string;
  type: 'photograph' | 'historical-artwork' | 'painting' | 'illustration' | 'document' | 'statue';
  caption?: string;
  verified: boolean;
}

export interface ImageItem {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  caption: string;
  figureId?: string;
  figureName?: string;
  category: 'کەسایەتییەکان' | 'شاعیران' | 'نووسەران' | 'کەسایەتییە مێژووییەکان' | 'کەسایەتییە سیاسییەکان' | 'شوێنە مێژووییەکان' | 'بەڵگەنامەکان';
  region?: 'کوردستانی ئێران' | 'کوردستانی عێراق' | 'کوردستانی تورکیا' | 'کوردستانی سوریا' | 'شام و میسر';
  era?: string;
  imageSource: string;
  sourceUrl?: string;
  photographer?: string;
  license?: string;
  licenseUrl?: string;
  hasRealPhoto: boolean;
  verificationStatus: SourceStatusType;
}

export interface DetailedWork {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  workType: 'شیعر' | 'دیوانی شیعر' | 'کتێب' | 'وتار' | 'داستان' | 'پەڕتووک' | 'نامه' | 'دەستنووس' | 'بەڵگەنامەی مێژوویی' | 'سند' | 'فەرهەنگنووسی' | 'ڕۆمان' | 'گۆڤار و ڕێزمان' | 'گۆڤار';
  date?: string;
  originalLanguage?: string;
  excerpt: string;
  fullText?: string;
  source: string;
  sourceUrl?: string;
  copyrightStatus: 'Public Domain (مایەی گشتی)' | 'مافی لەبەرگرتنەوە پارێزراوە - پارچەی کورت' | 'پێویست بە سەرچاوە';
  isVerified: boolean;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  kurdishName: string;
  alternateNames?: string[];
  category: HistoricalCategoryType;
  politicalSubcategory?: PoliticalSubcategoryType;
  gender?: 'پیاو' | 'ژن';
  birthYear?: string;
  deathYear?: string;
  birthDate?: string;
  deathDate?: string;
  period: HistoricalPeriodType;
  region: string;
  cityOrPlace?: string;
  relatedPlaces: string[];
  biography: string;
  achievements: string[];
  works?: string[];
  detailedWorks?: DetailedWork[];
  historicalImportance: string;
  politicalRole?: string;
  politicalEvents?: PoliticalEvent[];
  politicalInfluence?: string;
  kurdishIdentityStatus: SourceStatusType;
  disputeNote?: string;
  sources: SourceItem[];
  imageResource?: string;
  hasRealPhoto?: boolean;
  photoSourceNote?: string;
  gallery?: HistoricalFigureImage[];
  galleryImages?: ImageItem[];
  relatedFigureIds?: string[];
}

export type StoryCategoryType = 
  | 'چیرۆکی کۆن'
  | 'ئەفسانە'
  | 'چیرۆکی خەڵکی'
  | 'چیرۆکی خۆشەویستی'
  | 'چیرۆکی مێژوویی'
  | 'چیرۆکە ناوچەییەکان'
  | 'چیرۆکی کەسایەتییەکان'
  | 'ئەفسانەکان'
  | 'چیرۆکە کەلتوورییەکان';

export interface Person {
  id: string;
  name: string;
  alternateName?: string;
  category: CategoryType;
  birthYear: string;
  deathYear: string;
  birthPlace: string;
  historicalPeriod: string;
  biography: string;
  works: string[];
  contribution: string;
  historicalImportance: string;
  sources: string[];
  imageResource: string;
  shortDescription: string;
  quote?: string;
  hasRealPhoto?: boolean;
  photoSourceNote?: string;
  gender?: 'پیاو' | 'ژن';
  gallery?: HistoricalFigureImage[];
}

export interface Story {
  id: string;
  title: string;
  category: StoryCategoryType;
  region: string;
  city?: string;
  shortDescription: string;
  historicalContext: string;
  fullStory: string;
  sources: string[];
  readTimeMinutes: number;
  moralOrTheme?: string;
}

export interface LiteratureWork {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  workType: 'شیعر' | 'دیوانی شیعر' | 'پەڕتووک' | 'وتار' | 'داستان' | 'کتێب' | 'نامه' | 'دەستنووس' | 'فەرهەنگنووسی' | 'پەند و کەلتوور';
  shortDescription: string;
  publicExcerpt: string;
  fullText?: string;
  historicalPeriod: string;
  category: CategoryType;
  source?: string;
  copyrightStatus?: 'Public Domain (مایەی گشتی)' | 'مافی لەبەرگرتنەوە پارێزراوە - پارچەی کورت' | 'پێویست بە سەرچاوە';
  originalLanguage?: string;
  date?: string;
}

export interface HistoricalCity {
  id: string;
  name: string;
  region: 'کوردستانی ئێران' | 'کوردستانی عێراق' | 'کوردستانی تورکیا' | 'کوردستانی سوریا' | 'شام و میسر';
  shortHistory: string;
  relatedFigureIds: string[];
  poetsAndWriters?: string[];
  politicalFigures?: string[];
  historicalPlaces: string[];
  cultureAndArt: string;
}

export interface NaliPoem {
  id: string;
  poet: string;
  title: string;
  letter: string;
  poemNumber: number;
  sourceFile: string;
  pages: string;
  fullText: string;
  excerpt: string;
}

export type ActiveTab = 
  | 'home' 
  | 'people' 
  | 'political'
  | 'timeline' 
  | 'stories' 
  | 'search' 
  | 'favorites' 
  | 'literature' 
  | 'nali'
  | 'khani'
  | 'sherko'
  | 'sheikh-othman'
  | 'siraj-al-qulub'
  | 'bar-pahnaye-yad'
  | 'siraj-munir'
  | 'zhani-gal'
  | 'regions' 
  | 'gallery';



