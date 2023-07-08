import { TestBed } from '@angular/core/testing';

import { Ser1Service } from './ser1.service';

describe('Ser1Service', () => {
  let service: Ser1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ser1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
