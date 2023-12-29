import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMentorDto {
  @ApiProperty({
    default: 'Olena Popova',
  })
  @IsString({ message: 'Must be string' })
  @Field(() => String, { description: 'Full name of the mentor' })
  fullName: string;
}
