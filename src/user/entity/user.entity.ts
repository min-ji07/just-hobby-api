import { ApiProperty } from '@nestjs/swagger'
import { 
    Column, 
    Entity, 
    CreateDateColumn, 
    OneToOne, 
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from 'typeorm'
import { UserUseYn } from '../enums/user-use';

@Entity('user')
export class User{  
    @ApiProperty({
        description: 'user seq'
    })
    @PrimaryGeneratedColumn({ // 자동생성되는 id 값
        name: 'seq'
    })   
    seq: number;

    @ApiProperty({
        description: 'user id'
    })
    @PrimaryColumn({ // primaryKey 설정
        name: 'id',
        type:'varchar',
        unique: true
    })   
    id: number;

    @Column()
    password: string;

    @Column({
        length: 50,
    })
    usercode: string;

    @Column({
        length: 50,
    })
    username: string;

    @Column()
    email: string;

    @Column({
        length: 200,
    })
    age: string;

    @ApiProperty({
        description: '유저 상태 (00: 사용, 01: 미사용, 02: 탈퇴)'   // -> 탈퇴는 없음 Y,N뿐이라 ㅎ
    })
    @Column({
        name: 'use_yn',
        type: 'enum',
        enum: UserUseYn
    })3
    useYn: UserUseYn;

    @ApiProperty({
        description: 'user 가입일'
    })
    @Column({
        name: 'reg_date',
        type: 'varchar'
    })
    regDate: Date;

}