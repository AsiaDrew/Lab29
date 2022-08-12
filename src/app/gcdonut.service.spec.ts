import { TestBed } from '@angular/core/testing';

import { GCDonutService } from './gcdonut.service';

describe('GCDonutService', () => {
  let service: GCDonutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GCDonutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
