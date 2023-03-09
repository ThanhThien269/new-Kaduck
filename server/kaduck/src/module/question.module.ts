import { QuestionSchema } from '../schemas/question.schema';
import { UserController } from '../controller/v1/user/user.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Question } from "src/schemas/question.schema";
import { QuestionService } from 'src/service/user/question.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Question.name, schema: QuestionSchema }])],
    controllers: [UserController],
    providers: [QuestionService],
})
export class QuestionModule { }