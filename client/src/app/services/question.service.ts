import { lastValueFrom, Observable } from 'rxjs';
import { question } from './../models/question.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:4545/';

  getQuestions(){
    return this.httpClient.get(`${this.url}question/all`) as Observable<question[]>;
  }

  getQuestion(id:string){
    return this.httpClient.get(`${this.url}question?id=${id}`) as Observable<question>;
  }

  postQuestion(question:question){
    return this.httpClient.post(`${this.url}question/create`,question) as Observable<question>;
  }

  updateQuestion(question:question){
    return this.httpClient.put(`${this.url}question/update`,question) as Observable<question>;
  }

  deleteQuestion(question:question){
    return this.httpClient.delete(`${this.url}question/delete`,{body:question}) as Observable<question>;
  }

}
