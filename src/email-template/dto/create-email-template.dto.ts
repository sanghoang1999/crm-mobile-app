import { IsNotEmpty } from "class-validator";

export class CreateEmailTemplateDto {

  id:string

  name:string

  emailTemplateType:string;

  imageSrc:string;
  
  emailSchema:JSON

  emailBody:string
}
