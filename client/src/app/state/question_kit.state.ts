import { question_kit } from '../models/question_kit.model';

export interface QuestionKitState {
  question_kits: question_kit[];
  question_kit: question_kit;
  loading: boolean;
  error: string;
}
