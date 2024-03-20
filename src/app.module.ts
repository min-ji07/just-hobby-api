import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user/user.controller';
import { LoginController } from './login/login.controller';
import { UserService } from './user/user.service';
import { LoginService } from './login/login.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey',   // 지금은 텍스트지만 변수로 변경해줌 ${secretKey}
      signOptions: {}
    })
  ],
  controllers: [
    MoviesController,  // 기본 설명은 movies에
    UserController,
  LoginController
  ],  // AppController
  providers: [
    MoviesService,
    UserService,
    LoginService
    
  ],  // AppService / providers에는 service
})
export class AppModule {}
