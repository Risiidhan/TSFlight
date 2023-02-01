import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fService:FlightsService) { }

  selectedOrigin:any;
  selectedDestination: any;
  flights:any;
  filteredOriginList: any[]=[];
  filteredDestinationList: any[]=[];

  ngOnInit(): void {
    this.fService.getAllOrigins().subscribe(data =>{
      this.filteredOriginList = data;
    }); 

    this.fService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
    });
  }


  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.fService.getFlights(origin, destination).subscribe(data =>{
      this.flights = data;
    })
  }
}
