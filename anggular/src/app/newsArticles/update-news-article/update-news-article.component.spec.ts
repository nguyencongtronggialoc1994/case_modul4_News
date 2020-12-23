import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsArticleComponent } from './update-news-article.component';

describe('UpdateNewsArticleComponent', () => {
  let component: UpdateNewsArticleComponent;
  let fixture: ComponentFixture<UpdateNewsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
