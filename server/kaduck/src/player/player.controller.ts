import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Player } from 'src/schemas/player.schema';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get('/all')
  getAll(){
      return this.playerService.getAll();
  }
  @Get (':id')
  async getById(@Param('id') id: string) {
      return  await this.playerService.getById(id);
     
  }
  @Post('create')
  async create(@Body() player: Player) {
      return await this.playerService.create(player);
  }
  @Put('update')
  async update(@Query('id') id: string,@Body() player: Player) {
      return await this.playerService.update(id, player);
  }
  @Delete('delete')
  async delete(@Query('id') id: string) {
      return await this.playerService.kick(id);
  }
}
