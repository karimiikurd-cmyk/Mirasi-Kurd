export type CategoryType = 
  | 'شێخ و زانایان'
  | 'شاعیران'
  | 'نووسەران'
  | 'کەسایەتییە مێژوویی و کەلتوورییەکان'
  | 'چیرۆک و ئەفسانەکان'
  | 'ئەدەب و هونەر';

export type HistoricalCategoryType =
  | 'پادشا و فەرمانڕەواکان'
  | 'میر و ئەمیرەکان'
  | 'شێخ و زانایان'
  | 'شاعیران'
  | 'نووسەران'
  | 'زانایان'
  | 'سەرباز و فەرماندەکان'
  | 'کەسایەتییە کەلتوورییەکان'
  | 'کەسایەتییە مێژووییەکان';

export type HistoricalPeriodType =
  | 'سەردەمی کۆن'
  | 'سەردەمی ناوەڕاست'
  | 'سەردەمی ئەیوبییەکان'
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
  | 'پێویستی بە لێکۆڵینەوەی زیاتر هەیە';

export type SourceType =
  | 'کتێب'
  | 'دانیشتوانی زانستی'
  | 'فەرهەنگی مێژوویی'
  | 'ئینسایکڵۆپیدیا'
  | 'توێژینەوەی ئەکادیمی'
  | 'سەرچاوەی دیجیتاڵ';

export interface SourceItem {
  title: string;
  author?: string;
  publication?: string;
  year?: string;
  url?: string;
  sourceType: SourceType;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  kurdishName: string;
  alternateNames?: string[];
  category: HistoricalCategoryType;
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
  historicalImportance: string;
  kurdishIdentityStatus: SourceStatusType;
  disputeNote?: string;
  sources: SourceItem[];
  imageResource?: string;
  relatedFigureIds?: string[];
}

export type StoryCategoryType = 
  | 'چیرۆکی کۆن'
  | 'ئەفسانە'
  | 'چیرۆکی خەڵکی'
  | 'چیرۆکی خۆشەویستی'
  | 'چیرۆکی مێژوویی';

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
}

export interface Story {
  id: string;
  title: string;
  category: StoryCategoryType;
  region: string;
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
  workType: 'شیعر' | 'پەڕتووک' | 'وتار' | 'داستان';
  shortDescription: string;
  publicExcerpt: string;
  historicalPeriod: string;
  category: CategoryType;
}

export type ActiveTab = 'home' | 'people' | 'timeline' | 'stories' | 'search' | 'favorites' | 'literature' | 'regions';

