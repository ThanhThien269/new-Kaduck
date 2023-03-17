import { question } from './../../models/question.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { User } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent {
  id: string = '';
  user: User | null = null;
  time = 0;
  questionData: question = <question>{};
  chosenAnswer: string = '';
  alreadyAnswered: boolean = false;
  isShowStatus: boolean = false;
  isCorrect: number = -1;
  isEndGame: boolean = false;

  userResult!: any;

  constructor(
    private route: ActivatedRoute,
    private _socket: Socket,
    private loginService: LoginService,
    private lobbyService: LobbyService
  ) {}
  isStarting: boolean = false;
  ngOnInit() {
    this.user = this.loginService.user;
    console.log(this.lobbyService.currentPlayer);

    let id = this.route.snapshot.paramMap.get('id');
    if (!id) id = 'No id found';
    this.id = id;
    this.lobbyService.playingGame().subscribe((data: any) => {
      this.isShowStatus = false;
      if(data.msg == 'playing') this.isStarting = true;
      console.log(this.isStarting);
      if(data.question) this.questionData = data.question;
      this.time = data.question.time;
    });
    this.lobbyService.showAnswer().subscribe((data: any) => {
      if(!this.alreadyAnswered){
        this.isCorrect = 0;
      }
      this.alreadyAnswered = false;
      this.chosenAnswer = '';
      this.time = 0;
      this.isShowStatus = true;
    });

    // Showing final result of the player
    this.lobbyService.showRanking().subscribe((data: any) => {
      this.isEndGame = true;
      data.find((player: any) => {
        if(player.uid == this.lobbyService.currentPlayer.uid) {
          this.userResult = {
            ... player,
            rank: data.indexOf(player) + 1
          };
        };
      })
    })
  }

  chooseAnswer(answer: string) {
    this.chosenAnswer = answer;
    this.alreadyAnswered = true;
    this.isCorrect = this.questionData.true_answer == answer ? 1 : 0;
    let tempScore =  this.isCorrect == 1 ? this.questionData.points : 0;
    this.lobbyService.pickAnswer(
      {
        uid: this.lobbyService.currentPlayer.uid,
        score: tempScore,
        correct: this.isCorrect,
      },
      this.id
    )
  }
  // showFinalResult() {
  //   this.isEndGame = true;
    
  // }
}
