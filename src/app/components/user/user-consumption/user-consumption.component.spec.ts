import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionComponent } from './user-consumption.component';

describe('UserConsumptionComponent', () => {
  let component: UserConsumptionComponent;
  let fixture: ComponentFixture<UserConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
