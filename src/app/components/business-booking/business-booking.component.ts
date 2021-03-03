import { Component, OnInit } from '@angular/core';
import {FlightsServiceService} from '../../services/flightsService/flights-service.service'


@Component({
  selector: 'app-business-booking',
  templateUrl: './business-booking.component.html',
  styleUrls: ['./business-booking.component.css']
})
export class BusinessBookingComponent implements OnInit {

  getData:any;

  constructor(private _httpService:FlightsServiceService) { }

  ngOnInit() {    
      this._httpService.getFlightsList("DEL","BOM").subscribe((res)=>{
               console.log(res);
               this.getData = res;    
    });
    }
}
