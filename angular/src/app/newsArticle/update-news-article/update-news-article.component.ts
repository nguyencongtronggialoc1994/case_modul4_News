import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsArticle } from 'src/app/model/NewsArticle';
import { NewsArticleService } from 'src/app/service/news-article.service';
import {NotificationService} from "../../service/notification.service";
import {Observable} from "rxjs";
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-update-news-article',
  templateUrl: './update-news-article.component.html',
  styleUrls: ['./update-news-article.component.css'],
})
export class UpdateNewsArticleComponent implements OnInit {
  id!: number;
  newsArticle!: NewsArticle;
  categories!: Observable<Category[]>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private newsArticleService: NewsArticleService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.newsArticle = new NewsArticle();
    this.categories= this.categoryService.getCategoryList();
    this.id = this.route.snapshot.params['id'];
    this.newsArticleService.getNewsArticle(this.id)
    .subscribe(data=>{
      console.log(data)
      this.newsArticle=data;
    },error=>console.log(error));
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Update successfully","Notification!")
  }
  newNewsArticle(): void {
    this.newsArticle = new NewsArticle();
  }

  onSubmit() {
    this.newsArticleService.updateNewsArticle(this.id,this.newsArticle).subscribe(
      (data: any) => {
        console.log(data);
        this.newsArticle = new NewsArticle();
        this.router.navigate(['/newsArticle']);
      },
      (error: any) => console.log(error)
    );
    this.showToasterSuccess();
  }


}
