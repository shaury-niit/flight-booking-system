import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:boolean=false
  name:any 

  constructor( private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {   
      this.name = localStorage.getItem("name") 
        if (event.url === '/login') {          
          this.login= false;
        } else if(event.url === '/dashboard' || event.url === '/bookFlight' || event.url === '/analytics' || event.url === '/bookingConfirmation' || event.url === '/myBookings' || event.url === '/feedback' ){
          this.login= true;
        }
    });
   }

  ngOnInit(): void {
              
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"], { relativeTo: this.route });
  }

}
