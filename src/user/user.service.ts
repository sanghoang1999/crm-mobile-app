import { Injectable } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { getPriority } from 'os';
import { getRepository } from 'typeorm';
import { SocialEntity } from '../social-media/social-media.entity';

@Injectable()
export class UserService {
  constructor(
    private userRepository:UserRepository
  ){}

  async createUser(addUserDto:AddUserDto) {
    console.log(addUserDto)
    const {userName,phone,address,socials} = addUserDto
    const user = new UserEntity();
    user.userName = userName,
    user.phone = phone,
    user.address = address
    const newUser = await user.save();

    if(socials.length > 0) {
      const data = socials.map(social=> {
        return {
          ...social,
          userId:newUser.id
        }
      })
      console.log(data)
      const a = new SocialEntity();
      await getRepository(SocialEntity).insert([
        ...data
      ])
    }

    return {data:newUser}
  }

  async getListUser() {
    const users = await this.userRepository.find({})
    return users
  }

}
