import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCharacterComponent } from './user-character.component';

describe('UserCharacterComponent', () => {
  let component: UserCharacterComponent;
  let fixture: ComponentFixture<UserCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
