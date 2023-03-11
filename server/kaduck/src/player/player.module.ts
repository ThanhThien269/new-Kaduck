import { PlayerSchema } from './../schemas/player.schema';
import { Player } from 'src/schemas/player.schema';
import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerGateway } from './player.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [PlayerController,],
  providers: [PlayerService,PlayerGateway]
})
export class PlayerModule {}
