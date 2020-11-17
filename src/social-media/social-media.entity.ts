import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { SocialType } from './enum/social-type.enum';
import { UserEntity } from '../user/user.entity';

@Entity({schema:'db_crm',name:'social_media'})
export class SocialEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  type:SocialType

  @Column()
  userId:number

  @Column()
  link:string

  @ManyToOne(type=>UserEntity,user=>user.socials)
  @JoinColumn({name:'user_id',referencedColumnName:'id'})
  user:UserEntity

}