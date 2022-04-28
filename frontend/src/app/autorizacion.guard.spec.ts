import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AutorizacionGuard } from './autorizacion.guard';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AutorizacionGuard', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let guard: AutorizacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    guard = TestBed.inject(AutorizacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
