import { Routes } from '@angular/router';
import { SerachComponent } from './pages/client/serach/serach.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CityComponent } from './pages/admin/city/city.component';
import { AllFlightComponent } from './pages/admin/all-flight/all-flight.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { WebsiteLandingComponent } from './pages/client/website-landing/website-landing.component';
import { MyBookingsComponent } from './pages/client/my-bookings/my-bookings.component';
import { FlightBookingComponent } from './pages/client/flight-booking/flight-booking.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { BookingComponent } from './pages/admin/booking/booking.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'search',
        pathMatch:'full'
    },
    {
        path:'',
        component:WebsiteLandingComponent,
        children:[
            {
                path:"search",
                component:SerachComponent,
                title:'search flights'
            },
            {
                path:"myBookings",
                component:MyBookingsComponent,
                title:'Bookings'
            },
            {
                path:"flightBooking",
                component:FlightBookingComponent,
                title:'Flight Booking'
            },
            {
                path:"search",
                component:SerachComponent,
                title:'search flights'
            },
            {
                path:"new-flight",
                component:NewFlightComponent
            }
        ]
    },
    
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'city',
                component:CityComponent
            },
            {
                path:'allFlights',
                component:AllFlightComponent
            },
            {
                path:'new-flight',
                component:NewFlightComponent
            },
            {
                path:'booking',
                component:BookingComponent
            },
            {
                path:'airport',
                component:AirportComponent
            },
        ]
    }
];
