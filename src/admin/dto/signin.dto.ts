import { IsNotEmpty, IsEmail, MinLength, IsEnum, IsString } from 'class-validator'
import { ApiResponseProperty } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
export class SignInDto {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;


}