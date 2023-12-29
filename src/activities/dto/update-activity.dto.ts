import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsDate, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class UpdateActivityDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  activity?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  theme?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Must be a number' })
  mentorId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Must be a date' })
  startDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Must be a date' })
  endDate?: Date;
}
