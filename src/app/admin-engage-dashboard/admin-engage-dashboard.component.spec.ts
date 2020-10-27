import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEngageDashboardComponent } from './admin-engage-dashboard.component';

describe('AdminEngageDashboardComponent', () => {
  let component: AdminEngageDashboardComponent;
  let fixture: ComponentFixture<AdminEngageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEngageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEngageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
