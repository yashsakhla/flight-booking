import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-website-landing',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent implements OnInit {


  loggedUserData:any;
  registerObj:any;
  loginObj:any;

  ngOnInit(): void {
    
  }

  onSave(){

  }

  onLogin(){

  }

  openRegister(){
    
  }

  openLogin(){

  }

  logOff(){

  }

}
