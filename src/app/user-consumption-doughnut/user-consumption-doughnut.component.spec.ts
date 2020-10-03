import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionDoughnutComponent } from './user-consumption-doughnut.component';

describe('UserConsumptionDoughnutComponent', () => {
  let component: UserConsumptionDoughnutComponent;
  let fixture: ComponentFixture<UserConsumptionDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
