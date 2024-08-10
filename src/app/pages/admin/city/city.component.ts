import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{

  constructor(private rest:RestService){

  }

  cities:any[]=[];

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.rest.getAllcities().subscribe({
      next:(res:any) =>{
        this.cities = res.data;
        this.rest.cities = this.cities;
      },
      error:err =>{

      }
    });
    
  }

  addNew(){
    const data = {
      cityId:0,
      cityName:''

    }
    this.cities.unshift(data);
  }

  bulkUpdateCity(){
    this.rest.postBulk(this.cities).subscribe({
      next:(res:any)=>{
        if(res.result){
          this.getData();
        }
      },
      error:err =>{

      }
    })
  }

}
