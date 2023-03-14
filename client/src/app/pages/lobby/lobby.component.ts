import { question } from 'src/app/models/question.model';
import { LobbyService } from './../../services/lobby.service';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LoginService } from 'src/app/services/login.service';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import { Observable, map } from 'rxjs';
import { question_kit } from 'src/app/models/question_kit.model';
import * as QuestionKitActions from 'src/app/action/question_kit.action';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 })),
      ]),
      transition(':leave', [
        style({ opacity: 4 }),
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(1turn)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class LobbyComponent {
  user = this.lobbyService.user;
  id = this.lobbyService.id;
  lists = this.lobbyService.lists;
  lock = false;
  isStarting = false;
  questionKit$ = this.store.select('question_kit', 'question_kits');
  docId = '';
  questionData = new Array<any>();
  constructor(
    private _socket: Socket,
    private lobbyService: LobbyService,
    private activate: ActivatedRoute,
    private store: Store<{ question_kit: QuestionKitState }>
  ) {
    this.activate.params.subscribe((data) => {
      this.docId = data['id'];
      console.log(this.docId);
    });
  }
  ngOnInit() {
    this.store.dispatch(QuestionKitActions.getQuestionKit({ id: this.docId }));
    this.questionKit$.subscribe((data) => {
      console.log(data);
      this.questionData = data;
      console.log(this.questionData);
    });
  }

  // createPin(){
  //   this.lobbyService.listenForChanged();
  // }

  locked() {
    this.lock = !this.lock;
  }
  start() {
    this.isStarting = true;

    // this._socket.emit("startGame")
  }
}

// listenForChanged() {
//   return this._socket.fromEvent('receive-joiner')
// }

// lock = false;

// locked(){
//   this.lock=!this.lock
// }
