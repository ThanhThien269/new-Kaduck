import { Player } from 'src/schemas/player.schema';
import { PlayerSchema } from './../schemas/player.schema';
import { Game, GameSchema } from './../schemas/game.schema';
import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule {}
