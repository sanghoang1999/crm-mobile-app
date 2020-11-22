import { IsNotEmpty, IsString, IsBoolean, IsEmail, MinLength, IsArray, ValidationTypes, ValidateNested } from 'class-validator';
import { SocialType } from '../../social-media/enum/social-type.enum';
import { AddSocialDto } from '../../social-media/dto/add-social.dto';
import {Type} from 'class-transformer'
export class AddUserDto {

    @IsNotEmpty()
    userName: string;

    // @IsNotEmpty()
    phone: string;

    // @IsNotEmpty()
    address: string;

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>AddSocialDto)
    socials:AddSocialDto[]


}