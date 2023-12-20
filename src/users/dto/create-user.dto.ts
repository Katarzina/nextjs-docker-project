import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    default: 'kpp35@gmail.com',
  })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Wrong email' })
  readonly email: string;

  @ApiProperty({
    default: 'Miss Кatja',
  })
  @IsString({ message: 'Must be string' })
  readonly fullName: string;

  @ApiProperty({
    default: 'user',
  })
  @IsString({ message: 'Must be string' })
  readonly role: string;

  @ApiProperty({
    default: '12345678',
  })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Not less than 4 and not more than 16' })
  readonly password: string;
}
