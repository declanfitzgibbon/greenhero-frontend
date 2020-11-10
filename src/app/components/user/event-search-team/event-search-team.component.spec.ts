import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSearchTeamComponent } from './event-search-team.component';

describe('EventSearchTeamComponent', () => {
  let component: EventSearchTeamComponent;
  let fixture: ComponentFixture<EventSearchTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSearchTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSearchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
