
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity({schema:'public',name:'email_template'})
export class EmailTemplate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  image:string

  @Column({type:'json'})
  emailBody

}