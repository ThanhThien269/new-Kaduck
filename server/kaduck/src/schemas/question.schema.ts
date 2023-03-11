import { answer } from './../../../../client/src/app/models/answer.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuesDocument = HydratedDocument<Question>;

@Schema()
export class Question {
    @Prop()
    questions: string;

    @Prop()
    timer:string;
    
    @Prop()
    points:string;

    @Prop()
    point_type:string;

    @Prop()
    answers: answer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);