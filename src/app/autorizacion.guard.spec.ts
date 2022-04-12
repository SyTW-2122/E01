import { TestBed } from '@angular/core/testing';

import { AutorizacionGuard } from './autorizacion.guard';

describe('AutorizacionGuard', () => {
  let guard: AutorizacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorizacionGuard);
  });
});
