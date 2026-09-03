import { SherkoPoem } from './types';
import { sherkoDarbandPoems } from './sherkoDarband';
import { sherkoBonnamaPoems } from './sherkoBonnama';
import { sherkoRwangaPoems } from './sherkoRwanga';
import { sherkoNishtimanPoems } from './sherkoNishtiman';
import { sherkoWasyatPoems } from './sherkoWasyat';

export * from './types';

export const ALL_SHERKO_POEMS: SherkoPoem[] = [
  ...sherkoDarbandPoems,
  ...sherkoBonnamaPoems,
  ...sherkoRwangaPoems,
  ...sherkoNishtimanPoems,
  ...sherkoWasyatPoems,
];

export const SHERKO_SECTIONS = [
  'هەموویان',
  'دەربەندی پەپوولە',
  'بۆننامە و ملوانکە',
  'ڕوانگە و شیعری نوێ',
  'کۆچ و نیشتمان',
  'وەسیەتنامە و کۆتایی',
] as const;

export const SHERKO_TOTAL_COUNT = ALL_SHERKO_POEMS.length;
