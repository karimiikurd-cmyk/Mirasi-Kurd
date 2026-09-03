export interface ZhaniGalChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle?: string;
  readTime: string;
  views?: number;
  summary: string;
  keyCharacters: string[];
  locations: string[];
  fullText: string;
}

export interface ZhaniGalNovel {
  title: string;
  kurdishTitle: string;
  author: string;
  authorYears: string;
  yearWritten: string;
  publicationCity: string;
  description: string;
  historicalSignificance: string;
  totalChapters: number;
  chapters: ZhaniGalChapter[];
}
