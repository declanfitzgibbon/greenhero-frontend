import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTreeDashboardComponent } from './skill-tree-dashboard.component';

describe('SkillTreeDashboardComponent', () => {
  let component: SkillTreeDashboardComponent;
  let fixture: ComponentFixture<SkillTreeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTreeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTreeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
