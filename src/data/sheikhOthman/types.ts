export interface SheikhOthmanWork {
  id: string;
  number?: number;
  title: string;
  incipit: string;
  author: string;
  language: 'کوردی (سۆرانی)' | 'کوردی (هەورامی)' | 'فارسی' | 'عەرەبی' | 'تێکەڵاو' | 'فارسی / کوردی';
  section: 
    | 'شیعرەکانی حەزرەتی شێخ و مەولانا'
    | 'مرثیە و شیعرە کوردییەکان'
    | 'مرثیە و شیعرە فارسی و عەرەبییەکان'
    | 'تەفسیری سوورەی مبارەکی تین'
    | 'کتێبی سراج القلوب (دەق و بیرەوەرییەکان)'
    | 'رسالەکانی حەزرەتی شێخ (شهب ثاقبه، ڕابیتە، نەسیحەت)'
    | 'نامە و دەقە عیرفانییەکان'
    | 'کتێبی سراج منیر (کرامات و دەقەکان)';
  year?: string;
  pages?: string;
  sourceFile?: string;
  fullText: string;
  notes?: string;
  theme?: string;
}
