import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTeamLobbyComponent } from './event-team-lobby.component';

describe('EventTeamLobbyComponent', () => {
  let component: EventTeamLobbyComponent;
  let fixture: ComponentFixture<EventTeamLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTeamLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTeamLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
