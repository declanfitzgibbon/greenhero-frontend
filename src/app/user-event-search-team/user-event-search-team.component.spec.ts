import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventSearchTeamComponent } from './user-event-search-team.component';

describe('UserEventSearchTeamComponent', () => {
  let component: UserEventSearchTeamComponent;
  let fixture: ComponentFixture<UserEventSearchTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventSearchTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventSearchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
