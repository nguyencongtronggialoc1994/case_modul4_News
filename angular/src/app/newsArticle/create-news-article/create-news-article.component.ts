import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/model/NewsArticle';
import { NewsArticleService } from 'src/app/service/news-article.service';
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-create-news-article',
  templateUrl: './create-news-article.component.html',
  styleUrls: ['./create-news-article.component.css'],
})
export class CreateNewsArticleComponent implements OnInit {
  newsArticle: NewsArticle = new NewsArticle();
  // submitted = false;
  categories!: Observable<Category[]>;
  constructor(
    private newsArticleService: NewsArticleService,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories= this.categoryService.getCategoryList();
    console.log(this.categories)
  }
  showToasterSuccess(){
    this.notificationService.showSuccess("Create news article successfully","Notification!")
  }
  newNewsArticle(): void {
    // this.submitted = false;
    this.newsArticle = new NewsArticle();
  }
  save() {
    this.newsArticleService.createNewsArticle(this.newsArticle).subscribe(
      (data: any) => {
        console.log(data);
        this.newsArticle = new NewsArticle();
        this.gotoList();
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    // this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/newsArticle']);
  }
}
