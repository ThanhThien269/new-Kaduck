import { Question_Kit } from './question_kit.schema';
// import { Question } from 'src/schemas/question.schema';
// import { question_kit } from './../../../../client/src/app/models/question_kit.model';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Player } from './player.schema';


export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game{
    @Prop()
    id:string;

    @Prop()
    disabled:boolean;

    @Prop()
    pin:string;
    
    @Prop()
    players:Player[];

    @Prop()
    question_kit:Question_Kit[];
}
export const RoomSchema = SchemaFactory.createForClass(Game);