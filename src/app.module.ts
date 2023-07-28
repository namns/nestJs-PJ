import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppDataSource } from 'ormconfig';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot(AppDataSource.options),
      UsersModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [
      AppService
      ],
})
export class AppModule {}
