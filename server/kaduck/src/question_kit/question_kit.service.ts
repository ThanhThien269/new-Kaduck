import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { Question_Kit, Question_KitDocument } from 'src/schemas/question_kit.schema';

@Injectable()
export class QuestionKitService {
    constructor(
        @InjectModel(Question_Kit.name) private questionKitModel: Model<Question_KitDocument>,
        @InjectModel(Question.name) private questionModel: Model<QuestionDocument>)
       {}
       async getAll(): Promise<Question_Kit[]> {
        try{
            return this.questionKitModel.find().populate('questions').exec();
        }catch(error){
            console.log(error);
        }
        }
        async getById(id:string): Promise<Question_Kit> {
            try{
                return await this.questionKitModel.findOne({id: id}).populate('questions',this.questionModel).exec();
            }catch(error){
                console.log(error);
            }
        }
        async create(questionKit: Question_Kit){
            try{
                let ques =  questionKit.question_kit;
                questionKit.question_kit=[];
                questionKit.id=Math.floor(Math.random() * 1000 ).toString();
                let nqk = await this.questionKitModel.create(questionKit);
                
            }catch(error){
                console.log(error);
            }

            
        }
}
