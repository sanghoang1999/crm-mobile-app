import { Module } from '@nestjs/common';
import { SocialMediaService } from './social-media.service';

@Module({
  providers: [SocialMediaService]
})
export class SocialMediaModule {}
