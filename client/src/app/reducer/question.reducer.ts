import { question } from './../models/question.model';
import {
  getQuestionsSuccess,
  getQuestionsFailure,
} from './../action/question.action';
import { QuestionState } from '../state/question.state';
import * as questionActions from '../action/question.action';
import { createReducer, on } from '@ngrx/store';

export const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: '',
  isSuccess: false,
  showedQuestion: null,
};

export const questionReducer = createReducer(
  initialState,
  on(questionActions.getQuestions, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionActions.getQuestionsSuccess, (state, { questions }) => {
    return {
      ...state,
      questions: questions,
      loading: false,
      isSuccess: true,
      error: '',
    };
  }),
  on(questionActions.getQuestionsFailure, (state, { error }) => {
    return {
      ...state,
      isSuccess: false,
      loading: false,
      error: error,
    };
  }),
  //getQuestion
  on(questionActions.getQuestion, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionActions.getQuestionSuccess, (state, { question }) => ({
    ...state,
    showedQuestion: question,
    loading: false,
    error: '',
  })),
  on(questionActions.getQuestionFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),

  //postQuestion
  on(questionActions.postQuestion, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionActions.postQuestionSuccess, (state, { question }) => {
    return {
      ...state,
      questions: [...state.questions, question],
      isSuccess: true,
      loading: false,
      error: '',
    };
  }),
  on(questionActions.postQuestionFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      isSuccess: false,
      error: error,
    };
  }),
  //updateQuestion
  on(questionActions.updateQuestion, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionActions.updateQuestionSuccess, (state, { question }) => {
    return {
      ...state,
      questions: state.questions.map((quest) => {
        if (quest.id === question.id) {
          return question;
        } else {
          return quest;
        }
      }),
      loading: false,
      error: '',
      isSuccess: true,
    };
  }),
  on(questionActions.updateQuestionFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),
  //deleteQuestion
  on(questionActions.deleteQuestion, (state, { question }) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionActions.deleteQuestionSuccess, (state, { id }) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
      loading: false,
      isSuccess: true,
      error: '',
    };
  }),
  on(questionActions.deleteQuestionFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      isSuccess: false,
      error: error,
    };
  })
);
