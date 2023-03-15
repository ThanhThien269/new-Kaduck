import { question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  user: User | null = null;
  id: string = '';
  lists: string[] = [];
  constructor(private socket: Socket) {
    this.id = Math.floor(Math.random() * 899999 + 100000).toString();
    this.socket.on('connect', () => {
      console.log('connected');
      this.socket.emit('join', {
        id: this.id,
        name: this.user?.displayName,
        type: 'create',
      });
    });

    this.listenForChanged().subscribe((data: any) => {
      console.log(data);
      this.lists.push(data as string);
    });
  }
  startGame(question: question) {
    this.socket.emit('startGame', question);
  }

  listenForChanged() {
    return this.socket.fromEvent('receive-joiner');
  }

  // timer(){
  //   this._socket.emit("timesUp")
  // }
}
