import { Player, PlayerDocument } from 'src/schemas/player.schema';
import { Game, GameDocument } from './../schemas/game.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GameService {
    constructor(
        @InjectModel(Game.name) private gameModel: Model<GameDocument>,
        @InjectModel(Player.name) private playerModel: Model<PlayerDocument>)
       {}
       async getAll(): Promise<Game[]> {
        try{
            return this.gameModel.find().populate('players').exec();
         }catch(error){
            console.log(error);
        }
        }
        async getById(id:string): Promise<Game> {
            try{
                return await this.gameModel.findOne({id: id}).populate('players',this.playerModel).exec();
            }catch(error){
                console.log(error);
            }
        }
        async create(game: Game): Promise<Game> {
            try{
                const createdQuestion = new this.gameModel(game);
                return await createdQuestion.save();
            }catch(error){
                return null;
            }
        }
}
