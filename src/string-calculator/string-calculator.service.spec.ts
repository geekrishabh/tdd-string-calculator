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

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0);
  });

  it('should return the number itself if only one number is provided', () => {
    expect(service.add("1")).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add("1,5")).toBe(6);
  });

  it('should handle multiple numbers addition', () => {
    expect(service.add("1,2,3,4")).toBe(10);
  });

});
