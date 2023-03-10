import { question } from './question.model';
export interface question_kit{
  id : string;
  name:string;
  description:string;
  questions : question[];
}
