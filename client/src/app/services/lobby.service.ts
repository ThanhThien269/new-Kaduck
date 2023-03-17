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
  currentPlayer!: any;

  constructor(private socket: Socket) {
    // this.id = Math.floor(Math.random() * 899999 + 100000).toString();
  }

  generatePin() {
    this.id = Math.floor(Math.random() * 899999 + 100000).toString();
  }

  // sendMessage(msg: any) {
  //   this.socket.emit('lobby', msg);
  // }
  // getMessage(pin: string) {
  //   console.log(pin);
  //   return this.socket.fromEvent('lobby-' + pin);
  // }

  // sendAnswer(msg: any, pin: string) {
  //   this.socket.emit('lobby-' + pin, msg);
  // }


  openLobby(pin: string, player: any) {
    this.socket.emit('open-lobby', {pin: pin, player: player});
  }

  checkLobby(pin: string) {
    this.socket.emit('check-lobby', {pin: pin});
  }

  getLobbyJoined() {
    return this.socket.fromEvent('lobby-status');
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

  timeOut(pin: string) {
    this.socket.emit('question-timeout', {pin: pin});
  }

  pickAnswer(data: any, pin: string) {
    data.score = parseInt(data.score);
    this.socket.emit('choose-answer', {player: data, pin: pin});
  }

  showAnswer() {
    return this.socket.fromEvent('show-answer');
  }

  endGame(pin: string) {
    this.socket.emit('end-game', {pin: pin});
  }

  showRanking() {
    return this.socket.fromEvent('show-ranking');
  }
}
