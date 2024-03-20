import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
//   constructor(@InjectRepository(User) private userRepository: Repository<User>){}

//   async create(createUserDto: CreateUserDto): Promise<User>{
//     // 인스턴스 생성
//     const user = this.userRepository.create(createUserDto);
//     // 인스턴스 Database에 저장
//     return await this.userRepository.save(user);
//   }

  async findAll() {
    // return await this.userRepository.find();
    return 'user findAll';
  }

  async findOne(id: number) {
    throw new Error('Method not implemented.');
  }

}
