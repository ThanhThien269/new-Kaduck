import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action';
import { question_kit } from './../../models/question_kit.model';
import { LobbyService } from 'src/app/services/lobby.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';
  firstEle: any = [];
  // pin = this.homeService.pin;
  // userInput = new FormControl('');
  // inputMatches = false;
  questionKits$ = new Observable<question_kit[]>();

  constructor(
    private lobbyService: LobbyService,
    private router: Router,
    private loginService: LoginService,
    private store: Store<{ question_kit: QuestionKitState }>,
    private _snackBar: MatSnackBar
  ) {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;
    this.questionKits$ = this.store
      .select('question_kit')
      .pipe(map((state) => state.question_kits));
    this.store.dispatch(
      QuestionKitActions.getQuestionKitByOwner({ id: this.uid })
    );
    this.questionKits$.subscribe((ques) => console.log(ques));
  }

  ngOnInit() {}

  callingFunction() {}

  library() {
    this.router.navigate(['/library']);
  }

  history() {
    this.router.navigate(['/history']);
  }

  createquestion() {
    this.router.navigate(['/createquestion']);
  }

  lobby() {
    this.router.navigate(['/lobby']);
  }

  guestJoining() {
    this.router.navigate(['/guestjoining']);
  }

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
