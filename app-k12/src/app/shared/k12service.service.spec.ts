import { TestBed } from '@angular/core/testing';

import { K12serviceService } from './k12service.service';

describe('K12serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: K12serviceService = TestBed.get(K12serviceService);
    expect(service).toBeTruthy();
  });
});
