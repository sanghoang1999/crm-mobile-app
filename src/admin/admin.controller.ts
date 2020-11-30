import { Controller, Post, Body, ValidationPipe, Get, UseGuards, Patch, UseInterceptors, ClassSerializerInterceptor, Put } from '@nestjs/common';
import { AddAdminDto } from './dto/admin.dto';
import { AdminService } from './admin.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { GetAdmin } from './get-admin.decorator';
import { AdminEntity } from './admin.entity';

@ApiTags('admin')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('admin')
export class AdminController {
  constructor(
    private adminService:AdminService
  ){}

  @Post('/')
  createAdmin(
    @Body(ValidationPipe) adminDto: AddAdminDto
  ) {
    return this.adminService.createAdmin(adminDto);
  }

  @Get('/')
  @UseGuards(AdminGuard)
  testAuth(
  ) {
    return 'hahaha'
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) signInDto: SignInDto
  ) {
    return this.adminService.signIn(signInDto);
  }

  @Put('/update-password')
  @UseGuards(AdminGuard)
  changePassword(
    @Body(ValidationPipe) changePasswordDto:ChangePasswordDto,
    @GetAdmin() admin: AdminEntity

  ) {
    return this.adminService.changePassword(admin,changePasswordDto)
  }
}
