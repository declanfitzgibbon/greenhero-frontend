import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventApplicationsDialogComponent } from './event-applications-dialog.component';

describe('EventApplicationsDialogComponent', () => {
  let component: EventApplicationsDialogComponent;
  let fixture: ComponentFixture<EventApplicationsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventApplicationsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventApplicationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
