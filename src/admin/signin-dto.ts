import { IsNotEmpty, IsEmail, MinLength, IsEnum, IsString } from 'class-validator'

export class SignInDto {

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;


}