import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { getPriority } from 'os';
import { getRepository, Connection } from 'typeorm';
import { SocialEntity } from '../social-media/social-media.entity';
import { async } from 'rxjs';
import { parse } from 'path';

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
  
  async updateUser(id:string,addUserDto:AddUserDto) {
    const {userName,phone,address,socials} = addUserDto
    const user = await this.userRepository.findOne(id);
    if(!user) {
      throw new NotFoundException('User Not Found');
    }
    user.userName = userName,
    user.phone = phone,
    user.address = address
    try {
      
    await this.connection.transaction( async manager => {
      await manager.save(user);
      if(socials.length > 0) {
        socials.map(async social=> {
          if(social.socialId) {
           await manager.getRepository(SocialEntity).update({id:social.socialId},{type:social.type,link:social.link}) 
          }
          else {

           await manager.getRepository(SocialEntity).insert({type:social.type,link:social.link,userId:user.id}) 
          }
      })
    }
    })
    return ({code:200,message:"Update Successfully"}) 
    } catch (error) {
      throw new BadRequestException(error.message)   
    }

  }

  async getListUser() {
    const users = await this.userRepository.find({})
    return users
  }

  async getUserById(id) {
    const users = await this.userRepository.find({
      where:{
        id:id
      },
      relations:['socials']
    })
    return users
  }

}
