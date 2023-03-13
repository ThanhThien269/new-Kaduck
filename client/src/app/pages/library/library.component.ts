import { question_kit } from './../../models/question_kit.model';
import { map, Observable } from 'rxjs';
import { question_kit } from './../../models/question_kit.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  constructor (private router: Router, private store: Store<{question_kit: QuestionKitState}>) {}

  questionKits$ = new Observable<question_kit[]>;


  ngOnInit() {
    this.questionKits$ = this.store.select('question_kit').pipe(map(state => state.question_kits));
    this.store.dispatch(QuestionKitActions.getQuestionKits());
    this.questionKits$.subscribe(ques => console.log(ques));
  }

  lobby() {
    this.router.navigate(['/lobby']);
  }
}
