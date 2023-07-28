import { TestBed } from '@angular/core/testing';

import { ComputeDayService } from './compute-day.service';

describe('ComputeDayService', () => {
  let service: ComputeDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputeDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
