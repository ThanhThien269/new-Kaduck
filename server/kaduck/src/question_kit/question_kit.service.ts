import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  Question_Kit,
  Question_KitDocument,
} from 'src/schemas/question_kit.schema';
import { QuestionService } from 'src/question/question.service';

@Injectable()
export class QuestionKitService {
  constructor(
    @InjectModel(Question_Kit.name)
    private questionKitModel: Model<Question_KitDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) { }

  async getAllKits(): Promise<Question_Kit[]> {
    try {
      let questionKits = await this.questionKitModel
        .find()
        .populate('questions')
        .exec();
      return questionKits;
    } catch (error) {
      return null;
    }
  }

  async getQuestionKit(id: string): Promise<Question_Kit | null> {
    try {
      let questionKit = await this.questionKitModel
        .findOne({ id: id })
        .populate('questions')
        .exec();
      return questionKit as Question_Kit;
    } catch (error) {
      return null;
    }
  }

  async createQuestionKit(question_kit: Question_Kit) {
    try {
      let kit = question_kit.questions;
      question_kit.questions = [];
      question_kit.id = Date.now().toString();
      let createdQuestionKit = await this.questionKitModel.create(question_kit);

      kit.forEach(async (question: any) => {
        question.id = Date.now().toString();
        let newQues = await this.questionModel.create(question);
        await this.questionKitModel.findOneAndUpdate(
          { id: createdQuestionKit.id },
          {
            $push: {
              questions: newQues._id,
            },
          },
        );
      });
      return createdQuestionKit;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, kit: Question_Kit) {
    try {
      await this.questionKitModel.findOneAndUpdate({ id: id }, kit);
      return kit;
    } catch (error) {
      console.log(error);
    }
  }
  async getQuestionKitByIdUser(id: string): Promise<Question_Kit[] | null> {
    console.log(id)
    try {
      let questionKitbyUser = await this.questionKitModel.find({ Ownerid: id }).lean().populate('questions').exec();

      return questionKitbyUser;
    } catch (error) {
      return null;
    }
  }
  //   async deleteQuestionKit(question_kit: Question_Kit) {
  //     try {
  //       let questionKit = await this.questionKitModel
  //         .findOneAndDelete({ id: question_kit.id })
  //         .exec();

  //       question_kit.questions.forEach((question) => {
  //         this.questionService.deleteQuestion(question);
  //       });

  //       return questionKit;
  //     } catch (error) {
  //       return null;
  //     }
  //   }
}
