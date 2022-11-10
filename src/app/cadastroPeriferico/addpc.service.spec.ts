import { TestBed } from '@angular/core/testing';

import { AddpcService } from './cadastro.service';

describe('AddpcService', () => {
  let service: AddpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
