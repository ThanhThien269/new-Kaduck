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
  id = this.lobbyService.id;
  lock = false;
  time = 0;
  i = 0;
  isStarting = false;
  questionKit$ = new Observable<question_kit[]>();
  docId = '';
  questionData = new Array<question>();
  players: any[] = [];
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
    this.questionKit$ = this.store
      .select('question_kit')
      .pipe(map((state) => state.question_kits));
    this.store.dispatch(QuestionKitActions.getQuestionKit({ id: this.docId }));
    this.questionKit$.subscribe((data) => {
      this.questionData = data[0].questions;
      console.log(this.questionData);
    });
    this.lobbyService.getMessage(this.id).subscribe((msg: any) => {
      console.log(msg);
      this.players.push(msg);
    });
  }
  locked() {
    this.lock = !this.lock;
  }
  start() {
    this.lobbyService.sendMessage({
      pin: this.id,
      message: 'start',
      question: this.questionData[this.i],
    });
    let tempQuestionData = this.questionData;
    this.time = tempQuestionData[this.i].timer;
    this.isStarting = true;
    let myInterval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.lobbyService.sendMessage({ pin: this.id, time: this.time });
      } else {
        this.i++;
        if (this.i == tempQuestionData.length) {
          clearInterval(myInterval);
          return;
        } else {
          console.log(tempQuestionData);
          this.time = tempQuestionData[this.i].timer;
          this.lobbyService.sendMessage({
            pin: this.id,
            time: this.time,
            question: tempQuestionData[this.i],
          });
        }
      }
    }, 1000);
  }
}

// listenForChanged() {
//   return this._socket.fromEvent('receive-joiner')
// }

// lock = false;

// locked(){
//   this.lock=!this.lock
// }
