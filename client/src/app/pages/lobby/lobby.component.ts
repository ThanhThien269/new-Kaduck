import { question } from 'src/app/models/question.model';
import { LobbyService } from './../../services/lobby.service';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
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
export class LobbyComponent implements OnInit{
  id = this.lobbyService.id;
  lock = false;
  time = 0;
  i = 0;
  isStarting = false;
  isPaused = false;
  questionKit$ = new Observable<question_kit[]>();
  docId = '';
  questionData = new Array<question>();
  players: any[] = [];

  isEndGame: boolean = false;
  ranking: any[] = [];

  joinList$!: Observable<any>;

  constructor(
    private socket: Socket,
    private lobbyService: LobbyService,
    private router: Router,
    private activate: ActivatedRoute,
    private store: Store<{ question_kit: QuestionKitState }>
  ) {
    this.activate.params.subscribe((data) => {
      this.docId = data['id'];
      console.log(this.docId);
    });
  }
  
  ngOnInit() {
    if(this.lobbyService.id == ''){
      this.router.navigate(['/library']);
    }else{
        this.questionKit$ = this.store
        .select('question_kit')
        .pipe(map((state) => state.question_kits));
      this.store.dispatch(QuestionKitActions.getQuestionKit({ id: this.docId }));
      this.questionKit$.subscribe((data) => {
        this.questionData = data[0].questions;
      });
      this.lobbyService.getLobbyPlayers(this.id).subscribe((msg: any) => {
        console.log(msg);
        this.players.push(msg);
      });
      this.lobbyService.showAnswer().subscribe((msg: any) => {
        this.isPaused = true;
      });
      this.lobbyService.showRanking().subscribe((data: any) => {
        this.isEndGame = true;
        this.ranking = data;
      });
    }
    
    // this.lobbyService.getMessage(this.id).subscribe((msg: any) => {
    //   console.log(msg);
    //   this.players.push(msg);
    // });
  }

  locked() {
    this.lock = !this.lock;
  }
  start() {
    if(this.players.length < 0){
      this.lobbyService.startGame(this.id, this.questionData[this.i]);
      let tempQuestionData = this.questionData;
      // this.time = tempQuestionData[this.i].timer;
      this.isStarting = true;
      this.timer();
    }else{
      alert('Please wait for all players to join');
    }
  }

  nextQuestion(){
    this.i++;
    this.isPaused = false;
    this.lobbyService.startGame(this.id, this.questionData[this.i]);
    this.timer();
    // if (this.i == this.questionData.length++) {
    //   console.log('end game');
    //   this.lobbyService.endGame(this.id);
    //   return;
    // } 
    // let myInterval = setInterval(() => {
    //   if(!this.isPaused){
    //     if (this.time > 0) {
    //       this.time--;
    //       this.lobbyService.sendMessage({ pin: this.id, time: this.time });
    //     } else {
    //       this.isPaused = true;
    //       if (this.i == tempQuestionData.length) {
    //         clearInterval(myInterval);
    //         return;
    //       } else {
    //         console.log(tempQuestionData);
    //         this.time = tempQuestionData[this.i].timer;
    //         this.lobbyService.sendMessage({
    //           pin: this.id,
    //           time: this.time,
    //           question: tempQuestionData[this.i],
    //         });
    //       }
    //     }
    //   }
    // }, 1000);
  }

  timer() {  
    this.time = this.questionData[this.i].timer;
    let myInterval = setInterval(() => {
      if(!this.isPaused){
        if (this.time > 0) {
          this.time--;
          // this.lobbyService.sendMessage({ pin: this.id, time: this.time });
        } else {
          this.lobbyService.timeOut(this.id);
          if (this.i+1 == this.questionData.length) {
            clearInterval(myInterval);
            this.lobbyService.endGame(this.id);
            return;
          }
          
          clearInterval(myInterval); 
        }
      }
    }, 1000);
  }
  closeRanking(){
    this.router.navigate(['/library']);
  }
}


