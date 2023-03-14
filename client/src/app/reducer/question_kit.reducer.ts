import { QuestionKitState } from '../state/question_kit.state';
import * as questionKitActions from '../action/question_kit.action';
import { createReducer, on, State } from '@ngrx/store';
import { question_kit } from '../models/question_kit.model';

export const initialState: QuestionKitState = {
  question_kits: [],
  question_kit: {} as question_kit,
  loading: false,
  error: '',
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
  on(
    questionKitActions.getQuestionKitsSuccess,
    (state, { question_kits, question_kit }) => {
      console.log(question_kits);
      return {
        question_kits: question_kits,
        question_kit: question_kit,
        loading: false,
        error: '',
      };
    }
  ),
  on(questionKitActions.getQuestionKitsFailure, (state, { error }) => {
    return {
      question_kits: [],
      question_kit: {} as question_kit,
      loading: false,
      error: error,
    };
  }),

  //getQuestionKit
  on(questionKitActions.getQuestionKit, (state, { id }) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),

  on(questionKitActions.getQuestionKitSuccess, (state, { question_kit }) => {
    return {
      question_kits: [...state.question_kits],
      question_kit: question_kit,
      loading: false,
      error: '',
    };
  }),

  on(questionKitActions.getQuestionKitFailure, (state, { error }) => {
    return {
      question_kits: [...state.question_kits],
      question_kit: {} as question_kit,
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
      question_kits: [...state.question_kits, question_kit],
      question_kit: question_kit,
      loading: false,
      error: '',
    };
  }),

  on(questionKitActions.postQuestionKitFailure, (state, { error }) => {
    return {
      question_kits: [...state.question_kits],
      question_kit: {} as question_kit,
      loading: false,
      error: error,
    };
  }),
  //updateQuestionKit
  on(questionKitActions.updateQuestionKit, (state, { question_kit }) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionKitActions.updateQuestionKitSuccess, (state, { question_kit }) => {
    let question_kits = state.question_kits;
    let tempQuestionKits: question_kit[] = [];

    question_kits.forEach((quest) => {
      if (quest.id === question_kit.id) {
        tempQuestionKits.push(question_kit);
        return;
      }
      tempQuestionKits.push(quest);
    });

    return {
      question_kits: tempQuestionKits,
      question_kit: question_kit,
      loading: false,
      error: '',
    };
  }),
  on(questionKitActions.updateQuestionKitFailure, (state, { error }) => {
    return {
      question_kits: [...state.question_kits],
      question_kit: {} as question_kit,
      loading: false,
      error: error,
    };
  }),
  //deleteQuestionKit
  on(questionKitActions.deleteQuestionKit, (state, { question_kit }) => {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }),
  on(questionKitActions.deleteQuestionKitSuccess, (state, { question_kit }) => {
    let question_kits = state.question_kits;
    let tempQuestionKits: question_kit[] = [];

    question_kits.forEach((quest) => {
      if (quest.id === question_kit.id) {
        return;
      }
      tempQuestionKits.push(quest);
    });

    return {
      question_kits: tempQuestionKits,
      question_kit: {} as question_kit,
      loading: false,
      error: '',
    };
  }),
  on(questionKitActions.deleteQuestionKitFailure, (state, { error }) => {
    return {
      question_kits: [...state.question_kits],
      question_kit: {} as question_kit,
      loading: false,
      error: error,
    };
  })
);
