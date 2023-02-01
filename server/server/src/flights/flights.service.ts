import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightRepository: Repository<Flights>,
  ) {}

  async create(flight: Flights): Promise<any> {
    return await this.flightRepository.save(flight);
  }

  findOne(id: number): Promise<any> {
    return this.flightRepository.findOneBy({ id });
  }


  async findAll(): Promise<Flights[]> {
    return this.flightRepository.find();
  }

  async getFlightOrigins(): Promise<String[]> {
    return this.flightRepository.query("SELECT DISTINCT origin FROM flights");
  }

  async getFlightDestinations(): Promise<String[]> {
    return this.flightRepository.query("SELECT DISTINCT destination FROM flights");
  }

  async query(orig: string, dest: string): Promise<any> {
    return await this.flightRepository.findBy({origin: orig, destination: dest});
  }

  async update(flight: Flights): Promise<UpdateResult> {
    return await this.flightRepository.update(flight.id, flight);
  }
  

  async delete(id: number): Promise<any> {
    await this.flightRepository.delete(id);
    return { deleted: true };
  }



}