import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventSeeTeamComponent } from './user-event-see-team.component';

describe('UserEventSeeTeamComponent', () => {
  let component: UserEventSeeTeamComponent;
  let fixture: ComponentFixture<UserEventSeeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventSeeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventSeeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
