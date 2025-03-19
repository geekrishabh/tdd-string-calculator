import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StringCalculatorService } from './string-calculator/string-calculator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, StringCalculatorService],
})
export class AppModule {}
