import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryContainerComponent } from './blog-entry-container.component';

describe('BlogConstructorComponent', () => {
  let component: BlogEntryContainerComponent;
  let fixture: ComponentFixture<BlogEntryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
