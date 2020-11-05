import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTreeActionsComponent } from './skill-tree-actions.component';

describe('SkillTreeActionsComponent', () => {
  let component: SkillTreeActionsComponent;
  let fixture: ComponentFixture<SkillTreeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTreeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTreeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
