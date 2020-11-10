import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTempFeedComponent } from './admin-temp-feed.component';

describe('AdminTempFeedComponent', () => {
  let component: AdminTempFeedComponent;
  let fixture: ComponentFixture<AdminTempFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTempFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTempFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
