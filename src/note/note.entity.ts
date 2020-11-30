
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity({schema:'db_crm',name:'note'})
export class NoteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  title:string

  @Column()
  description:string

  @Column()
  createdAt:Date

  @Column()
  updatedAt:Date
}