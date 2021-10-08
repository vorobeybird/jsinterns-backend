import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pinktada'),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
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
