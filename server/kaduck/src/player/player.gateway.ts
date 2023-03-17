import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class PlayerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  lobbies: any[] = [];

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('open-lobby')
  handleOpenLobby(client: Socket, payload: any): any {
    client.join(payload.pin);
    this.lobbies.push({
      pin: payload.pin,
      players: [],
    });
  }

  @SubscribeMessage('check-lobby')
  handleCheckLobby(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    if(temp !== -1){
      client.join(payload.pin);
      this.server.to(client.id).emit('lobby-status', {msg: 'Lobby found', players: this.lobbies[temp].players});
    }else{
      this.server.to(client.id).emit('lobby-status', {msg: 'Lobby not found'});
    // if (temp !== -1) {
    //   client.join(payload.pin);
    //   this.server
    //     .to(client.id)
    //     .emit('lobby-status', {
    //       msg: 'Lobby found',
    //       players: this.lobbies[temp].players,
    //     });
    // } else {
    //   this.server
    //     .to(client.id)
    //     .emit('lobby-status', { msg: 'Lobby not found' });
    }
  }

  @SubscribeMessage('join-lobby')
  handleJoinLobby(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    let tempUser = this.lobbies[temp].players.findIndex(
      (player) => player.name === payload.player.name,
    );
    console.log(tempUser);
    if (tempUser === -1) {
      this.lobbies[temp].players.push({
        ...payload.player,
      });
      // console.log(this.lobbies[temp].players.length);

      client.emit('lobby-status', {
        msg: 'Lobby updated',
        players: this.lobbies[temp].players,
      });
      this.server.to(payload.pin).emit('update-room', payload.player);
    } else {
      client.emit('lobby-check', { msg: 'Username already taken' });
    }
    // console.log(this.lobbies[temp].players);

    // this.server.to(payload.pin).emit('update-room', this.lobbies[temp].players);
  }

  @SubscribeMessage('get-player-info')
  handleGetPlayerInfo(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    let tempUser = this.lobbies[temp].players.findIndex(
      (player) => player.uid === payload.player.uid,
    );
    if (tempUser !== -1) {
      client.emit('player-info', this.lobbies[temp].players[tempUser]);
    }
  }

  @SubscribeMessage('start-game')
  handleStartGame(client: Socket, payload: any): any {
    console.log('start-game');
    this.server.to(payload.pin).emit('next-question', {msg: 'playing', question: payload.question});
    // this.server
    //   .to(payload.pin)
    //   .emit('next-question', { msg: 'playing', question: payload.question });
  }

  @SubscribeMessage('question-timeout')
  handleQuestionTimeout(client: Socket, payload: any): any {
    this.server.to(payload.pin).emit('show-answer', { msg: 'show-answer' });
  }

  @SubscribeMessage('choose-answer')
  handleChooseAnswer(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.lobbies[temp].players.forEach((player) => {
      if (player.uid === payload.player.uid) {
        player.score = player.score + payload.player.score;
        player.correctAnswer = player.correctAnswer + payload.player.correct;
      }
    });
  }

  @SubscribeMessage('end-game')
  handleEndGame(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.server.to(payload.pin).emit('show-ranking', this.lobbies[temp].players.sort((a, b) => b.score - a.score));
  }

  @SubscribeMessage('show-ranking-user')
  handleShowRanking2(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.server.to(payload.pin).emit('ranking-user', this.lobbies[temp].players.sort((a, b) => b.score - a.score));
  }

  @SubscribeMessage('delete-lobby')
  handleDeleteLobby(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.lobbies.splice(temp, 1);
    this.server.to(payload.pin).emit(`delete-lobby`, { msg: 'delete-lobby' });
    // this.server
    //   .to(payload.pin)
    //   .emit('show-ranking', this.lobbies[temp].players);
  }
}
