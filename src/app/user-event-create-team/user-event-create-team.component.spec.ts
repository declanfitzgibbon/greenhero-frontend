import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventCreateTeamComponent } from './user-event-create-team.component';

describe('UserEventCreateTeamComponent', () => {
  let component: UserEventCreateTeamComponent;
  let fixture: ComponentFixture<UserEventCreateTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventCreateTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventCreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
