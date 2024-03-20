import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { UserService } from './user.service'

@ApiTags('USER')
@ApiBearerAuth('AcessToken')    // 이건뭘까?
@Controller('user') 
export class UserController {
//   constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {  
    // return this.userService.findAll();
    return 'user 리스트 조회';
  }

//   @Post()
//   create(@Body() createUserDto: CreateUserDto){
//     return this.userService.create(createUserDto);
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string){
//     return this.userService.findOne(+id);

//   }
}
