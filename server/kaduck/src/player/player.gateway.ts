import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true})
export class PlayerGateway {
  @WebSocketServer() server: any;
  lobby:''
  handleConnection(client:any,...args:any[]){
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client:any){
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(payload);
    this.server.emit(`message-${payload.roomID}`, payload);
    return 'Hello world!';
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, payload: any): string {
    client.join(payload.id);
    client.broadcast.to(payload.id).emit('receive-joiner', payload.name);
    return "Joined"
  }
  @SubscribeMessage('startGame')
  handleStartGame(@MessageBody() body: any) {
    this.server.to(this.lobby).emit('nextQuestion', body);
  }
  @SubscribeMessage('timesUp')
  handleTimeOut(@MessageBody() body: any) {
    this.server.to(this.lobby).emit('flipping-card', body);
  }
  @SubscribeMessage('Podium')
  handleShowRanking(@MessageBody() body: any) {
    this.server.to(this.lobby).emit('ranked', body);
  }
}
