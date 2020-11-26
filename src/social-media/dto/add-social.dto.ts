import { IsNotEmpty, IsString, IsBoolean, IsEmail, MinLength, IsEnum } from 'class-validator';
import { SocialType } from '../enum/social-type.enum';
export class AddSocialDto  {
  @IsNotEmpty()
  @IsEnum(SocialType)
  type:SocialType

  @IsNotEmpty()
  link:string

  socialId?:number

}