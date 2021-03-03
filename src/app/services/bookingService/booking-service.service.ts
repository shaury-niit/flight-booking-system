import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }


  // post method to save the bookings
  postBooking(data:any) {    
    return this.http.post<any>('http://localhost:7002/bookings/create', data)
  }

  getBooking(username:any) {    
    return this.http.get(`http://localhost:7002/bookings?email=${username}`)
  }

  deleteBooking(id:any){
    return this.http.delete(`http://localhost:7002/bookings/${id}`)
  }

}
