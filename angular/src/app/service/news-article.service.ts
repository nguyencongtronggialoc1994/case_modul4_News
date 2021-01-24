import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {
  private baseUrl = 'http://127.0.0.1:8000/api/newsArticles'

  constructor(private http: HttpClient) {
  }

  getNewsArticle(id: number): Observable<any> {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + auth_token
    })
    return this.http.get(`${this.baseUrl}/${id}`,{headers: reqHeader});
  };

  search(key: string): Observable<any> {
    var auth_token =localStorage.getItem('AccessToken');
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    })
    return this.http.get(`${this.baseUrl}/search/${key}`,{headers: reqHeader});
  }

  createNewsArticle(newsArticle: Object): Observable<Object> {
    var auth_token =localStorage.getItem('AccessToken');
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(`${this.baseUrl}`, newsArticle,{headers: reqHeader});
  };

  updateNewsArticle(id: number, value: any): Observable<Object> {
    var auth_token =localStorage.getItem('AccessToken');
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(`${this.baseUrl}/${id}`, value,{headers: reqHeader});
  };

  deleteNewsArticle(id: number): Observable<any> {
    var auth_token =localStorage.getItem('AccessToken');
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text',headers: reqHeader});
  };

  getNewsArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  };
}
