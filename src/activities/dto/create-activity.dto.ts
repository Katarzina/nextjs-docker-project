import { InputType, Field, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateActivityDto {
  @ApiProperty({
    default: 'Czech language club',
  })
  @Field()
  @IsString({ message: 'Must be string' })
  activity: string;

  @ApiProperty({
    default: 'Traveling',
  })
  @Field()
  @IsString({ message: 'Must be string' })
  theme: string;

  @ApiProperty({
    default: 1,
  })
  @Field(() => Int) // Использование Int для GraphQL
  @Type(() => Number) // Преобразование типа для class-validator
  @IsInt({ message: 'Must be number' }) // Проверка на целочисленный тип
  mentorId: number;

  @ApiProperty({
    description: 'Start date of the activity',
    example: '2023-12-01T14:00:00.000Z',
    type: String,
  })
  @Field()
  @Type(() => Date)
  @IsDate({ message: 'Must be date' })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the activity',
    example: '2023-12-01T16:00:00.000Z',
    type: String,
  })
  @Field()
  @Type(() => Date)
  @IsDate({ message: 'Must be date' })
  endDate: Date;
}
