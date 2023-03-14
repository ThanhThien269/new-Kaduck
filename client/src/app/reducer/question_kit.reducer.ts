import { QuestionKitState } from '../state/question_kit.state';
import * as questionKitActions from '../action/question_kit.action';
import { createReducer, on, State } from '@ngrx/store';
import { question_kit } from '../models/question_kit.model';

export const initialState: QuestionKitState = {
  question_kits: [],
  loading: false,
  error: '',
  pickedKit: null,
  isSuccess: false,
};

export const question_kitReducer = createReducer(
  initialState,
  on(questionKitActions.getQuestionKits, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionKitActions.getQuestionKitsSuccess, (state, { question_kits }) => {
    return {
      ...state,
      question_kits: question_kits,
      loading: false,
      isSuccess: true,
      error: '',
    };
  }),
  on(questionKitActions.getQuestionKitsFailure, (state, { error }) => {
    return {
      ...state,
      isSuccess: false,
      loading: false,
      error: error,
    };
  }),

  //getQuestionKit
  on(questionKitActions.getQuestionKit, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),

  on(questionKitActions.getQuestionKitSuccess, (state, { question_kit }) => {
    return {
      ...state,
      pickedKit: question_kit,
      loading: false,
      error: '',
    };
  }),

  on(questionKitActions.getQuestionKitFailure, (state, { error }) => {
    return {
      ...state,
      isSuccess: false,
      loading: false,
      error: error,
    };
  }),

  //postQuestionKit
  on(questionKitActions.postQuestionKit, (state, { question_kit }) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),

  on(questionKitActions.postQuestionKitSuccess, (state, { question_kit }) => {
    return {
      ...state,
      question_kits: [...state.question_kits, question_kit],
      loading: false,
      error: '',
    };
  }),

  on(questionKitActions.postQuestionKitFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),
  //updateQuestionKit
  on(questionKitActions.updateQuestionKit, (state) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionKitActions.updateQuestionKitSuccess, (state, { question_kit }) => {
    return {
      ...state,
      question_kits: state.question_kits.map((quest) => {
        if (quest.id === question_kit.id) {
          return question_kit;
        }
        return quest;
      }),
      isSuccess: true,
      loading: false,
      error: '',
    };
  }),
  on(questionKitActions.updateQuestionKitFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  })
);
