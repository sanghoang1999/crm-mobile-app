import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AddAdminDto } from './dto/admin-dto';
import { AdminService } from './admin.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { SignInDto } from './signin-dto';

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

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) signInDto: SignInDto
  ) {
    return this.adminService.signIn(signInDto);
  }

}
