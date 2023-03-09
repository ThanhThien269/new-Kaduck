import { Component } from '@angular/core';
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
  constructor(private router : Router){}
  points: Points[] = [
    {value: 'standard', viewValue: 'Standard'},
    {value: 'double', viewValue: 'Double'},
  ];
  time : Time[]=[
    {value: '5seconds', viewValue: '5 Seconds'},
    {value: '10seconds', viewValue: '10 Seconds'},
    {value: '15seconds', viewValue: '15 Seconds'},
  ]
  answers : Answer[]=[
    {value: 'A', viewValue: ' A'},
    {value: 'B', viewValue: ' B'},
    {value: 'C', viewValue: ' C'},
    {value: 'D', viewValue: ' D'},

  ]
  library(){
    this.router.navigate(['/library']);
  }
}

