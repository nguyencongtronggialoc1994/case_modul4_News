import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {NotificationService} from "../../service/notification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  id!: number;

  constructor(private categoryService: CategoryService,
              private notifyService: NotificationService,
              private route: ActivatedRoute,
              private router:Router
  ) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Delete successfully", "Notification !")
  }

  deleteCategory() {
    console.log(this.id)
    this.categoryService.deleteCategory(this.id)
      .subscribe(data=>{
        this.router.navigate(['categories'])
      });
    this.showToasterSuccess();
  }

  backToList() {
    this.router.navigate(['categories'])
  }
}
