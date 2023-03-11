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
            return this.questionKitModel.find().populate('question_kit').exec();
        }catch(error){
            console.log(error);
        }
        }
        async getById(id:string): Promise<Question_Kit> {
            try{
                return await this.questionKitModel.findOne({id: id}).populate('question_kit',this.questionModel).exec();
            }catch(error){
                console.log(error);
            }
        }
        async create(questionKit: Question_Kit){
            try{
                let ques =  questionKit.question_kit;
                ques=[];
                questionKit.id=Date.now().toString();
                let nqk = await this.questionKitModel.create(questionKit);
                
                await ques.forEach(async (q:any)=>{
                    q.id = Date.now().toString();
                    let newQues= await this.questionModel.create(q);
                    
                    await this.questionKitModel.findOneAndUpdate({id: nqk.id},{$push: {ques: newQues._id}});
                })
                return nqk;
            }catch(error){
                console.log(error);
            }

            
        }
        async update(id:string ,questionKit: Question_Kit) {
            try{
                await this.questionKitModel.findOneAndUpdate({id: id},questionKit)
                return questionKit;
            }catch(error){
                console.log(error);
            }
        }
        async pushQuestionToKit(id:string ,questionId: string) {
            try{
                let newQuestion= await this.questionModel.findOne(
                    {id: questionId},
                    ).exec();
    
                await this.questionKitModel.findOneAndUpdate(
                    {id: id},
                    { $push: {
                        question_kit: newQuestion._id
                    }}
                )
                return true;
            }catch(error){
                console.log(error);
            }
        }
        async popQuestionFromKit(id:string ,questionId: string) {
            try{
                let newQuestion= await this.questionModel.findOne(
                    {id: questionId},
                    ).exec();
    
                await this.questionKitModel.findOneAndUpdate(
                    {id: id},
                    { $pull: {
                        question_kit: newQuestion._id
                    }}
                )
                return true;
            }catch(error){
                console.log(error);
            }
        }
}
