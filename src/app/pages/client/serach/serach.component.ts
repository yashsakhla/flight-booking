import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serach',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './serach.component.html',
  styleUrl: './serach.component.css'
})
export class SerachComponent implements OnInit{

  constructor(private rest:RestService){

  }

  allAirport:any;
  departure:any="";
  arrival:any = "";
  passenger:any = 1;
  date:any;


  ngOnInit(): void {
    this.getAirport();
  }

  getAirport(){
    this.rest.getAllAirport().subscribe(
      {
        next:(res:any)=>{
          this.allAirport = res.data;
        },
        error:err=>{

        }
      }
    )
  }

  searchFlights(){
    const json = {
      departureAirportId : Number(this.departure),
      arrivalAirportId: Number(this.arrival),
      dateOfTravel: this.date
    }
    this.rest.searchFlights(json).subscribe({
      next:(res:any)=>{
        
      },
      error:err => {

      }
    })
  }


}
