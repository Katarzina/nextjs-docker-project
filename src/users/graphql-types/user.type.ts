import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SubscriptionType } from '../../subscriptions/graphql-types/subscription.type';
@ObjectType('User')
export class UserType {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  // Обычно пароль не включается в GraphQL API по соображениям безопасности
  // @Field()
  // password: string;

  @Field()
  fullName: string;

  @Field()
  role: string;

  @Field(() => [SubscriptionType], { nullable: 'itemsAndList' }) // Поле может быть null или содержать массив null-элементов
  subscriptions?: SubscriptionType[];
}
