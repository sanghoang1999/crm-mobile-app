import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityRepository } from './activity.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([ActivityRepository])
  ],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
