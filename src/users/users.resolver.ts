import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './graphql-types/user.type';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserType)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findById(id);
  }

  @Query(() => UserType)
  async userByEmail(@Args('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Mutation(() => UserType)
  async createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

