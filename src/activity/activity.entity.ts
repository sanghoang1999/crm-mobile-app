
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { ContactType } from './enum/contact-type.enum';
import { UserEntity } from '../user/user.entity';

@Entity({schema:'db_crm',name:'activity'})
export class ActivityEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId:number

  @Column()
  adminId:number

  @Column()
  address:string

  @Column()
  isMeeting:boolean

  @Column()
  isContact:boolean

  @Column()
  contactType:ContactType

  @Column()
  description:string

  @Column()
  createdAt:Date

  @Column()
  updatedAt:Date

  @Column()
  startDate:Date

  @Column()
  endDate:Date

  @ManyToOne(type => UserEntity)
  @JoinColumn({name:"user_id",referencedColumnName:"id"})
  user:UserEntity;
}