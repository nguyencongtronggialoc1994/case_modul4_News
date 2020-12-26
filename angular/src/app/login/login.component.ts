import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  result!: Observable<any>;
  email!:string;
  password!:string;

  constructor(private loginService: LoginService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Login successfully !!", "welcome to page")
  }

  showToasterError(){
    this.notificationService.showError("Something is wrong", "ItSolutionStuff.com")
  }
  login(){
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        this.result = data;
        localStorage.setItem("AccessToken", data.token);
        this.router.navigate(['/newsArticle']);
        this.showToasterSuccess()
      });
  }

}
