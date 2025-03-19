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

  it('should throw an error for negative numbers', () => {
    expect(() => service.add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add("1,-2,-3,4")).toThrow("negative numbers not allowed -2,-3");
  });

  it('should handle new lines as delimiters', () => {
    expect(service.add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(service.add("//;\n1;2")).toBe(3);
  });

  it('should work with different special character delimiters', () => {
    expect(service.add("//@\n1@2@3")).toBe(6);
    expect(service.add("//#\n2#4#8")).toBe(14);
  });

  it('should handle a mix of newline and commas with numbers', () => {
    expect(service.add("1\n2\n3,4")).toBe(10);
  });

});
