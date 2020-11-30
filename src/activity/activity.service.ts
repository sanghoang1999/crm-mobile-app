import { Injectable } from '@nestjs/common';
import { AddActivityDto } from './dto/add-activity.dto';
import { ContactType } from './enum/contact-type.enum';
import { ActivityRepository } from './activity.repository';

@Injectable()
export class ActivityService {
  constructor(
    private activityRepository:ActivityRepository
  ){}
  async createActivity(addActivityDto:AddActivityDto) {
    await this.activityRepository.insert(addActivityDto)
    return ({code:200,message:"Create Successfully"})
  }
  async getActivityById(id:string) {
    const act = this.activityRepository.findOne(id);
    return act
  }
  async getListActivity() {
    const acts = this.activityRepository.find({
      relations:['user']
    })
    return acts
  }

  async searchActivity(date:Date) {
    const query = this.activityRepository.createQueryBuilder('a')
    query.where(`a.createdAt ::date = '${date}'::date`)

    return await query.getMany();
  }

  async deleteActivity(id:string) {
    await this.activityRepository.delete(id);
    return {message:'Delete successfully'}
  }
}
