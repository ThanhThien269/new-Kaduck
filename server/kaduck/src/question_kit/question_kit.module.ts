import { Module } from '@nestjs/common';
import { QuestionKitService } from './question_kit.service';
import { QuestionKitController } from './question_kit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionKitSchema, Question_Kit } from 'src/schemas/question_kit.schema';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [ 
    MongooseModule.forFeature([{ name: Question_Kit.name, schema: QuestionKitSchema }]),
    QuestionModule
  ],
  controllers: [ QuestionKitController ],
  providers: [ QuestionKitService ]
})
export class QuestionKitModule {}
