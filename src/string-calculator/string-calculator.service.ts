import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
    add(numbers: string): number {
        if (!numbers) return 0;
    
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
          const parts = numbers.split("\n");
          delimiter = new RegExp(parts[0].substring(2));
          numbers = parts[1];
        }
    
        const numArray = numbers.split(delimiter).map((num) => num.trim()) 
        .filter((num) => num) // Remove empty values
        .map((num) => Number(num)) // Convert to numbers
        .filter((num) => !isNaN(num)); //Remove invalid values

        

        //filter negative number 
        const negativeNumbers = numArray.filter(num => num < 0);
        //throw error if any negative input is send
        if (negativeNumbers.length) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
          }
    
        return numArray.reduce((sum, num) => sum + num, 0);
      }
}
