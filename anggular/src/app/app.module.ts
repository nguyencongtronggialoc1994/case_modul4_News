import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsArticlesListComponent } from './newsArticles/news-articles-list/news-articles-list.component';
import { CreateNewsArticleComponent } from './newsArticles/create-news-article/create-news-article.component';
import { FormsModule } from '@angular/forms';
import { UpdateNewsArticleComponent } from './newsArticles/update-news-article/update-news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsArticlesListComponent,
    CreateNewsArticleComponent,
    UpdateNewsArticleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
