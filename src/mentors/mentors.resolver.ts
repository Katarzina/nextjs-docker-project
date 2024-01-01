import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MentorsService } from './mentors.service';
import { MentorType } from './graphql-types/mentor.type';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Resolver((of) => MentorType)
export class MentorsResolver {
  constructor(private readonly mentorsService: MentorsService) {}

  @Query(() => [MentorType])
  async mentors() {
    return this.mentorsService.findAll();
  }

  @Query(() => MentorType, { nullable: true })
  async mentor(@Args('id', { type: () => Int }) id: number) {
    return this.mentorsService.findOne(id);
  }

  @Mutation(() => MentorType)
  async createMentor(@Args('createMentorDto') createMentorDto: CreateMentorDto) {
    return this.mentorsService.create(createMentorDto);
  }

  @Mutation(() => MentorType)
  async updateMentor(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateMentorDto') updateMentorDto: UpdateMentorDto,
  ) {
    await this.mentorsService.update(id, updateMentorDto);
    return this.mentorsService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeMentor(@Args('id', { type: () => Int }) id: number) {
    await this.mentorsService.remove(id);
    return true;
  }
}
