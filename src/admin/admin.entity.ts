import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Exclude } from "class-transformer";

@Entity({schema:'db_crm',name:'admin'})
export class AdminEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userName:string

  @Column()
  name:string

  @Column()
  level:number
  

  @Column()
  @Exclude()
  password:string

  @Column()
  address:string

  @Column()
  phone:string

  @Column()
  createdAt:Date

  @Column()
  updatedAt:Date
}