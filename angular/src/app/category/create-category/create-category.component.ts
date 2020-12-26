import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {NewsArticle} from "../../model/NewsArticle";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Create category successfully","Notification !")
  }
  onSubmit() {
    this.submitted = true;
    this.categoryService.createCategory(this.category).subscribe(
      (data: any) => {
        console.log(data);
        this.category = new Category();
        this.router.navigate(['/categories']);
      },
      (error: any) => console.log(error)
    );
    this.showToasterSuccess();
  }


}
