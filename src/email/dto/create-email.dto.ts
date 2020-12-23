import { IsNotEmpty } from "class-validator";

export class CreateEmailDto {

  @IsNotEmpty()
  name:string

  @IsNotEmpty()
  subject:string;

  
  @IsNotEmpty()
  emailSchema:JSON

  @IsNotEmpty()
  emailBody:string

}
