import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
    @Prop()
    id:string;
    @Prop()
    img:string;
    @Prop()
    questions: string;
    @Prop()
    timer:string;
    
    @Prop()
    points:string;

    @Prop()
    point_type:string;
    @Prop()
    answer_A:string;
    @Prop()
    answer_B:string;
    @Prop()
    answer_C:string;
    @Prop()
    answer_D:string;
    @Prop()
    true_answer:string;
    
}

export const QuestionSchema = SchemaFactory.createForClass(Question);