import { IsDate, IsNumber, IsString, Length } from "class-validator";

export class MovieTestDto{
    @IsNumber()
    seq: number;

    @IsNumber()
    id: number;

    @IsString()
    @Length(1, 50)
    title: string;

    @IsString()
    @Length(1, 200) // MaxLength도 있음
    content: string;

    @IsDate()
    regDate: Date;

    @IsDate()
    modDate: Date;
}