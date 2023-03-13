import { question } from './../models/question.model';
import { getQuestionsSuccess, getQuestionsFailure } from './../action/question.action';
import { QuestionState } from "../state/question.state";
import * as questionActions from "../action/question.action";
import { createReducer, on } from "@ngrx/store";

export const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: "",
}

export const questionReducer = createReducer (
  initialState,
  on(questionActions.getQuestions, (state) => {
    return {
      ...state,
      loading:true,
      error:''
    }
  }),
  on(questionActions.getQuestionsSuccess, (state, {questions}) => {
    return {
      questions:questions,
      loading:false,
      error:''
    }
  }),
  on(questionActions.getQuestionsFailure, (state, {error}) => {
    return {
      questions:[],
      loading:false,
      error: error
    }
  }),
  //getQuestion
  on(questionActions.getQuestion, (state, {id}) => {
    return {
      ...state,
      loading:true,
      error:''
    }
  }),
  on(questionActions.getQuestionSuccess, (state, { question }) => {
    return {
      questions:[...state.questions, question],
      loading:false,
      error:''
    }
  }),
  on(questionActions.getQuestionFailure, (state, {error}) => {
    return {
      questions:[...state.questions],
      loading:false,
      error: error
    }
  }),

  //postQuestion
  on(questionActions.postQuestion, (state, {question}) => {
    return {
      ...state,
      loading:true,
      error:''
    }
  }),
  on(questionActions.postQuestionSuccess, (state, {question}) => {
    return {
      questions:[...state.questions,question],
      loading:false,
      error:''
    }
  }),
  on(questionActions.postQuestionFailure, (state, {error}) => {
    return {
      questions:[...state.questions],
      loading:false,
      error: error
    }
  }),
  //updateQuestion
  on(questionActions.updateQuestion, (state, {question}) => {
    return {
      ...state,
      loading:true,
      error:''
    }
  }),
  on(questionActions.updateQuestionSuccess, (state, {question}) => {
    let questions = state.questions;
    let tempQuestions: question[]=[];

    questions.forEach((quest)=>{
      if(quest.id === question.id){
        tempQuestions.push(question);
        return;
      }
      tempQuestions.push(quest);
    })

    return {
      questions:tempQuestions,
      loading:false,
      error:''
    }
  }),
  on(questionActions.updateQuestionFailure, (state, {error}) => {
    return {
      questions:[...state.questions],
      loading:false,
      error: error
    }
  }),
   //deleteQuestion
   on(questionActions.deleteQuestion, (state, {question}) => {
    return {
      ...state,
      loading:true,
      error:''
    }
  }),
  on(questionActions.deleteQuestionSuccess, (state, {question}) => {
    let questions = state.questions;
    let tempQuestions: question[]=[];

    questions.forEach((quest)=>{
      if(quest.id === question.id){
        return;
      }
      tempQuestions.push(quest);
    })

    return {
      questions:tempQuestions,
      loading:false,
      error:''
    }
  }),
  on(questionActions.deleteQuestionFailure, (state, {error}) => {
    return {
      questions:[...state.questions],
      loading:false,
      error: error
    }
  }),
)
