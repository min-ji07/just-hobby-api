import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';

// @ApiBearerAuth('AccessToken')  // 여기 위에 선언해주는거군 AccessToken는 내가 설정함
// 이렇게 처리할 경우 swagger ui 상에서 Authorize가 활성화 됨
@Controller() // @가 붙으면 데코레이터
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {  // string(반환타입)
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string{
    return 'hello~!!!!!!!!!!'
  }

  @Post()
  createCat() {
    return 'This action create cat';
  }




}
