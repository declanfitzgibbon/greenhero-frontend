import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimeSelectorComponent } from './admin-time-selector.component';

describe('AdminTimeSelectorComponent', () => {
  let component: AdminTimeSelectorComponent;
  let fixture: ComponentFixture<AdminTimeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
