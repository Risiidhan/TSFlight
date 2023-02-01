import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../models/flights';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  
  backEndURL = `http://localhost:3000`;
  constructor(private http:HttpClient) { }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${orig}/${dest}`);
  }

  updateFlight(flight: Flights) {
    console.log(flight);
    return this.http.post(`${this.backEndURL}/flights/${flight.id}/update`,flight);
  }


  postFlight(flight: Flights) {
    return this.http.post(`${this.backEndURL}/flights`,flight).subscribe(data =>{
      console.log("data posted to server!")
    })  
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }


  deleteFlight(id: number) {
    return this.http.post(`${this.backEndURL}/flights/${id}/delete`, null);
   } 

  getAllOrigins(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }


}
