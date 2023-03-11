import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player, PlayerDocument } from 'src/schemas/player.schema';

@Injectable()
export class PlayerService {
    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}

    async getAll(): Promise<Player[]> {
        try{
            return this.playerModel.find().exec();
        }catch(error){
            console.log(error);
            
        }
    }
    async getById(id: string): Promise<Player[]> {
        try{
            return await this.playerModel.find({id: id}).exec();
            
        }catch(error){
            console.log(error);
        }
    }
    async create(player: Player): Promise<Player> {
        try{
            let createdPlayer = new this.playerModel(player);
            return await createdPlayer.save();
        }catch(error){
            console.log(error);
        }
    }
    async update(id:string,player: Player): Promise<Player> {
        try{
            console.log('Sucessfully updated')
            await this.playerModel.findByIdAndUpdate(id, player);
            return player;
        }catch(error){
            console.log(error);
                }
    }
    async kick(id:string): Promise<boolean>{
        try{
            console.log('Sucessfully deleted')
            await this.playerModel.findByIdAndRemove(id);
            return true;
        }catch(error){
            console.log(error);
                }
    }
}
