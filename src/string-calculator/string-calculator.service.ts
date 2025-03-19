import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
    add(numbers: string): number {
        if (!numbers) return 0;
    
        let delimiter = /,/; //comma separated
        if (numbers.startsWith("//")) {
          const parts = numbers.split("\n");
          delimiter = new RegExp(parts[0].substring(2));
          numbers = parts[1];
        }
    
        const numArray = numbers.split(delimiter).map(Number);
    
        return numArray.reduce((sum, num) => sum + num, 0);
      }
}
