import { QuestionService } from './../services/question.service';
import { Injectable } from '@angular/core';
import { question } from '../models/question.model';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, of, pipe, catchError } from 'rxjs';
import * as QuestionActions from 'src/app/action/question.action';

@Injectable()
export class QuestionEffects {
  constructor(
    private questionService: QuestionService,
    private actions$: Actions
  ) {}

  getQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.getQuestions),
      switchMap((action) =>
        this.questionService.getQuestions().pipe(
          map((questions) => {
            return QuestionActions.getQuestionsSuccess({
              questions: questions,
            });
          }),
          catchError((error) =>
            of(QuestionActions.getQuestionsFailure({ error: error }))
          )
        )
      )
    )
  );

  getQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.getQuestion),
      switchMap((action) =>
        this.questionService.getQuestion(action.id).pipe(
          map((question) => {
            return QuestionActions.getQuestionSuccess({ question: question });
          }),
          catchError((error) =>
            of(QuestionActions.getQuestionFailure({ error: error }))
          )
        )
      )
    )
  );

  postQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.postQuestion),
      switchMap((action) =>
        this.questionService.postQuestion(action.question).pipe(
          map((question) => {
            return QuestionActions.postQuestionSuccess({ question: question });
          }),
          catchError((error) =>
            of(QuestionActions.postQuestionFailure({ error: error }))
          )
        )
      )
    )
  );

  updateQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.updateQuestion),
      switchMap((action) =>
        this.questionService.updateQuestion(action.question).pipe(
          map((question) => {
            return QuestionActions.updateQuestionSuccess({
              question: question,
            });
          }),
          catchError((error) =>
            of(QuestionActions.updateQuestionFailure({ error: error }))
          )
        )
      )
    )
  );
}
