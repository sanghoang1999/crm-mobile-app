import { IsNotEmpty } from "class-validator"

export class ChangePasswordDto {
  
  @IsNotEmpty()
  oldPassword: string

  @IsNotEmpty()
  newPassowrd:string
}