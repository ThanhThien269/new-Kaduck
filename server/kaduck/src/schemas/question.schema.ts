import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuesDocument = HydratedDocument<Question>;

@Schema()
export class Question {
    @Prop()
    questions: string;

    @Prop()
    answers_A:string;

    @Prop()
    correct_answer: string;

    @Prop()
    answers_B: string;
  
    @Prop()
    answers_C:string;

    @Prop()
    answers_D:string;

    @Prop()
    timer:string;
    
    @Prop()
    points:string;

    @Prop()
    point_type:string;

    @Prop({require:true})
    id: string;

}

export const QuestionSchema = SchemaFactory.createForClass(Question);