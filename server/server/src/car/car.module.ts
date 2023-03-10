import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  providers: [CarService],
  controllers: [CarController],
})
export class CarModule {}