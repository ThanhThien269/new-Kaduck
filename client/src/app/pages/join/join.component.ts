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

    this.lobbyService.getMessage(this.id).subscribe((msg: any) => {
      console.log(msg);
      if (msg.message == 'start') this.isStarting = true;
      if (msg.question) this.questionData = msg.question;
      if (msg.time) this.time = msg.data;
      //   if(msg.answer){
      //     if(msg.answer == questionData[i].answer){
      //       let point = msg.timeLeft*10

      //   }
      // }
    });
  }
  chooseAnswer() {}
}
