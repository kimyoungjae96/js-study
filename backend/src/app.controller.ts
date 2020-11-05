import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/TimeOut5000')
  async TimeOut5000(): Promise<string> {
    return this.appService.TimeOut5000();
  }
}
