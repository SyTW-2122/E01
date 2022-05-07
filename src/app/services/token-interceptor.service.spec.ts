import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TokenInterceptorService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be createdd', () => {
    expect(service).toBeTruthy();
  });
});
