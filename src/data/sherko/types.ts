export interface SherkoPoem {
  id: string;
  number: number;
  title: string;
  incipit: string;
  section: 'دەربەندی پەپوولە' | 'بۆننامە و ملوانکە' | 'ڕوانگە و شیعری نوێ' | 'کۆچ و نیشتمان' | 'وەسیەتنامە و کۆتایی';
  year?: string;
  fullText: string;
  notes?: string;
  theme?: string;
}
