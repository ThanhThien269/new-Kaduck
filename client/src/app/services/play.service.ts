import { Socket } from 'socket.io';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  time = 20;
  constructor(private socket: Socket) { }

  timeUp(){
    const timer = setInterval(() =>{
        this.time -= 1;
        if(this.time == 0){
            this.socket.emit('timeUp');
        }
    }, 1000);
  }

  nextQuestion(){
    this.socket.emit('nextQuestion');
  }
}
