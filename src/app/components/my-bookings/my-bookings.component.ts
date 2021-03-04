import { Component, OnInit } from '@angular/core';
import {BookingServiceService} from '../../services/bookingService/booking-service.service'


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings:any

  constructor(private _httpService:BookingServiceService) { }

  username:any

  nodata:boolean=false

  confirmModal:boolean=false

  deleteId:any

  getAllBookings(user:any){
    this._httpService.getBooking(user).subscribe((res) => {      
      this.bookings = res;  
      if(!this.bookings.length)    {
        this.nodata = true
      }
    });
  }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.getAllBookings(this.username)
  }

  closeModal(){
    this.confirmModal= false
  }

  confirmCancel(){
    this._httpService.deleteBooking(this.deleteId).subscribe((res) => {
      this.getAllBookings(this.username)
    });
    this.confirmModal= false
  }

  cancelBooking(id:any){ 
    this.confirmModal= true  
    this.deleteId = id;         
  }

}
