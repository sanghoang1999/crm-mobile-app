import { Repository, EntityRepository } from "typeorm";
import { AdminEntity } from './admin.entity';

@EntityRepository(AdminEntity)
export class AdminRepository extends Repository<AdminEntity> {

}