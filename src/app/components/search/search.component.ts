import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlightsServiceService } from '../../services/flightsService/flights-service.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit { 

  from:string=""
  to:string=""
  searchDate:any
  getData: any;
  noFlights:boolean=false

  constructor(private _httpService: FlightsServiceService, private router:Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  searchFlights() {
    localStorage.setItem("flightDate", this.searchDate)
    this._httpService.getFlightsList(this.from, this.to).subscribe((res) => {
      console.log(res);
      this.getData = res;
      if(!this.getData.length){
        this.noFlights=true
      }else{
        this.noFlights=false
      }
    });
  }

  bookFlight(flightData:any){
    localStorage.setItem("bookFlightData",JSON.stringify(flightData));
    this.router.navigate(['/bookFlight'], { relativeTo: this.route });    
    
}

}
