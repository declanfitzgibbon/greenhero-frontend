import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattleCanvasComponent } from './user-battle-canvas.component';

describe('UserBattleCanvasComponent', () => {
  let component: UserBattleCanvasComponent;
  let fixture: ComponentFixture<UserBattleCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBattleCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBattleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
