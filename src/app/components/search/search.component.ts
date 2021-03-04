import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlightsServiceService } from '../../services/flightsService/flights-service.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  from: string = ""
  to: string = ""
  searchDate: any
  getData: any;
  noFlights: boolean = false

  constructor(private _httpService: FlightsServiceService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    let today : any = new Date();
    let dd :any = today.getDate();
    let mm :any = today.getMonth() + 1; //January is 0!
    let yyyy : any= today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("searchDate")?.setAttribute("min", today);
  }

  searchFlights() {
    localStorage.setItem("flightDate", this.searchDate)
    this._httpService.getFlightsList(this.from, this.to).subscribe((res) => {
      console.log(res);
      this.getData = res;
      if (!this.getData.length) {
        this.noFlights = true
      } else {
        this.noFlights = false
      }
    });
  }

  bookFlight(flightData: any) {
    localStorage.setItem("bookFlightData", JSON.stringify(flightData));
    this.router.navigate(['/bookFlight'], { relativeTo: this.route });

  }

}
