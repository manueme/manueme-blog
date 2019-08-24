import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeConstructorComponent } from './ide-constructor.component';

describe('IdeConstructorComponent', () => {
  let component: IdeConstructorComponent;
  let fixture: ComponentFixture<IdeConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
