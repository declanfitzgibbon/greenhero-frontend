import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattleComponent } from './user-battle.component';

describe('UserBattleComponent', () => {
  let component: UserBattleComponent;
  let fixture: ComponentFixture<UserBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
