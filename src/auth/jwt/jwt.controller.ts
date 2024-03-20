import { Controller, Get, Post } from '@nestjs/common';
import { JwtService } from './jwtservice';

@Controller() // @가 붙으면 데코레이터
export class JwtController {
  constructor(private readonly jwtService: JwtService) {}

  @Post()
  getJwtToken(): string {  
    return this.jwtService.getJwtToken();
  }
}
