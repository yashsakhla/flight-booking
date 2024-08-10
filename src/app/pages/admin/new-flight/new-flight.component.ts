import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-flight',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit {

  constructor(private rest:RestService, private router:Router){

  }

  airPortList:any[]=[]; 
  cityList:any[]=[];
  departure:any;
  arrival:any;
  flightNo:string="";
  flightId:any;
  flightDate:string="";
  flightDTime:string="";
  flightATime:string="";
  flightSeats:any;
  flightPrice:any;
  flightVenderId:any;


  ngOnInit(): void {
    this.getAiport();
    this.cityList = this.rest.cities ;
  }

  getAiport(){
    this.rest.getAllAirport().subscribe({
      next:(res:any)=>{
        this.airPortList = res.data;
      },  
      error:err =>{

      }
  })
  };

  addNew(){

  }

  saveAll(){
    const json =[{
    flightId: this.flightId,
    flightNumber: this.flightNo,
    departureAirportId: Number(this.departure),
    departureTime: this.flightDTime,
    arrivalAirportId: Number(this.arrival),
    arrivalTime: this.flightATime,
    price: this.flightPrice,
    totalSeats: this.flightSeats,
    flightVendorId: 0,
    travelDate: this.flightDate,
    }]

    this.rest.postFlight(json).subscribe(

      {
        next:(res:any)=>{
          if(res){
            this.router.navigate(['/allFlights'])
          }
        },
        error:err =>{

        }
      }
    )
  }
}
