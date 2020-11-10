import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionCardsComponent } from './user-consumption-cards.component';

describe('UserConsumptionCardsComponent', () => {
  let component: UserConsumptionCardsComponent;
  let fixture: ComponentFixture<UserConsumptionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
