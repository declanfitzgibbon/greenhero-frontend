import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventFirstPageComponent } from './user-event-first-page.component';

describe('UserEventFirstPageComponent', () => {
  let component: UserEventFirstPageComponent;
  let fixture: ComponentFixture<UserEventFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
