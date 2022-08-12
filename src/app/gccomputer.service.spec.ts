import { TestBed } from '@angular/core/testing';

import { GCComputerService } from './gccomputer.service';

describe('GCComputerService', () => {
  let service: GCComputerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GCComputerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
