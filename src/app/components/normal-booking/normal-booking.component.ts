import { Component, OnInit } from '@angular/core';
import {FlightsServiceService} from '../../services/flightsService/flights-service.service'

@Component({
  selector: 'app-normal-booking',
  templateUrl: './normal-booking.component.html',
  styleUrls: ['./normal-booking.component.css']
})
export class NormalBookingComponent implements OnInit {

  getData:any;

  constructor(private _httpService:FlightsServiceService) { }

  ngOnInit() {    
      this._httpService.getFlightsList("DEL","BOM").subscribe((res)=>{
               console.log(res);
               this.getData = res;    
    });
    }

    bookFlight(flightData:any){
        localStorage.setItem("bookFlightData",JSON.stringify(flightData));
        window.location.href="/bookFlight"
    }
}
