import { Observable } from 'rxjs';
import { QuestionKitStoredComponent } from './../../components/question-kit-stored/question-kit-stored.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { question } from 'src/app/models/question.model';
import { Store } from '@ngrx/store'
import { QuestionState } from 'src/app/state/question.state'
import * as QuestionActions from 'src/app/action/question.action'

interface Points {
  value: string;
  viewValue: string;
}
interface Time{
  value: string;
  viewValue: string;
}
interface Answer{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.scss']
})
export class CreatequestionComponent {



  constructor(
    private router : Router,
    private dialog:MatDialog,
    private store: Store<{ question: QuestionState }>
    ){}

  questionModel: question = {
    questions : '',
    description: '',
    title: '',
    timer : 0,
    img : '',
    points : 0,
    point_type : '',
    id: Math.random().toString(),
    answer_A : '',
    answer_B : '',
    answer_C : '',
    answer_D : '',
    true_answer : ''
  }


  openCreateQuestionDialog(){
    let dialogRef = this.dialog.open(QuestionKitStoredComponent, {
      width: '500px',
      data: {
        title: this.questionModel.title,
        description: this.questionModel.description
      }
    });

    dialogRef.afterClosed().subscribe( (result: any) => {
      console.log(result)
      if(!result) return;

      this.questionModel.title = result.title;
      this.questionModel.description = result.description;

      console.log(this.questionModel);
      this.store.dispatch(QuestionActions.postQuestion({ question: this.questionModel }))
    })
  }


  points: Points[] = [
    {value: 'standard', viewValue: 'Standard'},
    {value: 'double', viewValue: 'Double'},
  ];
  time : Time[]=[
    {value: '5', viewValue: '5 Seconds'},
    {value: '10', viewValue: '10 Seconds'},
    {value: '15', viewValue: '15 Seconds'},
  ]
  answers : Answer[]=[
    {value: 'A', viewValue: ' A'},
    {value: 'B', viewValue: ' B'},
    {value: 'C', viewValue: ' C'},
    {value: 'D', viewValue: ' D'},
  ]


  // library(){
  //   this.router.navigate(['/library']);
  // }
}

