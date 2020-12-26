import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-news-article',
  templateUrl: './search-news-article.component.html',
  styleUrls: ['./search-news-article.component.css']
})
export class SearchNewsArticleComponent implements OnInit {
  @Output() data = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {

  }

  getKeyword(event: any){
    let input = event.target.value;
    this.data.emit(input);
  }

}
