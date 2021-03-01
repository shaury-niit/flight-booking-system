import { Component, OnInit } from '@angular/core';
import {FlightsServiceService} from '../services/flights-service.service'

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  getData:any;

  constructor(private _httpService:FlightsServiceService) { }

  ngOnInit() {    
      this._httpService.getFlightsList().subscribe((res)=>{
               console.log(res);
               this.getData = res;    
    });
    }
}
