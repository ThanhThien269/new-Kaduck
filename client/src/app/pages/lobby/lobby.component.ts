import { LobbyService } from './../../services/lobby.service';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LoginService } from 'src/app/services/login.service';
import { User } from '@angular/fire/auth'


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 }))
      ]),
      transition(':leave', [
        style({ opacity: 4 }),
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',keyframes([
          style({transform: 'rotate(0deg)', offset: 0}),
          style({transform: 'rotate(1turn)', offset: 1})
        ])
        )
    ]),

  ])
  ]
})

export class LobbyComponent {
  user = this.lobbyService.user;
  id = this.lobbyService.id
  lists = this.lobbyService.lists;
  lock = false;
  constructor(
    private _socket: Socket,
    private lobbyService: LobbyService
  ) {

  }
  // createPin(){
  //   this.lobbyService.listenForChanged();
  // }
  locked(){
    this.lock=!this.lock
  }
}

  // listenForChanged() {
  //   return this._socket.fromEvent('receive-joiner')
  // }


  // lock = false;

  // locked(){
  //   this.lock=!this.lock
  // }

