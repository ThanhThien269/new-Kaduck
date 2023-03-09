/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, UserDocument } from 'src/schemas/question.schema';

@Injectable()
export class QuestionService {
    constructor(@InjectModel(Question.name) private questionModel: Model<UserDocument>) { }

    async getAll(): Promise<Question[]> {
        try{
            let users = await this.questionModel.find().exec();
            return users;
        }catch(error){
            return null;
        }
    }
    
    //getDetail
    async getDetail(id: string): Promise<Question[]> {
        try{
        return await this.questionModel.find({user_id:id}).exec();
        }catch(error){
            return null;
        }
    }
    async create(question: Question): Promise<Question> {
        try{
            const createdUser = new this.questionModel(question);
            return await createdUser.save();
        }catch(error){
            return null;
        }
    }
    async deleteById(_id:string): Promise<Question>{
        try {
            return await this.questionModel.findByIdAndDelete(_id);
            
        } catch(error){
            return null;
        }
    }

    // async updateById(user: User, _id: string): Promise<User> {
    //     try{
    //         return await this.userModel.findByIdAndUpdate(_id, user);

    //     }catch(error){
    //         return null;
    //     }
    // }
}