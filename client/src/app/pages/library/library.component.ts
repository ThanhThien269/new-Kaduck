// import { question_kit } from './../../models/question_kit.model';
import { map, Observable } from 'rxjs';
import { question_kit } from './../../models/question_kit.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action';
import { LobbyService } from 'src/app/services/lobby.service';
import { User } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';
  constructor(
    private lobbyService: LobbyService,
    private loginService: LoginService,
    private router: Router,
    private store: Store<{ question_kit: QuestionKitState }>
  ) {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;
  }
  questionKits$ = new Observable<question_kit[]>();

  ngOnInit() {
    this.questionKits$ = this.store
      .select('question_kit')
      .pipe(map((state) => state.question_kits));
    this.store.dispatch(QuestionKitActions.getQuestionKits());
    this.questionKits$.subscribe();
  }

  lobby(id: string) {
    this.lobbyService.generatePin();
    this.lobbyService.openLobby(this.lobbyService.id, {
      uid: this.uid,
      name: this.currentUser?.displayName,
      email: this.currentUser?.email,
    });
    this.router.navigate(['/lobby/' + id]);
  }
}
