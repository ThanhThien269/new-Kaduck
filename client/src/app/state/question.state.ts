import { question } from 'src/app/models/question.model';

export interface QuestionState {
  questions: question[];
  showedQuestion: question | null;
  isSuccess: boolean;
  loading: boolean;
  error: string;
}
