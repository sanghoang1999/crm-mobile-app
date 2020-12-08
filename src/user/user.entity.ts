import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany,  } from "typeorm";
import { SocialEntity } from '../social-media/social-media.entity';
import { ActivityEntity } from '../activity/activity.entity';

@Entity({schema:'db_crm',name:'user'})
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userName:string

  @Column()
  phone:string

  @Column()
  address:string

  @Column()
  createdAt:Date

  @Column()
  updatedAt:Date


  @OneToMany(type=> SocialEntity,socials =>socials.user)
  socials:SocialEntity[]

  @OneToMany(()=>ActivityEntity,activities=>activities.user)
  activities:ActivityEntity[]
  
}