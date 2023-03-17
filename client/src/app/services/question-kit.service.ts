import { environment } from './../../environments/environment';
import { lastValueFrom, Observable } from 'rxjs';
import { question_kit } from './../models/question_kit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionKitService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:4545/';

  getQuestionKitByOwner(id: string | undefined) {
    return this.httpClient.get(
      `${environment.apiEndpoint}questionkit/byuser?id=${id}`
      // { headers:{

      // }}
    ) as Observable<question_kit[]>;
  }

  getQuestionKits() {
    return this.httpClient.get(
      `${environment.apiEndpoint}questionkit/all`
    ) as Observable<question_kit[]>;
  }

  getQuestionKit(id: string) {
    return this.httpClient.get(
      `${environment.apiEndpoint}questionkit?id=${id}`
    ) as Observable<question_kit>;
  }

  postQuestionKit(question_kit: question_kit) {
    return this.httpClient.post(
      `${environment.apiEndpoint}questionkit/create`,
      question_kit
    ) as Observable<question_kit>;
  }

  updateQuestionKit(id: string, question_kit: question_kit) {
    return this.httpClient.put(
      `${environment.apiEndpoint}questionkit/update?id=${id}`,
      question_kit
    ) as Observable<question_kit>;
  }
}
