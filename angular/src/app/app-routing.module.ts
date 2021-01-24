import { NewsArticleDetailsComponent } from './newsArticle/news-article-details/news-article-details.component';
import { NewsArticleComponent } from './newsArticle/news-article/news-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsArticleComponent } from './newsArticle/create-news-article/create-news-article.component';
import { UpdateNewsArticleComponent } from './newsArticle/update-news-article/update-news-article.component';
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CreateCategoryComponent} from "./category/create-category/create-category.component";
import {SearchNewsArticleComponent} from "./newsArticle/search-news-article/search-news-article.component";
import {LoginComponent} from "./login/login.component";
import {DeleteNewsArticleComponent} from "./newsArticle/delete-news-article/delete-news-article.component";
import {DeleteCategoryComponent} from "./category/delete-category/delete-category.component";

const routes: Routes = [
  {path: 'newsArticle',component: NewsArticleComponent},
  {path: 'addNewsArticle',component: CreateNewsArticleComponent},
  {path: 'newsArticleDetails/:id',component: NewsArticleDetailsComponent},
  {path: 'search/:key',component: SearchNewsArticleComponent},
  {path:'updateNewsArticle/:id',component: UpdateNewsArticleComponent},
  {path:'categories',component: CategoryListComponent},
  {path:'addCategory',component: CreateCategoryComponent},
  {path: 'login', component: LoginComponent },
  {path:'delete/:id',component: DeleteNewsArticleComponent},
  {path:'delete-category/:id',component: DeleteCategoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
