import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MentorEntity } from '../mentors/entities/mentor.entity';

@Module({
  controllers: [MentorsController],
  providers: [MentorsService],
  imports: [TypeOrmModule.forFeature([MentorEntity])],
})
export class MentorsModule {}
