import { lastValueFrom, Observable } from 'rxjs';
import { question_kit } from './../models/question_kit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionKitService {

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:4545/';

  getQuestionKits(){
    return this.httpClient.get(`${this.url}questionkit/all`) as Observable<question_kit[]>;
  }

  getQuestionKit(id:string){
    return this.httpClient.get(`${this.url}questionkit?id=${id}`) as Observable<question_kit>;
  }

  postQuestionKit(question_kit: question_kit){
    return this.httpClient.post(`${this.url}questionkit/create`, question_kit) as Observable<question_kit>;
  }

  updateQuestionKit(question_kit: question_kit){
    return this.httpClient.put(`${this.url}questionkit/update`, question_kit) as Observable<question_kit>;
  }

  deleteQuestionKit(question_kit: question_kit){
    return this.httpClient.delete(`${this.url}questionkit/delete`,{ body: question_kit }) as Observable<question_kit>;
  }

}
