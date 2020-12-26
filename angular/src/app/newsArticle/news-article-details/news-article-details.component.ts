import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NewsArticle} from 'src/app/model/NewsArticle';
import {NewsArticleService} from 'src/app/service/news-article.service';
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-news-article-details',
  templateUrl: './news-article-details.component.html',
  styleUrls: ['./news-article-details.component.css']
})
export class NewsArticleDetailsComponent implements OnInit {
  id!: number;
  newsArticle!: NewsArticle;
  // category!: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router, private newsArticleService: NewsArticleService) {
  }

  ngOnInit(): void {
    this.newsArticle = new NewsArticle();
    // this.category = new Category();

    this.id = this.route.snapshot.params['id'];

    this.newsArticleService.getNewsArticle(this.id)
      .subscribe(data => {
        console.log(data);
        this.newsArticle = data;
      }, error => console.log(error));

  }

  list() {
    this.router.navigate(['newsArticle']);
  }
}
