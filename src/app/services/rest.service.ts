import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {

  cities: any[] = [];

  constructor(private http:HttpClient) {

   }

   getAllcities(){
    return this.http.get('/api/FlightBooking/GetAllCity');
   }

   postBulk(data:any){
    return this.http.post('/api/FlightBooking/AddUpdateBulkCity',data);
   }

   getAllFlights(){
    return this.http.get('/api/FlightBooking/GetAllFlights');
   }

   getAllAirport(){
    return this.http.get('/api/FlightBooking/GetAllAirport');
   }

   searchFlights(data:any){
    return this.http.get(`/api/FlightBooking/SearchFlight?departureAirportId=${data.departureAirportId}&arrivalAirportId=${data.arrivalAirportId}&dateOfTravel=${data.dateOfTravel}`);
   }

   postFlight(body:any){
    return this.http.post('/api/FlightBooking/AddUpdateBulkFlights',body);
   }
}
