import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarsComponent } from './admin-bars.component';

describe('AdminBarsComponent', () => {
  let component: AdminBarsComponent;
  let fixture: ComponentFixture<AdminBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
