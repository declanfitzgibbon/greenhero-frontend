import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlertFeedComponent } from './admin-alert-feed.component';

describe('AdminAlertFeedComponent', () => {
  let component: AdminAlertFeedComponent;
  let fixture: ComponentFixture<AdminAlertFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlertFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlertFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
