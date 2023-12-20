import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubscriptionEntity } from '../../subscriptions/entities/subscription.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column()
  role: string;

  @OneToMany(() => SubscriptionEntity, (subscription) => subscription.user)
  subscriptions: SubscriptionEntity[];
}
