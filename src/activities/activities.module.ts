import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from './entities/activity.entity';
import { ActivitiesResolver } from './activities.resolver';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ActivitiesResolver],
  imports: [TypeOrmModule.forFeature([ActivityEntity])],
})
export class ActivitiesModule {}
