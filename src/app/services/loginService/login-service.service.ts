import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  constructor(private http:HttpClient) {
    
   }


  // Get method to fecth the details 
  getUserData(email:string) {
    return this.http.get
    (`http://localhost:7001/users?email=${email}`);         
  }
}
