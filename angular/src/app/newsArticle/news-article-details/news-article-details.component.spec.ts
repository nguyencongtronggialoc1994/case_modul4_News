import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleDetailsComponent } from './news-article-details.component';

describe('NewsArticleDetailsComponent', () => {
  let component: NewsArticleDetailsComponent;
  let fixture: ComponentFixture<NewsArticleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
