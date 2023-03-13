import { Question } from 'src/schemas/question.schema';
// import { question_kit } from './../../../../client/src/app/models/question_kit.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose,{ HydratedDocument } from 'mongoose';


export type Question_KitDocument = HydratedDocument<Question_Kit>;

@Schema()
export class Question_Kit{
    @Prop()
    id:string;

    @Prop()
    name:string;

    @Prop()
    description:string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
    question_kit:Question[];
}
export const QuestionKitSchema = SchemaFactory.createForClass(Question_Kit);