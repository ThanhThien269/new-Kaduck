import { createAction,props} from "@ngrx/store";
import { question_kit } from "../models/question_kit.model";

export const getQuestionKits = createAction("[QuestionKit] getQuestionKits");
export const getQuestionKitsSuccess = createAction("[QuestionKit] getQuestionKitsSuccess",props<{ question_kits: question_kit[] }>());
export const getQuestionKitsFailure = createAction("[QuestionKit] getQuestionKitsFailure",props<{ error:string}>());

export const getQuestionKit = createAction("[QuestionKit] getQuestionKit", props<{ id:string }>());
export const getQuestionKitSuccess = createAction("[QuestionKit] getQuestionKitSuccess",props<{ question_kit :question_kit }>());
export const getQuestionKitFailure = createAction("[QuestionKit] getQuestionKitFailure",props<{ error:string }>());

export const postQuestionKit = createAction("[QuestionKit] postQuestionKit", props<{ question_kit:question_kit }>());
export const postQuestionKitSuccess = createAction("[QuestionKit] postQuestionKitSuccess",props<{ question_kit: question_kit }>());
export const postQuestionKitFailure = createAction("[QuestionKit] postQuestionKitFailure",props<{ error:string }>());

export const updateQuestionKit = createAction("[QuestionKit] updateQuestionKit", props<{ question_kit: question_kit }>());
export const updateQuestionKitSuccess = createAction("[QuestionKit] updateQuestionKitSuccess",props<{ question_kit: question_kit }>());
export const updateQuestionKitFailure = createAction("[QuestionKit] updateQuestionKitFailure",props<{ error:string }>());

export const deleteQuestionKit = createAction("[QuestionKit] deleteQuestionKit", props<{ question_kit: question_kit }>());
export const deleteQuestionKitSuccess = createAction("[QuestionKit] deleteQuestionKitSuccess",props<{ question_kit: question_kit }>());
export const deleteQuestionKitFailure = createAction("[Question] deleteQuestionFailure",props<{ error:string }>());

export const deleteAllQuestionKit = createAction("[QuestionKit] deleteAllQuestionKit", props<{ question_kits: question_kit[] }>());
export const deleteAllQuestionKitSuccess = createAction("[QuestionKit] deleteAllQuestionKitSuccess",props<{ question_kits: question_kit[] }>());
export const deleteAllQuestionKitFailure = createAction("[Question] deleteAllQuestionFailure",props<{ error:string }>());
