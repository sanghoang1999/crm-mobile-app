import { Controller, Post, Body, ValidationPipe, UseGuards, Get, Put, Query, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './dto/add-user.dto';
import { UserService } from './user.service';
import { AdminGuard } from '../guards/admin.guard';


@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService

  ) {}

  @Post('/')
  @UseGuards(AdminGuard)
  createUser(
    @Body(ValidationPipe) addUserDto:AddUserDto
  ) {
    return this.userService.createUser(addUserDto)
  }

  @Get('/list-user')
  @UseGuards(AdminGuard)
  getListUser(
  ) {
    return this.userService.getListUser()
  }

  @Get('')
  @UseGuards(AdminGuard)
  getUserById(
    @Query('id') id:string
  ) {
    return this.userService.getUserById(id)
  }

  @Get('/search')
  @UseGuards(AdminGuard)
  searchUser(
    @Query('name') name:string
  ) {
    return this.userService.searchUser(name)
  }



  @Put('/update-user')
  @UseGuards(AdminGuard)
  updateUser(
    @Query('id') id:string,
    @Body(ValidationPipe) addUserDto:AddUserDto
  ) {
    return this.userService.updateUser(id,addUserDto)
  }


}
