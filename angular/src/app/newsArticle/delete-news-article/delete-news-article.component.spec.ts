import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsArticleComponent } from './delete-news-article.component';

describe('DeleteNewsArticleComponent', () => {
  let component: DeleteNewsArticleComponent;
  let fixture: ComponentFixture<DeleteNewsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
