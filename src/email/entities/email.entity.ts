
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity({schema:'public',name:'email'})
export class Email extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:string

  @Column()
  name:string

  @Column()
  subject:string;

  
  @Column({type:'json'})
  emailSchema:JSON

  @Column()
  emailBody:string

}