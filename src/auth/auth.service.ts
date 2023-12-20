import {
  HttpException,
  HttpStatus,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный емайл или пароль',
    });
  }

  async register(dto: CreateUserDto) {
    try {
      const candidate = await this.usersService.findByEmail(dto.email);
      if (candidate) {
        throw new HttpException(
          'Пользователь с таким email существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      const hashPassword = await bcrypt.hash(dto.password, 5);
      const userData = await this.usersService.create({
        ...dto,
        password: hashPassword,
      });
      return {
        token: this.jwtService.sign({ id: userData.id }),
      };
    } catch (err) {
      console.log(err);
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }

  async login(user: UserEntity) {
    return {
      token: this.jwtService.sign({ id: user.id }),
    };
  }
}
