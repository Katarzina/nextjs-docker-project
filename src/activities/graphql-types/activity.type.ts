import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { SubscriptionType } from '../../subscriptions/graphql-types/subscription.type'; // Предполагаем, что у вас есть SubscriptionType

@ObjectType('Activity') // Имя GraphQL типа
export class ActivityType {
  @Field(() => ID)
  id: number;

  @Field()
  activity: string;

  @Field()
  theme: string;

  @Field(() => Int)
  mentorId: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => [SubscriptionType], { nullable: true })
  subscriptions?: SubscriptionType[]; // Предполагаем, что у вас есть GraphQL тип для подписок
}
