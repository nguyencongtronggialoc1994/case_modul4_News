import {Component, OnInit} from '@angular/core';
import {NewsArticleService} from "../../service/news-article.service";
import {NotificationService} from "../../service/notification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-news-article',
  templateUrl: './delete-news-article.component.html',
  styleUrls: ['./delete-news-article.component.css']
})
export class DeleteNewsArticleComponent implements OnInit {
  id!: number;

  constructor(private newsArticleService: NewsArticleService,
              private notificationService: NotificationService,
              private route: ActivatedRoute,
              private router:Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  showToasterSuccess() {
    this.notificationService.showSuccess("Delete successfully", "Notification !")
  }

  deleteNewsArticle() {
    this.newsArticleService.deleteNewsArticle(this.id).subscribe(
      data=>{
        this.router.navigate(['newsArticle'])
      });
    this.showToasterSuccess();

  }

  backToList() {
    this.router.navigate(['newsArticle'])
  }

}
