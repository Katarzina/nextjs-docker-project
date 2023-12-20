import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubscriptionEntity } from '../../subscriptions/entities/subscription.entity';

@Entity('activities')
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activity: string;

  @Column()
  theme: string;

  @Column()
  mentorId: number;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @OneToMany(() => SubscriptionEntity, (subscription) => subscription.activity)
  subscriptions: SubscriptionEntity[];
}
