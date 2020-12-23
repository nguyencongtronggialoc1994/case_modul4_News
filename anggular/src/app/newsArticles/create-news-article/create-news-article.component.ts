import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsArticle } from 'src/app/newsArticle';
import { NewsArticleService } from 'src/app/newsArticle.service';

@Component({
  selector: 'app-create-news-article',
  templateUrl: './create-news-article.component.html',
  styleUrls: ['./create-news-article.component.css']
})
export class CreateNewsArticleComponent implements OnInit {
newsArticles: NewsArticle = new NewsArticle();
submitted= false;

  constructor(private newsArticleService: NewsArticleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newNewsArticle(): void{
this.submitted= false;
this.newsArticles= new NewsArticle;
  }

  save(){
    this.newsArticleService
    .createNewsArticle(this.newsArticles).subscribe((data: any) =>{
      console.log(data);
      this.newsArticles= new NewsArticle;
      this.gotoList();
    },
    (error: any)=> console.log(error))
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/newsArticleList'])
  }

}
