import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        APPLICATION_PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
