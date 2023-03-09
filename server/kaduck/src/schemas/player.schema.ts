import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<Player>;

@Schema()
export class Player{
    @Prop()
    name:string;
    
    @Prop()
    id:string;

}
export const PlayerSchema = SchemaFactory.createForClass(Player);