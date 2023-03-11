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
        style({ opacity: 4 }),
        animate('6000ms', style({ opacity: 0 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
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
  user: User | null = null;
  id: string = '';

  lists: string[] = []

  constructor(
    private _socket: Socket,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.id = Math.floor(Math.random() * 899999 + 100000).toString()

    this._socket.on('connect', () => {
      console.log("connected");
      this._socket.emit('join', {
        id: this.id,
        name: this.user?.displayName,
        type: "create"
      });
    })

    this.listenForChanged().subscribe((data: any) => {
      console.log(data);
      this.lists.push(data as string);
    })
  }

  listenForChanged() {
    return this._socket.fromEvent('receive-joiner')
  }

  lock = false;

  locked(){
    this.lock=!this.lock
  }
}
