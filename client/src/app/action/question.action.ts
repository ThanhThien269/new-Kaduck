import { createAction, props } from '@ngrx/store';
import { question } from '../models/question.model';

//getQuestion

export const getQuestions = createAction('[Question] getQuestions');
export const getQuestionsSuccess = createAction(
  '[Question] getQuestionsSuccess',
  props<{ questions: question[] }>()
);
export const getQuestionsFailure = createAction(
  '[Question] getQuestionsFailure',
  props<{ error: string }>()
);
//get question by id
export const getQuestion = createAction(
  '[Question] getQuestion',
  props<{ id: string }>()
);
export const getQuestionSuccess = createAction(
  '[Question] getQuestionSuccess',
  props<{ question: question }>()
);
export const getQuestionFailure = createAction(
  '[Question] getQuestionFailure',
  props<{ error: string }>()
);
//add new question
export const postQuestion = createAction(
  '[Question] postQuestion',
  props<{ question: question }>()
);
export const postQuestionSuccess = createAction(
  '[Question] postQuestionSuccess',
  props<{ question: question }>()
);
export const postQuestionFailure = createAction(
  '[Question] postQuestionFailure',
  props<{ error: string }>()
);
//update question
export const updateQuestion = createAction(
  '[Question] updateQuestion',
  props<{ question: question }>()
);
export const updateQuestionSuccess = createAction(
  '[Question] updateQuestionSuccess',
  props<{ question: question }>()
);
export const updateQuestionFailure = createAction(
  '[Question] updateQuestionFailure',
  props<{ error: string }>()
);
//delete question
export const deleteQuestion = createAction(
  '[Question] deleteQuestion',
  props<{ question: question }>()
);
export const deleteQuestionSuccess = createAction(
  '[Question] deleteQuestionSuccess',
  props<{ id: string }>()
);
export const deleteQuestionFailure = createAction(
  '[Question] deleteQuestionFailure',
  props<{ error: string }>()
);
