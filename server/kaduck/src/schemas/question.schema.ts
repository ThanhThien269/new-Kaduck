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

    
}

export const QuestionSchema = SchemaFactory.createForClass(Question);