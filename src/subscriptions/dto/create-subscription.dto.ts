import { InputType, Field, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateSubscriptionDto {
  @ApiProperty({
    default: 2,
  })
  @Field(() => Int)
  @IsNumber({}, { message: 'The value must be a number' })
  userId: number;

  @ApiProperty({
    default: 3,
  })
  @Field(() => Int)
  @IsNumber({}, { message: 'The value must be a number' })
  activityId: number;
}
