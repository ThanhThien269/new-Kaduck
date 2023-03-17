import { Socket } from 'socket.io';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private socket: Socket) { }


  nextQuestion(){
    // this.socket.emit('nextQuestion');
  }
}
