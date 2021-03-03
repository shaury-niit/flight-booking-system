import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  getData:any
  flight:any

  constructor() { }

  ngOnInit(): void {
    this.getData = localStorage.getItem("bookingConfirmation")
    this.flight = JSON.parse(this.getData)
  }

}
