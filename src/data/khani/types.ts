export interface KhaniPoem {
  id: string;
  number: number;
  title: string;
  incipit: string;
  section: 'دیوان' | 'تاریخا ئاڤاکرنێ' | 'پاشبەند (مەشکووک)';
  verses: {
    firstLine: string;
    secondLine?: string;
  }[];
  pageReference?: string;
  notes?: string;
}
