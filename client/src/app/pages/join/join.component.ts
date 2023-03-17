import { question } from './../../models/question.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  tempScore: number = 0;
  tempTotalScore: number = 0;

  userResult!: any;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private lobbyService: LobbyService,
    private router: Router
  ) {}
  isStarting: boolean = false;
  ngOnInit() {
    this.user = this.loginService.user;

    let id = this.route.snapshot.paramMap.get('id');
    if (!id) id = 'No id found';
    this.id = id;
    this.lobbyService.playingGame().subscribe((data: any) => {
      this.isShowStatus = false;
      if (data.msg == 'playing') this.isStarting = true;
      if (data.question) this.questionData = data.question;
      this.time = data.question.time;
    });
    this.lobbyService.showAnswer().subscribe((data: any) => {
      if (!this.alreadyAnswered) {
        this.isCorrect = 0;
        this.tempTotalScore += 0;
      }
      this.alreadyAnswered = false;
      this.chosenAnswer = '';
      this.time = 0;
      this.isShowStatus = true;
    });

    // Showing final result of the player
    this.lobbyService.getUserResult().subscribe((data: any) => {
      this.isEndGame = true;
      data.find((player: any) => {
        if (player.uid == this.lobbyService.currentPlayer.uid) {
          this.userResult = {
            ...player,
            rank: data.indexOf(player) + 1,
          };
        }
      });
    });

    // update timer
    this.lobbyService.getTimer().subscribe((data: any) => {
      this.time = data;
    });

    // Return to lobby if the game is ended
    this.lobbyService.leaveLobby().subscribe((data: any) => {
      this.router.navigate(['/guestjoining']);
    });
  }

  chooseAnswer(answer: string) {
    this.chosenAnswer = answer;
    this.alreadyAnswered = true;
    this.isCorrect = this.questionData.true_answer == answer ? 1 : 0;
    let tempScore = this.isCorrect == 1 ? this.questionData.points : 0;
    this.tempScore = tempScore * this.time;
    this.tempTotalScore += this.tempScore;
    this.lobbyService.pickAnswer(
      {
        uid: this.lobbyService.currentPlayer.uid,
        score: this.tempScore,
        correct: this.isCorrect,
      },
      this.id
    );
  }
  // showFinalResult() {
  //   this.isEndGame = true;

  // }
}
