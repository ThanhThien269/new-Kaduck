import { createAction,props } from "@ngrx/store";
import {  question } from "/../new-Kaduck/client/src/app/models/question.model";

export const loadQuestions = createAction(`[Question] Load Questions`);
export const loadQuestionsSuccess = createAction(`[Question] Load Questions`,props<{questions : question[]}>());
export const loadQuestionsFail = createAction(`[Question] Load Questions Fail`,props<{error : string}>());
