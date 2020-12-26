import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewsArticleComponent } from './search-news-article.component';

describe('SearchNewsArticleComponent', () => {
  let component: SearchNewsArticleComponent;
  let fixture: ComponentFixture<SearchNewsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNewsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
