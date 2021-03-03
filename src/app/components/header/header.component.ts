import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:any
  loggedIn:boolean=false

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")
    
    if(this.name){
      this.loggedIn = true
    }      
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'], { relativeTo: this.route });
  }

}
