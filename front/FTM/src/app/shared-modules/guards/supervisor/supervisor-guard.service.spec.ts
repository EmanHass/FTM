import { TestBed } from '@angular/core/testing';

import { SupervisorGuardService } from './supervisor-guard.service';

describe('SupervisorGuardService', () => {
  let service: SupervisorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
