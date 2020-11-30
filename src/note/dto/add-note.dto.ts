import { IsNotEmpty } from "class-validator"

export class AddNoteDto {
  @IsNotEmpty()
  title:string

  @IsNotEmpty()
  description:string
}