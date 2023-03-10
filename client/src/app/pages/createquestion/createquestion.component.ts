import { QuestionKitStoredComponent } from './../../components/question-kit-stored/question-kit-stored.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  constructor(private router : Router, private dialog:MatDialog){}

  openDialog(){
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      this.dialog.open(QuestionKitStoredComponent, dialogConfig);
      dialogConfig.position = {
        'top': '0',
        left: '0'
    };
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

