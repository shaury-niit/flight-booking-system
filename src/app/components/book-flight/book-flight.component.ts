import { Component, OnInit } from '@angular/core';
import {BookingServiceService} from '../../services/bookingService/booking-service.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  flight: any = {};

  flightDate: any;

  length:any;

  totalPrice:number = 0

  postData:any;

  constructor(private _httpService:BookingServiceService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let flightDate = localStorage.getItem("flightDate");
    this.flightDate = flightDate
    let flightData = localStorage.getItem("bookFlightData");
    console.log('flight data', flightData)
    
    if (flightData){
      this.flight = JSON.parse(flightData);
      this.totalPrice = parseInt(this.flight.price)
    }
  }

  addPassenger() {
    let passengerList = document.getElementById("passengerList");
    let insert = document.getElementsByClassName("passengerDetail")[0].cloneNode(true)
    // passengerList?.appendChild(insert)
    passengerList?.appendChild(
      insert
    )
    this.totalPrice = this.totalPrice + parseInt(this.flight.price)
  }

  confirmBooking(){
    this.length  = document.getElementById("passengerList")?.childElementCount;    
    let passengerList = [];
    for(let i=0; i< this.length ; i++){            
      passengerList.push(
        {
          firstName: (<HTMLInputElement>document.getElementsByName("firstName")[i]).value,
          lastName: (<HTMLInputElement>document.getElementsByName("lastName")[i]).value,
          dob: (<HTMLInputElement>document.getElementsByName("dob")[i]).value,
          contact: (<HTMLInputElement>document.getElementsByName("contact")[i]).value
        }
      )
    }

    this.postData = {
      "email": localStorage.getItem("username"),
      "flightId": this.flight.flightId,
      "source": this.flight.source,
      "destination": this.flight.destination,
      "departure": this.flight.departure,
      "arrival": this.flight.arrival,
      "imageUrl": this.flight.imageUrl,
      "price": this.totalPrice,
      "date":this.flightDate,
      "passengers": passengerList
    }
    
    this._httpService.postBooking(this.postData).subscribe((res) => {
      if(res){
      this.router.navigate(['/bookingConfirmation', this.postData], { relativeTo: this.route });
      localStorage.setItem("bookingConfirmation",JSON.stringify(res));
    }
    });
  }

}
