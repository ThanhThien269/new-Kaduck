import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Question } from 'src/schemas/question.schema';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}


  @Get('all')
  getAll(){
      return this.questionService.getAll();
  }

  @Get(':id')
  getDetail(@Param('id') id:string){
      console.log(id);
      return this.questionService.getDetail(id);
  }

  @Post('create')
  async getCreate(@Body() user:Question){        
      return this.questionService.create(user);
  }

  @Delete('delete')
  async deleteId(@Query('id') id:string){
      return this.questionService.deleteById(id);
  }
}
