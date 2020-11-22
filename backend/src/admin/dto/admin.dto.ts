import { IsNotEmpty, IsString, IsBoolean, IsEmail, MinLength } from 'class-validator';
export class AddAdminDto {

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsString()
    phoneNumber: string;

}