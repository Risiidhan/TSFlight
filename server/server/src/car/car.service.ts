import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cars } from './car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) {}

  async findAll(): Promise<Cars[]> {
    return this.carsRepository.find();
  }

  async findOne(id: any): Promise<any> {
    return this.carsRepository.findOne(id);
  }
}