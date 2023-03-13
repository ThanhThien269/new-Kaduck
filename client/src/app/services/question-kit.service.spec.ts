import { TestBed } from '@angular/core/testing';

import { QuestionKitService } from './question-kit.service';

describe('QuestionKitService', () => {
  let service: QuestionKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
