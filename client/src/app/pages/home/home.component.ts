
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { User } from '@angular/fire/auth'
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action'
import { question_kit } from './../../models/question_kit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';
  // pin = this.homeService.pin;
  // userInput = new FormControl('');
  // inputMatches = false;

  constructor(
    private router : Router,
    private loginService: LoginService,
    private store: Store<{question_kit: QuestionKitState}>
  )
  {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;

  }
  questionKit$ = new Observable<question_kit>;

  ngOnInit() {
    // this.questionKits$ = this.store.select('question_kit').pipe(map(state => state.question_kits));
    // this.store.dispatch(QuestionKitActions.getQuestionKits());
    // this.questionKits$.subscribe(ques => console.log(ques));

    this.store.dispatch(QuestionKitActions.getQuestionKits());
    this.questionKit$ = this.store.select('question_kit').pipe(map(state => state.question_kits[0]),
    take(1));
  }

  callingFunction() {

    }

  library(){
    this.router.navigate(['/library']);
  }

  history(){
    this.router.navigate(['/history']);
  }

  createquestion(){
    this.router.navigate(['/createquestion']);
  }

  lobby(){
    this.router.navigate(['/lobby']);
  }

  join(){
    this.router.navigate([`join/${this.pin}`]);
    // this.homeService.join();
  }
}
