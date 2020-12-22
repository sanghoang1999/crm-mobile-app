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
  create(createEmailTemplateDto: CreateEmailTemplateDto) {
    return 'This action adds a new emailTemplate';
  }

  async findAll() {
    return await this.repo.find({})
  }

  async findOne(id: string) {
    return await this.repo.findOne(id)
  }

  update(id: number, updateEmailTemplateDto: UpdateEmailTemplateDto) {
    return `This action updates a #${id} emailTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailTemplate`;
  }
}
