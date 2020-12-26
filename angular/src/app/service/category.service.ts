import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl ='http://127.0.0.1:8000/api/categories'
  constructor(private http: HttpClient) { }
  getCategory(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  };
  createCategory(category: Object): Observable<Object> {
    var auth_token = localStorage.getItem("AccessToken");
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(`${this.baseUrl}`, category,{headers: reqHeader });
  };

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  };

  deleteCategory(id: number): Observable<any> {
    var auth_token = localStorage.getItem("AccessToken");
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text',headers: reqHeader });
  };

  getCategoryList(): Observable<any> {
    var auth_token = localStorage.getItem("AccessToken");
    var reqHeader= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}`,{headers: reqHeader});
  };
}
