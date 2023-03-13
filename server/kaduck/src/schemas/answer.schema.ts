import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnsDocument = HydratedDocument<Answer>;

@Schema()
export class Answer {
    
}
export const AnswerSchema = SchemaFactory.createForClass(Answer);