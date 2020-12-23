import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmailService {
  constructor(
  @InjectRepository(Email)
  private emailService: Repository<Email>
  ){}
  async create(createEmailDto: CreateEmailDto) {
    return await this.emailService.insert(createEmailDto)
  }

  async findAll() {
    return await this.emailService.find({});
  }

  async findOne(id: string) {
    return await this.emailService.findOne(id);
  }

  async update(id: string, updateEmailDto: UpdateEmailDto) {
    return await this.emailService.update({id},updateEmailDto)
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
