import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets/decorators';

@WebSocketGateway()
export class GatewaysGateway {
  @WebSocketServer() server: any;
  
  availableRoom = [];

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
  handleJoin(client: any, payload: any): string {
    if(!this.availableRoom.includes(payload.id))  {
      return "Room not found"
    }
    
    client.broadcast.to(payload.id).emit('receive-joiner', payload.name);
    return "Joined"
  }

  @SubscribeMessage('create')
  handleCreate(client: any, payload: any): string {
    this.availableRoom.push(payload.id);
    return "Created"
  }
}
