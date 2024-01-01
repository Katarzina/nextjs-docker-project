import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActivitiesService } from './activities.service';
import { ActivityType } from './graphql-types/activity.type';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Resolver(() => ActivityType)
export class ActivitiesResolver {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Query(() => [ActivityType])
  async activities() {
    return this.activitiesService.findAll();
  }

  @Query(() => ActivityType)
  async activity(@Args('id', { type: () => Int }) id: number) {
    return this.activitiesService.findOne(id);
  }

  @Mutation(() => ActivityType)
  async createActivity(@Args('createActivityDto') createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Mutation(() => ActivityType)
  async updateActivity(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateActivityDto') updateActivityDto: UpdateActivityDto,
  ) {
    await this.activitiesService.update(id, updateActivityDto);
    return this.activitiesService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeActivity(@Args('id', { type: () => Int }) id: number) {
    await this.activitiesService.remove(id);
    return true;
  }
}
