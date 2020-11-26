import { IsNotEmpty, IsEnum } from "class-validator";
import { ContactType } from '../enum/contact-type.enum';

export class AddActivityDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  isMeeting: boolean;

  address: string;

  @IsNotEmpty()
  isContact: boolean;

  contactType:ContactType

  @IsNotEmpty()
  description:string
}