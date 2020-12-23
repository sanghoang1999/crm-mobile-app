import { Injectable } from '@nestjs/common';
import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailTemplate } from './entities/email-template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmailTemplateService {
  constructor(
    @InjectRepository(EmailTemplate)
    private repo :Repository<EmailTemplate>
  ){}
  async create(createEmailTemplateDto: CreateEmailTemplateDto) {
    
  }

  async findAll() {
    return await this.repo.find({
      select:['id','emailTemplateType','imageSrc']
    })
  }

  async findOne(id: string) {
    return await this.repo.findOne(id)
  }

  async update(id: string, updateEmailTemplateDto: UpdateEmailTemplateDto) {
    return await this.repo.update({id},updateEmailTemplateDto) 
  }

  remove(id: number) {
    return `This action removes a #${id} emailTemplate`;
  }
}
