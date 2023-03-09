import { Question_Kit } from './question_kit.schema';
// import { Question } from 'src/schemas/question.schema';
// import { question_kit } from './../../../../client/src/app/models/question_kit.model';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Player } from './player.schema';


export type UserDocument = HydratedDocument<Room>;

@Schema()
export class Room{
    @Prop()
    name:string;

    @Prop()
    PIN:string;
    
    @Prop()
    player:Player[];

    @Prop()
    question:Question_Kit;
}
export const RoomSchema = SchemaFactory.createForClass(Room);