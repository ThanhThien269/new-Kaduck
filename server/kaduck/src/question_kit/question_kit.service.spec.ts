import { Test, TestingModule } from '@nestjs/testing';
import { QuestionKitService } from './question_kit.service';

describe('QuestionKitService', () => {
  let service: QuestionKitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionKitService],
    }).compile();

    service = module.get<QuestionKitService>(QuestionKitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
