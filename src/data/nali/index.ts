import { NaliPoem } from '../../types';
import { naliGroup1 } from './naliGroup1';
import { naliGroup2 } from './naliGroup2';
import { naliGroup3 } from './naliGroup3';
import { naliGroup4 } from './naliGroup4';
import { naliGroup5 } from './naliGroup5';

export const ALL_NALI_POEMS: NaliPoem[] = [
  ...naliGroup1,
  ...naliGroup2,
  ...naliGroup3,
  ...naliGroup4,
  ...naliGroup5,
];

export const NALI_LETTERS = Array.from(
  new Set(ALL_NALI_POEMS.map((p) => p.letter))
);
