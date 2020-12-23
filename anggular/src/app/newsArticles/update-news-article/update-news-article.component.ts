import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { NewsArticle } from 'src/app/newsArticle';
import { NewsArticleService } from 'src/app/newsArticle.service';

@Component({
  selector: 'app-update-news-article',
  templateUrl: './update-news-article.component.html',
  styleUrls: ['./update-news-article.component.css']
})
export class UpdateNewsArticleComponent implements OnInit {
id!: number;
newsArticles!: NewsArticle;
  constructor(private route: ActivatedRoute, private router: Router, private newsArticleService: NewsArticleService) { }

  ngOnInit(): void {
    this.newsArticles= new NewsArticle();
    this.id=this.route.snapshot.params['id'];

    this.newsArticleService.getNewsArticle(this.id)
    .subscribe(data => {
      console.log(data)
      this.newsArticles=data
    }, error => console.log(error));
  }

  updateNewsArticle(){
    this.newsArticleService.updateNewsArticle(this.id, this.newsArticles)
    .subscribe(data => {
      console.log(data)
      this.newsArticles= new NewsArticle();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateNewsArticle()
  }

  gotoList(){
  this.router.navigate(['/newsArticle'])
  }

}
