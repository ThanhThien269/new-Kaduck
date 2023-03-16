import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async getQuestions(): Promise<Question[]> {
    try {
      let questions = await this.questionModel.find().exec();
      return questions;
    } catch (error) {
      return null;
    }
  }

  //getDetail
  async getQuestion(id: string): Promise<Question> {
    try {
      return await this.questionModel.findOne({ id: id }).exec();
    } catch (error) {
      return null;
    }
  }
  //create
  async createQuestion(question: Question): Promise<Question> {
    try {
      const createdQuestion = new this.questionModel(question);
      return await createdQuestion.save();
    } catch (error) {
      return null;
    }
  }

  async deleteQuestion(id: string) {
    try {
      await this.questionModel.findOneAndDelete({ id: id });
      return true;
    } catch (error) {
      return null;
    }
  }

  async update(id: string, question: Question): Promise<Question> {
    try {
      await this.questionModel.findOneAndUpdate({ id: id }, question);
      return question;
    } catch (error) {
      return null;
    }
  }
}
