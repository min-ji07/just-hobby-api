import { ApiProperty } from '@nestjs/swagger'   // swagger사용
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
import { MoviesUseYn } from '../enums/movie-use';

@Entity('movie')
export class Movie{
    @ApiProperty({
        description: 'movie seq'
    })
    @PrimaryGeneratedColumn({ // 자동생성되는 id 값
        name: 'seq'
    })   
    seq: number;

    @ApiProperty({
        description: 'movie id'
    })
    @PrimaryColumn({ // primaryKey 설정
        name: 'id',
        type:'varchar',
        unique: true
    })   
    id: number;

    @Column({
        length: 50,
    })
    title: string;

    @Column({
        length: 200,
    })
    content: string;

    @Column({
        name: 'use_yn',
        type: 'enum',
        enum: MoviesUseYn   // enum 설정
    })
    useYn: MoviesUseYn; // 여기도

    @Column({
        name: 'reg_date',
        type: 'varchar'
    })
    regDate: Date;

    @Column({
        name: 'mod_date',
        type: 'varchar'
    })
    modDate: Date;
}