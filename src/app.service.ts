import { Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
