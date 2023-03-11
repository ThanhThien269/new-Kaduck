import { Question } from 'src/schemas/question.schema';
// import { question_kit } from './../../../../client/src/app/models/question_kit.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<Question_Kit>;

@Schema()
export class Question_Kit{
  
    
    @Prop()
    id:string;

    @Prop()
    question_kit:Question[];
}
export const QuestionKitSchema = SchemaFactory.createForClass(Question_Kit);