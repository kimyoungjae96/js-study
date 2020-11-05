import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
  async TimeOut5000(): Promise<string> {
    await new Promise((r) => setTimeout(r, 5000));
    return 'hello';
  }
}
