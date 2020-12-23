import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsArticle } from 'src/app/newsArticle';
import { NewsArticleService } from 'src/app/newsArticle.service';

@Component({
  selector: 'app-news-articles-list',
  templateUrl: './news-articles-list.component.html',
  styleUrls: ['./news-articles-list.component.css']
})
export class NewsArticlesListComponent implements OnInit {
newsArticles!: Observable<NewsArticle[]>;
  constructor(private newsArtcleService: NewsArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.newsArticles=this.newsArtcleService.getNewsArticleList();
  }

  deleteNewsArticle(id: number){
this.newsArtcleService.deleteNewsArticle(id)
.subscribe(
  (  data: any) => {
    console.log(data);
    this.reloadData();
  },
  (  error: any) => console.log(error)
)
  }

}
