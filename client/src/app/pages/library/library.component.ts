import { question_kit } from './../../models/question_kit.model';
import { map, Observable } from 'rxjs';
import { question } from './../../models/question.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionState } from 'src/app/state/question.state';
import * as QuestionActions from 'src/app/action/question.action'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  constructor (private router: Router, private store: Store<{question:QuestionState}>) {}

  questions$ = new Observable<question[]>;


  ngOnInit() {
    this.questions$ = this.store.select('question').pipe(map(state => state.questions));
    this.store.dispatch(QuestionActions.getQuestions());
    this.questions$.subscribe(ques => console.log(ques))
  }

  lobby() {
    this.router.navigate(['/lobby']);
  }
}
