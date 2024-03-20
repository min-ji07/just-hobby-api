import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
   getJwtToken(): string {
    return 'jwtToken 발급';
  }
}
