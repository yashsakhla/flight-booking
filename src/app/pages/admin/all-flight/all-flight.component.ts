import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './all-flight.component.html',
  styleUrl: './all-flight.component.css'
})
export class AllFlightComponent implements OnInit {

  flightList:any[] = [];

  constructor(private rest:RestService){

  }

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights(){
    this.rest.getAllFlights().subscribe({
      next:(res:any) =>{
        this.flightList = res.data;
      },
      error:err =>{

      }
    })
  }
}
