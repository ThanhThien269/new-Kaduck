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
    // this.id = Math.floor(Math.random() * 899999 + 100000).toString();
  }

  generatePin() {
    this.id = Math.floor(Math.random() * 899999 + 100000).toString();
  }

  sendMessage(msg: any) {
    this.socket.emit('lobby', msg);
  }
  getMessage(pin: string) {
    console.log(pin);
    return this.socket.fromEvent('lobby-' + pin);
  }

  sendAnswer(msg: any, pin: string) {
    this.socket.emit('lobby-' + pin, msg);
  }


  openLobby(pin: string, player: any) {
    this.socket.emit('open-lobby', {pin: pin, player: player});
  }

  joinLobby(pin: string, player: any) {
    this.socket.emit('join-lobby', {pin: pin, player: player});
  }

  getLobbyPlayers(pin: string) {
    return this.socket.fromEvent('update-room');
    // return this.socket.fromEvent('lobby-' + pin)
  }


  startGame(pin: string, quesData: question) {
    this.socket.emit('start-game', {
      pin: pin,
      question: quesData,
    });
  }

  playingGame() {
    return this.socket.fromEvent('next-question');
  }

  timeOut() {
    this.socket.emit('question-timeout');
  }

  pickAnswer(data: any, pin: string) {
    this.socket.emit('choose-answer', {player: data, pin: pin});
  }
}
