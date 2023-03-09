import { question } from "../models/question.model";

export interface QuestionState {
  questions: question[];
  loading : boolean;
  error : string;
}
