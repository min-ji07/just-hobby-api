import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

  async getHome() {
    return 'HOME';
  }

  async onLogin() {
    return 'loginPage 로그인필요';
  }
}
