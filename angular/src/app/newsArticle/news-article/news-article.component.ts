import {Router} from '@angular/router';
import {NewsArticleService} from '../../service/news-article.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NewsArticle} from "../../model/NewsArticle";
import {NotificationService} from "../../service/notification.service";


@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  newsArticles!: Observable<NewsArticle[]>;

  // token!: string;

  constructor(
    private newsArticleService: NewsArticleService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.newsArticles =this.newsArticleService.getNewsArticleList()
  }

  showToasterError() {
    this.notificationService.showError("Please login before accessing", "Notification !");
  }

  deleteNewsArticle(id: number) {
    if (localStorage.getItem('AccessToken')) {
      this.router.navigate(['delete', id]);
    } else {
      this.showToasterError();
    }
  }

  newsArticleDetail(id: number) {
    if (localStorage.getItem('AccessToken')) {
      this.router.navigate(['newsArticleDetails', id])
    } else {
      this.showToasterError();

    }
  }

  updateNewsArticle(id: number) {
    if (localStorage.getItem('AccessToken')) {
      this.router.navigate(['updateNewsArticle', id])
    } else {
      this.showToasterError();
    }
  }

  searchNewsArticle(data: any) {
    console.log(data)
    this.newsArticles = this.newsArticleService.search(data)
  }
}
