import { Body, Controller, Delete, Get, Param, Post , Query} from '@nestjs/common';
import { Question } from 'src/schemas/question.schema';
import { QuestionService } from 'src/service/user/question.service';

@Controller('user')
export class UserController {
    constructor (private questionService: QuestionService) {}

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
    // @Put('update')
    // async updateById(@Query('id')  id:string){
    //     return this.questionService.updateById(id);
    // }
}