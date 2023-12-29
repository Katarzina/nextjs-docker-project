import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserType } from '../../users/graphql-types/user.type'; // Предполагается, что у вас есть UserType
import { ActivityType } from '../../activities/graphql-types/activity.type'; // Предполагается, что у вас есть ActivityType

@ObjectType('Subscription')
export class SubscriptionType {
  @Field(() => ID)
  id: number;

  @Field(() => UserType)
  user: UserType; // Предполагается, что UserType определяет GraphQL тип для UserEntity

  @Field(() => ActivityType)
  activity: ActivityType; // Предполагается, что ActivityType определяет GraphQL тип для ActivityEntity
}
