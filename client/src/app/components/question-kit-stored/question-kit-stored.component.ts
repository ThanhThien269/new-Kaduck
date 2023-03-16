import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-kit-stored',
  templateUrl: './question-kit-stored.component.html',
  styleUrls: ['./question-kit-stored.component.scss']
})
export class QuestionKitStoredComponent {
  constructor(
    private dialog:MatDialogRef<QuestionKitStoredComponent>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  close(){
    this.dialog.close();
  }

  save(){
    // this.dialog.close(this.form.value);
    //this.dialog.close();
    this.router.navigate(['/library']);
  }
}
