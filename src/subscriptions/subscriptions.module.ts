import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionEntity } from './entities/subscription.entity';
import { UserEntity } from '../users/entities/user.entity';
import { ActivityEntity } from '../activities/entities/activity.entity';
import { SubscriptionsResolver } from './subscriptions.resolver';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, SubscriptionsResolver],
  imports: [
    TypeOrmModule.forFeature([SubscriptionEntity, UserEntity, ActivityEntity]),
  ],
})
export class SubscriptionsModule {}
