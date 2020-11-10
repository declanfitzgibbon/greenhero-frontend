import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionBarsComponent } from './user-consumption-bars.component';

describe('UserConsumptionBarsComponent', () => {
  let component: UserConsumptionBarsComponent;
  let fixture: ComponentFixture<UserConsumptionBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
