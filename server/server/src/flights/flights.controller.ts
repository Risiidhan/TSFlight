import { Controller, Get, Post, Param, Body, Put, Delete, Patch} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

   // CREATE
   @Post()
   async create(@Body() flight: Flights): Promise<Flights[]> {
     return this.flightService.create(flight);
   }
 
   // READ All
   @Get()
   findAll(): Promise<Flights[]> {
     return this.flightService.findAll();
   }
 
   // QUERY
   @Get("query/:orig/:dest")
   async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
     return this.flightService.query(orig,dest);
   }
 

   @Get("cities/origins")
  getOrigins(): Promise<String[]> {
    return this.flightService.getFlightOrigins();
  }

  @Get("cities/destinations")
  getDestinations(): Promise<String[]> {
    return this.flightService.getFlightDestinations();
  }
  
   // READ ONE
   @Get(":id")
   async findOne(@Param() param): Promise<Flights> {
     return this.flightService.findOne(param.id);
   }
 
   @Post(":id/update")
   async update(@Param('id') id, @Body() flight: Flights): Promise<any> {
     flight.id = Number(id);
     return this.flightService.update(flight);
   }
 
 
   // DELETE
   @Post(':id/delete')
   async deleteEntity(@Param('id') id:any): Promise<any> {
     return this.flightService.delete(id);
   } 
 
}