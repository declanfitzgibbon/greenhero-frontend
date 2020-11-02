import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGaugeChartComponent } from './user-consumption-gauge.component';

describe('UserGaugeChartComponent', () => {
  let component: UserGaugeChartComponent;
  let fixture: ComponentFixture<UserGaugeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGaugeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
