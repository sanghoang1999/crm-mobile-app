
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity({schema:'public',name:'email_template'})
export class EmailTemplate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:string

  @Column()
  name:string

  @Column()
  emailTemplateType:string;

  @Column()
  imageSrc:string;
  
  @Column({type:'json'})
  emailSchema:JSON

  @Column()
  emailBody:string
}