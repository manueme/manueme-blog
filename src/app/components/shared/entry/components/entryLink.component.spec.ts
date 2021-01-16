import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntryLinkComponent } from './entryLink.component';

describe('BlogEntryComponent', () => {
  let component: EntryLinkComponent;
  let fixture: ComponentFixture<EntryLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EntryLinkComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
