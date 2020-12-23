import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NewsArticleService {
  private baseUrl='http://127.0.0.1:8000/api/newsArticles';

  constructor(private http: HttpClient) {}

  getNewsArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getNewsArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteNewsArticle(id: number): Observable<any>{
return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
   createNewsArticle(newsArticle: Object){
     return this.http.post(`${this.baseUrl}`,newsArticle);
   }

   updateNewsArticle(id: number, value: any): Observable<Object>{
     return this.http.put(`${this.baseUrl}/${id}`,value);
   }
}
