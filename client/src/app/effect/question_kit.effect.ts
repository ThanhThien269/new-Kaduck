import { QuestionKitService } from './../services/question-kit.service';
import { Injectable } from "@angular/core";
import { question_kit } from "../models/question_kit.model";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, switchMap, of, pipe, catchError } from "rxjs";
import * as QuestionKitActions from "src/app/action/question_kit.action"

@Injectable()
export class QuestionKitEffects{
  constructor(private questionKitService: QuestionKitService, private actions$: Actions) {}

  getQuestionKits$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionKitActions.getQuestionKits),
    switchMap((action) => this.questionKitService.getQuestionKits().pipe(map((question_kits) => {
      return QuestionKitActions.getQuestionKitsSuccess({ question_kits : question_kits })
    }), catchError((error) => of(QuestionKitActions.getQuestionKitsFailure({error:error})))))
  ))

  getQuestionKit$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionKitActions.getQuestionKit),
    switchMap((action) => this.questionKitService.getQuestionKit(action.id).pipe(map((question_kit) => {
      return QuestionKitActions.getQuestionKitSuccess({ question_kit : question_kit })
    }), catchError((error) => of(QuestionKitActions.getQuestionKitFailure({error:error})))))
  ))

  postQuestionKit$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionKitActions.postQuestionKit),
    switchMap((action) => this.questionKitService.postQuestionKit(action.question_kit).pipe(map((question_kit) => {
      return QuestionKitActions.postQuestionKitSuccess({ question_kit : question_kit })
    }), catchError((error) => of(QuestionKitActions.postQuestionKitFailure({error:error})))))
  ))

  updateQuestionKit$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionKitActions.updateQuestionKit),
    switchMap((action) => this.questionKitService.updateQuestionKit(action.question_kit).pipe(map((question_kit) => {
      return QuestionKitActions.updateQuestionKitSuccess({ question_kit : question_kit })
    }), catchError((error) => of(QuestionKitActions.updateQuestionKitFailure({error:error})))))
  ))

  deleteQuestionKit$ = createEffect(() => this.actions$.pipe(
    ofType(QuestionKitActions.deleteQuestionKit),
    switchMap((action) => this.questionKitService.deleteQuestionKit(action.question_kit).pipe(map((question_kit) => {
      return QuestionKitActions.deleteQuestionKitSuccess({ question_kit : question_kit })
    }), catchError((error) => of(QuestionKitActions.deleteQuestionKitFailure({error:error})))))
  ))
}
