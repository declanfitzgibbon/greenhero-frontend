import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattleActionsComponent } from './user-battle-actions.component';

describe('UserBattleActionsComponent', () => {
  let component: UserBattleActionsComponent;
  let fixture: ComponentFixture<UserBattleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBattleActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBattleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
