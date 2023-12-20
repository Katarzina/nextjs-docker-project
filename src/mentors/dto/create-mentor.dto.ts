import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMentorDto {
  @ApiProperty({
    default: 'Olena Popova',
  })
  @IsString({ message: 'Must be string' })
  fullName: string;
}
