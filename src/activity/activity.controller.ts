import { Controller, Post, UseGuards, Body, ValidationPipe, Get, Query } from '@nestjs/common';
import { AdminGuard } from '../guards/admin.guard';
import { AddActivityDto } from './dto/add-activity.dto';
import { ActivityService } from './activity.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Activity')
@Controller('activity')
export class ActivityController {
  constructor(
    private activityService: ActivityService
  ){}
  @Post('/')
  @UseGuards(AdminGuard)
  createUser(
    @Body(ValidationPipe) addActivityDto: AddActivityDto
  ) {
    return this.activityService.createActivity(addActivityDto)
  }

  @Get('/')
  @UseGuards(AdminGuard)
  getActivityById(
    @Query('id') id:string
  ) {
    return this.activityService.getActivityById(id)
  }

  @Get('/list-activity')
  @UseGuards(AdminGuard)
  getListActivity(
  ) {
    return this.activityService.getListActivity()
  }
}
