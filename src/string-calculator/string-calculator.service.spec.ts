import { Test, TestingModule } from '@nestjs/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringCalculatorService],
    }).compile();

    service = module.get<StringCalculatorService>(StringCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
