import { TestBed } from '@angular/core/testing';

import { SkillTreeService } from './skill-tree.service';

describe('SkillTreeService', () => {
  let service: SkillTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
