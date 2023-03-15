import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Query,
} from '@nestjs/common';
import { Question } from 'src/schemas/question.schema';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Get('all')
  async getAll() {
    return await this.questionService.getQuestions();
  }

  @Get('')
  getQuestion(@Query('id') id: string) {
    return this.questionService.getQuestion(id);
  }

  @Post('create')
  async createQuestion(@Body() question: Question) {
    return this.questionService.createQuestion(question);
  }

  @Put('update')
  async updateQuestion(@Query('id') id: string, @Body() question: Question) {
    return this.questionService.update(id, question);
  }

  @Delete('delete')
  async deleteQuestion(@Query('id') id: string) {
    return this.questionService.deleteQuestion(id);
  }
}
