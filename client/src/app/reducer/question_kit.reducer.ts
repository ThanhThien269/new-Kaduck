import { QuestionKitState } from "../state/question_kit.state";
import * as questionKitActions from "../action/question_kit.action";
import { createReducer, on } from "@ngrx/store";

export const initialState: QuestionKitState = {
  question_kits: [],
  loading: false,
  error: "",
}

export const questionKitReducer = createReducer(
  initialState,
  on(questionKitActions.loadQuestionKits, (state) => {
    return { ...state, loading: true };
  }),
  on(questionKitActions.loadQuestionKitsSuccess, (state, action) => {
    return ({ ...state, question_kits: action.question_kits, loading: false });
  }),
  on(questionKitActions.loadQuestionKitsFail, (state, action) => {
    return ({ ...state, error: action.error, loading: false });
  }),
)
