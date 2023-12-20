import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({
    default: 2,
  })
  @IsNumber({}, { message: 'The value must be a number' })
  userId: number;

  @ApiProperty({
    default: 3,
  })
  @IsNumber({}, { message: 'The value must be a number' })
  activityId: number;
}
