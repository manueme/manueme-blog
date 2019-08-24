import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineJumpComponent } from './line-jump.component';

describe('LineJumpComponent', () => {
  let component: LineJumpComponent;
  let fixture: ComponentFixture<LineJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
