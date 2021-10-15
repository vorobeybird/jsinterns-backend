import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.0.0.213',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
