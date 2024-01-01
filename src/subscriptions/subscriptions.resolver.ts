import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionType } from './graphql-types/subscription.type';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Resolver(() => SubscriptionType)
export class SubscriptionsResolver {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Query(() => [SubscriptionType])
  async subscriptions() {
    return this.subscriptionsService.findAll();
  }

  @Mutation(() => SubscriptionType)
  async createSubscription(
    @Args('createSubscriptionDto') createSubscriptionDto: CreateSubscriptionDto,
  ) {
    return this.subscriptionsService.create(createSubscriptionDto);
  }

  @Mutation(() => Boolean)
  async removeSubscription(@Args('id', { type: () => Int }) id: number) {
    await this.subscriptionsService.remove(id);
    return true;
  }
}
