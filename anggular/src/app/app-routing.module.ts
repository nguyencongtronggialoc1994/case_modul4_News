import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsArticleService } from './newsArticle.service';
import { CreateNewsArticleComponent } from './newsArticles/create-news-article/create-news-article.component';
import { NewsArticlesListComponent } from './newsArticles/news-articles-list/news-articles-list.component';
import { UpdateNewsArticleComponent } from './newsArticles/update-news-article/update-news-article.component';

const routes: Routes = [
  {path: 'newsArticleList',component: NewsArticlesListComponent},
  {path: 'add',component: CreateNewsArticleComponent},
  {path: 'update/:id', component: UpdateNewsArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
