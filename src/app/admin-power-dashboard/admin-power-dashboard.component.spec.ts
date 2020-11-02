import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPowerDashboardComponent } from './admin-power-dashboard.component';

describe('AdminPowerDashboardComponent', () => {
  let component: AdminPowerDashboardComponent;
  let fixture: ComponentFixture<AdminPowerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPowerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPowerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
