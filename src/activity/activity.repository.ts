import { Repository, EntityRepository } from "typeorm";
import { ActivityEntity } from './activity.entity';

@EntityRepository(ActivityEntity)
export class ActivityRepository extends Repository<ActivityEntity> {

}