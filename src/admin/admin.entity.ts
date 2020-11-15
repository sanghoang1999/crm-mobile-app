import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

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