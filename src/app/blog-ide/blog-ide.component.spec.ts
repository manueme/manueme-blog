import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIdeComponent } from './blog-ide.component';

describe('BlogIdeComponent', () => {
  let component: BlogIdeComponent;
  let fixture: ComponentFixture<BlogIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
