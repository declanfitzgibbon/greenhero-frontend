import { TestBed } from '@angular/core/testing';

import { BattleTurnService } from './battle-turn.service';

describe('BattleTurnService', () => {
  let service: BattleTurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleTurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
