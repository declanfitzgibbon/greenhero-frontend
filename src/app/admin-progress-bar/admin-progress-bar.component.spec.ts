import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgressBarComponent } from './admin-progress-bar.component';

describe('AdminProgressBarComponent', () => {
  let component: AdminProgressBarComponent;
  let fixture: ComponentFixture<AdminProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
