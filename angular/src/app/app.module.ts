import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsArticleComponent} from './newsArticle/news-article/news-article.component';
import {FormsModule} from '@angular/forms';
import {CreateNewsArticleComponent} from './newsArticle/create-news-article/create-news-article.component';
import {NewsArticleDetailsComponent} from './newsArticle/news-article-details/news-article-details.component';
import {UpdateNewsArticleComponent} from './newsArticle/update-news-article/update-news-article.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CreateCategoryComponent} from './category/create-category/create-category.component';
import {SearchNewsArticleComponent} from './newsArticle/search-news-article/search-news-article.component';
import { LoginComponent } from './login/login.component';
import {ToastrModule} from "ngx-toastr";
import { DeleteNewsArticleComponent } from './newsArticle/delete-news-article/delete-news-article.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsArticleComponent,
    CreateNewsArticleComponent,
    NewsArticleDetailsComponent,
    UpdateNewsArticleComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    SearchNewsArticleComponent,
    LoginComponent,
    DeleteNewsArticleComponent,
    DeleteCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
