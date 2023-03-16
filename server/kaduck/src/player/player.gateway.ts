// import {
//   MessageBody,
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
// } from '@nestjs/websockets';
// import { Socket, Server } from 'socket.io';

import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from 'socket.io';

// @WebSocketGateway({ cors: true })
// export class PlayerGateway {
//   tempQuestion: any;
//   tempTime: any;
//   @WebSocketServer() server: Server;
//   // lobby: string = '';
//   lobby: any[] = [];
//   tempLobbyHistory: any[] = [];
//   handleConnection(client: any, ...args: any[]) {
//     console.log(`Client connected: ${client.id}`);
//   }
//   handleDisconnect(client: any) {
//     console.log(`Client disconnected: ${client.id}`);
//   }

//   @SubscribeMessage('open-lobby')
//   handleOpenRoom(client: Socket, payload: any): any {
//     // this.lobby = payload.pin;
    
//     console.log(payload);
//     // this.server.in(client.id).socketsJoin(payload.pin);
//     client.join(payload.pin);
//   }

//   @SubscribeMessage('join-lobby')
//   handleJoinLobby(client: Socket, payload: any): any {
//     // this.server.in(client.id).socketsJoin(payload.pin);
//     // client.join(payload.pin);
//     // console.log(payload.player);

//     this.server.emit('update-room', payload.player, (res) => {
//       console.log(res);
//     });
//     // this.server.emit(`new-player-join`, payload.player);
//   }
//   //leave room
//   @SubscribeMessage('leave-lobby')
//   handleLeaveLobby(client: Socket, payload: any): any {
//     // this.server.in(client.id).socketsJoin(payload.pin);
//     client.leave(payload.pin);
//     this.server.to(payload.pin).emit('update-room', payload.player);

//   }

//   @SubscribeMessage('start-game')
//   handleStartGame(client: Socket, payload: any): any {
//     this.server.to(payload.pin).emit('next-question', payload.question);
//   }

//   @SubscribeMessage('question-timeout')
//   handleQuestionTimeout(client: Socket, payload: any): any {
//     this.server.to(payload.pin).emit('show-answer', payload);
//   }

//   @SubscribeMessage('set-players-list')
//   handleGetPlayersList(client: Socket, payload: any): any {
//     this.server.to(payload.pin).emit('get-players-list', payload);
//   }

//   @SubscribeMessage('choose-answer')
//   handleChooseAnswer(client: Socket, payload: any): any {
//     this.server.to(payload.pin).emit('show-answer', payload);
//   }

//   @SubscribeMessage('show-ranking')
//   handleShowRanking(client: Socket, payload: any) {
//     this.server.to(payload.pin).emit('show-ranking-player', payload);
//   }

//   @SubscribeMessage('lobby')
//   handleMessage(client: any, payload: any): string {
//     if(payload.message === 'open-room'){
//       this.lobby.push({
//         pin: payload.pin,
//         history: this.tempLobbyHistory,
//         quesHis: [],
//       });
//       return;
//     }
//     if(payload.message === 'joined'){
//       this.tempLobbyHistory.push({
//         name: payload.name,
//         score: 0,
//         uid: payload.uid,
//         ansHis: []
//       });
//       this.server.emit(`lobby-${payload.pin}`, payload);
//       return;
//     }
//     if(payload.message === 'start' || payload.message === 'next'){
//       let temp = this.lobby.findIndex((item) => {
//         console.log(item.pin);
//         item.pin == payload.pin
//       });
//       // this.lobby[temp].quesHis.push(payload.question);
//       this.server.emit(`lobby-${payload.pin}`, payload);
//       return;
//     }
//     if(payload.message === 'choose-answer'){
//       this.tempLobbyHistory.forEach((item) => {
//         if(item.uid === payload.uid){
//           item.ansHis.push(payload.answer);
//         }
//       });

//       console.log(this.tempLobbyHistory);
//       return;
//     }
//     // if(payload.message === 'pause'){
//     //   let temp = this.lobby.findIndex((item) => item === payload.pin);
//     //   this.server.emit(`lobby-${payload.pin}`, this.lobby[temp].quesHis[payload.i]);
//     //   return;
//     // }

//     this.server.emit(`lobby-${payload.pin}`, payload, {timeout: 1000},(res) => {
//       console.log(res);
//     });
//     return 'Hello world!';
//   }

//   // @SubscribeMessage('lobby-' + this.lobby)
//   // handleAnswer(client: any, payload: any): string {
//   //   console.log(payload);
//   //   this.server.emit(`lobby-${payload.pin}`, payload);
//   //   return 'Hello world!';
//   // }



//   // @SubscribeMessage('join')
//   // handleJoin(client: Socket, payload: any): string {
//   //   client.join(payload.id);

//   //   client.broadcast.to(payload.id).emit('receive-joiner', payload.name);
//   //   return 'Joined';
//   // }
// }


@WebSocketGateway({ cors: true })
export class PlayerGateway implements OnGatewayConnection, OnGatewayDisconnect{

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

  @SubscribeMessage('join-lobby')
  handleJoinLobby(client: Socket, payload: any): any {
    client.join(payload.pin);
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.lobbies[temp].players.push({
      ...payload.player,
      id: this.lobbies[temp].players.length + 1,
    });
    this.server.to(payload.pin).emit('update-room', payload.player);
    // this.server.to(payload.pin).emit('update-room', this.lobbies[temp].players);
  }


  @SubscribeMessage('start-game')
  handleStartGame(client: Socket, payload: any): any {
    this.server.to(payload.pin).emit('next-question', {msg: 'playing', question: payload.question});
  }

  @SubscribeMessage('question-timeout')
  handleQuestionTimeout(client: Socket, payload: any): any {
    this.server.to(payload.pin).emit('show-answer', payload);
  }

  @SubscribeMessage('choose-answer')
  handleChooseAnswer(client: Socket, payload: any): any {
    let temp = this.lobbies.findIndex((lobby) => lobby.pin === payload.pin);
    this.lobbies[temp].players.forEach((player) => {
      if(player.id === payload.player.id){
        player.score = payload.player.score;
        player.correctAns = payload.player.correctAns;
      }
    });
    // this.server.to(payload.pin).emit('show-answer', payload);
  }

  // @SubscribeMessage('show-')
}