import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NewsArticle} from "../../model/NewsArticle";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories!: Observable<Category[]>;

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }
  deleteCategory(id: number){
      this.router.navigate(['delete-category', id])
    }


}
