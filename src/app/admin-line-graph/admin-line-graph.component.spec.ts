import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLineGraphComponent } from './admin-line-graph.component';

describe('AdminLineGraphComponent', () => {
  let component: AdminLineGraphComponent;
  let fixture: ComponentFixture<AdminLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
