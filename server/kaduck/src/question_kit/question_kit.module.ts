import { Module } from '@nestjs/common';
import { QuestionKitService } from './question_kit.service';
import { QuestionKitController } from './question_kit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionKitSchema, Question_Kit } from 'src/schemas/question_kit.schema';
import { Question, QuestionSchema } from 'src/schemas/question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Question_Kit.name, schema: QuestionKitSchema }]),
    MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])],
  controllers: [QuestionKitController],
  providers: [QuestionKitService]
})
export class QuestionKitModule {}
