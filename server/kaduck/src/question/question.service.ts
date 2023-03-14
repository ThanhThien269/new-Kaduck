import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';

@Injectable()
export class QuestionService {
    constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

    async getQuestions(): Promise<Question[]> {
        try{
            let questions = await this.questionModel.find().exec();
            return questions;
        }catch(error){
            return null;
        }
    }
    
    //getDetail
    async getQuestion(id: string): Promise<Question> {
        try{
            return await this.questionModel.findOne({id:id}).exec();
        }catch(error){
            return null;
        }
    }

    async createQuestion(question: Question): Promise<Question> {
        try{
            const createdQuestion = new this.questionModel(question);
            return await createdQuestion.save();
        }catch(error){
            return null;
        }
    }

    async deleteQuestion(question:Question): Promise<Question | null>{
        try {
            let quest = await this.questionModel.findOneAndDelete({id:question.id}).exec();
            return quest;
        } catch(error){
            return null;
        }
    }
    
    async updateQuestion(question: Question): Promise<Question> {
        try{
            let tempQuestion = await this.questionModel.findOne({id:question.id}).exec();

            tempQuestion['questions'] = question.questions;
            tempQuestion['timer'] = question.timer;
            tempQuestion['img'] = question.img;
            tempQuestion['points'] = question.points;
            tempQuestion['point_type'] = question.point_type;
            tempQuestion['answer_A'] = question.answer_A;
            tempQuestion['answer_B'] = question.answer_B;
            tempQuestion['answer_C'] = question.answer_C;
            tempQuestion['answer_D'] = question.answer_D;
            tempQuestion['true_answer'] = question.true_answer;

            return tempQuestion.save();
        }catch(error){
            return null;
        }
    }
}
