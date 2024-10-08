export interface Question {
  id?: number;
  type: 'MCQ' | 'Descriptive';
  question: string;
  options?: string[];
  answer: string;
  image?: string | null;
}
