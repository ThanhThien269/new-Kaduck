import { Question_Kit } from './../schemas/question_kit.schema';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { QuestionKitService } from './question_kit.service';

@Controller('questionkit')
export class QuestionKitController {
  constructor(private readonly questionKitService: QuestionKitService) {}
    @Get('all')
    async getQuestionKits(){
        return await this.questionKitService.getQuestionKits();
    }

    @Get ('')
    async getQuestionKit(@Query('id') id: string) {
        return await this.questionKitService.getQuestionKit(id);
    }

    @Post('create')
    async createQuestionKit(@Body() question_kit: Question_Kit){
        return await this.questionKitService.createQuestionKit(question_kit);
    }
    
    @Put("update")
    async updateQuestionKit(@Body() question_kit: Question_Kit) {
        return await this.questionKitService.updateQuestionKit(question_kit);
    }

    @Delete("delete")
    async deleteQuestionKit(@Body() question_kit: Question_Kit){
        return await this.questionKitService.deleteQuestionKit(question_kit);
    }
}
