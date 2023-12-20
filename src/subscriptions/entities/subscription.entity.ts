import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { ActivityEntity } from '../../activities/entities/activity.entity';
@Entity('subscriptions')
export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.subscriptions)
  user: UserEntity;

  @ManyToOne(() => ActivityEntity, (activity) => activity.subscriptions)
  activity: ActivityEntity;
}
