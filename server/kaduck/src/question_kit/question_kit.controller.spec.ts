import { Test, TestingModule } from '@nestjs/testing';
import { QuestionKitController } from './question_kit.controller';
import { QuestionKitService } from './question_kit.service';

describe('QuestionKitController', () => {
  let controller: QuestionKitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionKitController],
      providers: [QuestionKitService],
    }).compile();

    controller = module.get<QuestionKitController>(QuestionKitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
