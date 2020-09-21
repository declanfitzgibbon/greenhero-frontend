import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoughnutComponent } from './admin-doughnut.component';

describe('AdminDoughnutComponent', () => {
  let component: AdminDoughnutComponent;
  let fixture: ComponentFixture<AdminDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
