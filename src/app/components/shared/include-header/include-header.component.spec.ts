import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeHeaderComponent } from './include-header.component';

describe('IncludeHeaderComponent', () => {
  let component: IncludeHeaderComponent;
  let fixture: ComponentFixture<IncludeHeaderComponent>;

  beforeEach(async(() => {
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
