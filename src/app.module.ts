import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ConfigModule,ConfigService} from '@nestjs/config'
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies'
import { SocialMediaModule } from './social-media/social-media.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`env/${process.env.NODE_ENV || 'local'}.env`,
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        synchronize: false,
        host: configService.get<string>('DATABASE_HOST'),
        port: Number(configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER_NAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        url:configService.get<string>('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        ssl:{
          rejectUnauthorized:false
        },
        logging:true,
        namingStrategy: new SnakeNamingStrategy()
      })
    }),
    UserModule,
    AdminModule,
    SocialMediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
