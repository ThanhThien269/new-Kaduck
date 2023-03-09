import { QuestionState } from "../state/question.state";
import * as questionActions from "../action/question.action";
import { createReducer, on } from "@ngrx/store";

export const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: "",
}

export const questionReducer = createReducer(
  initialState,
  on(questionActions.loadQuestions, (state) => {
    return { ...state, loading: true };
  }),
  on(questionActions.loadQuestionsSuccess, (state, action) => {
    return ({ ...state, questions: action.questions, loading: false });
  }),
  on(questionActions.loadQuestionsFail, (state, action) => {
    return ({ ...state, error: action.error, loading: false });
  }),
)
