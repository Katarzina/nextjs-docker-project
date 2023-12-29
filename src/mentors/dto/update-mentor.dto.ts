import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateMentorDto } from './create-mentor.dto';
import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateMentorDto extends PartialType(CreateMentorDto) {
  @ApiPropertyOptional({ description: 'Full name of the mentor' })
  @IsString({ message: 'Must be a string' })
  @IsOptional() // Это делает поле необязательным для валидации
  @Field(() => String, { nullable: true, description: 'Full name of the mentor' }) // nullable: true делает поле необязательным в GraphQL
  fullName?: string;
}
