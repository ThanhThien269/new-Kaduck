import { Question_Kit } from './../schemas/question_kit.schema';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { QuestionKitService } from './question_kit.service';

@Controller('questionkit')
export class QuestionKitController {
  constructor(private readonly questionKitService: QuestionKitService) {}
  @Get('all')
  async getAll() {
    return await this.questionKitService.getAllKits();
  }

  @Get('')
  async getQuestionKit(@Query('id') id: string) {
    return await this.questionKitService.getQuestionKit(id);
  }

  @Post('create')
  async createQuestionKit(@Body() question_kit: Question_Kit) {
    return await this.questionKitService.createQuestionKit(question_kit);
  }

  @Put('update')
  async updateQuestionKit(
    @Query('id') id: string,
    @Body() question_kit: Question_Kit,
  ) {
    return await this.questionKitService.update(id, question_kit);
  }
}
