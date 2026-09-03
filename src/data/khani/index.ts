import { KHANI_POEMS_GROUP1 } from './khaniPoems1';
import { KHANI_POEMS_GROUP2 } from './khaniPoems2';
import { KHANI_POEMS_GROUP3 } from './khaniPoems3';
import { KHANI_POEMS_GROUP4 } from './khaniPoems4';
import { KhaniPoem } from './types';

export const ALL_KHANI_POEMS: KhaniPoem[] = [
  ...KHANI_POEMS_GROUP1,
  ...KHANI_POEMS_GROUP2,
  ...KHANI_POEMS_GROUP3,
  ...KHANI_POEMS_GROUP4
];

export * from './types';
