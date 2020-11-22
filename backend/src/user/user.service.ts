import { Injectable } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { getPriority } from 'os';
import { getRepository, Connection } from 'typeorm';
import { SocialEntity } from '../social-media/social-media.entity';
import { async } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private userRepository:UserRepository,
    private connection: Connection,
    
  ){}

  async createUser(addUserDto:AddUserDto) {
    const {userName,phone,address,socials} = addUserDto
    const user = new UserEntity();
    user.userName = userName,
    user.phone = phone,
    user.address = address

    let  response;
    await this.connection.transaction( async manager => {
       response = await manager.save(user);

      if(socials.length > 0) {
      const data = socials.map(social=> {
        return {
          ...socials,
          userId:response.id
        }
      })
      await manager.getRepository(SocialEntity).insert([...data])
    }
    })

    return response
  }

  async getListUser() {
    const users = await this.userRepository.find({})
    return users
  }

}
