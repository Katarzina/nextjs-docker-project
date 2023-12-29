import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MentorType {
  @Field(() => Int)
  id: number;

  @Field()
  fullName: string;
}
