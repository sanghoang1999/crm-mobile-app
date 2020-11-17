import { Injectable, HttpException, UnauthorizedException } from '@nestjs/common';
import { AddAdminDto } from './dto/admin.dto';
import { Password } from '../utils/password';
import { AdminRepository } from './admin.repository';
import { AdminEntity } from './admin.entity';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    private adminRepository: AdminRepository,
    private jwtService:JwtService
  ){}
  async createAdmin(addAdminDto:AddAdminDto) {
    const {password,userName,phoneNumber,name} = addAdminDto
    console.log(userName)
    const user = await this.adminRepository.findOne({userName});
    console.log(user)
    if(user) {
      throw new HttpException('Admin exist',400)
    }
    const passwordStore = await Password.toHash(password)
    const newUser = await this.adminRepository.insert({password:passwordStore,userName:userName,phone:phoneNumber})
    return newUser
  }

  async signIn(signInDto:SignInDto) {
    const {userName,password} = signInDto
    const user = await this.adminRepository.findOne({userName})
    console.log(user)
    if(!user) {
      throw new HttpException('Admin Not Found',404);
    }
    const checkPassword = await Password.compare(user.password,password)
    if(!checkPassword) {
      throw new UnauthorizedException();
    }
    const payload = {
      userName:user.userName,
      role:user.level
    }
    const token = this.jwtService.sign(payload);
    return {token}
  }
}
