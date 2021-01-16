import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IdeLineNumberComponent } from './ide-line-number.component';

describe('IdeLineNumberComponent', () => {
  let component: IdeLineNumberComponent;
  let fixture: ComponentFixture<IdeLineNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeLineNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeLineNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
