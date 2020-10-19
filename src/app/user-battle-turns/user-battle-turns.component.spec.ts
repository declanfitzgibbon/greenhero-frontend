import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattleTurnsComponent } from './user-battle-turns.component';

describe('UserBattleTurnsComponent', () => {
  let component: UserBattleTurnsComponent;
  let fixture: ComponentFixture<UserBattleTurnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBattleTurnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBattleTurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
