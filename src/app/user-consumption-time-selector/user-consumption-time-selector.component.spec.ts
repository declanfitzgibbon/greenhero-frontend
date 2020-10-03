import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionTimeSelectorComponent } from './user-consumption-time-selector.component';

describe('UserConsumptionTimeSelectorComponent', () => {
  let component: UserConsumptionTimeSelectorComponent;
  let fixture: ComponentFixture<UserConsumptionTimeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionTimeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionTimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
