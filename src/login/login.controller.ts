import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import * as bcrypt from 'bcrypt';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entity/user.entity';

// @ApiBearerAuth('AccessToken')  // 여기 위에 선언해주는거군 AccessToken는 내가 설정함
// 이렇게 처리할 경우 swagger ui 상에서 Authorize가 활성화 됨 --> 아직 안됨ㅎ
@Controller() // @가 붙으면 데코레이터
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async getHome(){ // async와 아닌거의 차이는 뭘까
    // async와 await
    // function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다, 프라미스가 아니더라도 이행상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 한다
    // await은 async 함수 안에서만 동작함
    // await 키워드를 붙  여주면 프라미스가 처리될 때까지 기다림
    // -->  api호출시 await ~~~ 하면 api호출이 될 때 까지 기다렸다 값을 반환하고 해당 값을 만진다
    // await은 프라미스가 처리될 때 까지 함수 실행을 기다리게 만드는 것
    // 위에 async가 있다면
    // let response = await fetch('/article/promise-chaining/user.json'); --> 이런식으로 사용할 수 있음
    // let user = await response.json();

    // 프라미스란,,?
    //

    return this.loginService.getHome();
  }

  @Get('/login')
  async onLoginPage(){
    const user = new UserDto;
    // console.log('userName => ', user.username, ', userPw => ', user.password);
    // 이제 이걸로 bcrypt 사용
    
    // saveUser를 저장
    return `${user.username}, ${user.password}`
  }

  // api테스트할땐 되는데 얘는 왜 안될까? 주소가 이상한듯
  @Post('/login')
  async onLogin(user: UserDto){ 
    // userName=> ${user.username}, 
    // console.log(user) // 안나오네

    const password = '123456';
    
    const bcryptCode = await bcrypt.hash(password, 10);
    console.log('비밀번호 암호화 => ', bcryptCode)// 암호화 된 거 디비에 저장하기
    // const saveUser = {
    //   username: user.username,
    //   password: bcryptCode
    // }
    // async onLogin(user: UserDto): Promise<void>{ 
    // 아이디랑 비밀번호 입력 받고 비밀번호 bcrypt로 암호화하기
    // 여기서 토큰 발급해서 브라우저 쿠키에 토큰 저장

    // return this.loginService.onLogin();
    return bcryptCode;
  }
}
