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
  constructor(
    private route: ActivatedRoute,
    private _socket: Socket,
    private loginService: LoginService,
    private lobbyService: LobbyService
  ) {}
  isStarting: boolean = false;
  ngOnInit() {
    this.user = this.loginService.user;

    let id = this.route.snapshot.paramMap.get('id');
    if (!id) id = 'No id found';
    this.id = id;
    this.lobbyService.playingGame().subscribe((data: any) => {
      console.log(data);
      if(data.msg == 'playing') this.isStarting = true;
      if(data.question) this.questionData = data.question;
      this.time = data.question.time;
    });

    // this.lobbyService.getMessage(this.id).subscribe((msg: any) => {
    //   console.log(msg);
    //   if (msg.message == 'start') this.isStarting = true;
    //   if (msg.question) this.questionData = msg.question;
    //   this.time = msg.time;
    //   if(msg.message == 'pause'){
    //     // this.alreadyAnswered = false;
    //     this.chosenAnswer = '';
    //     this.time = 0;
    //   }
    //   // if (msg.time) {
    //   //   this.time = msg.time
    //   //   console.log(this.time);
    //   // };
    //   //   if(msg.answer){
    //   //     if(msg.answer == questionData[i].answer){
    //   //       let point = msg.timeLeft*10

    //   //   }
      // }
    // });
  }

  chooseAnswer(answer: string) {
    this.chosenAnswer = answer;
    this.alreadyAnswered = true;
    // this.lobbyService.pickAnswer(
    //   {

    //   },
    //   this.id
    // )
  }
}
