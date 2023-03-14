import { question_kit } from '../models/question_kit.model';

export interface QuestionKitState {
  question_kits: question_kit[];
  pickedKit: question_kit | null;
  isSuccess: boolean;
  loading: boolean;
  error: string;
}
