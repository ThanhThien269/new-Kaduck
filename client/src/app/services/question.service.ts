import { lastValueFrom, Observable } from 'rxjs';
import { question } from './../models/question.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:4545/';

  getQuestions() {
    return this.httpClient.get(
      `${environment.apiEndpoint}question/all`
    ) as Observable<question[]>;
  }

  getQuestion(id: string) {
    return this.httpClient.get(
      `${environment.apiEndpoint}question?id=${id}`
    ) as Observable<question>;
  }

  postQuestion(question: question) {
    return this.httpClient.post(
      `${environment.apiEndpoint}question/create`,
      question
    ) as Observable<question>;
  }

  updateQuestion(question: question) {
    return this.httpClient.put(
      `${environment.apiEndpoint}question/update`,
      question
    ) as Observable<question>;
  }

  deleteQuestion(question: question) {
    return this.httpClient.delete(`${environment.apiEndpoint}question/delete`, {
      body: question,
    }) as Observable<question>;
  }
}
