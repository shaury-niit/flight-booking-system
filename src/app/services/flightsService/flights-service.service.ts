import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsServiceService {

  constructor(private http:HttpClient) { }


  // Get method to fecth the details 
  getFlightsList(from:string, to:string) {    
    return this.http.get
    (`http://localhost:7000/flightsList?source=${from}&destination=${to}`);         
  }
}
