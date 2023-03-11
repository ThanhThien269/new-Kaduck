import { Controller, Get, Param } from '@nestjs/common';
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
}
