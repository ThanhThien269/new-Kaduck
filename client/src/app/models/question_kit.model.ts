import { question } from './question.model';
export interface question_kit {
  Ownerid: string | undefined;
  id: string;
  name: string;
  description: string;
  questions: question[];
}
