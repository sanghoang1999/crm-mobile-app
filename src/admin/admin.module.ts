import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { JwtModule } from '@nestjs/jwt'
@Module({
  imports:[
    TypeOrmModule.forFeature([AdminRepository]),
    JwtModule.register({
      secret: 'emvuidi',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports:[AdminService]
})
export class AdminModule {}
