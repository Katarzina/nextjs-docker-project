import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ActivitiesModule } from './activities/activities.module';
import { ActivityEntity } from './activities/entities/activity.entity';
import { MentorsModule } from './mentors/mentors.module';
import { MentorEntity } from './mentors/entities/mentor.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { SubscriptionEntity } from './subscriptions/entities/subscription.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { SocketService } from './socket/socket.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
    }),
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [
        UserEntity,
        ActivityEntity,
        MentorEntity,
        SubscriptionEntity,
      ],
      synchronize: true, // Caution: set to false in production
    }),
    UsersModule,
    AuthModule,
    ActivitiesModule,
    MentorsModule,
    SubscriptionsModule,
    SocketService
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
