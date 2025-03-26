import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
    add(numbers: string): number {
        if (!numbers) return 0;
    
       const delimiter = this.extractDelimiter(numbers)
       const sanitaizeNumber = this.extractNumber(numbers, delimiter)
    
        const postivenumber = this.validateNegativeNumber(sanitaizeNumber);
    
        return postivenumber.reduce((sum, num) => sum + num, 0);

      }

      private validateNegativeNumber(sanitaizeNumber: number[]): number[] {
        const negativeNumbers = sanitaizeNumber.filter(num => num < 0);
        if (negativeNumbers.length) {
          throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
        }
        return sanitaizeNumber.filter(num => num > 0);
      }

      private extractDelimiter(input:string): RegExp{
        if (input.startsWith("//")) {
          const parts = input.split("\n");
          return new RegExp(parts[0].substring(2));
        }
        return new RegExp(",|\n")
      }

      private extractNumber(numbers: string, delimiter:RegExp):number[]{
        if(numbers.startsWith('//')){
          numbers = numbers.split('\n')[1];
        }

        const numArray = numbers.split(delimiter).map((num) => num.trim()) 
        .filter((num) => num) // Remove empty values
        .map((num) => Number(num)) // Convert to numbers
        .filter((num) => !isNaN(num)); //Remove invalid values
        return numArray;
      }
  
}
