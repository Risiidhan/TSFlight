import { Component, OnInit } from '@angular/core';
import { Flights } from '../models/flights';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

 
  origin: string = '';
  destination: string = '';
  flightNumber: number = 0;
  depart: string = '';
  arrive: string = '';
  nonstop: boolean = false;

  flightList: any[] =[];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  } 

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flights = {
      origin: this.origin, 
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart.toString(),
      arrive: this.arrive.toString(),
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);
    this.refresh();
  }

  update(flight:Flights){
    this.flightService.updateFlight(flight).subscribe(data =>{
      console.log('data is', data);
      if(data){
        this.refresh();
      }
    });
  }

  delete(flight:any){
    if (window.confirm('are you sure you want to delete this flight? ')){
      this.flightService.deleteFlight(flight.id).subscribe(data =>{
        if(data){
          this.refresh();
        }
      });
    } 
    
  } 

}