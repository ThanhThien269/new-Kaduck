import { createAction,props} from "@ngrx/store";
import {  question_kit } from "../models/question_kit.model";

export const loadQuestionKits = createAction(`[QuestionKit] Load QuestionKits`);
export const loadQuestionKitsSuccess = createAction(`[QuestionKit] Load QuestionKits`,props<{question_kits : question_kit[]}>());
export const loadQuestionKitsFail = createAction(`[QuestionKit] Load QuestionKits Fail`,props<{error : string}>());
