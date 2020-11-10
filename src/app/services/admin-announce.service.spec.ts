import { TestBed } from '@angular/core/testing';

import { AdminAnnounceService } from './admin-announce.service';

describe('AdminAnnounceService', () => {
  let service: AdminAnnounceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAnnounceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
