import { Controller, Post, Body, ValidationPipe, Get, UseGuards } from '@nestjs/common';
import { AddAdminDto } from './dto/admin.dto';
import { AdminService } from './admin.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('admin')
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

}
