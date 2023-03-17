import { Observable } from 'rxjs';
import { QuestionKitStoredComponent } from './../../components/question-kit-stored/question-kit-stored.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { question } from 'src/app/models/question.model';
import { question_kit } from 'src/app/models/question_kit.model';
import { Store } from '@ngrx/store';

import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action';
import { AuthState } from 'src/app/state/auth.state';
import { LoginService } from 'src/app/services/login.service';

interface Points {
  value: string;
  viewValue: string;
}
interface Time {
  value: string;
  viewValue: string;
}
interface Answer {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.scss'],
})
export class CreatequestionComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{ question_kit: QuestionKitState }>,
    private authService: LoginService
  ) {}

  question_kit_model: question_kit = {
    Ownerid: this.authService.user?.uid,
    id: Date.now().toString(),
    name: '',
    description: '',
    questions: [],
  };
  currentQuestion: question = this.createQuestionModel();

  createQuestionModel() {
    let questionModel: question = {
      questions: '',
      timer: 0,
      img: '',
      points: 50,
      point_type: '',
      id: Date.now().toString(),
      answer_A: '',
      answer_B: '',
      answer_C: '',
      answer_D: '',
      true_answer: '',
    };

    this.question_kit_model.questions.push(questionModel);
    this.currentQuestion = questionModel;
    return questionModel;
  }

  switchQuestion(question: question) {
    this.currentQuestion = question;
  }
  deleteQuestion() {
    this.question_kit_model.questions =
      this.question_kit_model.questions.filter(
        (question) => question.id !== this.currentQuestion.id
      );
    this.currentQuestion = this.question_kit_model.questions[0];
  }
  openCreateQuestionDialog() {
    let dialogRef = this.dialog.open(QuestionKitStoredComponent, {
      width: '500px',
      data: {
        title: this.question_kit_model.name,
        description: this.question_kit_model.description,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(result);
      if (!result) return;

      this.question_kit_model.name = result.title;
      this.question_kit_model.description = result.description;

      this.store.dispatch(
        QuestionKitActions.postQuestionKit({
          question_kit: this.question_kit_model,
        })
      );
    });
  }

  points: Points[] = [
    { value: 'standard', viewValue: 'Standard' },
    { value: 'double', viewValue: 'Double' },
  ];
  time: Time[] = [
    { value: '5', viewValue: '5 Seconds' },
    { value: '10', viewValue: '10 Seconds' },
    { value: '15', viewValue: '15 Seconds' },
  ];
  answers: Answer[] = [
    { value: 'A', viewValue: ' A' },
    { value: 'B', viewValue: ' B' },
    { value: 'C', viewValue: ' C' },
    { value: 'D', viewValue: ' D' },
  ];
}
