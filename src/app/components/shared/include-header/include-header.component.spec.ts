import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncludeHeaderComponent } from './include-header.component';

describe('IncludeHeaderComponent', () => {
  let component: IncludeHeaderComponent;
  let fixture: ComponentFixture<IncludeHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
