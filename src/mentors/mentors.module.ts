import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MentorEntity } from '../mentors/entities/mentor.entity';
import { MentorsResolver } from './mentors.resolver';

@Module({
  controllers: [MentorsController],
  providers: [MentorsService, MentorsResolver],
  imports: [TypeOrmModule.forFeature([MentorEntity])],
})
export class MentorsModule {}
