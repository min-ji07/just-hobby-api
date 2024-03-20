import { IsDate, IsIn, IsNumber, IsString, Length } from "class-validator";
import { UserUseYn } from "../enums/user-use";

export class UserDto{
    // isOptional은 필수 아닌거설정해주는 것? - 헷갈림

    @IsNumber()
    seq: number;

    @IsNumber()
    id: number;

    @IsString()
    password: string = '123456';    // 임시로 설정

    @IsString()
    usercode: string;

    @IsString()
    @Length(1, 50)
    username: string = 'usertestid';

    @IsString()
    email: string;

    @IsString()
    age: string;

    @IsIn([UserUseYn.N, UserUseYn.Y])
    useYn: UserUseYn;

    @IsDate()
    regDate: Date;
}