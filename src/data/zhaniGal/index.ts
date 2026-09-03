import { ZhaniGalNovel, ZhaniGalChapter } from './types';
import { chapters01to05 } from './chapter01to05';
import { chapters06to10 } from './chapter06to10';
import { chapters11to15 } from './chapter11to15';
import { chapters16to19 } from './chapter16to19';

export const ALL_ZHANI_GAL_CHAPTERS: ZhaniGalChapter[] = [
  ...chapters01to05,
  ...chapters06to10,
  ...chapters11to15,
  ...chapters16to19,
];

export const ZHANI_GAL_NOVEL: ZhaniGalNovel = {
  title: 'ژانی گەل',
  kurdishTitle: 'ڕۆمانی «ژانی گەل» - شاکاری ئەدەبیی ئیبراهیم ئەحمەد',
  author: 'ئیبراهیم ئەحمەد',
  authorYears: '١٩١٤ - ٢٠٠٠ ز',
  yearWritten: '١٩٥٦ ز (سلێمانی)',
  publicationCity: 'سلێمانی / بەغدا / ئەورووپا',
  description: 'ڕۆمانی «ژانی گەل» یەکێکە لە مەزنترین و یەکەمین ڕۆمانە ڕاستەقینەکانی مێژووی ئەدەبی هاوچەرخی کوردی. ڕۆمانەکە لە ١٩ بەشی دراماتیکی و سەرنجڕاکێشدا باس لە بەسەرهاتی تراژیدیی «جوامێر»، خێزانەکەی «کاڵێ» و کوڕەکەی «هیوا» دەکات لە سەردەمی ستەمی دەسەڵات، زیندانی دەیەی چل و پەنجاکانی سەدەی بیستەم و خەباتی ڕزگاریخوازیی گەلی کورد.',
  historicalSignificance: '«ژانی گەل» بە خاڵی وەرچەرخان لە ئەدەبی ڕۆماننووسیی کوردی دادەنرێت؛ تیایدا ژانی لەدایکبوونی کۆرپەیەک بە شێوەیەکی سیمبۆلیک گرێ دەدرێتەوە بە ژانی لەدایکبوونی نەتەوەیەک بەرەو ئازادی و ڕزگاری.',
  totalChapters: ALL_ZHANI_GAL_CHAPTERS.length,
  chapters: ALL_ZHANI_GAL_CHAPTERS,
};

export * from './types';
