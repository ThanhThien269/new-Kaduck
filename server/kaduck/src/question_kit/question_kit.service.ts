import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question_Kit, Question_KitDocument } from 'src/schemas/question_kit.schema';
import { QuestionService } from 'src/question/question.service'

@Injectable()
export class QuestionKitService {
    constructor(
        @InjectModel(Question_Kit.name) private questionKitModel: Model<Question_KitDocument>,
        private questionService: QuestionService
    ) {}

    async getQuestionKits(): Promise<Question_Kit[]> {
        try{
            let questionKits = await this.questionKitModel.find().exec();
            return questionKits;
        }catch(error){
            return null;
        }
    }

    async getQuestionKit(id: string) {
        try{
            let questionKit = await this.questionKitModel.find({ id: id}).exec();
            return questionKit;
        }catch(error){
            return null;
        }
    }

    async createQuestionKit(question_kit: Question_Kit) {
        try{
            const createdQuestionKit = new this.questionKitModel(question_kit);
            console.log(createdQuestionKit)

            question_kit.questions.forEach((question) => {
            console.log(question)
            this.questionService.createQuestion(question);
            })

            return await createdQuestionKit.save();
        }catch(error){
            console.log(error)
        }
    }

    async updateQuestionKit(question_kit: Question_Kit) {
        try{
            let tempQuestionKit = await this.questionKitModel.findOne({ id: question_kit.id }).exec();

            tempQuestionKit['name'] = question_kit.name;
            tempQuestionKit['description'] = question_kit.description;
            tempQuestionKit['questions'] = question_kit.questions;

            question_kit.questions.forEach((question) => {
                this.questionService.updateQuestion(question);
            })

            
            return tempQuestionKit.save();
        }catch(error){
            return null;
        }
    }

    async deleteQuestionKit(question_kit: Question_Kit) {
        try {
            let questionKit = await this.questionKitModel.findOneAndDelete({ id: question_kit.id }).exec();
            
            question_kit.questions.forEach((question) => {
                this.questionService.deleteQuestion(question);
            })

            return questionKit;
        } catch(error){
            return null;
        }
    }
}
