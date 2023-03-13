import { Game } from './../schemas/game.schema';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @Get('')
    getAll(){
        return this.gameService.getAll();
    }
    @Get (':id')
    async getById(@Param('id') id: string) {
        return  await this.gameService.getById(id);
       
    }
    @Post()
    async create(@Body() game: Game){
        return await this.gameService.create(game);
    }
}
