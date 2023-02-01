import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights/flights.entity';
import { CarModule } from './car/car.module';
import { Cars } from './car/car.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mylocalhost',
    database: 'transport',
    entities: [ Flights, Cars],
    synchronize: true,
  }),
  FlightsModule,
  CarModule,
],
  controllers: [AppController],
  providers: [AppService,],
  exports: [FlightsModule],
})
export class AppModule {}
