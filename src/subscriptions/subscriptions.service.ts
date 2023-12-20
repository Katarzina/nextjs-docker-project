import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionEntity } from './entities/subscription.entity';
import { UserEntity } from '../users/entities/user.entity';
import { ActivityEntity } from '../activities/entities/activity.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(SubscriptionEntity)
    private repository: Repository<SubscriptionEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const user = await this.userRepository.findOneBy({
      id: createSubscriptionDto.userId,
    });

    const activity = await this.activityRepository.findOneBy({
      id: createSubscriptionDto.activityId,
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createSubscriptionDto.userId} not found.`,
      );
    }

    if (!activity) {
      throw new NotFoundException(
        `Activity with ID ${createSubscriptionDto.activityId} not found.`,
      );
    }

    const subscription = this.repository.create({
      user: user,
      activity: activity,
    });
    return this.repository.save(subscription);
  }

  findAll() {
    return this.repository.find({
      relations: ['user', 'activity'],
    });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
