import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/loginService/login-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getData: any;
  
  username: string = "";
  password: string = "";

  errorMessage: string = "";

  constructor(private _httpService: LoginServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  loginCall() {
    this._httpService.getUserData(this.username).subscribe((res) => {
      // console.log(res);
      this.getData = res;
      if (this.getData[0]) {
        if (this.getData[0].password === this.password) {
          localStorage.setItem("username",this.username)
          localStorage.setItem("name",this.getData[0].name)          
          this.router.navigate(['/dashboard'], { relativeTo: this.route });
        } else {
          this.errorMessage = "Invalid username or password!"
        }
      } else{
        this.errorMessage = "Username does not exist!"
      }
    });
  }

}
