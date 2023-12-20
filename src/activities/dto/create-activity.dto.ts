import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateActivityDto {
  @ApiProperty({
    default: 'Czech language club',
  })
  @IsString({ message: 'Must be string' })
  activity: string;

  @ApiProperty({
    default: 'Traveling',
  })
  @IsString({ message: 'Must be string' })
  theme: string;

  @ApiProperty({
    default: 'Tanja Lu',
  })
  @IsString({ message: 'Must be number' })
  mentorId: number;

  @ApiProperty({
    description: 'Start date of the activity',
    example: '2023-12-01T14:00:00.000Z',
    type: String,
  })
  @IsDate({ message: 'Must be date' })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the activity',
    example: '2023-12-01T16:00:00.000Z',
    type: String,
  })
  @IsDate({ message: 'Must be date' })
  endDate: Date;
}
