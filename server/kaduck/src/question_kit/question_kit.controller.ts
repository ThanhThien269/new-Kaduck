import { Question_Kit } from './../schemas/question_kit.schema';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { QuestionKitService } from './question_kit.service';

@Controller('questionkit')
export class QuestionKitController {
  constructor(private readonly questionKitService: QuestionKitService) {}

  @Get('')
    getAll(){
        return this.questionKitService.getAll();
    }
    @Get (':id')
    async getById(@Param('id') id: string) {
        return  await this.questionKitService.getById(id);
       
    }
    @Post()
    async create(@Body() question_kit: Question_Kit){
        return await this.questionKitService.create(question_kit);
    }
    @Put()
    async update(@Query('id') _id: string,@Body() question_kit: Question_Kit) {
        let data = await this.questionKitService.update(_id, question_kit);
        return data;
    }
    @Put(":id/question")
    async updateArrayQuestion(@Param('id') _id: string, @Query('id') quesId: string) {
        let data = await this.questionKitService.pushQuestionToKit(_id, quesId);
        return data;
    }
    @Delete(":id/question")
    async deleteQuestionInQuiz(@Param('id') _id: string, @Query('id') quesId: string){
        return await this.questionKitService.popQuestionFromKit(_id, quesId);
    }
}
