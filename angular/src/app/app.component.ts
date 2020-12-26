import {Component, Input} from '@angular/core';
import {NotificationService} from "./service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';

  constructor(private notificationService: NotificationService,
              private route: Router
  ) {
  }


  showToasterError(){
    this.notificationService.showError("Please login before accessing","Notification !")
  }
  goToAddNewsArticle(){
    if (!localStorage.getItem('AccessToken')){
      this.showToasterError()
    } else {
      this.route.navigate(['/addNewsArticle']);
    }
  }
  goToCategoryList(){
    if (!localStorage.getItem('AccessToken')){
      this.showToasterError()
    } else {
      this.route.navigate(['/categories']);
    }
  }
  goToAddCategory(){
    if (!localStorage.getItem('AccessToken')){
      this.showToasterError()
    } else {
      this.route.navigate(['/addCategory']);
    }
  }
  logout(){
    localStorage.removeItem('AccessToken');
    this.route.navigate(['/login']);
  }
}
