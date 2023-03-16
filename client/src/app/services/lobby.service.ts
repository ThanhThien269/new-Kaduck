import { question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  user: User | null = null;
  id: string = '';
  lists: string[] = [];
  constructor(private socket: Socket) {
    this.id = Math.floor(Math.random() * 899999 + 100000).toString();
  }

  sendMessage(msg: any) {
    this.socket.emit('lobby', msg);
  }
  getMessage(pin: string) {
    console.log(pin);
    return this.socket.fromEvent('lobby-' + pin).pipe(map((data: any) => data));
  }
}
